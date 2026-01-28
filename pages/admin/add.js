import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  async function handleAdd() {
    await supabase.from("products").insert({
      name,
      price,
      description: desc,
      image_url: "/placeholder.png",
    });
    router.push("/admin");
  }

  return (
    <div className="container">
      <h1>Aggiungi Prodotto</h1>
      <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Prezzo" value={price} onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Descrizione" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={handleAdd}>Salva</button>
    </div>
  );
}
