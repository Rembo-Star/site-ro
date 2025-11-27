import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface QuizProps {
  onComplete: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    preference: "",
    speed: "",
  });

  const handleAnswer = (question: "preference" | "speed", answer: string) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const canProceed = () => {
    if (step === 1) return answers.preference !== "";
    if (step === 2) return answers.speed !== "";
    return true;
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/60">Schritt {step} von 3</span>
              <span className="text-[#D4AF37]">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8B1538] to-[#D4AF37] transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="bg-[#1a1a2e]/50 border border-[#8B1538]/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-white mb-8 text-2xl md:text-3xl text-center">
                Welche Frauen wecken Ihr größtes Interesse?
              </h2>
              <div className="space-y-4">
                {[
                  { value: "mature", label: "Elegante und erfahrene Frauen" },
                  { value: "younger", label: "Junge und energiegeladene Frauen" },
                  { value: "open", label: "Frauen, die Wärme und Aufmerksamkeit lieben" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer("preference", option.value)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
                      answers.preference === option.value
                        ? "border-[#8B1538] bg-[#8B1538]/10"
                        : "border-white/10 bg-white/5 hover:border-[#8B1538]/50"
                    }`}
                  >
                    <span className="text-white">{option.label}</span>
                    {answers.preference === option.value && (
                      <Check className="w-6 h-6 text-[#D4AF37]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="bg-[#1a1a2e]/50 border border-[#8B1538]/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-white mb-8 text-2xl md:text-3xl text-center">
                Wie möchten Sie jemanden kennenlernen?
              </h2>
              <div className="space-y-4">
                {[
                  { value: "flirt", label: "Leichtes Flirten" },
                  { value: "deep", label: "Tiefgründige persönliche Gespräche" },
                  { value: "chemistry", label: "Spontanes Kennenlernen, wenn die Chemie sofort spürbar ist" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer("speed", option.value)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
                      answers.speed === option.value
                        ? "border-[#8B1538] bg-[#8B1538]/10"
                        : "border-white/10 bg-white/5 hover:border-[#8B1538]/50"
                    }`}
                  >
                    <span className="text-white">{option.label}</span>
                    {answers.speed === option.value && (
                      <Check className="w-6 h-6 text-[#D4AF37]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 - Trigger Screen */}
          {step === 3 && (
            <div className="bg-[#1a1a2e]/50 border border-[#8B1538]/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 mb-4">
                  <Check className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h2 className="text-white mb-4 text-2xl md:text-3xl">
                  Wir haben Frauen gefunden, die offen für Gespräche in persönlicherer Atmosphäre sind
                </h2>
                <p className="text-white/60 mb-8">
                  Erhalten Sie Zugang zu ihren Profilen
                </p>
              </div>

              {/* Profile Preview Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  "https://images.unsplash.com/photo-1626725511075-26feab9ab153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHNtaWxlfGVufDF8fHx8MTc2NDE1NTc5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
                  "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1NjU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
                  "https://images.unsplash.com/photo-1711629151415-dd8392ea80ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tYW4lMjBmYWNlfGVufDF8fHx8MTc2NDE1NTc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
                ].map((image, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538] to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-xl" />
                    <img
                      src={image}
                      alt={`Profile ${idx + 1}`}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                ))}
              </div>

              <p className="text-white/40 text-xs text-center mb-6">
                Nach dem Klicken bestätigen Sie, dass Sie 18 Jahre oder älter sind und Sie den Nutzungsbedingungen zustimmen
              </p>
            </div>
          )}

          {/* Navigation Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#C41E3A] text-white rounded-full hover:shadow-2xl hover:shadow-[#8B1538]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{step === 3 ? "Zugang erhalten" : "Weiter"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}