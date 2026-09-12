import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" strokeWidth="1.6">
                <path d="M5 4 L19 4 L19 20 L12 17 L5 20 Z" />
              </svg>
              Nodds
            </div>
            <p>Small, focused tools for the records you'd otherwise track in notebooks, spreadsheets, and memory.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/section-8">Section 8 Landlord Kit</Link>
            <Link href="/contractor-bid-kit">Contractor Bid Comparison Kit</Link>
            <Link href="/#products">See all →</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/#how">How it works</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Nodds</span>
          <span>&copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}