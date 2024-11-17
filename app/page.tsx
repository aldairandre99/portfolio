import Hero from "@/components/hero";
import Line from "@/components/line";
import Services from "@/components/services";
import DefaultLayout from '@/components/defaultLayout'

export default function Home() {
  return (
    <section>
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
      <Line />
      <Services />
    </section>
  );
}
