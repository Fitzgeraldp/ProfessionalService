//Add link to email

import { useState } from 'react'
import { contactDetails } from '../data/content.js'

const emptyForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // TODO: this is front-end only for now. Replace the block below with a
    // real submission — e.g. fetch() to your own backend, or a form
    // service like Formspree — when you're ready to make this page
    // actually send messages.
    console.log('Contact form submitted:', form)

    setSubmitted(true)
    setForm(emptyForm)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Have a question or a project in mind? Send an email to <a href="mailto:fitzgeraldp@hotmail.com.au">fitzgeraldp@hotmail.com.au</a>. </p>
        </div>
      </section>

    </>
  )
}

export default Contact
