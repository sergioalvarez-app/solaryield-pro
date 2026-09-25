# ☀️ SolarYield Pro

Herramienta web gratuita y de código abierto (PWA) para el **diagnóstico rápido de plantas fotovoltaicas**, en campo y en remoto. Pensada para técnicos de mantenimiento, instaladores e ingenieros FV.

**👉 App:** https://sergioalvarez-app.github.io/solaryield-pro/

## Herramientas

Se eligen desde el menú desplegable superior:

- **⚡ Diagnóstico rápido** – plantas de una o varias orientaciones (Este-Oeste, dos aguas…) con su antigüedad; irradiancia real en el plano del módulo (Open-Meteo) y de cielo despejado (modelo Ineichen-Perez), potencia esperada corregida por temperatura, pérdidas y límite del inversor (clipping). Estructura fija o **seguidor a un eje** (con backtracking), **módulos bifaciales** y **obstáculos en el horizonte** (edificios, árboles). Datos meteorológicos cada 15 minutos y **margen de error** según la nubosidad. Se compara con la lectura del inversor → rendimiento, PR y semáforo 🟢🟡🔴. GPS e inclinómetro del móvil.
- **🔌 Strings / MPPT** – compara hasta 100 strings por corriente o potencia (normalizando por nº de módulos) y localiza strings abiertos o con pérdidas. Admite pegar columnas de Excel.
- **🔋 Multímetro Voc / Isc** – valores esperados según la ficha del módulo y diagnóstico automático de la medida (string abierto, polaridad invertida, módulos de menos, diodos de bypass).
- **📅 Energía diaria y lluvia** – energía esperada de hoy o de ayer con la irradiancia real, días sin lluvia y previsión. **Importa el CSV/Excel del portal del inversor** (Huawei, SolarEdge, Fronius, SMA, GoodWe…) y compara día a día hasta 1 año con la meteorología histórica real: detecta paradas, suciedad progresiva y pérdidas.
- **🌬️ Planificar visita** – previsión de 7 días de la planta en tu horario de trabajo (rachas de viento, lluvia, tormentas y calor) con semáforo por día y el mejor día para subir a la cubierta. Límites editables en Ajustes; funciona sin cobertura con la última previsión.
- **✅ Checklist de mantenimiento** – 38 puntos inspirados en IEC 62446-1 y buenas prácticas de O&M, con notas y fotos de cada defecto.
- **📷 Informe con fotos (PDF)** – fotos con fecha, hora y coordenadas estampadas; informe PDF profesional para descargar o compartir por WhatsApp o email.
- **📈 Historial** – evolución del rendimiento por planta, detección de limpiezas y exportación a CSV.

Además: plantas guardadas para consulta remota, ayudas (?) en cada dato, **modo alto contraste** para leer a pleno sol y **copia de seguridad completa**.

**📶 Funciona sin cobertura:** tras la primera visita, la app entera (estilos, fuentes y generador de PDF) queda guardada en el móvil. Sin datos móviles se usa el modelo astronómico de cielo despejado.

**🌍 7 idiomas:** español, English, français, Deutsch, italiano, português y català. Se elige solo según el idioma del móvil y se puede cambiar en Ajustes o al pie de la página (también traduce el informe PDF y el recordatorio de calendario).

**💬 ¿Ideas o errores?** Usa el botón *Enviar sugerencia* de la app o abre un [issue](https://github.com/sergioalvarez-app/solaryield-pro/issues).

Sin registro, sin servidor y sin cookies: todos los datos se guardan solo en tu dispositivo.

**Datos:** [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0). Valores orientativos: no sustituyen una medición con piranómetro calibrado.

## Créditos de terceros

- [jsPDF](https://github.com/parallax/jsPDF) (MIT) – `vendor/`
- Fuentes Orbitron, JetBrains Mono y Space Grotesk (SIL OFL 1.1) – `fonts/`
- Estilos generados con [Tailwind CSS](https://tailwindcss.com) (MIT)

## Licencia

Copyright © 2026 Sergio Álvarez. Distribuido bajo la licencia **GNU GPL-3.0**: puedes usarlo, estudiarlo, modificarlo y compartirlo libremente, siempre que las versiones derivadas se publiquen también como código abierto bajo la misma licencia. Ver [LICENSE](LICENSE).
