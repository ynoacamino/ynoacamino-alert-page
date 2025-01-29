# 📌 Alerta UNSA de Talón de Pago

Este proyecto es una aplicación web que notifica a los usuarios cuando su **talón de pago** de la Universidad Nacional de San Agustín (UNSA) está disponible. Se envían notificaciones a través de correo electrónico y WhatsApp. La aplicación también muestra el estado de las consultas realizadas en un **dashboard**.

## 🚀 Tecnologías Utilizadas

- **Frontend**: [Next.js](https://nextjs.org/), TypeScript, Tailwind CSS
- **Autenticación**: [NextAuth.js](https://next-auth.js.org/)
- **Estado y Temas**: Context API, `next-themes`
- **UI Components**: Lucide-react, Tailwind Merge, clsx
- **Manejo de Progreso**: `next-nprogress-bar`

## 📂 Estructura del Proyecto

```
src/
│── components/
│   ├── global/        # Componentes globales como NavBarMobile
│   ├── pages/
│   │   ├── dashboard/ # Componentes de la tabla de estado de consultas
│   │   ├── index/     # Componentes de la página principal
│   ├── providers/     # Proveedores de autenticación, temas y barra de progreso
│── config/
│   ├── global.tsx     # Configuración global (ej. URL del backend)
│── lib/
│   ├── utils.ts       # Función utilitaria para clases CSS
│── types/
│   ├── query.ts       # Tipos de datos para consultas
```

![Estructura del Proyecto](https://ynoa-uploader.ynoacamino.site/uploads/1738105025_Untitled-2024-11-30-1525%20%283%29.png)

## 📷 Capturas de pantalla
![Página de Inicio](https://ynoa-uploader.ynoacamino.site/uploads/1738192518_image%20%282%29.png)

## 🛠 Instalación y Configuración

1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/ynoacamino/ynoacamino-alert-page.git
   cd ynoacamino-alert-page
   ```

2. **Instalar dependencias:**
   ```sh
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` y agrega las siguientes variables:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://alert-server.ynoacamino.site
   ```

4. **Ejecutar el proyecto en desarrollo:**
   ```sh
   npm run dev
   ```

## 📌 Funcionalidades Principales

### 🔹 Navbar Móvil (`NavBarMobile.tsx`)
- Menú lateral responsive con opciones de navegación.
- Soporta cambio de tema (`ThemeToggleMobile`).
- Se cierra al presionar `Escape` o hacer clic fuera del menú.

### 🔹 Dashboard (`BodyTable.tsx`, `HeaderTable.tsx`, `FooterTable.tsx`, `SkeletonTable.tsx`)
- Muestra el estado de consultas sobre el talón de pago.
- Usa `Tooltip` para mostrar fechas en formatos detallados.
- Estados visuales con colores e iconos:
  - ⌛ Pendiente
  - ❌ Fallido
  - ✅ Disponible

### 🔹 Página de Inicio (`Presentation.tsx`)
- Explica el propósito del sistema.
- Permite registro con Google mediante `next-auth`.

### 🔹 Proveedores (`AuthProvider.tsx`, `ProgressBarProvider.tsx`, `ThemeProvider.tsx`)
- Manejo de sesión con `SessionProvider`.
- Barra de progreso para mejorar la UX.
- Cambio de tema con `next-themes`.

## 🔗 Contribución
1. Realiza un `fork` del repositorio.
2. Crea una nueva rama: `git checkout -b feature-nueva-funcionalidad`
3. Realiza cambios y haz `commit`: `git commit -m "Añadir nueva funcionalidad"`
4. Envía un `pull request`.
