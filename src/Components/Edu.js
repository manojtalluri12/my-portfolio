import React from 'react'
import './skills.css'
const Education = () => {
  const data=[
    {
      id:'dd',
      img:'https://manoj-ceo-site.netlify.app/MNJ.jpeg',
      clg:'Pragathi Vidhya Nilyam',
      year:'2015-2016',
      percentage:'CGPA:9.0/10.0',
      schoolname:'HIGH SCHOOL EDUCATION',
      area:'Kanigiri,Andhra Pradesh',
    },
    {
      id:'djd',
      img:'https://manoj-ceo-site.netlify.app/MNJ.jpeg',
      clg:'NRI JUNIOR COLLEGE',
      year:'2016-2018',
      percentage:'Percentage: 92%',
      schoolname:'INTERMEDIATE',
      area:'Main Road, Eluru Road, Vijayawada,Andhra Pradesh',
    },
    {
      id:'jd',
      img:'https://manoj-ceo-site.netlify.app/MNJ.jpeg',
      clg:'Kalasalingam Academy of Research and Education',
      year:'2018-2022',
      percentage:'CGPA:7.94/10.0',
      schoolname:'Bachelor of Technology  Computer Science',
      area:'Kalasalingam Academy of Research and Education, Krishnankoil, Srivilliputhur, Tamil Nadu 626126',
    }
  ]
  return (
    <div>
      <div className='grids'>
        {
          data.map((eachitem)=>{
            const{id,img,clg,year,percentage,schoolname,area}=eachitem
            return(
              <div key={id} className='overinall'>
                <div className='mkiu'>
                <img src={img} alt='bsjsc' className='pi'/>
                <h2 className='fl'>{clg}</h2>
                <h3 className='fle'>{year}</h3>
                <h4 className='lev'>{percentage}</h4>
                <h5 className='lev'>{schoolname}</h5>
                <p className='lev'>{area}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education