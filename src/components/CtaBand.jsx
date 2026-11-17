import { Link } from 'react-router-dom'

function CtaBand({ heading, text, buttonLabel = 'Contact me', to = '/contact' }) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link className="btn btn-primary" to={to}>{buttonLabel}</Link>
      </div>
    </section>
  )
}

export default CtaBand
