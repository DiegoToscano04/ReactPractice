import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'pepitoperez',
        name: 'Pepito Perez',
        isFollowing: true
    },
    {
        userName: 'pepitopaez',
        name: 'Pepito Paez',
        isFollowing: false
    },
    {
        userName: 'marypoppins',
        name: 'Mary Poppins',
        isFollowing: false
    },
    {
        userName: 'pepitoelpino',
        name: 'Pepito El Pino',
        isFollowing: true
    }
]


export function App () {
    const format = (userName) => `@${userName}`

return(
    <section className='App'>
        {
            users.map(user =>{
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
   
   </section>
)

}