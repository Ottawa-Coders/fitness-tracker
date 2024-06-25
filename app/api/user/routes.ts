import { NextApiRequest, NextApiResponse } from "next";

import { insertUser } from "@/app/api/user/utils/user_utils";

// Create a new user
export async function POST(req: NextApiRequest) {
  return await insertUser(req);
}

// export async function GET(request: NextRequest) {
//   return await getUsers(request);
// }

// export async function DELETE(request: NextRequest, response: NextResponse) {
//   return await deleteUser(request);
// }

// export async function PATCH(request: NextRequest, response: NextResponse) {
//   return await updateUser(request);
// }
