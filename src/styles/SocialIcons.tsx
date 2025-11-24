import Image from 'next/image'
import Link from 'next/link'
import FacebookLogo from '../../public/footer/Facebook.svg'
import InstagramLogo from '../../public/footer/Instagram.svg'
import LikedinLogo from '../../public/footer/LinkedIn.svg'

const facebookLink = 'https://www.facebook.com/LiraDigitalAgency/'
const instagramLink = 'https://www.instagram.com/liradigital_agency/'
const linkedinLink = 'https://www.linkedin.com/company/lira-digital-agency/'

export default function SocialIcons() {
  return (
    <div
      id="social-links"
      className="flex gap-5 my-5 ml-3 md:ml-0 md:my-0 md:mr-12 text-sm-h2-poppins md:text-lg-h4-poppins"
    >
      <Link href={facebookLink} rel="noopener noreferrer" target="_blank">
        <Image
          src={FacebookLogo}
          alt="Facebook"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
      </Link>
      <Link href={instagramLink} rel="noopener noreferrer" target="_blank">
        <Image
          src={InstagramLogo}
          alt="Instagram"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
      </Link>
      <Link href={linkedinLink} rel="noopener noreferrer" target="_blank">
        <Image
          src={LikedinLogo}
          alt="Linkedin"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
      </Link>
    </div>
  )
}
