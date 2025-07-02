var arr=["one","two","three","four"]
    let cor=[];
    var start=1;
    var count=1-start;
    var c=0;
    function starts(){
       if((document.getElementById("title").innerHTML=="Restart")){
        start=1;
        simon()
    }
    else{
      simon();
    }
  }
    function simon(){
      // if((document.getElementById("title").innerHTML=="Restart")&& (c==0)){
      //   start=1;
      //   c=1;
      // }
     document.getElementById("title").innerHTML="Restart";
     document.getElementById("heading").innerHTML="Level "+start;
      cor=[];
      count=0;
   for(let i=0;i<start;i++){
        setTimeout(myGreeting, i*1000);
    function myGreeting(){
        let ran=arr[Math.floor(4*Math.random())];
        let btn = document.getElementById(ran);
        cor[i]=ran;
        console.log(cor[i]+" random value")
        console.log(cor)

if(btn.id=="one"){
btn.setAttribute("class","text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2");
setTimeout(() => {
        
        btn.setAttribute("class","btn")
        }, 700);
}
else if(btn.id=="two"){
btn.setAttribute("class","text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2");
setTimeout(() => {
     
        btn.setAttribute("class","btn")
        }, 700);
}
else if(btn.id=="three"){
btn.setAttribute("class","text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2");
setTimeout(() => {
        
        btn.setAttribute("class","btn")
        }, 700);
}
else{
btn.setAttribute("class","text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2");
setTimeout(() => {
        
        btn.setAttribute("class","btn")
        }, 700);
}
    }
    }
    }
for(let i=0;i<4;i++){
    document.querySelectorAll("button")[i].addEventListener("click",check)
}

function check(){
    if(this.id==cor[count]){
        temp=count;
        if(temp+1==start){
          console.log("win this round");
          start++;
          simon();
        }
        else{
            count++;
            console.log("correct");
        }
          
    }
    else{
        console.log("loss")
        start=1;
        document.getElementById("heading").innerHTML="Oops:) Give another try"
        document.getElementById("title").innerHTML="Start Again";
    }
}