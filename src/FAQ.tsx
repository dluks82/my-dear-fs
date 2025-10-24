import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:text-(--color-primary) transition-colors group"
      >
        <span className="text-lg font-semibold text-(--color-dark) group-hover:text-(--color-primary) pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-(--color-primary) shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-5 md:pb-6 text-(--color-medium) leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Posso fazer um pedido para entrega no mesmo dia?",
      answer:
        "Pedidos para entrega no mesmo dia estão sujeitos à disponibilidade de flores e de agenda. Recomendamos entrar em contato pelo WhatsApp (41) 99892-0050 para verificar a possibilidade.",
    },
    {
      question: "Posso escolher as cores e tipos de flores?",
      answer:
        "Sim! Semanalmente temos uma variedade de flores e cores disponíveis que escolhemos com muito carinho. Para cores ou flores específicas que não estejam disponíveis, é necessário fazer encomenda com uma semana de antecedência (sujeito à disponibilidade dos produtores).",
    },
    {
      question: "Qual o prazo para pedidos com flores especiais?",
      answer:
        "Para arranjos com flores mais específicas como girassóis, orquídeas e rosas importadas, é necessário encomendar com antecedência. Entre em contato conosco para consultar disponibilidade e valores.",
    },
    {
      question: "Vocês entregam na minha região?",
      answer:
        "Entregamos em Curitiba e região. Todas as entregas são realizadas por carro para garantir a delicadeza dos produtos. Consulte-nos pelo WhatsApp para verificar a taxa de entrega para seu endereço específico.",
    },
    {
      question: "Como posso fazer meu pedido?",
      answer:
        "Pedidos podem ser realizados via WhatsApp (41) 99892-0050 ou pessoalmente em nossa loja na R. Dr. Goulin, 1275 - Juvevê. Recomendamos fazer o pedido com 24 horas de antecedência.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, transferência/PIX e cartão de crédito parcelado em até 3x sem juros.",
    },
    {
      question: "Posso retirar meu pedido na loja?",
      answer:
        "Sim! Você pode retirar seu pedido em nossa loja localizada na R. Dr. Goulin, 1275 - Juvevê, Curitiba. Horário de funcionamento: Segunda a Sexta das 09:00 às 18:00 e Sábado das 09:00 às 13:00.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-(--color-dark) mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-(--color-medium)">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="bg-(--color-surface) rounded-2xl p-5 sm:p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-(--color-medium) mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/5541998920050?text=Olá! Tenho uma dúvida sobre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:underline"
          >
            Fale com a My Dear no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
