import ProjectCard from '../components/project-card';
import './mywork.css'
import icecream from '../Images/icecream.png'
import book from '../Images/book.png'
import games from '../Images/game.png'
import subscan from '../Images/subscrib1.png'
import facepay1 from '../Images/facepay1.png'
import extension from '../Images/extensionimg.png'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Mywork(){
    const projectdata = 
        [
        {title:"ICE CREAM APP",
        subtitle: 'This is Icecream App',
        image:icecream,
        description:"A mobile application development called an ice cream parlor app enables users to browse through many ice cream flavors, toppings, and other dessert options and place orders for pickup or delivery.Additionally, the app can offer details on the ice cream shop’s address,opening times,customer reviews,and ratings.",
        buttonLink:"//www.figma.com/community/file/1267390874465984670/icecream-app"
        },

        {title:"3D OBJECT",
        subtitle: 'Free 3d Gaming App',
        image:games,
        description:"has introduced a new app that will let smartphone users create 3D models by simply clicking a photo of an object.The app is called 3DGame and comes as the latest tool by the firm for content creators,especially those wanting to produce a virtual world. RealityScan comes as a free 3D scanning app and is currently in limited beta",
        buttonLink:"//www.figma.com/community/file/1267399858195469482/free-3d-objcects"
    },

        {title:"BOOKS FOR ALL",
        subtitle: 'Online books platform',
        image:book,
        description:"Discover the world of engineering with Engineer's Library Hub!Explore a diverse collection of the latest books across engineering disciplines. Enjoy user-friendly features, exclusive discounts,and a vibrant community forum.Stay informed, inspired,and ahead in your field. Start your journey into innovation today",
        buttonLink:"//www.figma.com/community/file/1267397532479104168/engineering-books-website"
    },

        {title:"GOOD EXTENSION",
        subtitle: 'This is chrome extension',
        image:extension, 
        description:"GoodExtension: Eco-friendly for women 25-45.Features: Search, Recommendations, carbon indicators, sorting options.Explore top UK retailers: Amazon, Asos, with anonymous product scans. Discover better alternatives: Click Beagle icon in the menu.Emphasizes sustainability;independent of Amazon.",
        buttonLink:"//www.figma.com/community/file/1328576341657698476/chrome-extension"
   
        // description:"GoodExtension: Eco-friendly Home for women 25-45. Search, Recommendations with carbon indicators, sorting options, and enhanced details.Explore UK's top retailers like Amazon and Asos with anonymous product.Easily discover better alternatives by clicking the Beagle icon in the menu.Emphasizes sustainability,independent of Amazon"
    },

        {title:"SUBSCAN",
        subtitle: 'Subscription tracker App',
        image:subscan,
        description:"It’s hard to keep track of all the products and services that we subscribe to each month.subscription management app easily track and organize all your subscription fees for websites,apps,and services.Stay in control,save money,simplify your life",
        buttonLink:"//www.figma.com/community/file/1292388299982851061/subssync"
    },

        {title:"FACE PAY",
        subtitle: 'Make payment using face',
        image:facepay1,
        description:"The Face Pay app streamlines payments with facial recognition. Users log in to access features like transaction history and bank balance. To make a payment, they simply use facescan after entering the amount. The app facilitates easy money transfers, expense management, and offers a secure and efficient facial recognition payment process.",
        buttonLink:"//www.figma.com/community/file/1267380301452108953/face-pay-app"

    }

    ]
    useEffect(()=>{
        AOS.init({duration: 2000});
      })
    return(
        <div className='Projectpg'>
            <div className='mywork-title' data-aos="zoom-in">
                <center>
                 <h1>MY Work</h1>
                </center>
            </div>

            <div className='project-page'>
            {projectdata.map((project,index)=>(<ProjectCard key={index}{...project}/>))}
            </div>
        </div>
    );
}