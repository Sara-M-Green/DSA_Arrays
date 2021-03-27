const Memory = require('./memory')

const memory = new Memory

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        memory.set(this.ptr + this.length, value)
        this.length++
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)

        if (this.ptr === null) {
            throw new Error('Out of Memory')
        }

        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    get(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index Error')
        }

        return memory.get(this.ptr + index)
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index Error')
        }

        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index Error')
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }

    remove(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index Error')
        }

        memory.copy(this.ptr + index, this.ptr + index + 1, this.ptr - index - 1)
        this.length --
    }

    
}

function main() {

    Array.SIZE_RATIO = 3

    let arr = new Array();

    //each push adds one to length
    // every third push extends the capacity by 3

    arr.push(3)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)

    //length: 5
    // capacity: 12
    // memory address: 3


    arr.pop()
    arr.pop()
    arr.pop()

    //length: 3
    //capacity: 12
    // memory address: 3

    // GET 1ST ITEM IN ARRAY    
    // console.log(arr.get(0))

    // REMOVE ALL ITEMS FROM ARRAY
    arr.pop()
    arr.pop()
    arr.pop()

    arr.push("tauhida")

    console.log(arr)
    console.log(arr.get(0))
    // result NaN
    // What is the purpose of _resize??
        // It allocates a new, larger chunk of memory, copys existing values from 
        // the old chunk to the new chunk, and frees the old chunk
}

main()