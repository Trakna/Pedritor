import { FeatureCard, ButtonStyle } from "../components/feature-card/feature-card";
import { BooleanTable, Feature } from "../components/boolean-table/boolean-table";
import React from "react";

const featuresData: Feature[] = [
  { column: "Free", feature: "Até 50 agendamentos/mês", enabled: true },
  { column: "Free", feature: "1 psicólogo", enabled: true },
  { column: "Free", feature: "Agenda básica", enabled: true },
  { column: "Free", feature: "Lembretes por email", enabled: true },
  { column: "Free", feature: "Suporte por email", enabled: true },
  { column: "Free", feature: "Relatórios básicos", enabled: false },
  { column: "Free", feature: "Lembretes por SMS", enabled: false },
  { column: "Free", feature: "Integração com calendário", enabled: false },
  { column: "Free", feature: "Personalização da marca", enabled: false },
  { column: "Free", feature: "API de integração", enabled: false },
  { column: "Free", feature: "Suporte prioritário", enabled: false },

  { column: "Pro", feature: "Até 50 agendamentos/mês", enabled: true },
  { column: "Pro", feature: "1 psicólogo", enabled: true },
  { column: "Pro", feature: "Agenda básica", enabled: true },
  { column: "Pro", feature: "Lembretes por email", enabled: true },
  { column: "Pro", feature: "Suporte por email", enabled: true },
  { column: "Pro", feature: "Relatórios básicos", enabled: true },
  { column: "Pro", feature: "Lembretes por SMS", enabled: true },
  { column: "Pro", feature: "Integração com calendário", enabled: true },
  { column: "Pro", feature: "Personalização da marca", enabled: false },
  { column: "Pro", feature: "API de integração", enabled: false },
  { column: "Pro", feature: "Suporte prioritário", enabled: false },
  
  { column: "Premium", feature: "Até 50 agendamentos/mês", enabled: true },
  { column: "Premium", feature: "1 psicólogo", enabled: true },
  { column: "Premium", feature: "Agenda básica", enabled: true },
  { column: "Premium", feature: "Lembretes por email", enabled: true },
  { column: "Premium", feature: "Suporte por email", enabled: true },
  { column: "Premium", feature: "Relatórios básicos", enabled: true },
  { column: "Premium", feature: "Lembretes por SMS", enabled: true },
  { column: "Premium", feature: "Integração com calendário", enabled: true },
  { column: "Premium", feature: "Personalização da marca", enabled: true },
  { column: "Premium", feature: "API de integração", enabled: true },
  { column: "Premium", feature: "Suporte prioritário", enabled: true },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-8 bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8">
        <FeatureCard
          enabledFeatures={[
            "Até 50 agendamentos/mês",
            "1 psicólogo",
            "Agenda básica",
            "Lembretes por email",
            "Suporte por email",
          ]}
          disabledFeatures={[
            "Relatórios básicos",
            "Lembretes por SMS",
            "Integração com calendário",
            "Personalização da marca",
            "API de integração",
            "Suporte prioritário",
          ]}
          buttonName="Começar Grátis"
          buttonStyle={ButtonStyle.DEFAULT}
          buttonHref="/boolean-table"
          cardTitle="Free"
          cardValue={0}
          valueInfo="Grátis para sempre"
          cardSubtitle="Perfeito para psicólogos iniciantes"
        />
      
        <FeatureCard
          highlightBorders={true}
          enabledFeatures={[
            "Agendamentos ilimitados",
            "Até 5 psicólogos",
            "Agenda avançada",
            "Lembretes por email",
            "Suporte por email",
            "Relatórios avançados",
            "Lembretes por SMS",
            "Integração com calendário",
          ]}
          disabledFeatures={[
            "Personalização da marca",
            "API de integração",
            "Suporte prioritário",
          ]}
          buttonName="Escolher Pro"
          buttonStyle={ButtonStyle.HIGHLIGHT}
          buttonHref="/boolean-table"
          cardTitle="Pro"
          cardValue={49}
          monthly={true}
          cardSubtitle="Ideal para clínicas pequenas e médias"
        />
      </div>

      <div className="w-full max-w-4xl mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Compare nossos planos
        </h2>
        <BooleanTable features={featuresData} highlightedColumn="Pro" />
      </div>
    </div>
  );
};

export default PricingPage;