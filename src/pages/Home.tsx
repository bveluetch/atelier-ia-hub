import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Target, Heart, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-collaboration.jpg";

const Home = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Ouverture",
      description: "Un espace accessible à tous, entrepreneurs, étudiants et curieux de l'IA",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Apprendre et créer ensemble pour multiplier les possibilités",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Innovation responsable",
      description: "Développer l'IA de manière éthique et au service de l'humain",
    },
  ];

  const activities = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Les Ateliers",
      description: "Sessions thématiques : initiation IA, prototypage, éthique, création de projets",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Les Projets incubés",
      description: "Accompagnement de vos idées innovantes avec l'IA",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Les Rencontres",
      description: "Événements réguliers, discussions et présentations de solutions IA",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Apprendre, expérimenter et{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  entreprendre ensemble
                </span>{" "}
                avec l'intelligence artificielle
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                L'Atelier IA est une association suisse qui fédère entrepreneurs, étudiants et innovateurs
                pour construire l'avenir de l'IA de manière collaborative et responsable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/join">
                  <Button variant="hero" size="lg">
                    Rejoindre l'association
                  </Button>
                </Link>
                <Link to="/activities">
                  <Button variant="outline" size="lg">
                    Découvrir nos ateliers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={heroImage}
                alt="Collaboration IA"
                className="rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Qui sommes-nous ?</h2>
            <p className="text-lg text-muted-foreground">
              Une communauté suisse passionnée qui croit en l'intelligence collective.
              Nous réunissons des personnes de tous horizons pour explorer, apprendre et créer
              avec l'intelligence artificielle, tout en gardant l'humain au centre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-soft group"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos activités</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nous accompagnons nos membres dans leur parcours d'innovation avec l'IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-background hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/activities">
              <Button variant="default" size="lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                Connectez-vous avec des innovateurs, participez à des ateliers pratiques et
                donnez vie à vos projets IA. L'aventure commence ici.
              </p>
              <Link to="/join">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Devenir membre
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
