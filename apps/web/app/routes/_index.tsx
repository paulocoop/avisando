import type { MetaFunction } from "@vercel/remix";
import Hero from "~/components/Hero";
// import Map from "~/components/Map.client"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-row gap-3">
      <div className="card lg:card-side">
        <figure>
          {/* <Map /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ultimos reportajes</h2>

        </div>
      </div>
    </div>
  );
}
