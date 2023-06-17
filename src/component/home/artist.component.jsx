export default function Artist(){
return (
  <div className="lg:flex flex-auto justify-between max-w-full lg:my-48 lg:px-40 px-14" id="artist">
    <div className="lg:flex lg:flex-1 lg:flex-col lg:mr-5 mb-7">
    <h1 className="relative lead-[8.5rem] mb-7 text-3xl block font-bold">ARTIST</h1>
    <p className="block items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint fugiat nulla odio eligendi voluptas repellat quo mollitia voluptatibus aut a architecto, veritatis nostrum, aliquid sunt possimus maxime? Quisquam, atque.
    Neque repellat explicabo, fuga placeat alias nobis error sequi voluptates deleniti! Accusantium nesciunt error voluptas nulla aliquam in quia eius, harum, eaque cum tempore minima laudantium! Quod, exercitationem accusamus. Cupiditate?</p>
    </div>
    <div>
      <img className="lg:w-64" src="./image/avatarUser.jpg"/>
    </div>
  </div>
)
}
