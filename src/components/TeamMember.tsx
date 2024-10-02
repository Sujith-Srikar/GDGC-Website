import { useEffect } from 'react';
import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedin.png';
import { useScroll } from '../context/ScrollContext';

const TeamMember = () => {
  const onScroll = useScroll();

  useEffect(() => {
    if (onScroll) {
      window.addEventListener('scroll', onScroll);
    }
    return () => {
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll]);

  return (
    <div className="max-h-[250px] min-h-[250px] h-[250px] bg-white rounded-3xl border-[1px] border-black border-solid p-6 flex flex-row justify-between">
      <div className="w-[45%] aspect-square flex flex-col justify-between">
        <div>
          <p className="font-bold text-3xl">Name</p>
          <p className="text-xl">Role</p>
        </div>
        <div className="flex gap-2">
          <img src={GithubIcon} alt="github" />
          <img src={LinkedinIcon} alt="linkedin" />
        </div>
      </div>
      <img className="rounded-2xl aspect-square w-[45%] object-cover" src="https://assets2.ignimgs.com/2016/08/29/mr-robotjpg-42cabf.jpg?width=300&auto=webp" alt="TeamMember" />
    </div>
  );
};

export default TeamMember;
