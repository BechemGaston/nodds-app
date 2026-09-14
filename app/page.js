import Link from "next/link";
import NotifyButton from "../components/NotifyButton";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  {
    slug: "section-8",
    name: "Section 8 Landlord Kit",
    desc: "Pre-inspection checklist, HAP payment tracker, and copy-paste PHA letter templates in one download.",
    status: "live",
    icon: <path d="M3 11 L12 4 L21 11 M5 10 L5 20 L19 20 L19 10" />,
  },
  {
    slug: null,
    name: "Horse OS",
    desc: "Vet visits, farrier schedules, vaccinations, expenses and documents for every horse you own.",
    status: "soon",
    icon: (
      <path d="M4 20 L4 12 Q4 6 10 5 L16 5 Q14 8 16 10 L20 10 L20 13 L17 13 L17 20 L14 20 L14 15 L9 15 L9 20 Z" />
    ),
  },
  {
    slug: null,
    name: "RV Ownership OS",
    desc: "Maintenance, service history, warranties and trip costs for your rig.",
    status: "soon",
    icon: (
      <path d="M3 16 L3 12 L6 8 L15 8 L18 12 L21 12 L21 16 M3 16 L21 16 M7 16 A2 2 0 1 0 7 20 A2 2 0 1 0 7 16 M17 16 A2 2 0 1 0 17 20 A2 2 0 1 0 17 16" />
    ),
  },
  {
    slug: null,
    name: "Family Life Admin",
    desc: "Accounts, documents and instructions your family would need in an emergency.",
    status: "soon",
    icon: <path d="M12 3 L20 7 L20 13 Q20 19 12 21 Q4 19 4 13 L4 7 Z" />,
  },
{
  slug: "contractor-bid-kit",
  name: "Contractor Bid Comparison Kit",
  desc: "Compare bids side by side, spot red flags, and know exactly what to ask before you sign.",
  status: "live",
  icon: <path d="M4 21 L4 9 L12 3 L20 9 L20 21 M9 21 L9 14 L15 14 L15 21" />,
},
  {
    slug: null,
    name: "Medical Bill Case Manager",
    desc: "Reconcile bills against EOBs and track appeal deadlines until resolution.",
    status: "soon",
    icon: <path d="M6 4 L18 4 L18 20 L6 20 Z M9 8 L15 8 M9 12 L15 12 M9 16 L13 16" />,
  },
  {
  slug: "clarity-planner",
  name: "The Clarity Planner",
  desc: "Debt payoff dates, savings timelines, and spending benchmarks — calculated for you, not guessed.",
  status: "live",
  icon: <path d="M4 20 L20 20 M4 20 L4 4 M8 16 L8 10 M12 16 L12 6 M16 16 L16 12" />,
},
];

export default function Home() {
  const liveCount = products.filter((p) => p.status === "live").length;

  return (
    <>
      <Header />

      <section className="hero-band">
        <div className="wrap">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">A growing family of focused tools</div>
              <h1>One system for everything you keep.</h1>
              <p className="lead">
                Nodds builds small, focused digital toolkits for the paperwork and pain points
                people end up tracking in notebooks, spreadsheets, and memory — one product per
                problem, all built the same careful way.
              </p>
              <div className="hero-cta-row">
                <Link href="#products" className="btn btn-primary">
                  Explore products
                </Link>
                <Link href="/section-8" className="btn btn-ghost">
                  Get the Section 8 Kit →
                </Link>
              </div>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">{products.length}</div>
                  <div className="label">products in the family</div>
                </div>
                <div className="stat">
                  <div className="num">{liveCount}</div>
                  <div className="label">live today</div>
                </div>
                <div className="stat">
                  <div className="num">Instant</div>
                  <div className="label">download, no account needed</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="ledger-head">
                <span className="name">Section 8 Kit</span>
                <span className="tag">Included files</span>
              </div>
              <div className="ledger-row">
                <span className="date">01</span>
                <span>Pre-inspection checklist</span>
                <span className="status ok">PDF</span>
              </div>
              <div className="ledger-row">
                <span className="date">02</span>
                <span>HAP payment tracker</span>
                <span className="status ok">Sheet</span>
              </div>
              <div className="ledger-row">
                <span className="date">03</span>
                <span>PHA letter templates</span>
                <span className="status ok">PDF</span>
              </div>
              <div className="ledger-row">
                <span className="date">04</span>
                <span>What-to-do action guide</span>
                <span className="status ok">PDF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="products" id="products">
          <div className="section-head">
            <div>
              <h2>Products</h2>
              <div className="sub">Each one solves a single, specific problem — nothing bundled you don't need.</div>
            </div>
            <span className="pill">
              {liveCount} available · {products.length - liveCount} in development
            </span>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <div key={p.name} className={`product-card ${p.status === "live" ? "live" : "disabled"}`}>
                <div className="icon-chip">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                    {p.icon}
                  </svg>
                </div>
                <div className="top-row">
                  <h3>{p.name}</h3>
                  <span className={`badge ${p.status}`}>
                    {p.status === "live" ? "Available" : "In development"}
                  </span>
                </div>
                <p>{p.desc}</p>
                {p.slug ? (
                  <Link href={`/${p.slug}`} className="row-cta">
                    View product →
                  </Link>
     ) : (
  <NotifyButton productName={p.name} />
)}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="values">
        <div className="wrap">
          <div className="values-grid">
            <div className="value-item">
              <div className="icon-ring">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M12 4 L12 12 L17 15" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3>Built for one problem</h3>
              <p>No bloated all-in-one software pretending to fit every use case. Each product does exactly one job, well.</p>
            </div>
            <div className="value-item">
              <div className="icon-ring">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M5 13 L9 17 L19 7" />
                </svg>
              </div>
              <h3>Instant download</h3>
              <p>Pay once, get your files immediately by email. No account, no login, no subscription.</p>
            </div>
            <div className="value-item">
              <div className="icon-ring">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M4 12 L20 12 M4 12 L10 6 M4 12 L10 18" />
                </svg>
              </div>
              <h3>Yours to keep</h3>
              <p>One-time purchase. Edit, print, and reuse the files for as long as you need them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" id="how">
        <div className="wrap">
          <h2>Start with the one you need today.</h2>
          <p>Instant digital download. No account required.</p>
          <Link href="#products" className="btn btn-ghost-dark">
            See all products
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}