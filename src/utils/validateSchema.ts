import { z } from "zod";
import { CustomError } from "../errors/message.errors";

export const validateSchema = <T>(schema: z.Schema<T>, data: unknown): T => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(e => `${e.path.join('.')} - ${e.message}`).join(', ');
      throw new CustomError(`Invalid data: ${errorMessages}`, 400);
    }
    throw error;
  }
};
