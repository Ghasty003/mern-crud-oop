import { Schema, model } from "mongoose";

class TodoModel {

    public constructor() {}

    public static schema() {
        const todoSchema = new Schema({
            desc: {
                type: String,
                required: true
            }
        }, { timestamps: true })

        return todoSchema;
    }
}

export default model("todos", TodoModel.schema());