import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Configuración del efecto Matrix binario
    const binaryChars = '01';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      // Fondo semi-transparente para crear el efecto de estela
      ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Caracteres en tono cyan/blue brillante
      ctx.fillStyle = '#38bdf8';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 33);

    const handleResize = () => {
      setCanvasSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* Fondo Canvas fijo (Parallax / efecto estático al hacer scroll) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      />

      {/* Capa de transparencia con gradiente radial y viñeta sutil */}
      <div className="fixed inset-0 bg-radial from-transparent via-slate-950/60 to-slate-950/90 pointer-events-none z-0" />

      {/* Contenido Hero fijado/centrado */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        {/* Glow decorativo de fondo */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>



        {/* Título Principal */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] mb-6">
          QRRAMBA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">LABS</span>
        </h1>

        {/* Eslogan en blanco con efecto de brillo y animación */}
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-wide drop-shadow-md">
            Si lo puedes imaginar,
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] animate-pulse">
            lo puedes programar.
          </p>
        </div>

        {/* Botones de acción con micro-interacciones */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#servicios"
            className="group relative px-8 py-3.5 font-bold text-white text-base md:text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Descubre nuestro código
          </a>
          <a
            href="#nosotros"
            className="px-8 py-3.5 font-semibold text-white/90 hover:text-white text-base md:text-lg bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300"
          >
            Conoce el equipo
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Degradado inferior suave para transicionar a siguientes secciones */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default HeroSection;
