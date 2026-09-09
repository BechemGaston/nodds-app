"use client";

import { useState } from "react";

export default function NotifyButton({ productName }) {
  const [copied, setCopied] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("support@heynodds.com");
    } catch (err) {
      // clipboard not available, ignore
    }
    setCopied(true);
    const subject = encodeURIComponent(`Notify me when ${productName} launches`);
    window.location.href = `mailto:support@nodds.com?subject=${subject}`;
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <a href="#" onClick={handleClick} className="row-cta">
      {copied ? "Email copied ✓" : "Notify me →"}
    </a>
  );
}