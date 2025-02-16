import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.webp'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.webp'
import program_icon_3 from '../../assets/program_icon_3.png'

const Programs = () => {
  return (
    <div>
        <div className="programs">
            <div className="program">
                <img src={program_1}/>
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2}/>
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3}/>
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Past education</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs
