import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Ouverture",
      description:
        "Nous accueillons toutes les personnes curieuses de l'IA, quel que soit leur niveau de connaissance. L'apprentissage se fait ensemble, dans la bienveillance.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "Les meilleures innovations naissent de la collaboration. Nous favorisons les échanges, le partage de connaissances et la co-création entre nos membres.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Innovation responsable",
      description:
        "L'IA doit servir l'humain. Nous développons des solutions éthiques, transparentes et respectueuses des valeurs fondamentales de notre société.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Transmission",
      description:
        "Partager nos connaissances et accompagner les nouveaux venus est au cœur de notre mission. Chaque membre peut à la fois apprendre et enseigner.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Une communauté{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                qui fait grandir
              </span>{" "}
              ses idées
            </h1>
            <p className="text-xl text-muted-foreground">
              L'Atelier IA est une association suisse à but non lucratif basée à Gorgier (NE),
              dédiée à la démocratisation et à l'innovation responsable autour de l'intelligence artificielle.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Construire une communauté où l'intelligence humaine et l'intelligence artificielle
                collaborent pour résoudre des problèmes réels. Nous croyons que l'IA n'est pas
                une fin en soi, mais un outil puissant au service de l'innovation collective
                et du progrès social.
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Notre mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground flex-1">
                      <strong className="text-foreground">Fédérer</strong> entrepreneurs, étudiants et innovateurs
                      autour de projets concrets utilisant l'IA
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground flex-1">
                      <strong className="text-foreground">Former</strong> et accompagner nos membres dans
                      l'apprentissage et l'expérimentation de l'IA
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground flex-1">
                      <strong className="text-foreground">Incuber</strong> des projets innovants qui ont un impact
                      positif sur la société
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground flex-1">
                      <strong className="text-foreground">Promouvoir</strong> une approche éthique et responsable
                      de l'intelligence artificielle
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ces principes guident toutes nos actions et définissent l'esprit de notre communauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-2 hover:border-primary transition-all duration-300 hover:shadow-soft group"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Basés en Suisse</h2>
                <p className="text-lg text-muted-foreground mb-2">
                  Association à but non lucratif
                </p>
                <p className="text-muted-foreground">
                  Gorgier, Neuchâtel, Suisse
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Notre ancrage local nous permet de créer des liens solides avec l'écosystème
                    d'innovation suisse tout en développant une vision internationale de l'IA.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
