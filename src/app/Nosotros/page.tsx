import React from "react";
import Menu from "../components/Menu/page";
import Image from "next/image";

function Nosotros() {
  return (
    <>
      <Menu />
      <div className="w-full container mx-auto">
        <Image
          alt="logo"
          src={"/logo.webp"}
          width={250}
          height={250}
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 gap-4 p-2">
          <div className="p-2 rounded-md shadow-lg bg-gray-200 shadow-slate-950 w-full text-center">
            <p className="text-4xl italic font-bold text-yellow-600">VISION</p>
            <p className="text-justify">
              En Joruca, aspiramos a ser reconocidos mundialmente como líderes
              innovadores en la moda, las prendas para el hogar y los productos
              para mascotas. Queremos ser más que una marca; deseamos
              convertirnos en un símbolo de conexión y alegría compartida entre
              las mascotas y sus dueños. A medida que crecemos, nos
              comprometemos a:
              <ul className="text-left mt-2">
                <li>• Ampliar nuestra gama de productos.</li>
                <li>• Promover la moda consciente y sostenible.</li>
                <li>
                  • Participar activamente en iniciativas de apoyo a los
                  animales sin hogar.
                </li>
                <li>
                  • Nuestra misión es aportar elegancia y creatividad a la
                  industria, mientras fomentamos el bienestar y la empatía hacia
                  todos los seres vivos.
                </li>
              </ul>
            </p>
          </div>
          <div className="p-2 rounded-md shadow-lg bg-gray-200 shadow-slate-950 w-full text-center">
            <p className="text-4xl italic font-bold text-yellow-600">MISION</p>
            <p className="text-justify">
              En Joruca, nuestra misión es crear productos de alta calidad y
              diseño excepcional que brinden a las mascotas y sus dueños una
              experiencia única de estilo y conexión. Nos especializamos en
              ofrecer productos para el hogar que expresen la personalidad a
              través de tendencias y colecciones cuidadosamente seleccionadas. A
              través de nuestras creaciones, buscamos fomentar el amor, el
              respeto y la diversión entre las mascotas y sus familias humanas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
