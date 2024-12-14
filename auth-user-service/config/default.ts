import dotenv from 'dotenv';

dotenv.config();

export default { 
    port: process.env.PORT || "3001" as string,
	host:  process.env.HOST || "localhost" as string,
	NODE_ENV: process.env.NODE_ENV || "development" as string,
	MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/bankmore-auth-user" as string,
	JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "GHSDJSHJASKJJASIKAJSAJSAHS" as string,
	JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES || "15m" as string,
	JWT_REFRESH_SECRET: process.env.JWT_REFRESH__SECRET || "fghjdshsgdhjksdhgsdss" as string,
	JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES || "7d" as string,
	JWT_COOKIES_EXPIRES: Number(process.env.JWT_COOKIES_EXPIRES) || 7 as number
}