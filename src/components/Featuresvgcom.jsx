/* eslint-disable react/prop-types */
// import FSvgIconOne from "./FSvgIconOne";


export default function Featuresvgcomp({ children }) {

 
  return (
    <>
      <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
        <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
        {children}
      </div>
    </>
  );
}