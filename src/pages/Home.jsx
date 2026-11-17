// Add in images 

import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand.jsx'
import { highlights } from '../data/content.js'

// Consider where to place Fitzgerald Properties Pty Ltd

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Welcome</p>
            <h1>Hi, I'm Patrick Fitzgerald.</h1>
            {/* Replace with a short, one/two-sentence summary of who you are
                and what you do — this is the first thing a visitor reads. */}
            <p className="lede">
              I am lawyer with a background in policy turned software engineer and technology investor. 
            </p>
            <Link className="btn btn-primary" to="/contact">Get in touch</Link>
            <Link className="btn btn-ghost" to="/portfolio">View my work</Link>
          </div>
          <img className="hero-portrait" src="/images/patrick-fitzgerald.jpg" alt="Patrick Fitzgerald" />
        </div>
      </section>

      <section>
  <div className="container">
    <h2 className="section-heading">What I do</h2>
    <p className="section-intro">
      I provide services in research and analysis, frontend development, and some backend development. I offer a range of services to help you achieve your goals. All the services I offer can be found in more detail on the Services page.
      I also invest in technology companies and startups. I have a keen interest in the technology sector and am always looking for new opportunities to invest in innovative companies.
    </p>

    <div className="grid grid-3">
      {highlights.map(item => (
        <div className="card" key={item.title + item.tag}>
          <p className="tag">{item.tag}</p>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="card" key="investment-card">
        <p className="tag">Investment</p>
        <h3>Technology & Startup Investment</h3>
        <p>
          I invest in technology companies and startups, with a particular interest
          in innovative businesses shaping the tech sector.
        </p>
      </div>
    </div>
  </div>
</section>

      <section>
        <div className="container">
          <h2 className="section-heading">About me</h2>
          <p className="section-intro" style={{ marginBottom: 0 }}>
          After attempting to establish a career in the Australian Army I turned my attentions to formulating my education.
          </p>

          <br />
           
          <p className="section-intro" style={{ marginBottom: 0 }}>
            I have completed a Bachelor of Business (Human Resource Management), a Bachelor of Laws and a Graduate Diploma of Legal Practice. I have practised law in public and private practice. I am admitted to practice as a solicitor in the Supreme Court of Queensland and the High Court of Australia. 
          </p>

          <br />

          <p className="section-intro" style={{ marginBottom: 0 }}>  
            I have experience in state and federal level policy development and worked with the 2015, 2016 & 2017 Centenary of Anzac Celebrations. 
            </p> 
          
          <br />

          <p className="section-intro" style={{ marginBottom: 0 }}>
            After taking taking a career break and backpacking across South America and working in the construction and transport industries I turned my attentions and ambitions to software development and investment.
          </p>

          <br />

          <p className="section-intro" style={{ marginBottom: 0 }}>
            I have completed a number of online courses in software development and have and continue to build a number of applications.  
            I have commenced a Diploma of Information Technology (Frontend Development and Backend Development) and am almost a third of the way completed.
          </p>

          <br />

          <p className="section-intro" style={{ marginBottom: 0 }}>
            I have an intermediate understanding of Spanish and a basic understanding of Brazilian Portuguese.          
          </p>
        </div>
      </section>

      <CtaBand
        heading="Let's work together"
        text="Have a project in mind? I'd love to hear about it."
      />
    </>
  )
}

export default Home
