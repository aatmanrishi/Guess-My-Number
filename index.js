let secreteNumber = Math.trunc(Math.random()*20) + 1 ;
let SetAttributeIninputNumber = document.getElementsByTagName('button')[0].setAttribute('onclick',`compare(${secreteNumber})`);
function compare(){
    let inputNumber =parseFloat( document.getElementsByTagName('input')[0].value) ;

if(secreteNumber == inputNumber){
console.log('🎉🎉😁😎You matched😁😎🎉🎉');
document.getElementsByClassName('output')[0].innerText = '🎉🎉😁😎You matched😁😎🎉🎉';
document.getElementsByTagName('input')[0].innerText = ' ';
}
else if(secreteNumber <= 10 ){

if(secreteNumber>5){
    console.log('Secrete Number is greater than 5');
    setTimeout(()=>{
        document.getElementsByClassName('output')[0].innerText = '😁Secrete Number is greater than or equall to 5 😁';
    },1000)
    
}else{
console.log('Secrete Number is less than 5');
setTimeout(()=>{
    document.getElementsByClassName('output')[0].innerText = '😁Secrete Number is less than  or equall to 5 😁';
},1000)

}
     
}else if(secreteNumber>10){

    if(secreteNumber<15){
        console.log('Secrete Number is less than 15');
        setTimeout(()=>{
            document.getElementsByClassName('output')[0].innerText = '😁Secrete Number is less than or equall to 15 😁';
        },1000)
        
     
    }else{
        console.log('Secrete Number is greater than 15');
        setTimeout(()=>{
            document.getElementsByClassName('output')[0].innerText = '😁Secrete Number is greater than or equall to  15 😁';
        },1000)
    }
    
}
}