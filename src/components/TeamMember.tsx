import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedin.png';

const TeamMember = ({MemberName, Role, Image, GithubLink, LinkedinLink} : {MemberName: string, Role: string, Image: any, GithubLink: string, LinkedinLink: string}) => {
  return (
    <div className="max-h-[250px] min-h-[250px] h-[250px] bg-white rounded-3xl border-[1px] border-black border-solid p-6 flex flex-row justify-between">
      <div className="w-[45%] aspect-square flex flex-col justify-between">
        <div>
          <p className="font-bold text-3xl">{MemberName}</p>
          <p className="text-xl">{Role}</p>
        </div>
        <div className="flex gap-2">
          <a className="cursor-pointer" href={GithubLink} target="_blank">
            <img src={GithubIcon} alt="github" />
          </a>
          <a className="cursor-pointer" href={LinkedinLink} target="_blank">
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
        </div>
      </div>
      <img className="rounded-2xl aspect-square w-[45%] object-cover" src={Image} alt="TeamMember" />
    </div>
  );
};

export default TeamMember;
