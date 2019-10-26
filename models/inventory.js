// Inventory Class

// Properties
// vegetables
// bread

// Methods
// .addItem(prop1, prop2, prop2, ...)
// .getItems(type)
// .updateItem()
// .removeItem()
// .generateId()

class Inventory {
    constructor() {
        this.vegetables = [];
        this.breads = [];
    }

    addItem(item) {
        if (item.type === 'vegetables') {
            this.vegetables.push(item);
        } else if (item.type === 'bread') {
            this.breads.push(item);
        }
    }

    removeItem(name, type) {
        let val = null;
        this[type].forEach((ele, i) => {
            if (ele.name === name) {
                val = this[type].splice(i, 1);
            }
        })
        return val;
    }

    updateItem(item, type) {
        let val = null;
        this[type].forEach((ele, i) => {
            if (ele.name === item.name) {
                this[type].splice(i, 1, item);
                val = item;
            }
        })
        return val;
    }

    getAllItem() {
        return {
            vegetables: this.vegetables,
            breads: this.breads
        }
    }

    getAllItemByType(type) {
        return {
            type: this[type]
        }
    }

    getItemById(id, type) {
        let val = null;
        this[type].forEach((ele, i) => {
            if (ele.id === id) {
                val = this[type].slice(i, i + 1);
            }
        })
        return val;
    }
}

let myInventory = new Inventory();

let item1 = {
    id: 1,
    type: 'bread',
    name: 'Bagle'
}

let item2 = {
    id: 2,
    type: 'vegetables',
    name: 'Spinach'
}

let item3 = {
    id: 3,
    type: 'vegetables',
    name: 'Carrot'
}

myInventory.addItem(item1);
myInventory.addItem(item2);
myInventory.addItem(item3);

// console.log(myInventory);

// console.log('Remove =>', myInventory.removeItem('Spinach', 'vegetables'))

let updatedCarrot = {
    id: 100,
    type: 'vegetables',
    name: 'Carrot'
}

console.log('Updated =>', myInventory.updateItem(updatedCarrot, 'vegetables'))

console.log('GetById =>', myInventory.getItemById(100, 'vegetables'))

console.log('Get All Items =>', myInventory.getAllItem())

console.log('Get All By Type =>', myInventory.getAllItemByType('vegetables'))

console.log('Inventory class:\n', myInventory);

module.exports = myInventory;