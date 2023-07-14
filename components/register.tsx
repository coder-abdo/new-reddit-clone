"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useModalStore } from "@/store/modalsStore";

export const Register = () => {
  const { closeModal } = useModalStore();
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-slate-500"></div>
      <form
        className="w-[400px] relative z-10 bg-white mx-auto p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[20px] font-medium mt-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h1>
        <p className="text-xs my-2 font-normal leading-4">
          By continuing, you are setting up a Reddit account and agree to our{" "}
          <Link className="link text-blueColor" href={"/user-agreement"}>
            User Agreement
          </Link>{" "}
          and{" "}
          <Link className="link text-blueColor" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
          .
        </p>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => closeModal()}
        >
          ✕
        </button>
        <button
          className="btn btn-block my-2 rounded-full bg-transparent hover:bg-slate-100 hover:border-blueColor"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-lg" />
          <span className="font-medium text-sm leading-[18px] capitalize">
            continue with Google
          </span>
        </button>
        <button className="btn btn-block rounded-full bg-transparent hover:bg-slate-100 hover:border-blueColor">
          <ImAppleinc className="text-lg" />
          <span className="font-medium text-sm leading-[18px] capitalize">
            continue with Apple
          </span>
        </button>
        <div className="divider text-zinc-500 font-bold before:h-[1px] after:h-[1px]">
          OR
        </div>
        <div className="flex flex-col gap-4">
          <div className="form-control relative group">
            <input
              type="text"
              name="username"
              className="input input-bordered w-full max-w-xs rounded-full group-hover:border-zinc-400 bg-zinc-100 outline-none focus:outline-offset-0 focus:outline-0 focus:outline-transparent"
            />
            <span className="absolute top-3 left-3 text-gray-400 text-sm group-hover:top-1 group-hover:text-xs group-hover:left-4 transition-all">
              Username
            </span>
          </div>
          {!isSignup && (
            <div className="relative form-control group">
              <input
                type="password"
                name="password"
                className="input input-bordered w-full max-w-xs rounded-full group-hover:border-zinc-400 bg-zinc-100 outline-none focus:outline-offset-0 focus:outline-0 focus:outline-transparent"
              />
              <span className="text-gray-400 text-md absolute top-3 left-3 group-hover:top-1 group-hover:text-sm group-hover:left-4 transition-all">
                Password
              </span>
            </div>
          )}
          {!isSignup && (
            <p className="mt-4 leading-4 text-xs">
              Forgot your <span className="link text-blueColor">username</span>{" "}
              or <span className="link text-blueColor">password</span>
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-block bg-mainColor text-white rounded-full font-bold text-sm leading-[18px] min-h-[40px] h-10 py-0 mt-6"
          disabled={isSignup}
        >
          {isSignup ? "Continue" : "log in"}
        </button>
        <p className="text-xs mt-4">
          {isSignup ? "Already a redditor" : "new to Reddit?"}{" "}
          <span
            className="link text-blueColor font-bold"
            onClick={() => setIsSignup((prev) => !prev)}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </>
  );
};
