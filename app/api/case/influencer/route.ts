import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../util/db";

export async function GET() {
  try {
    const query = `SELECT cases.*, company.companyName
    FROM cases
    LEFT JOIN company ON cases.companyId=company.id 
    where collectionStatus = '募集中' ORDER BY id DESC`;

    // const query = `SELECT * FROM cases where collectionStatus = '募集中' ORDER BY id DESC`;
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ type: "error" });
  }
}
