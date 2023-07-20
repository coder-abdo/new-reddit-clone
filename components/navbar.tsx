import { FC } from "react";
import { Logo } from "./logo";
import { Searchbar } from "./searchbar";
import { UserMenu } from "./userMenu";

type Props = {};

export const Navbar: FC<Props> = () => {
  return (
    <nav className="flex items-center py-2 container border-b border-zinc-200">
      {/* logo */}
      <Logo />
      {/* drop down menu side bar in responsive */}
      {/* search bar */}
      <Searchbar />
      {/* user menu */}
      <UserMenu />
    </nav>
  );
};
