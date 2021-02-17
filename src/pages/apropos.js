import React from 'react'
import InfoSection from '../components/InfoSection'
import {InfoData, InfoDataTwo, InfoDataThree} from '../data/InfoData'

const apropos = () => {
  return (
    <div>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
      <InfoSection {...InfoDataThree}/>
    </div>
  )
}

export default apropos
