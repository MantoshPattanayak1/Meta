import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form>
                <div>
                    <label for="Name">Name</label>
                    <input type='text' id="Name" placeholder="Abc"></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type='email' id="email" placeholder="abc@example.com"></input>
                </div>
                <div>
                    <label for="Message">Name</label>
                    <input type='text' id="Message" placeholder="tell us about your query"></input>
                </div>
                <button type="submit">send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact