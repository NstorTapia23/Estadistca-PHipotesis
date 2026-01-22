import type { useValues } from "./Varianza";
export function CalcVarianza({
  caso,
  significacion,
  mediaMuestral,
  mediaPoblacional,
  desvTip,
  tamMuestra,
}: useValues) {
  return (
    <div>
      <h1>Calculo de la varianza</h1>
      <p>Caso: {caso}</p>
      <p>Significancia: {significacion}</p>
      <p>Media Muestral: {mediaMuestral}</p>
      <p>Media Poblacional: {mediaPoblacional}</p>
      <p>Desviación Típica: {desvTip}</p>
      <p>Tamaño de Muestra: {tamMuestra}</p>
    </div>
  );
}
