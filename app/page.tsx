import Hero from "@/components/hero";
import Line from "@/components/line";
import Services from "@/components/services";
import DefaultLayout from "@/components/defaultLayout";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <section>
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
      <Line />
      <Services />
      <DefaultLayout>
        <Projects />
      </DefaultLayout>
    </section>
  );
}
