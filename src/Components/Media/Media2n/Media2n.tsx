import { useState } from "react";
import { NavBarMedia } from "../NavBarMedia";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CalcMedia2n } from "./CalcMedia2n";

type FormValues = {
  tamMuestra1: number;
  tamMuestra2: number;
  significacion: number;
  varianza1: number;
  varianza2: number;
  varianzaConocida: "true" | "false";
  media1: number;
  media2: number;
};

export function Media2n() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      varianzaConocida: "true",
    },
  });

  const [datosCalculo, setDatosCalculo] = useState<FormValues | null>(null);
  const [mostrar, setMostrar] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setDatosCalculo({ ...data });
    console.log(data);
    setMostrar(true);
  };

  return (
    <div>
      <NavBarMedia />

      <div className="p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Resolución de la media con dos muestras
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Tamaños de muestra */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de muestra 1</label>
            <input
              type="number"
              min={1}
              {...register("tamMuestra1", {
                valueAsNumber: true,
                required: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de muestra 2</label>
            <input
              type="number"
              min={1}
              {...register("tamMuestra2", {
                valueAsNumber: true,
                required: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          {/* Medias */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media 1</label>
            <input
              type="number"
              {...register("media1", {
                valueAsNumber: true,
                required: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media 2</label>
            <input
              type="number"
              {...register("media2", {
                valueAsNumber: true,
                required: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          {/* Significación */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Significación</label>
            <input
              type="number"
              step="0.01"
              min={0}
              max={1}
              {...register("significacion", {
                valueAsNumber: true,
                required: true,
              })}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          {/* Tipo de prueba */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tipo de prueba</label>
            <select className="w-full rounded-md border px-3 py-2">
              <option value={1}>Bilateral</option>
            </select>
          </div>

          {/* Varianza */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tipo de varianza</label>
            <select
              {...register("varianzaConocida")}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="true">Conocida</option>
              <option value="false">Desconocida</option>
            </select>

            <div className="flex flex-col mt-2">
              <label className="mb-2 font-medium">Varianza 1</label>
              <input
                type="number"
                step="any"
                min={0}
                {...register("varianza1", {
                  valueAsNumber: true,
                  required: true,
                })}
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="mb-2 font-medium">Varianza 2</label>
              <input
                type="number"
                step="any"
                min={0}
                {...register("varianza2", {
                  valueAsNumber: true,
                  required: true,
                })}
                className="w-full rounded-md border px-3 py-2"
              />
            </div>
          </div>

          {/* Botón */}
          {!mostrar && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Calcular
              </button>
            </div>
          )}
        </form>

        {mostrar && datosCalculo && (
          <CalcMedia2n
            tamMuestra1={datosCalculo.tamMuestra1}
            tamMuestra2={datosCalculo.tamMuestra2}
            significacion={datosCalculo.significacion}
            varianza1={datosCalculo.varianza1}
            varianza2={datosCalculo.varianza2}
            varianzaConocida={datosCalculo.varianzaConocida}
            media1={datosCalculo.media1}
            media2={datosCalculo.media2}
          />
        )}
      </div>
    </div>
  );
}
