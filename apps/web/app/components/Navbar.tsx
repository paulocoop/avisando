import { GoMegaphone } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import  { ReactCountryFlag } from "react-country-flag"
type NavbarProps = {
    sticky: boolean;
}

export default function Navbar({ sticky }: NavbarProps) {

    return (
        <div className={`navbar shadow-lg ${sticky && "sticky top-0 z-50 bg-black/80 mb-16"}`}>
            <div className="navbar-start gap-5">
                <a href="/" className="btn btn-ghost hover:bg-transparent">
                    <GoMegaphone className="size-6" />
                    <p>Avisan.do</p>
                </a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost hover:bg-transparent">
                    <div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                    Estamos en linea!
                    <div className="badge badge-primary">100+</div>
                </button>
                <div className="dropdown">
                    <summary className="btn bg-transparent hover:bg-transparent m-1">
                        <ReactCountryFlag countryCode="DO"/>
                        Espanol
                        <FaCaretDown />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>English</a></li>
                        <li><a>Kreyol</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}