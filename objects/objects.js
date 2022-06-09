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

export function formatData(work, writer) {
    const names = writer.split(' '); 
    const last = names[0]; 
    const first = names[1]; 
    const author = {
        last: last,
        first: first,
    };

    const book = {
        title: work
    };
    return author, book;
}





