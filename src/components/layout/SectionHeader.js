export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase text-gray-700 font-semibold leading-3">
        {subHeader}
      </h3>
      <h2 className="text-primary font-semibold text-3xl italic">
        {mainHeader}
      </h2>
    </>
  );
}
