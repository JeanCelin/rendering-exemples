import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <Link href={"/"} asChild>
        <li>Home</li>
      </Link>
      <Link href={"/rendering/SSR"} asChild>
        <li>SSR</li>
      </Link>
    </ul>
  );
}
