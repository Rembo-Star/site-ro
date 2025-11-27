import { ArrowRight, Shield, Lock, Eye } from "lucide-react";

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const profiles = [
    {
      name: "Alexandra",
      age: 38,
      location: "București",
      image: "https://images.unsplash.com/photo-1626725511075-26feab9ab153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHNtaWxlfGVufDF8fHx8MTc2NDE1NTc5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      online: true,
    },
    {
      name: "Elena",
      age: 42,
      location: "Cluj-Napoca",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1NjU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      online: true,
    },
    {
      name: "Andreea",
      age: 35,
      location: "Timișoara",
      image: "https://images.unsplash.com/photo-1749700332246-b4fedd192b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQxNTU3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      online: true,
    },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#8B1538]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* Top Section - Logo & Trust Badges */}
        <div className="flex-shrink-0 w-full py-4 md:py-6 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-base md:text-xl whitespace-nowrap">Elite Dating</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-6 text-white/60 text-xs md:text-sm">
              <div className="flex items-center gap-1 md:gap-2">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="hidden sm:inline">Verificat</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Lock className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="hidden sm:inline">Discret</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Eye className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="hidden sm:inline">Privat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Scrollable on mobile */}
        <div className="flex-1 overflow-y-auto md:overflow-visible px-4 md:px-6 pb-4 md:pb-0">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center py-6 md:py-0">
            
            {/* Main Content - Two Columns Layout */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left space-y-4 md:space-y-6">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#8B1538]/20 border border-[#8B1538]/30">
                  <span className="text-[#D4AF37] text-xs md:text-sm">Platformă exclusivistă pentru întâlniri discrete</span>
                </div>
                
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Întâlnește
                  <span className="block bg-gradient-to-r from-[#D4AF37] to-[#8B1538] bg-clip-text text-transparent">
                    femei extraordinare
                  </span>
                  din România
                </h1>
                
                <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                  O comunitate privată pentru bărbați pretențioși. Cunoștințe discrete cu stil și eleganță.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center lg:items-start lg:justify-start justify-center pt-2">
                  <button
                    onClick={onCTAClick}
                    className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#8B1538] to-[#C41E3A] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B1538]/50 hover:scale-105 w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-2 md:gap-3">
                      <span className="text-base md:text-lg">Obține acces acum</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  
                  <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">2.847 membri online</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4">
                  <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#8B1538] border-2 border-[#0f0f1a]" />
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#C41E3A] border-2 border-[#0f0f1a]" />
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#D4AF37] border-2 border-[#0f0f1a]" />
                    </div>
                    <span className="text-white/70 text-xs md:text-sm whitespace-nowrap">4.9/5 stele</span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-white/70 text-xs md:text-sm whitespace-nowrap">100% Discret</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Cards */}
              <div className="relative mt-6 lg:mt-0">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {profiles.map((profile, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-b from-[#1a1a2e]/90 to-[#0f0f1a]/90 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#8B1538]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Profile Image */}
                      <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/30 to-transparent" />
                        
                        {/* Online Badge */}
                        <div className="absolute top-2 md:top-3 right-2 md:right-3 flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white animate-pulse" />
                          <span className="text-white text-[10px] md:text-xs">Online</span>
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="p-2 md:p-3 lg:p-4">
                        <h3 className="text-white mb-0.5 md:mb-1 text-xs md:text-sm">
                          {profile.name}, {profile.age}
                        </h3>
                        <div className="flex items-center gap-1 text-white/60 text-[10px] md:text-xs mb-2 md:mb-3">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="truncate">{profile.location}</span>
                        </div>

                        {/* Quick Action Button */}
                        <button
                          onClick={onCTAClick}
                          className="w-full py-1.5 md:py-2 bg-gradient-to-r from-[#8B1538] to-[#C41E3A] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B1538]/50 transition-all duration-300 text-[10px] md:text-xs"
                        >
                          Mesaj
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Stats */}
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-[#1a1a2e]/90 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mx-auto w-fit">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#8B1538] to-[#C41E3A] border-2 border-[#1a1a2e]" />
                    ))}
                  </div>
                  <span className="text-white/70 text-xs md:text-sm ml-2 whitespace-nowrap">+2.500 profiluri verificate</span>
                </div>
              </div>
            </div>

            {/* Bottom Section - Features */}
            <div className="mt-8 md:mt-12 lg:mt-16">
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
                <div className="space-y-1 md:space-y-2">
                  <div className="text-[#D4AF37] text-xl md:text-2xl">100%</div>
                  <div className="text-white/60 text-xs md:text-sm">Verificat</div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="text-[#D4AF37] text-xl md:text-2xl">24/7</div>
                  <div className="text-white/60 text-xs md:text-sm">Suport</div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="text-[#D4AF37] text-xl md:text-2xl">Discret</div>
                  <div className="text-white/60 text-xs md:text-sm">& Sigur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}