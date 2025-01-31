import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string(),
  content: z.string().min(1),
  owner_id: z.string(),
  receiver_id: z.string(),
  reply_to_message_id: z.string().nullable(),
  created_at: z.number(),
  updated_at: z.number().nullable(),
  deleted_at: z.number().nullable(),
}).strip();

export const CreateMessageSchema = z.object({
  content: z.string({
    required_error: "Content is required.",
    invalid_type_error: "Content must be a string."
  }).min(1, { message: "Content cannot be empty." }),

  owner_id: z.string({
    required_error: "Owner ID is required.",
    invalid_type_error: "Owner ID must be a string."
  }),

  receiver_id: z.string({
    required_error: "Receiver ID is required.",
    invalid_type_error: "Receiver ID must be a string."
  }),

	reply_to_message_id: z.string().nullable(),
}).strip();

export const CreateMessageBodySchema = CreateMessageSchema.omit({
		owner_id: true,
		reply_to_message_id: true })


export const UpdateMessageSchema = z.object({
  content: z.string({
    required_error: "Content is required.",
    invalid_type_error: "Content must be a string."
  }).min(1, { message: "Content cannot be empty." }),
}).strip();

export const UpdateMessageBodySchema = UpdateMessageSchema

export const ReplyMessageSchema = z.object({
  content: z.string({
    required_error: "Content is required.",
    invalid_type_error: "Content must be a string."
  }).min(1, { message: "Content cannot be empty." }),

  owner_id: z.string({
    required_error: "Owner ID is required.",
    invalid_type_error: "Owner ID must be a string."
  }),

  reply_to_message_id: z.string({
    required_error: "Reply to message ID is required.",
    invalid_type_error: "Reply to message ID must be a string."
  }),
}).strip();
export const ReplyMessageBodySchema = ReplyMessageSchema.omit({ owner_id: true })


