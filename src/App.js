import React from 'react'
import { Helmet } from 'react-helmet' 
import './App.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Komunitas" />
        <meta property="og:image"
          content="https://files.catbox.moe/vreqck.jpg"/>
        <meta property="og:description"
          content="Holotaku-Komunitas"/>
        <meta name="twitter:image:src"
          content="https://files.catbox.moe/vreqck.jpg"/>
        <title>Community</title>
      </Helmet>
      
      <div className="container">
        <img alt="profile picture" className="profile-pic"
          src="https://files.catbox.moe/vreqck.jpg"/>
        <div className="title">
          Holotaku-Community <i className="fas fa-check-circle"></i>
        </div>
        
        <div className="subtitle">Holotaku-Community</div>
        <div className="social-icons">
          <a href="https://www.tiktok.com/@suouzen">
            <i className="fab fa-tiktok"></i>
          </a>
          
          <a href="https://wa.me/6288989721627">
            <i className="far fa-comment-lines"></i>
          </a>
        </div>

        <Section title="Social Founder & Ketua">
          <LinkItem href="https://www.tiktok.com/@suouzen" icon="fa-brands fa-tiktok" text="Tiktok Souzen"/>
          <LinkItem href="https://www.tiktok.com/@abdulghofu3" icon="fa-brands fa-tiktok" text="Tiktok Clov"/>
        </Section>

        <Section title="Komunitas - Holotaku">
          <LinkItem href="https://whatsapp.com/channel/0029VaX63LG11ulGhu3Izl2g" icon="fab fa-whatsapp" text="Holotaku Community"/>
        </Section>

        <Section title="Group - Holotaku">
          <LinkItem href="https://chat.whatsapp.com/DmNX70Auv9w4ezEV3DHoGE" icon="fab fa-whatsapp" text="Holotaku AnimeLoverz"/>
          <LinkItem href="https://chat.whatsapp.com/B7Ri61T6aYI6bcP1dWva0U" icon="fab fa-whatsapp" text="Holotaku Library"/>
        </Section>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className="section">
    <div className="section-title" style={{ fontFamily: 'Patrick Hand' }}>
      {title}
    </div>
    {children}
  </div>
)

const LinkItem = ({ href, icon, text }) => (
  <a href={href} className="link-item">
    <i className={icon}></i>
    <span>{text}</span>
  </a>
)

export default App
