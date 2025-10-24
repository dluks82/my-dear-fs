import { Building2, Sparkles, HandshakeIcon } from "lucide-react";

export default function CorporatePartnerships() {
  return (
    <section
      id="parcerias"
      className="py-10 sm:py-12 md:py-14 bg-linear-to-br from-(--color-mint)/30 to-(--color-sage)/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-primary)/10 rounded-full mb-6">
            <Building2 className="w-8 h-8 text-(--color-primary)" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-(--color-dark) mb-4">
            Parcerias Corporativas
          </h2>
          <p className="text-lg text-(--color-medium) max-w-3xl mx-auto">
            Valorizamos as relações e sabemos como é importante o relacionamento
            com clientes e parceiros. São os pequenos gestos que demonstram
            cuidado e constroem relações duradouras de confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ocasiões */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4 min-w-0">
              <div className="w-10 h-10 rounded-full bg-(--color-primary)/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-display font-bold text-(--color-dark) leading-snug">
                Ocasiões
              </h3>
            </div>
            <p className="text-(--color-medium) mb-6">
              São tantas oportunidades para se relacionar com seus clientes:
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Aniversários",
                "Fechamento de contratos",
                "Boas-vindas",
                "Experiências de marca",
                "Convites especiais",
                "Eventos corporativos",
              ].map((occasion) => (
                <li
                  key={occasion}
                  className="flex items-start text-(--color-medium)"
                >
                  <span className="text-(--color-primary) mr-2">✓</span>
                  <span>{occasion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Condições Especiais */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4 min-w-0">
              <div className="w-10 h-10 rounded-full bg-(--color-primary)/10 flex items-center justify-center shrink-0">
                <HandshakeIcon className="w-5 h-5 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-display font-bold text-(--color-dark) leading-snug">
                Condições Especiais
              </h3>
            </div>
            <p className="text-(--color-medium) mb-6">
              Acreditando na importância do relacionamento entre empresas,
              oferecemos condições especiais para sua organização.
            </p>
            <div className="bg-(--color-primary)/5 rounded-xl p-6 border-l-4 border-(--color-primary)">
              <p className="text-(--color-dark) font-semibold mb-2">
                Tem alguma ideia ou necessidade diferente?
              </p>
              <p className="text-(--color-medium)">
                Vem conversar com a gente! Será um prazer sermos parceiros nessa
                missão.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5541998920050?text=Olá! Gostaria de informações sobre parcerias corporativas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-(--color-primary) text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-(--color-primary)/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Building2 className="w-5 h-5" />
            Fale com a My Dear no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
