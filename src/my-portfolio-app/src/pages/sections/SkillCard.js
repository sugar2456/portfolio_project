import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                padding: 14,
            },
        },
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
        <div ref={ref} className={`transition duration-[1000ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-950">{title}</h3>
                <div className="flex flex-1 flex-col text-center">
                    <div className="overflow-x-auto rounded-lg border border-slate-100">
                        <table className="min-w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500">
                                    <th className="px-4 py-3 text-left font-bold">スキル</th>
                                    <th className="px-4 py-3 text-right font-bold">月</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.map((skill, index) => (
                                    <tr key={index} className="border-t border-slate-100">
                                        <td className="px-4 py-3 text-left text-slate-700">{skill.name}</td>
                                        <td className="px-4 py-3 text-right font-semibold text-slate-950">{skill.month}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 h-56 min-h-56">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
