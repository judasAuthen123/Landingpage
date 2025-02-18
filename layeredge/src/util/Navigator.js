import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../page/home/Home'
import Explorer from '../page/explorer/Explorer'
export default function Navigator() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explorer' element={<Explorer />}/>
    </Routes>
  )
}
