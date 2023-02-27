import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

const Header = () => {
  const [mounted, setMounted] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="light mr-12 p-2">
          <SunIcon
            className="w-5 h-5 text-yellow-500  sticky  inset-0 z-50 "
            role="button"
            onClick={() => setTheme("light")}
          />
        </div>
      );
    } else {
      return (
        <div className="p-2 mr-12 night">
          <MoonIcon
            className="w-5  h-5 bg-primary-50 sticky  inset-0 z-50  "
            role="button"
            onClick={() => setTheme("dark")}
          />
        </div>
      );
    }
  };

  return (
    <header
      className={clsx(
        "sticky h-16 inset-0   z-50 ",
        "bg-gray-200 dark:bg-zinc-900 "
      )}
    >
      <div className="layout  h-full  flex items-center justify-between">
        <Navbar/>
        
        {renderThemeChanger()}
        
      </div>
    </header>
  );
};

export default Header;
