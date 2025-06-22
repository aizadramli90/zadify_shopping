"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Sun, Moon, SunMoon } from "lucide-react";
//import * as Icon from "lucide-react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // prevents hydration mismatch until the component is mounted
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {theme === "system" ? (
            <SunMoon className="text-white" />
          ) : theme === "dark" ? (
            <Moon />
          ) : (
            <Sun className="text-white" />
          )}
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ModeToggle;
