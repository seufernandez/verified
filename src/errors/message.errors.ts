export class CustomError extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message = 'User is not the owner of the message') {
    super(message, 403);
  }
}

export class MessageNotFoundError extends CustomError {
  constructor(message = 'Message not found') {
    super(message, 404);
  }
}

export class BadRequestError extends CustomError {
  constructor(message = 'Invalid request') {
    super(message, 400);
  }
}
