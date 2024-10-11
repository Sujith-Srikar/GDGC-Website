import { Hero, Event } from "../components/index";
import Team from "../pages/Team"

function Home() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Hero />
        <Event />
        <Team />
      </div>
    </>
  );
}

export default Home;
