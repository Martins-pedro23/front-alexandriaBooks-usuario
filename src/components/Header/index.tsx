"use client";

import { Menu, Search } from "lucide-react";
import { Modal } from "./Modal";

export const Header = () => {
  return (
    <div className="w-full bg-white flex flex-row justify-between items-center p-3 dark:bg-zinc-900 border-b border-spacing-1 border-primary shadow-xl dark:shadow-black dark:shadow-2xl">
      <img src="./Icon.png" alt="Logo" className="w-20 h-20" />
      <div className="flex flex-row items-center">
        <input
          placeholder="Buscar livro"
          className="bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded-l outline-none focus:bg-zinc-200 transition-all dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-700"
        />
        <button className="bg-primary w-11 h-11 rounded-r flex items-center justify-center text-white hover:bg-primary-light-100 transition-all">
          <Search />
        </button>
      </div>
      <Modal />
    </div>
  );
};
