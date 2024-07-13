import Development from "../_components/Development";
import ErpSystem from "../_components/ErpSystem";
import Hero from "../_components/Hero";
import Service from "../_components/Service";
import Team from "../_components/Team";
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
    </>
  );
}

export default Home;
