# HumbertoBenavides.com — sitio bilingüe para GitHub Pages

## Estructura
- `/index.html`: detecta el idioma y redirige a `/es/` o `/en/`.
- `/es/index.html`: versión completa en español.
- `/en/index.html`: versión completa en inglés.
- `/assets/js/site.js`: animaciones, menú y preferencia de idioma.
- `/CNAME`: conecta GitHub Pages con `humbertobenavides.com`.
- `/.nojekyll`: evita procesamiento innecesario de Jekyll.

## Publicación
1. Sustituye el contenido de la rama publicada de tu repositorio por todos estos archivos y carpetas.
2. En GitHub: Settings > Pages > Deploy from a branch > `main` > `/root`.
3. En Custom domain escribe `humbertobenavides.com`.
4. Conserva el archivo `CNAME`.
5. Cuando GitHub valide el DNS, activa Enforce HTTPS.

## Pendientes personales
- Cambia el enlace genérico de LinkedIn por tu perfil real.
- Confirma que `contacto@humbertobenavides.com` sea el correo deseado.
- Puedes sustituir los botones de email por Calendly o WhatsApp más adelante.
