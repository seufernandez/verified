import express from 'express';
import { getMessageController, createMessageController, updateMessageController, deleteMessageController, replyToMessageController } from '../controllers/message.controller';
import { mockedAuthMiddleware } from '../middlewares/auth.middleware';
import { CreateMessageBodySchema, ReplyMessageBodySchema, UpdateMessageBodySchema } from '../validators/message/message.validator';
import { validateBody } from '../middlewares/bodyValidation.middleware';

const router = express.Router();

router.use(mockedAuthMiddleware);

router.get('/:id', getMessageController);
router.post('/', validateBody(CreateMessageBodySchema) ,createMessageController);
router.put('/:id', validateBody(UpdateMessageBodySchema), updateMessageController);
router.delete('/:id', deleteMessageController);
router.post('/reply', validateBody(ReplyMessageBodySchema), replyToMessageController);

export default router;
