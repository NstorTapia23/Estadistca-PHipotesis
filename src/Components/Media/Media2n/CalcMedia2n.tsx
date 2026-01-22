import { useState } from "react";
import { useForm } from "react-hook-form";
import { Comparacion2n } from "./Comparacion2n";

type Props = {
  tamMuestra1: number;
  tamMuestra2: number;
  significacion: number;
  varianza1: number;
  varianza2: number;
  varianzaConocida: "true" | "false";
  media1: number;
  media2: number;
};

type FormValues = {
  valorTablaUsuario: number;
};

export function CalcMedia2n({
  tamMuestra1,
  tamMuestra2,
  significacion,
  varianza1,
  varianza2,
  varianzaConocida,
  media1,
  media2,
}: Props) {
  const [mostrar, setMostrar] = useState(false);

  const { register, handleSubmit, watch } = useForm<FormValues>();

  const valorTabla =
    varianzaConocida === "true"
      ? valorTablaVarConocida(significacion)
      : valorTablaVarDesonocida(significacion, tamMuestra1, tamMuestra2);

  const valorUsuario = watch("valorTablaUsuario");

  const onSubmit = () => {
    setMostrar(true);
  };

  return (
    <div>
      <p>Busque en la tabla {valorTabla}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          step="any"
          {...register("valorTablaUsuario", {
            required: true,
            valueAsNumber: true,
          })}
        />

        <button type="submit">Calcular</button>
      </form>

      {mostrar && valorUsuario !== undefined && (
        <Comparacion2n
          varUser={valorUsuario}
          tamMuestra1={tamMuestra1}
          tamMuestra2={tamMuestra2}
          varianza1={varianza1}
          varianza2={varianza2}
          media1={media1}
          media2={media2}
        />
      )}
    </div>
  );
}

function valorTablaVarConocida(significacion: number) {
  return significacion / 2;
}
function valorTablaVarDesonocida(
  significacion: number,
  tamMuestra1: number,
  tamMuestra2: number,
) {
  return `${significacion / 2} ; ${tamMuestra1 + tamMuestra2 - 2}`;
}
