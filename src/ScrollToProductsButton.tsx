import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function ScrollToProductsButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#products";
  };

  return (
    <button
      onClick={scrollToProducts}
      className="fixed bottom-4 right-4 z-40 px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-surface)",
      }}
      aria-label="Ver catálogo"
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">
        Ver catálogo
      </span>
    </button>
  );
}
