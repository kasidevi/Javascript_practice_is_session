//here this references to the object that is executing the function
//1.Method->this ->references to the object
//2.Regular Fn->this->Window Object(in browser enviroment window is a global scope)
//3.Constructor Fn->this ->Empty object
 const car = {
                brand: 'hyundai',
                noOfTyres: 4,
                start: function() {
                    console.log('started', this);
                }
            };
            car.start();
o/p-->started 
▶Object {brand: "hyundai", noOfTyres: 4, start: function start()}
//added to the above function.
 car.stop = function() {
                console.log('stopped', this);
            };
            car.stop();
stopped 
▶Object {brand: "hyundai", noOfTyres: 4, start: function start(), stop: function ()}
//_______________________________________________________________________________
            function createCar() {
                console.log('createCar', this);
            };
            console.log(window.createCar());
(OR)

            function createCar() {
                console.log('createCar', this);
            };
            window.createCar();

o/p-->createCar 
▶Window {createCar: function createCar(), document: HTMLDocument, window: Window, customElements: CustomElementRegistry, caches: CacheStorage…}
//_____________________________________________________________________________________
  const car = {
                brand: 'hyundai',
                noOfTyres: 4,
                start: function() {
                    //    alert(this);
                    console.log('started', this);
                },
                tyres: ['a', 'b', 'c', 'd'],
                showTyresList: function() {
                    console.log(this.tyres, car.brand);
                    this.tyres.forEach(function(eachTyre) {
                       // console.log(`${eachTyre}:${this}`);
                        console.log(`${eachTyre}:${car.brand}`);
                       // console.log(this);
                    });
                }
            };
            car.showTyresList();
o/p-->["a", "b", "c", "d"]  "hyundai" 
a:hyundai 
b:hyundai 
c:hyundai 
d:hyundai 
for above problem:
solution1: car.brand; ex:console.log(`${eachTyre}:${car.brand}`);
solution2: const self=this;ex:console.log(`${eachTyre}:${self.brand}`);
solution3: thisArg in forEach;
ex:this.tyres.forEach(function(eachTyre) {
                        console.log(`${eachTyre}:${this.brand}`);

solution4: bind (here bind is a method. it is called function prototype .syntax:bindedFunc = Func.)
ex:this.tyres.forEach(function(eachTyre) {
                        console.log(`${eachTyre}:${this.brand}`);
                         }.bind({
                        brand: car.brand
                    }));
solution5:Arrow function Now using .
//_______________________________________________________________________________________

            function data(a, b) {
                console.log(this.name, a, b);
            }
            let details = {
                name: 'tom'
            };
            data.call(details, 2, 3); //o/p-->tom 2 3
          //  data.bind(details);
            data.apply(details, [1, 2]);//o/p-->tom 1 2
//______________________________________________________________________________________

            const car = {
                brand: 'hyundai',
                noOfTyres: 4,
                start: function() {
                    //    alert(this);
                    console.log('started', this.noOfTyres);
                },
                tyres: ['a', 'b', 'c', 'd'],
                showTyresList: function() {
                    //  this...obj
                    const tyres = function(eachTyre) {
                        console.log(`${eachTyre}:${this.brand}`);
                    };
                    const tyresWithBrand = tyres.bind({ brand: 'hyundai' });
                    this.tyres.forEach(tyresWithBrand);
                }

            };
            car.start();
            car.showTyresList();
o/p-->started  4
a:hyundai 
b:hyundai 
c:hyundai 
d:hyundai 
//__________________________________________________________________________________________
//solution 5 using arrow function (here no need to do bind)
showTyresList: function() {
                    const tyres = (eachTyre) => {
                        console.log(`${eachTyre}:${this.brand}`);
                    };
                    this.tyres.forEach(tyres);
              }
o/p-->started  4
a:hyundai 
b:hyundai 
c:hyundai 
d:hyundai 

//Night session by chinmai sir
  function Person() {
                this.firstName = "ram";
                this.lastName = 'Gupta';
                this.fullName = function() {
                    return this.firstName + this.lastName;
                };
            }
            const personTwo = new Person();
            console.log(personTwo);
            console.log(personTwo.fullName());
        o/p-->Person {firstName: "ram", lastName: "Gupta", fullName: function ()}
              ramGupta
//__________________________________________________________________________________________
            function Person() {
                this.gender = 'female';
                return {
                    firstName: 'ram',
                    lastName: 'Gupta',
                    fullName: function() {
                        return this.firstName + this.lastName;
                    }
                };
            }
            const personTwo = new Person();
            console.log(personTwo);
            console.log(personTwo.fullName());
            console.log(personTwo.gender);
                      
o/p->Object {firstName: "ram", lastName: "Gupta", fullName: function fullName()}
ramGupta 
undefined
//__________________________________________________________________________________________
            function ClassRoom(roomNumber, studentStrength) {
                this.roomNumber = roomNumber;
                this.studentStrength = studentStrength;
                this.sessionStatus = 'Teaching'; //practice,exam,break,teaching
                this.fansStatus = 'ON'; //ON,OFF
                this.areFansRunning = true;
                this.areACsRunning = false;
                this.isSoundSystemOn = false;
                this.switchOnPowerEquipment = function() {
                    this.areACsRunning = true;
                    this.fansStatus = 'OFF'; //ON,OFF
                    this.isSoundSystemOn = true;
                };
                this.switchOffPowerEquipment = function() {
                    this.areACsRunning = false;
                    this.fansStatus = 'OFF'; //ON,OFF
                    this.isSoundSystemOn = false;
                };
                this.startTeachingSession = function() {
                    this.switchOnPowerEquipment();
                    this.sessionStatus = "TEACHING";
                };

                this.stopTeachingSession = function() {
                    this.switchOffPowerEquipment();
                    this.sessionStatus = "OFF";
                };
            }
            const classRoom1 = new ClassRoom(1, 65);
            console.log(classRoom1);
            const classRoom2 = new ClassRoom(2, 78);
                      
         o/p=>ClassRoom {roomNumber: 1, studentStrength: 65, sessionStatus: "Teaching", fansStatus: "ON", areFansRunning: true…} 
              roomNumber: 1
 studentStrength: 65
 sessionStatus: "Teaching"
 fansStatus: "ON"
 areFansRunning: true
 areACsRunning: false
 isSoundSystemOn: false
 switchOnPowerEquipment: function () {}
 switchOffPowerEquipment: function () {}
 startTeachingSession: function () {}
 stopTeachingSession: function () {}
//__________________________________________________________________________________________
            class ClassRoomES6 {
                constructor(roomNumber, studentStrength) {
                    this.roomNumber = roomNumber;
                    this.studentStrength = studentStrength;
                    this.areACsRunning = true;
                    this.fansStatus = 'ON';
                    this.isSoundSystemOn = true;
                }
                switchOnPowerEquipment() {
                    this.areACsRunning = true;
                    this.fansStatus = 'ON';
                    this.isSoundSystemOn = true;
                }
            }
            const es6ClassRoom = new ClassRoomES6(3, 57);
            console.log(es6ClassRoom);
                      
o/p->ClassRoomES6 {roomNumber: 3, studentStrength: 57, areACsRunning: true, fansStatus: "ON", isSoundSystemOn: true}
 roomNumber: 3
 studentStrength: 57
 areACsRunning: true
 fansStatus: "ON"
 isSoundSystemOn: true
