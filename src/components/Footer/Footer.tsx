import Link from 'next/link'

const Footer = () => (
  <div>
    <div className="mx-auto py-32 md:py-36 w-full bg-ui-black px-container-sm md:px-container-md lg:px-container-lg">
      <div className="w-full lg:max-w-792px mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <h2 className="font-TangoSans font-bold text-ui-white text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans">
            Hello. Let&apos;s talk.
          </h2>
          <Link href="/project-request">
            <a className="px-1.5 py-1 flex flex-row justify-start items-center rounded group hover:bg-ui-peach hover:bg-opacity-20 transition-colors duration-300 mt-7 md:mt-0">
              <div className="font-Poppins text-md-links-md lg:text-lg-links-md text-ui-peach font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                Project request
              </div>
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-ui-peach group-hover:-mr-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Link>
        </div>
        <div className="mt-12 font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-grey">
          <div>
            <a href="tel:+37368356821" className="p-1 hover:text-ui-white hover:underline hover:bg-ui-black75 rounded transition-all duration-300">
            +373 (68) 356 821
            </a>
          </div>
          <div className="mt-4 md:mt-5 lg:mt-7">
            <a href="mailto:office@lira.md" className="p-1 hover:text-ui-white hover:underline hover:bg-ui-black75 rounded transition-all duration-300">
              office@lira.md
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="font-Poppins text-ui-darkGrey text-copyright py-4 w-full text-center bg-ui-black">
      All rights reserved 2021 © Lira Digital
    </div>
  </div>
)

export default Footer
