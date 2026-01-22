type Comparacion2n = {
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
}: Comparacion2n) {
  const varEstadigrafo = estadigrafo(
    media1,
    media2,
    varianza1,
    varianza2,
    tamMuestra1,
    tamMuestra2,
  );
  return Comparacion(varEstadigrafo, varUser);
}

function estadigrafo(
  Media1: number,
  Media2: number,
  varianza1: number,
  varianza2: number,
  tamMuestra1: number,
  tamMuestra2: number,
) {
  const estadigrafo =
    (Media1 - Media2) /
    Math.sqrt(varianza1 / tamMuestra1 + varianza2 / tamMuestra2);
  return estadigrafo;
}

function Comparacion(varEstadigrafo: number, varUser: number) {
  if (Math.abs(varEstadigrafo) > varUser) {
    return <p> Se rechaza la hipotesis nula</p>;
  } else {
    return <p> No se rechaza la hipotesis nula</p>;
  }
}
