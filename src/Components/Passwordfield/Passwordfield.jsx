import React from 'react'
import './Passwordfield.css'

const Passwordfield = (props) => {
  return (
    <div className='passwordfield'>
        <input type="password" name={props.name} value={props.value} onChange={props.onChange} placeholder='Password'/>
    </div>
  )
}

export default Passwordfield
