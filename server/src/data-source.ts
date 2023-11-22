import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "oracle",
host: "localhost",
username: process.env.DB_USER,
password: process.env.DB_PASSWORD,
port: 1524,
sid: "xe.oracle.docker",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
