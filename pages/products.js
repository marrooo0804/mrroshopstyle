import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  }

  return (
    <div className="container">
      <h1>Prodotti</h1>

      {products.length === 0 && <p>Nessun prodotto. Vai in Admin per aggiungerne.</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #333", padding: "20px" }}>
            <img src={p.image_url || "/placeholder.png"} width="100%" alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p><strong>€ {p.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
