import { FC } from "react";
import { Logo } from "./logo";
import { Searchbar } from "./searchbar";
import { UserMenu } from "./userMenu";
import { getAuthSession } from "@/lib/auth";

type Props = {};

export const Navbar: FC<Props> = () => {
  const session = getAuthSession();
  return (
    <nav className="flex items-center py-2 container border-b border-zinc-200">
      {/* logo */}
      <Logo />
      {/* drop down menu side bar in responsive */}
      {/* search bar */}
      <Searchbar />
      {/* user menu */}
      {!session && <UserMenu />}
    </nav>
  );
};
