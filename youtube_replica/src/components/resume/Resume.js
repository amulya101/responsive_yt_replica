import React from 'react'
import './Resume.css'


const Resume = () => {
  return (
    <div> 
        

        <div className='top_header'>
            <div className='home_section'>
                <img src='./cfc-logo.png' className='logo' alt='logo'></img>
                <h1>Home</h1>
            </div>
            <div className='search_section'>
                <input placeholder='Search' className='search_input'></input>
            </div>
            <div className='button_section'>
                <button className='chels_btn'>Chelsea News</button>
            </div>

        </div>

        <div className='info_container'>
            <div className='tweet_container'>
                <div className='tweet_logo'>
                    <img className='userLogo' src='./userLogo.jpeg' alt='avi'></img>
                </div>
                <div className='details_container'>
                
                    <div className='main_section'>
                        <div className='userDetails'>
                                <p className='userName'>Amulya</p>
                                <p className='userHandle'>@CarefreeAmulya</p>
                        </div>
                        <div className='tweet'>
                            Follow me on Twitter! I talk a lot of chelsea there 
                        </div>
                        <div className='link_container'>
                            <div className='follow_logo'>
                                <img src='./tweet_logo.jpeg' alt='twitter logo' className='gen_logo'/>
                            </div>
                            <div className='link_section'>
                                <p>twitter.com</p>
                                <p>follow me</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        

        <div className='opt_container'>
            <div className='options'>
                <h2>
                    Resume
                </h2>
            </div>

            <div className='options'>
                <h2>
                    Personal Blog
                </h2>
            </div>

            <div className='options'>
                <h2>
                    Chelsea Fandom
                </h2>
            </div>
        </div>

        

        
        <div className='signUp'>
            <div className='txtBoxes'>
                <input type='text' className=" txtBox nameTxt" placeholder='First name'/>
                <input type='text' className="txtBox nameTxt" placeholder='Last name'/>
                <input type='text' placeholder="Email" className='txtBox emailBox'/>
            </div>
            <p className='sideNote '>By clicking Agree & Join, you agree to the Privacy Policy</p>
            <button className='contact'>Agree & Join</button>
        </div>

        


    </div>

  )
}

export default Resume