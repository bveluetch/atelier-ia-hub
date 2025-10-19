import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Check, Users, BookOpen, Lightbulb, Network } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profile: "curious",
    acceptTerms: false,
  });

  const benefits = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Réseau d'innovateurs",
      description: "Connectez-vous avec entrepreneurs, étudiants et experts en IA",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Accès aux ateliers",
      description: "Participez gratuitement à tous nos ateliers et formations",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Accompagnement projet",
      description: "Bénéficiez de mentorat et de ressources pour vos projets IA",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communauté active",
      description: "Échangez sur Slack, participez aux meetups et événements",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast({
        title: "Conditions non acceptées",
        description: "Veuillez accepter les conditions pour continuer",
        variant: "destructive",
      });
      return;
    }

    // Validation basique
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs requis",
        variant: "destructive",
      });
      return;
    }

    // Simuler l'envoi
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons très bientôt. Bienvenue à L'Atelier IA !",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      profile: "curious",
      acceptTerms: false,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                la communauté
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Faites partie d'une communauté qui fait grandir ses idées grâce à l'IA
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous rejoindre ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Membership Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Formulaire d'adhésion</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Jean"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Dupont"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Votre profil *</Label>
                    <RadioGroup
                      value={formData.profile}
                      onValueChange={(value) => setFormData({ ...formData, profile: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                        <Label htmlFor="entrepreneur" className="font-normal cursor-pointer">
                          Entrepreneur
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student" className="font-normal cursor-pointer">
                          Étudiant
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="curious" id="curious" />
                        <Label htmlFor="curious" className="font-normal cursor-pointer">
                          Curieux de l'IA
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal cursor-pointer">
                          Autre
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, acceptTerms: checked as boolean })
                      }
                    />
                    <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                      J'accepte de recevoir des communications de L'Atelier IA et j'ai lu la politique
                      de confidentialité *
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Check className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-secondary/50 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Après validation de votre demande, vous recevrez un email de confirmation avec toutes
                  les informations pour accéder à la communauté et participer aux prochains événements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
