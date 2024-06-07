function f1(){
    console.log("hhhh")
}
function f2(f2callback){
    f2callback()
}
f2(f1)


//promises  callback callbackhell 

function f3(num){
    //if i m using the console.log we can call to print the value
    return num*2
}
function f4(num,f3callback){
    //if im usingthe return in above then we have to use the retirn intthe nect function aslo 
    return f3callback(num)
}
f2(f1)
console.log(f4(10,f3))


//callback hell 


function mosule1(mosule2){
    setTimeout((c) => {
        console.log("module 1 is exee");
        
    },2000);
}
 
function mosule2(c){
    setTimeout((c) => {
        console.log("module 2 is exeecuted")
        
    },3000);
}
function mosule3(c){
    setTimeout((c) => {
        console.log("module 2 is exeecuted")
        
    },4000);
}

mosule1()
// mosule2();
// mosule3()

mosule1((c)=>{
    mosule1(()=>{
        mosule3(()=>{
            console.log("tsk comleted")
        })
    })
})