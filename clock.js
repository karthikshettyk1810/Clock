const clock=()=>{
let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()

// console.log(h,m,s)

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

// const clock=(h,m,s)=>
// {
// document.write(h,":",m,":",s)
// }

document.getElementById("clock").innerHTML ="CLOCK<br>"+h+":"+m+":"+s;
}

// clock(a.getHours(),a.getMinutes(),a.getSeconds())
// setInterval(clock,1000,a.getHours(),a.getMinutes(),a.getSeconds())
// clock()
// document.alert("hello")
clock()
setInterval(clock, 1000)