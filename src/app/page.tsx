"use client";
import Image from "next/image";
import { useState } from "react";
import ProductoPagPrincipal from "./components/ProductoPagPrincipal/page";
export default function Home() {
  const [carrito, setCarrito] = useState(false);
  return (
    <>
      <div className="bg-white">
        <header>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden w-full text-gray-600 md:flex md:items-center">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="mx-1 text-sm">COL</span>
              </div>
              <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                Brand
              </div>
              <div className="flex items-center justify-end w-full">
                <button
                  className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
                  onClick={() => {
                    setCarrito(!carrito);
                  }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>

                <div className="flex sm:hidden">
                  <button
                    className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    aria-label="toggle menu"
                    onClick={() => {
                      setCarrito(!carrito);
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
              <div className="flex flex-col sm:flex-row">
                <a
                  href="#"
                  className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                >
                  Nosotros
                </a>
                <a
                  href="#"
                  className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                >
                  Tienda
                </a>
                <a
                  href="#"
                  className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                >
                  Categorias
                </a>
                <a
                  href="#"
                  className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                >
                  Contacto
                </a>
              </div>
            </nav>
            <div className="relative mt-6 max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Buscar"
              />
            </div>
          </div>
        </header>
        {/* Inicio Carrito */}
        <div
          className={`${
            (carrito && "translate-x-0 ease-out") || "translate-x-full ease-in"
          }  fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-1 border-gray-300`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-700">Tu Carrito</h3>
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => {
                setCarrito(!carrito);
              }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <hr className="my-3" />
          {/* Producto */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex">
              <Image
                className="h-20 w-20 object-cover rounded"
                src={"/Zapatillas/air_force_1.webp"}
                alt="zapa1"
                height={150}
                width={150}
              />
              <div className="mx-3">
                <h3 className="text-sm text-gray-600">
                  Nike Air Force 1 &apos;07 LV8
                </h3>
                <div className="flex items-center mt-2">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <span className="text-gray-700 mx-2">2</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="text-gray-600">$764.950</span>
          </div>
          {/* FIN Producto */}
          {/* Producto */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex">
              <Image
                className="h-20 w-20 object-cover rounded"
                src={"/Zapatillas/Air_Jordan_1.webp"}
                alt="zapa1"
                height={150}
                width={150}
              />
              <div className="mx-3">
                <h3 className="text-sm text-gray-600">Air Jordan 1 Mid</h3>
                <div className="flex items-center mt-2">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <span className="text-gray-700 mx-2">2</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="text-gray-600">$774.950</span>
          </div>
          {/* FIN Producto */}
          {/* Producto */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex">
              <Image
                className="h-20 w-20 object-cover rounded"
                src={"/Zapatillas/Nike_Court_Vision_Alta.webp"}
                alt="zapa1"
                height={150}
                width={150}
              />
              <div className="mx-3">
                <h3 className="text-sm text-gray-600">
                  Nike Court Vision Alta
                </h3>
                <div className="flex items-center mt-2">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <span className="text-gray-700 mx-2">2</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="text-gray-600">$484.950</span>
          </div>
          {/* FIN Producto */}
          <div className="mt-8">
            <form className="flex items-center justify-center">
              <input
                type="text"
                name="promo"
                id="promo"
                className="form-input w-48"
                placeholder="Codigo Promocional"
              />
              <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Agregar</span>
              </button>
            </form>
          </div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            <span>Pagar</span>
            <svg
              className="h-5 w-5 mx-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="h-64 rounded-md overflow-hidden bg-cover bg-center bg-[url('/Zapatillas/FondoZapa.avif')]">
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Zapatillas Deportivas
                </h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis iure quos rem ipsum ab id perferendis minima.
                  Temporibus at voluptatem deserunt amet enim! Illo culpa
                  laboriosam in labore fuga consectetur!
                </p>
                <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Compra Ahora!</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            {/* Lado Izquierdo */}
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/82 bg-[url('/Zapatillas/fondoZapaEle.jpeg')]">
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10  max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Zapatos Elegantes
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquid eligendi consectetur autem at. Quo earum
                    repellat corporis ipsam a dolores illum quis porro odio!
                    Odit aut officia hic porro!
                  </p>
                  <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Compra Ahora!</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Fin Izquierdo */}
            {/* Lado Derecho */}
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/82 bg-[url('/Zapatillas/fondoSanda.webp')]">
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10  max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Sandalias Femeninas
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquid eligendi consectetur autem at. Quo earum
                    repellat corporis ipsam a dolores illum quis porro odio!
                    Odit aut officia hic porro!
                  </p>
                  <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Compra Ahora!</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Fin Derecho */}
          </div>
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Línea Adidas</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <ProductoPagPrincipal
                titulo="TENIS ADIDAS VL COURT 3.0"
                imagen="bg-[url('/Zapatillas/Adidas/VL_Court_3_Blanco.avif')]"
                costo="$329.950"
              />
              <ProductoPagPrincipal
                titulo="TENIS SAMBA OG"
                imagen="bg-[url('/Zapatillas/Adidas/Samba_OG_Negro.avif')]"
                costo="$599.950"
              />
              <ProductoPagPrincipal
                titulo="TENIS ADIZERO ADIOS PRO 3"
                imagen="bg-[url('/Zapatillas/Adidas/ADIZERO_ADIOS_PRO_3.avif')]"
                costo="$1.299.950"
              />
              <ProductoPagPrincipal
                titulo="TENIS COURTBLOCK"
                imagen="bg-[url('/Zapatillas/Adidas/Courtblock_Blanco.avif')]"
                costo="$315.961"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
