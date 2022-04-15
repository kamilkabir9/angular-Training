export type product = {
    id: number,
    name: string,
    type: string,
    price: string,
    image: string,
    description: string

}

export class ComplaintModel {
    public id: number = 0
    public from: string = ""
    public to: string = ""
    public subject: string = ""
    public message: string = ""

    constructor() {

    }
}

export class ReplyModel {
    public id: number = 0
    public from: string = ""
    public reply: string = ""

    constructor() {

    }
}