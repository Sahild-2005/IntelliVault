import { ShieldCheck } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-blue-600 p-2">
        <ShieldCheck className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          IntelliVault
        </h1>

        <p className="text-xs text-slate-500">
          AI Secure Document Vault
        </p>
      </div>
    </div>
  );
}

export default Logo;