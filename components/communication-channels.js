import Image from 'next/image'

export default function CommunicationChannels () {
  const communicationChannels = [
    {
      name: 'email',
      imgSrc: '/images/email.png',
      href: 'http://tinyurl.com/4kw9rakp'
    },
    {
      name: 'twitter',
      imgSrc: '/images/twitter.png',
      href: 'https://twitter.com/vermibus'
    },
    {
      name: 'instagram',
      imgSrc: '/images/instagram.png',
      href: 'https://www.instagram.com/vermibus/'
    }
  ]

  return <div className="flex justify-center">
    {communicationChannels.map(({ name, href, imgSrc }) => {
      return <div key={name} className="mx-2">
        <a className="w-max" href={href} target="_blank" rel="noreferrer">
          <Image
            alt={name}
            src={imgSrc}
            layout="intrinsic"
            width={60}
            height={60}
          />
        </a>
      </div>
    })}
  </div>
}
