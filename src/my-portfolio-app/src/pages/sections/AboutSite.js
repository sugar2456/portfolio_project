function AboutSite() {
  return (
    <section id="about-site" className="bg-slate-50">
      <div className="section-shell grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p className="section-kicker">About this site</p>
          <h1 className="section-title">このWebサイトについて</h1>
        </div>
        <div className="content-card">
          <div className="section-copy mt-0">
            <p>このWebサイトは私のスキルセットや仕事についての考え、ポートフォリオを紹介するサイトになります。</p>
            <p>新卒から現在（2024年度10月）までの経歴を紹介します。</p>
            <p>少しでも私のスキル感や仕事に関する姿勢にご理解いただけたら幸いです。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSite;
