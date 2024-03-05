import Image from "next/image";

export default function Register() {
  return (
    <section className="mt-5">
      <h1 className="text-center text-primary text-3xl">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-5 text-center text-gray-500">
          Login with Social Media
        </div>
        <button className="flex items-center gap-4 justify-center">
        <Image src={"/google.png"} alt={"login with google"} width={25} height={25}/>
            Login with Google
        </button>
      </form>
    </section>
    /**Video is stopped in 1 h 22m */
  );
}
