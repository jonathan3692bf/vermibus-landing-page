import Image from 'next/image'
import Head from 'next/head'
import Button from '../components/button'
import ExhibitInfo from '../components/exhibit-info'
import CommunicationChannels from '../components/communication-channels'
import {
  collectionLink,
  exhibits
} from '../lib/data'

export default function HomePage () {
  return <div className="">
  <Head>
    <title>VERMIBUS “IMMERSION”</title>
    <link rel="icon" href="/favicon.png" />
  </Head>
  <main>
    <div className="relative max-w-screen-xl mx-auto" style={{ background: 'linear-gradient(transparent 20% 80%, #101010), linear-gradient(to right, #101010, transparent 20% 80%, #101010)' }}>
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
    <div className="relative max-w-screen-lg px-4 mx-auto space-y-20 font-light sm:text-xl -top-8 sm:-top-16 md:-top-40">
      <div className="pt-20">
        <div className="pb-4 text-2xl font-black sm:text-3xl">
          The vision
        </div>
        <div className="space-y-6 leading-tight">
          <div>
            By capturing the context of the intervention, <a className="text-[#fdefa6] font-bold" href="https://vermibus.com/" target="_blank" rel="noreferrer">Vermibus</a> offers the viewer the opportunity to be part of that moment in space and time. Using the possibilities of 360° audiovisual technology paired with the blockchain, the artist documents his installations and offers them as NFT collections.
          </div>
          <div >
            In collaboration with Experience Designer <a href="https://www.linkedin.com/in/juancacardell/" className="text-[#fdefa6] font-bold" target="_blank" rel="noreferrer">Juanca Cardell</a>, this project has been conceptualized and developed to challenge the ephemerality of conventional urban interventions, allowing the viewer to experience Vermibus’ installations long after they are gone. This project represents an innovative attempt to solve one of the biggest problems when exhibiting street art - the lack of its original context.
          </div>
          <div className="relative" style={{ background: 'linear-gradient(#101010, transparent 20% 80%, #101010)' }}>
            <Image
              priority
              className="absolute z-[-1]"
              alt='People walking by artwork'
              src='/images/card_4_setting.jpg'
              quality={90}
              layout="responsive"
              width={5905}
              height={3937}
            />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {exhibits.map((exhibit, index) => {
          return <ExhibitInfo key={index} {...exhibit}/>
        })}
        <div className="leading-tight">
          With the purchase of these NFTs, you’re acquiring not only the original high-resolution digital artwork files, but an indelible signature of the artist and all transactions associated with the artwork in the form of a smart contract that lives on the Ethereum blockchain — which translates into digital proof of authenticity and uniqueness.
        </div>
        <div className="leading-tight">
          Additionally, you also support the artist and contribute to his efforts to make urban space interventions accessible to the world, while also becoming a patron for digital street art preservation. Your profile name and wallet address will be featured under the public version of the artwork accordingly.
        </div>
        <div className="flex flex-col items-center">
          <a className="w-full sm:w-max" href={collectionLink} target="_blank" rel="noreferrer">
            <Button large>BUY COLLECTION ON OPENSEA</Button>
          </a>
        </div>
      </div>
      <div className="space-y-6">
        {[1, 2, 3, 4].map(item => {
          return <div key={item} className="w-full" style={{ background: 'linear-gradient(#101010, transparent 20% 80%, #101010)' }}>
            <Image
              className="absolute z-[-1] rounded"
              alt={`Example artwork - ${item}`}
              src={`/images/example_${item}.jpg`}
              quality={90}
              layout="responsive"
              width={5594}
              height={3729}
            />
          </div>
        })}
      </div>
      <div>
        <div className="pb-4 text-2xl font-black sm:text-3xl">
          About Vermibus
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row ">
          <div className="order-2 w-full space-y-6 sm:w-1/2 sm:order-1">
            <Image
              className="rounded-lg"
              alt="Vermibus"
              src={'/images/vermibus.jpg'}
              quality={90}
              layout="responsive"
              width={800}
              height={1200}
            />
            <div className="md:hidden">
              <a className="w-max" href="https://mega.nz/folder/DuxylbpS#CodtfRgdeO9PbgYKtH-n1g" target="_blank" rel="noreferrer">
                <Button large>
                  Download the press kit
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 w-full pb-6 space-y-6 leading-tight sm:w-1/2 sm:order-2 sm:pb-0 sm:pl-8">
            <div className="">
              The Berlin-based artist and activist Vermibus has developed a unique practice centered around the critique of contemporary beauty standards. He comments on the attempts of advertisement and consumer society in general that aim to take away individual identities only to replace them with those of a certain brand.
            </div>
            <div className="">
              This artist bases his practice on targeting the depersonalizing effects of advertising, which he negates by exaggerating. He removes official poster ads from the public space and alters them in his studio by applying chemical solvents to the image. He dissolves the face and flesh of the models appearing in the campaigns, smudges and erases brand logos, and then intervenes in the space in order to return the resignified ads into their original context.
            </div>
            <div className="">
              Through this resignification, Vermibus humanizes the figures that were previously depersonalized as a means of launching a sharp social critique of the advertising industry and their practices on the human body.
            </div>
            <div className="hidden md:block">
              <a className="w-max" href="https://mega.nz/folder/DuxylbpS#CodtfRgdeO9PbgYKtH-n1g" target="_blank" rel="noreferrer">
                <Button large>
                  Download the press kit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-8 space-y-4">
      <CommunicationChannels />
      <div className="font-light text-center">
        © VERMIBUS, 2021
      </div>
    </div>
  </main>
</div>
}
