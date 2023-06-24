import { useTheme } from "@/contexts/themeContext";
import Icon from "../../../../public/Icon.png";
import { Sun, Moon } from "lucide-react";
import { UserOptions } from "./useroptions";

export const ModalContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-antique text-primary-light-300 font-bold">
            ALEXANDRIA
          </h1>
          <img src="/Icon.png" alt="Logo" className="w-20 h-20" />
          <h1 className="text-5xl font-antique text-primary-light-300 font-bold">
            BOOKS
          </h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 mt-8">
          <UserOptions />

        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun size={30} onClick={toggleTheme} color="white" />
          ) : (
            <Moon size={30} onClick={toggleTheme} />
          )}
        </button>
      </div>
    </div>
  );
};
