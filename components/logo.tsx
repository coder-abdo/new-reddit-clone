import Link from "next/link";
import { FC } from "react";
import { AiFillRedditCircle } from "react-icons/ai";
type Props = {};

export const Logo: FC<Props> = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center text-zinc-900 text-2xl font-medium mr-2"
    >
      <AiFillRedditCircle className="text-mainColor text-4xl mr-1" />
      <span>redd</span>
      <span className="w-[3px] h-4 mx-[1px] bg-zinc-900 relative before:w-[5px] before:h-[5px] before:rounded-full before:bg-mainColor before:absolute before:content[''] before:-top-1.5 before:-left-[1px]"></span>
      <span>t</span>
    </Link>
  );
};
