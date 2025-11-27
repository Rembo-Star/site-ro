export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a12] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Legal Notice */}
          <div className="text-center mb-8 p-6 rounded-xl bg-[#1a1a2e]/30 border border-[#8B1538]/10">
            <p className="text-white/60 text-sm mb-2">
              Diese Plattform ist ausschließlich für Erwachsene ab 18 Jahren bestimmt.
            </p>
            <p className="text-white/40 text-xs">
              Mit der Nutzung bestätigen Sie Ihre Volljährigkeit und stimmen den Nutzungsbedingungen zu.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Über die Plattform
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Nutzungsbedingungen
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Kontakt
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Support
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/40 text-xs">
              © 2025 Private Dating-Plattform. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/30 text-xs mt-2">
              Diskrete Kommunikation für Erwachsene
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}