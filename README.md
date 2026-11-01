# Qrramba Labs

Landing page de **Qrramba Labs**, construida con React y Vite.

🔗 **Demo en vivo:** [qrramba-labs.vercel.app](https://qrramba-labs.vercel.app)

---

## Tecnologías

- [React](https://react.dev): interfaz de usuario
- [Vite](https://vite.dev): entorno de desarrollo y empaquetado rápido con HMR
- [Oxlint](https://oxc.rs): análisis estático del código
- [Vercel](https://vercel.com): despliegue

## Requisitos

- [Node.js](https://nodejs.org) (versión LTS recomendada)
- npm (viene incluido con Node.js)

## Primeros pasos

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ManRin09/QrrambaLabs.git
   cd QrrambaLabs
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abre la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión optimizada para producción |
| `npm run preview` | Sirve localmente la versión de producción |

## Estructura del proyecto

```text
QrrambaLabs/
├── public/          # Archivos estáticos
├── src/             # Código fuente de la aplicación
├── index.html       # Punto de entrada HTML
├── vite.config.js   # Configuración de Vite
└── .oxlintrc.json   # Reglas de Oxlint
```

## Despliegue

El sitio se despliega en Vercel. Para publicar tu propia copia, importa el repositorio en Vercel: detecta Vite automáticamente y usa `npm run build` como comando de compilación.

## Autores

- [@ManRin09](https://github.com/ManRin09)
- [@Nuz777](https://github.com/Nuz777)

## Contribuir

1. Crea una rama a partir de `main`.
2. Haz tus cambios y confirma con un mensaje claro.
3. Abre un pull request describiendo qué cambió y por qué.
