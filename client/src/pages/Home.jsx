import React from 'react'
import { banner } from '../constants/Constants'
import Card from '../components/Card'

const Home = () => {
   const imgLink =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80";

  return (
    <div>
        <div className="flex items-center justify-center gap-4">
            <img src={banner} alt="banner" className="w-full h-120 object-cover" />
        </div>
        
        <div className="flex flex-wrap justify-center">
      <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
       <Card
        imageUrl={imgLink}
        title="Beautiful Mountain"
        description="A majestic mountain under a vibrant sky. Perfect for your travel inspirations."
        altText="Mountain scenery"
      />
    </div>
    </div>
  )
}

export default Home