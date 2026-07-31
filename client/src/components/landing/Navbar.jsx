import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-muted-foreground transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-muted-foreground transition hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="text-muted-foreground transition hover:text-blue-600"
            >
              About
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-3 md:flex">

            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </Button>

            <Link to="/login">
              <Button variant="ghost">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button>
                Get Started
              </Button>
            </Link>

          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">

            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
            >
              <Menu className="h-5 w-5" />
            </Button>

          </div>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;