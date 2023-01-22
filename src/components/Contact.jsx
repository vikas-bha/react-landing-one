import React from 'react'

const Contact = () => {
  return (
   <div className="contact">
    <main>
        <h1>contact us</h1>
        <form>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='abc' />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder='abc@gmail.com' />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <input type="text" required placeholder='what do you want to know.....' />
            </div>
            <button type="subumt">Send</button>
        </form>
    </main>
   </div>
  )
}

export default Contact