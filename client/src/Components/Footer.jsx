import { Link } from "react-router-dom"
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-4 md:py-4">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logonobg.png" alt="SCC logo" className="h-10 w-auto" />
              <span className="font-bold text-primary">
                SRKR <span className="text-accent">&lt;CODING CLUB&gt;</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">Learn </span>
              <span className="text-accent">- Build - </span>
              <span >Innovate </span>
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>SRKR Engineering College, Bhimavaram</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@srkrcodingclub.org" className="hover:text-primary">
                  srkrcodingclubofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9100579797</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {[
                { href: "https://github.com/Srkr-Coding-Club", icon: Github },
                { href: "https://www.linkedin.com/in/srkr-coding-club-549799293", icon: Linkedin },
                { href: "https://twitter.com/srkrcodingclub", icon: Twitter },
                { href: "https://instagram.com/srkr_coding_club", icon: Instagram },
              ].map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{Icon.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={[
            ["/", "Home"],
            // ["/team", "Team"],
            ["/events", "Events"],
            ["/affiliates", "Affiliates"],
            ["/alumni", "Alumni"],
            ["/contact", "Contact"],
          ]} />

          {/* Events */}
          <FooterColumn title="Major Events" links={[
            ["/events/hackoverflow", "HackOverflow"],
            ["/events/iconcoderz", "IconCoderZ"],
            ["/events/hridayam", "Hridayam"],
            ["/events/hridayam", "Carrer Guidence"],
          ]} />

          <FooterColumn title="Minor Events" links={[
            ["/events/hackoverflow", "CodeQuest"],
            ["/events/edgecase", "EdgeCase"],
            ["/events/iconcoderz", "C - Workshop"],
            ["/events/codequest", "FSD Bootcamp"],
          ]} />
        </div>

        <div className="mt-8 border-t text-center text-sm text-muted-foreground pt-3">
          <p>&copy; {currentYear} SRKR Coding Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map(([href, label], idx) => (
          <li key={idx}>
            <Link to={href} className="text-muted-foreground transition-colors hover:text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}