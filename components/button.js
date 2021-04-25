export default function Button ({
  small = false,
  large = false,
  children
}) {
  let offset = ''
  let padding = ''
  let textSize = ''
  if (small) {
    offset = 'top-[1px]'
    textSize = 'text-xs'
    padding = 'py-3 px-4'
  } else if (large) {
    offset = 'top-[2px]'
    textSize = 'text-base'
    padding = 'py-5 px-8'
  }

  return <div className={`relative ${padding} leading-none font-black flex justify-center text-black uppercase bg-white rounded-full `}>
    <div className={`relative ${offset} ${textSize} w-max`}>
      {children}
    </div>
  </div>
}
