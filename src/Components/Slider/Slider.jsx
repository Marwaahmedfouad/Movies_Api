import { useState } from "react"
export default function Slider() {
  let arr=[
   
    "https://c4.wallpaperflare.com/wallpaper/956/30/347/anime-anime-girls-original-characters-short-hair-wallpaper-thumb.jpg",
    // "https://c4.wallpaperflare.com/wallpaper/631/85/159/room-anime-girls-original-characters-anime-wallpaper-thumb.jpg",
    // "https://c4.wallpaperflare.com/wallpaper/631/85/159/room-anime-girls-original-characters-anime-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/757/246/501/women-school-uniform-computer-brunette-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/631/85/159/room-anime-girls-original-characters-anime-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/19/204/883/anime-anime-girls-school-uniform-original-characters-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/686/7/818/anime-anime-girls-car-ferrari-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/131/826/457/creativity-anime-girls-school-trees-wallpaper-thumb.jpg",
  ]
  const [imgs, setImgs] = useState(arr)
  const [index, setIndex] = useState(0)
  return (
<>
<div className="text-center">
<img src={imgs[index]} alt=""/>
</div>
<div className="container d-flex justify-content-center py-3">
<div className="mx-3 btn btn-outline-dark">
  <button onClick={ ()=>{console.log(index)
     index < 5 ? setIndex((oldinx)=>oldinx+1) : setIndex(0) }}> Next </button>
  </div>
  <div className="mx-3 btn btn-outline-dark">
  <button onClick={ ()=> {console.log(index)
    index > 0 ? setIndex((oldinx)=>oldinx-1) : setIndex(5) }}> Previous </button>
  </div>
</div>
<div className="row">
</div>
</>    
  )
}
