import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Thank you — Nodds",
};

export default function ThankYou() {
  return (
    <>
      <Header />

      <section className="hero-band">
        <div className="wrap" style={{ padding: "96px 0", textAlign: "center" }}>
          <h1 style={{ fontSize: 38, color: "var(--white)", maxWidth: 560, margin: "0 auto" }}>
            Thanks for your purchase.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--white-dim)",
              maxWidth: 460,
              margin: "20px auto 32px",
            }}
          >
            Your Section 8 Landlord Kit is ready. Click below to download it now.
          </p>

          <a
            href="/downloads/Section8-Landlord-Kit.zip"
            download
            className="btn btn-primary"
          >
            Download your kit
          </a>
          <p
            style={{
              fontSize: 13,
              color: "var(--white-faint)",
              marginTop: 20,
            }}
          >
            Trouble downloading? Email{" "}
            <a href="mailto:support@nodds.com" style={{ textDecoration: "underline" }}>
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