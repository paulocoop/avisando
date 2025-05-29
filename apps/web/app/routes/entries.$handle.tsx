import type { MetaFunction } from "@vercel/remix";
import { FaBook } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { LoremIpsum } from 'react-lorem-ipsum';
import ClientOnly from "~/components/ClientOnly";
import { Map } from "~/components/Map.client";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Remix@Edge | New Remix App" }];

export default function Edge() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center content-center py-10 px-5">
      <h1 className="text-4xl">Denuncias de abusos sexuales en los operativos de migración. </h1>
      <div className="flex flex-row gap-3 justify-center mb-5">
        <button className="kbd bg-white/50">Abuso sexual</button>
        <button className="kbd bg-white/50">Extorsion</button>
        <button className="kbd bg-white/50">Impunidad</button>
      </div>
      <div className="flex flex-col gap-5 px-5">
        <div className="divider">
          <h1 className="text-4xl text-center">Historia</h1>
        </div>
        <LoremIpsum p={4} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="divider">
          <h1 className="text-4xl text-center">Ubicacion</h1>
        </div>
        <div className="w-screen">
          <img src="/images/map.png" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="divider">
          <h1 className="text-4xl text-center">Galeria</h1>
        </div>
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card w-96 shadow-sm grayscale hover:filter-none">
              <figure>
                <img
                  src="/images/hero.jpg"
                  alt="Shoes" />
              </figure>
              {/* <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost">Descargar</button>
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="dock bg-black/80">
        <button>
          <FaBook className="size-6" />
          <span>Historia</span>
        </button>
        <button>
          <IoIosPin className="size-6" />
          Ubicacion
        </button>
        <button>
          <IoCamera className="size-6" />
          Galeria
        </button>
      </div>
    </div>
  );
}
