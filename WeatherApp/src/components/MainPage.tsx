import Rain from '../images/rain.webp'

export const MainPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={Rain} alt="Rain" className='w-full absolute inset-0 h-full ovject-cover z-0' />
      <div className='bg-black w-full h-full opacity-20 z-10 p-4'>

      </div>
    </div>
  )
}
