import dotenv from 'dotenv';

dotenv.config();

export default { 
    port: process.env.PORT || "3001" as string,
	host:  process.env.HOST || "localhost" as string,
	NODE_ENV: process.env.NODE_ENV || "development" as string,
	MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/bankmore-auth-user" as string,
}