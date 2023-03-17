import Image from "next/image";

export default function About() {
  return (
    <>
      <div id="about"  className="  flex justify-center h-1/3 mt-28">
        <div className=" 2md:max-w-4.5xl flex flex-col justify-left w-screen 2md:mx-0  mx-9">
          <div className=" flex w-full flex-row items-center my-auto mb-5 mt-2">
            <span  className=" text-lightest-slate text-2xl font-semibold">
              <span  className="font-mono text-white font-thin">01.</span> About
              Me
            </span>
            <div className=" w-4/12  h-0 flex mx-5 border-lightest-navy border border-t-0"></div>
          </div>
          <div className="  lg:grid lg:grid-cols-14 lg:gap-12 block">
            <div className="mt-14  w-110">
              <p className=" text-lightest-slate static">
                Hello! My name is Muhammad Qasim and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2012 when I decided to try editing custom Tumblr
                themes — turns out hacking together a custom reblog button
                taught me a lot about HTML & CSS!
              </p>
              <p className=" text-lightest-slate   mt-3">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p className=" text-lightest-slate   mt-3">
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p className=" text-lightest-slate   mt-3">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid gap-2 grid-cols-2 grid-rows-3 text-lightest-slate mt-4">
                <li className="  mt-3 list-disc mx-5">TypeScript</li>
                <li className="  mt-3 list-disc mx-5">JavaScript</li>
                <li className="  mt-3 list-disc mx-5">React</li>
                <li className="  mt-3 list-disc mx-5">Node.js</li>
                <li className="  mt-3 list-disc mx-5">Chat-gpt</li>
                <li className="   mt-3 list-disc mx-5">TypeScript</li>
              </ul>
            </div>
            <div className=" flex justify-center">

            <div className=" lg:block max-w-2sm mt-9  ">
              <Image
                src="/pic1.avif"
                alt="pic"
                width={'16'}
                height={'20'}
                className=" rounded-2xl w-64 h-80  hover:translate-x-1.5  hover:translate-y-1.5 duration-1000 saturate-50 hover:saturate-100"
              />
              <div className=" lg:ml-4 lg:m-4 border-2 w-64 h-80  rounded-md ml-4 m-4 "></div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}