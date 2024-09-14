import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

function Component1() {

const valu=useContext(counterContext)
  return (
    <div>
{valu.count} </div>
  )
}

export default Component1
