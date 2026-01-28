type useValues = {
  tipoPrueba: number;
  estadigrafo: number;
  valorTabla: number;
  significacion: number;
};
export function ComparacionProporcion({
  tipoPrueba,
  estadigrafo,
  valorTabla,
  significacion,
}: useValues) {
  return (
    <span className="font-semibold">
      {ComparacionProporcion1n(
        tipoPrueba,
        estadigrafo,
        valorTabla,
        significacion,
      )}
    </span>
  );
}
function ComparacionProporcion1n(
  tipoPrueba: number,
  estadigrafo: number,
  valorTabla: number,
  significacion: number,
) {
  switch (tipoPrueba) {
    case 1:
      return Math.abs(estadigrafo) > valorTabla
        ? `Con un nivel de significación de ${significacion} Se rechaza la hipótesis nula`
        : `Con un nivel de significación de ${significacion} No se rechaza la hipótesis nula`;
    case 2:
      return estadigrafo > valorTabla
        ? `Con un nivel de significación de ${significacion} Se Rechaza H0`
        : `Con un nivel de significación de ${significacion} No se rechaza H0`;
    case 3:
      return estadigrafo < -valorTabla
        ? `Con un nivel de significación de ${significacion} Se Rechaza H0`
        : `Con un nivel de significación de ${significacion} No se rechaza H0`;
  }
}
