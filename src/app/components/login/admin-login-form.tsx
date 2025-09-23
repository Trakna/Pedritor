import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

export default function AdminLoginForm() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="bg-[#181f2a] rounded-lg shadow p-8 w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 rounded-full p-3">
                        <FiLock className="text-white text-2xl" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-2 text-white">Acesso Administrativo</h2>
                <p className="text-center text-gray-400 mb-6">
                    Entre com suas credenciais de administrador
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1 text-gray-200">Email Administrativo</label>
                        <div className="flex items-center border rounded px-3 py-2 bg-[#232b3a]">
                            <FiMail className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="admin@psiagenda.com"
                                className="bg-[#232b3a] outline-none w-full text-white px-2 py-1 rounded"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1 text-gray-200">Senha</label>
                        <div className="flex items-center border rounded px-3 py-2 bg-[#232b3a]">
                            <FiLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Sua senha administrativa"
                                className="bg-[#232b3a] outline-none w-full text-white px-2 py-1 rounded"
                            />
                            {/* Ícone de olho pode ser adicionado aqui */}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold rounded py-2 mt-2 hover:bg-blue-700 transition"
                    >
                        Entrar no Painel
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="#" className="text-blue-400 text-sm hover:underline">
                        Esqueceu sua senha administrativa?
                    </a>
                </div>
                <hr className="my-4 border-gray-700" />
                <div className="text-center mt-2 text-sm text-gray-400">
                    Não é administrador?{" "}
                    <a href="/login" className="text-blue-400 hover:underline">
                        <br />
                        Fazer login como usuário
                    </a>
                </div>
                <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center gap-2 border border-yellow-600 bg-[#232b3a] text-yellow-400 rounded px-4 py-2 text-xs">
                        <FiAlertCircle />
                        Área restrita para administradores autorizados
                    </div>
                </div>
            </div>
        </div>
    );
}