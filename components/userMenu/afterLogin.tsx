import { BsArrowUpRightCircle, BsBell } from "react-icons/bs";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { CiBullhorn } from "react-icons/ci";
import { AfterLoginDropdownMenu } from "../afterLoginDropdownMenu";
import { getAuthSession } from "@/lib/auth";

export const AfterLogin = async () => {
  const session = await getAuthSession();
  return (
    <div className="flex ml-3 items-center gap-2">
      <div className="flex items-center gap-2 text-2xl">
        <BsArrowUpRightCircle className="hover:cursor-pointer" />
        <HiOutlineChatBubbleOvalLeftEllipsis className="hover:cursor-pointer" />
        <BsBell className="hover:cursor-pointer" />
        <AiOutlinePlus className="hover:cursor-pointer" />
        <div className="flex items-center gap-1 rounded-full py-1 px-2 bg-zinc-300 hover:bg-zinc-400 hover:cursor-pointer">
          <CiBullhorn className="text-lg mr-0" />
          <span className="text-xs font-medium">Advertise</span>
        </div>
      </div>
      {/* after login drop down */}
      <AfterLoginDropdownMenu user={session!.user} />
    </div>
  );
};
