import Container from "@/components/common/Container";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { workflow } from "@/constants/workflow";

function HowItWorks() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">
            How It Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            From upload to AI-powered insights in just a few steps.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex w-full flex-col items-center"
              >
                <Card className="w-full max-w-xl border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="rounded-xl bg-blue-100 p-4 dark:bg-blue-500/20">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {index !== workflow.length - 1 && (
                  <ArrowDown className="my-5 h-6 w-6 text-muted-foreground" />
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