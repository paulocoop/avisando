import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import { find } from "airtable/incidentes";
import { FaBook } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { LoremIpsum } from 'react-lorem-ipsum';
import ClientOnly from "~/components/ClientOnly";
import { Map } from "~/components/Map.client";
import { extractCoordinatesFromGoogleMapsUrl } from "~/lib/maps";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Detalles de incidente" }];

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.handle || "";
  const incidente = await find(id);
  return json({ incidente }, { status: incidente ? 200 : 404 });

}

export default function Edge() {
  const { incidente } = useLoaderData<typeof loader>()
  const position = extractCoordinatesFromGoogleMapsUrl(incidente?.["Enlace GMaps"] ?? "")
  return (
    <div className="flex flex-col gap-5 justify-center items-center content-center py-10 px-5">
      <h1 className="text-4xl">{incidente?.Incidente}</h1>
      <div className="flex flex-row gap-3 justify-center mb-5">
        <button className="kbd bg-white/50">Abuso sexual</button>
        <button className="kbd bg-white/50">Extorsion</button>
        <button className="kbd bg-white/50">Impunidad</button>
      </div>
      <div className="flex flex-col gap-5 px-5">
        <div className="divider">
          <h1 className="text-4xl text-center">Resumen</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <p dangerouslySetInnerHTML={{ __html: incidente?.["Breve resumen"] ?? "" }}></p>
          </div>
           
        </div>
      </div>
      <div className="flex flex-col gap-5 px-5 ">
        <div className="divider">
          <h1 className="text-4xl text-center">Ubicacion</h1>
        </div>
        <ClientOnly>
            <Map className="w-screen h-lvh z-1 grayscale-50" center={position} markers={[{ position, id: incidente?.id ?? "" }]} />
        </ClientOnly>
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
    </div>
  );
}
