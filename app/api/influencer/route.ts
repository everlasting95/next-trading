import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../util/db";

export async function POST(request: NextRequest) {
  try {
    let body = await request.json();
    const today = new Date();
    const todayString = `${today.getFullYear()}/${
      today.getMonth() + 1
    }/${today.getDate()}`;
    const defaultValues = {
      status: "承認待ち",
      date: todayString,
    };
    body = { ...body, ...defaultValues };
    let query1 = "";
    let query2 = "";
    const keys = Object.keys(body);
    keys?.map((aKey) => {
      query1 += aKey + ",";
      query2 += "'" + body[aKey] + "',";
    });
    // insertQuery += `'${body["ds"]}'`;
    await executeQuery(`
      CREATE TABLE IF NOT EXISTS influencer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        influencerName VARCHAR(255) NOT NULL,
        influencerNameGana VARCHAR(255) NOT NULL,
        nickName VARCHAR(255) NOT NULL,
        phoneNumber VARCHAR(255) NOT NULL,
        emailAddress VARCHAR(255) NOT NULL,
        prefecture VARCHAR(255) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        instagram VARCHAR(255) NOT NULL,
        x VARCHAR(255) NOT NULL,
        facebook VARCHAR(255) NOT NULL,
        youtube VARCHAR(255) NOT NULL,
        tiktok VARCHAR(255) NOT NULL,
        otherSNS VARCHAR(255) NOT NULL,
        userId int,
        date VARCHAR(255),
        status VARCHAR(255), 
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `);
    console.log("Table created successfully!");
    const query = `INSERT INTO influencer (${query1.slice(
      0,
      -1
    )}) VALUES(${query2.slice(0, -1)})`;

    await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error", msg: "error" });
    });
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error creating table or inserting record:", error);
    return NextResponse.json({ type: "error", msg: "error" });
  }
}
export async function GET() {
  try {
    const query = "SELECT * FROM influencer";
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error", msg: "no table exists" });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error", msg: "no table exists" });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    let query = "UPDATE influencer SET ";
    const keys = Object.keys(body);

    keys?.map((aKey) => {
      if (aKey !== "id" && aKey !== "userId") {
        query += `${aKey} = '${body[aKey]}', `;
      }
    });
    query = query.slice(0, -2);
    query += " ";
    query += `WHERE id = ${body.id}`;
    await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json({ type: "success" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
