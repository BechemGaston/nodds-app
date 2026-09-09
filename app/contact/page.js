import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact — Nodds",
};

export default function Contact() {
  return (
    <>
      <Header />

      <section className="hero-band">
        <div className="wrap" style={{ padding: "96px 0" }}>
          <h1 style={{ fontSize: 40, color: "var(--white)", maxWidth: 560 }}>
            Get in touch.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--white-dim)",
              maxWidth: 460,
              margin: "20px 0 32px",
            }}
          >
            Questions about a product, a purchase, or something else — send us a note and we'll
            get back to you.
          </p>
          <a href="mailto:support@nodds.com" className="btn btn-primary">
            support@nodds.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}