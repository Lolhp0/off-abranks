"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/tierlist");
  }, [])

  return (
    <>

    </>
  );
}

// CRAFTY.GG API KEY:

// crafty_YzI4MDYyZjEtZTQ2NS00OGY5LTg4M2YtNzE0MjQ1M2I1MmFk.SlJ0R3hXdmpNOWFWT3czZWxUeGs0ajcxZWEyUVg5YllOSDVSZUNOWTM1MzE1MjgxODY