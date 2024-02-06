"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  } else if (status === "unauthenticated") {
    redirect("/");
  }

  return (
    <>
      {data?.user?.image?.toString === undefined ||
      data?.user?.image === null ? (
        <p>?</p>
      ) : (
        <Image
          src={data?.user?.image}
          width={50}
          height={50}
          alt="Google Account"
        />
      )}

      <h2>Name: {data?.user?.name}</h2>
      <h3>Email: {data?.user?.email}</h3>
    </>
  );
}
