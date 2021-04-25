import Image from 'next/image'
import Head from 'next/head'

const exhibits = [
  {
    location: 'U Schloßstraße',
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
        coordinates: { x: 52.46146778, y: 13.32513895 },
        link: 'https://www.youtube.com/watch?v=FgUcRVH8NHU',
        previewImage: {
          src: '/images/cards/2.png',
          width: 1488,
          height: 879
        }
      },
      {
        coordinates: { x: 52.46146778, y: 13.32513895 },
        link: 'https://www.youtube.com/watch?v=hKy2Gm2lRtM',
        previewImage: {
          src: '/images/cards/3.png',
          width: 1488,
          height: 879
        }
      },
      {
        coordinates: { x: 52.46146778, y: 13.32513895 },
        link: 'https://www.youtube.com/watch?v=pjBkpsBFr_E',
        previewImage: {
          src: '/images/cards/4.png',
          width: 1488,
          height: 879
        }
      }
    ],
    collectionLink: 'https://opensea.io/collection/vermibus-immersion'
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
      {exhibits.map(exhibit => {
        const { previewImage } = exhibit
        return <div className="py-4">
          <div className="relative" style={{ background: 'linear-gradient(black, transparent 20% 80%, black)' }}>
            <Image
              className="absolute z-[-1]"
              alt={`Artwork in ${exhibit.location}`}
              src={previewImage.src}
              quality={80}
              // layout="fill"
              // objectFit="none"
              layout="responsive"
              width={previewImage.width}
              height={previewImage.height}
            />
          </div>
          <div className="flex items-center justify-between mt-4 sm:justify-start sm:space-x-4">
            <div className="flex flex-col">
              <div className="text-xl font-bold uppercase">{exhibit.location}</div>
              <div className="text-sm font-medium">{exhibit.dates[0]} - {exhibit.dates[1]}</div>
            </div>
            <a href={exhibit.vrLink} target="_blank" rel="noreferrer">
              <div className="p-[6px] border-2 border-white rounded-full w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
          <div className="py-2 text-sm font-light leading-tight">
            In the first collection, the artist presents a series of four interventions installed in Berlin’s futuristic brutalist subway station U-Bhf. Schloßstraße, which were displayed for five days before being replaced by the OoH advertising company.
          </div>
        </div>
      })}

    </div>
    {/* <div className="absolute bottom-0 flex w-full pt-18">
        <div className="max-w-screen-lg px-4 mx-auto">
          <h1 className="text-2xl font-bold">
            VERMIBUS “IMMERSION”
          </h1>
          <h2 className="text-lg leading-tight">
            An ongoing series of documented urban interventions in which the artist emphasizes the context of his work through fully immersive 360 VR experiences.
          </h2>
        </div>
      </div> */}
  </main>
</div>
}
