"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={50}
        height={50}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p>
          Oops! We couldn’t find that page. The link may be broken or the
          address might be incorrect.
        </p>
        <Button
          className="mt-4 ml-1"
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          Go Home!
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
