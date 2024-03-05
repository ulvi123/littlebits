import Image from "next/image";
import MenuItem from "./Menu/MenuItem";
import SectionHeaders from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute  left-0 right-0 w-full justify-start">
        <div className="h-40 w-48 absolute -left-16 text-left">
          <Image src={"/leave1.jpeg"} layout={"fill"} objectFit={"contain"} alt={"leaves"} />
        </div>
        <div className="h-40 w-48 absolute -right-12 -top-12">
          <Image src={"/leave2.jpeg"} layout={"fill"} objectFit={"contain"} alt={"leaves"} />
        </div>
      </div>
      <div className="text-center mb-5">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"}/>
      </div>

      <div className="grid grid-cols-3 gap-4">
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
      </div>
    </section>
  );
}
