import FooterWidgetFour from "./FooterWidgetFour";
import FooterWidgetOne from "./FooterWidgetOne";
import FooterWidgetThree from "./FooterWidgetThree";
import FooterWidgetTwo from "./FooterWidgetTwo";

export default function Footer() {
  return (
    <>
      <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <FooterWidgetOne />
            <FooterWidgetTwo />
            <FooterWidgetThree />
            <FooterWidgetFour />
          </div>
        </div>
      </footer>
    </>
  );
}
