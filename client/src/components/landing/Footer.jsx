import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";

function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">

          {/* Logo */}

          <div>
            <Logo />

            <p className="mt-5 text-sm text-slate-400">
              Store, organize, summarize and chat with your
              documents securely using AI.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Features</li>
              <li>AI Summary</li>
              <li>OCR Search</li>
              <li>Dashboard</li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>GitHub</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>License</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © 2026 IntelliVault • Built using React, Node.js,
          MongoDB, Cloudinary and Gemini AI.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;