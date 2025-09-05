import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        description: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, description} = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl text-center">{title}</h3>
            <p className="mb-4 text-l text-center">{description}</p>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />
            
        </div>
    );
}

export default PortfolioBox
