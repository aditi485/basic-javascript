//for loop
for(index =0 ; index<=10;index++){
    console.log (index);
}
for( i =0 ; i<=10; i++){
    console.log(i);
    if(i===5){
        console.log("5 is best number")
    }
    
}
for(i=1;i<10;i++){
    console.log(`table of. ${i}`)
    for(j=1;j<=10;j++){
        console.log(` ${i} x ${j} = ${ i*j}`)
    }
}
let myArray = ["apple","banana","mango","litchi"]
for(i=0;i<myArray.length;i++){
    console.log(myArray[i])
}



// break switch
for(i=0 ; i<10 ;i++){
    if(i==5){
        console.log(`5 is best`)
        break;
    }
    console.log(i)
}
for(i=0 ; i<10 ;i++){
    if(i==5){
        console.log(`5 is best`)
        continue;
    }
    console.log(`the value is ${i}`)
}