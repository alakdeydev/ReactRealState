import FooterWidgetFour from "./Footer/FooterWidgetFour";
import FooterWidgetOne from "./Footer/FooterWidgetOne";
import FooterWidgetThree from "./Footer/FooterWidgetThree";
import FooterWidgetTwo from "./Footer/FooterWidgetTwo";

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
