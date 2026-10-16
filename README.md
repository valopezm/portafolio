# Val López · Portafolio

Landing page en HTML, CSS y JavaScript puro. **Fase 1:** header, experiencia y contacto.

## Estructura

```
index.html                 Header, hero, experiencia y contacto
css/styles.css             Marca (variables :root), layout y animaciones
js/experiencia-data.js     TODO el contenido de Experiencia (aquí se editan las fechas)
js/main.js                 Pinta la experiencia y anima las estrellas
assets/img/                val-perfil.jpg (tu foto), estrella.svg (favicon)
assets/fonts/              GodinDisplay.woff2 (licencia web)
```

## Pendientes para la siguiente fase

1. **Fechas:** busca `TODO-FECHA` en `js/experiencia-data.js` y completa cada `fecha`.
2. **Foto de perfil:** guárdala como `assets/img/val-perfil.jpg` (vertical 4:5, ~800 px de ancho, menos de 300 KB). Mientras no exista, el hero muestra el arco azul con las estrellas.
3. **Godin Display:** coloca `GodinDisplay.woff2` en `assets/fonts/`. Mientras no esté, se usa una serif de respaldo.
4. **Logo y estrella oficiales:** reemplaza el trazo de `<symbol id="estrella">` en `index.html` y `assets/img/estrella.svg` por tu SVG.

## Ver en local

Abre `index.html` en el navegador, o usa la extensión Live Server de VS Code.

## Subir a GitHub y publicar con GitHub Pages

```bash
git init
git add .
git commit -m "Fase 1: header, experiencia y contacto"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
