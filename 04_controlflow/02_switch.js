// in switch statement if break is not applied then the whole code will execute after it matches except default 
 
 
 const month = 3
switch(month){
    case 1 :
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;       
    case 3 :
        console.log("march")
        break;
    case 14:
        console.log("april")
        break; 
    default : console.log("not applicable")        
      break;
}