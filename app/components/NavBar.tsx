import SignInButton from "./SignInButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-100">
      NAVIGATION BAR |  {}
      <SignInButton /> | {}
      <Link className="" href="/posts">User Post Page</Link>
    </div>
  );
};

export default NavBar;
