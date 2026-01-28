type formValues = {
  valorTabla: number;
  caso: number;
  tamMuestra: number;
  varianzaMuestral: number;
  varianzaPoblacional: number;
};
export function ComparacionVarianza({
  valorTabla,
  caso,
  tamMuestra,
  varianzaMuestral,
  varianzaPoblacional,
}: formValues) {
  return (
    <div>
      <h2>Comparación Varianza</h2>
      <p>
        {RegionCritica({
          caso,
          tamMuestra,
          varianzaMuestral,
          varianzaPoblacional,
          valorTabla,
        })}
      </p>
    </div>
  );
}
function RegionCritica({
  caso,
  tamMuestra,
  varianzaMuestral,
  varianzaPoblacional,
  valorTabla,
}: formValues) {
  switch (caso) {
    case 1:
      if (
        Estadigrafo(tamMuestra, varianzaMuestral, varianzaPoblacional) <
        valorTabla
      ) {
        return `Se Rechaza la hipotesis nula`;
      } else {
        return `Se Acepta la hipotesis nula`;
      }
    case 2:
      if (
        Estadigrafo(tamMuestra, varianzaMuestral, varianzaPoblacional) >
        valorTabla
      ) {
        return `Se Rechaza la hipotesis nula`;
      } else {
        return `Se Acepta la hipotesis nula`;
      }
    case 3:
      if (
        Estadigrafo(tamMuestra, varianzaMuestral, varianzaPoblacional) <
        -valorTabla
      ) {
        return `Se Rechaza`;
      } else {
        return `Se Acepta`;
      }
  }
}
function Estadigrafo(
  tamMuestra: number,
  varianzaMuestral: number,
  varianzaPoblacional: number,
) {
  const estadigrafo =
    (tamMuestra - 1) * (varianzaMuestral / varianzaPoblacional);
  return estadigrafo;
}
