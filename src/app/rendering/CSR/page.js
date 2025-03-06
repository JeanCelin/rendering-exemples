"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CSR() {
  const [loading, setLoading] = useState("Carregando...");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      if (photos.length > 0) return; // Evita chamadas desnecessárias

      try {
        const response = await fetch("/api/pexels");
        if (!response.ok) throw new Error("Erro ao buscar fotos");

        const data = await response.json();
        setPhotos(data);
        setLoading(""); // Remove a mensagem de carregamento
      } catch (error) {
        console.error(error);
        setLoading("Erro ao buscar fotos.");
      }
    }

    fetchPhotos();
  }, []); // Mantém o array de dependências vazio para rodar uma vez

  return (
    <div>
      {loading && <p>{loading}</p>} {/* Exibe carregamento ou erro */}
      {!loading && photos.length === 0 && <p>Sem fotos disponíveis.</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {photos.map((element, index) => (
          <Image
            key={index}
            src={element.src.tiny}
            width={200}
            height={200}
            alt="Imagem do Pexels"
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
        ))}
      </div>
    </div>
  );
}
