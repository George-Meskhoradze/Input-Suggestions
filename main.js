let names = ["Jhon","Angela","Jhoshua","George","Nick","James","Arnold","Victoria","Neo","Kay","Leo","Dimitri","Germen","Lucas",
"Hanabi","Lorant","Kevin", "Amanda" ,	"Brian" ,	"Dorothy","George","Melissa","Timothy2", 	"Deborah","Ronald","Stephanie","Edward", 	"Rebecca","Jason","Sharon","Jeffrey651","Laura","Ryan","Cynthia", "Jacob","Kathleen", "Gary","Amy" ,"Nicholas","Eric","Shirley", "Jonathan","Anna", "Stephen","Brend","Larry","Pamela", "Justin","Emma","Brandon","Helen","Benjamin","Samantha", "Samuel","Katherine", "Gregory", "Christine","Alexander","Debra", "Frank","Rachel","Hanabi","Lorant","Kevin", "Amanda" ,	"Brian" ,	"Dorothy","George","Melissa","Timothy2", 	"Deborah","Ronald","Stephanie","Edward", 	"Rebecca","Jason","Sharon","Jeffrey651","Laura","Ryan","Cynthia", "Jacob","Kathleen", "Gary","Amy" ,"Nicholas","Eric","Shirley", "Jonathan","Anna", "Stephen","Brend","Larry","Pamela", "Justin","Emma","Brandon","Helen","Benjamin","Samantha", "Samuel","Katherine", "Gregory", 	 	"Christine","Alexander", 	 	"Debra", "Frank","Rachel"]	


let sortNames = names.sort()
let input = document.querySelector(".search")

input.addEventListener("keyup", (e) => {
  removeElements();
  for(let i of sortNames) {
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {


      let listItem = document.createElement("li");
      listItem.classList.add("list-item");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      let word = "<b>" + i.substring(0, input.value.length) + "</b>";
      word += i.substring(input.value.length);
      console.log(word)

      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem)
    }
  }
});


function displayNames(value) {
  input.value = value
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll(".list-item")
  items.forEach((item) => {
    item.remove();
  })
}
