import { z } from 'zod';
import { IMessage, IReplyMessage } from '../models/message.model';
import {
    getMessageById,
    createMessage as createMessageRepo,
    updateMessage as updateMessageRepo,
    deleteMessage as deleteMessageRepo
} from '../repositories/message.repository';
import {
    CreateMessageSchema,
    ReplyMessageSchema
} from '../validators/message/message.validator';
import {
    UnauthorizedError,
    MessageNotFoundError,
    BadRequestError
} from '../errors/message.errors';
import { validateSchema } from '../utils/validateSchema';

export const getMessage = (id: string, userId: string): IMessage => {
    const message = getMessageById(id);

    if (!message) {
        throw new MessageNotFoundError();
    }

    if (message.owner_id !== userId && message.receiver_id !== userId) {
        throw new UnauthorizedError('Access denied to this message');
    }

    return message;
};

export const createMessage = (
    data: Omit<z.input<typeof CreateMessageSchema>, 'owner_id'>,
    ownerId: string
): IMessage => {
    const validatedData = validateSchema(CreateMessageSchema, {
        ...data,
        owner_id: ownerId,
				reply_to_message_id: null
    });

    return createMessageRepo(validatedData);
};

export const updateMessage = (id: string, content: string, userId: string) => {
	if (!content) {
		throw new BadRequestError('Message content is required for update');
	}

	const message = getMessageById(id);

	if (!message) {
			throw new MessageNotFoundError();
	}
	if (message.owner_id !== userId) {
			throw new UnauthorizedError('Only the message owner can update it');
	}


	return updateMessageRepo(id, content);
};

export const deleteMessage = (id: string, userId: string) => {
    const message = getMessageById(id);

    if (!message) {
        throw new MessageNotFoundError();
    }

    if (message.owner_id !== userId) {
        throw new UnauthorizedError('Only the message owner can delete it');
    }

    return deleteMessageRepo(id);
};

export const replyToMessage = (
  data: IReplyMessage,
  ownerId: string
) => {
  const validatedData = validateSchema(ReplyMessageSchema, {
    ...data,
    owner_id: ownerId,
  });
  const originalMessage = getMessageById(validatedData.reply_to_message_id);

  if (!originalMessage) {
    throw new MessageNotFoundError('Original message not found');
  }

  if (
    originalMessage.receiver_id !== ownerId &&
    originalMessage.owner_id !== ownerId
  ) {
    throw new BadRequestError("You can only reply to messages addressed to you or owned by you.");
  }

	const reply = {
			...validatedData,
			reply_to_message_id: originalMessage.id,
			receiver_id: originalMessage.owner_id
		}
		return createMessageRepo(reply);
};

