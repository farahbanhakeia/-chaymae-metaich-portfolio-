import { Suspense, lazy, useEffect, useRef, useState } from 'react';

const FinanceEconomics = lazy(() =>
  import('@/sections/FinanceEconomics').then((m) => ({ default: m.FinanceEconomics })),
);

/**
 * Charge la section « Finance & Data » (et Recharts) uniquement lorsque
 * l'utilisateur approche de cette section — allège le chargement initial.
 */
export function LazyFinance() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show]);

  if (!show) {
    return <div id="finance" ref={ref} className="min-h-[640px] scroll-mt-24" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div id="finance" className="min-h-[640px] scroll-mt-24" />}>
      <FinanceEconomics />
    </Suspense>
  );
}
