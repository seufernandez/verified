import { z } from "zod";
import { CreateMessageSchema, MessageSchema, ReplyMessageSchema, UpdateMessageSchema } from "../validators/message/message.validator";

export type IMessage = z.infer<typeof MessageSchema>;

export type ICreateMessage = z.infer<typeof CreateMessageSchema>;
export type IUpdateMessage = z.infer<typeof UpdateMessageSchema>;
export type IReplyMessage = z.infer<typeof ReplyMessageSchema>;
