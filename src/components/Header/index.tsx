import { Menu, Search } from "lucide-react";
import Icon from "../../../public/Icon.png";

export const Header = () => {
  return (
    <div className="w-screen bg-white flex flex-row justify-between items-center p-4">
      <img src="./Icon.png" alt="Logo" className="w-20 h-20" />
      <div className="flex flex-row items-center">
        <input
          placeholder="Buscar livro"
          className="bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded-l outline-none focus:bg-zinc-200 transition-all"
        />
        <button className="bg-primary w-11 h-11 rounded-r flex items-center justify-center text-white hover:bg-primary-light-100 transition-all">
          <Search />
        </button>
      </div>
      <button className="bg-primary rounded p-2  text-white hover:bg-primary-light-100 transition-colors">
        <Menu size={30} />
      </button>
    </div>
  );
};
