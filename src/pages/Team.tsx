import { MeetOurTeam, Transition } from "../components/index.ts";

function Team() {

  return (
    <div className="pt-[72px] w-full h-full font-GSD_Regular">
      <MeetOurTeam />
    </div>
  );
}

export default Transition(Team);
