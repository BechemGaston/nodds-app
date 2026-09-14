import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The Clarity Planner by Nodds — know your numbers, spend without guessing",
};

export default function ClarityPlanner() {
  return (
    <>
      <Header productName="The Clarity Planner" />

      <div className="breadcrumb-bar">
        <div className="wrap">
          <Link href="/">← All Nodds products</Link>
        </div>
      </div>

      <section className="hero-band">
        <div className="wrap">
          <div className="hero">
            <div>
              <h1>Know your numbers. Spend without guessing.</h1>
              <p className="lead">
                A budget, debt payoff, and goals planner that actually calculates things for you —
                real payoff dates, real savings timelines, real comparisons to national averages.
                No guilt, no lectures. Just clarity.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="https://whop.com/nodds-37ea/the-clarity-planner/"
                  className="btn btn-primary-dark"
                  style={{ background: "var(--white)", color: "var(--oil)" }}
                >
                  Get the planner — $9
                </a>
                <span className="cta-note">Instant download, no account needed</span>
              </div>
            </div>
            <img
  src="/images/clarity-planner-cover.png"
  alt="The Clarity Planner cover"
  style={{
    width: "100%",
    maxWidth: 360,
    borderRadius: 12,
    boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
    display: "block",
    margin: "0 auto",
  }}
/>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="problems">
          <h2>Most planners give you space to write. This one does the math.</h2>
          <div>
            <div className="problem-item">
              <span className="num">01</span>
              <div>
                <h3>Blank templates don't tell you anything</h3>
                <p>A pretty grid to fill in doesn't tell you when your debt is actually paid off, or whether your spending is normal.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="num">02</span>
              <div>
                <h3>Budgeting tools love to guilt-trip</h3>
                <p>Most trackers are built to make you feel bad about spending. This one is built to make you feel clear — so you can spend on what you actually want, confidently.</p>
              </div>
            </div>
            <div className="problem-item">
              <span className="num">03</span>
              <div>
                <h3>You don't know if you're normal</h3>
                <p>Without a benchmark, there's no way to know if your spending is reasonable or worth a second look.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="features" id="features">
        <div className="wrap">
          <h2>Real numbers, calculated for you.</h2>

          <div className="feature-row">
            <div className="feature-text">
              <div className="eyebrow">Debt payoff</div>
              <h3>See your actual payoff date</h3>
              <p>Enter your debts once and compare the snowball vs. avalanche method side by side — real payoff dates and real interest saved, not just a spreadsheet of balances.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>Avalanche method payoff date</span><span>Aug 2028</span></li>
                <li><span>Snowball method payoff date</span><span>Oct 2028</span></li>
                <li><span>Interest saved (avalanche)</span><span>$612</span></li>
              </ul>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-text">
              <div className="eyebrow">Spending benchmarks</div>
              <h3>Know what's actually normal</h3>
              <p>Compare your own spending to real 2024 U.S. Bureau of Labor Statistics averages by category — no more guessing whether your numbers are reasonable.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>National avg. — housing</span><span>$2,189/mo</span></li>
                <li><span>National avg. — food</span><span>$847/mo</span></li>
                <li><span>National avg. — transportation</span><span>$1,110/mo</span></li>
              </ul>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-text">
              <div className="eyebrow">Savings goals</div>
              <h3>See the real date you'll hit your goal</h3>
              <p>Enter a savings target and a monthly amount, and get the actual month you'll reach it — so a goal is a date on a calendar, not just a wish.</p>
            </div>
            <div className="feature-visual">
              <ul className="mini-list">
                <li><span>Goal — emergency fund</span><span>$3,000</span></li>
                <li><span>Monthly contribution</span><span>$250</span></li>
                <li><span>Goal reached by</span><span>Jan 2027</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="pricing" id="buy">
          <div className="price-card">
            <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>One-time purchase</span>
            <div className="amount">$9</div>
            <span className="per">Pay once, yours to keep</span>
            <ul>
              <li>Debt payoff calculator (snowball &amp; avalanche)</li>
              <li>Spending vs. national average benchmarks</li>
              <li>Savings goal timeline calculator</li>
              <li>Goals, habit tracker &amp; weekly planner</li>
            </ul>
            <a href="https://whop.com/nodds-37ea/the-clarity-planner/" className="btn btn-primary-dark">
              Get the planner — $9
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}