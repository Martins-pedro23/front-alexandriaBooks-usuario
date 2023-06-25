import womanicon from "../../../../public/assets/womanicon.png";
import chesticon from "../../../../public/assets/chesticon.png";
import registericon from "../../../../public/assets/registericon.png";
import useLoginStore from "@/contexts/loginContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const UserOptions = () => {
  const { token } = useLoginStore();

  return (
    <>
      <button className="border-primary border-y border-x border rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
        {token && (
          <Link href="/profile" className="w-full flex flex-col items-center justify-center">
            <img src="./womanicon.png" alt="perfil" className="w-16 h-16" />
            <h1 className="font-montserrat dark:text-white">Perfil</h1>
          </Link>
        )}

        {!token && (
          <Link href="/register" className="w-full flex flex-col items-center justify-center">
            <img src="./registericon.png" alt="registrar" className="w-16 h-16" />
            <h1 className="font-montserrat dark:text-white">Registrar</h1>
          </Link>
        )}
      </button>
      <button className="border-primary border-y border-x rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
          {token && (
            <Link href="/shoppingcart" className="w-full flex flex-col items-center justify-center">
              <img src="./chesticon.png" alt="homem" className="w-16 h-16" />
              <h1 className="font-montserrat dark:text-white">Carrinho</h1>
            </Link>
          )}

          {!token && (
            <>
              <Link href="/login" className="w-full flex flex-col items-center justify-center">
                <img src="./womanicon.png" alt="homem" className="w-16 h-16"/>
                <h1 className="font-montserrat dark:text-white">Login</h1>
              </Link>
            </>
          )}
      </button>
    </>
  );
};
