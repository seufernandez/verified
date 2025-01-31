import { Request, Response, NextFunction } from 'express';
import { getMessage, createMessage, updateMessage, deleteMessage, replyToMessage } from '../services/message.service';
import { assertHasUser } from '../utils/reqUserCheck';

// ** assertHasUser(req) is just double validation for security/redundancy

export const getMessageController = (req: Request, res: Response, next: NextFunction) => {
	assertHasUser(req);
	try {
    const { id } = req.params;
    const userId = req.user.id;
    const message = getMessage(id, userId);
    res.json(message);
  } catch (error) {
    next(error);
  }
};

export const createMessageController = (req: Request, res: Response, next: NextFunction) => {
	assertHasUser(req);
	try {
    const data = req.body;
    const userId = req.user.id;
    const message = createMessage(data, userId);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

export const updateMessageController = (req: Request, res: Response, next: NextFunction) => {
	assertHasUser(req);
	try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    const message = updateMessage(id, content, userId);
    res.json(message);
  } catch (error) {
    next(error);
  }
};

export const deleteMessageController = (req: Request, res: Response, next: NextFunction) => {
	assertHasUser(req);
	try {
    const { id } = req.params;
    const userId = req.user.id;
    const message = deleteMessage(id, userId);
    res.json(message);
  } catch (error) {
    next(error);
  }
};

export const replyToMessageController = (req: Request, res: Response, next: NextFunction) => {
	assertHasUser(req);
	try {
    const data = req.body;
    const userId = req.user.id;
    const message = replyToMessage(data, userId);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};
