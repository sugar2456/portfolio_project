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
    <section id="thinkingForJob" className="bg-slate-950 text-white">
      <div ref={ref} className={`section-shell transition duration-[1000ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker text-teal-300">Values</p>
            <h1 className="text-3xl font-bold tracking-normal text-white md:text-5xl">仕事についての考え</h1>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
            <div className="space-y-6 text-sm leading-7 text-slate-200 md:text-base md:leading-8">
              <p>本当に価値あるプロダクトを世の中にリリースしたいです。世の中の病気や不都合な手続きなどの困りごとを解決して人の役に立つような仕事をしてみたいです。</p>
              <p>ただ言うが易しで実現するのは難しいと思います。機能がほんとにユーザに必要だったのか、設計に考慮漏れがないか、最適な設計をするためにシステム全体を通して最適な手法をとれているか。</p>
              <p>ドキュメントの管理工数、設計書とプログラムの一致、テストコードの整備、技術的負債の返却。ほんとに価値あるプロダクトにするためには大きな労力と資金がかかると思います。</p>
              <p>私も未熟でこういった問題にあったときの解決策は持ち合わせていません。ただ、そのような難しい問題にあたっても解決できるような技術者になりたいと日々思っています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThinkingForJob;
