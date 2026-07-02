import Container from "@/components/common/Container";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { workflow } from "@/constants/workflow";

function HowItWorks() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 text-slate-600">
            From upload to AI-powered insights in just a few steps.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="flex flex-col items-center">
                <Card className="w-full max-w-xl transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="rounded-xl bg-blue-100 p-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {index !== workflow.length - 1 && (
                  <ArrowDown className="my-5 h-6 w-6 text-slate-400" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;