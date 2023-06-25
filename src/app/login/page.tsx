export default function LoginPage() {
  return (
    <div className="w-full h-[900px]  flex items-center justify-center dark:bg-zinc-900">
      <div className="p-16 flex flex-col gap-5 rounded-2xl shadow-2xl dark:bg-zinc-900 dark:shadow-black">
        <h1 className="font-antique text-primary font-bold text-center text-6xl dark:text-primary-light-300">
          LOGIN
        </h1>
        <input
          placeholder="Digite seu email"
          className="bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded outline-none focus:border focus:border-spacing-1 focus:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:text-white dark:border-zinc-900  dark:focus:border-primary-light-300"
        />
        <input
          placeholder="Digite sua senha"
          className="bg-zinc-100 text-xl pt-2 pb-2 pl-4 pr-4 rounded outline-none focus:border focus:border-spacing-1 focus:border-primary border-spacing-1 border-zinc-300 border transition-all dark:bg-zinc-800 dark:text-white dark:border-zinc-900  dark:focus:border-primary-light-300"
        />
        <button className="bg-primary text-white rounded pt-2 pb-2 font-antique text-2xl hover:bg-primary-light-200 transition-colors">
          Entrar
        </button>
        <div className="w-full flex flex-row gap-2 items-center justify-between">
          <button className="font-antique text-primary-dark-200 font-bold text-xl border border-spacing-1 border-primary pt-1 pb-1 pr-4 pl-4 rounded hover:bg-zinc-200 transition-colors dark:hover:bg-zinc-800 dark:text-primary-light-300">
            Registrar
          </button>
          <button className="font-antique text-primary-dark-200 font-bold text-xl dark:text-primary-light-300">
            Recuperar senha
          </button>
        </div>
      </div>
    </div>
  );
}
