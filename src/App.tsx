import Logo from "./Logo";
import GoogleMap from "./GoogleMap";
import InstagramCarousel from "./InstagramCarousel";
import MobileMenu from "./MobileMenu";
import ProductGallery from "./ProductGallery";
import HeroMosaic from "./HeroMosaic";
import HowItWorks from "./HowItWorks";
import CorporatePartnerships from "./CorporatePartnerships";
import FAQ from "./FAQ";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import BackToTopButton from "./BackToTopButton";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <header
        className="fixed top-0 left-0 right-0 shadow-lg z-30"
        style={{ backgroundColor: "#fee7d5" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Logo className="h-12 sm:h-14 md:h-16 w-auto" />
            </div>

            {/* Menu Desktop */}
            <ul className="hidden md:flex gap-4 lg:gap-6">
              <li>
                <a
                  href="#home"
                  className="transition-colors font-medium hover:opacity-80 text-sm lg:text-base"
                  style={{ color: "#af9771" }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors font-medium hover:opacity-80 text-sm lg:text-base"
                  style={{ color: "#af9771" }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="transition-colors font-medium hover:opacity-80 text-sm lg:text-base"
                  style={{ color: "#af9771" }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#parcerias"
                  className="transition-colors font-medium hover:opacity-80 text-sm lg:text-base"
                  style={{ color: "#af9771" }}
                >
                  Parcerias
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors font-medium hover:opacity-80 text-sm lg:text-base"
                  style={{ color: "#af9771" }}
                >
                  Contato
                </a>
              </li>
            </ul>

            {/* Menu Mobile */}
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Espaçamento para compensar header fixo */}
      <div className="h-[60px] sm:h-[68px] md:h-[76px]" />

      <main className="flex-1">
        {/* Botão flutuante para ver catálogo removido a pedido: produtos ficam visíveis ao voltar ao topo */}
        {/* Botão flutuante de voltar ao topo */}
        <BackToTopButton />
        <section
          id="home"
          className="relative py-8 sm:py-10 md:py-12 px-4 text-center min-h-64 sm:min-h-80 md:min-h-96 flex items-center justify-center"
          style={{ color: "#ffffff" }}
        >
          {/* Mosaico de fundo */}
          <HeroMosaic />

          {/* Conteúdo */}
          <div className="max-w-4xl mx-auto relative z-10 px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 h1 drop-shadow-lg">
              My Dear, there is good news…
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-7 drop-shadow-md">
              Arranjos únicos e personalizados com amor e dedicação
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href={
                  "https://wa.me/5541998920050?" +
                  new URLSearchParams({
                    text: "Olá! Gostaria de falar com a My Dear Flower Shop sobre um pedido. Produto: (se aplicável). Tamanho: Mini/Pequeno/Médio/Grande. Entrega para {Bairro}, {Data} às {HH:MM}.",
                  }).toString()
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-6 sm:px-8 py-3 sm:py-4 rounded-[999px] text-base sm:text-lg hover:scale-105 transition-transform shadow-lg inline-block"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-primary)",
                }}
              >
                Fale com a My Dear no WhatsApp
              </a>
            </div>

            {/* Linha informativa minimalista abaixo do CTA */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base opacity-95">
              Entrega por carro <span className="mx-2 opacity-80">•</span>
              Pagamento em até 3x <span className="mx-2 opacity-80">•</span>
              Flores da estação
            </p>
          </div>
        </section>

        {/* Produtos - movido para cima, logo após o Hero */}
        <section
          id="products"
          className="py-8 sm:py-10 md:py-12 px-4"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center h2"
              style={{ color: "var(--color-ink)" }}
            >
              Nosso Catálogo
            </h2>
            {/* Linha informativa minimalista acima do catálogo */}
            <div className="mb-6 sm:mb-8 text-center">
              <p
                className="text-sm sm:text-base"
                style={{ color: "var(--color-ink)", opacity: 0.7 }}
              >
                Entrega em Curitiba e região{" "}
                <span className="mx-2 opacity-60">•</span>
                Pagamento em até 3x <span className="mx-2 opacity-60">•</span>
                Flores da estação
              </p>
            </div>
            <ProductGallery />
          </div>
        </section>

        <section
          id="about"
          className="py-8 sm:py-10 md:py-12 px-4 max-w-5xl mx-auto"
        >
          <h2 className="sr-only">Sobre Nós</h2>
          <img
            src="/images/flower_logo.png"
            alt=""
            className="mx-auto mb-3 sm:mb-5 h-28 w-28 sm:h-32 sm:w-32"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(20%) saturate(600%) hue-rotate(6deg) brightness(94%) contrast(88%)",
            }}
          />
          <p
            className="text-base sm:text-lg leading-relaxed mb-6 text-center"
            style={{ color: "var(--color-ink)", opacity: 0.7 }}
          >
            Levando boas novas com flores frescas e arranjos especiais.
          </p>

          {/* Informações sobre as Flores */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3
              className="text-2xl font-display font-bold mb-6 text-center"
              style={{ color: "var(--color-primary)" }}
            >
              Sobre as Flores
            </h3>
            <div
              className="space-y-4 text-left"
              style={{ color: "var(--color-medium)" }}
            >
              <p className="leading-relaxed">
                Semanalmente temos uma variedade de flores e cores disponíveis
                que são escolhidas e combinadas por nossa conta, com muito
                carinho e conforme a estação 🌸 A disponibilidade pode variar
                durante a semana pois recebemos flores em vários dias.
              </p>
              <p className="leading-relaxed">
                Caso deseje fazer um pedido com uma determinada cor ou tipo de
                flor que não faça parte das opções disponíveis, é necessário
                fazer a encomenda com{" "}
                <strong style={{ color: "var(--color-dark)" }}>
                  uma semana de antecedência
                </strong>{" "}
                (sujeito à disponibilidade dos produtores).
              </p>
              <div
                className="bg-(--color-mint)/20 rounded-xl p-5 border-l-4"
                style={{ borderColor: "var(--color-primary)" }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-dark)" }}
                >
                  Flores Especiais
                </p>
                <p className="text-sm leading-relaxed">
                  Para pedidos de arranjos com espécies de flores mais
                  específicas, como girassóis, orquídeas, rosas importadas,
                  entre outras, é necessário fazer encomenda com antecedência.
                  Por favor, nos consulte diretamente para disponibilidade e
                  valores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <HowItWorks />

        {/* Parcerias Corporativas */}
        <CorporatePartnerships />

        {/* Carrossel Instagram */}
        <InstagramCarousel />

        <section
          id="contact"
          className="py-8 sm:py-10 md:py-12 px-4 text-center max-w-4xl mx-auto"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-5 h2"
            style={{ color: "var(--color-ink)" }}
          >
            Entre em Contato
          </h2>
          <p
            className="text-base sm:text-lg mb-6 sm:mb-8"
            style={{ color: "var(--color-ink)", opacity: 0.7 }}
          >
            Fale com a My Dear pelo WhatsApp ou Instagram.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/5541998920050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-transform"
              style={{
                backgroundColor: "var(--color-surface)",
                color: "var(--color-ink)",
              }}
            >
              <Phone
                className="w-6 h-6"
                style={{ color: "var(--color-primary)" }}
              />
              <div className="text-left">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-70">(41) 99892-0050</div>
              </div>
            </a>

            <a
              href="https://instagram.com/mydearflowershop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg hover:scale-105 transition-transform"
              style={{
                backgroundColor: "var(--color-surface)",
                color: "var(--color-ink)",
              }}
            >
              <Instagram
                className="w-6 h-6"
                style={{ color: "var(--color-primary)" }}
              />
              <div className="text-left">
                <div className="font-semibold">Instagram</div>
                <div className="text-sm opacity-70">@mydearflowershop</div>
              </div>
            </a>

            <div
              className="flex items-center gap-3 p-4 rounded-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                color: "var(--color-ink)",
              }}
            >
              <MapPin
                className="w-6 h-6"
                style={{ color: "var(--color-primary)" }}
              />
              <div className="text-left">
                <div className="font-semibold">Endereço</div>
                <div className="text-sm opacity-70">
                  R. Dr. Goulin, 1275 - Juvevê, Curitiba
                </div>
              </div>
            </div>

            <div
              className="flex items-center gap-3 p-4 rounded-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                color: "var(--color-ink)",
              }}
            >
              <Clock
                className="w-6 h-6"
                style={{ color: "var(--color-primary)" }}
              />
              <div className="text-left">
                <div className="font-semibold">Horário de Atendimento</div>
                <div className="text-sm opacity-70">Seg-Sex 09:00-18:00</div>
                <div className="text-sm opacity-70">Sáb 09:00-13:00</div>
              </div>
            </div>
          </div>

          {/* Mapa do Google Maps */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <GoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14414.3720549054!2d-49.25872987327719!3d-25.418430442598773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5b9e90d0561%3A0x41aab426ef03c24a!2sMy%20Dear%20Flower%20Shop!5e0!3m2!1spt-BR!2sbr!4v1761259850424!5m2!1spt-BR!2sbr"
              className="w-full h-[300px]"
            />
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </main>

      <footer
        className="text-center py-8 mt-auto"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-bg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://wa.me/5541998920050"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/mydearflowershop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 opacity-95">
            <img
              src="/images/logo_bege.png"
              alt=""
              className="h-5 w-5"
              style={{
                filter: "brightness(0) invert(1)",
                transform: "translateY(1px)",
              }}
            />
            <span className="text-sm font-medium">
              My Dear, there is good news…
            </span>
          </div>
          <p>&copy; 2025 My Dear Flower Shop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
