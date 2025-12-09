import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer_section bg-black text-xs text-white text-center py-4">
      <p>
        © {new Date().getFullYear()} Fella Screen Prints. All rights reserved.
      </p>
    </footer>
  );
}
