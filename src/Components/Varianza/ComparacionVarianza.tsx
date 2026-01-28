type formValues = {
  valorTabla: number;
  caso: number;
  tamMuestra: number;
  varianzaMuestral: number;
  varianzaPoblacional: number;
  significacion: number;
};
export function ComparacionVarianza({
  valorTabla,
  caso,
  tamMuestra,
  varianzaMuestral,
  varianzaPoblacional,
  significacion,
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
          significacion,
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
  significacion,
}: formValues) {
  switch (caso) {
    case 1:
      if (
        Estadigrafo(tamMuestra, varianzaMuestral, varianzaPoblacional) <
        valorTabla
      ) {
        return `Con un nivel de significación de ${significacion} Se Rechaza la hipotesis nula`;
      } else {
        return `Con un nivel de significación de ${significacion} Se Acepta la hipotesis nula`;
      }
    case 2:
      if (
        Estadigrafo(tamMuestra, varianzaMuestral, varianzaPoblacional) >
        valorTabla
      ) {
        return `Con un nivel de significación de ${significacion} Se Rechaza la hipotesis nula`;
      } else {
        return `Con un nivel de significación de ${significacion} Se Acepta la hipotesis nula`;
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
