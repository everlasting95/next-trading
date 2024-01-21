import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql";
import { executeQuery } from "../../util/db";
interface RowType extends RowDataPacket {
  // Define the structure of your row
  id: number;
  companyName: string;
  companyNameGana: string;
  representativeName: string;
  representativeNameGana: string;
  responsibleName: string;
  responsibleNameGana: string;
  webSite: string;
  phoneNumber: string;
  emailAddress: string;
  postalCode: string;
  address: string;
  building: string;
  status: string;
  payment: string;
  freeAccount: boolean;
  // Add any other fields you have in your table
}
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id") || "";

    const query = `SELECT * FROM company where id = ${id}`;
    const rows = await executeQuery(query).catch((e) => {
      return NextResponse.json({ type: "error" });
    });
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
