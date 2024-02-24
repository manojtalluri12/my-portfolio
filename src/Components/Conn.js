import React from 'react'
import './skills.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsBrowserChrome } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Conn = () => {
  return (
    <div className='confo'>
        <div className='inonetwo'>
        <div className='oneofftheside'>
           <div className='onelinks'>
            <p className='fve'> <BsFillTelephoneFill className='o'/> <p className='o'>+916305414841</p> </p>
            <p className='fve'> <BsBrowserChrome className='o'/><p className='o'> https://manojkumar-portfolio.netlify.app</p></p>
            <p className='fve'> <AiOutlineMail className='o'/><p className='o'>manojkumar.cse123@gmail.com</p></p>
            <p className='fve'><FaUniversity className='o'/> <p className='o'>Andhra Pradesh</p> </p>
           </div>
           <div className='twolinks'>
             <Link  to="https://www.linkedin.com/in/manoj-kumar-talluri-a26102188/"  className='oo'><BsLinkedin size={20}/></Link>
             <Link to="https://github.com/manojtalluri12?tab=repositories" className='oo'><BsGithub size={20} /></Link>
             <Link to='https://www.instagram.com/manoj_13579_/' className='oo'><BsInstagram size={20} /></Link>
             <Link  to="https://www.youtube.com/channel/UCmxSNsi-qybHqkOFly_cLeg" className='oo'><BsYoutube size={20} /></Link>
           </div>
        </div>
        <div className='twoofftheside'>
          <div className='forms'>
            <input type='text' placeholder='Enter Your Name' className='onetext'/>
            <input type='text' placeholder='Enter Your Mail' className='onetext'/>
            <textarea type='text' placeholder='Enter Message' className='onetext'/>
            <button className='subbuton'>Submit</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Conn