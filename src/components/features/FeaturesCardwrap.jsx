import Cardtext from "./Cardtesxt";
import Cardtitle from "./Cardtitle";
import FeaturesCard from "./FeaturesCard";
import Featuresvgcomp from "./Featuresvgcom";
import FSvgIconFour from "./FSvgIconFour";
// import Featuresvgcomp from "./Featuresvgcom";
import FSvgIconOne from "./FSvgIconOne";
import FSvgIconThree from "./FSvgIconThree";
import FSvgIconTwo from "./FSvgIconTwo";


export default function FeaturesCardwrap() {
  return (
    <>
      <FeaturesCard>
        <Featuresvgcomp>
          <FSvgIconOne />
        </Featuresvgcomp>
        <Cardtitle> Universal design</Cardtitle>
        <Cardtext>
          Today’s buyers buy properties that they see themselves living in for a
          couple of decades at least. A property that has all of the basic
          features they need will sell well cell.
        </Cardtext>
      </FeaturesCard>
      <FeaturesCard>
        <Featuresvgcomp>
          <FSvgIconTwo />
        </Featuresvgcomp>
        <Cardtitle> Energy efficient</Cardtitle>
        <Cardtext>
          An energy efficient home saves money making it a priority for buyers.
          Windows that are treated to insulate the house will cut heating and
          cooling bills significantly.
        </Cardtext>
      </FeaturesCard>
      <FeaturesCard>
        <Featuresvgcomp>
          <FSvgIconThree />
        </Featuresvgcomp>
        <Cardtitle> Exterior lighting </Cardtitle>
        <Cardtext>
          One of the most asked for outdoor features that buyers look for is
          exterior lighting. Lighting that can illuminate the porch will
          contribute to the ethics of a home.
        </Cardtext>
      </FeaturesCard>
      <FeaturesCard>
        <Featuresvgcomp>
          <FSvgIconFour />
        </Featuresvgcomp>
        <Cardtitle>Hardwood floors</Cardtitle>
        <Cardtext>
          Hardwood floors give a clean look to a home and is one of the things
          today’s buyers look for during showings. If it is accompanied by an
          open floor plan, it looks more breathtaking.
        </Cardtext>
      </FeaturesCard>
    </>
  );
}
