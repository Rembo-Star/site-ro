import { Heart, Lock, Sparkles } from "lucide-react";

interface TrustSectionProps {
  onCTAClick: () => void;
}

export function TrustSection({ onCTAClick }: TrustSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <h2 className="text-white mb-6 text-3xl md:text-4xl">
              Privat. Komfortabel. Wirklich interessant
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Die Plattform wurde für Erwachsene geschaffen, die persönlichen Raum schätzen 
              und offen für neue Empfindungen sind. Sie entscheiden, wohin das Gespräch führt: 
              zu Flirt, warmer Nähe oder einem echten Treffen. Das Wichtigste ist, dass alles 
              natürlich und auf gegenseitiger Initiative geschieht.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1538]/20 to-[#C41E3A]/20 mb-4">
                <Lock className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-white mb-2">Absolute Privatsphäre</h3>
              <p className="text-white/60 text-sm">
                Niemand erfährt von Ihren Gesprächen und Vorlieben
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1538]/20 to-[#C41E3A]/20 mb-4">
                <Heart className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-white mb-2">Echte Emotionen</h3>
              <p className="text-white/60 text-sm">
                Lebendige Treffen und aufrichtige Gespräche
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1538]/20 to-[#C41E3A]/20 mb-4">
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-white mb-2">Gegenseitiges Interesse</h3>
              <p className="text-white/60 text-sm">
                Alle Teilnehmerinnen wissen, was sie wollen
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#8B1538]/10 via-[#C41E3A]/10 to-[#8B1538]/10 border border-[#8B1538]/20">
            <h3 className="text-white mb-4 text-2xl md:text-3xl">
              Bereit zu erfahren, wer genau auf Ihre Antwort wartet?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Erhalten Sie Zugang zu Profilen von Frauen, die Gespräche ohne unnötige Grenzen suchen
            </p>
            <button
              onClick={onCTAClick}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#C41E3A] text-white rounded-full hover:shadow-2xl hover:shadow-[#8B1538]/50 transition-all duration-300 hover:scale-105"
            >
              <span>Zugang erhalten</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}