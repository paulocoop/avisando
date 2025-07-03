import { GoMegaphone } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { ReactCountryFlag } from "react-country-flag"
type NavbarProps = {
    sticky: boolean;
}

export default function Navbar({ sticky }: NavbarProps) {

    return (
        <div className={`navbar shadow-lg z-[1000000] ${sticky && "sticky top-0 z-50 bg-black"}`}>
            <div className="navbar-start gap-5">
                <a href="/" className="btn btn-ghost hover:bg-transparent">
                    <GoMegaphone className="size-6" />
                    <p className="font-thin">Avisan.do</p>
                </a>
            </div>
            <div className="hidden md:navbar-end">
                <ul className="menu menu-horizontal">
                    <li><a href="#">Mapas</a></li>
                    <li><a href="#">Temas</a></li>
                    <li><a href="#">reportar@avisan.do</a></li>
                </ul>
            </div>
        </div>
    )
}