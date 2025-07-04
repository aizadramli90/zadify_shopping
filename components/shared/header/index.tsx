import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants/index";
import "@/app/globals.css";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="header-gradient w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
        <div className="flex-start">
          <Link href="/" className="flex flex-start items-center">
            <Image
              src="/images/white-logo.svg"
              alt={`${APP_NAME} logo`}
              height={64}
              width={64}
              className="background-transparent"
            />
            <span className="text-white hidden lg:block font-semi-bold text-3xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
