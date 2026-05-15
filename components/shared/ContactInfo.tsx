import { MapPin, Phone, Mail, Instagram, Music2, Linkedin } from "lucide-react"

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
        <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>Address</p>
          <p className={`text-sm ${textBase}`}>South Tangerang, Banten, Indonesia</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3">
        <Phone className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>Phone</p>
          <p className={`text-sm ${textBase}`}>+62 812-1234-5678 (Head Office)</p>
          <p className={`text-sm ${textBase}`}>+62 821-9876-5432 (Branch)</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColor}`} />
        <div>
          <p className={`font-semibold text-sm ${textStrong}`}>Email</p>
          <a
            href="mailto:contact@learningwithus.com"
            className={`text-sm ${textBase} hover:text-secondary transition-colors`}
          >
            contact@learningwithus.com
          </a>
          <br />
          <a
            href="mailto:support@learningwithus.com"
            className={`text-sm ${textBase} hover:text-secondary transition-colors`}
          >
            support@learningwithus.com
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
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://tiktok.com/@lwu_id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <Music2 className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`${iconColor} hover:text-secondary-dark transition-colors`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
