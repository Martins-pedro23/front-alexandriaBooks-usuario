import womanicon from "../../../../public/assets/womanicon.png";
import chesticon from "../../../../public/assets/chesticon.png";

export const UserOptions = () => {
  return (
    <>
      <button className="border-primary border-y border-x border rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
        <img src="./womanicon.png" alt="mulher" className="w-16 h-16" />
        <h1 className="font-montserrat dark:text-white">Perfil</h1>
      </button>
      <button className="border-primary border-y border-x rounded p-5 text-2xl font-montserrat flex items-center justify-centers flex-col hover:bg-zinc-300 transition-colors dark:hover:bg-zinc-800">
        <img src="./chesticon.png" alt="homem" className="w-16 h-16" />
        <h1 className="font-montserrat dark:text-white">Carrinho</h1>
      </button>
    </>
  );
};
