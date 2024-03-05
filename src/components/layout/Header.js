import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-primary font-semibold text-2xl">
        LittleBits
      </Link>
      <nav className="flex items-center gap-9 text-black-400 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-3 text-gray-500 font-semibold ">
        <Link
          href={"/login"}
          className="bg-primary text-white px-7 py-2 rounded-full"
        >
          Login
        </Link>
        <Link href={"/register"} className="">
          Register
        </Link>
      </nav>
    </header>
  );
}
