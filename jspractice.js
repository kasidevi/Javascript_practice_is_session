
// create an array
let array = ["hello", 2];
console.log(array);

//function to access array data using index
function accessing_data(array) {
    return array[0];
}
console.log(accessing_data(array));

//update the data in array
function update_array(array) {
    array[0] = 45;
    array[1] = 64;
    array[2] = "fifty four";
    return array;
}
console.log(update_array(array));

//using bracket notation display 8 and 12 from myarray
let myArray = [
    [1, 2, 3],
    [4, , 5, 6],
    [7, 8, 9],
    [10, 11, 12], 13, 14
];
console.log(myArray[2][1]);
console.log(myArray[3][2]);

//add ["dog",3] onto end of the array

myArray = ["jhon", [2], 23];
console.log(myArray.length); //for length of array
console.log(myArray.push(["dog", 3])); //here getting length after push that value
console.log(myArray.pop()); //remove last element
console.log(myArray.shift()); //remove first ele from array
console.log(myArray.unshift("Good mrng")); //add ele begining of array and
console.log(myArray);
console.log(myArray.splice(1, 1)); //remove middle ele from myarray

//remove consecutive ele from myarray sum of remaining ele to be 10.
let myarray = [2, 4, 5, 1, 7, 5, 2, 1];
delete(myarray.splice(1, 4));
console.log(myarray);


array = [10, 11, 12, 13, 14, 15];
console.log(array.slice(2, 4)); //extract 2 consecutive elements
console.log(array.indexOf(10)); //know the index of particluar ele
console.log(array.indexOf(100)); //return -1 because 100 not in array

array = [1, ["two", 3], "four"];
console.log(array[1].indexOf("two"));

let charray = ["a", "b", "a", "a", "e", "a", "f"];
console.log(charray.lastIndexOf("a"));


function add_ele_end_ofthe_arr(array) {
    let len = array.length;
    array[len] = "five"; //adding one ele
    array.push(12, 15, 16, 17); //adding more ele
    return array;
}
console.log(add_ele_end_ofthe_arr(array));
//concatinating 2 or more arrays
let newarr = [2, 4];
let res = array.concat(newarr);
console.log(res);

console.log(charray.splice(4, 3, "one", "two", "three")); //changing last three ele in charray
console.log(charray);

let Arrayele = [10, 11, 12, 12, 15];
Arrayele.splice(3, 1, 13, 14);
console.log(Arrayele);
let unsort = [5, 2, 3, 10];
console.log(unsort.sort());
console.log(unsort.reverse());

console.log(charray.join(" ")); //join all array ele


//create object and properties
let costumes = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};
console.log(costumes.hat);
console.log(costumes.shirt);
console.log(costumes.shoes);

let car = {
    "model name": "verna",
    "fuel type": "petrol",
    "drive mode": "manual",
};
console.log(car['model name']);
console.log(car['fuel type']);
console.log(car['drive mode']);

let myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["puppie"],
};
console.log(myDog.name);
console.log(myDog['name']);
myDog.bark = "woof";
console.log(myDog['bark']);
delete(myDog.tails);
console.log(myDog.tails);

//is property exits

let positions = {
    top: "hat",
    bottom: "pants",
};

function property_exit(positions, property) {
    return positions.hasOwnProperty(property);
}
console.log(property_exit(positions, "bottom"));
console.log(property_exit(positions, "middle"));
