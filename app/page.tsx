
//import { getServerSession } from "next-auth/next";
//import { authOptions } from "./api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import SignInButton from "./components/SignInButton";
import Link from "next/link";


export default function Home() {
  //const data = await getServerSession(authOptions);
  //const { data } = useSession();
  //return <main>{JSON.stringify(data)}</main>;
  return <div>Home
    <Link href="/posts">User Post Page</Link>
  </div>
}
