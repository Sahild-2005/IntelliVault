import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 transition-colors duration-300">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Powered Document Management
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-foreground lg:text-6xl">

              Secure Your

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">

                Documents

              </span>

              With AI

            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">

              Upload, organize, summarize and chat with your
              documents securely using OCR and AI.

            </p>

            <div className="mt-8 flex gap-4">

              <Button asChild size="lg">
                <Link to="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                Live Demo
              </Button>

            </div>

            <div className="mt-12 flex gap-10">

              <div>

                <h2 className="text-3xl font-bold text-foreground">
                  10K+
                </h2>

                <p className="text-muted-foreground">
                  Documents
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-foreground">
                  99.9%
                </h2>

                <p className="text-muted-foreground">
                  Secure
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-foreground">
                  AI
                </h2>

                <p className="text-muted-foreground">
                  Powered
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-2xl transition-all duration-300 hover:scale-105">

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg">

                <ShieldCheck className="h-14 w-14 text-white" />

              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-foreground">

                AI Secure Vault

              </h2>

              <p className="mt-3 text-center text-muted-foreground">

                Secure. Intelligent. Organized.

              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;