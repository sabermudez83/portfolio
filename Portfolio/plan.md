# PLAN DE IMPLEMENTACIÓN: Rediseño Visual & Experiencia 3D (Estilo Active Theory)

## 1. Visión Estética & Referencia Active Theory

Inspirado en la dirección de arte y desarrollo creativo de **Active Theory**, el objetivo es transformar el fondo del portfolio en una **atmósfera 3D cinematográfica, reactiva e inmersiva**.

### Elementos Clave de la Experiencia:
- **Canvas WebGL 3D en Fondo:** Deformación plana fluida con shader de ruido líquido (Simplex Noise 3D) y un campo de micro-partículas flotantes en profundidad.
- **Micro-Interacciones al Cursor & Scroll:** El mouse y el desplazamiento vertical generan ondas de distorsión suave sobre el canvas 3D con inercia orgánica (`damping`/`lerp`).
- **Contraste Editorial en Primer Plano:** El texto, las tarjetas de proyectos y los botones flotan sobre la capa 3D en contenedores de vidrio oscuro (*glassmorphism* sutil con `backdrop-blur` y bordes finos `#26262E`).
- **Desacoplamiento Estricto:** Separación total entre el Canvas 3D de fondo (`pointer-events-none`, `z-index: -10`) y la capa interactiva DOM (`z-index: 10`).

---

## 2. Librerías & Dependencias

Para mantener la velocidad de carga y no alterar la arquitectura autónoma del archivo `index.html`, utilizaremos dependencias livianas vía CDN:

1. **Three.js (v128+):**
   - URL CDN: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`
   - Propósito: Renderizador WebGL, cámara, escenas, geometrías y compilación de custom Shaders GLSL.
2. **GSAP 3 + ScrollTrigger (Ya integrado):**
   - Propósito: Sincronización de eventos de scroll del DOM con los parámetros `uniforms` del shader (velocidad, elevación y distorsión).

---

## 3. Arquitectura del Sistema 3D & Shaders GLSL

```
+------------------------------------------------------------------+
| LAYER 1 (DOM - Foreground, z-index: 10)                         |
| Header | Hero Typography | Cases Grid | Drawers | Privacy Modals  |
+------------------------------------------------------------------+
| LAYER 0 (Canvas WebGL - Background, z-index: -10)                |
| Custom Vertex Shader (Wave Distortion + Simplex Noise)           |
| Custom Fragment Shader (Atmospheric Gradient + Accent Glow)      |
| Instanced Particle Field (12,000 Particles)                      |
+------------------------------------------------------------------+
```

### A. Custom Vertex Shader (Distorsión Líquida)
- Deforma los vértices de un plano WebGL 3D en tiempo real combinando:
  - Frecuencia de tiempo constante (`uTime`).
  - Posición suavizada del cursor (`uMouse`).
  - Velocidad y posición de scroll (`uScroll`).

### B. Custom Fragment Shader (Gradiente Editorial & Acento)
- Genera una paleta de color cinematográfica:
  - Base: `#0A0A0C` (Canvas Oscuro).
  - Elevación: `#141418` (Superficie).
  - Destello reactivo: `#00F076` (Verde Acento) suavizado en los puntos de interferencia del cursor.

### C. Sistema de Partículas Flotantes
- Un sistema de 10,000 a 15,000 partículas distribuidas en el espacio tridimensional con opacidad variable y efecto *bokeh* tenue.

---

## 4. Estrategia de Optimización & Mobile Fallback

Para garantizar 60 FPS constantes y proteger el rendimiento en celulares:

1. **Pause on Tab Hidden (Page Visibility API):**
   - El bucle `requestAnimationFrame` se detiene automáticamente cuando el usuario cambia de pestaña (`document.hidden`), eliminando el consumo de GPU/CPU en segundo plano.

2. **Detección Móvil & Rendimiento:**
   - En pantallas pequeñas (`window.innerWidth < 768`) o dispositivos táctiles (`matchMedia('(hover: none)').matches`):
     - **NO se inicializa el motor 3D WebGL** para evitar degradar el scroll táctil ni agotar la batería del dispositivo.
     - **Fallback Elegante:** Se activa un fondo de gradiente radial estático/CSS tenue (`bg-radial-gradient`) que conserva exactamente la misma estética oscura y editorial sin sobrecargar el procesador.

3. **Limitación de Device Pixel Ratio:**
   - `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` para evitar renderizados excesivos en pantallas retina 4K.

---

## 5. Preservación del Código & Funcionalidades Existentes

Se mantendrán **intactos e inalterados**:
- Todos los textos, títulos y metadatos de Santiago Bermúdez.
- Las 4 tarjetas insignias de proyectos y las 11 filas del Repositorio Ejecutivo.
- Las galerías de imágenes locales en `Proyectos/`.
- Los paneles laterales (*Side-Drawer*) de análisis de casos.
- La galería integrada de Behance.
- El reloj dinámico de Buenos Aires.
- Los avisos legales, políticas de privacidad, banner de consentimiento de cookies y esquema SEO JSON-LD.

---

## 6. Pasos de Ejecución Propuestos

1. **Fase 1:** Incorporación del script de Three.js en la cabecera `<head>` de `index.html`.
2. **Fase 2:** Creación del contenedor `<canvas id="webgl-canvas">` y configuración de la capa DOM transparente.
3. **Fase 3:** Implementación de la escena Three.js (Shaders GLSL de deformación de plano + campo de partículas 3D).
4. **Fase 4:** Vinculación de listeners de mouse y scroll con interpolación `lerp` (suavizado inercial).
5. **Fase 5:** Implementación del fallback móvil CSS y pausa por visibilidad de pestaña.
6. **Fase 6:** Validación local y despliegue automático a Git y Vercel en `https://sabermudez.vercel.app`.

---
*¿Estás de acuerdo con este plan para proceder a la implementación en `index.html`?*
