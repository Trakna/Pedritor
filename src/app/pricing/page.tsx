// src/app/pricing/page.tsx

import { FeatureCard, ButtonStyle } from "../components/feature-card/feature-card";
import React from "react";

const PricingPage = () => {
  return (
    <div className="flex justify-center p-8 bg-gray-50 min-h-screen">
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
        // A prop buttonAction foi removida daqui
        cardTitle="Free"
        cardValue={0}
        valueInfo="Grátis para sempre"
        cardSubtitle="Perfeito para psicólogos iniciantes"
      />
    </div>
  );
};

export default PricingPage;