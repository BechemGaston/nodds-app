import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Section 8 Landlord Kit by Nodds — inspections, HAP payments, PHA letters",
};

export default function Section8() {
  return (
    <>
      <Header productName="Section 8 Landlord Kit" />

      <div className="breadcrumb-bar">
        <div className="wrap">
          <Link href="/">← All Nodds products</Link>
        </div>
      </div>

      <section className="hero-band">
        <div className="wrap">
          <div className="hero">
            <div>
              <h1>Stop losing rent to inspection delays.</h1>
              <p className="lead">
                A pre-inspection checklist, a HAP payment tracker, and copy-paste PHA letter
                templates — everything a Section 8 landlord needs to stay ahead of the housing
                authority, in one instant download.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="#buy"
                  className="btn btn-primary-dark"
                  style={{ background: "var(--white)", color: "var(--oil)" }}
                >
                  Get the kit — $19
                </a>
                <span className="cta-note">Instant download, no account needed</span>
              </div>
            </div>
            <img
  src="/images/section8-cover.png"
  alt="Section 8 Landlord Kit cover"
  style={{
    width: "100%",
    borderRadius: 12,
    boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
    display: "block",
  }}
/>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="problems">
          <h2>The paperwork that costs landlords real money.</h2>
          <div>
            <div className="problem-item">
              <span className="num">01</span>
              <div>
                <h3>Inspections fail on preventable things</h3>
                <p>A missed smoke detector or a loose handrail can trigger weeks of lost rent while you wait for a re-inspection.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="num">02</span>
              <div>
                <h3>HAP payments arrive late, or not at all</h3>
                <p>Without a running record, it's hard to prove exactly what you're owed when the housing authority falls behind.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="num">03</span>
              <div>
                <h3>Nobody hands you the letters you need</h3>
                <p>Pushing back on a failed inspection or a low rent determination means writing from scratch, under time pressure.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="features" id="features">
        <div className="wrap">
          <h2>Everything you need, already written.</h2>

          <div className="feature-row">
            <div className="feature-text">
              <div className="eyebrow">Checklist</div>
              <h3>Pass inspection the first time</h3>
              <p>Covers all 13 HQS/NSPIRE categories, from smoke detectors to structural issues, so you catch problems before the inspector does.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>Smoke &amp; CO detectors</span><span>✓</span></li>
                <li><span>Electrical &amp; GFCI outlets</span><span>✓</span></li>
                <li><span>Handrails &amp; stairs</span><span>✓</span></li>
              </ul>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-text">
              <div className="eyebrow">HAP tracker</div>
              <h3>Know exactly what you're owed</h3>
              <p>Log expected vs. received HAP payments per unit, per month — so a late or short payment gets caught immediately, not months later.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>Expected HAP — Sept</span><span>$860</span></li>
                <li><span>Received — Sept</span><span>$0</span></li>
                <li><span>Days late</span><span>12</span></li>
              </ul>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-text">
              <div className="eyebrow">Letter templates</div>
              <h3>Say the right thing, immediately</h3>
              <p>Copy-paste templates for inspection failure responses, rent reasonableness pushback, and late payment follow-up — no drafting under pressure.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>HQS failure response</span><span>Included</span></li>
                <li><span>Rent reasonableness letter</span><span>Included</span></li>
                <li><span>Late HAP follow-up</span><span>Included</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="pricing" id="buy">
          <div className="price-card">
            <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>One-time purchase</span>
            <div className="amount">$19</div>
            <span className="per">Pay once, yours to keep</span>
            <ul>
              <li>Pre-inspection checklist (PDF)</li>
              <li>HAP payment tracker (Excel &amp; Google Sheets)</li>
              <li>PHA letter templates (PDF)</li>
              <li>Action guide for payment delays</li>
            </ul>
            
        <a
  href="https://buy.stripe.com/REPLACE_WITH_YOUR_LINK"
  className="btn btn-primary-dark"
>
  Get the kit — $19
</a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}