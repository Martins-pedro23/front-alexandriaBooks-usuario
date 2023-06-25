import Link from "next/link";

export const Navigate = () => {
  return (
    <>
      <Link href="/" className="col-span-2 text-center bg-primary text-white rounded pt-3 pb-3 font-antique text-2xl hover:bg-primary-dark-200 dark:hover:bg-primary-light-200 transition-colors">
        Inicial
      </Link>
      <Link href="/products" className="col-span-2 text-center bg-primary text-white rounded pt-3 pb-3 font-antique text-2xl hover:bg-primary-dark-200 dark:hover:bg-primary-light-200 transition-colors">
        Produtos
      </Link>
    </>
  );
};
