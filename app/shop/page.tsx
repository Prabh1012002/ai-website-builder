export default function Shop() {
  return (
    <main style={{ fontFamily: "serif", padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", borderBottom: "1px solid black", paddingBottom: "20px", letterSpacing: "0.08em" }}>
        Shop Eyewear
      </h1>

      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Our Collection</h2>

        <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <div>
            <div style={{ height: "150px", background: "#ddd" }} />
            <h3 style={{ marginTop: "10px", fontSize: "20px" }}>Classic 0822</h3>
            <p style={{ opacity: 0.7 }}>£299</p>
          </div>

          <div>
            <div style={{ height: "150px", background: "#ddd" }} />
            <h3 style={{ marginTop: "10px", fontSize: "20px" }}>Retro 1394</h3>
            <p style={{ opacity: 0.7 }}>£249</p>
          </div>

          <div>
            <div style={{ height: "150px", background: "#ddd" }} />
            <h3 style={{ marginTop: "10px", fontSize: "20px" }}>Sunglass 9001</h3>
            <p style={{ opacity: 0.7 }}>£199</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "60px" }}>
        <a href="/" style={{ fontSize: "18px", textDecoration: "none", borderBottom: "1px solid black", paddingBottom: "4px" }}>
          ← Back to Home
        </a>
      </section>
    </main>
  );
}
