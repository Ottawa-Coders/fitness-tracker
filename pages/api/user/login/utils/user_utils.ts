import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";
import { signToken } from "@/jwt"
import cookie from 'cookie'

type LoginResponseData = {
  message: string;
  userId: number;
  token: string;
};

type LoginInfo = {
  username: string;
  password: string;
}

const loginUser = async (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseData>
) => {
  console.log('in')
  console.log(req.body)
  const loginInfo: LoginInfo = req.body;

  const { data, error } = await supabase
    .from("user")
    .select('id')
    .eq('username', loginInfo.username)
    .eq('password', loginInfo.password);

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", userId: -1, token: ""});
  }

  if (data.length === 0) {
    return res.status(403).json({ message: "Invalid login", userId: -1, token: ""});
  }

  const token = signToken({userId: data[0].id, username: loginInfo.username}, { expiresIn: '1h' })
  console.log(data[0].id, token)
  res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set to true in production
    maxAge: 3600, // 1 hour
    sameSite: 'strict',
    path: '/'
}));
  return res
    .status(200)
    .json({ message: "Login successful", userId: data[0].id, token: token });
};

export { loginUser };
