import CardBtn from "./CardBtn";
// import Featuresvgcomp from "./Featuresvgcom";
// import FSvgIconOne from "./FSvgIconOne";

// eslint-disable-next-line react/prop-types
export default function FeaturesCard({ children }) {

  
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          
          {children}
          <CardBtn />
        </div>
      </div>
    </>
  );
}
