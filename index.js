let secreteNumber = Math.trunc(Math.random()*20) + 1 ;
let SetAttributeIninputNumber = document.getElementsByTagName('button')[0].setAttribute('onclick',`compare(${secreteNumber})`);
function compare(){
    let inputNumber =parseFloat( document.getElementsByTagName('input')[0].value) ;

if(secreteNumber == inputNumber){
console.log('๐๐๐๐You matched๐๐๐๐');
document.getElementsByClassName('output')[0].innerText = '๐๐๐๐You matched๐๐๐๐';
document.getElementsByTagName('input')[0].innerText = ' ';
}
else if(secreteNumber <= 10 ){

if(secreteNumber>5){
    console.log('Secrete Number is greater than 5');
    setTimeout(()=>{
        document.getElementsByClassName('output')[0].innerText = '๐Secrete Number is greater than or equall to 5 ๐';
    },1000)
    
}else{
console.log('Secrete Number is less than 5');
setTimeout(()=>{
    document.getElementsByClassName('output')[0].innerText = '๐Secrete Number is less than  or equall to 5 ๐';
},1000)

}
     
}else if(secreteNumber>10){

    if(secreteNumber<15){
        console.log('Secrete Number is less than 15');
        setTimeout(()=>{
            document.getElementsByClassName('output')[0].innerText = '๐Secrete Number is less than or equall to 15 ๐';
        },1000)
        
     
    }else{
        console.log('Secrete Number is greater than 15');
        setTimeout(()=>{
            document.getElementsByClassName('output')[0].innerText = '๐Secrete Number is greater than or equall to  15 ๐';
        },1000)
    }
    
}
}