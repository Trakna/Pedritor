import { FiMail, FiLock } from "react-icons/fi";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Entrar na sua conta</h2>
        <p className="text-center text-gray-600 mb-6">
          Acesse sua agenda e gerencie seus pacientes
        </p>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-black">Email</label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <FiMail className="text-gray-600 mr-2" />
              <input
                type="email"
                placeholder="seu@email.com"
                className="bg-gray-50 outline-none w-full text-black px-2 py-1 rounded"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-black">Senha</label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Sua senha"
                className="bg-gray-50 outline-none w-full text-black px-2 py-1 rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded py-2 mt-2 hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
        <div className="text-center mt-2 text-sm text-gray-600">
          Não tem uma conta?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Criar conta
          </a>
        </div>
        <hr className="my-4" />
        <div className="text-center text-sm text-gray-600">
          Você é administrador? <br />
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Acessar painel administrativo
          </a>
        </div>
      </div>
    </div>
  );
}