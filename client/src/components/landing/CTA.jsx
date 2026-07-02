import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-16 text-center text-white shadow-2xl">

          <div className="mx-auto max-w-3xl">

            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white/20 p-4">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>

            <h2 className="text-4xl font-bold lg:text-5xl">
              Ready to Organize Your Documents?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Upload, search, summarize and securely manage your documents with AI.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-slate-100"
              >
                Get Started

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700"
              >
                Live Demo
              </Button>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-100">

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Free Forever
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Secure Storage
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                AI Powered
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTA;