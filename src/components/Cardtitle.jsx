// eslint-disable-next-line react/prop-types
export default function Cardtitle({ children }) {
  return (
    <>
      <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
        {children}
      </h4>
    </>
  );
}
