"use client";
import { Register } from "@/components/register";
import { useModalStore } from "@/store/modalsStore";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const { isModalShown } = useModalStore();
  return (
    <>
      {" "}
      {isModalShown && <Register />}
      {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
    </>
  );
}
