import React from 'react'

import { spoon } from '../../Assets'

const SubHeading = ({title}) => {
  return (
    <div className='app__p-subheading' style={{marginBottom : '1rem'}}>
        <p className='p__head'>{title}</p>
        <img src={spoon} alt="Spoon" />
    </div>
  )
}

export default SubHeading