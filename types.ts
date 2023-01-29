class Pony {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}

let ponies: Array<Pony> = [];

ponies.push(new Pony("Eduard", "Black"));