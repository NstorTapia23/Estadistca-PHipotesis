type Props = {
  valorTabla: number;
  tipoPrueba: number;
  tamMuestra: number;
  DesviacionTipica: number;
  varianzaConocida: boolean;
  mediaMuestral: number;
  mediaPoblacional: number;
};

export function Comparacion1n(props: Props) {
  const estadistico = calcularEstadistico(props);
  const resultado = comparar(estadistico, props.valorTabla, props.tipoPrueba);

  // color según resultado
  const color = resultado.includes("rechaza")
    ? "text-red-600"
    : "text-green-600";

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-sm">
      <p className="text-sm text-gray-500 mb-2">
        Estadístico calculado:{" "}
        <span className="font-semibold">{estadistico.toFixed(3)}</span>
      </p>
      <p className={`font-medium text-lg ${color}`}>{resultado}</p>
    </div>
  );
}

function calcularEstadistico({
  tamMuestra,
  DesviacionTipica,
  mediaMuestral,
  mediaPoblacional,
}: Props) {
  return (
    (mediaMuestral - mediaPoblacional) /
    (DesviacionTipica / Math.sqrt(tamMuestra))
  );
}

function comparar(estadistico: number, valorTabla: number, tipoPrueba: number) {
  switch (tipoPrueba) {
    case 1:
      return Math.abs(estadistico) > valorTabla
        ? "Se rechaza la hipótesis nula"
        : "No se rechaza la hipótesis nula";
    case 2:
      return estadistico > valorTabla
        ? "Se rechaza la hipótesis nula"
        : "No se rechaza la hipótesis nula";
    case 3:
      return estadistico < valorTabla
        ? "Se rechaza la hipótesis nula"
        : "No se rechaza la hipótesis nula";
    default:
      return "No se rechaza la hipótesis nula";
  }
}
