
 let expression =document.getElementById("row-text")
 let para = document.getElementById("row-text")

document.addEventListener("keydown",function disp(event){
    expression.innerHTML+=event.code
    
}) 
function display(val){
    expression.innerHTML+=val
}
function evaluateExpression(){
   let ans = eval(expression.innerHTML)
   expression.innerHTML= ans
}
function clr(){
  expression.innerHTML=""
}
function erase(){
 expression.innerHTML = expression.innerHTML.slice(0,expression.innerHTML.length-1)
}

function style_me(){
    para.style.border="2px solid black"
    para.style.backgroundColor="rgb(179, 250, 108)"
}
function original_style(){
    para.style.backgroundColor="aliceblue"
    para.style.border="none";
}
function factorial(){
 let num = parseInt(expression.innerHTML)
 
 if(num<0 )
{
    expression.innerHTML = "INVALID OUTPUT"
}
else if (num==0){
     expression.innerHTML = 0
 }
 else
 {
 let ans =1;
 for( i=1;i<=num;i++)
 { 
     ans = ans * i;
 }
 expression.innerHTML = ans;
}
}

