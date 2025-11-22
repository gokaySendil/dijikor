import React from 'react'
import './InfoSection.css'
import info_img from "./assets/info_img.png";

const InfoSection = () => {
  return (
    <div className='info-wrapper'>
        <div className="info-rows">
            <h2 className='info-title'>Bizimle Neden Çalışmalısınız?</h2>
            <img className='info-img' src={info_img} alt="" />
            <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita natus nobis ab dolor alias ea, corrupti non inventore nemo dolorum ad. Amet deserunt saepe incidunt, autem atque quasi quam velit illum. Tempore voluptates recusandae iste natus quia, eaque corrupti, ut eveniet, laboriosam laborum dolor maiores magni commodi magnam voluptate ea a dolorum quos officia eum provident. Deserunt, ullam quas.</p>
        </div>
    </div>
  )
}

export default InfoSection;