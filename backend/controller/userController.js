import jwt from "jsonwebtoken";
import { prisma } from "../config.js";
import bcrypt from "bcryptjs";


export const createAdmin = async(req,res)=>{
    try {
    const { name, email, password, companyName, country, currency } =
      req.body;

    const role = "ADMIN"

    //basic validation
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Name, email, password, and role are required" });
    }

    //check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let companyId = null;

    //check if companyName is provided
    if (companyName) {
      const existingCompany = await prisma.company.findUnique({
        where: { name: companyName },
      });

      if (existingCompany) {
        return res.status(400).json({message:"Company is already created with admin",isSuccess : false})

      } else {
        //create new company
        const newCompany = await prisma.company.create({
          data: { name: companyName, country, currency },
        });
        companyId = newCompany.id;
      }
    }

    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        companyId,
        managerId: null, //initially no manager assign
        //ruleApprovers will be empty initially
      },
    });

    //create jwt token
    const token = jwt.sign(
      {
        userId : user.id,email : user.email,role : user.role,companyId: user.companyId
      }
      ,process.env.JWT_SECRET
      ,{expiresIn : '7d'}
    )

     res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Detailed error handling
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ message: "Email or company name already exists" });
    }

    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role,managerId,companyId} =
      req.body;

    //basic validation
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Name, email, password, and role are required" });
    }

    //check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        companyId,
        managerId: managerId, //initially no manager assign
        //ruleApprovers will be empty initially
      },
    });

    //create jwt token
    const token = jwt.sign({userId : user.id,email : user.email,role : user.role,companyId : user.companyId},process.env.JWT_SECRET,{expiresIn : '7d'})

     res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Detailed error handling
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ message: "Email or company name already exists" });
    }

    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //basic validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    //find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      //   include: { company: true, ruleApprovers: true } // optional, include relations if needed
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //Generate JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role ,email: user.email,companyId : user.companyId},
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    //return user info without password
    const { password: _, ...userData } = user;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userData,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

export const checkUserExist = async(req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    //find email is exist or not
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) 
        return res.status(404).json({ message: "User not found" });

    //user exist 
    return res.status(200).json({message : "User Exist",isSuccess : true})

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const resetPassword = async (req, res) => {
  try {


    const {email,newPassword, confirmPassword } = req.body;

    //basic validation
    if (!email || !newPassword || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Email, new password and confirm password are required" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    //Compare with old password
    const isSameAsOld = await bcrypt.compare(newPassword, user.password);
    if (isSameAsOld) {
      return res
        .status(400)
        .json({ message: "New password cannot be same as old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    //Update password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password updated successfully" });
    
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUser = async(req,res)=>{
  try {
      const users = await prisma.user.findMany(
        {include: 
          { company: true, ruleApprovers: true, expenses: true },
        }
      );

   res.status(200).json({ message: "Users fetched successfully", users ,isSuccess: true});
  
  } 
  catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}