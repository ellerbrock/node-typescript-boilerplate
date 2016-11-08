export default hello;


interface Ihello{
    firstName: string
    lastName: string
    age: number
}

// default export
function hello(firstName, lastName, age): Ihello {
    return `Hello ${firstName} ${lastName}! (age: ${age})`;
}
