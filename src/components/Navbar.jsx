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
      <Link href={"/rendering/CSR"} aschild="true">
        <li>CSR</li>
      </Link>
      <Link href={"/rendering/SSG"} aschild="true">
        <li>SSG</li>
      </Link>
    </ul>
  );
}
