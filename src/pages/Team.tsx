import { TeamMember, Transition } from "../components/index.ts"; 
import MOTImage from "../assets/mot.png";
import { useEffect, useState } from "react";
import HimaPic from "../assets/hima.jpeg";
import SujithPic from "../assets/sujith.jpg";
import VarunPic from "../assets/varun.jpg";
import GaneshPic from "../assets/ganesh.jpeg";
import DurgeshPic from "../assets/durgesh.jpeg";
import SowmyaPic from "../assets/sowmya.jpg";
import RaghavendraPic from "../assets/raghavendra.jpeg";
import AshrithPic from "../assets/ashrith.jpg";
import TejeshPic from "../assets/tejesh.jpg";
import ShirinPic from "../assets/shirin.jpeg";
import GiriPic from "../assets/giri.jpeg";
import VivekPic from "../assets/vivek.jpg";
import ThanushaPic from "../assets/thanusha.jpeg";

function Team() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

  const Members: Array<{MemberName: string, Role: string, Image: any, GithubLink: string, LinkedinLink: string}> = [
    {
      MemberName: "Hima",
      Role: "GDG Organizer",
      Image: HimaPic,
      GithubLink: "https://github.com/himavarshini28",
      LinkedinLink: "https://www.linkedin.com/in/himavarshini-mahapatruni-285121269/"
    },
    {
      MemberName: "Sujith Srikar",
      Role: "Co-Lead",
      Image: SujithPic,
      GithubLink: "https://github.com/Sujith-Srikar",
      LinkedinLink: "https://www.linkedin.com/in/sujith-srikar/"
    },
    {
      MemberName: "Varun Kumar",
      Role: "Technical Lead",
      Image: VarunPic,
      GithubLink: "https://github.com/Padala-Varun",
      LinkedinLink: "https://www.linkedin.com/in/padala-venkata-sai-varun-kumar-37b844291/"
    },
    {
      MemberName: "Sai Ganesh",
      Role: "CP Lead",
      Image: GaneshPic,
      GithubLink: "https://github.com/sri-ganeshk",
      LinkedinLink: "https://www.linkedin.com/in/sri-ganesh-k-5706ab269/"
    },
    {
      MemberName: "Durgesh",
      Role: "CP Lead",
      Image: DurgeshPic,
      GithubLink: "https://github.com/bot-durgesh",
      LinkedinLink: "https://www.linkedin.com/in/ankoji-durgesh-877a032a1/"
    },
    {
      MemberName: "Guru Nikhil",
      Role: "Web Developer Lead",
      Image: "https://assets2.ignimgs.com/2016/08/29/mr-robotjpg-42cabf.jpg?width=300&auto=webp",
      GithubLink: "https://github.com/MGuruNikhil",
      LinkedinLink: "https://www.linkedin.com/in/gurunikhilm/"
    },
    {
      MemberName: "Sowmya",
      Role: "Web Developer Lead",
      Image: SowmyaPic,
      GithubLink: "https://www.linkedin.com/in/sowmya-musti-531715257/",
      LinkedinLink: "https://github.com/m-sowmya7"
    },
    {
      MemberName: "Koushik",
      Role: "AI/ML Lead",
      Image: "",
      GithubLink: "https://github.com/kskkoushik",
      LinkedinLink: ""
    },
    {
      MemberName: "Sidhartha",
      Role: "Android Lead",
      Image: "",
      GithubLink: "",
      LinkedinLink: ""
    },
    {
      MemberName: "Raghavendra",
      Role: "Cloud Lead",
      Image: RaghavendraPic,
      GithubLink: "https://github.com/Raghava1329",
      LinkedinLink: "https://www.linkedin.com/in/avula-ragavendra-ba1276266"
    },
    {
      MemberName: "Ashrith",
      Role: "UI/UX Lead",
      Image: AshrithPic,
      GithubLink: "https://github.com/ashrith24",
      LinkedinLink: "https://www.linkedin.com/in/srinivasa-ashrith-b-20388826b"
    },
    {
      MemberName: "Tejesh",
      Role: "Graphic Design Lead",
      Image: TejeshPic,
      GithubLink: "https://github.com/tejesh2709",
      LinkedinLink: "https://www.linkedin.com/in/mylapalli-tejesh-b1a174270"
    },
    {
      MemberName: "Shirin",
      Role: "Video Editing Lead",
      Image: ShirinPic,
      GithubLink: "https://github.com/SHIRIN-WAFIQAH-M4",
      LinkedinLink: "https://www.linkedin.com/in/shirin-wafiqah-563a8a292"
    },
    {
      MemberName: "Giri Krishna",
      Role: "Event Management Lead",
      Image: GiriPic,
      GithubLink: "https://github.com/girikrishnajetti",
      LinkedinLink: "https://www.linkedin.com/in/giri-krishna-365ab9271"
    },
    {
      MemberName: "Vivek Vardhan",
      Role: "Content Writing Lead",
      Image: VivekPic,
      GithubLink: "https://github.com/vivek-310",
      LinkedinLink: "https://www.linkedin.com/in/vivek-vardhan-chinni-418843268/"
    },
    {
      MemberName: "Thanusha",
      Role: "Content Writing Lead",
      Image: ThanushaPic,
      GithubLink: "https://github.com/thanusha-korada",
      LinkedinLink: "https://www.linkedin.com/in/thanusha-korada-55b2642b2"
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
    <div className="m-auto pt-[72px] w-full h-full">
      <div className="md:relative rounded-3xl w-full lg:w-[80%] m-auto h-[calc(100vh-72px)] bg-[#D8E2F9] px-6 py-12 flex flex-col gap-4 md:gap-0 md:flex-row overflow-auto md:overflow-hidden">
        <div className="md:w-1/2">
          <p className="text-center md:text-start text-4xl md:text-5xl font-bold">MEET OUR TEAM:</p>
          {matches && <img className="absolute left-0 bottom-0 w-[70%]" src={MOTImage} alt="image" />}
        </div>
        <div className="z-10 w-full md:w-1/2 flex flex-col gap-2 md:overflow-y-scroll p-2">
          {Members.map((member, index) => <TeamMember key={index} {...member} />)}
        </div>
      </div>
    </div>
  );
}

export default Transition(Team);
