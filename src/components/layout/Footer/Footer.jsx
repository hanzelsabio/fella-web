import React from "react";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer_section bg-black text-white text-center py-6">
      <p>
        © {new Date().getFullYear()} Fella Screen Prints. All rights reserved.
      </p>
    </footer>
  );
}
