import { FaEnvelope, FaArrowRight } from "react-icons/fa";
export default function Hero() {
    return (
        <div className="hero bg-white/20 shadow-lg w-screen">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-left-bottom w-[60vw] h-[60vh]  grayscale hover:filter-none"></div>
                <div className="flex flex-col justify-center gap-3">
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <h1 className="text-5xl font-bold">
                                Estamos Avisando!
                            </h1>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <p>
                                El facismo ha renacido en nuestro pais asi que es hora de denunciarlo.
                            </p>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <p>
                                Avisan.do es un proyecto comunitario que busca ponerle fecha y lugar a los casos de
                                violencia fascista por parte de oficiales publicos y privados.
                            </p>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <p>
                                Hacemos llamado al pueblo para que nos ayuden compartiendo casos de violencia
                                contra personal vulnerables, activistas y ciudadanos comunes por parte de 
                                organizaciones paramilitares, bandas fascistas, oficiales de la policia, migracion
                                u otra oficina de la ley que usan de su poder.
                            </p>
                        </div>
                    </div>
                     <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <p>
                                Tienes algo que reportar?
                            </p>
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none">
                            <p className="animate animate-bounce">
                                ...
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center text-black">
                        <label className="input w-full rounded-full text-black grayscale hover:filter-none focus:filter-none">
                            <FaEnvelope className="text-secondary" />
                            <input type="email" placeholder="Dejanos tu correo para ponernos en contacto!" />
                            <button className="btn btn-ghost text-secondary rounded-e-full">
                                Enviar!
                                <FaArrowRight />
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}