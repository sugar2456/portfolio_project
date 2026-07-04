function Banner() {
    return (
        <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-slate-950 bg-cover bg-center text-white"
            style={{backgroundImage: "url('images/banner.jpg')"}}
        >
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.22),transparent_34%),linear-gradient(90deg,rgba(15,23,42,0.95),rgba(15,23,42,0.62),rgba(15,23,42,0.35))]"></div>
            <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-teal-300">Software Engineer Portfolio</p>
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-outline md:text-7xl">
                    OGAWA SATORUの<br/>ポートフォリオサイト
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                    医療・ヘルスケア領域への関心を軸に、Web開発、業務システム、データ活用の経験をまとめています。
                </p>
                <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-100">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">Web Application</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">Healthcare Data</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">Product Mindset</span>
                </div>
            </div>
        </section>
    );
}

export default Banner;
