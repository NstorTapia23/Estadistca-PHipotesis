import { useState } from "react";
import { useForm } from "react-hook-form";
import { Comparacion1n } from "./Comparacion1n";

type Props = {
  tamMuestra: number;
  significacion: number;
  tipoPrueba: number;
  DesviacionTipica: number;
  varianzaConocida: "true" | "false";
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
    <div className="mt-10 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Encabezado */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Valor crítico</h2>
          <p className="text-sm text-gray-600 mt-1">
            Busque en la tabla el valor correspondiente a{" "}
            <span className="font-semibold text-indigo-600">
              {resultadoTabla}
            </span>
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end"
        >
          <div className="flex flex-col sm:col-span-2">
            <label className="mb-2 font-medium text-gray-700">
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
              className="
                w-full rounded-lg border border-gray-300 px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500
              "
            />
          </div>

          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={mostrarComparacion}
              className={`
                px-10 py-3 rounded-xl font-semibold transition-all
                ${
                  mostrarComparacion
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg"
                }
              `}
            >
              {mostrarComparacion ? "Resultado mostrado" : "Comparar"}
            </button>
          </div>
        </form>

        {/* Resultado */}
        {mostrarComparacion && valorTabla !== undefined && (
          <div className="mt-8 border-t pt-6">
            <Comparacion1n
              valorTabla={valorTabla}
              tipoPrueba={tipoPrueba}
              tamMuestra={tamMuestra}
              DesviacionTipica={DesviacionTipica}
              varianzaConocida={varianzaConocida}
              mediaMuestral={mediaMuestral}
              mediaPoblacional={mediaPoblacional}
              significacion={significacion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

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
