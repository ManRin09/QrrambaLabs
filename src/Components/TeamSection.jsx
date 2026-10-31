const TeamSection = () => {
  const team = [
    {
      name: 'Ivan Mejia',
      role: 'Full Stack Dev | C# • .NET • Node.js • Next.js • Angular • React',
      image: '/ivan-mejia.png',
    },
    {
      name: 'Negro Jose',
      role: 'Desarrollador backend con .Net y Sql',
      image: '/negro-jose.png',
    },
    {
      name: 'Juan Maldonado',
      role: 'Desarrollador fullstack con .Net y Razor',
      image: '/juan-maldonado.png',
    },
    {
      name: 'Andres Cortes',
      role: 'Analista de datos y desarrollador backend',
      image: '/andres-cortes.png',
    },
    {
      name: 'Jorge Corrales',
      role: 'Desarrollador frontend con Next.js',
      image: '/jorge-corrales.png',
    },
    {
      name: 'Manuel Rincon',
      role: 'Desarrollador Backend con Node.js y .Net',
      image: '/manuel-rincon.png',
    },
  ];

  // Duplicamos la lista para lograr un bucle infinito y continuo sin saltos visuales
  const carouselItems = [...team, ...team];

  return (
    <section id="equipo" className="relative z-20 w-full bg-slate-950/95 py-24 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
            Talento & Experiencia
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-gray-400 text-lg">
            Las mentes apasionadas que transforman ideas y requerimientos en software de primer nivel.
          </p>
        </div>
      </div>

      {/* Contenedor del carrusel con máscaras de difuminado a los lados */}
      <div className="relative w-full overflow-hidden">
        {/* Gradiente izquierdo para difuminar la entrada */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Gradiente derecho para difuminar la salida */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Pista animada que rueda suavemente */}
        <div className="animate-infinite-scroll flex gap-8 py-4">
          {carouselItems.map((member, index) => (
            <div
              key={index}
              className="group relative w-72 md:w-80 flex-shrink-0 bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-square overflow-hidden bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Contenido */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-blue-400 tracking-wide mt-2 line-clamp-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
