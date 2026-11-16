export type Product = {
  name: string
  /** Paso de la aplicación en el que actúa (1 a 4) */
  step: string
  stepLabel: string
  categoryShort: string
  /** Color del producto, legible como texto sobre fondo blanco */
  color: string
  tagline: string
  description: string
  highlights: string[]
  dose: string | null
  presentation: string | null
  brochureUrl: string | null
  labelUrl: string | null
  imageUrl: string
}

/**
 * Ordenados según el recorrido de una aplicación: agua, mezcla, hoja, cultivo.
 * Los textos salen de las fichas técnicas: no agregar afirmaciones que no estén ahí.
 */
export const products: Product[] = [
  {
    name: "Drop Quality",
    step: "1",
    stepLabel: "El agua",
    categoryShort: "Corrector de pH · Buffer · Secuestrante",
    color: "var(--drop-quality)",
    tagline: "Corrige el agua de aplicación según su dureza y la deja en el pH adecuado.",
    description: "Corrector de pH con poder buffer y secuestrante catiónico. Tecnología superior que garantiza alta calidad de formulación: corrige el agua según su dureza y asegura un pH final de 4,5 a 6,5 — el rango óptimo para la mayoría de los fitosanitarios. Mejora las condiciones de aplicación de productos agroquímicos.",
    highlights: [
      "Excelente poder buffer que mejora las condiciones de aplicación de agroquímicos",
      "Mayor poder secuestrante del mercado (700/800 ppm CaCO₃ y Mg)",
      "Forma quelatos con cationes, evitando precipitación del material secuestrado",
      "Sin acidificantes que generen precipitados o insolubilización de principios activos",
      "No modifica el pH del caldo de aplicación — cada fitosanitario trabaja en su rango óptimo",
    ],
    dose: "100 cc cada 800 ppm de dureza en 100 L de agua.\nEn aguas con menos de 200 ppm: mínimo 25 cc/100 L.",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/quality_folleto.pdf",
    labelUrl: "/fundas/quality_funda.pdf",
    imageUrl: "/imagenes_productos/quality_botella.png",
  },
  {
    name: "Drop Flow",
    step: "2",
    stepLabel: "La mezcla",
    categoryShort: "Coadyuvante · Compatibilizante",
    color: "var(--drop-flow)",
    tagline: "Mantiene estable la mezcla en el tanque. Recomendado para drones y bajo volumen.",
    description: "Coadyuvante preventivo que compatibiliza caldos de aplicación. Compuesto por mezclas de emulsionantes que mantienen la estabilidad de herbicidas, fungicidas, insecticidas y fertilizantes foliares en el tanque. Ideal para aplicaciones con drones y pulverizaciones de bajo volumen. Evita cortes de mezcla e incrustaciones en la pulverizadora.",
    highlights: [
      "Excelente capacidad estabilizante en combinaciones estratégicas de herbicidas",
      "Permite obtener mezclas totalmente estables — evita costos por descarte o ineficacia",
      "Reduce el riesgo de incrustaciones de productos en la pulverizadora",
      "No alcalinizante: no modifica el pH ni afecta la residualidad de productos",
      "Recomendado para drones y aviones de bajo volumen (~10 L/ha)",
    ],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 5 L.",
    brochureUrl: "/folletos/flow_folleto.pdf",
    labelUrl: "/fundas/flow_funda.pdf",
    imageUrl: "/imagenes_productos/flow_bidon.png",
  },
  {
    name: "Drop Thor",
    step: "3",
    stepLabel: "La gota en la hoja",
    categoryShort: "Coadyuvante · Humectante · Adherente",
    color: "var(--drop-thor)",
    tagline: "Más cobertura y adherencia de los fitosanitarios sobre la superficie foliar.",
    description: "Coadyuvante humectante, adherente y biodegradable de concentrado soluble. Formulado a base de alcohol lineal etoxilado de alta cadena de carbono y silicona. Excelente tensioactivo que mejora la cobertura y contacto de agroquímicos sobre la superficie foliar. Concentración del 48% de principio activo.",
    highlights: [
      "Humectante, penetrante y adherente",
      "Tensión superficial dinámica de 40–45 dinas al impacto de la gota, asegurando rápida distribución foliar",
      "Cobertura uniforme sobre la superficie foliar — tecnología antiespumante",
      "Ecológico, biodegradable — contiene componentes siliconados",
    ],
    dose: "25–50 cc cada 100 L de agua o caldo",
    presentation: "Caja con 15 botellas de 1 L c/u.",
    brochureUrl: "/folletos/drop_folleto.pdf",
    labelUrl: "/fundas/thor_funda.pdf",
    imageUrl: "/imagenes_productos/thor_botella.png",
  },
  {
    name: "Drop Elixir",
    step: "3",
    stepLabel: "La gota en la hoja",
    categoryShort: "Coadyuvante · MSO · Microemulsión",
    color: "var(--drop-elixir)",
    tagline: "MSO en microemulsión que maximiza la penetración y la translocación.",
    description: "Coadyuvante MSO que forma una microemulsión estable sin separación de fases. El aceite vegetal modificado disuelve la pared cuticular mientras la organosilicona brinda gran afinidad de las gotas con la cera cuticular. Optimiza el mojado, maximiza penetración y translocación, y mejora el control de malezas difíciles o estresadas.",
    highlights: [
      "Microemulsión estable: mezcla sin separación de fases",
      "Maximiza el tándem penetración–translocación",
      "Reduce la evaporación — mayor viscosidad por cantidad de micelas por gota",
      "Óptima tensión superficial dinámica al momento del impacto de la gota",
      "Garantiza mayor velocidad e incremento en el porcentaje de control",
      "Hace más eficientes las aplicaciones con bajo volumen",
      "Disminuye el riesgo de lavado por lluvia",
      "Aumenta la eficiencia en malezas estresadas o difíciles",
      "Ayuda en situaciones con baja humedad relativa",
      "Máxima penetración — excelente capacidad de esparcimiento sobre el blanco",
    ],
    dose: "200–400 ml/ha",
    presentation: "Bidón de 5 L.",
    brochureUrl: "/folletos/elixir_folleto.pdf",
    labelUrl: "/fundas/elixir_funda.pdf",
    imageUrl: "/imagenes_productos/elixir_bidon.png",
  },
  {
    name: "Drop Forte",
    step: "4",
    stepLabel: "El cultivo",
    categoryShort: "Fertilizante foliar · Bioestimulante",
    color: "var(--drop-forte)",
    tagline: "Activa las defensas, estimula el crecimiento y aumenta el rendimiento.",
    description: "Fertilizante foliar bioestimulante formulado a base de metabolitos secundarios de fermentaciones específicas, micronutrientes quelatados, fitohormonas naturales (isómeros específicos post hidrólisis enzimática), laminados de algas y extractos vegetales. Activa mecanismos de defensa, estimula el desarrollo vegetal y aumenta el rendimiento.",
    highlights: [
      "Activa mecanismos de defensa naturales del cultivo",
      "Estimula el crecimiento y desarrollo",
      "Mejora la sanidad vegetal",
      "Aumenta el rendimiento y la calidad",
      "Ensayos INTA: +338 kg/ha en maíz · +214 kg/ha en soja",
    ],
    dose: "Soja: 800 a 1200 cc/ha\nTrigo: 800 a 1200 cc/ha\nMaíz: 2000 cc/ha",
    presentation: "Bidón de 10 L.",
    brochureUrl: "/folletos/forte_folleto.pdf",
    labelUrl: "/fundas/forte_funda.pdf",
    imageUrl: "/imagenes_productos/forte_bidon.png",
  },
]

export function slug(productName: string) {
  return productName.toLowerCase().replace(/\s/g, "-")
}
