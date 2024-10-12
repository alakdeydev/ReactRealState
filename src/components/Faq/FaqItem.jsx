import FaqSvg from "./FaqSvg";

// eslint-disable-next-line react/prop-types
export default function FaqItem({ children }) {
  return (
    <>
      <div className="mb-12 flex lg:mb-[70px]">
        <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
          <FaqSvg />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
