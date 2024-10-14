import { TracingBeam } from "./ui/tracing-beam";

function IndividualEvent() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Main Event Image */}
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hack2Code"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            {/* Event Details */}
            <h2 className="text-3xl font-bold mb-4">Hack2Code</h2>
            <p className="text-lg mb-6">
              Indulge in the 24hrs hackathon to build Mobile and Web apps. Can't
              code? No problem. Join the solution challenge and participate in
              the no code hackathon.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <h4 className="text-xl font-semibold">50+</h4>
                <p>Teams</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2</h4>
                <p>Days</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">16th Dec</h4>
                <p>Event on</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">4</h4>
                <p>Sessions</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 mr-2">
                #Hack2Code
              </span>
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1">
                #hackathon
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-[10vw] py-2 rounded-lg">
              RSVP
            </button>
          </div>
        </div>

        {/* Resources Mentioned Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Resources Mentioned:</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="#link1" className="text-blue-500">
                link-1
              </a>
            </li>
            <li>
              <a href="#link2" className="text-blue-500">
                link-2
              </a>
            </li>
            <li>
              <a href="#link3" className="text-blue-500">
                link-3
              </a>
            </li>
            <li>
              <a href="#link4" className="text-blue-500">
                link-4
              </a>
            </li>
          </ul>
        </div>

        {/* Event Photos Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Event Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default IndividualEvent;
