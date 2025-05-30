/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { FaEnvelope, FaArrowRight, FaFacebook } from "react-icons/fa";

const  Hero = forwardRef<HTMLDivElement>((_props, ref) => (
        <div ref={ref} className="hero bg-white/20 shadow-lg w-screen">
            <div className="hero-content flex-col lg:flex-row gap-5 relative min-h-[60vh]">
                <div className="bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-left-bottom absolute w-full h-[60vh]  grayscale hover:filter-none focus:filter-none lg:w-[60vw] lg:relative"></div>
                <div className="flex flex-col justify-center gap-3">
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none focus:filter-none">
                            <h1 className="text-5xl font-bold">
                                Estamos Avisando!
                            </h1>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none focus:filter-none">
                            <p>
                                El facismo ha renacido en nuestro pais asi que es hora de denunciarlo.
                            </p>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none focus:filter-none">
                            <p>
                                Avisan.do es un proyecto comunitario que busca ponerle fecha y lugar a los casos de
                                violencia fascista por parte de oficiales publicos y privados.
                            </p>
                        </div>
                    </div>
                     <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none focus:filter-none">
                            <p>
                                Riega la voz
                            </p>
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-secondary grayscale hover:filter-none focus:filter-none">
                            <FaFacebook className="size-8" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
);

export default Hero;