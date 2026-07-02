import {
  Upload,
  ScanSearch,
  Brain,
  MessageSquareText,
  Share2,
} from "lucide-react";

export const workflow = [
  {
    icon: Upload,
    title: "Upload Documents",
    description:
      "Upload PDFs, images, or office documents securely to the cloud.",
  },
  {
    icon: ScanSearch,
    title: "OCR Processing",
    description:
      "Extract text from scanned documents and images automatically.",
  },
  {
    icon: Brain,
    title: "AI Summary",
    description:
      "Gemini AI generates concise summaries and key insights instantly.",
  },
  {
    icon: MessageSquareText,
    title: "Chat with Documents",
    description:
      "Ask questions and receive answers based only on your uploaded files.",
  },
  {
    icon: Share2,
    title: "Secure Sharing",
    description:
      "Share documents using protected links with expiry dates and passwords.",
  },
];