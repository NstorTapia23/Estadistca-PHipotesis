export function Inicio() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-10">
        Presentación de Estadísticas para Resolución de Hipótesis
      </h1>

      <h2 className="text-2xl font-semibold text-blue-800 mb-6">
        Desarrolladores
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tarjeta Néstor */}
        <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-shadow duration-300 text-center">
          <p className="text-blue-900 font-semibold text-lg mb-2">
            Néstor Luis Tapia Triana
          </p>
          <p className="text-blue-700 text-sm">
            Estudiante de Ing Informática de 2do año de la Universidad de Ciego
            de Avila
          </p>
        </div>

        {/* Tarjeta Catherine */}
        <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-shadow duration-300 text-center">
          <p className="text-blue-900 font-semibold text-lg mb-2">
            Catherine Machado Morgado
          </p>
          <p className="text-blue-700 text-sm">
            Estudiante de Ing Informática de 2do año de la Universidad de Ciego
            de Avila
          </p>
        </div>

        {/* Tarjeta Diana */}
        <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-shadow duration-300 text-center">
          <p className="text-blue-900 font-semibold text-lg mb-2">
            Diana Mesa Diaz
          </p>
          <p className="text-blue-700 text-sm">
            Estudiante de Ing Informática de 2do año de la Universidad de Ciego
            de Avila
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-xl text-center">
        <p className="text-blue-800/80 italic">
          Bienvenidos a nuestra presentación. Exploraremos estadísticas y
          pruebas de hipótesis de manera clara, visual y profesional.
        </p>
      </div>
    </div>
  );
}
