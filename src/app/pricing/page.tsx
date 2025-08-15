import { FeatureCard, ButtonStyle } from "../components/feature-card/feature-card";
import React from "react";

const PricingPage = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col md:flex-row md:items-start md:justify-center gap-8 bg-gray-50">
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
        buttonHref="/login"
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
        buttonHref="/login"
        cardTitle="Pro"
        cardValue={49}
        monthly={true}
        cardSubtitle="Ideal para clínicas pequenas e médias"
      />
    </div>
  );
};

export default PricingPage;
