export default function FeaturedProducts() {
  const items = [
    {
      name: "Hand Tied",
      image: "/images/produtos/hand-tied/mini.png",
      priceLabel: "A partir de R$ 132",
    },
    {
      name: "Dear Box",
      image: "/images/produtos/dear-box/image-1.png",
      priceLabel: "R$ 335",
    },
    {
      name: "Good News",
      image: "/images/produtos/good-news/image-1.png",
      priceLabel: "R$ 485",
    },
  ];

  return (
    <div className="mt-4 sm:mt-5">
      <div
        className="text-xs uppercase tracking-wide mb-2 opacity-90"
        style={{ color: "var(--color-surface)" }}
      >
        Destaques do catálogo
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
        {items.map((item) => (
          <a
            key={item.name}
            href="#products"
            className="snap-center shrink-0 min-w-40 w-[45%] sm:w-[200px] md:w-auto bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all backdrop-blur-sm"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <div
                className="text-sm font-semibold"
                style={{ color: "var(--color-surface)" }}
              >
                {item.name}
              </div>
              <div
                className="text-xs opacity-90"
                style={{ color: "var(--color-surface)" }}
              >
                {item.priceLabel}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
