const Contacts = () => (
  <div className="pt-190px pb-100px md:pt-220px md:pb-40 lg:pt-256px lg:pb-36 w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg">
    <h1 className="text-ui-peach font-TangoSans text-sm-h1-poppins md:text-md-h1-tangosans lg:text-lg-h1-tangosans mb-52px md:mb-11 lg:mb-15">
      Say hello👋
    </h1>
    <div className="w-full flex flex-col md:flex-row justify-start items-start">
      <div className="mb-8 md:mr-18 md:mb-0">
        <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
          E-mail
        </div>
        <a className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline">
          office@lira.md
        </a>
      </div>
      <div className="mb-8 md:mr-18 md:mb-0">
        <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
          Phone
        </div>
        <a className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline">
          +373 (68) 356 821
        </a>
      </div>
      <div className="mb-8 md:mr-18 md:mb-0">
        <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
          We&apos;re here
        </div>
        <a className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline">
          Chișinău, str. Pietrarilor 2/1
        </a>
      </div>
    </div>
  </div>
)

export default Contacts
