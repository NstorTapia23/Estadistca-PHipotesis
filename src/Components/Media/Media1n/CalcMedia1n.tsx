import { useState } from "react";
import { useForm } from "react-hook-form";
import { Comparacion1n } from "./Comparacion1n";

type Props = {
  tamMuestra: number;
  significacion: number;
  tipoPrueba: number;
  DesviacionTipica: number;
  varianzaConocida: boolean;
  mediaMuestral: number;
  mediaPoblacional: number;
  mostrar: boolean;
};

type FormValues = {
  valorTabla: number;
};

export function CalcMedia1n({
  tamMuestra,
  significacion,
  tipoPrueba,
  DesviacionTipica,
  varianzaConocida,
  mediaMuestral,
  mediaPoblacional,
  mostrar,
}: Props) {
  const [mostrarComparacion, setMostrarComparacion] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormValues>();

  if (!mostrar) return null;

  const resultadoTabla = varianzaConocida
    ? valorTablaVarConocida(significacion, tipoPrueba)
    : valorTablaVarDesconocida(significacion, tipoPrueba, tamMuestra);

  const valorTabla = watch("valorTabla");

  const onSubmit = () => setMostrarComparacion(true);

  return (
    <div className="mt-6 max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-5">
      {/* Título */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Valor crítico</h2>
        <p className="text-sm text-gray-600 mt-1">
          Busque en la tabla el valor{" "}
          <span className="font-semibold text-blue-600">{resultadoTabla}</span>
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Valor encontrado en la tabla
          </label>
          <input
            type="number"
            step="any"
            placeholder="Ej: 1.96"
            {...register("valorTabla", {
              required: true,
              valueAsNumber: true,
            })}
            className="rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500 text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={mostrarComparacion}
          className={`py-2 rounded-md font-medium transition
            ${
              mostrarComparacion
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {mostrarComparacion ? "Resultado mostrado" : "Comparar"}
        </button>
      </form>

      {/* Resultado */}
      {mostrarComparacion && valorTabla !== undefined && (
        <div className="pt-4 border-t border-gray-200">
          <Comparacion1n
            valorTabla={valorTabla}
            tipoPrueba={tipoPrueba}
            tamMuestra={tamMuestra}
            DesviacionTipica={DesviacionTipica}
            varianzaConocida={varianzaConocida}
            mediaMuestral={mediaMuestral}
            mediaPoblacional={mediaPoblacional}
          />
        </div>
      )}
    </div>
  );
}

/* =======================
   Funciones auxiliares
   ======================= */

function valorTablaVarConocida(significacion: number, tipoPrueba: number) {
  switch (tipoPrueba) {
    case 1:
      return 1 - significacion / 2;
    case 2:
    case 3:
      return 1 - significacion;
  }
}

function valorTablaVarDesconocida(
  significacion: number,
  tipoPrueba: number,
  tamMuestra: number,
) {
  switch (tipoPrueba) {
    case 1:
      return `${1 - significacion / 2} ; ${tamMuestra - 1}`;
    case 2:
    case 3:
      return `${1 - significacion} ; ${tamMuestra - 1}`;
  }
}
