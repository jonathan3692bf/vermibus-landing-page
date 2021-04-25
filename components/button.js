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
    textSize = 'text-xs '
    padding = 'py-2 px-4'
  } else if (large) {
    offset = 'top-[3px]'
    textSize = 'text-base'
    padding = 'py-4 px-8'
  }

  return <div className={`relative ${padding} ${textSize} leading-none font-bold flex justify-center text-black uppercase bg-white rounded-full `}>
    <div className={`relative ${offset} w-max`}>
      {children}
    </div>
  </div>
}
