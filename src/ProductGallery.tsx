import { useState } from "react";
import { ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  images?: string[]; // Array de imagens adicionais
  category: "Hand Tied" | "Boxes & Bags" | "Arranjos" | "Especiais";
  price: number | string;
  priceFrom?: boolean; // indica "A partir de"
  priceNote?: string;
  badge?: "Mais Vendido" | "Novo" | "Destaque";
  sizes?: { name: string; price: number }[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Hand Tied",
    description:
      "Nosso estilo de buquê que carrega nossa identidade. Leve, agradável, delicado e cheio de vida!",
    image: "/images/produtos/hand-tied/mini.png",
    images: [
      "/images/produtos/hand-tied/mini.png",
      "/images/produtos/hand-tied/pequeno.png",
      "/images/produtos/hand-tied/medio.png",
      "/images/produtos/hand-tied/grande.png",
      "/images/produtos/hand-tied/enorme.png",
    ],
    category: "Hand Tied",
    price: 132,
    priceFrom: true,
    priceNote: "*Verificar disponibilidade de flores/cores",
    badge: "Mais Vendido",
    sizes: [
      { name: "Mini", price: 132 },
      { name: "Pequeno", price: 230 },
      { name: "Médio", price: 350 },
      { name: "Grande", price: 515 },
      { name: "Enorme", price: 650 },
    ],
  },
  {
    id: 2,
    name: "Jornal My Dear",
    description:
      "Um Jornal que leva Boas Notícias envolto em uma seleção única das nossas mais belas flores do dia",
    image: "/images/produtos/jornal-my-dear/image-1.png",
    images: [
      "/images/produtos/jornal-my-dear/image-1.png",
      "/images/produtos/jornal-my-dear/image-2.png",
    ],
    category: "Especiais",
    price: "Consultar",
    badge: "Destaque",
  },
  {
    id: 3,
    name: "Dear Bag",
    description: "Cheia de charme e super delicada",
    image: "/images/produtos/dear-bag/image-1.png",
    images: [
      "/images/produtos/dear-bag/image-1.png",
      "/images/produtos/dear-bag/image-2.png",
      "/images/produtos/dear-bag/image-3.png",
    ],
    category: "Boxes & Bags",
    price: 177,
    priceFrom: true,
    priceNote: "*Sabores dos macarons: Chocolate ao leite e baunilha",
    badge: "Novo",
    sizes: [
      { name: "Sem Macarons", price: 177 },
      { name: "Com Macarons", price: 197 },
    ],
  },
  {
    id: 4,
    name: "Dear Letter",
    description:
      "Nossa mais encantadora carta de flores. Ela materializa nosso propósito: Levar boas novas",
    image: "/images/produtos/dear-letter/image-1.png",
    images: [
      "/images/produtos/dear-letter/image-1.png",
      "/images/produtos/dear-letter/image-2.png",
      "/images/produtos/dear-letter/image-3.png",
      "/images/produtos/dear-letter/image-4.png",
    ],
    category: "Boxes & Bags",
    price: 230,
    priceNote: "*Verificar disponibilidade de flores/cores",
  },
  {
    id: 5,
    name: "Dear Box",
    description: "Cheia de detalhes, ela é especial em todos os sentidos",
    image: "/images/produtos/dear-box/image-1.png",
    images: [
      "/images/produtos/dear-box/image-1.png",
      "/images/produtos/dear-box/image-2.png",
      "/images/produtos/dear-box/image-3.png",
      "/images/produtos/dear-box/image-4.png",
    ],
    category: "Boxes & Bags",
    price: 335,
    priceNote: "*Verificar disponibilidade de flores/cores",
    badge: "Mais Vendido",
  },
  {
    id: 6,
    name: "Bloomy",
    description: "Um delicado jardim das flores mais queridas",
    image: "/images/produtos/bloomy/image-1.png",
    images: [
      "/images/produtos/bloomy/image-1.png",
      "/images/produtos/bloomy/image-2.png",
      "/images/produtos/bloomy/image-3.png",
    ],
    category: "Arranjos",
    price: 385,
    priceNote: "*Verificar disponibilidade de flores/cores",
  },
  {
    id: 7,
    name: "Good News",
    description: "Um espetáculo de flores, ela é notada por onde passa",
    image: "/images/produtos/good-news/image-1.png",
    images: [
      "/images/produtos/good-news/image-1.png",
      "/images/produtos/good-news/image-2.png",
    ],
    category: "Arranjos",
    price: 485,
    priceNote: "*Verificar disponibilidade de flores/cores",
    badge: "Destaque",
  },
  {
    id: 8,
    name: "My Dear",
    description:
      "Ela é única e super especial. Personalizável com os itens adicionais de sua preferência. Um presente completo!",
    image: "/images/produtos/my-dear/image-1.png",
    images: [
      "/images/produtos/my-dear/image-1.png",
      "/images/produtos/my-dear/image-2.png",
      "/images/produtos/my-dear/image-3.png",
    ],
    category: "Especiais",
    price: 445,
    priceFrom: true,
    priceNote: "*Verificar disponibilidade de flores/cores",
    badge: "Destaque",
  },
  {
    id: 9,
    name: "Cartão Postal",
    description:
      "Cartões com flores desidratadas que duram por mais de um ano. Diversas opções de frases para levar boas novas",
    image: "/images/produtos/cartao-postal/image-1.png",
    images: [
      "/images/produtos/cartao-postal/image-1.png",
      "/images/produtos/cartao-postal/image-2.png",
    ],
    category: "Especiais",
    price: 33,
  },
];

