
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Code, Heart, Coffee, Music, Camera, Gamepad2, Mail, Github, Linkedin } from "lucide-react";

const Index = () => {
  const passions = [
    { icon: Code, title: "Programmation", description: "Création d'applications web innovantes" },
    { icon: Coffee, title: "Café", description: "Le carburant de tout développeur" },
    { icon: Music, title: "Musique", description: "Inspiration créative et concentration" },
    { icon: Camera, title: "Photographie", description: "Capturer les moments précieux" },
    { icon: Gamepad2, title: "Jeux vidéo", description: "Détente et analyse d'UX" },
  ];

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "JavaScript", "HTML/CSS", "Node.js"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
            {/* Avatar et Info */}
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Photo de profil" />
                <AvatarFallback className="text-2xl font-bold">JD</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Informations personnelles */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Jean Dupont
              </h1>
              <p className="text-xl text-muted-foreground mb-4">Développeur Frontend Passionné</p>
              <p className="text-lg leading-relaxed max-w-2xl mb-6">
                Bienvenue sur mon profil ! Je suis un développeur frontend passionné par la création d'expériences utilisateur exceptionnelles. 
                J'aime transformer des idées créatives en applications web modernes et interactives.
              </p>
              
              {/* Boutons de contact */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="default" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Compétences Techniques</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Mes Passions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Au-delà du code, voici ce qui m'inspire et nourrit ma créativité au quotidien
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <passion.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{passion.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{passion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectif Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl">Mon Objectif en tant que Développeur Frontend</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Mon objectif est de créer des interfaces utilisateur qui ne se contentent pas d'être fonctionnelles, 
                  mais qui offrent une véritable expérience émotionnelle. Je crois fermement que le frontend est le pont 
                  entre la technologie et l'humain.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Adopter les dernières technologies pour créer des solutions modernes
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Accessibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Développer des applications inclusives pour tous les utilisateurs
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimiser chaque détail pour des expériences fluides et rapides
                    </p>
                  </div>
                </div>

                <p className="text-lg font-medium text-foreground mt-8">
                  "Chaque ligne de code est une opportunité de rendre le web plus beau et plus accessible."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Jean Dupont - Développeur Frontend Passionné</p>
      </footer>
    </div>
  );
};

export default Index;
