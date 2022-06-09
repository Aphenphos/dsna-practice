export function makePet(name, type, age, food, toys) {
    const pet = {
        name,
        type,
        age,
        food,
        toys,
    };
    return pet;
}

export function formatWork(data) {
    const book = {
        work: data.book.title,
        writer: `${data.author.first} ${data.author.last}`
    };
    return book;
}






