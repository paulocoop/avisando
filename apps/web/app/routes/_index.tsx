import type { MetaFunction } from "@vercel/remix";
import ClientOnly from "~/components/ClientOnly";
import { Map } from "~/components/Map.client"
import { IoIosPin, IoMdDownload } from "react-icons/io";
import { FaArrowRight, FaShareAlt } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-row gap-3">
      <div className="card w-full lg:h-screen lg:card-side bg-white/20 rounded-none">
        <figure className="w-screen lg:w-[60vw] grayscale-50 hover:filter-none">
          <ClientOnly>
            <Map />
          </ClientOnly>
        </figure>
        <div className="card-body gap-5">
          <span className="tracking-wide text-xl shadow-md p-3">
            Ultimos reportajes
            <p className="opacity-35 text-sm">(Click para enfocar en el mapa)</p>
          </span>
          <ul className="list gap-5 overflow-y-scroll">
            
            {[...Array(30)].map(() => (
              <li className="list-row border-t-2 border-b-2 border-white/50">
                <div className="font-thin opacity-50 tabular-nums text-center justify-stretch">
                  <h1 className="text-5xl flex-1">28</h1>
                  <p className="text-lg">Mayo</p>
                </div>
                <div className="">
                  <h3 className="font-bold">Migración entran a una iglesia evangélica. Aprecian a les feligreses.</h3>
                  <a className="btn btn-link text-white p-0">
                    <IoIosPin className="size-5" />
                    Iglesía Maranata Sosua, Puerto Plata
                  </a>
                  <div className="flex flex-row gap-1">
                    <button className="kbd bg-white/50">Rapto</button>
                    <button className="kbd bg-white/50">Disrupcion de la paz</button>
                    <button className="kbd bg-white/50">Violencia</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a className="btn btn-ghost btn-sm" href="/entries/1">
                    Detalles
                    <FaArrowRight />
                  </a>
                  <a className="btn btn-ghost btn-sm" href="/entries/1">
                    Comparte
                    <FaShareAlt />
                  </a>
                   <a className="btn btn-ghost btn-sm" href="/entries/1">
                    Descarga
                    <IoMdDownload />
                  </a>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
