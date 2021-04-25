import Image from 'next/image'
import Head from 'next/head'
import Button from '../components/button'
import {
  collectionLink,
  exhibits,
  communicationChannels
} from '../lib/data'

export default function HomePage () {
  return <div className="">
  <Head>
    <title>VERMIBUS “IMMERSION”</title>
    <link rel="icon" href="/favicon.png" />
  </Head>
  <main>
    <div className="relative max-w-screen-xl mx-auto mt-2"
      style={{
        background: 'linear-gradient(#101010, transparent 20% 80%, #101010), linear-gradient(to right, #101010, transparent 20% 80%, #101010)'
      }}
    >
      <Image
        priority
        className="absolute z-[-1]"
        alt="VR headset recommended"
        src="/images/vr_headset.jpg"
        quality={80}
        layout="responsive"
        width={4935}
        height={3290}
      />
    </div>
    <div className="relative max-w-screen-lg px-4 mx-auto -top-8 sm:-top-16 md:-top-40">
      <h1 className="mb-2 text-[32px] font-black sm:text-5xl">
        VERMIBUS “IMMERSION”
      </h1>
      <h2 className="text-[20px] font-bold leading-none sm:text-2xl">
        An ongoing series of documented urban interventions in which the artist emphasizes the context of his work through fully immersive 360 VR experiences.
      </h2>
    </div>
    <div className="relative max-w-screen-lg px-4 mx-auto md:-top-24">
      <div className="space-y-4 font-light sm:text-xl">
        <div className="text-2xl font-black leading-tight sm:text-3xl">
          The vision
        </div>
        <div className="leading-tight">
          By capturing the context of the intervention, Vermibus offers the viewer the opportunity to be part of that moment in space and time. Using the possibilities of 360° audiovisual technology paired with the blockchain, the artist documents his installations and offers them as NFT collections.
        </div>
        <div className="leading-tight">
          In collaboration with Experience Designer <a href="https://www.linkedin.com/in/juancacardell/" className="text-[#fdefa6] font-bold" target="_blank" rel="noreferrer">Juanca Cardell</a>, this project has been conceptualized and developed to challenge the ephemerality of conventional urban interventions, allowing the viewer to experience Vermibus’ installations long after they are gone. This project represents an innovative attempt to solve one of the biggest problems when exhibiting street art - the lack of its original context.
        </div>
      </div>
      {exhibits.map(({ description, dates, location, vrLink, previewImage, artwork }) => {
        return <div key={location} className="pt-6">
          <div className="relative" style={{ background: 'linear-gradient(#101010, transparent 20% 80%, #101010)' }}>
            <Image
              priority
              className="absolute z-[-1]"
              alt={`Artwork in ${location}`}
              src={previewImage.src}
              quality={90}
              layout="responsive"
              width={previewImage.width}
              height={previewImage.height}
            />
          </div>
          <div className="flex items-center justify-between mt-16 sm:justify-start sm:space-x-8">
            <div className="flex flex-col">
              <div className="text-2xl font-black leading-none sm:text-3xl">{location}</div>
              <div className="text-base font-bold sm:text-xl">{dates[0]} - {dates[1]}</div>
            </div>
            <div className="w-16">
              <a href={vrLink} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <defs>
                      <filter id="ke4km09n0a" width="134.6%" height="134.6%" x="-17.3%" y="-17.3%" filterUnits="objectBoundingBox">
                          <feMorphology in="SourceAlpha" operator="dilate" radius="1.5" result="shadowSpreadOuter1"/>
                          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
                          <feMorphology in="SourceAlpha" radius="3.5" result="shadowInner"/>
                          <feOffset in="shadowInner" result="shadowInner"/>
                          <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
                          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
                          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109948645 0"/>
                      </filter>
                      <rect id="xqhua06j5b" width="52" height="52" x="0" y="0" rx="26"/>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                      <g>
                          <g>
                              <g transform="translate(-340 -1221) translate(346 1227)">
                                  <use fill="#000" filter="url(#ke4km09n0a)" href="#xqhua06j5b"/>
                                  <rect width="50" height="50" x="1" y="1" stroke="#FFF" strokeLinejoin="square" strokeWidth="2" rx="25"/>
                              </g>
                              <g fill="#FFF" fillRule="nonzero">
                                  <path d="M8.692 0C3.899 0 0 3.9 0 8.692c0 5.948 7.778 14.68 8.11 15.048.31.347.854.346 1.164 0 .331-.368 8.11-9.1 8.11-15.048 0-4.793-3.9-8.692-8.692-8.692zm0 13.065c-2.411 0-4.373-1.962-4.373-4.373 0-2.411 1.962-4.373 4.373-4.373 2.411 0 4.373 1.962 4.373 4.373 0 2.411-1.962 4.373-4.373 4.373z" transform="translate(-340 -1221) translate(346 1227) translate(17 14)"/>
                              </g>
                          </g>
                      </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-2 font-light sm:text-xl ">
            <div className="leading-tight">{description}</div>
          </div>
          <div className="grid gap-8 pt-6 md:grid-cols-2">
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
                <div className="absolute bottom-0 flex items-center justify-between w-full px-1 sm:px-4">
                  <div className="flex flex-col">
                    <div className="font-bold sm:text-xl">{location} {index + 1}/{artwork.length}</div>
                    <div className="space-x-2 text-[15px] font-light sm:text-[19px]">
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
      <div className="flex flex-col items-center py-8 space-y-4">
        <div className="space-y-4 font-light sm:text-xl ">
          <div className="leading-tight">
            With the purchase of these NFTs, you’re acquiring not only the original high-resolution digital artwork files, but an indelible signature of the artist and all transactions associated with the artwork in the form of a smart contract that lives on the Ethereum blockchain — which translates into digital proof of authenticity and uniqueness.
          </div>
          <div className="leading-tight">
            Additionally, you also support the artist and contribute to his efforts to make urban space interventions accessible to the world, while also becoming a patron for digital street art preservation. Your profile name and wallet address will be featured under the public version of the artwork accordingly.
          </div>
        </div>
        <a className="w-full pt-8 sm:w-max" href={collectionLink} target="_blank" rel="noreferrer">
          <Button large>BUY COLLECTION ON OPENSEA</Button>
        </a>
      </div>
      <div className="py-12 space-y-8">
        {[1, 2, 3, 4].map(item => {
          return <div key={item} className="w-full" style={{ background: 'linear-gradient(#101010, transparent 20% 80%, #101010)' }}>
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
      <div className="text-2xl font-bold sm:text-3xl">
        About Vermibus
      </div>
      <div className="flex flex-col flex-wrap py-8 sm:flex-row">
        <div className="order-2 w-full space-y-4 sm:w-1/2 sm:order-1">
          <div style={{ background: 'linear-gradient(#101010, transparent 20% 80%, #101010)' }}>
            <Image
              className="absolute z-[-1] rounded"
              alt="Vermibus"
              src={'/images/vermibus.jpg'}
              quality={90}
              layout="responsive"
              width={800}
              height={1200}
            />
          </div>
          <div className="md:hidden">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Learn More
              </Button>
            </a>
          </div>
          <div className="md:hidden">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Download the press kit
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 w-full pb-4 space-y-4 font-light sm:pb-0 sm:w-1/2 sm:text-xl sm:order-2 sm:pl-8">
          <div className="leading-tight">
            The Berlin-based artist and activist Vermibus has developed a unique practice centered around the critique of contemporary beauty standards. He comments on the attempts of advertisement and consumer society in general that aim to take away individual identities only to replace them with those of a certain brand.
          </div>
          <div className="leading-tight">
            This artist bases his practice on targeting the depersonalizing effects of advertising, which he negates by exaggerating. He removes official poster ads from the public space and alters them in his studio by applying chemical solvents to the image. He dissolves the face and flesh of the models appearing in the campaigns, smudges and erases brand logos, and then intervenes in the space in order to return the resignified ads into their original context.
          </div>
          <div className="leading-tight">
            Through this resignification, Vermibus humanizes the figures that were previously depersonalized as a means of launching a sharp social critique of the advertising industry and their practices on the human body.
          </div>
          <div className="hidden md:block">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Learn More
              </Button>
            </a>
          </div>
          <div className="hidden md:block">
            <a className="w-max" href="https://vermibus.com/" target="_blank" rel="noreferrer">
              <Button large>
                Download the press kit
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8 space-x-4">
        {communicationChannels.map(({ name, href, imgSrc }) => {
          return <div key={name}>
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
    </div>
    <div className="py-4 font-light text-center">
      © VERMIBUS, 2021
    </div>
  </main>
</div>
}
