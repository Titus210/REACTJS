# React And Typescript
Using props in a React component while leveraging the power of TypeScript's static typing. Props allow you to pass data from a parent component to a child component in React.
***

## Declaring Components with Props
In TypeScript, defining a component's props involves creating a type that outlines the expected structure of the props. This helps catch type-related errors early.

```
// Example: Declaring props for a PersonList component
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  // Component implementation here
};

```

## Number Props

We declare

```
type GreetProps = {
    messageCount: number
}
```

## String Props

```
type GreetProps = {
    name: string

}
```

## Booleans Props

```
type GreetProps = {
    isLoggedIn: boolean
}
```

How to import

```
export const PersonList = (props: PersonListProps) => {
return(
    <h2>{
        props.isLoggedIn?
        `Welcome John` : 'Login'
    } 
    </h2>
)
}
```

## Array Props

To pass an array of objects as a prop, specify the array structure in the prop's type definition.

```
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
```

## Childeren Props

React components can also accept children components as props. This allows you to pass JSX elements and structures directly into a component.

```
<Oscar>
  <Heading>Oscar goes to Leonardo DiCaprio</Heading>
</Oscar>
```

To define a component that accepts children, you can use the `React.ReactNode` type

```
type OscarProps = {
  children: React.ReactNode;
};

```

Here's an example of how you can create a Heading component that accepts a string as its children prop:

```
type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};
```
