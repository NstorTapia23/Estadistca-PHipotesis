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

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <NavBarMedia />

      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h1 className="text-3xl font-bold text-center mb-2">
              Resolución de la media (dos muestras)
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Prueba de hipótesis para la diferencia de medias
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  className={inputStyle}
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
                  className={inputStyle}
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
                  className={inputStyle}
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
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {/* Tipo de prueba (por ahora fijo) */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Tipo de prueba</label>
                <select className={inputStyle} disabled>
                  <option value={1}>Bilateral</option>
                </select>
              </div>

              {/* Varianza */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Tipo de varianza</label>
                <select
                  {...register("varianzaConocida")}
                  className={inputStyle}
                >
                  <option value="true">Conocida</option>
                  <option value="false">Desconocida</option>
                </select>

                <div className="flex flex-col mt-4">
                  <label className="mb-2 font-medium">Varianza 1</label>
                  <input
                    type="number"
                    step="any"
                    min={0}
                    {...register("varianza1", {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={inputStyle}
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="mb-2 font-medium">Varianza 2</label>
                  <input
                    type="number"
                    step="any"
                    min={0}
                    {...register("varianza2", {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={inputStyle}
                  />
                </div>
              </div>

              {!mostrar && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-10 py-3 bg-blue-600 text-white font-semibold
                    rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg
                    transition-all"
                  >
                    Calcular
                  </button>
                </div>
              )}
            </form>

            {mostrar && datosCalculo && (
              <div className="mt-10 border-t pt-8">
                <CalcMedia2n {...datosCalculo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
