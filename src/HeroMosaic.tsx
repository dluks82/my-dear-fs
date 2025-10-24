export default function HeroMosaic() {
  // Coleção de imagens reais dos produtos (pasta public)
  const baseImages = [
    "/images/produtos/hand-tied/image-1.png",
    "/images/produtos/hand-tied/image-2.png",
    "/images/produtos/hand-tied/image-3.png",
    "/images/produtos/jornal-my-dear/image-1.png",
    "/images/produtos/jornal-my-dear/image-2.png",
    "/images/produtos/dear-bag/image-1.png",
    "/images/produtos/dear-bag/image-2.png",
    "/images/produtos/dear-bag/image-3.png",
    "/images/produtos/dear-letter/image-1.png",
    "/images/produtos/dear-letter/image-2.png",
    "/images/produtos/dear-letter/image-3.png",
    "/images/produtos/dear-letter/image-4.png",
    "/images/produtos/dear-box/image-1.png",
    "/images/produtos/dear-box/image-2.png",
    "/images/produtos/dear-box/image-3.png",
    "/images/produtos/dear-box/image-4.png",
    "/images/produtos/bloomy/image-1.png",
    "/images/produtos/bloomy/image-2.png",
    "/images/produtos/bloomy/image-3.png",
    "/images/produtos/good-news/image-1.png",
    "/images/produtos/good-news/image-2.png",
    "/images/produtos/my-dear/image-1.png",
    "/images/produtos/my-dear/image-2.png",
    "/images/produtos/my-dear/image-3.png",
    "/images/produtos/cartao-postal/image-1.png",
    "/images/produtos/cartao-postal/image-2.png",
  ];

  // Menos imagens para um visual mais leve
  const tiles = Array.from(
    { length: 24 },
    (_, i) => baseImages[i % baseImages.length]
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid do mosaico */}
      <div className="h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-rows-fr gap-1 opacity-80">
        {tiles.map((src, idx) => {
          // desloca verticalmente alguns tiles para quebrar o alinhamento
          const offsetClass =
            idx % 5 === 1
              ? "translate-y-1 sm:translate-y-2 md:translate-y-3"
              : idx % 5 === 3
              ? "-translate-y-1 sm:-translate-y-2 md:-translate-y-3"
              : "";
          return (
            <div key={idx} className={`relative ${offsetClass}`}>
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-md saturate-75 brightness-95"
              />
            </div>
          );
        })}
      </div>

      {/* Overlay claro (mais claro que o header #fee7d5) para aquecer e suavizar */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#fff3e6", opacity: 0.55 }}
      />
      {/* Gradiente sutil escuro para manter contraste do texto */}
      <div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/10" />
    </div>
  );
}
