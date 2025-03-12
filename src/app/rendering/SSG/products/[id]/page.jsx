import Image from "next/image";
export default async function Product({ params }) {
  const productParams = await params;
  const res = await fetch(
    `https://fakestoreapi.com/products/${productParams.id}`
  );
  const product = await res.json(); // Agora os dados são armazenados corretamente

  console.log(product);

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Image
            src={product.image}
            fill
            sizes="500px"
            alt="Image"
            style={{ objectFit: "contain" }}></Image>
        </div>
        <p>Price: $ {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json(); // Agora os dados são armazenados corretamente

  return products.slice(0, 5).map((product) => ({
    id: product.id.toString(),
  }));
}
