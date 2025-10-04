import {config} from 'dotenv'
config()
import { PrismaClient } from "./prisma/generated/client.js";const prisma = new PrismaClient();


export {prisma}