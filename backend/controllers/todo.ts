import { Request, Response } from "express";
import Todo from "../models/todo";

class TodoController {

    public constructor() {}

    public static async create(req: Request, res: Response) {
        try {
            const { desc } = req.body;

            const newTodo = new Todo({
                desc
            });

            const todo = await newTodo.save();

            // const todo = await Todo.create({ desc });

            res.status(200).json(todo);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public static async find(req: Request, res: Response) {
        try {
            const todos = await Todo.find({});

            res.status(200).json(todos);
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default TodoController;