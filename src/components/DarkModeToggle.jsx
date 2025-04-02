import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default theme
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-custom dark:cursor-custom_light w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] p-1 flex justify-center items-center rounded-full bg-white dark:bg-black text-black dark:text-white transition border-[3px] border-Primary"
    >
      {theme === "dark" ? <Sun className="text-[16px] lg:text-[20px]"/> : <Moon className="text-[16px] lg:text-[20px]"/>}
    </button>
  );
}
