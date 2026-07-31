function AboutCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        ℹ️ About
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Application
          </span>

          <span className="font-medium text-foreground">
            IntelliVault
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Version
          </span>

          <span className="font-medium text-foreground">
            v1.0.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Technology
          </span>

          <span className="font-medium text-foreground">
            MERN + Gemini AI
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;