
document.getElementById("addabtn").addEventListener("click",function()
{
    
    addtolist(document.querySelector("#listA ol"),document.getElementById("a_value"));
    
});


document.getElementById("addbbtn").addEventListener("click",function()
{
    
    addtolist(document.querySelector("#listB ol"),document.getElementById("b_value"));
    
});


function addtolist(tolist,input)
{
    let newitem=document.createElement("li");
    let value=document.createTextNode(input.value);
    newitem.appendChild(value);
    tolist.appendChild(newitem);
   // alert(document.querySelector("#listA ol li").innerHTML);
    newitem.addEventListener("click",function()
    {
       newitem.remove();
    });
    input.value="";
}
let formulaobj=document.getElementById("formula");

document.getElementById("applybtn").addEventListener("click",function()
{
    solve();
});
function solve()
{
 let a=document.querySelectorAll("#listA li");
 let b=document.querySelectorAll("#listB li");
 let pf=topostfix();
 for(let i=0;i<a.length;i++)
 {
     let x=Number(a[i].innerHTML);
     let y=Number(b[i].innerHTML);
     let ans=result(pf,x,y);
     //alert(pf);
     let newitem=document.createElement("li");
     let value=document.createTextNode(String(ans));
     newitem.appendChild(value);
     document.querySelector("#result ol").appendChild(newitem);
   
 } 
}
function topostfix()
{
   let ans="";
   let s=[];
   let formula=formulaobj.value;
   for(let i=0;i<formula.length;i++)
   {
       if(formula[i]=='A'||formula[i]=='B')
       {
         ans+=formula[i];
       }
       else if(formula[i]==')')
       {
            while(s.length!=0&&s[s.length-1]!='(')
             {
                 ans+=s.pop();
             }
             s.pop();
       }
       else{
           s.push(formula[i]); 
       }
   }
   return ans;
}
function result(pf,A,B)
{
   let ans;
   let s=[];
   for(let i=0;i<pf.length;i++)
   {
       if(pf[i]=='A')
       s.push(A);
       else if(pf[i]=='B')
       s.push(B);
       else{
           let y=s.pop();
           let x=s.pop();
           x=getval(x,y,pf[i]);
           //console.log(x+" "+y);
           s.push(x);
       }
   }
   console.log(s[0]);
   return s[0];
}
function getval(x,y,op)
{
    if(op=='+')
    return x+y;
    if(op=='-')
    return x-y;
    if(op=='*')
    return x*y;
    if(op=='/')
    return x/y;
    if(op=='^')
    return Math.pow(x,y);
}