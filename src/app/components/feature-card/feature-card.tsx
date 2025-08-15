// src/components/feature-card/feature-card.tsx

"use client";

import React from "react";
import Link from "next/link";

export enum ButtonStyle {
  DEFAULT = "default",
  HIGHLIGHT = "highlight",
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
  // Define o estilo padrão como o azul (HIGHLIGHT).
  let buttonStyleClasses = "bg-blue-600 text-white hover:bg-blue-700";

  // Se o estilo for DEFAULT, sobrescreve com as classes cinzas.
  if (buttonStyle === ButtonStyle.DEFAULT) {
    buttonStyleClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  }

  return (
    <div
      className={`relative rounded-xl shadow-md w-full sm:w-80 text-center bg-white border ${
        highlightBorders ? "border-blue-600" : "border-gray-200"
      } p-8 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
    >
      {highlightBorders && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
          Mais Popular
        </div>
      )}

      <h3 className="text-lg text-black font-semibold mb-1">{cardTitle}</h3>
      <div className="mb-1">
        <span className={`text-4xl font-bold ${highlightBorders ? "text-black" : "text-black"}`}>
          R$ {cardValue}
        </span>
        {monthly && <span className="text-sm font-medium text-gray-500"> /por mês</span>}
      </div>
      {valueInfo && <p className="text-xs text-gray-500 mb-5">{valueInfo}</p>}
      <p className="text-sm text-gray-500 mb-5">{cardSubtitle}</p>

      <ul className="text-left mb-6 space-y-3">
        {enabledFeatures.map((feature, index) => (
          <li key={`enabled-${index}`} className="flex items-center text-gray-800 text-sm">
            <svg
              className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
        {disabledFeatures.map((feature, index) => (
          <li key={`disabled-${index}`} className="flex items-center text-gray-400 text-sm">
            <svg
              className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={buttonHref} passHref>
        <button
          className={`w-full py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${buttonStyleClasses}`}
        >
          {buttonName}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;