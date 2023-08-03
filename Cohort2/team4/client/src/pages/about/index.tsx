import Image from "next/image"
import image from "../../images/doggy.png"
import mike from "../../images/R.jpg"

const AboutUs = () => {
   return(
    <div className="w-2/3 min-h-screen bg-blue-600 my-0 mx-auto">
        <h1 className="text-center text-5xl font-semibold">Meet the Team!</h1>
        <section>
            <div className=" mt-8  flex items-center flex-col w-full h-2/5">
                <img className="h-2/6 w-72 rounded-full border-black border-solid border-2" src={mike.src}></img>
                <p className="text-3xl">Mike B. </p>
                <p className="text-2xl italic">Team Lead </p>
                <p className="text-xl mt-4 px-8">I am currently thrilled to be a part of Meta's talented team of engineers, where I contribute to shaping the future of technology. At Meta, I play an integral role in the development of innovative products and services that empower millions of users worldwide. Whether it's enhancing user experiences, optimizing performance, or implementing new features, I enjoy the challenges that come with working on the forefront of technology.</p>
            </div>
        </section>
    </div>
   ) 
}

export default AboutUs