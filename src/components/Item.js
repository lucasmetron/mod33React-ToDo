
class Item {

    static lastId = 0; //server para gerar um numero de id para o obj

    constructor(text) {
        this.id = Item.lastId++ //incrementa 1 ao lastId
        this.text = text;
        this.done = false;
    }


}

export default Item