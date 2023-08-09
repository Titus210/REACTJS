type personProps = {
    name: {
        first: string
        last: string
    }
}


export const Person = (props: personProps) => {
    return <div>{
        props.name.first} {props.name.last}</div>
}