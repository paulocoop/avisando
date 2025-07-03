import { useIntersectionObserver } from "@uidotdev/usehooks";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
    // const [ref, entry] = useIntersectionObserver({ threshold: 0.25});
    // return (
    //     <>
    //     {!entry?.isIntersecting && (<Navbar sticky={true} />)}
    //     <Hero ref={ref} />
    //     {entry?.isIntersecting && (<Navbar sticky={false} />)}
    //     </>
    // )

    return <Navbar sticky={true} />
}