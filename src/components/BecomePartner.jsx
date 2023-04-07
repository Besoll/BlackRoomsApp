import { useState } from 'react'

const BecomePartner = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    // Send form data to email using an API or other method
  }
  
  return (
    <form id="becomePartner" className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Jane Doe" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="5" placeholder="Enter your message here" value={message} onChange={(event) => setMessage(event.target.value)} required />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default BecomePartner