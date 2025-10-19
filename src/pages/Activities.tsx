import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Rocket,
  Calendar,
  Users,
  Code,
  Brain,
  Target,
  Lightbulb,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Activities = () => {
  const workshops = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Initiation à l'IA",
      description:
        "Découvrez les fondamentaux de l'intelligence artificielle, ses applications et son potentiel. Accessible à tous, aucun prérequis technique nécessaire.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Prototypage rapide",
      description:
        "Apprenez à créer des prototypes fonctionnels avec des outils IA modernes. De l'idée au MVP en quelques heures.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Éthique et IA",
      description:
        "Explorez les enjeux éthiques de l'IA : biais algorithmiques, confidentialité, transparence et responsabilité sociale.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Création de projets",
      description:
        "Transformez votre idée en projet concret. Méthodologie, outils et accompagnement pour lancer votre initiative IA.",
    },
  ];

  const projectBenefits = [
    "Accompagnement personnalisé par des experts",
    "Accès aux ressources et outils de l'association",
    "Mise en relation avec le réseau de membres",
    "Opportunités de financement et de partenariats",
    "Espace de travail collaboratif",
    "Mentorat technique et business",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                activités
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ateliers, projets incubés et rencontres : découvrez comment L'Atelier IA vous accompagne
              dans votre parcours d'innovation
            </p>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Ateliers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sessions thématiques pratiques pour tous les niveaux. Chaque atelier combine théorie,
              démonstrations et mise en pratique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {workshops.map((workshop, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-soft"
              >
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    {workshop.icon}
                  </div>
                  <CardTitle className="text-xl">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{workshop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-secondary/50 border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Les ateliers ont lieu régulièrement à Gorgier et en ligne. Inscriptions ouvertes aux membres
                  et non-membres.
                </p>
                <Link to="/contact">
                  <Button variant="default">S'inscrire aux prochains ateliers</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Incubated Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center">
                  <Rocket className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Projets incubés</h2>
              <p className="text-lg text-muted-foreground">
                Vous avez une idée de projet utilisant l'IA ? L'Atelier IA vous accompagne pour la concrétiser.
              </p>
            </div>

            <Card className="bg-background mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Ce que nous offrons :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground flex-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proposer un projet</h3>
                <p className="text-muted-foreground mb-6">
                  Que vous soyez membre ou non, vous pouvez soumettre votre idée. Notre comité évaluera
                  votre projet et vous accompagnera dans son développement.
                </p>
                <Link to="/contact">
                  <Button variant="hero">Soumettre mon projet</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center">
                  <Calendar className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Rencontres</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Événements réguliers pour échanger, réseauter et découvrir les dernières innovations IA
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Meetups mensuels</h3>
                  <p className="text-sm text-muted-foreground">
                    Rencontres conviviales pour échanger sur vos projets et découvrir ceux des autres membres
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <Brain className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Conférences</h3>
                  <p className="text-sm text-muted-foreground">
                    Interventions d'experts sur des thématiques IA : tendances, cas d'usage, retours d'expérience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <Rocket className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Demo Days</h3>
                  <p className="text-sm text-muted-foreground">
                    Présentation publique des projets incubés et prototypes développés par nos membres
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
