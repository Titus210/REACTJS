type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>
        <h4>{props.children}</h4>
    </div>
}