
type StatusProops = {
    status: 'loading' | 'success' | 'error'
}


export const Status = (props: StatusProops) => {
    let message
    if (props.status === 'loading')
        message = 'loading'
    else if (props.status === 'success')
        message = 'Data fetched successfuly'
    else if (props.status === 'error')
        message = 'Error fetching data'
    return (
        <div>
            <h1>{message} data</h1>
        </div>
    )
}