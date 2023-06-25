"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BounceLoader } from "react-spinners";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen bg-white z-10 absolute top-0 left-0 flex flex-col items-center justify-center">
      <div className="p-16 roundend shadow-2xl flex flex-col  items-center gap-5 relative">
        <Link href="/">
          <ArrowLeft size={30} className="text-primary absolute top-4 left-4" />
        </Link>
        <h1 className="font-antique text-primary font-bold text-center text-6xl dark:text-primary-light-300">
          REGISTRAR
        </h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="w-full bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded outline-none focus:border focus:border-spacing-1 focus:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:text-white dark:border-zinc-900  dark:focus:border-primary-light-300"
        />
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded outline-none focus:border focus:border-spacing-1 focus:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:text-white dark:border-zinc-900  dark:focus:border-primary-light-300"
        />
        <div className="pr-4 pl-4 w-full flex flex-row items-center justify-center bg-zinc-100 rounded hover:border hover:border-spacing-1 hover:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:border-zinc-900  dark:hover:border-primary-light-300">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            className="text-xl pt-2 pb-2   outline-none dark:text-white bg-zinc-100 dark:bg-zinc-800"
          />
          <button
            className="text-primary"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <Eye size={30} /> : <EyeOff size={30} />}
          </button>
        </div>
        <div className="pr-4 pl-4 w-full flex flex-row items-center justify-center bg-zinc-100 rounded hover:border hover:border-spacing-1 hover:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:border-zinc-900  dark:hover:border-primary-light-300">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirme sua senha"
            className="text-xl pt-2 pb-2   outline-none dark:text-white bg-zinc-100 dark:bg-zinc-800"
          />
          <button
            className="text-primary"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <Eye size={30} /> : <EyeOff size={30} />}
          </button>
        </div>
        <button className="bg-primary text-white rounded pt-2 pb-2 font-antique text-2xl hover:bg-primary-light-200 transition-colors w-full flex items-center justify-center">
          {loading ? <BounceLoader color="#fff" size={30} /> : "Registrar"}
        </button>
        <div className="w-full flex flex-row gap-2 items-center justify-between">
          <Link
            href="/login"
            className="font-antique text-primary-dark-200 font-bold text-xl border border-spacing-1 pt-1 pb-1 pr-4 pl-4 rounded hover:bg-zinc-200 transition-colors dark:hover:bg-zinc-800 dark:text-primary-light-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
