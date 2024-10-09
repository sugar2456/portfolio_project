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
    <section id="profile" className="flex items-center justify-center h-screen bg-green-200">
      <div ref={ref} className={`text-center transition duration-[1000ms] ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-56 opacity-0'}`}>
        <h1 className="mb-10 text-6xl font-bold">職務経歴について</h1>
        <p className="leading-relaxed">2018年に薬学部併設の生命科学部を卒業後、SIerに入社</p>
        <p className="leading-relaxed">主に金融業界のシステム開発に従事し、情報処理やコーディングやテストの基礎を身に着ける</p>
        <p className="leading-relaxed">設計からテスト、リリースまで立ち会うことができ、</p>
        <p className="leading-relaxed">自分が作ったものが世に出せれるまでの流れに立ち会うことができた</p>

        <br/>
        
        <p className="leading-relaxed">金融で一通りの経験を積んでいくうちに、大学で学んだ製薬や医療系のバックグランドを生かしたいと思い、</p>
        <p className="leading-relaxed">医療系のWebサービスを提供している会社に転職。</p>
        <p className="leading-relaxed">ここでモダンなWeb開発やインフラ構築に関わることができ、</p>
        <p className="leading-relaxed">初めてゼロからシステムを立ち上げることができるようになった。</p>

        <br/>

        <p className="leading-relaxed">fitbitなどのウェアラブルデバイスに興味があり、</p>
        <p className="leading-relaxed">メーカーが提供しているWebAPIを使って生体データを取得できるので</p>
        <p className="leading-relaxed">そのデータを使って何か新しいサービスができないか考えてる</p>

      </div>
    </section>
  );
}

export default Profile;