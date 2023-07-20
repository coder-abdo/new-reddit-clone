import { BsSearch } from "react-icons/bs";
export const Searchbar = () => {
  return (
    <div className="relative flex-grow flex-shrink">
      <input
        type="search"
        placeholder="Search Reddit"
        className="border border-zinc-300 w-full p-2 rounded-full bg-gray-50 indent-10 outline-none placeholder:text-zinc-500 placeholder:font-medium hover:border-blue-400 focus:border-blue-400"
      />
      <BsSearch className="text-2xl text-zinc-300 absolute top-2.5 left-5" />
    </div>
  );
};
