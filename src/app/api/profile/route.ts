import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// POST: Create or update profile
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const { userId, name, profilePhoto, location, availability, isPublic } = body;
  if (!userId || !name) {
    return NextResponse.json(
      { error: "userId and name are required" },
      { status: 400 }
    );
  }
  try {
    // Find user
    const userAc = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!userAc) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log("userId", userAc.id);
    console.log("name", name);
    console.log("profilePhoto", profilePhoto);
    console.log("location", location);
    console.log("availability", availability);
    console.log("isPublic", isPublic);
    const user = await prisma.user.update({
      where: { id: userAc.id },
      data: {
        name,
        profilePhoto,
        location,
        availability,
        isPublic,
      },
    });
    return NextResponse.json({ user });
  } catch (e) {
    return NextResponse.json(
      { error: "User not found or update failed" },
      { status: 404 }
    );
  }
}

// GET: Fetch profile by id (?id=...)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      profilePhoto: true,
      location: true,
      availability: true,
      isPublic: true,
      email: true,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ user });
}
