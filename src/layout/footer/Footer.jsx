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
    <div className='w-[90%] m-auto'>
      
    <div className='flex justify-between'>
      {/* LEFT LOGO */}
      <div className='w-[30%]'>
        <Link to={"/"} className='text-primary font-bold text-[32px]'>MORENT</Link>
        <p className='text-[16px] text-[#13131399]'>Our vision is to provide convenience and help increase your sales business.</p>
      </div>

      {/* RIGHT LINKS */}
      <div className='flex gap-10 '>
        {
          menu.map((item) => {
            return (
              <div key={item.name}>
                <h3 className='font-bold text-[20px] mb-[20px]'>{item.name}</h3>
                <ul>
                  {item.links.map((item) => <li className='text-[#13131399]'>{item}</li>)}
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
    <hr className=''/>
    </div>
  )
}

export default Footer



