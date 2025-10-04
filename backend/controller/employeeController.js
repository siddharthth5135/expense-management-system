import { prisma } from "../config.js";
// create an expense

export const createExpense = async (req, res) => {
  try {

    const {userId,companyId} = req.user

    const {amount,currency,category,description,date,
    isSubmited} = req.body;

    // Validation
    if (!userId || !companyId || !amount || !currency || !category || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    //Create Expense
    const expense = await prisma.expense.create({
      data: {
        userId,
        companyId,
        amount: parseFloat(amount),
        currency,
        category,
        description: description || "",
        date: new Date(date),
        status: isSubmited  ? 'submitted' : "draft",
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        company: { select: { id: true, name: true } },
      },
    });

    res.status(201).json({ message: "Expense created successfully", expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create expense" });
  }
};

