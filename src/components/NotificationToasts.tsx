import { useEffect } from "react";
import { toast } from "sonner@2.0.3";

interface NotificationMessage {
  name: string;
  message: string;
  emoji?: string;
}

const messages: NotificationMessage[] = [
  {
    name: "Sandra",
    message: "Lade dich auf einen Kaffee ein",
    emoji: "☕"
  },
  {
    name: "Julia",
    message: "Möchte heute ins Kino, wer kommt mit?",
    emoji: "🎬"
  },
  {
    name: "Katharina",
    message: "Mir ist langweilig... wo seid ihr echten Gentlemen?",
  },
  {
    name: "Simone",
    message: "Habe heute Lust auf Champagner",
    emoji: "🥂"
  },
  {
    name: "Lisa",
    message: "Suche nette Gesellschaft für heute Abend",
  },
  {
    name: "Anna",
    message: "Wer hat Zeit für ein spontanes Treffen?",
  },
  {
    name: "Maria",
    message: "Bin gerade alleine zu Hause...",
    emoji: "😊"
  },
  {
    name: "Nina",
    message: "Hätte Lust auf ein interessantes Gespräch",
  },
  {
    name: "Laura",
    message: "Jemand Lust auf einen Spaziergang?",
  },
  {
    name: "Sophie",
    message: "Suche jemanden für ein gemütliches Abendessen",
  },
  {
    name: "Emma",
    message: "Wer zeigt mir die Stadt?",
  },
  {
    name: "Elena",
    message: "Habe Lust auf etwas Neues heute",
  }
];

export function NotificationToasts() {
  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    let usedIndices = new Set<number>();

    const showRandomNotification = () => {
      // Reset if all messages have been shown
      if (usedIndices.size >= messages.length) {
        usedIndices.clear();
      }

      // Get a random message that hasn't been shown yet
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * messages.length);
      } while (usedIndices.has(randomIndex));

      usedIndices.add(randomIndex);
      const msg = messages[randomIndex];

      // Show the toast notification
      toast.custom(
        (t) => (
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#1a1a2e] to-[#0f0f1a] border border-[#8B1538]/30 rounded-xl shadow-2xl backdrop-blur-sm min-w-[320px]">
            {/* Profile Image Circle */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#C41E3A] flex items-center justify-center">
                <span className="text-white text-lg">{msg.name.charAt(0)}</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f0f1a]" />
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-medium">{msg.name}</span>
                <span className="text-white/40 text-xs">Jetzt</span>
              </div>
              <p className="text-white/80 text-sm">
                {msg.message} {msg.emoji || ""}
              </p>
            </div>

            {/* Online indicator */}
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        ),
        {
          duration: 5000,
          position: "bottom-right",
        }
      );

      // Schedule next notification with random interval (15-40 seconds)
      const nextDelay = 15000 + Math.random() * 25000;
      const timeoutId = setTimeout(showRandomNotification, nextDelay);
      timeoutIds.push(timeoutId);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showRandomNotification, 3000);
    timeoutIds.push(initialTimeout);

    // Cleanup function
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  return null;
}
