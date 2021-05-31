var repeat = document.getElementById("repeat");
var courses = document.querySelector("#courses");
var spec = document.querySelector("#spec");
var bachelor = document.querySelector("#bachelor");

repeat.onclick = () => {
    if(repeat.checked == true){
        document.getElementById("street2").value = document.getElementById("street1").value;
        document.getElementById("city2").value = document.getElementById("city1").value;
        document.getElementById("state2").value = document.getElementById("state1").value;
        document.getElementById("zip2").value = document.getElementById("zip1").value;
        document.getElementById("country2").value = document.getElementById("country1").value;
    } else {
        document.getElementById("street2").value ="";
        document.getElementById("city2").value ="";
        document.getElementById("state2").value = "";
        document.getElementById("zip2").value = null;
        document.getElementById("country2").value = "";
    }
}

courses.onclick = () => {
    if (courses.selectedIndex == 1 || courses.selectedIndex == 4)
    {
        spec.classList.remove("specialization");
    }
    else 
    {
        spec.classList.add("specialization");
    }
    if(courses.selectedIndex == 4 || courses.selectedIndex == 5){
        bachelor.classList.remove("Bachelors");
    } else {
        bachelor.classList.add("Bachelors");
    }
};

