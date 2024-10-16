import SkillCard from './SkillCard';

function Skill() {
    const langSkills = [
        { name: 'C#', month: 43 },
        { name: 'php', month: 19 },
        { name: 'java', month: 10 },
        { name: 'javascript', month: 7 },
    ];

    const langData = {
        labels: langSkills.map(skill => skill.name),
        datasets: [
            {
                data: langSkills.map(skill => skill.month),
                backgroundColor: ['#0078D7', '#777BB4', '#F89820', '#F7DF1E'],
                hoverBackgroundColor: ['#0078D7', '#777BB4', '#F89820', '#F7DF1E'],
            },
        ],
    };

    const framworkSkills = [
        { name: 'Asp.net', month: 36 },
        { name: 'laravel', month: 18 },
        { name: 'Unity', month: 6 },
        { name: 'vue', month: 4 },
        { name: 'Spring boot', month: 4 },
        // { name: 'react', month: 3 },
        // { name: 'android studio(java)', month: 3 },
        // { name: 'react native', month: 2 },
    ];

    const framworkData = {
        labels: framworkSkills.map(skill => skill.name),
        datasets: [
            {
                data: framworkSkills.map(skill => skill.month),
                backgroundColor: ['#512BD4', '#FF2D20', '#000000', '#42B883', '#6DB33F'],
                hoverBackgroundColor: ['#512BD4', '#FF2D20', '#000000', '#42B883', '#6DB33F'],
            },
        ],
    };

    const phaseSkills = [
        { name: 'テスト', month: 29 },
        { name: 'コーディング', month: 28 },
        { name: 'バグ対応', month: 12 },
        { name: '設計', month: 10 },
    ];

    const phaseData = {
        labels: phaseSkills.map(skill => skill.name),
        datasets: [
            {
                data: phaseSkills.map(skill => skill.month),
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
            },
        ],
    };

    const platformSkills = [
        { name: 'フロントエンド', month: 50 },
        { name: 'バックエンド', month: 18 },
        { name: 'モバイル', month: 12 },
        { name: 'インフラ', month: 2 },
    ];

    const platformData = {
        labels: platformSkills.map(skill => skill.name),
        datasets: [
            {
                data: platformSkills.map(skill => skill.month),
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
            },
        ],
    };

    return (
        <section id="skill" className="h-auto p-8 bg-blue-200">
            <h1 className="pt-8 pb-6 text-3xl font-bold text-center sm:pt-16 sm:text-6xl">経験スキルについて</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <SkillCard title="言語" skills={langSkills} data={langData} />
                <SkillCard title="フレームワーク" skills={framworkSkills} data={framworkData} />
                <SkillCard title="開発フェーズ" skills={phaseSkills} data={phaseData} />
                <SkillCard title="プラットフォーム" skills={platformSkills} data={platformData} />
            </div>
        </section>
    );
}

export default Skill;