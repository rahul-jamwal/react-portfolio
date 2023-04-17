import Head from "next/head"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Image from "next/image"
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Rahul Jamwal Portfolio</title>
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons"> Developed By Rahul Jamwal</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=>{setDarkMode(!darkMode)}} className="cursor-pointer text-2xl" /></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" herf="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Rahul Jamwal</h2>
            <h3 className="text-2xl py-2">Competitive Coder| MERN Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative overflow-hidden mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Things I do</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              lorem upsun compiled client and sefer sucestiom ni asda aswqwqwnsas in eq2 seconds how to use djikstra's algorithm.
              <span className="text-teal-500">I like listening to music</span> Even Tho I don't have a music taste haww.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              lorem upsun compiled client and sefer sucestiom ni asda aswqwqwnsas in eq2 seconds how to use djikstra's algorithm.
              <span className="text-teal-500">I like listening to music</span> Even Tho I don't have a music taste haww.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg ">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs whatever I'm just copying this shit
              </p>
              <h4 className="py-4 text-teal-600">Design tools to use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs whatever I'm just copying this shit
              </p>
              <h4 className="py-4 text-teal-600">Design tools to use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs whatever I'm just copying this shit
              </p>
              <h4 className="py-4 text-teal-600">Design tools to use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
