import Link from "next/link";

export default function Header({ productName }) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" strokeWidth="1.6">
            <path d="M5 4 L19 4 L19 20 L12 17 L5 20 Z" />
          </svg>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Nodds
          </Link>
          {productName && (
            <>
              <span className="divider">/</span>
              <span className="product-name">{productName}</span>
            </>
          )}
        </div>
        <nav>
          <Link className="nav-link" href="/#products">
            Products
          </Link>
          <Link className="nav-link" href="/#how">
            How it works
          </Link>
        </nav>
        <div className="header-actions">
          <Link href="/#products" className="btn btn-ghost">
            See products
          </Link>
        </div>
      </div>
    </header>
  );
}