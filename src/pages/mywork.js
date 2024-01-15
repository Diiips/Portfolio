import ProjectCard from '../components/project-card';
import './mywork.css'
import icecream from '../Images/icecream.png'
import book from '../Images/book.png'
import games from '../Images/game.png'
import subscan from '../Images/subscrib1.png'
import facepay1 from '../Images/facepay1.png'
import extension from '../Images/extensionimg.png'
// import profile from '../Images/profile2.png'


export default function Mywork(){
    const projectdata = 
        [
        {title:"ICE CREAM APP",
        subtitle: 'This is Icecream App',
        image:icecream,
        description:"A mobile application development called an ice cream parlor app enables users to browse through many ice cream flavors, toppings, and other dessert options and place orders for pickup or delivery. Additionally, the app can offer details on the ice cream shop’s address, opening times, customer reviews, and ratings."
        },

        {title:"3D OBJECT",
        subtitle: 'Free 3d Gaming App',
        image:games,
        description:"has introduced a new app that will let smartphone users create 3D models by simply clicking a photo of an object.The app is called 3DGame and comes as the latest tool by the firm for content creators,especially those wanting to produce a virtual world. RealityScan comes as a free 3D scanning app and is currently in limited beta"
    },

        {title:"BOOKS FOR ALL",
        subtitle: 'Online books platform',
        image:book,
        description:""
    },

        {title:"GOOD EXTENSION",
        subtitle: 'This is chrome extension',
        image:extension,
        description:""
    },

        {title:"SUBSCAN",
        subtitle: 'Subscription tracker App',
        image:subscan,
        description:"It’s hard to keep track of all the products and services that we subscribe to each month.subscription management app easily track and organize all your subscription fees for websites,apps,and services.Stay in control,save money,simplify your life"
    },

        {title:"FACE PAY",
        subtitle: 'Make payment using face',
        image:facepay1,
        description:""
    },

    ]
    return(
        <div>
            <div className='mywork-title'>
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