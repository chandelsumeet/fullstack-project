"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import errorImg from "./assets/error.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error->", JSON.stringify(error));
  }, [error]);

  return (
    <div className="flex justify-center flex-col gap-5">
      <h2 className="text-center">Something went wrong!</h2>
      <div className="flex justify-center">
        <Image src={errorImg} alt="error" width={200} />
      </div>
      <div className="flex justify-center">
        <button
          className="w-40"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
