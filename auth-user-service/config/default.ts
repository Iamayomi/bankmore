import dotenv from 'dotenv';

dotenv.config();

export default { 
    port: process.env.PORT || "3001" as string,
	host:  process.env.HOST || "localhost" as string,
	NODE_ENV: process.env.NODE_ENV || "development" as string,
	MONGO_URL: process.env.MONGO_URL || "mongodb://mongo:27017/bankmore" as string,
}