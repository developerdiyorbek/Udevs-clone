import Clients from "../_components/Clients";
import Consulting from "../_components/Consulting";
import Development from "../_components/Development";
import ErpSystem from "../_components/ErpSystem";
import Hero from "../_components/Hero";
import Optimization from "../_components/Optimization";
import Service from "../_components/Service";
import Team from "../_components/Team";
import Tools from "../_components/Tools";
import UIUX from "../_components/UIUX";

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Team />
      <Development />
      <ErpSystem />
      <UIUX />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients />
    </>
  );
}

export default Home;
