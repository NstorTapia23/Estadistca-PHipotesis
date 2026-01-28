import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavBarMedia } from "../NavBarMedia";
import { CalcMedia1n } from "./CalcMedia1n";

type DatosCalculo = {
  tamMuestra: number;
  significacion: number;
  tipoPrueba: number;
  DesviacionTipica: number;
  varianzaConocida: boolean;
  mediaMuestral: number;
  mediaPoblacional: number;
};

export function Media1n() {
  const [mostrar, setMostrar] = useState(false);
  const [datosCalculo, setDatosCalculo] = useState<DatosCalculo>();

  const { register, handleSubmit, watch } = useForm<DatosCalculo>({
    defaultValues: {
      tipoPrueba: 1,
      varianzaConocida: true,
    },
  });

  const varianzaConocida = watch("varianzaConocida");

  const onSubmit = (data: DatosCalculo) => {
    setDatosCalculo(data);
    console.log(data);
    setMostrar(true);
  };

  const inputStyle = "w-full rounded-md border px-3 py-2";

  return (
    <div>
      <NavBarMedia />

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold">
          Resolución de la media con una muestra
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tamaño de la muestra */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de la muestra</label>
            <input
              type="number"
              min={1}
              {...register("tamMuestra", {
                required: true,
                valueAsNumber: true,
              })}
              className={inputStyle}
            />
          </div>

          {/* Media muestral */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media muestral</label>
            <input
              type="number"
              step="any"
              {...register("mediaMuestral", {
                required: true,
                valueAsNumber: true,
              })}
              className={inputStyle}
            />
          </div>

          {/* Media poblacional */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media poblacional</label>
            <input
              type="number"
              step="any"
              {...register("mediaPoblacional", {
                required: true,
                valueAsNumber: true,
              })}
              className={inputStyle}
            />
          </div>

          {/* Significación */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Significación (α)</label>
            <input
              type="number"
              step="0.01"
              min={0}
              max={1}
              {...register("significacion", {
                required: true,
                valueAsNumber: true,
              })}
              className={inputStyle}
            />
          </div>

          {/* Tipo de prueba */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tipo de prueba</label>
            <select
              {...register("tipoPrueba", { valueAsNumber: true })}
              className={inputStyle}
            >
              <option value={1}>Bilateral</option>
              <option value={2}>Unilateral Derecha</option>
              <option value={3}>Unilateral Izquierda</option>
            </select>
          </div>

          {/* Varianza conocida / desconocida */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Varianza</label>
            <select
              {...register("varianzaConocida", {
                setValueAs: (v) => v === "true",
              })}
              defaultValue={"true"}
              className={inputStyle}
            >
              <option value="true">Conocida</option>
              <option value="false">Desconocida</option>
            </select>

            <label className="mb-2 font-medium mt-2">
              {varianzaConocida === true
                ? "Desviación típica poblacional"
                : "Desviación típica muestral"}
            </label>

            <input
              type="number"
              step="any"
              {...register("DesviacionTipica", {
                required: true,
                valueAsNumber: true,
              })}
              className={inputStyle}
            />
          </div>
        </div>

        {!mostrar && (
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded text-base md:text-lg"
          >
            Calcular
          </button>
        )}
      </form>

      {mostrar && datosCalculo && (
        <CalcMedia1n {...datosCalculo} mostrar={mostrar} />
      )}
    </div>
  );
}
