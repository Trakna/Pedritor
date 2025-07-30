export const Contatos = () => {
  return (
    <section className="bg-blue-600 w-full py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar sua clínica?
        </h2>
        
        <p className="text-blue-200 text-lg md:text-xl mb-8">
          Junte-se a centenas de psicólogos que já otimizaram seus agendamentos
        </p>
        
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="w-full sm:w-96 bg-white px-4 py-2.5 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            aria-label="Seu melhor email"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-md hover:bg-gray-100 transition-colors text-base"
          >
            Começar Agora
          </button>
        </form>
        
        <p className="text-blue-200 text-sm">
          Teste grátis por 14 dias. Cancele quando quiser.
        </p>
        
      </div>
    </section>
  );
};
