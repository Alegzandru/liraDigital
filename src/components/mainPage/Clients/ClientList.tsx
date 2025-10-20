import Image from 'next/image'

type ClientProps = {
  src: string
  name: string
  link: string
}

export const ClientList = ({ clients }: { clients: ClientProps[] }) => (
  <div className="flex flex-row justify-start items-center">
    {clients.map((client, index) => (
      <div className="mr-8 md:mr-12" key={index}>
        <a
          href={client.link || '#clients'}
          className="transition-all duration-300"
        >
          <Image
            src={client.src}
            alt={client.name}
            width={200}
            height={150}
            objectFit="contain"
          />
        </a>
      </div>
    ))}
  </div>
)
