# ☀️ SolarYield Pro

Herramienta web gratuita y de código abierto (PWA) para el **diagnóstico rápido de plantas fotovoltaicas**, en campo y en remoto. Pensada para técnicos de mantenimiento, instaladores e ingenieros FV.

**👉 App:** https://sergioalvarez-app.github.io/solaryield-pro/

## Herramientas

Se eligen desde el menú desplegable superior:

- **⚡ Diagnóstico rápido** – irradiancia real en el plano del módulo (Open-Meteo) y de cielo despejado (modelo Ineichen-Perez), potencia esperada corregida por temperatura, pérdidas y límite del inversor (clipping). Se compara con la lectura del inversor → rendimiento, PR y semáforo 🟢🟡🔴. GPS e inclinómetro del móvil.
- **🔌 Strings / MPPT** – compara hasta 100 strings por corriente o potencia (normalizando por nº de módulos) y localiza strings abiertos o con pérdidas. Admite pegar columnas de Excel.
- **🔋 Multímetro Voc / Isc** – valores esperados según la ficha del módulo y diagnóstico automático de la medida (string abierto, polaridad invertida, módulos de menos, diodos de bypass).
- **📅 Energía diaria y lluvia** – energía esperada de hoy o de ayer con la irradiancia real, días sin lluvia y previsión.
- **✅ Checklist de mantenimiento** – 38 puntos inspirados en IEC 62446-1 y buenas prácticas de O&M, con notas y fotos de cada defecto.
- **📷 Informe con fotos (PDF)** – fotos con fecha, hora y coordenadas estampadas; informe PDF profesional para descargar o compartir por WhatsApp o email.
- **📈 Historial** – evolución del rendimiento por planta, detección de limpiezas y exportación a CSV.

Además: plantas guardadas para consulta remota, **modo alto contraste** para leer a pleno sol, **copia de seguridad completa**, funcionamiento sin conexión y modo degradado si la API meteorológica falla.

Sin registro, sin servidor y sin cookies: todos los datos se guardan solo en tu dispositivo.

**Datos:** [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0). Valores orientativos: no sustituyen una medición con piranómetro calibrado.

## Licencia

Copyright © 2026 Sergio Álvarez. Distribuido bajo la licencia **GNU GPL-3.0**: puedes usarlo, estudiarlo, modificarlo y compartirlo libremente, siempre que las versiones derivadas se publiquen también como código abierto bajo la misma licencia. Ver [LICENSE](LICENSE).
