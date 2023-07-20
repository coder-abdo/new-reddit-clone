import { FC } from "react";
import { User } from "next-auth";
import Image from "next/image";
import { TbClover } from "react-icons/tb";

import { BiChevronDown, BiHelpCircle, BiChevronUp } from "react-icons/bi";
type Props = {
  user: User;
};
export const AfterLoginDropdownMenu: FC<Props> = async ({ user }) => {
  return (
    <details className="dropdown dropdown-down max-h-96">
      <summary className=" flex btn bg-transparent hover:bg-transparent px-2 py-1 border border-transparent hover:border-zinc-300 hover:cursor-pointer">
        <div className="flex gap-2">
          <Image
            src={user.image!}
            alt={user.name!}
            width={24}
            height={32}
            loading="lazy"
            objectFit="cover"
            className="w-6 h-8 rounded self-end"
          />
          <div className="lg:flex lg:flex-col hidden">
            <h3 className="text-xs font-medium">{user.name}</h3>
            <div className="flex gap-2">
              <TbClover className="text-mainColor" />
              <span className="text-xs font-medium text-gray-300">1 Karma</span>
            </div>
          </div>
        </div>
        <BiChevronDown className="text-xl" />
      </summary>
    </details>
  );
};
