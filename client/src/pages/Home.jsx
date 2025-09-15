import React from 'react'
import { banner } from '../constants/Constants'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
        <div className="flex items-center justify-center gap-4">
            <img src={banner} alt="banner" className="w-full h-120 object-cover" />
        </div>
        
        <div>
            <Card />
        </div>
    </div>
  )
}

export default Home