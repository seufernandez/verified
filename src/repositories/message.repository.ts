import { mockedMessages } from '../mocks/messages.mock';
import { ICreateMessage, IMessage } from '../models/message.model';
import { v4 as uuidv4 } from 'uuid';

const messages: IMessage[] = [...mockedMessages];

export const getMessageById = (id: string): IMessage | undefined => {
  return messages.find(message => message.id === id && !message.deleted_at);
};

export const createMessage = (message: ICreateMessage): IMessage => {
  const newMessage: IMessage = {
    ...message,
    id: uuidv4(),
    created_at: Date.now(),
    updated_at: null,
    deleted_at: null,
  };
  messages.push(newMessage);
  return newMessage;
};

export const updateMessage = (id: string, content: string): IMessage | undefined => {
  const message = messages.find(message => message.id === id);
  if (message) {
    message.content = content;
    message.updated_at = Date.now();
  }
  return message;
};

export const deleteMessage = (id: string): IMessage | undefined => {
  const message = messages.find(message => message.id === id);
  if (message) {
    message.deleted_at = Date.now();
  }
  return message;
};

export const getMessagesByUser = (userId: string): IMessage[] => {
  return messages.filter(message => (message.owner_id === userId || message.receiver_id === userId) && !message.deleted_at);
};
