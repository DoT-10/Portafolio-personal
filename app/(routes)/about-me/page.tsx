"use client"

import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-center md:text-5xl md:mt-10">
                    Experiencia{' '}
                    <span className="font-bold text-secondary">
                        Laboral
                    </span>
                </h1>
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;