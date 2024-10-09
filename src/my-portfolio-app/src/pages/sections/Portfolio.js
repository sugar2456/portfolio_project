import PortfolioCard from "./PortfolioCard";
function Portfolio() {
    return (
        <section id="portfolio" className="h-screen p-8 bg-yellow-100">
            <h1 className="pt-16 pb-6 text-6xl font-bold text-center">ポートフォリオの紹介</h1>
            <div className="flex items-center justify-center space-x-4">
                <PortfolioCard
                    title="バイタルマーカー解析アプリ"
                    image='images/vital_photo.png'
                    description="ウェアラブルデバイスから生体情報を取得して、グラフ化したり解析するアプリ"
                    tooltip="鋭意製作中"
                />
            </div>
        </section>
    );
}

export default Portfolio;