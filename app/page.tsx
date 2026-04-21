import React from "react";
import Model from "./components/Model";
const page = () => {
  return (
    <>
      <div className="size-full fixed top-0 left-0 inset-0 z-2 ">
        <Model />
      </div>
      <header className="h-screen w-full bg-black relative">
        <div className="size-full flex justify-between items-center px-10 py-5 relative z-5">
          <div className="mt-[-8vw]">
            <h1 className="text-[8vw] text-white uppercase leading-none tracking-tighter">
              smoke <br /> fluid
            </h1>

            <p className="text-[1vw] w-[40%] font-mono mt-[2vw] leading-tight">
              Explore the mesmerizing intersection of smoke and fluid simulation
              with interactive 3D graphics. Manipulate the scene or just enjoy the
              flow.
            </p>
          </div>

          <h1 className="text-[8vw] text-white text-right uppercase tracking-tighter leading-[.85] mt-[8vw]">
            beyond <br /> reality
          </h1>
        </div>
      </header>
      <div className="sec1 w-full h-screen flex justify-center items-center relative z-5 p-10">
        <div className="flex items-center justify-between w-full">
            <h1 className="text-[8vw]  leading-none tracking-tighter uppercase mt-[-12vw]">Fluid Shader</h1>
            <h1 className="text-[8vw] leading-none  text-right tracking-tighter uppercase mt-[12vw]">React Fluid</h1>
        </div>
      </div>
    </>
  );
};

export default page;
