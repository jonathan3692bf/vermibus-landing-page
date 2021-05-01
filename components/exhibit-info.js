import Image from 'next/image'
import Button from './button'

export function ArtworkCard ({
  index = 0,
  coordinates = {},
  previewImage = {},
  location = '',
  totalPieces = 0,
  link = ''
}) {
  return <div key={`${coordinates.x}-${coordinates.y}`}>
    <a href={link} target="_blank" rel="noreferrer">
      <div className="relative">
        <Image
          className="absolute z-[-1] rounded"
          alt={`Artwork in ${location}, piece number ${index + 1}`}
          src={previewImage.src}
          // quality={90}
          layout="responsive"
          width={previewImage.width}
          height={previewImage.height}
        />
        <div className="absolute bottom-0 flex items-center justify-between w-full p-2 md:p-4">
          <div className="flex flex-col">
            <div className="font-bold sm:text-xl">{location} {index + 1}/{totalPieces}</div>
            <div className="space-x-2 text-[15px] font-light sm:text-[19px]">
              <span>X: {coordinates.x}</span>
              <span>Y: {coordinates.y}</span>
            </div>
          </div>
          <Button small>View 360/VR</Button>
        </div>
      </div>
    </a>
  </div>
}

export default function ExhibitInfo ({
  location = '',
  description = '',
  dates = [],
  vrLink = '',
  previews = []
}) {
  return <div className="space-y-6" key={location}>
    <div className="flex items-end justify-between sm:justify-start sm:space-x-8">
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
    <div className="leading-tight">{description}</div>
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {previews.map((item, index) => {
        return <ArtworkCard key={index} {...item} location={location} index={index} totalPieces={previews.length}/>
      })}
    </div>
  </div>
}
