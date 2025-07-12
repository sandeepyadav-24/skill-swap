import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@/generated/prisma"; // or relative path
import { z } from "zod";
const prisma = new PrismaClient();

// Define a schema for input validation
const userSchema = z.object({
  email: z.string().min(1, "username is required").email("Invalid Email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = userSchema.parse(body);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existingUser) {
    return NextResponse.json(
      { user: null, message: "User already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: email,
      email: email,
      password: hashedPassword,
    },
  });

  const { password: newUserPassword, ...rest } = newUser;

  return NextResponse.json(
    {
      user: rest,
      message: "User created successfully",
    },
    { status: 201 }
  );
}
