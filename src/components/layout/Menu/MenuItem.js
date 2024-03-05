export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-5 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/20">
      <div className="text-center">
        <img src="/salad.jpg" alt="pokeball" className="max-h-auto max-h-20 block mx-auto"/>
      </div>
      <h4 className="font-semibold text-3xl my-4">Poke Ball</h4>
      <p className="text-gray-400 text-sm">Lorem Ipsum</p>
      <button className="bg-primary px-4 text-white rounded-full py-2 mt-5">
        Add to cart 12$
      </button>
    </div>
  );
}
