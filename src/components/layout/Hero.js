import Image from "next/image";
import RightIcon from "./icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-5">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-normal">
          Everything
          <br />
          is healthy <br />
          when you keep your food&nbsp;
          <span className="text-primary">Fresh</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm my-6">
          When you are out of fuel and wanna stay alert, the best way is to feat
          yourself with a healthy nutritional lunch
        </p>

        <div className="flex gap-4  text-sm">
          <button className="bg-primary uppercase text-white px-4 py-2 rounded-full flex items-center gap-2">
            Order now
            <RightIcon />
          </button>
          <button className="flex gap-2 py-2 px-2 text-gray-500 font-semibold">
            Learn more
            <RightIcon />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/salad.jpg"}
          alt={"salad"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}
