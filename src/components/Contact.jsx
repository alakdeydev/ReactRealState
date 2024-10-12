import ContactTitle from "./ContactTitle";
import ContactWidget from "./ContactWidget";
import FormWidget from "./FormWidget";

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative py-20 md:py-[120px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <ContactTitle />
                <ContactWidget />
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <FormWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
