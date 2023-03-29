let show = document.getElementById('show');
let input = document.getElementById('input');

let arr = [ "Daniel","festus",'kunle',"Abiola","Ifeoluwa","Abiola","Ifeoluwa","Kunle","osamede","precious",
"ifeoluwa", "sodiq","oyin","mike","Abigeal","Abbas","Timi","kunle", "Abiola", "oyin"

];
// show.innerHTML = arr;

function ShowResult () {
    let people = arr.filter((person) => person == input.value);

    if( input.value === ""){
        show.innerHTML = ""
    }

    else if (people = "") {
        show.innerHTML = "";
        people.map(function (element) {
            show.innerHTML += "<hi>" + element + "</h1>";
            //console.log(element);
        })
    }
    else {
        show.innerHTML = "no match found"
    }
}
