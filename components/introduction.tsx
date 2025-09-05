import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/perfil.jpg" priority width="650" height="650" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Experiencia como: <br />
                        <TypeAnimation
                            sequence={[
                                'Programador junior',
                                1000,
                                'Tesorero de retail',
                                1000,
                                'Vendedor dedicado',
                                1000,
                                'Personal de despacho',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como trabajador, me considero muy versátil y efectivo, creo que mi experiencia habla por sí misma.
                    </p>
                </div>
            </div>
    );
}

export default Introduction;