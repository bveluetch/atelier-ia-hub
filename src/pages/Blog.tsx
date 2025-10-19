import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      title: "Lancement de L'Atelier IA",
      date: "15 janvier 2025",
      excerpt:
        "Nous sommes ravis d'annoncer le lancement officiel de L'Atelier IA, une nouvelle association dédiée à l'innovation collective autour de l'intelligence artificielle en Suisse.",
      category: "Annonce",
    },
    {
      title: "Premier atelier : Introduction à l'IA pour tous",
      date: "22 janvier 2025",
      excerpt:
        "Retour sur notre premier atelier qui a réuni 25 participants curieux de découvrir les fondamentaux de l'intelligence artificielle. Une session riche en échanges et en apprentissages.",
      category: "Atelier",
    },
    {
      title: "L'éthique de l'IA : pourquoi c'est important",
      date: "5 février 2025",
      excerpt:
        "Dans un monde où l'IA prend de plus en plus de place, il est crucial de réfléchir aux implications éthiques. Découvrez notre approche et nos recommandations pour une IA responsable.",
      category: "Réflexion",
    },
    {
      title: "Projet incubé : Assistant IA pour PME",
      date: "12 février 2025",
      excerpt:
        "Présentation du premier projet incubé au sein de L'Atelier IA : un assistant intelligent destiné à aider les PME suisses dans leur transformation numérique.",
      category: "Projet",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center">
                <Newspaper className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Actualités
              </span>{" "}
              & Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez nos dernières innovations, événements et réflexions autour de l'IA
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-soft group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Restez informé de nos actualités
                </h2>
                <p className="text-lg mb-6 opacity-95">
                  Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles, événements
                  et articles directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-0 focus:ring-2 focus:ring-primary-foreground"
                  />
                  <Button variant="secondary" size="lg" className="font-semibold">
                    S'inscrire
                  </Button>
                </div>
                <p className="text-xs mt-4 opacity-80">
                  Nous respectons votre vie privée. Désinscription possible à tout moment.
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

export default Blog;
