import { TeamMember, Transition } from "../components/index.ts"; 
import MMTImage from "../assets/mmt.png";
import { useEffect, useState } from "react";

function Team() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

  const Members: Array<{MemberName: string, Role: string, Image: string, GithubLink: string, LinkedinLink: string}> = [
    {
      MemberName: "Nikhil",
      Role: "Web Developer",
      Image: "https://assets2.ignimgs.com/2016/08/29/mr-robotjpg-42cabf.jpg?width=300&auto=webp",
      GithubLink: "https://github.com/MGuruNikhil",
      LinkedinLink: "https://www.linkedin.com/in/gurunikhilm/"
    }
  ];

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);

    return () => {
      window.matchMedia("(min-width: 768px)").removeEventListener('change', handler);
    };
  }, [matches]);

  return (
    <div className="md:relative rounded-3xl w-full h-screen bg-[#D8E2F9] px-6 py-12 flex flex-col gap-4 md:gap-0 md:flex-row overflow-auto md:overflow-hidden">
      <div className="md:w-1/2">
        <p className="text-5xl font-bold">MEET OUR TEAM:</p>
        {matches && <img className="absolute left-0 bottom-0 w-[70%]" src={MMTImage} alt="image" />}
      </div>
      <div className="w-[80%] md:w-1/2 flex flex-col gap-2 md:overflow-y-scroll p-2">
        {Members.map((member, index) => <TeamMember key={index} {...member} />)}
      </div>
    </div>
  );
}

export default Transition(Team);
