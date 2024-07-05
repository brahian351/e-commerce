"use client";
import React, { useState } from "react";
import ProductCart from "./ProductoCarrito/page";

function Carrito({ carrito, setCarrito }: any) {
  const [products, setProducts] = useState([
    {
      image: "/Pets/pet1.jpeg",
      cost: "200.000",
      title: "Ropa perro",
    },
  ]);
  return (
    <>
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
        {products && <ProductCart products={products} />}
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
    </>
  );
}

export default Carrito;
