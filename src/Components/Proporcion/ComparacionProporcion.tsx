type useValues = {
  tipoPrueba: number;
  estadigrafo: number;
  valorTabla: number;
};
export function ComparacionProporcion({
  tipoPrueba,
  estadigrafo,
  valorTabla,
}: useValues) {
  return (
    <span className="font-semibold">
      {ComparacionProporcion1n(tipoPrueba, estadigrafo, valorTabla)}
    </span>
  );
}
function ComparacionProporcion1n(
  tipoPrueba: number,
  estadigrafo: number,
  valorTabla: number,
) {
  switch (tipoPrueba) {
    case 1:
      return Math.abs(estadigrafo) > valorTabla
        ? "Rechazar H0"
        : "No rechazar H0";
    case 2:
      return estadigrafo > valorTabla ? "Rechazar H0" : "No rechazar H0";
    case 3:
      return estadigrafo < -valorTabla ? "Rechazar H0" : "No rechazar H0";
  }
}
