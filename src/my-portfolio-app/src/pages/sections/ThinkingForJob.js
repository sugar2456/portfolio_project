import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
function ThinkingForJob() {
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
    <section id="thinkingForJob" className="flex items-center justify-center h-screen bg-red-100">
      <div ref={ref} className={`px-4 text-center transition duration-[1000ms] ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-56 opacity-0'}`}>
        <h1 className="mb-10 text-3xl font-bold md:text-6xl">仕事についての考え</h1>
        <p className="text-xs leading-relaxed sm:text-base">本当に価値あるプロダクトを世の中にリリースしたいです。</p>
        <p className="text-xs leading-relaxed sm:text-base">世の中の病気や不都合な手続きなどの困りごとを</p>
        <p className="text-xs leading-relaxed sm:text-base">解決して人の役に立つような仕事をしてみたいです。</p>
        <br/>
        <p className="text-xs leading-relaxed sm:text-base">ただ言うが易しで実現するのは難しいと思います。</p>
        <p className="text-xs leading-relaxed sm:text-base">機能がほんとにユーザに必要だったのか</p>
        <p className="text-xs leading-relaxed sm:text-base">設計に考慮漏れがないか</p>
        <p className="text-xs leading-relaxed sm:text-base">最適な設計をするためにシステム全体を通して最適な手法をとれているか</p>
        <p className="text-xs leading-relaxed sm:text-base">ドキュメントの管理工数が取れるのか</p>
        <p className="text-xs leading-relaxed sm:text-base">設計書とプログラムを一致しているのか</p>
        <p className="text-xs leading-relaxed sm:text-base">テストコードは整備されているのか</p>
        <p className="text-xs leading-relaxed sm:text-base">その修正は技術的負債になっていないか</p>
        <p className="text-xs leading-relaxed sm:text-base">技術的負債を返却することができるのか</p>
        <p className="text-xs leading-relaxed sm:text-base">ほんとに価値あるプロダクトにするためには大きな労力と資金がかかると思います。</p>
        <br/>
        <p className="text-xs leading-relaxed sm:text-base">私も未熟でこういった問題にあったときの解決策は持ち合わせていません。</p>
        <p className="text-xs leading-relaxed sm:text-base">このような問題はお互いに複雑に絡まって、一つの問題を解決するのにも</p>
        <p className="text-xs leading-relaxed sm:text-base">高いスキルや経験、もしくは工数が求められます。</p>
        <p className="text-xs leading-relaxed sm:text-base">ただ、そのような難しい問題にあたっても</p>
        <p className="text-xs leading-relaxed sm:text-base">解決できるような技術者になりたいと日々思っています。</p>
      </div>
    </section>
  );
}

export default ThinkingForJob;