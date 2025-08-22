import PerformanceImg from 'public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={PerformanceImg}
      imgAlt="welding"
      title="We serve high performance Applications"
    />
  );
}
