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

  const onSubmit = () => {
    setMostrarComparacion(true);
  };

  return (
    <div>
      <p>
        Busque en la tabla de distribución normal el valor{" "}
        <strong>{resultadoTabla}</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Valor encontrado"
          type="number"
          step="any"
          {...register("valorTabla", {
            required: true,
            valueAsNumber: true,
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                     focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={mostrarComparacion}
          className="mt-4 col-span-1 sm:col-span-2 lg:col-span-4 px-4 py-2
                     bg-blue-600 text-white rounded text-base md:text-lg"
        >
          {mostrarComparacion ? "Ocultar" : "Comparar"}
        </button>
      </form>

      {mostrarComparacion && valorTabla !== undefined && (
        <Comparacion1n
          valorTabla={valorTabla}
          tipoPrueba={tipoPrueba}
          tamMuestra={tamMuestra}
          DesviacionTipica={DesviacionTipica}
          varianzaConocida={varianzaConocida}
          mediaMuestral={mediaMuestral}
          mediaPoblacional={mediaPoblacional}
        />
      )}
    </div>
  );
}

function valorTablaVarConocida(significacion: number, tipoPrueba: number) {
  switch (tipoPrueba) {
    case 1: {
      return `${1 - significacion / 2}`;
    }
    case 2: {
      return `${1 - significacion}`;
    }
    case 3: {
      return `${1 - significacion}`;
    }
    default:
      return;
      break;
  }
}
function valorTablaVarDesconocida(
  significacion: number,
  tipoPrueba: number,
  tamMuestra: number,
) {
  switch (tipoPrueba) {
    case 1: {
      return `${1 - significacion / 2} ; ${tamMuestra - 1}`;
    }
    case 2 | 3: {
      return `${1 - significacion} ; ${tamMuestra - 1}`;
    }
    default:
      return null;
      break;
  }
}
