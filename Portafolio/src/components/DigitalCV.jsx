import React , {useState,useEffect} from 'react'

const CircularProgressBar = ({ endValue }) => {
    const [progressStartValue, setProgressStartValue] = useState(0)
  
    useEffect(() => {
      const speed = 10
  
      const progress = setInterval(() => {
        setProgressStartValue(prevValue => {
          const newValue = prevValue + 1
          return newValue
        })
  
        if (progressStartValue === endValue) {
          clearInterval(progress)
        }
      }, speed)
  
      return () => clearInterval(progress)
    }, []) 
  
    return (
      <div className="circular-progress" style={{ background: `conic-gradient(#FB8B24 ${progressStartValue * 3.6}deg, #ededed 0deg)` }}>
      
        <span className="progress-value">{`${Math.min(progressStartValue, endValue)}%`}</span>
      </div>
       


    )
  }
  
 
  const DigitalCV = () => {
    return (
      <div className="Container">
        <img src="src/images/profile picture.png" alt="Profile" />
        <h1 className="name">Itzel Alwarafi</h1>
        <h2 className="role">Full Stack Software Developer</h2>
        <div className="SocialMediaIcons">
        <a href="https://www.linkedin.com/in/itzelalwarafi">
        <img className='socialMediaLogos'  src="src/images/circle-linkedin-512.webp" alt="LinkedIn" />
      </a>
      <a href="https://github.com/ItzelAlwarafi">
        <img className='socialMediaLogos'  src="src/images/Neon Cyan and Light Black, Circle and Modern Tiktok Profile Picture.png" alt="LinkedIn" />
      </a>
        </div>
        <div className="language">
          <div className="skill">
            English
            <CircularProgressBar endValue={100} />
          </div>
          <div className="skill">
            Spanish
            <CircularProgressBar endValue={95} />
          </div>
        </div>
        <div className="container">
        <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">90%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">75%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className="title">JavaScript</span>
            <div className="skill-bar">
                <span className="skill-per javascript">
                    <span className="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className="title">NodeJS</span>
            <div className="skill-bar">
                <span className="skill-per nodejs">
                    <span className="tooltip">60%</span>
                </span>
            </div>
        </div>
    </div>

        
        <div className="OtherSkill">
            <h2 className='skills'><img className='checkMark' src="src/images/checkmark.png" />Figma </h2>
            <h2 className='skills'> <img className='checkMark' src="src/images/checkmark.png" />GitHub </h2>
            <h2 className='skills'><img className='checkMark' src="src/images/checkmark.png" />Adobe XD </h2>
            <h2 className='skills'><img className='checkMark' src="src/images/checkmark.png" />Photoshop</h2>
            <h2 className='skills'><img className='checkMark' src="src/images/checkmark.png" />Illustrator</h2>
        </div>
        <div className="downloadCV">
            <h2 className='download' >   DOWNLOAD CV</h2>
        </div>
      </div>
    )
  }
  
  export default DigitalCV