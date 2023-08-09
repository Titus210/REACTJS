# React And Typescript

***

## declaring

```
export const PersonList = (props: PersonListProps) => {

}
```

## Number

We declare

```
type GreetProps = {
    messageCount: number
}
```

## String

```
type GreetProps = {
    name: string

}
```

## Booleans

```
type GreetProps = {
    isLoggedIn: boolean
}
```

How to import

```
export const PersonList = (props: PersonListProps) => {
return(
    <h2>
    {
        props.isLoggedIn?
        `Welcome John` : 'Login'
    } 
    </h2>
)
}
```

## Arrays

```
type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}
```
