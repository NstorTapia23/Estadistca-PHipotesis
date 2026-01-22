type Comparacion2nProps = {
  varUser: number;
  tamMuestra1: number;
  tamMuestra2: number;
  varianza1: number;
  varianza2: number;
  media1: number;
  media2: number;
};

export function Comparacion2n({
  varUser,
  tamMuestra1,
  tamMuestra2,
  varianza1,
  varianza2,
  media1,
  media2,
}: Comparacion2nProps) {
  const estadistico = calcularEstadistico(
    media1,
    media2,
    varianza1,
    varianza2,
    tamMuestra1,
    tamMuestra2,
  );
  const resultado = comparar(estadistico, varUser);

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

/* =======================
   Funciones auxiliares
   ======================= */

function calcularEstadistico(
  media1: number,
  media2: number,
  varianza1: number,
  varianza2: number,
  tamMuestra1: number,
  tamMuestra2: number,
) {
  return (
    (media1 - media2) /
    Math.sqrt(varianza1 / tamMuestra1 + varianza2 / tamMuestra2)
  );
}

function comparar(estadistico: number, varUser: number) {
  return Math.abs(estadistico) > varUser
    ? "Se rechaza la hipótesis nula"
    : "No se rechaza la hipótesis nula";
}
