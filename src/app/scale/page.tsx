import ScaleImg from 'public/scale.jpg';
import Hero from '@/components/hero';

export default function SlacePage() {
  return (
    <Hero
      imgData={ScaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
}
