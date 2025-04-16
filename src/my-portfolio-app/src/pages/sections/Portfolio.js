import PortfolioCard from "./PortfolioCard";
function Portfolio() {
    return (
        <section id="portfolio" className="h-screen p-8 bg-yellow-100">
            <h1 className="mb-10 text-3xl font-bold text-center md:text-6xl">ポートフォリオの紹介</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <PortfolioCard
                    title="バイタルマーカー解析アプリ"
                    image='images/vital_photo.png'
                    description="ウェアラブルデバイスから生体情報を取得して、グラフ化したり解析するアプリ"
                    tooltip="githubにて配布中"
                />
            </div>
        </section>
    );
}

export default Portfolio;