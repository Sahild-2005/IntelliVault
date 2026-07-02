import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Docs
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              About
            </a>

          </nav>

          {/* Buttons */}

          <div className="hidden items-center gap-3 md:flex">

            <Button variant="ghost">
              Login
            </Button>

            <Button>
              Get Started
            </Button>

          </div>

          {/* Mobile Menu */}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

        </div>

      </Container>
    </header>
  );
}

export default Navbar;