import { createClient } from "pexels";
import Image from "next/image";

export default async function SSR() {
  const client = createClient(process.env.API_KEY);
  const query = "Nature";

  const photos = await client.photos.search({ query, per_page: 30 });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}>
      {photos.photos.map((element, index) => (
        <Image
          key={index}
          src={element.src.tiny} // Mantém a imagem pequena
          width={200} // Define um tamanho fixo menor
          height={200}
          alt={element.alt}
          style={{ objectFit: "cover", borderRadius: "5px" }} // Ajuste para ficar proporcional
        />
      ))}
    </div>
  );
}
