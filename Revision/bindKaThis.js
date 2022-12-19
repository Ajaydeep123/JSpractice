function fun(){
    console.log(this.name || "fuck");
}
var obj ={
    name: "YAsh pal"
}

var bindedFn= fun.bind(obj);
bindedFn(); //yash pal

var againBinf= new bindedFn();
/* 
empty object banega aur uska reference function ko milega
toh function ka this object ko reference karega jo ki khud hi empty hai toh kuch ni milega aur fir output me "fuck" ho jaega

*/