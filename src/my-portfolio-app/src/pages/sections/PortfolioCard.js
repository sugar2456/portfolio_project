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
        <a
            href="https://github.com/sugar2456/vital_data_viewer_app/wiki"
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            className={`group block transition duration-[1000ms] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
        >
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                        {tooltip}
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="mb-3 text-xl font-bold text-slate-950">{title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{description}</p>
                </div>
            </div>
        </a>
    );
}

export default PortfolioCard;
