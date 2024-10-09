import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function PortfolioCard({ title, image, description, tooltip }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    return (
        <div ref={ref} className={`w-1/5 p-4 transition duration-[1000ms] ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-56 opacity-0'}`}>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <div className="relative group">
                    <img src={image} alt={title} className="object-cover w-full h-60" />
                    <div className="absolute bottom-0 left-0 hidden w-full p-2 text-sm text-white bg-black bg-opacity-75 group-hover:block">
                        {tooltip}
                    </div>
                </div>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;