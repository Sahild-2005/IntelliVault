import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Powered Document Management
            </div>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">

              Secure Your

              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">

                Documents

              </span>

              With AI

            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">

              Upload, organize, summarize and chat with
              your documents securely using OCR and AI.

            </p>

            <div className="mt-8 flex gap-4">

              <Button size="lg">

                Get Started

                <ArrowRight className="ml-2 h-4 w-4"/>

              </Button>

              <Button variant="outline" size="lg">

                Live Demo

              </Button>

            </div>

            <div className="mt-12 flex gap-8">

              <div>

                <h2 className="text-3xl font-bold">

                  10K+

                </h2>

                <p className="text-slate-500">

                  Documents

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  99.9%

                </h2>

                <p className="text-slate-500">

                  Secure

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  AI

                </h2>

                <p className="text-slate-500">

                  Powered

                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="rounded-3xl border bg-white p-10 shadow-2xl">

              <ShieldCheck className="mx-auto h-24 w-24 text-blue-600"/>

              <h2 className="mt-6 text-center text-2xl font-bold">

                AI Secure Vault

              </h2>

              <p className="mt-3 text-center text-slate-500">

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