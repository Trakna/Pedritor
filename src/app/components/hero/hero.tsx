export const Hero = () => {
  return (
    <section className="bg-[#f8fbff] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Simplifique os agendamentos da sua{' '}
          <span className="text-blue-600">clínica psicológica</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Gerencie consultas, pacientes e horários em um só lugar. Mais tempo para cuidar, menos tempo com burocracia.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition">
            Teste Grátis por 14 dias
          </button>
          <button className="bg-white text-black font-bold border border-black px-6 py-3 rounded hover:bg-gray-100 transition">
            Ver Demonstração
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
          <p>✓ Sem cartão de crédito</p>
          <p>✓ Configuração em 5 minutos</p>
        </div>
      </div>
    </section>
  );
};