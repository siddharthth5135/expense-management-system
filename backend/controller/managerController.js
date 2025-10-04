import jwt from "jsonwebtoken";
import { prisma } from "../config.js";
import bcrypt from "bcryptjs";

//get all submited expenses
export const getAllSubmittedExpense = async (req, res) => {
  try {

    const {userId} = req.user

    const expenses = await prisma.expense.findMany({
      where: {
        user: {
          managerId: Number(userId),
        },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        company: { select: { id: true, name: true } },
      },
    });

    if (!expenses.length) {
      return res
        .status(404)
        .json({ message: "No expenses found for this manager" ,isSuccess : false});
    }

    res.json({ managerId, count: expenses.length, expenses ,isSuccess : true});
  } 
  catch (error) {
    console.error("Error fetching expenses by manager:", error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

export const updateExpenseStatus = async (req, res) => {
  try {

  } 
  catch (error) {
    
  }
};
