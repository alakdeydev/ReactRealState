import logo from "../assets/images/logo/logo.svg";
import FacebookSvg from "./FacebookSvg";
import InstagramSvg from "./InstagramSvg";
import LinkdinSvg from "./LinkdinSvg";
import XSvg from "./XSvg";

export default function FooterWidgetOne() {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
        <div className="mb-10 w-full">
          <a href="#" className="mb-6 inline-block  max-h-[100px]">
            <img src={logo} alt="logo" className="max-w-full" />
          </a>
          <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
            We create digital experiences for brands and companies by using
            technology.
          </p>
          <div className="-mx-3 flex items-center ">
            <a href="#" className="px-3 text-gray-7 hover:text-white">
              <FacebookSvg size={22} />
            </a>
            <a href="#" className="px-3 text-gray-7 hover:text-white">
              <XSvg size={22} />
            </a>
            <a href="#" className="px-3 text-gray-7 hover:text-white">
              <InstagramSvg size={22} />
            </a>
            <a href="#" className="px-3 text-gray-7 hover:text-white">
              <LinkdinSvg size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
