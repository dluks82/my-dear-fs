import { Clock, Truck, CreditCard } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-10 sm:py-12 md:py-14 bg-(--color-surface)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-(--color-dark) mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-(--color-medium) max-w-2xl mx-auto">
            Facilitamos seu pedido para que você possa presentear com flores de
            forma simples e especial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pedidos */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-(--color-primary)/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-(--color-primary)" />
              </div>
              <h3 className="text-xl font-display font-bold text-(--color-dark)">
                Pedidos
              </h3>
            </div>
            <div className="space-y-3 text-(--color-medium)">
              <p>
                Faça seu pedido via{" "}
                <strong className="text-(--color-dark)">WhatsApp</strong> ou{" "}
                <strong className="text-(--color-dark)">presencialmente</strong>{" "}
                em nossa loja
              </p>
              <p>
                <strong className="text-(--color-dark)">
                  24 horas de antecedência
                </strong>{" "}
                da data de entrega/retirada
              </p>
              <p className="text-sm italic">
                *Pedidos para entrega no mesmo dia estão sujeitos à
                disponibilidade de flores e agenda
              </p>
              <a
                href="https://wa.me/5541998920050?text=Olá! Gostaria de fazer um pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-(--color-primary) font-semibold hover:underline"
              >
                Fale com a My Dear no WhatsApp →
              </a>
            </div>
          </div>

          {/* Entrega e Retirada */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-(--color-accent)/10 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-(--color-accent)" />
              </div>
              <h3 className="text-xl font-display font-bold text-(--color-dark)">
                Entrega e Retirada
              </h3>
            </div>
            <div className="space-y-3 text-(--color-medium)">
              <p>
                Entregas realizadas por{" "}
                <strong className="text-(--color-dark)">carro</strong>,
                garantindo o cuidado com seus produtos
              </p>
              <p>
                Atendemos{" "}
                <strong className="text-(--color-dark)">
                  Curitiba e região
                </strong>
              </p>
              <p className="text-sm">Consulte a taxa para seu endereço</p>
              <p className="pt-2 border-t border-gray-200">
                <strong className="text-(--color-dark)">
                  Retirada na loja:
                </strong>
                <br />
                R. Dr. Goulin, 1275 - Juvevê
              </p>
            </div>
          </div>

          {/* Formas de Pagamento */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-(--color-sage)/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-(--color-sage)" />
              </div>
              <h3 className="text-xl font-display font-bold text-(--color-dark)">
                Formas de Pagamento
              </h3>
            </div>
            <div className="space-y-3 text-(--color-medium)">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-(--color-primary) mr-2">✓</span>
                  <span>Dinheiro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-(--color-primary) mr-2">✓</span>
                  <span>Transferência / PIX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-(--color-primary) mr-2">✓</span>
                  <span>
                    Cartão de crédito
                    <br />
                    <span className="text-sm font-semibold text-(--color-dark)">
                      Parcelado em até 3x sem juros
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
