import { config } from 'dotenv';

config()

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

export {
    PORT, MONGO_URL
}