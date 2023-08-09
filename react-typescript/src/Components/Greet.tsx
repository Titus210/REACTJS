


type GreetProps = {
    name: string;
    messageCount: number;
}

export const Greet = (props: GreetProps) => {
    return (
        <h1>hello {props.name} you have {props.messageCount} messages in your account</h1>
    )
}

