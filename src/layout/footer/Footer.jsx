import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const menu = [{
    name: "About",
    links: ["How it works", "Featured", "Partnership", "Bussiness Relation"]

  },
  {
    name: "Community",
    links: ["Events", "Blog", "Podcast", "Invite a friend"]
  },
  {
    name: "Socials",
    links: ["Discord", "Instagram", "Twitter", "Facebook"]
  }
  ]
  return (
    <div className='w-[90%] m-auto pt-10'>

      <div className='flex flex-wrap gap-10 justify-between'>
        {/* LEFT LOGO */}
        <div className='lg:w-[30%]'>
          <Link to={"/"} className='text-primary font-bold text-[32px]'>MORENT</Link>
          <p className='text-[16px] text-[#13131399] mt-5'>Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        {/* RIGHT LINKS */}
        <div className='flex flex-wrap gap-10 '>
          {
            menu.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className='font-bold text-[20px] mb-[20px]'>{item.name}</h3>
                  <ul className='flex flex-col gap-5'>
                    {item.links.map((item, index) => <li key={index} className='text-[#13131399]'>{item}</li>)}
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>


      <hr className='my-10 border-accent' />

      <div className='flex flex-wrap gap-8 justify-between font-bold mb-10'>
        <div>©2022 MORENT. All rights reserved</div>
        <div className='flex gap-10'>
          <div>Privacy & Policy</div>
          <div>Terms & Condition</div>
        </div>
      </div>

    </div>
  )
}

export default Footer



