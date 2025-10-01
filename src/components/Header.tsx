import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', action: scrollToTop },
    { label: 'The Challenge', id: 'challenge' },
    { label: 'PulseBar', path: '/pulsebar' },
    { label: 'Creator Challenge', id: 'creator' },
    { label: 'Community', id: 'community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-subtle border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            PulseBar
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action || (() => scrollToSection(link.id!))}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
            <Button
              variant="premium"
              size="default"
              onClick={() => scrollToSection('preorder')}
            >
              Preorder Now 🔥
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-left py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action || (() => scrollToSection(link.id!))}
                    className="text-left py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <Button
                variant="premium"
                size="default"
                onClick={() => scrollToSection('preorder')}
                className="mt-2"
              >
                Preorder Now 🔥
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
