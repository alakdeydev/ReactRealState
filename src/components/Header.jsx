import logo from "../assets/images/logo/logo.svg";
import Links from "./Links";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-60 max-w-full px-4"
              >
                <img src={logo} alt="logo" className="header-logo h-12" />
              </a>

              <ul className="hidden lg:flex ">
                <Links>Home</Links>
                <Links>About</Links>
                <Links>Pricing</Links>
                <Links>Blog</Links>
              </ul>

              <div className="sm:flex">
                <Button
                  link={"signin.html"}
                  classType={
                    "flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                  }
                >
                  Sign in
                </Button>

                <Button
                  link={"signup.html"}
                  classType={
                    "signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                  }
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
