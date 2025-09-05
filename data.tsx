import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/fernando-campos-773447278",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Arrocera San Fernando",
        subtitle: "Operario multifuncional",
        description: "Tareas de embalaje, paletizado y transporte de carga pesada.",
        date: "Ago - Nov 2021 ",
    },
    {
        id: 2,
        title: "Operario de packing",
        subtitle: "Cerasus",
        description: "Transporte de carga en cámaras de frío.",
        date: "Dic 2021",
    },
    {
        id: 3,
        title: "Encargado de punto de venta",
        subtitle: "Toy Contento (@toy_contento_)",
        description: "Encargado de punto de venta especializado en artículos de juguetería.",
        date: "Feb - Nov 2022",
    },
    {
        id: 4,
        title: "Operario de packing",
        subtitle: "Dole",
        description: "Transporte de carga en cámaras de frío.",
        date: "Dic 2022",
    },
    {
        id: 5,
        title: "Apoyo Integral",
        subtitle: "Multihogar S.A",
        description: "Desempeño como personal de despacho, gestionando stocks físicos y lógicos. También ejercí tareas de vendedor y de seguridad frente a prevenir pérdidas",
        date: "Sep 23 - Abr 25",
    },
    {
        id: 6,
        title: "Apoyo de Tesorería",
        subtitle: "Multihogar S.A",
        description: "Cuadratura de cajas, arqueos, sencillo y depósito de efectivo. Registro de pagos y recaudaciones diarias en software SAP Business ONE.",
        date: "Abr - 2025",
    },
]


export const serviceData = [
    {
        title: "Administración Financiera",
        description: "Gestión y registro de recaudaciones a baja y media escala",
    },
    {
        title: "Gestión de Inventario",
        description: "Registro y gestión contínua de inventario físico y lógico. Familiarización con entorno SAP Business ONE",
    },
    {
        title: "Programación",
        description: "Diseño y desarrollo software a nivel junior. Experiencia en frameworks como Laravel, Android Studio, Windows Forms y React",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Enseñanza básica",
        image: "/logocolegio.png",
        description: "2009 - 2017"
    },
    {
        id: 2,
        title: "Enseñanza Media",
        image: "/logocolegio.png",
        description: "2018 - 2021"
    },
    {
        id: 3,
        title: "Traducción Inglés - Español",
        image: "/Universidad_Catolica_de_Temuco_Logo_Vertical.png",
        description: "1 Semestre 2023"
    },
    {
        id: 4,
        title: "Instituto Profesional AIEP",
        image: "/aieplogo.jpg",
        description: "2024 - Actualidad"
    },
];

