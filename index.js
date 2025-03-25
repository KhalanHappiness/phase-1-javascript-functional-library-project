const TestArr = [1, 2, 3, 4]
const TestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, callback){
    if(Array.isArray(collection)){

        for(let i =0; i< collection.length; i++){
             callback(collection[i], i, collection)
        }
        

    }else if(typeof collection === "object" ){
        for(let key in collection){
            if (collection.hasOwnProperty(key)){
             callback(collection[key], key, collection)
            }
        }
    }

    return collection
}

myEach(TestObj, function(value, key){
    console.log(`${key}: ${value}`)
})

function myMap(collection, callback){

    let modified

    if(Array.isArray(collection)){

     modified = collection.map(callback)
    }

    else if(typeof collection === "object"){

        modified = Object.keys(collection).map(key => callback(collection[key], key, collection))
    }

    return modified
}

myMap(TestArr, function(num){
    console.log(num*3)
})

myMap(TestObj, function (value){
    console.log(value*2)
})

function myReduce(collection, callback, acc){
    let values = Array.isArray(collection) ? collection : Object.values(collection)

    return  acc !== undefined
      ?values.reduce(callback, acc)
      :values.reduce(callback)

}

const total = myReduce(TestObj, function(acc, val){
    return(acc + val) 

}, 0)

console.log(`The total is ${total}`)

function myFind(collection, predicate){

    let values = Array.isArray(collection) ? collection : Object.values(collection)

    return values.find(predicate)

}

const findValue = myFind(TestObj, function(num){return( num % 2) == 0 })
console.log(`The value extracted is: ${findValue}`)

function myFilter(collection, predicate){
    let values = Array.isArray(collection) ? collection : Object.values(collection)
    let filteredArray = values.filter(predicate)

    return filteredArray
}

const filterd = myFilter(TestObj, function(num ){
    return num % 2 == 0
})

console.log(`The filtered values are: ${filterd}`)

function mySize(collection){

    if(Array.isArray(collection)){
        return collection.length

    }
    else if(typeof collection === 'object'){

        return Object.keys(collection).length

    }

    
}

console.log("The size of the object is:" + mySize(TestObj))

function myFirst(collection, n ){

    if( n === undefined){
        return collection[0]
    } 
    else{
        return collection.slice(0,n)
    }

    
}
console.log( "Removes the first element " + myFirst(TestArr))

function myLast(collection, n){

    if( n === undefined){
        return collection[collection.length - 1]
    } 
    else{
        return collection.slice(-n)
    }


    
}
console.log("Removes the last Element " + myFirst(TestArr))

function myKeys(object){

    const keys = Object.keys(object)

    return keys

}
console.log(TestObj)
function myValues(object){

    const values = Object.values(object)
    return values
}
console.log(TestObj)