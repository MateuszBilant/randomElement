const authors = ["Tolkien", "Sapkowski", "Rowling", "Sienkiewicz"];
const numbers = [1,2,3,4,5]

const getRandomElement = (array) => {
    checkIfArray(array);
    const randomElement = Math.floor(Math.random()*array.length);
    return array[randomElement];
}

const checkIfArray = (input) => {
    if(!Array.isArray(input)){
        throw new Error("Parameter is not an array")
    }
}