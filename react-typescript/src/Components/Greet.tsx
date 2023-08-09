


type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        /* use tenary operator to check login*/
        <div>
            <h2>
                {
                    props.isLoggedIn
                     ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` //  show messages
                        : 'Welcome guest' // not loggedin dont show messages
                }
            </h2>
        </div>
    )
} 

