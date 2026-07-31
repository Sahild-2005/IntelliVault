import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/common/Container";
import { features } from "@/constants/features";

function Features() {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">
            Powerful Features
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to securely manage your documents.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/20">
                    <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Features;