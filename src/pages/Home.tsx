import { Hero } from "../components/index";
import Team from "../pages/Team"

function Home() {
  return (
    <>
      <div className="container w-full min-h-screen overflow-hidden">
        <Hero />
        <Team />
      </div>
    </>
  );
}

export default Home;
