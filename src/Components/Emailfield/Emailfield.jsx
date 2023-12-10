import React from 'react'
import './Emailfield.css'

const Emailfield = (props) => {
  return (
    <div className='emailfield'>
       <input type="email" name={props.name} value={props.value} onChange={props.onChange} placeholder='Your email' />
    </div>
  )
}

export default Emailfield
