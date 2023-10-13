import React from 'react'
import './Gif.css'

const im = [
  {img:"https://sttgdc-prod.s3.ap-southeast-1.amazonaws.com/global_en/public/2022-06/EODF%20-%20homepage%20-%20masthead-banner-test.gif"},
  {img:"https://i.gifer.com/3FmO.gif"},
  {img:"https://cdn.dribbble.com/users/2501555/screenshots/6162791/personal-circle.gif"},
  {img:"https://i.gifer.com/J4x.gif"},
  {img:"https://thumbs.gfycat.com/UnhappyInsecureHamster-max-1mb.gif"},
  {img:"https://miro.medium.com/v2/resize:fit:1200/1*HTC1oMKYwC7a8vUBsiplhw.gif"},
  {img:"https://fasset.id/blog/wp-content/uploads/2020/12/1080-Blog-featured-Crypto-vs-2.gif"},
  {img:"https://news.coincu.com/wp-content/uploads/2022/06/1_jvT5REAJKM3YJiApuRvgXg.gif"},
  {img:"https://www.sovereignconsult.com/wp-content/uploads/2019/07/blockchain-development.gif"},
  {img:"https://squbix.com/static/media/OurProducts.280be9f036a51e2f908c.gif"},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSB2_8kHLB-BAAdxH5GBkj--ZkqbcLHKziqmuHfrrIB-guxeEgrwUTHIzVhzmC5rFzz3c&usqp=CAU"},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tnsvUpRQEZ8jRNL1IRWUTRqaGaiEd3fNCpsCoG48pnH34AGIeXHf8VSm9z4yUXIgBvU&usqp=CAU"},
  {img:"https://i.pinimg.com/originals/1e/a2/bf/1ea2bf43d262adc533f6ba78a7772a9c.gif"},
  {img:"https://i.gifer.com/5VsC.gif"},
  {img:""},
  {img:""},
  {img:""},
  

]

const color= [
 " background-color: rgb(16, 144, 167);",
 "cadetblue",
 "#ffc107 yellow",

]


function Gif() {
  return (
    <div className='gif-image-container' >

{/* {
  im.map((el,i)=>{
    return <div key={i}>

<img src={el.img} alt="" />
      </div>
  })
} */}

<div><img  src="https://sttgdc-prod.s3.ap-southeast-1.amazonaws.com/global_en/public/2022-06/EODF%20-%20homepage%20-%20masthead-banner-test.gif" alt="" /></div>
<div><img  src="https://i.gifer.com/3FmO.gif" alt="" /></div>
<div><img  src="https://cdn.dribbble.com/users/2501555/screenshots/6162791/personal-circle.gif" alt="" /></div>
<div><img  src="https://i.gifer.com/J4x.gif" alt="" /></div>
<div><img  src="https://thumbs.gfycat.com/UnhappyInsecureHamster-max-1mb.gif" alt="" /></div>

<div><img  src="https://miro.medium.com/v2/resize:fit:1200/1*HTC1oMKYwC7a8vUBsiplhw.gif" alt="" /></div>
<div><img  src="https://fasset.id/blog/wp-content/uploads/2020/12/1080-Blog-featured-Crypto-vs-2.gif" alt="" /></div>
<div><img  src="https://news.coincu.com/wp-content/uploads/2022/06/1_jvT5REAJKM3YJiApuRvgXg.gif" alt="" /></div>
<div><img  src="https://www.sovereignconsult.com/wp-content/uploads/2019/07/blockchain-development.gif" alt="" /></div>
<div><img  src="https://squbix.com/static/media/OurProducts.280be9f036a51e2f908c.gif" alt="" /></div>
<div><img  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3b7ca174159661.5c24907f9722e.gif" alt="" /></div>
<div><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tnsvUpRQEZ8jRNL1IRWUTRqaGaiEd3fNCpsCoG48pnH34AGIeXHf8VSm9z4yUXIgBvU&usqp=CAU" alt="" /></div>
<div><img  src="https://i.pinimg.com/originals/1e/a2/bf/1ea2bf43d262adc533f6ba78a7772a9c.gif" alt="" /></div>
<div><img  src="https://i.gifer.com/5VsC.gif" alt="" /></div>
<div><img  src="" alt="" /></div>
<div><img  src="" alt="" /></div>
<div><img  src="" alt="" /></div>

    </div>
  )
}

export default Gif