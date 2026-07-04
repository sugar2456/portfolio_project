import PortfolioCard from "./PortfolioCard";
function Portfolio() {
    return (
        <section id="portfolio" className="bg-white">
            <div className="section-shell">
                <div className="mb-10 max-w-3xl">
                    <p className="section-kicker">Works</p>
                    <h1 className="section-title">ポートフォリオの紹介</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <PortfolioCard
                    title="バイタルマーカー解析アプリ"
                    image='images/vital_photo.png'
                    description="ウェアラブルデバイスから生体情報を取得して、グラフ化したり解析するアプリ"
                    tooltip="githubにて配布中"
                />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
