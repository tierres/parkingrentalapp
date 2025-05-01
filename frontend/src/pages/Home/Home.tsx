import { useState } from "react";
import { Menu } from "lucide-react";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400">
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

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg p-4 z-10">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>Meu Perfil</li>
            <li>Entre em contato</li>
          </ul>
        </div>
      )}
    </main>
  );
};
