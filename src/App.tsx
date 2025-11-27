import { useState } from "react";
import { Toaster } from "sonner@2.0.3";
import { Hero } from "./components/Hero";
import { NotificationToasts } from "./components/NotificationToasts";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleCTA = () => {
    // In a real application, this would redirect to the dating site
    alert("Sie werden zur Registrierung weitergeleitet...");
    // window.location.href = "https://your-dating-site.com/register";
  };

  return (
    <div className="h-screen overflow-hidden bg-[#0f0f1a]">
      {/* Notification System */}
      <NotificationToasts />
      <Toaster 
        position="bottom-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0,
          },
        }}
      />

      {/* Hero Section - Full Screen */}
      <Hero onCTAClick={handleCTA} />
    </div>
  );
}