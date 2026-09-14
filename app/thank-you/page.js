import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Thank you — Nodds",
};

const products = {
  "section-8": {
    name: "Section 8 Landlord Kit",
    file: "/downloads/Section8-Landlord-Kit.zip",
  },
  "contractor-bid-kit": {
    name: "Contractor Bid Comparison Kit",
    file: "/downloads/Contractor-Bid-Comparison-Kit.zip",
  },
  "clarity-planner": {
    name: "The Clarity Planner",
    file: "/downloads/Clarity-Planner-Kit.zip",
  },
};

export default function ThankYou({ searchParams }) {
  const key = searchParams?.product;
  const product = products[key];

  return (
    <>
      <Header />

      <section className="hero-band">
        <div className="wrap" style={{ padding: "96px 0", textAlign: "center" }}>
          <h1 style={{ fontSize: 38, color: "var(--white)", maxWidth: 560, margin: "0 auto" }}>
            Thanks for your purchase.
          </h1>

          {product ? (
            <>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--white-dim)",
                  maxWidth: 460,
                  margin: "20px auto 32px",
                }}
              >
                Your {product.name} is ready. Click below to download it now.
              </p>
              <a href={product.file} download className="btn btn-primary">
                Download your kit
              </a>
            </>
          ) : (
            <>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--white-dim)",
                  maxWidth: 460,
                  margin: "20px auto 32px",
                }}
              >
                We couldn't tell which product you purchased. Pick yours below:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                {Object.values(products).map((p) => (
                  <a key={p.file} href={p.file} download className="btn btn-primary" style={{ width: 280 }}>
                    Download {p.name}
                  </a>
                ))}
              </div>
            </>
          )}

          <p
            style={{
              fontSize: 13,
              color: "var(--white-faint)",
              marginTop: 28,
            }}
          >
            Trouble downloading? Email{" "}
            <a href="mailto:support@heynodds.com" style={{ textDecoration: "underline" }}>
              support@heynodds.com
            </a>{" "}
            and we'll send it directly.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}