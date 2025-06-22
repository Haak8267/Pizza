import React from 'react';
import virtual from '../assets/virtual.jpg';
import service from '../assets/service.jpg';
import meeting from '../assets/meeting.jpg';
import customized from '../assets/customized.jpg';

function About() {
  return (
    <div className="flex flex-1/2 items-center justify-center p-2  min-h-screen">
      <div>
        <h1 className="bg-sky-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 text-white text-4xl font-bold p-4 rounded text-center">
          Our Workspace Plans
        </h1>

        <p className="mt-4 italic text-2xl text-white text-center max-w-4xl mx-auto">
          Choose from our flexible office space plans tailored to your needs.
        </p>

        <h2 className="font-bold text-4xl text-gray-300 text-center"></h2>

        <div className="grid gap-8 justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {/* Plan 1 */}
          <div className="bg-sky-500 w-[20rem] h-[30rem] shadow-xl rounded-md p-2 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500">
            <img src={virtual} alt="Virtual Offices" className="p-2 h-[15rem] rounded-xl w-full object-cover" />
            <h3 className="font-black p-2 text-center">Virtual Offices</h3>
            <p className="px-2 italic text-sm text-center">
              Our virtual offices offer address, phone services, and access to our vibrant community and meeting rooms.
            </p>
          </div>

          {/* Plan 2 */}
          <div className="bg-sky-500 w-[20rem] h-[30rem] shadow-xl rounded-md p-2 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500">
            <img src={customized} alt="Customized Rooms" className="h-[15rem] w-full p-2 rounded-xl object-cover" />
            <h3 className="font-black p-2 text-center">Customized Rooms</h3>
            <p className="px-2 italic text-sm text-center">
              Personalize your space to reflect your brand, with all the perks of community membership.
            </p>
          </div>

          {/* Plan 3 */}
          <div className="bg-sky-500 w-[20rem] h-[30rem] shadow-xl rounded-md p-2 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500">
            <img src={service} alt="Service Rooms" className="h-[15rem] p-2 rounded-xl w-full object-cover" />
            <h3 className="font-black p-2 text-center">Service Rooms</h3>
            <p className="px-2 italic text-sm text-center">
              Fully equipped with internet, utilities, and partner benefits — just move in and start.
            </p>
          </div>

          {/* Plan 4 */}
          <div className="bg-sky-500 w-[20rem] h-[30rem] shadow-xl rounded-md p-2 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500">
            <img src={meeting} alt="Meeting Rooms" className="h-[15rem] p-2 rounded-xl w-full object-cover" />
            <h3 className="font-black p-2 text-center">Meeting Rooms</h3>
            <p className="px-2 italic text-sm text-center">
              Impress clients in modern meeting rooms with tech, coffee, and community access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
