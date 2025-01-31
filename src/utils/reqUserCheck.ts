import { Request } from "express";

type RequestWithUser = Request & {user: { id: string }};
export function assertHasUser(req: Request): asserts req is RequestWithUser {
    if (!( "user" in req)) {
        throw new Error("Request object without user found unexpectedly");
    }
}
