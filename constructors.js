
function Human(name, age, weight){
    this.name = name;
    this.Data = new Data(age,weight);
    this.work = function(){
        console.log('finished work')
        console.log(this.Data)
    }

    function Data(age,weight){
        this.age=age;
        this.weight=weight;
      //  console.log(`this is ${this.data}`)
    };

 

       

    
}

let man1 = new Human('Atish', '29', '172')
let man2 = new Human('Nate', "40",'270')

console.log(man1,man2)
man1.work()

let emi= ["emery", function(){console.log("hello peepoo")}];
console.log(emi);
emi[1]();

let numbers = [23,function(){console.log("hello peepoo")},'ge',21,2]
numbers.forEach( (n) => console.log(n*2));

