type Props = {
  valorTabla: number;
  tipoPrueba: number;
  tamMuestra: number;
  DesviacionTipica: number;
  varianzaConocida: boolean;
  mediaMuestral: number;
  mediaPoblacional: number;
};
export function Comparacion1n({
  valorTabla,
  tipoPrueba,
  tamMuestra,
  DesviacionTipica,
  varianzaConocida,
  mediaMuestral,
  mediaPoblacional,
}: Props) {
  return (
    <div>
      <p>
        {Comparacion(
          estadigrafo(
            tamMuestra,
            DesviacionTipica,
            varianzaConocida,
            mediaMuestral,
            mediaPoblacional,
          ),
          valorTabla,
          tipoPrueba,
        )}
      </p>
    </div>
  );
}
function estadigrafo(
  tamMuestra: number,
  DesviacionTipica: number,
  varianzaConocida: boolean,
  mediaMuestral: number,
  mediaPoblacional: number,
) {
  switch (varianzaConocida) {
    case true:
      {
        const z =
          (mediaMuestral - mediaPoblacional) /
          (DesviacionTipica / Math.sqrt(tamMuestra));
        return z;
      }
      break;
    case false:
      {
        const t =
          (mediaMuestral - mediaPoblacional) /
          (DesviacionTipica / Math.sqrt(tamMuestra));
        return t;
      }
      break;
    default:
      return 0;
      break;
  }
}
function Comparacion(
  estadigrafo: number,
  valorTabla: number,
  tipoPrueba: number,
) {
  switch (tipoPrueba) {
    case 1: {
      if (Math.abs(estadigrafo) > valorTabla) {
        return "Se rechaza la hipotesis nula";
      } else {
        return "No se rechaza la hipotesis nula";
      }
    }
    case 2: {
      if (estadigrafo > valorTabla) {
        return "Se rechaza la hipotesis nula";
      } else {
        return "No se rechaza la hipotesis nula";
      }
    }
    case 3: {
      if (estadigrafo < valorTabla) {
        return "Se rechaza la hipotesis nula";
      } else {
        return "No se rechaza la hipotesis nula";
      }
    }
    default:
      return "No se rechaza la hipotesis nula";
      break;
  }
}
