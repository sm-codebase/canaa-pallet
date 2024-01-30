import React from 'react'


const Contact = () => {
  return (
    <div className='maxx-w[1240px] m-auto mt-20 '>
        <h1 className='text-2xl font-bold text-center p-4'>Seja nosso cliente</h1>
        
        <form 
         className='max-w-[600px] m-auto mt-5'
         action='https://getform.io/f/e27122d0-21c4-4930-8a9d-37c17244c7c7'
         method='POST'
         encType='multipart/form-data'
        >
            <div className='grid grid-cols-2 gap-2 '>
                <input 
                 className='border shadow-lg p-3' 
                 type="text" 
                 placeholder='Nome' 
                 name='nome'
                 />
                <input 
                 className='border shadow-lg p-3' 
                 type="email" 
                 placeholder='Email' 
                 name="email"
                 />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' 
             type="subject" 
             placeholder='Assunto' 
             name="subject"
             />
            <textarea 
              className='border shadow-lg p-3 w-full' 
              cols='' 
              rows='10' 
              placeholder='Menssagem'
              name='mensagem'
              />
            <button className='border shadow-lg p-3 w-full mt-2'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact