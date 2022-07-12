import React from 'react'
import './Navigation.css'
import { useState } from 'react'
import Button from '@mui/material/Button'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
const MenuList = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whynz'>Why SRM AP</a></p>
    <p><a href='#video'>Archive</a></p>
    <p><a href='#gallery'>Gallery</a></p>
    <p><a href='#research'>Research</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)
function Navigation() {

  const [menu, setMenu] = useState(false)
  return (
    <div className='navigation__nav'>
      <div className='navigation__navLinks'>
        <div className='navigation__navLinksLogo'>
          {/* <img src='logo' alt='logo'/> */}
          <h1 style={{ color: 'white' }}>Sid</h1>
        </div>
        <div className='navigation__navLinksContainer  '>
          <MenuList />
        </div>
      </div>
      <div className='navigation__navSign'>
        
        <Button variant="contained"><ChatBubbleIcon/>Lets Talk</Button>

      </div>
      <div className='navigation__navMenu'>
        {menu ?
          <CloseIcon onClick={() => setMenu(false)} />
          : <MoreVertIcon    onClick={() => setMenu(true)} />
        }
        {menu && (
          <div className='navigation__navMenuContainer scale-up-center'>
            <div className='navigation__navMenuContainerLinks'>
              <MenuList />
              <div className='navigation__navMenuContainerLinksSign'>
              
                <Button variant="contained"><ChatBubbleIcon/>Lets Talk</Button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation