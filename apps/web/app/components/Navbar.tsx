import { GoMegaphone } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { ReactCountryFlag } from "react-country-flag"
type NavbarProps = {
    sticky: boolean;
}

export default function Navbar({ sticky }: NavbarProps) {

    return (
        <div className={`navbar shadow-lg z-[1000000] ${sticky && "sticky top-0 z-50 bg-black/80 mb-16"}`}>
            <div className="navbar-start gap-5">
                <a href="/" className="btn btn-ghost hover:bg-transparent">
                    <GoMegaphone className="size-6" />
                    <p className="hidden sm:contents">Avisan.do</p>
                </a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost hover:bg-transparent">
                    <div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                    <p className="hidden sm:contents">Estamos en linea!</p>
                    <div className="badge badge-primary">100+</div>
                </button>
                <details className="dropdown dropdown-end">
                    <summary className="btn bg-transparent hover:bg-transparent m-1">
                        <ReactCountryFlag countryCode="DO" />
                        <p className="hidden sm:contents">Espanol</p>
                        <FaCaretDown />
                    </summary>
                    <ul className="menu dropdown-content bg-black/80 rounded-box z-1 w-52 p-2 shadow-md">
                        <li>
                            <a>
                                <ReactCountryFlag countryCode="US" />
                                English
                            </a>
                        </li>
                        <li>
                            <a>
                                <ReactCountryFlag countryCode="HT" />
                                Kreyol
                            </a>
                        </li>
                    </ul>
                </details>
            </div>
        </div>
    )
}