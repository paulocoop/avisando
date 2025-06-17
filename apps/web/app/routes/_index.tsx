import { json, type MetaFunction } from "@vercel/remix";
import ClientOnly from "~/components/ClientOnly";
import { Map } from "~/components/Map.client"
import { FaArrowRight } from "react-icons/fa";
import * as incidentesTable from "airtable/incidentes";
import * as prensaTable from "airtable/prensa";
import { useLoaderData } from "@remix-run/react";
import Incidentes from "~/components/Incidentes";
import { extractCoordinatesFromGoogleMapsUrl } from "~/lib/maps";
import { useMemo } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Estamos avisando" },
    { name: "description", content: "El facismo ha renacido en nuestro pais asi que es hora de denunciarlo." },
  ];
};

export async function loader() {
  const prensa = await prensaTable.list();
  const incidentes = await incidentesTable.list();

  return json({ incidentes, prensa });
}

export default function Index() {
  const { incidentes, prensa } = useLoaderData<typeof loader>();
  const markers = incidentes.map(inc => ({
    id: inc.id,
    position: extractCoordinatesFromGoogleMapsUrl(inc["Enlace GMaps"]),
    popup: inc.Incidente && (<a href={`/entries/${inc.id}`} className="btn btn-link text-black p-0 text-clip">
      {inc["Incidente"]}
      <FaArrowRight className="size-5" />
    </a>)
  })).filter(m => m.position !== null);
  return (
    <div className="flex flex-col gap-4">
      <div className="divider">
        <span className="text-xl">
          Incidentes destacados
        </span>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:h-screen gap-5 lg:gap-1">
        <ClientOnly>
          <Map className="w-full h-96 lg:w-lvw lg:h-full z-1 grayscale-50" markers={markers} />
        </ClientOnly>
        <div className="z-auto overflow-x-clip overflow-y-scroll flex flex-coljustify-end px-5">

          <Incidentes incidentes={incidentes} prensa={prensa} />
        </div>
      </div>
      <div className="divider">
        <span className="text-xl">
          Nuestras fuentes
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-5 p-5">
        {prensa && prensa.map(p => (
          <div key={p.id} className="card bg-white/20 rounded-lg">
            <div className="card-body">
              <div className="card-title">
                {p["Nombre"]}
                
              </div>
              <div className="flex gap-1">
                {p["Etiquetas de la prensa"] && Array.from(p["Etiquetas de la prensa"]).map(p => (
                  <a key={p} className="btn btn-xs bg-white/50">{p}</a>
                ))}
              </div>
              <div className="card-actions justify-between">

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
