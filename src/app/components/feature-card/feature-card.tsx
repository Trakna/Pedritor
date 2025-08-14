"use client";

import React from "react";


export enum ButtonStyle {
  DEFAULT = "default",
  OUTLINE = "outline",
  PRIMARY = "primary",
}

type FeatureCardProps = {
  highlightBorders?: boolean;
  enabledFeatures: string[];
  disabledFeatures: string[];
  buttonName: string;
  buttonStyle: ButtonStyle;
  cardTitle: string;
  cardValue: number;
  monthly?: boolean;
  valueInfo?: string;
  cardSubtitle: string;
  buttonHref: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  highlightBorders = false,
  enabledFeatures,
  disabledFeatures,
  buttonName,
  buttonStyle,
  cardTitle,
  cardValue,
  monthly = false,
  valueInfo = "",
  cardSubtitle,
  buttonHref,
}) => {
  const handleButtonClick = () => {
    window.location.href = buttonHref;
  };

  return (
    <div style={{ color: "black",border: highlightBorders ? '2px solid blue' : 'none', padding: '20px', margin: 'auto', maxWidth: '300px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>{cardTitle}</h3>
      <div>
        <span>R${cardValue}</span>
        {monthly && <span> /mês</span>}
      </div>
      {valueInfo && <p>{valueInfo}</p>}
      <p>{cardSubtitle}</p>
      <ul>
        {enabledFeatures.map((feature, index) => (
          <li key={`enabled-${index}`}>✔️ {feature}</li>
        ))}
        {disabledFeatures.map((feature, index) => (
          <li key={`disabled-${index}`}>❌ {feature}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick} style={{ marginTop: '10px', padding: '8px 16px', border: '1px solid black', borderRadius: '4px', cursor: 'pointer' }}>
        {buttonName}
      </button>
    </div>
  );
};

export default FeatureCard;