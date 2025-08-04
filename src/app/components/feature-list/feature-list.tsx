import { FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";


export const FeatureList = () => {
    return (
        <>
            <section className="bg-[#f8fbff] py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Tudo que você precisa para organizar sua clínica
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Recursos pensados especificamente para profissionais da psicologia
                    </p>
                </div>
            </section>
            <section className="bg-[#f8fbff] py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white rounded-xl shadow p-8 text-center">
                            <FiCalendar className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Agendamento Online</h3>
                            <p className="text-gray-600 text-sm">
                                Pacientes podem agendar consultas 24/7 através de um link personalizado
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-8 text-center">
                            <FiBell className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Lembretes Automáticos</h3>
                            <p className="text-gray-600 text-sm">
                                SMS e email automáticos reduzem faltas e melhoram a pontualidade
                            </p>
                        </div>


                        <div className="bg-white rounded-xl shadow p-8 text-center">
                            <FiUsers className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Gestão de Pacientes</h3>
                            <p className="text-gray-600 text-sm">
                                Histórico completo, anotações e informações organizadas de cada paciente
                            </p>


                        </div>
                        <div className="bg-white rounded-xl shadow p-8 text-center ">
                            <FaRegClock className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Controle de Horários</h3>
                            <p className="text-gray-600 text-sm">
                                Vizualize sua agenda semanal e mensal de forma clara e intuitiva
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-8 text-center ">
                            <IoShieldOutline className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Segurança Total</h3>
                            <p className="text-gray-600 text-sm">
                                Dados protegidos com criptografia e conformidade com a LGPD
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-8 text-center ">
                            <LuChartColumnIncreasing className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Relatórios</h3>
                            <p className="text-gray-600 text-sm">
                                Acompanhe estatísticas da clínica e melhore seus resultados
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
