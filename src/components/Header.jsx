import Github from "../icons/Github";

function Header() {
  return (
    <header className="flex justify-between md:py-3 px-5 items-center">
      <a className="flex items-center ">
        <img src="logo.webp" className="md:size-[70px] size-[50px]" />
        <div>
          <h1 className=" text-lg md:text-2xl font-bold">Compilr</h1>
          <h2 className="text-gray-200 text-xs md:text-sm">
            Compilador Javascript en linea
          </h2>
        </div>
      </a>
      <nav>
        <a
          className="p-5"
          href="https://github.com/obed-tc/Compilr"
          target="_blank"
        >
          <Github className="text-3xl" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
