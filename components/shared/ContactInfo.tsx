import { MapPin, Mail } from "lucide-react"
import { 
  InstagramLogo, 
  TikTokLogo, 
  YoutubeLogo, 
  WhatsappLogo, 
  LinkedinLogo 
} from "@/components/shared/SocialLogos"

interface ContactInfoProps {
  light?: boolean
}

export default function ContactInfo({ light = false }: ContactInfoProps) {
  const textBase = light ? "text-blue-100" : "text-muted"
  const textStrong = light ? "text-white" : "text-primary"
  const iconColor = light ? "text-secondary" : "text-secondary"

  return (
    <div className="flex flex-col gap-5">
      {/* Address */}
      <div className="flex items-start gap-3">
        <MapPin className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>Address</p>
          <p className={`text-sm ${textBase}`}>South Tangerang, Banten, Indonesia</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-3">
        <WhatsappLogo className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>WhatsApp</p>
          <a
            href="https://wa.me/6285711359655"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${textBase} hover:text-secondary transition-colors`}
          >
            +62 857-1135-9655
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>Email</p>
          <a
            href="mailto:lwuid.info@gmail.com"
            className={`text-sm ${textBase} hover:text-secondary transition-colors`}
          >
            lwuid.info@gmail.com
          </a>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center gap-4 pt-2">
        <a
          href="https://instagram.com/lwu_id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <InstagramLogo className="w-5 h-5" />
        </a>
        <a
          href="https://tiktok.com/@lwu_id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <TikTokLogo className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@LearningWithUs-ID"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <YoutubeLogo className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/6285711359655"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <WhatsappLogo className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/learning-with-us-id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <LinkedinLogo className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
