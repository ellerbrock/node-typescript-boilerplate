export default hello;

// default export
function hello(firstName: string, lastName: string, age: number) {
    return `Hello ${firstName} ${lastName}! (age: ${age})`;
}