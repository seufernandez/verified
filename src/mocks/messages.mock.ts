import { IMessage } from '../models/message.model';

export const mockedMessages: IMessage[] = [
  {
    id: 'msg-id-1',
    content: 'Hello, user-id-2!',
    owner_id: 'user-id-1',
    created_at: Date.now(),
    updated_at: null,
    deleted_at: null,
		receiver_id: 'user-id-2',
		reply_to_message_id: null
  },
  {
    id: 'msg-id-2',
    content: 'Hi, user-id-1!',
    owner_id: 'user-id-2',
    created_at: Date.now(),
    updated_at: null,
    deleted_at: null,
		receiver_id: 'user-id-1',
		reply_to_message_id: 'msg-id-1'
  },
];
