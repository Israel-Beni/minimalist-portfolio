export function toTitleCase(title) {
    if (typeof(title) === "string") {
        const array = [];
        for (let letter of title) {
            array.push(letter);
        }
        array[0] = array[0].toUpperCase();
        console.log(array);
        return array.join('');
    } else {
        console.error("The passed in parameter should be of a string type");
    }
}