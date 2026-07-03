export default function Home() {
  return (
    <main
      style={{
        fontFamily: "serif",
        padding: "60px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* HERO SECTION */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1
          style={{
            fontSize: "64px",
            letterSpacing: "0.08em",
            marginBottom: "20px",
            borderBottom: "1px solid black",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          CUTLER & GROSS
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            margin: "20px auto",
            opacity: 0.7,
            lineHeight: "1.6",
          }}
        >
          Handcrafted luxury eyewear since 1969.  
          Designed in London. Worn worldwide.
        </p>

        <a
          href="/shop"
          style={{
            marginTop: "30px",
            display: "inline-block",
            fontSize: "18px",
            paddingBottom: "6px",
            borderBottom: "1px solid black",
            textDecoration: "none",
          }}
        >
          Explore the Collection →
        </a>
      </section>

      {/* FEATURED COLLECTION */}
      <section>
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "40px",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
            display: "inline-block",
          }}
        >
          Featured Eyewear
        </h2>

        <div
          style={{
            display: "grid",
            gap: "50px",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          }}
        >
          {/* PRODUCT 1 */}
          <div>
            <div
              style={{
                height: "200px",
                background: "#ddd",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ marginTop: "15px", fontSize: "22px" }}>Classic 0822</h3>
            <p style={{ opacity: 0.7 }}>Bold acetate frame</p>
          </div>

          {/* PRODUCT 2 */}
          <div>
            <div
              style={{
                height: "200px",
                background: "#ddd",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ marginTop: "15px", fontSize: "22px" }}>Retro 1394</h3>
            <p style={{ opacity: 0.7 }}>Vintage round silhouette</p>
          </div>

          {/* PRODUCT 3 */}
          <div>
            <div
              style={{
                height: "200px",
                background: "#ddd",
                borderRadius: "4px",
              }}
            />
            <h3 style={{ marginTop: "15px", fontSize: "22px" }}>Sunglass 9001</h3>
            <p style={{ opacity: 0.7 }}>Premium UV protection</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "100px",
          borderTop: "1px solid black",
          paddingTop: "20px",
          opacity: 0.7,
          fontSize: "16px",
        }}
      >
        © 2026 Cutler & Gross — British Luxury Eyewear
      </footer>
    </main>
  );
}
