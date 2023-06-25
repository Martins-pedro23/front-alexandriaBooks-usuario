import womanicon from "../../../../public/assets/womanicon.png";
import chesticon from "../../../../public/assets/chesticon.png";
import registericon from "../../../../public/assets/registericon.png";
import useLoginStore from "@/contexts/loginContext";
import { useRouter } from "next/navigation";

export const UserOptions = () => {
  const { token } = useLoginStore();
  const router = useRouter();

  return (
    <>
      <button className="border-primary border-y border-x border rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
        {token && (
          <>
            <img src="./womanicon.png" alt="perfil" className="w-16 h-16" />
            <h1 className="font-montserrat dark:text-white">Perfil</h1>
          </>
        )}

        {!token && (
          <>
            <img src="./registericon.png" alt="registrar" className="w-16 h-16" />
            <h1 className="font-montserrat dark:text-white">Registrar</h1>
          </>
        )}
      </button>
      <button className="border-primary border-y border-x rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
          {token && (
            <>
              <img src="./chesticon.png" alt="homem" className="w-16 h-16" />
              <h1 className="font-montserrat dark:text-white">Carrinho</h1>
            </>
          )}

          {!token && (
            <>
              <img src="./womanicon.png" alt="homem" className="w-16 h-16" onClick={() => router.push("/login")}/>
              <h1 className="font-montserrat dark:text-white">Login</h1>
            </>
          )}
      </button>
    </>
  );
};
