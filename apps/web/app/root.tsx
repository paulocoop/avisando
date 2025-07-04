import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import './app.css';
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { list as listEtiquetas } from "airtable/etiquetas"
import { EtiquetasContext } from "./components/Etiqueta";

export async function loader() {
  const etiquetas = await listEtiquetas();
  return json({ etiquetas });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  return (
    <EtiquetasContext.Provider value={data}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="bg-black">
          <Header />
          <main className="w-full min-h-screen py-3">
            {children}
          </main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <Analytics />
        </body>
      </html>
    </EtiquetasContext.Provider>
  );
}

export default function App() {
  return <Outlet />;
}
