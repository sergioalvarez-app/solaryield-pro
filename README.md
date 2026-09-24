# ☀️ SolarYield Pro

Herramienta web gratuita (PWA) de **diagnóstico rápido para plantas fotovoltaicas**, presencial y remoto.

- Irradiancia en tiempo real en el plano del módulo (Open-Meteo) y cielo despejado teórico (PVGIS · Comisión Europea).
- Potencia esperada con corrección por temperatura de célula y pérdidas de sistema.
- Comparador con la lectura del inversor: rendimiento vs. esperado, PR (IEC), desviación y semáforo de estado.
- GPS, inclinómetro con el acelerómetro del móvil y plantas guardadas en el propio dispositivo.
- Comparador de strings/MPPT (corriente o potencia, normalizado por nº de módulos) para localizar strings abiertos o con pérdidas.
- Voc/Isc esperados según la ficha del módulo, con diagnóstico automático de la medida del multímetro (string abierto, polaridad, diodos de bypass, módulos de menos).
- Balance energético diario (hoy/ayer) con la irradiancia real, días sin lluvia y estimación de suciedad.
- Historial por planta con gráfico de tendencia y exportación a CSV.
- Modo degradado offline (modelo astronómico local) y alertas opcionales por Telegram.

Sin registro, sin servidor, sin cookies: los datos se guardan solo en tu navegador.

**Datos:** [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0) · [PVGIS © Unión Europea](https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en).
Valores orientativos; no sustituyen una medición con piranómetro calibrado.

## Licencia

Copyright © 2026 Sergio Álvarez. Distribuido bajo la licencia **GNU GPL-3.0**: puedes usarlo, estudiarlo, modificarlo y compartirlo libremente, siempre que las versiones derivadas se publiquen también como código abierto bajo la misma licencia. Ver [LICENSE](LICENSE).
