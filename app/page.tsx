import Hero from "@/components/hero";
import Line from "@/components/line";
import Services from "@/components/services";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <section /* className="container mx-auto max-w-7xl  px-6 flex-grow" */>
      <Hero />
      <Line />
      <div className="dark:bg-[#273240] w-full mt-6 p-6 overflow-x-hidden lg:mt-[240px] pt-28 pb-20">
        <Services />
      </div>
      <Projects />
    </section>
  );
}
