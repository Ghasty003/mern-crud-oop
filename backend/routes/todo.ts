import { Router, Request, Response } from "express";
import TodoController from "../controllers/todo";

class TodoRoutes {
    public static router: Router;

    public constructor() {}

    public static getInstance() {
        TodoRoutes.router = Router();

        return this;
    }

    public static get(route: string, cb: any) {
        TodoRoutes.router.get(route, cb);

        return this;
    }

    public static post(route: string, cb: any) {
        TodoRoutes.router.post(route, cb);

        return this;
    }
}


TodoRoutes.getInstance().get("/", TodoController.find)
.post("/", TodoController.create);


export default TodoRoutes;