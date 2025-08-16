import { useState } from 'react'
import './App.css'
export function TwitterFollowCard ({userName = 'unknown', initialIsFollowing, children }) {

const [isFollowwing, setIsFollowing] = useState(initialIsFollowing)

/* Es lo mismo que lo de arriba, pero con destructuring
const state = useState(false)
cont isFollowwing = state[0]
const setIsFollowing = state[1]
*/ 
const text = isFollowwing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowwing 
? 'tw-followCard-button is-following' 
: 'tw-followCard-button'

const handleClick = () => {
    setIsFollowing(!isFollowwing)
}

return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
            src={`https://unavatar.io/${userName}`} alt="El avatar de la persona" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
)

}