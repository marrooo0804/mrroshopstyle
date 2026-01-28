import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  }

  async function deleteProduct(id) {
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  }

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <button onClick={() => router.push("/admin/add")}>Aggiungi prodotto</button>

      <div style={{ marginTop: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #333", padding: "20px", marginBottom: "10px" }}>
            <h2>{p.name}</h2>
            <p>€ {p.price}</p>
            <button onClick={() => router.push(`/admin/edit/${p.id}`)}>Modifica</button>
            <button onClick={() => deleteProduct(p.id)}>Elimina</button>
          </div>
        ))}
      </div>
    </div>
  );
}
