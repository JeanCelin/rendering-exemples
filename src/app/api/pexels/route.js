import { createClient } from "pexels";
import { NextResponse } from "next/server"; // Importação correta para API routes no Next.js

export async function GET() {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Chave da API não encontrada" }, { status: 500 });
  }

  try {
    const client = createClient(apiKey);
    const query = "cute cats";
    const photos = await client.photos.search({ query, per_page: 30 });

    return NextResponse.json(photos.photos);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar imagens" }, { status: 500 });
  }
}
