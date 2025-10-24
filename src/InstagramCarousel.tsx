import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Instagram } from "lucide-react";

// Import Swiper styles
// CSS do Swiper carregado via CDN em index.html

export default function InstagramCarousel() {
  useEffect(() => {
    // Carregar o script do Instagram
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Processar os embeds quando o carrossel muda
    const interval = setInterval(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1000);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="py-10 sm:py-12 md:py-14 px-4"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram
              className="w-8 h-8"
              style={{ color: "var(--color-primary)" }}
            />
            <h2
              className="text-4xl font-bold h2"
              style={{ color: "var(--color-ink)" }}
            >
              Novidades no Instagram
            </h2>
          </div>
          <p
            className="text-lg"
            style={{ color: "var(--color-ink)", opacity: 0.7 }}
          >
            Confira nossas últimas criações e inspire-se!
          </p>
          <a
            href="https://instagram.com/mydearflowershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full btn hover:scale-105 transition-transform"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-surface)",
            }}
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>

        {/* Carrossel de Posts do Instagram */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="instagram-swiper"
          >
            {/* Post 1 - Reel */}
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DPw5HQJDxKq/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  margin: "1px auto",
                  maxWidth: "320px",
                  minWidth: "260px",
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              />
            </SwiperSlide>

            {/* Post 2 */}
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/C6HZdrQOYt0/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  margin: "1px auto",
                  maxWidth: "320px",
                  minWidth: "260px",
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              />
            </SwiperSlide>

            {/* Post 3 */}
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DOYZJGHjaY9/"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  margin: "1px auto",
                  maxWidth: "320px",
                  minWidth: "260px",
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
