import Image from 'next/image'
import Link from 'next/link'

const facebookLink = 'https://www.facebook.com/LiraDigitalAgency/'
const instagramLink = 'https://www.instagram.com/liradigital_agency/'
const linkedinLink = 'https://www.linkedin.com/company/lira-digital-agency/'

export default function SocialIcons() {
  return (
    <div
      id="social-links"
      className="flex my-5 ml-3 md:ml-0 md:my-0 md:mr-12 text-sm-h2-poppins md:text-lg-h4-poppins"
    >
      <div className="mr-5">
        <Link href={facebookLink} rel="noopener noreferrer" target="_blank">
          <Image
            src="/footer/Facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="w-auto h-6"
          />
        </Link>
      </div>
      <div className="mr-5">
        <Link href={instagramLink} rel="noopener noreferrer" target="_blank">
          <Image
            src="/footer/Instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="w-auto h-6"
          />
        </Link>
      </div>
      <div className="mr-5">
        <Link href={linkedinLink} rel="noopener noreferrer" target="_blank">
          <Image
            src="/footer/LinkedIn.svg"
            alt="Linkedin"
            width={24}
            height={24}
            className="w-auto h-6"
          />
        </Link>
      </div>
    </div>
  )
}
