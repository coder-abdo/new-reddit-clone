"use client";
import { PiScanBold } from "react-icons/pi";
import { Button } from "../ui/button";
import { UserDropDownMenu } from "../userDropDownMenu";
import { useModalStore } from "@/store/modalsStore";
export const BeforeLogin = () => {
  const { openModal } = useModalStore();
  return (
    <div className="flex items-center ml-2 gap-4">
      <Button
        size={"lg"}
        className="bg-zinc-100 text-zinc-700 font-bold h-8 hover:bg-zinc-200 rounded-full px-4"
      >
        <PiScanBold className="text-2xl mr-1" />
        Get APP
      </Button>
      <Button
        size="lg"
        className="bg-mainColor text-zinc-50 capitalize rounded-full h-8 hover:bg-mainColor"
        onClick={() => openModal()}
      >
        Log In
      </Button>
      <UserDropDownMenu />
    </div>
  );
};
