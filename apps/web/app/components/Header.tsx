import { GoMegaphone } from "react-icons/go";

export default function Header() {
    return (
        <div className="navbar bg-white/20">
            <div className="navbar-start">
                <a href="/" className="btn btn-ghost text-xl">
                    <GoMegaphone className="size-6" />
                    Avisan.do
                </a>
            </div>
        </div>
    )
}