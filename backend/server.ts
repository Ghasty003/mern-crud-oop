import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


class Server {
    private app: Application;
    private connectionString: string;

    public constructor() {
        this.app = express();
        dotenv.config();

        this.connectionString = process.env.DB_URI;
    }

    private async connect() {
        try {
            mongoose.connect(this.connectionString);
        } catch (error) {
            console.log("Error connecting to database", (<Error>error).message)
        }
    }

    private listen() {
        this.app.listen(3000, () => {
            console.log("server started on port 3000");
        })
    }

    public init() {
        this.connect();
        this.listen();
    }
}

const server = new Server();

server.init();