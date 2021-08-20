let len = document.querySelectorAll(".myButton").length;
let heading = document.querySelector("h1").innerHTML;

for(i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        document.querySelector("h1").innerHTML =  text + " is clicked";
    })
}

let remove = document.querySelector(".remove");
remove.addEventListener("click", function(){
    document.querySelector("h1").innerHTML = heading;
});

