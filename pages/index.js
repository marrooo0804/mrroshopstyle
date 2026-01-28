import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      {/* HEADER */}
      <header style={{ padding: "20px 0", textAlign: "center" }}>
        <div style={{ fontSize: "28px", fontWeight: "700", color: "#A7FF00" }}>
          mrroshopstyle
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", margin: "0 0 20px" }}>Streetwear Collection</h1>
        <p style={{ fontSize: "18px", margin: "0 0 30px" }}>
          The best streetwear for your style.
        </p>
        <Link href="/products">
          <button style={{
            background: "#A7FF00",
            border: "none",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer"
          }}>
            Shop Now
          </button>
        </Link>
      </section>

      {/* SECTION 2 */}
      <section style={{ padding: "40px 20px" }}>
        <div className="container">
          <h2>Chi siamo</h2>
          <p>
            mrroshopstyle è il tuo shop streetwear di fiducia. Qualità, stile e prezzi competitivi.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section style={{ padding: "40px 20px", background: "#111" }}>
        <div className="container">
          <h2>Prodotti</h2>
          <p>Guarda la nostra selezione. Aggiungi prodotti dal pannello admin.</p>
          <Link href="/products">
            <button style={{
              background: "#A7FF00",
              border: "none",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer"
            }}>
              Vai ai prodotti
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 4 */}
      <section style={{ padding: "40px 20px" }}>
        <div className="container">
          <h2>Perché scegliere noi</h2>
          <ul>
            <li>Stile unico</li>
            <li>Prezzi competitivi</li>
            <li>Qualità garantita</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px 0", textAlign: "center", background: "#111" }}>
        <div className="container">
          <p>© {new Date().getFullYear()} mrroshopstyle</p>
        </div>
      </footer>
    </div>
  );
}
