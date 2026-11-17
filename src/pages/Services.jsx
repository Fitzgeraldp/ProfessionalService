// add in my card that I created in Learn React in Scrimba

import CtaBand from '../components/CtaBand.jsx'
import { services, processSteps } from '../data/content.js'

function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Services</h1>
          <p>
            I offer research & analysis, Frontend Development services and some Backend Development services.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-2">
            {services.map(service => (
              <div className="card" key={service.title}>
                <p className="tag">Service</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-heading">How it works</h2>
          <p className="section-intro">
            A short, numbered outline of your process helps set expectations
            before someone reaches out. Replace these steps with your own.
          </p>
          <div className="grid grid-3">
            {processSteps.map((step, i) => (
              <div className="card" key={step.title}>
                <p className="tag">Step {i + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to get started?"
        text="Tell me a bit about what you need."
      />
    </>
  )
}

export default Services
