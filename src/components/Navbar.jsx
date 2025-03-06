import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <Link href={"/"} >
        <li>Home</li>
      </Link>
      <Link href={"/rendering/SSR"} aschild="true">
        <li>SSR</li>
      </Link>
    </ul>
  );
}
