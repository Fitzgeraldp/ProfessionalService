import CtaBand from '../components/CtaBand.jsx'
import { portfolioItems } from '../data/content.js'

function Portfolio() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Portfolio</h1>
          <p>
            My full resume can be found on my LinkedIn profile. {' '}
            <a href="https://www.linkedin.com/in/patrick-fitzgerald-289753192/" target="_blank" rel="noopener noreferrer">
              <img className="icon-inline" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" />
            </a>
          </p>
          <p>
            A selection of my recent software work can be found on my GitHub repository. {' '}
            <a href="https://github.com/Fitzgeraldp" target="_blank" rel="noopener noreferrer">
              <img className="icon-inline" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="20" height="20" />
            </a>
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-3">
            {portfolioItems.map(item => (
              <div className="card" key={item.title}>
                <img
                  className="portfolio-media"
                  src={item.image || '/images/project-placeholder.svg'}
                  alt=""
                />
                <p className="tag">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {(item.githubUrl || item.liveUrl) && (
                  <div className="card-links">
                    {item.githubUrl && (
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live site
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Like what you see?"
        text="Let's talk about your next project."
        buttonLabel="Get in touch"
      />
    </>
  )
}

export default Portfolio