const categories = [
  "Todos",
  "Hand Tied",
  "Boxes & Bags",
  "Arranjos",
  "Especiais",
];

// Componente para carrossel de imagens do produto
function ProductImageCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-square overflow-hidden group/carousel">
      {/* Imagem atual */}
      <img
        src={images[currentIndex]}
        alt={`${name} - variação ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Setas de navegação (aparecem no hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-lg z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} style={{ color: "var(--color-ink)" }} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-lg z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} style={{ color: "var(--color-ink)" }} />
          </button>

          {/* Indicadores (dots) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? "var(--color-primary)"
                      : "rgba(255, 255, 255, 0.6)",
                  width: index === currentIndex ? "20px" : "8px",
                }}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const formatBRL = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todos" || product.category === selectedCategory;
    return categoryMatch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filtros */}
      <div className="mb-8">
        {/* Filtro de Categorias */}
        <div>
          <h3
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--color-ink)", opacity: 0.7 }}
          >
            Categorias
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? "var(--color-primary)"
                      : "var(--color-surface)",
                  color:
                    selectedCategory === category
                      ? "var(--color-surface)"
                      : "var(--color-ink)",
                  border: `2px solid ${
                    selectedCategory === category
                      ? "var(--color-primary)"
                      : "var(--color-accent)"
                  }`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contador de produtos */}
      <p
        className="text-sm mb-6"
        style={{ color: "var(--color-ink)", opacity: 0.6 }}
      >
        {filteredProducts.length}{" "}
        {filteredProducts.length === 1
          ? "produto encontrado"
          : "produtos encontrados"}
      </p>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-accent)",
            }}
          >
            {/* Imagem do Produto com Carrossel */}
            <div className="relative">
              {product.images && product.images.length > 0 ? (
                <ProductImageCarousel
                  images={product.images}
                  name={product.name}
                />
              ) : (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Badge (Mais Vendido, Novo, Promoção) */}
              {product.badge && (
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                  style={{
                    backgroundColor:
                      product.badge === "Mais Vendido"
                        ? "var(--color-primary)"
                        : product.badge === "Novo"
                        ? "var(--color-secondary)"
                        : "var(--color-accent)",
                    color: "var(--color-surface)",
                  }}
                >
                  {product.badge === "Mais Vendido" && (
                    <Star size={12} fill="currentColor" />
                  )}
                  {product.badge}
                </div>
              )}

              {/* Categoria Badge */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "var(--color-ink)",
                }}
              >
                {product.category}
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="p-5 flex flex-col grow">
              <h3
                className="text-lg font-bold mb-2 h2"
                style={{ color: "var(--color-secondary)" }}
              >
                {product.name}
              </h3>
              <p
                className="text-sm mb-4 line-clamp-3"
                style={{ color: "var(--color-ink)", opacity: 0.7 }}
              >
                {product.description}
              </p>

              {/* Tamanhos (se houver) */}
              {product.sizes && (
                <div className="mb-4">
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: "var(--color-ink)", opacity: 0.7 }}
                  >
                    Tamanhos disponíveis:
                  </p>
                  <div className="flex flex-wrap gap-1 text-xs">
                    {product.sizes.map((size) => (
                      <span
                        key={size.name}
                        className="px-2 py-1 rounded"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "var(--color-ink)",
                          opacity: 0.8,
                        }}
                      >
                        {size.name}: {formatBRL(size.price)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Espaçador flexível */}
              <div className="grow"></div>

              {/* Preço */}
              <div className="mb-4">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {typeof product.price === "number"
                    ? product.priceFrom
                      ? `A partir de ${formatBRL(product.price)}`
                      : formatBRL(product.price)
                    : product.price}
                </p>
                {product.priceNote && (
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-ink)", opacity: 0.5 }}
                  >
                    {product.priceNote}
                  </p>
                )}
              </div>

              {/* Botão de Ação */}
              <a
                href={
                  "https://wa.me/5541998920050?" +
                  new URLSearchParams({
                    text: `Olá! Gostaria de encomendar: ${product.name}. Tamanho: Mini/Pequeno/Médio/Grande. Entrega para {Bairro}, {Data} às {HH:MM}.`,
                  }).toString()
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-surface)",
                }}
              >
                <ShoppingCart size={18} />
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem quando não há produtos */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p
            className="text-lg"
            style={{ color: "var(--color-ink)", opacity: 0.6 }}
          >
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
}
