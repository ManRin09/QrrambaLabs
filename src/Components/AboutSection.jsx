const AboutSection = () => {
  const cards = [
    {
      title: 'Desarrollo Fullstack',
      description:
        "Desarrollamos apps completas, con bases de datos, Rest API's y UI intuitivas.",
      icon: (
        <span className="font-mono text-2xl font-bold tracking-tighter text-blue-400 group-hover:text-blue-300">
          {'</>'}
        </span>
      ),
      accentColor: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
    },
    {
      title: 'Acompañamiento',
      description:
        'No solo programamos, te ayudamos a plasmar tus ideas en código.',
      icon: (
        <svg
          className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      accentColor: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
    },
    {
      title: 'Mantenimiento de tus sistemas informáticos',
      description:
        'Si ya tienes algún sistema podemos hacerle mantenimiento, ¡o mejorarlo!',
      icon: (
        <svg
          className="w-7 h-7 text-amber-400 group-hover:text-amber-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      accentColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'border-amber-500/30 hover:border-amber-400',
    },
  ];

  return (
    <section id="nosotros" className="relative z-20 w-full bg-slate-900/95 backdrop-blur-md px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-400 text-lg">
            En Qrramba Labs transformamos ideas en software de alto impacto. Creamos soluciones robustas, ágiles e interactivas.
          </p>
        </div>

        {/* Grilla de 3 cajas sin bordes redondeados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative bg-slate-950/80 p-8 border ${card.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between`}
            >
              {/* Resplandor superior interno */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.accentColor} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Contenedor del Icono sin bordes redondeados */}
                <div className="w-14 h-14 bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Detalle decorativo inferior */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                <span>Qrramba</span>
                <span>•</span>
                <span>Services</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
