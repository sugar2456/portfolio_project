import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
function Profile() {
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
    <section id="profile" className="bg-white">
      <div ref={ref} className={`section-shell transition duration-[1000ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">Career</p>
          <h1 className="section-title">職務経歴について</h1>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="content-card">
            <p className="mb-4 text-sm font-bold text-teal-600">2018 - SIer</p>
            <div className="section-copy mt-0">
              <p>2018年に薬科大学併設の生命科学部を卒業後、SIerに入社。</p>
              <p>主に金融業界のシステム開発に従事し、情報処理やコーディングやテストの基礎を身に着ける。</p>
              <p>設計からテスト、リリースまで立ち会うことができ、自分が作ったものが世に出せれるまでの流れに立ち会うことができた。</p>
            </div>
          </div>
          <div className="content-card">
            <p className="mb-4 text-sm font-bold text-teal-600">Web Service</p>
            <div className="section-copy mt-0">
              <p>金融で一通りの経験を積んでいくうちに、大学で学んだ製薬や医療系のバックグランドを生かしたいと思い、医療系のWebサービスを提供している会社に転職。</p>
              <p>ここでモダンなWeb開発やインフラ構築に関わることができ、初めてゼロからシステムを立ち上げることができるようになった。</p>
            </div>
          </div>
          <div className="content-card">
            <p className="mb-4 text-sm font-bold text-teal-600">Healthcare Data</p>
            <div className="section-copy mt-0">
              <p>fitbitなどのウェアラブルデバイスに興味があり、メーカーが提供しているWebAPIを使って生体データを取得できるので、そのデータを使って何か新しいサービスができないか考えてる。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
