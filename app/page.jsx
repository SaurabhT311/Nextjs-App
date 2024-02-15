import FAQ from "./components/FAQ/Faq";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Step_1 from "./components/Step_1/Step_1";
import Step_2 from "./components/Step_2/Step_2";
import Step_3 from "./components/Step_3/Step_3";

export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <Step_1 />
      <Step_2/>
      <Step_3 />
      <FAQ />
    </>
    
  );
}
