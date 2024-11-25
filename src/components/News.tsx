import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const news = [
  {
    image: "/news-image0.jpeg", title: `You are cordially invited to join the University as we celebrate our 48th Convocation Ceremony
 November 19, 2024`, date: "November 24 2024", link: "https://oauife.edu.ng/you-are-cordially-invited-to-join-the-university-as-we-celebrate-our-48th-convocation-ceremony/"
  },
  {
    image: "/news-image7.jpeg", title: `Faculty of Agriculture 13th Faculty Lecture & Awards
 November 4, 2024`, date: "November 24 2024", link: "https://oauife.edu.ng/faculty-of-agriculture13th-faculty-lecture-awards/"
  },
  {
    image: "/news-image4.jpeg", title: `Obafemi Awolowo University Celebrates Professor Celestine Iwendi’s Promotion to Professor of AI at the University of Bolton`, date: "November 24 2024", link: "https://oauife.edu.ng/obafemi-awolowo-university-celebrates-professor-celestine-iwendis-promotion-to-professor-of-ai-at-the-university-of-bolton/"
  },
  { image: "/news-image3.jpeg", title: `THE UNIVERSITY ADVANCEMENT OFFICE PRESENTS ISE 2.0`, date: "November 24 2024", link: "https://oauife.edu.ng/the-2024-mega-innovative-bootcamp-a-showcase-of-youth-research-facilitators-skills-and-innovation/" },
  { image: "/news-image8.jpg", title: "The 2024 Mega Innovative Bootcamp: A Showcase of Youth Research Facilitators’ Skills and Innovation", date: "November 24 2024", link: "https://oauife.edu.ng/the-2024-mega-innovative-bootcamp-a-showcase-of-youth-research-facilitators-skills-and-innovation/" },
  {
    image: "/Adegbulugbe-AEW.jpg", title: `
OAU Academic Research Excellence Awardee & Ambassador, Prof.Anthony Adegbulugbe Provides Insight on Boosting Aggregate National Crude Oil Production at 2024 African Energy Week(AEW)`, date: "November 24 2024", link: "https://oauife.edu.ng/oau-academic-research-excellence-awardee-ambassador-prof-anthony-adegbulugbe-provides-insight-on-boosting-aggregate-national-crude-oil-production-at-2024-african-energy-week-aew/"
  },

]
const News = () => {
  return (
    <section className='text-xl py-24 my-8'>
      <h1 className='text-center text-4xl text-slate-700 font-[family-name:var(--font-quicksand)] font-semibold  mb-10 md:absolutetext-5xl'>
        News and Events
      </h1>
      <div className='max-width md:gap-12 gap-6 animate-gradient flex max-sm:flex-col max-md:py-12  px-5 md:px-12 items-center min-h-[20rem] bg-left-top rounded-3xl bg-gradient-to-br bg-clip-padding from-blue-600  to-violet-400'>
        <div className='text-balance flex-[2] flex items-center flex-col'>
          <h1 className='text-white   lg:text-5xl font-semibold'>48th Convocation: Intention to Join the University Procession</h1>
          <p className='text-sm leading-5 mt-4 text-white'>48th Convocation: Intention to Join the University Procession The Ceremonials Committee invites members of staff interested in the processions for...</p>
        </div>
        <div className='flex-1 flex justify-end'>
          <Link href="https://oauife.edu.ng/48th-convocation-intention-to-join-the-university-procession/">
            <button className='bg-white max-md:w-full max-md:text-sm text-black p-3 px-5 rounded-xl'>Read More</button>
          </Link>
        </div>
      </div>

      <div className='max-width my-4 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 *-border-neutral-300 gap-4'>
        {
          news.slice(0, 4).map(({ date, image, title, link }, index) => {
            return (
              <Link href={link} key={index}>
                <div className='relative rounded-2xl border-neutral-300  overflow-hidden'>
                  <div className='relative w-full bg-slate-600/20 overflow-hidden rounded-2xl min-h-[15rem]  duration-150'>
                    <Image style={{ "position": "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} src={image} alt="title" width={1000} className='absolute top-0  bg-cover bg-center bottom-0 left-0 right-0' height={1000} />
                  </div>
                  <p className='text-black  px-0 text-sm text-left p-3'>{title}</p>
                </div>
              </Link>

            )
          })
        }
        {
          news.slice(4, 6).map(({ date, title, image, link }, index) => {
            return (
              <Link href={link} className='w-full col-span-2' key={index}>
                <div className='h-[20rem] bg-slate-600/20 col-span-2 relative  group rounded-2xl border-neutral-300 cursor-pointer border overflow-hidden'>
                  <div className='relative w-full h-full  group-hover:brightness-[.3] transition-all duration-150'>
                    <Image style={{ "position": "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} src={image} alt="title" width={2000} className='absolute top-0  h-full bg-cover bg-center bottom-0 w-full left-0 right-0' height={2000} />
                  </div>

                  <span className='absolute left-[50%] font-[family-name:var(--font-grosek)] font-medium -translate-y-[50%] -translate-x-[50%] z-[12] top-[200%] transition-all duration-500 group-hover:top-[50%] text-white w-full px-3 text-3xl text-center'>{title}</span>
                </div>
              </Link>

            )
          })
        }

      </div>
    </section >
  )
}

export default News