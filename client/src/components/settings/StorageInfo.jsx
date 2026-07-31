function formatStorage(bytes) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function StorageInfo({ stats }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        💾 Storage Information
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Total Documents
          </span>

          <span className="font-semibold text-foreground">
            {stats?.totalDocuments || 0}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            AI Analyzed
          </span>

          <span className="font-semibold text-foreground">
            {stats?.analyzedDocuments || 0}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Storage Used
          </span>

          <span className="font-semibold text-foreground">
            {formatStorage(stats?.storageUsed || 0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StorageInfo;