const Footer = () => {
  return (
    <footer className="relative z-20 w-full bg-slate-950 border-t border-slate-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Identidad y llamado a la acción */}
        <div className="text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <img src="/favicon.png" alt="Qrramba Labs" className="h-8 w-8 object-contain" />
            <span className="text-xl font-black tracking-tight">
              QRRAMBA <span className="text-yellow-400">LABS</span>
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            ¿Tienes alguna idea? <span className="text-blue-400">¡Contáctanos!</span>
          </h3>
          <p className="text-gray-400 text-base">
            Estamos listos para transformar tu visión en software de calidad.
          </p>
        </div>

        {/* Contacto directo y Redes */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Teléfono ficticio de Colombia */}
          <a
            href="tel:+573001234567"
            className="flex items-center gap-3 px-5 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors text-gray-200 group"
          >
            {/* Ícono de teléfono */}
            <svg
              className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-mono text-sm tracking-wider font-semibold">
              +57 300 123 4567
            </span>
          </a>

          {/* Botón de LinkedIn */}
          <a
            href="#linkedin"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 px-5 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(10,102,194,0.3)] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] cursor-pointer"
            title="LinkedIn (Próximamente)"
          >
            {/* Ícono oficial de LinkedIn */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Línea inferior de copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} QRRAMBA LABS. Todos los derechos reservados.</p>
        <p className="font-mono text-gray-400">Si lo puedes imaginar, lo puedes programar.</p>
      </div>
    </footer>
  );
};

export default Footer;
