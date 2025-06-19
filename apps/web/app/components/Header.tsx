import { useIntersectionObserver } from "@uidotdev/usehooks";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.25});
    return (
        <>
        <Navbar></Navbar>
        <Hero ref={ref} />

        </>
    )
}