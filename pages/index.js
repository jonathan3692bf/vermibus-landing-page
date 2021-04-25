import Image from 'next/image'
import Head from 'next/head'
import Button from '../components/button'

const collectionLink = 'https://opensea.io/collection/vermibus-immersion'
const exhibits = [
  {
    location: 'U Schloßstraße',
    description: 'In the first collection, the artist presents a series of four interventions installed in Berlin’s futuristic brutalist subway station U-Bhf. Schloßstraße, which were displayed for five days before being replaced by the OoH advertising company.',
    dates: ['2021-04-01', '2021-04-06'],
    vrLink: 'https://tour-de.metareal.com/apps/player?asset=c6f3dd0f-3fe5-439b-a514-4ff2e2bb97e9',
    previewImage: {
      src: '/images/card_4_setting.jpg',
      width: 5905,
      height: 3937
    },
    artwork: [
      {
        coordinates: { x: 52.46146778, y: 13.32513895 },
        link: 'https://www.youtube.com/watch?v=e4-RGKhCG3s',
        previewImage: {
          src: '/images/cards/1.png',
          width: 1488,
          height: 879
        }
      },
      {
        coordinates: { x: 52.46140147, y: 13.32517213 },
        link: 'https://www.youtube.com/watch?v=FgUcRVH8NHU',
        previewImage: {
          src: '/images/cards/2.png',
          width: 1488,
          height: 879
        }
      },
      {
        coordinates: { x: 52.46146778, y: 13.32513896 },
        link: 'https://www.youtube.com/watch?v=hKy2Gm2lRtM',
        previewImage: {
          src: '/images/cards/3.png',
          width: 1488,
          height: 879
        }
      },
      {
        coordinates: { x: 52.46144351, y: 13.32514750 },
        link: 'https://www.youtube.com/watch?v=pjBkpsBFr_E',
        previewImage: {
          src: '/images/cards/4.png',
          width: 1488,
          height: 879
        }
      }
    ]
  }
]

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

