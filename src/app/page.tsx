"use client";
import { ThemeContextProvider } from "@/contexts/themeContext";
import useLoginStore from "@/contexts/loginContext";

export default function Home() {
  const token = useLoginStore((state) => state.token);

  console.log("token", token);

  return (
    <div>
      <div className="bg-primary text-white w-screen text-center font-montserrat font-bold">
        Bem vindo à Alexandria Books
      </div>
      <h1>oi</h1>
    </div>
  );
}
