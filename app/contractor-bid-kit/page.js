import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contractor Bid Comparison Kit by Nodds — compare bids, spot red flags",
};

export default function ContractorBidKit() {
  return (
    <>
      <Header productName="Contractor Bid Comparison Kit" />

      <div className="breadcrumb-bar">
        <div className="wrap">
          <Link href="/">← All Nodds products</Link>
        </div>
      </div>

      <section className="hero-band">
        <div className="wrap">
          <div className="hero">
            <div>
              <h1>Know which bid is actually the best deal.</h1>
              <p className="lead">
                A side-by-side comparison spreadsheet, a red-flag checklist, and a questions-to-ask
                guide — everything you need to compare contractor bids with confidence, in one
                instant download.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="https://whop.com/nodds-37ea/contractor-bid-comparison-kit/"
                  className="btn btn-primary-dark"
                  style={{ background: "var(--white)", color: "var(--oil)" }}
                >
                  Get the kit — $15
                </a>
                <span className="cta-note">Instant download, no account needed</span>
              </div>
            </div>
            <img
  src="/images/contractor-bid-cover.png"
  alt="Contractor Bid Comparison Kit cover"
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

      <><div className="wrap">
              <section className="problems">
                  <h2>A $35,000 spread on the same project isn't unusual — or easy to explain.</h2>
                  <div>
                      <div className="problem-item">
                          <span className="num">01</span>
                          <div>
                              <h3>Bids aren't apples-to-apples</h3>
                              <p>One contractor includes demolition and permits; another leaves them out entirely. Without line items, you can't actually compare numbers.</p>
                          </div>
                      </div>
                      <div className="problem-item">
                          <span className="num">02</span>
                          <div>
                              <h3>Red flags hide in vague language</h3>
                              <p>Phrases like "we'll figure it out as we go" sound normal but leave the scope open to costly interpretation later.</p>
                          </div>
                      </div>
                      <div className="problem-item">
                          <span className="num">03</span>
                          <div>
                              <h3>The lowest bid isn't always the best one</h3>
                              <p>An unusually low price often means something important was left out — not that you found a great deal.</p>
                          </div>
                      </div>
                  </div>
              </section>
          </div><section className="features" id="features">
                  <div className="wrap">
                      <h2>Everything you need to compare with confidence.</h2>

                      <div className="feature-row">
                          <div className="feature-text">
                              <div className="eyebrow">Comparison</div>
                              <h3>See every bid side by side</h3>
                              <p>Line up demolition, permits, materials, labor, and cleanup across up to three contractors — plus an adjusted total that accounts for what's missing.</p>
                          </div>
                          <div className="feature-visual">
                              <ul className="mini-list">
                                  <li><span>Contractor A — adjusted total</span><span>$41,200</span></li>
                                  <li><span>Contractor B — adjusted total</span><span>$38,900</span></li>
                                  <li><span>Contractor C — adjusted total</span><span>$52,000</span></li>
                              </ul>
                          </div>
                      </div>

                      <div className="feature-row reverse">
                          <div className="feature-text">
                              <div className="eyebrow">Red flags</div>
                              <h3>Spot the warning signs early</h3>
                              <p>Vague scope, missing permits, lump-sum-only pricing, and pressure to decide fast — know exactly what to watch for before you sign anything.</p>
                          </div>
                          <div className="feature-visual">
                              <ul className="mini-list">
                                  <li><span>Itemized scope provided</span><span>✓</span></li>
                                  <li><span>Permit responsibility stated</span><span>✓</span></li>
                                  <li><span>Licensed &amp; insured confirmed</span><span>✓</span></li>
                              </ul>
                          </div>
                      </div>

                      <div className="feature-row">
                          <div className="feature-text">
                              <div className="eyebrow">Questions</div>
                              <h3>Never forget what to ask</h3>
                              <p>A one-page, print-ready list of questions to bring to every estimate — built directly from real red flags, not generic advice.</p>
                          </div>
                          <div className="feature-visual">
                              <ul className="mini-list">
                                  <li><span>Who pulls the permits?</span><span>Included</span></li>
                                  <li><span>Warranty registration terms?</span><span>Included</span></li>
                                  <li><span>Your own crew or subcontracted?</span><span>Included</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </section><div className="wrap">
                  <section className="pricing" id="buy">
                      <div className="price-card">
                          <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>One-time purchase</span>
                          <div className="amount">$15</div>
                          <span className="per">Pay once, yours to keep</span>
                        <ul>
  <li>Bid comparison spreadsheet (Excel &amp; Google Sheets)</li>
  <li>Deposit laws &amp; cost benchmarks reference (PDF)</li>
  <li>Red flag checklist (PDF)</li>
  <li>Questions-to-ask guide (PDF)</li>
</ul>
                          <a href="https://whop.com/nodds-37ea/contractor-bid-comparison-kit/">
                              Get the kit — $15
                          </a>
                      </div>
                  </section>
              </div><Footer /></>
    </>
  );
}