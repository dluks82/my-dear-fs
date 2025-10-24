import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#products", label: "Produtos" },
    { href: "#parcerias", label: "Parcerias" },
    { href: "#contact", label: "Contato" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 hover:opacity-80 transition-opacity"
        style={{ color: "var(--color-bg)" }}
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Lateral */}
          <div
            className="fixed top-0 right-0 bottom-0 w-64 z-50 md:hidden shadow-2xl"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:opacity-80 transition-opacity"
                style={{ color: "var(--color-bg)" }}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-4 py-8">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleClick}
                      className="block text-lg font-medium hover:opacity-80 transition-opacity py-2"
                      style={{ color: "var(--color-bg)" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
