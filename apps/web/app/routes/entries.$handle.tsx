import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@vercel/remix";
import { find } from "airtable/incidentes";
import {  findAllByIds as findFuentes } from "airtable/fuentes";
import { Map } from "../components/Map.client";
import { extractCoordinatesFromGoogleMapsUrl } from "~/lib/maps";
import ClientOnly from "~/components/ClientOnly";
import { FaLocationPin, FaLocationPinLock, FaMapLocation } from "react-icons/fa6";
import { FaExternalLinkAlt, FaLocationArrow } from "react-icons/fa";
import { Etiqueta } from "~/components/Etiqueta";

// export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Detalles de incidente" }];

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.handle || "";
  const incidente = await find(id);
  const fuentes = incidente?.["Fuentes por incidente"] ? (await findFuentes(Array.from(incidente?.["Fuentes por incidente"]))) : []
  return json({ incidente, fuentes }, { status: incidente ? 200 : 404 });

}

export default function Edge() {
  const { incidente, fuentes } = useLoaderData<typeof loader>()
  const position = extractCoordinatesFromGoogleMapsUrl(incidente?.["Enlace GMaps"] ?? "")
  const date = new Date(incidente?.Fecha ?? "");
  return (
    <div className="flex flex-col gap-3">
      <div className="relative pb-24">
        <ClientOnly>
          <Map className="w-screen h-96" zoom={11} center={position} markers={[{ position, id: incidente?.id ?? "", popup: <></> }]} />
        </ClientOnly>
        <div className="absolute bottom-0 z-[1000] bg-black p-5 ms-5 me-10 space-y-1">
          <h3 className="font-bold text-md capitalize">{date.toLocaleString('default', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</h3>
          <h1 className="font-thin text-2xl">{incidente?.Incidente}</h1>
          <div className="flex items-center content-center gap-2">
            <FaLocationPin className="size-4" />
            <p className="font-semibold text-xs">{incidente?.Locación}</p>
          </div>
          {incidente?.Etiquetas && (
            <div className="sm:relative flex flex-row gap-2 py-3">
              {Array.from(incidente?.Etiquetas).map(e => (
                <Etiqueta key={e} id={e} />
              ))}
            </div>
          )}

        </div>
      </div>
      <div className="flex flex-col p-5 gap-5 lg:flex-row lg:justify-between">
        <article className="prose" dangerouslySetInnerHTML={{ __html: incidente?.["Breve resumen"] ?? "" }} ></article>
        <div className="flex flex-col justify-start gap-5">
          {incidente?.["Implicados / Actores"] && (
            <div className="space-y-5">
              <h3 className="font-bold">Involucrados</h3>
              <p>{incidente["Implicados / Actores"]}</p>
            </div>
          )}
          {fuentes && fuentes.length > 0 && (
            <div className="space-y-5">
              <h3 className="font-bold">Fuentes</h3>
              <div className="flex flex-col gap-2">
                {fuentes.map(f => (
                  <div key={f.id} className="w-full">
                    <a href={f["Fuente URL"]} target="_blank" rel="noreferrer">
                      <div className="flex gap-2">
                        <p>{f.Titulo}</p>
                        <FaExternalLinkAlt className="size-4" />
                      </div>
                    </a>
                    <div className="divider divider-white"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
