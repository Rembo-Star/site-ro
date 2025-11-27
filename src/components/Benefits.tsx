import { Shield, MessageCircle, MapPin, Clock } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Kennenlernen ohne Komplikationen",
      description: "Frauen, die offen für neue Erfahrungen sind und leicht Kontakt knüpfen",
      image: "https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNTc1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Shield,
      title: "Atmosphäre des Vertrauens",
      description: "Gespräche verlaufen privat, ohne fremde Blicke. Hier können Sie frei sprechen",
      image: "https://images.unsplash.com/photo-1695827679388-65607837df75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwd29tYW4lMjBzbWlsZXxlbnwxfHx8fDE3NjQxNTc1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: MapPin,
      title: "Stimmung, die sofort spürbar ist",
      description: "Viele Teilnehmerinnen bevorzugen echte Treffen, wenn die Chemie stimmt",
      image: "https://images.unsplash.com/photo-1648065460033-5c59f2ef1d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBiZWF1dHl8ZW58MXx8fHwxNzY0MTU3NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Clock,
      title: "Sie bestimmen den Ton",
      description: "Das Gespräch kann leicht, tiefgründig oder aufregend sein. Alles entwickelt sich so, wie es für beide angenehm ist",
      image: "https://images.unsplash.com/photo-1665742012672-cdf063989b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFybWluZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MTU3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0f0f1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-3xl md:text-4xl">
            Warum Männer uns vertrauen
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Die Plattform für anspruchsvolle Männer, die Privatsphäre schätzen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-white/5 rounded-2xl p-8 hover:border-[#8B1538]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1538]/20 to-[#C41E3A]/20 mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-white mb-4">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}