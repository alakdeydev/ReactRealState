// eslint-disable-next-line react/prop-types
export default function FaqTitle({ children }) {
  return (
    <>
      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        
        {children}
      </h3>
    </>
  );
}