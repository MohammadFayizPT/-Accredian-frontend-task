import React from 'react'
import './Usernamefield.css'

const Usernamefield = (props) => {
  return (
    <div className='usernamefield'>
       <input type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder='Username'/>
    </div>
  )
}

export default Usernamefield
