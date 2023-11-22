import SignInButton from "./SignInButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-100">
      NAVIGATION BAR |  {}
      <SignInButton /> | {}
      <Link className="" href="/posts">User Post Page</Link> |  {}
      <Link className="" href="/profile">User Profile</Link> |  {}
      <Link className="" href="/admin">Admin Dashboard</Link>
    </div>
  );
};

export default NavBar;
