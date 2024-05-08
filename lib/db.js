import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // 데이터베이스 이용 객체 생성

export default prisma;