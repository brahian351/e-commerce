"use client";
import Image from "next/image";
import { useState } from "react";
import ProductoPagPrincipal from "./components/ProductoPagPrincipal/page";
import Carrito from "./components/Carrito/page";
import Link from "next/link";
import Menu from "./components/Menu/page";
export default function Home() {
  return (
    <>
      <Menu />
      <main className="my-8 container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            className="p-2 w-full text-center bg-gradient-to-tr from-sky-200 via-cyan-200 to-sky-400 rounded-md shadow-md shadow-black cursor-pointer"
            title="See More"
          >
            <h1 className="font-bold text-lg ">Pets</h1>
            <Image
              className="mx-auto rounded-md shadow-sm shadow-gray-700"
              src={"/Pets/nanook.webp"}
              alt="nanook"
              height={212}
              width={212}
            />
            <p className="font-serif italic font-thin mt-2">
              En JORUCA Pets encontraras variedad de prendas y accesorios para
              los peluditos de la familia.
            </p>
          </div>
          <div
            className="p-2 w-full text-center bg-gradient-to-tr from-emerald-200 via-green-300 to-emerald-400 rounded-md shadow-md shadow-black cursor-pointer"
            title="See More"
          >
            <h1 className="font-bold text-lg">Home</h1>
            <Image
              className="mx-auto rounded-md shadow-sm shadow-gray-700"
              src={"/Pets/hogar.webp"}
              alt="nanook"
              height={285}
              width={285}
            />
            <p className="font-serif italic font-thin mt-2">
              JORUCA Home quiere que le des un nuevo ambiente a tu hogar.
            </p>
          </div>
          <div
            className="p-2 w-full text-center bg-gradient-to-tr from-orange-200 via-orange-300 to-orange-300 rounded-md shadow-md shadow-black cursor-pointer md:col-span-2 xl:col-span-1"
            title="See More"
          >
            <h1 className="font-bold text-lg">Fashion</h1>
            <Image
              className="mx-auto rounded-md shadow-sm shadow-gray-700"
              src={"/Pets/fashion.webp"}
              alt="nanook"
              height={288}
              width={288}
            />
            <p className="font-serif italic font-thin mt-2">
              JORUCA Fashion esta destinada para que encuentres lo que este en
              tendencia para toda la familia.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
