import { AfterLogin } from "./userMenu/afterLogin";
import { BeforeLogin } from "./userMenu/beforeLogin";
import { getAuthSession } from "@/lib/auth";
export const UserMenu = async () => {
  const session = await getAuthSession();
  return <>{session ? <AfterLogin /> : <BeforeLogin />}</>;
};
