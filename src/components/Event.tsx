import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface CardProps {
  logo?: string;
  image: string;
  date: string;
  title: string;
  content: string;
}

const NewEvents = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]"
    >
      <h2 className="text-4xl font-semibold pl-12 pt-16 pb-2 font-GSD_Regular text-grey-700">
        Upcoming Events:
      </h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 md:gap-20">
          <div className="flex gap-10 md:gap-20">
            {upcomingCards.map((card, index) => (
              <Card key={index} card={card} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const PrevEvents = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] overflow-y-visible">
      <h2 className="text-4xl font-semibold pl-12 pt-0 pb-4 font-google_sans_display text-grey-700">
        Past Events:
      </h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 md:gap-20">
          {pastCards.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const colors = ["bg-blue-300", "bg-green-300", "bg-red-300", "bg-yellow-300"];

const Card: React.FC<{ card: CardProps, index: number }> = ({ card, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      } as any}
      className="w-[350px] h-[450px] sm:w-[500px] top-3 sm:h-[400px] bg-white border-2 border-black rounded-[20px] hover:shadow-2xl flex-shrink-0"
    >
      <div
        style={{
          transform: "translateY(50px)",
          transformStyle: "preserve-3d",
          opacity: 0,
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg"
      ></div>

      <div
        className={`relative w-full h-[200px] overflow-hidden p-4 ${
          colors[index % colors.length]
        } rounded-t-[20px]`}
      >
        <img
          className="object-cover w-full h-full overflow-hidden rounded-[20px] border-black border-2"
          src={card.image}
          alt={card.title}
        />
      </div>

      <hr className="border-t-2 border-black w-full" />

      {/* Content Area */}
      <div className="pl-4 pr-4 pt-3 pb-6 flex-grow">
        <h2 className="text-lg font-bold mb-2 font-google_sans_display text-left">
          {card.title}
        </h2>
        <p className="text-gray-700 text-left break-words truncate font-google_sans_display py-1">
          {card.content}
        </p>
        <p className="text-gray-700 text-left font-semibold">{card.date}</p>
      </div>

      {/* Footer with Tags and RSVP */}
      <div className="flex justify-between items-center p-4 mt-auto">
        <div className="flex space-x-3 py-1">
          <span className="inline-block bg-grey-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
            #code
          </span>
          <span className="inline-block bg-grey-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
            #dev
          </span>
        </div>
        <button className="bg-blue-500 text-white text-center px-6 py-1 rounded backdrop-blur transition-colors hover:bg-white/30 hover:text-black">
          RSVP
        </button>
      </div>
    </motion.div>
  );
};

export const upcomingCards: CardProps[] = [
  { title: "Web Development", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Learn about the latest trends in web development"},
  { title: "Artificial Intelligence and Machine Learning", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Discover how AI is changing the world."},
  { title: "Android Development", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Build powerful Android apps using modern frameworks."},
  { title: "Data Science", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Explore the world of data and analytics."},
  { title: "Cloud Computing", logo: "gdg logo.png", image: "/images/devfest.png", date: "Oct 5th 2024", content: "Learn about scalable cloud infrastructure."},
];
export const pastCards: CardProps[] = [
  { title: "Past Event 1", logo: "logo.png", image: "/images/devfest.png", date: "Sep 20th 2024", content: "Details of past event 1" },
  { title: "Past Event 2", logo: "logo.png", image: "/images/devfest.png", date: "Aug 15th 2024", content: "Details of past event 2"},
  { title: "Past Event 3", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 3"},
  { title: "Past Event 4", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 4" },
  { title: "Past Event 5", logo: "logo.png", image: "/images/devfest.png", date: "July 30th 2024", content: "Details of past event 5"},
];

const Event = () => {
  return (
    <div className="relative">
      <NewEvents />
      <PrevEvents />
    </div>
  );
};

export default Event;