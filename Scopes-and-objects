SCOPE CONCEPT

{
                let count = 0;
                count = count + 1;
            }
            try {
                console.log(count);
            }
            catch (e) {
                console.log(e);
            }--------->o/p its go to catch;
//__________________________________________________________________________
//Not get error
try {
                function increaseCount() {
                    let c = 0;
                    if (true) {
                        let count = 0;
                        console.log("This is a block");
                    }
                    console.log(count);
                }
                increaseCount()
            }
            catch (e) {
                console.log(e);
            }

above program convert like this

            function increaseCount() {
                let c = 0;
                if (true) {
                    let count = 0;
                    console.log("This is a block");
                }
                try {
                    console.log(count);
                }
                catch (e) {
                    console.log(e);
                }
            }
            increaseCount()
-->now got error

//__________________________________________________________________________
            function counter() {
                const count = 0;
                count = count + 1;
                console.log(count);
            }
            try {
                counter();
                counter();
                counter();
            }
            catch (error) {
                console.log(error);
            }---->its go to catch

//__________________________________________________________________________
let names = ['Jack', 'Jhon'];

            function printNames() {
                for (var i = 0; i < names.length; i++) { //-->used var 
                    console.log(names[i]);
                }
                console.log('index', i);
            }
            printNames();
--->Jack
Jhon 
index 2;

//__________________________________________________________________________
            try {
                console.log(person);
            }
            catch (e) {
                console.log(e);
            }
            let person = 'Jack'; // var undefined, const work like let
---->reference error  (before intialisation)

//__________________________________________________________________________
            let name = 20;
            console.log(name);
            let secondName = name;
            console.log(secondName);
            name = 10;
            console.log(name);
            console.log(secondName);
-->jack
jack
john
jack(pass by value)

//____________________________________________________________________________________
 <script>
            let name = "devi"; //var undefined ,value used if before intailze
     </script>

        <script>
            console.log(name);
        </script>
-->devi

//_________________________________________________________________________________
OBJECTS are  passby reference

    let person = {
                name: 'jack',
                place: 'houston'
            };

            function changePerson(person) {
                person.place = 'santa Clara';
            }
            changePerson(person);
            console.log(person);
        o/p-->name:'jack',place:'santa Clara'
   
//________________________________________________________________________________
arrays  are also passby reference

let hobbies = ['coding', 'cooking', 'tennis', 'cricket'];
            let myHobbies = hobbies;
            hobbies.push('dancing');
            console.log(hobbies);
            console.log(myHobbies); 
o/p-->['coding', 'cooking', 'tennis', 'cricket','dancing'];
this is called as impure function because changing original value

//___________________________________________________________________________________
    let person = {
                name: 'jack',
                place: 'houston'
            };

            function createPerson(person) {
                let secondPerson = {};
                for (let key in person) {
                    secondPerson[key] = person[key];
                }
                secondPerson.place = 'Santa Clara';
                return secondPerson;
            }
            let secondPerson = createPerson(person);
            console.log(secondPerson);
            console.log(person);
o/p-->person,secondPerson objects 
this is called as pure function because not changing original value

//____________________________________________________________________________________________________

Objects

//objects
            function newPerson(gender, age) {
                return {
                    gender: gender,
                    age: 20,
                    name: "devi",
                    createPerson: function createPerson() {
                        console.log('person');
                    }
                };
(or)
let person={gender: gender,
                    age: 20,
                    name: "devi",
                    createPerson: function createPerson() {
                        console.log('person');
}
return person;
       }
            let person = newPerson("female", 21);
            console.log(person);

o/p-->Object {gender: "female", age: 20, name: "devi", createPerson: function createPerson()}

//___________________________________________________________________________________________

            //using this(new) operator
            function createPerson1(name, age, gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
o/p-->createPerson1 {name: "sri", age: 21, gender: "female"}
