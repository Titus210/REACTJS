
type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}


export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h4 key={name.first}>{name.first} {name.last}</h4>
                )
            })
            }
        </div>
    )
}