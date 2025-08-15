"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";

export type Feature = {
  column: string;
  feature: string;
  enabled: boolean;
};

type BooleanTableProps = {
  features: Feature[];
  highlightedColumn?: string;
};

export const BooleanTable: React.FC<BooleanTableProps> = ({
  features,
  highlightedColumn,
}) => {
  if (!features || features.length === 0) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
        Erro: A lista de funcionalidades não pode estar vazia.
      </div>
    );
  }

  const columns = Array.from(new Set(features.map((f) => f.column)));
  const featuresList = Array.from(new Set(features.map((f) => f.feature)));

  if (highlightedColumn && !columns.includes(highlightedColumn)) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
        Erro: A coluna destacada "{highlightedColumn}" não existe nos dados fornecidos.
      </div>
    );
  }

  for (const featureName of featuresList) {
    for (const columnName of columns) {
      const exists = features.some(
        (f) => f.feature === featureName && f.column === columnName
      );
      if (!exists) {
        return (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
            Erro: A funcionalidade "{featureName}" não tem um valor `enabled` definido para a coluna "{columnName}".
          </div>
        );
      }
    }
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Recursos
            </th>
            {columns.map((columnName) => (
              <th
                key={columnName}
                scope="col"
                className={`py-3 px-6 text-center ${
                  columnName === highlightedColumn ? "bg-blue-100 text-blue-700" : ""
                }`}
              >
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {featuresList.map((featureName, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {featureName}
              </td>
              
              {columns.map((columnName) => {
                const feature = features.find(
                  (f) => f.feature === featureName && f.column === columnName
                );
                
                return (
                  <td
                    key={`${featureName}-${columnName}`}
                    className={`py-4 px-6 text-center text-lg ${
                      columnName === highlightedColumn ? "bg-blue-50" : ""
                    }`}
                  >
                    {feature?.enabled ? (
                      <FaCheck className="text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">x</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooleanTable;