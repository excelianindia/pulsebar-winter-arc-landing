import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const PulseBar = () => {
  const navigate = useNavigate();

  const ingredients = [
    { name: 'Real Peanuts', description: 'Premium quality peanuts as the base' },
    { name: 'Whey Protein Isolate', description: 'Pure protein with minimal processing' },
    { name: 'Natural Sweeteners', description: 'No artificial sweeteners or sugar alcohols' },
    { name: 'Sea Salt', description: 'Natural mineral balance' },
    { name: 'Dark Chocolate', description: 'Rich, antioxidant-packed coating' },
  ];

  const nutritionFacts = [
    { label: 'Calories', value: '250' },
    { label: 'Protein', value: '20g' },
    { label: 'Total Fat', value: '12g' },
    { label: 'Total Carbs', value: '18g' },
    { label: 'Fiber', value: '4g' },
    { label: 'Sugar', value: '8g' },
  ];

  const benefits = [
    {
      title: 'Clean Energy',
      description: 'Sustained energy without the crash from natural ingredients',
    },
    {
      title: 'Muscle Recovery',
      description: '20g of premium protein for optimal muscle repair and growth',
    },
    {
      title: 'Mental Focus',
      description: 'Natural fats and protein to fuel your brain throughout the day',
    },
    {
      title: 'Real Ingredients',
      description: 'No artificial flavors, colors, or preservatives',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  The <span className="text-accent">Cleanest</span> Protein Bar
                </h1>
                <p className="text-xl text-muted-foreground">
                  Engineered for warriors who refuse to compromise on quality. Real ingredients, real results.
                </p>
              </div>
              <Button
                variant="premium"
                size="lg"
                onClick={() => navigate('/#preorder')}
                className="text-lg"
              >
                Preorder Founder's Batch 🔥
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-subtle p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl font-bold text-accent">PulseBar</div>
                  <p className="text-xl text-muted-foreground">Clean Protein</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Nutrition Facts
          </h2>
          <Card className="p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center border-b border-border pb-4">
              Per Bar (60g)
            </h3>
            <div className="space-y-4">
              {nutritionFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-center py-2 border-b border-border/50"
                >
                  <span className="font-medium text-foreground">{fact.label}</span>
                  <span className="text-lg font-bold text-accent">{fact.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Real Ingredients. Nothing Hidden.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe you should know exactly what you're putting in your body. Every ingredient serves a purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <Card
                key={ingredient.name}
                className="p-6 hover:shadow-elegant transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {ingredient.name}
                </h3>
                <p className="text-muted-foreground">{ingredient.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Formulated for Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every aspect of PulseBar is designed to support your Winter Arc journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="p-8 hover:shadow-elegant transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {benefit.title}
                </h3>
                <p className="text-lg text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Use */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-card border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              What You WON'T Find in PulseBar
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Artificial Sweeteners</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Sugar Alcohols</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Artificial Colors</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Preservatives</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Soy Protein</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-muted-foreground line-through">Palm Oil</p>
              </div>
            </div>
            <p className="mt-8 text-xl text-accent font-medium">
              Just real food. Nothing else.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Fuel Your Winter Arc?
          </h2>
          <p className="text-xl opacity-90">
            Join the Founder's Batch before October 30, 2025
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate('/#preorder')}
            className="text-lg"
          >
            Preorder Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 PulseBar. Fuel Your Winter Arc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PulseBar;
