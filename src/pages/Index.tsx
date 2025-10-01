import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';
import Header from '@/components/Header';
import heroImage from '@/assets/hero-pulsebar.jpg';
import { 
  Zap, 
  Shield, 
  Award, 
  Flame,
  Instagram,
  Users,
  Trophy,
  Gift,
  Mail,
  MessageCircle
} from 'lucide-react';

const Index = () => {
  const scrollToPreorder = () => {
    document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(237,242,247,0.9) 50%, rgba(15,23,41,0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 py-24 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Fuel Your Winter Arc
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">No BS, Just Clean Protein</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            The cleanest protein bar for challengers who refuse shortcuts.
          </p>
          <Button 
            variant="premium" 
            size="xl"
            onClick={scrollToPreorder}
            className="animate-pulse-glow"
          >
            Preorder Now — Open until Oct 30, 2025
          </Button>
        </div>
      </section>

      {/* About the Challenge */}
      <section id="challenge" className="py-24 md:py-32 bg-gradient-winter scroll-mt-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
            The Winter Arc Challenge
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in-up">
            A 150-day journey of discipline and growth. From October 1, 2025 to February 28, 2026, 
            thousands of challengers push their limits, build unshakeable habits, and transform their lives.
          </p>
          <p className="text-lg md:text-xl text-foreground font-medium animate-fade-in-up">
            Your arc deserves clean fuel. PulseBar was built to power warriors of the Winter Arc — 
            no candy fillers, just real protein.
          </p>
        </div>
      </section>

      {/* Why PulseBar - Features */}
      <section id="features" className="py-24 md:py-32 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
            Why PulseBar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center shadow-subtle hover:shadow-premium transition-all duration-400 animate-fade-in bg-card border-border">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">20g Clean Protein</h3>
              <p className="text-muted-foreground">
                Pure fuel for muscle recovery and sustained energy throughout your day.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-subtle hover:shadow-premium transition-all duration-400 animate-fade-in bg-card border-border">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Made from Real Peanuts</h3>
              <p className="text-muted-foreground">
                Whole food ingredients you can trust, nothing artificial or processed.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-subtle hover:shadow-premium transition-all duration-400 animate-fade-in bg-card border-border">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No Junk Ingredients</h3>
              <p className="text-muted-foreground">
                Zero candy fillers, no artificial sweeteners. Just clean, honest nutrition.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-subtle hover:shadow-premium transition-all duration-400 animate-fade-in bg-card border-border">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary">
                <Flame className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Premium Fuel</h3>
              <p className="text-muted-foreground">
                Optimized for focus, recovery, and crushing your Winter Arc goals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Preorder Founder's Batch */}
      <section id="preorder" className="py-24 md:py-32 bg-gradient-winter scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="p-10 md:p-16 shadow-premium bg-card border-border">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Preorder Founder's Batch
              </h2>
              <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up">
                Join the first wave of Winter Arc warriors with exclusive benefits
              </p>

              <div className="space-y-6 mb-12 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Huge Discount</h3>
                    <p className="text-muted-foreground">Lock in the lowest price — available only until October 30, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Winter Arc Leaderboard Access</h3>
                    <p className="text-muted-foreground">Track workouts, streaks, and nutrition with the exclusive app</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Exclusive Founder's Edition Packaging</h3>
                    <p className="text-muted-foreground">Limited-edition design that marks you as an original</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">Surprise Gifts for Top Creators</h3>
                    <p className="text-muted-foreground">Special rewards for those who go above and beyond</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
                  Preorder Closes In
                </p>
                <CountdownTimer />
              </div>

              <Button variant="premium" size="xl">
                Join the Founder's Batch Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Creator Challenge */}
      <section id="creator" className="py-24 md:py-32 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-secondary">
              <Instagram className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Create. Share. Win.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Make an Instagram Reel about your Winter Arc journey. Any reel crossing 
              10k views earns you free PulseBars, exclusive hoodies, and more.
            </p>

            <Card className="p-8 md:p-12 shadow-subtle bg-card border-border mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Free PulseBars</h3>
                  <p className="text-sm text-muted-foreground">Monthly supply for top performers</p>
                </div>
                <div className="text-center">
                  <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Exclusive Hoodies</h3>
                  <p className="text-sm text-muted-foreground">Limited edition Winter Arc gear</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Special Recognition</h3>
                  <p className="text-sm text-muted-foreground">Featured on our platform</p>
                </div>
              </div>
            </Card>

            <Button variant="hero" size="xl">
              Join Creator Challenge
            </Button>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-24 md:py-32 bg-gradient-winter scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-secondary">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Join the Community
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up">
              Connect with thousands of Winter Arc challengers. Get daily updates, 
              track your progress, and climb the leaderboard together.
            </p>
            <Card className="p-8 shadow-subtle bg-card border-border">
              <p className="text-muted-foreground mb-6">
                Access our exclusive Telegram & Discord community for real-time support, 
                accountability partners, and daily motivation.
              </p>
              <Button variant="hero" size="lg">
                Join Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Don't Just Join the Challenge.
            <br />
            Conquer It.
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up">
            Preorder before Oct 30 and secure your Founder's Batch.
          </p>
          <Button 
            variant="premium" 
            size="xl"
            onClick={scrollToPreorder}
          >
            Preorder Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">PulseBar</h3>
              <p className="text-muted-foreground mb-4">
                The cleanest protein bar powering the Winter Arc Challenge.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 PulseBar. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
                <a href="#challenge" className="block text-muted-foreground hover:text-accent transition-colors">
                  The Challenge
                </a>
                <a href="#features" className="block text-muted-foreground hover:text-accent transition-colors">
                  Why PulseBar
                </a>
                <a href="#preorder" className="block text-muted-foreground hover:text-accent transition-colors">
                  Preorder
                </a>
                <a href="#creator" className="block text-muted-foreground hover:text-accent transition-colors">
                  Creator Challenge
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Support
              </h4>
              <div className="space-y-3">
                <a 
                  href="mailto:support@pulsebar.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@pulsebar.com
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </div>
              <div className="mt-6 space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                  FAQs
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Fueling the Winter Arc Challenge · Oct 1, 2025 – Feb 28, 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
