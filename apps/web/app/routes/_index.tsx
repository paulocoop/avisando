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
import Hero from "~/components/Hero";
import { IncidenteCard } from "~/components/Incidente";

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
    <div className="flex flex-col">
      <Hero />
      <ClientOnly>
        <Map className="w-screen h-96 lg:h-lhv z-1 grayscale-50" markers={markers} />
      </ClientOnly>
      <div className="flex flex-row flex-wrap justify-center p-5 gap-5 bg-white">
        {incidentes.map(incidente => (
          <IncidenteCard key={incidente.id} incidente={incidente} />
        ))}
      </div>
    </div>
  );
}
