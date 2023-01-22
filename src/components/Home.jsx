import React from 'react'
import vg from '../assests/2.webp'
import {Footer} from './Footer.jsx'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className='home' id="home">
      <main>
        <h1>Vikas bhardwaj</h1>
        <p>solution to all your prgrams</p>
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>who we are</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et cum nostrum reprehenderit eligendi ducimus dignissimos pariatur sed consequuntur provident. Vero voluptatem delectus ratione dolor exercitationem aperiam blanditiis quod magnam. Dolorum distinctio sed, nisi perferendis placeat exercitationem quaerat alias tempora porro, culpa, aliquam provident? Qui odit rem nisi quidem quasi.</p>

      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>
          brands
        </h1>
        <article>
          <div style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle/>
            <p>google</p>
          </div>
          <div style={{animationDelay: "0.5s"}}>
            <AiFillAmazonCircle/>
            <p>amazon</p>
          </div>
          <div style={{animationDelay: "0.5s"}}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>

          <div style={{animationDelay: "0.5s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>



        </article>
      </div>
    </div>

    </>
  )
}

export default Home