"use client";

import React, { useState } from "react";

export function UserRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#f5f8fc] to-white">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Criar nova conta
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Comece a organizar sua prática psicológica
        </p>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-black">
              Nome completo
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full border rounded px-4 py-2 pl-10 placeholder-gray-500 text-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa fa-user" />
              </span>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black">Telefone</label>
            <div className="relative">
              <input
                type="text"
                placeholder="(11) 99999-9999"
                className="w-full border rounded px-4 py-2 pl-10 placeholder-gray-500 text-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa fa-phone" />
              </span>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full border rounded px-4 py-2 pl-10 placeholder-gray-500 text-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa fa-envelope" />
              </span>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                className="w-full border rounded px-4 py-2 pl-10 pr-10 placeholder-gray-500 text-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa fa-lock" />
              </span>
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                <i
                  className={`fa ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                />
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black">
              Confirmar senha
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full border rounded px-4 py-2 pl-10 placeholder-gray-500 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 font-semibold mt-2"
          >
            Criar Conta
          </button>
        </form>

        {/* 🔹 Rodapé mantido */}
        <div className="text-center mt-4 text-gray-600">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Fazer login
          </a>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <span className="text-gray-600">Você é administrador?</span>
          <br />
          <a href="/admin" className="text-blue-600 font-semibold">
            Acessar painel administrativo
          </a>
        </div>
      </div>
    </div>
  );
}
/*Só um comentário para lembrar das tasks pedritor*/ 