import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../util/db";

export async function POST(request: NextRequest) {
  try {
    await executeQuery(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL
        )
      `);
    console.log("Table created successfully!");

    const result = await executeQuery(`
    INSERT INTO users (name, email)
    VALUES ('John Doye', 'john@exatmple.com')
  `).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    console.log("Record inserted successfully!", result);
    return NextResponse.json({ res: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ error: error });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const { email, type } = await request.json();
    const randomString = generateRandomString();
    await executeQuery(`
      INSERT INTO users (email,password ,role)
      VALUES ('${email}','${randomString}','${type}')
      `);
    return NextResponse.json({
      type: "success",
      data: { email, password: randomString },
    });
  } catch (e) {
    console.error("Error creating user record:", e);
    return NextResponse.json({ type: "error" });
  }
}
function generateRandomString() {
  const length = 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