export default function HomePage () {
  return <div className="">
  <Head>
    <title>VERMIBUS “IMMERSION”</title>
    <link rel="icon" href="/favicon.png" />
  </Head>
  <main>
    <div className="relative max-w-screen-xl mx-auto mt-2"
      style={{
        background: 'radial-gradient(closest-side, transparent 75%, black)'
      }}
    >
      <Image
        className="absolute z-[-1]"
        alt="VR headset recommended"
        src="/images/vr_headset.jpg"
        quality={80}
        // layout="fill"
        // objectFit="none"
        layout="responsive"
        width={4935}
        height={3290}
      />
    </div>
    <div className="relative max-w-screen-lg px-4 mx-auto -top-8 sm:-top-16 md:-top-40">
      <h1 className="mb-2 text-2xl font-bold md:mb-3 md:text-4xl">
        VERMIBUS “IMMERSION”
      </h1>
      <h2 className="text-sm font-medium leading-tight md:text-lg">
        An ongoing series of documented urban interventions in which the artist emphasizes the context of his work through fully immersive 360 VR experiences.
      </h2>
    </div>
    <div className="relative max-w-screen-lg px-4 mx-auto md:-top-24">
      <div className="space-y-4 text-sm font-light leading-tight">
        <h2 className="text-lg font-bold md:text-xl">
          The vision
        </h2>
        <div>
          By capturing the context of the intervention, Vermibus offers the viewer the opportunity to be part of that moment in space and time. Using the possibilities of 360° audiovisual technology paired with the blockchain, the artist documents his installations and offers them as NFT collections.
        </div>
        <div>
          In collaboration with Experience Designer <a href="https://juancacardell.com" className="text-[#fdefa6] font-normal">Juanca Cardell</a>, this project has been conceptualized and developed to challenge the ephemerality of conventional urban interventions, allowing the viewer to experience Vermibus’ installations long after they are gone. This project represents an innovative attempt to solve one of the biggest problems when exhibiting street art - the lack of its original context.
        </div>
      </div>
      {exhibits.map(({ description, dates, location, vrLink, previewImage, artwork }) => {
        return <div className="py-4" key={location}>
          <div className="relative" style={{ background: 'linear-gradient(black, transparent 20% 80%, black)' }}>
            <Image
              className="absolute z-[-1]"
              alt={`Artwork in ${location}`}
              src={previewImage.src}
              quality={90}
              layout="responsive"
              width={previewImage.width}
              height={previewImage.height}
            />
          </div>
          <div className="flex items-center justify-between mt-4 sm:justify-start sm:space-x-4">
            <div className="flex flex-col">
              <div className="text-xl font-bold uppercase">{location}</div>
              <div className="text-sm font-medium">{dates[0]} - {dates[1]}</div>
            </div>
            <a href={vrLink} target="_blank" rel="noreferrer">
              <div className="p-[6px] border-2 border-white rounded-full w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
          <div className="py-2 text-sm font-light leading-tight">
            {description}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {artwork.map(({ coordinates, link, previewImage }, index) => {
              return <div key={`${coordinates.x}-${coordinates.y}`} className="relative">
                <Image
                  className="absolute z-[-1] rounded"
                  alt={`Artwork in ${location}, piece number ${index + 1}`}
                  src={previewImage.src}
                  quality={90}
                  layout="responsive"
                  width={previewImage.width}
                  height={previewImage.height}
                />
                <div className="absolute bottom-0 flex items-center justify-between w-full px-2 sm:px-4">
                  <div className="flex flex-col">
                    <div className="text-sm font-bold uppercase">{location} {index + 1} / {artwork.length}</div>
                    <div className="space-x-2 text-xs font-thin">
                      <span>X: {coordinates.x}</span>
                      <span>Y: {coordinates.y}</span>
                    </div>
                  </div>
                  <a href={link} target="_blank" rel="noreferrer">
                    <Button small>View 360/VR</Button>
                  </a>
                </div>
              </div>
            })}
          </div>
        </div>
      })}
      <div className="flex flex-col items-center space-y-4 md:items-start">
        <div className="space-y-4 text-sm font-light leading-tight">
          <div>
            With the purchase of these NFTs, you’re acquiring not only the original high-resolution digital artwork files, but an indelible signature of the artist and all transactions associated with the artwork in the form of a smart contract that lives on the Ethereum blockchain — which translates into digital proof of authenticity and uniqueness.
          </div>
          <div>
            Additionally, you also support the artist and contribute to his efforts to make urban space interventions accessible to the world, while also becoming a patron for digital street art preservation. Your profile name and wallet address will be featured under the public version of the artwork accordingly.
          </div>
        </div>
        <a className="w-max" href={collectionLink} target="_blank" rel="noreferrer">
          <Button large>BUY COLLECTION ON OPENSEA</Button>
        </a>
      </div>
      <div className="py-8 space-y-8">
        {[1, 2, 3, 4].map(item => {
          return <div key={item} className="w-full" style={{ background: 'linear-gradient(black, transparent 20% 80%, black)' }}>
            <Image
              className="absolute z-[-1] rounded"
              alt={`Example artwork - ${item}`}
              src={`/images/example_${item}.png`}
              quality={90}
              layout="responsive"
              width={6000}
              height={3989}
            />
          </div>
        })}
      </div>
      <div className="text-xl font-bold sm:text-2xl">
        About Vermibus
      </div>
      <div className="flex flex-col flex-wrap py-8 sm:flex-row">
         <div className="order-2 w-full space-y-4 sm:w-1/2 sm:order-1" style={{ background: 'linear-gradient(black, transparent 20% 80%, black)' }}>
            <Image
              className="absolute z-[-1] rounded"
              alt="Vermibus"
              src={'/images/vermibus.jpg'}
              quality={100}
              layout="responsive"
              width={800}
              height={1200}
            />
            <div className="sm:hidden">
              <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
                <Button large>
                  Learn More
                </Button>
              </a>
            </div>
            <div className="sm:hidden">
              <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
                <Button large>
                  Download the press kit
                </Button>
              </a>
            </div>

        </div>
        <div className="order-1 w-full space-y-4 text-sm font-thin sm:w-1/2 sm:text-base sm:order-2 sm:pl-4">
          <div className="leading-tight">
            The Berlin-based artist and activist Vermibus has developed a unique practice centered around the critique of contemporary beauty standards. He comments on the attempts of advertisement and consumer society in general that aim to take away individual identities only to replace them with those of a certain brand.
          </div>
          <div className="leading-tight">
            This artist bases his practice on targeting the depersonalizing effects of advertising, which he negates by exaggerating. He removes official poster ads from the public space and alters them in his studio by applying chemical solvents to the image. He dissolves the face and flesh of the models appearing in the campaigns, smudges and erases brand logos, and then intervenes in the space in order to return the resignified ads into their original context.
          </div>
          <div className="leading-tight">
            Through this resignification, Vermibus humanizes the figures that were previously depersonalized as a means of launching a sharp social critique of the advertising industry and their practices on the human body.
          </div>
          <div className="hidden sm:block">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Learn More
              </Button>
            </a>
          </div>
          <div className="hidden sm:block">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Download the press kit
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {communicationChannels.map(({ name, href, imgSrc }) => {
          return <div key={name}>
            <a className="w-max" href={href} target="_blank" rel="noreferrer">
              <Image
                alt={name}
                src={imgSrc}
                quality={100}
                layout="intrinsic"
                width={100}
                height={100}
              />
            </a>
          </div>
        })}
      </div>
      <div className="py-8 font-light text-center">
        © VERMIBUS, 2021
      </div>
    </div>
  </main>
</div>
}
