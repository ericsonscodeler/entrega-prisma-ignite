import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({
            message: "Token is missing!"
        })
    }

    const [, token] = authHeader.split(" ")

    try {
      const {sub} = verify(token, "8f845bf7acdee0acc2mg5021ea07aaf1") as IPayload
      
      request.id_deliveryman = sub
      return next()
    } catch(err){
        return response.status(401).json({
            message: "Invalid Token!"
        })
    }
}