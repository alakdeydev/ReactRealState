// eslint-disable-next-line react/prop-types
export default function Cardtext({ children }) {
  return (
    <>
      <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
        {children}
      </p>
    </>
  );
}