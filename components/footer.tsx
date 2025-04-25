import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                AS
              </div>
              <span className="font-bold text-lg">Anshik Suhane</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              A passionate full stack developer building innovative web applications with modern technologies.
            </p>
            <div className="flex gap-3">
              <Link href="https://github.com/AnshikSuhane" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/anshik-suhane-003a89316/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/AnshikSuha6771" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/anshik.suhane/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </Link>
             
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                UI/UX Design
              </Link>
            
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" /> anshiksuhane9@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">Indore (M P)</p>
            </div>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Anshik Suhane. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
