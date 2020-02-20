
function getCountOfEligibleVoters(people, isEligible) {
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (isEligible(people[i].age)) {
            count = count + 1;
        }
    }
    return count;
}

function isEligibleToVoteIndia(age) {
    return age >= 18;
}

function isEligibleToVoteUs(age) {
    return age >= 16;
}
let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
console.log(getCountOfEligibleVoters(people, isEligibleToVoteIndia)); //here people is array(people), isEligibleToVoteIndia is a one function here it is go to access that function

console.log(getCountOfEligibleVoters(people, isEligibleToVoteUs));
