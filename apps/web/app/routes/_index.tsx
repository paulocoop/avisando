import { json, type MetaFunction } from "@vercel/remix";
import ClientOnly from "~/components/ClientOnly";
import { Map } from "~/components/Map.client"
import { IoIosPin, IoMdDownload } from "react-icons/io";
import { FaArrowRight, FaShareAlt } from "react-icons/fa";
import { list } from "airtable/incidentes";
import { useLoaderData } from "@remix-run/react";
import Incidentes from "~/components/Incidentes";
import { extractCoordinatesFromGoogleMapsUrl } from "~/lib/maps";
import { useMemo } from "react";
import { popup } from "leaflet";

export const meta: MetaFunction = () => {
  return [
    { title: "Estamos avisando" },
    { name: "description", content: "El facismo ha renacido en nuestro pais asi que es hora de denunciarlo." },
  ];
};

export async function loader() {
  const incidentes = await list();
  return json({ incidentes });
}

export default function Index() {
  const { incidentes } = useLoaderData<typeof loader>();
  const markers = useMemo(() => incidentes.map(inc => ({
    id: inc.id,
    position: extractCoordinatesFromGoogleMapsUrl(inc["Enlace GMaps"]),
    popup: (<>{inc.Incidente}</>)
  })).filter(m => m.position !== null), [incidentes])
  return (
    <div className="flex flex-col gap-4">
      <div className="divider">
        <span className="text-xl">
          Incidentes destacados
        </span>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:h-screen gap-5 lg:gap-1">
        <ClientOnly>
          <Map className="w-full h-96 lg:w-lvw lg:h-full z-1 grayscale-50 " markers={markers} />
        </ClientOnly>
        <div className="z-auto overflow-x-clip overflow-y-scroll flex flex-coljustify-end px-5">

          <Incidentes incidentes={incidentes} />
        </div>
      </div>
    </div>
  );
}
