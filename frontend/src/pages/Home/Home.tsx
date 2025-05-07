import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="relative z-0 min-h-screen bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400">
      <header className="w-full h-20 flex items-center justify-between px-8">
        <h1 className="text-white text-5xl font-thin drop-shadow-xl tracking-wide">
          parking rental .app
        </h1>
        <div className="relative">
          <Menu
            onClick={toggleMenu}
            className="w-6 h-6 text-white cursor-pointer"
          />
        </div>
      </header>

      <div
        className={`z-50 fixed top-0 right-0 h-full w-64 bg-blue-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl text-white font-semibold">Menu</h2>
          <X
            className="w-5 h-5 text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="p-4 space-y-4">
          <li className="text-white cursor-pointer">Meu Perfil</li>
          <li className="text-white cursor-pointer">Entre em contato</li>
          <li className="text-white cursor-pointer">Sair</li>
        </ul>
      </div>

      {isMenuOpen && <div onClick={toggleMenu} className="fixed inset-0" />}
    </main>
  );
};
