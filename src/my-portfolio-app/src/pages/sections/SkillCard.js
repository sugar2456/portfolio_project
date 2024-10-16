import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const options = {
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    const value = context.raw || '';
                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${value}か月: ${percentage}%`;
                },
            },
        },
    },
};
function SkillCard({ title, skills, data }) {
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
        <div ref={ref} className={`w-90 p-4 transition duration-[1000ms] ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-56 opacity-0'}`}>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <div className="text-center">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white h-60">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">スキル</th>
                                    <th className="px-4 py-2 border-b">月（ヶ月）</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.map((skill, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border-b">{skill.name}</td>
                                        <td className="px-4 py-2 border-b">{skill.month}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-10">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;