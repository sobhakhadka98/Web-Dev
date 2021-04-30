var firstName = document.querySelector("#fname");
var lastName = document.querySelector("#lname");
var dob = document.getElementById("dob");
var email = document.getElementById("email");
var repeat = document.getElementById("repeat");
var onlyNumeric = document.getElementsByClassName("onlyNumeric");
var street1 = document.getElementById("street1");
var country1 = document.getElementById("country1");
var street2 = document.getElementById("street2");
var country2 = document.getElementById("country2");
var bachelor = document.querySelector("#bachelor");
var courses = document.querySelector("#courses");
var spec = document.querySelector("#spec");
var spec2 = document.querySelector("#spec2");
var spec2 = document.querySelector("#spec3");
var month, datee;
var valid = false;

firstName.onblur = () => {
    if(firstName.value.length == 0){
        document.getElementById("fnameError").classList.remove("error");
        document.getElementById("fnameError").innerText = "First name can't be blank";
    }
    else {
        document.getElementById("fnameError").classList.add("error");
    }
}

lastName.onblur = () => {
    if(lastName.value.length == 0){
        document.getElementById("lnameError").classList.remove("error");
        document.getElementById("lnameError").innerText = "Last name can't be blank";
    }
    else {
        document.getElementById("lnameError").classList.add("error");
    }
}

dob.onclick = () => {
    var today = new Date(); 
    
    if(today.getMonth()<10)
        month = "0" + (today.getMonth()+1).toString();
    else
        month = (today.getMonth()+1).toString();
    datee = ((today.getFullYear()-17).toString())+"-"+ month +"-"+(today.getDate().toString());
}

dob.onblur = () => {
    console.log("blur");
    if(document.getElementById("dob").value>datee){
        document.getElementById("dobError").classList.remove("error");
        document.getElementById("dobError").innerHTML = "Please enter correct DOB. You are expected to be 17+"
        dob.value="";
    }
    else {
        document.getElementById("dobError").classList.add("error");
    }
}

email.onblur = () => {
    if(email.value.length == 0){
        document.getElementById("emailError").classList.remove("error");
        document.getElementById("emailError").innerText = "Email can't be blank";
    }
    else {
        document.getElementById("emailError").classList.add("error");
    }
}

email.onkeypress = () => {
    if(!isEmail(email.value)){
        document.getElementById("emailError").classList.remove("error");
        document.getElementById("emailError").innerHTML = "Please enter in the format someone@example.com";
    } else {
        document.getElementById("emailError").classList.add("error");
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkIfNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("mobError").classList.remove("error");
        document.getElementById("mobError").innerHTML = "Please enter only numeric";
        return false;
    }
    document.getElementById("mobError").classList.add("error");
    return true;
}

category.onblur = () => {
    if(category.value == 0){
        document.getElementById("categoryError").classList.remove("error");
        document.getElementById("categoryError").innerText = "Category can't be blank";
    }
    else {
        document.getElementById("categoryError").classList.add("error");
    }
}

bloodGroup.onblur = () => {
    if(bloodGroup.value == 0){
        document.getElementById("bloodGroupError").classList.remove("error");
        document.getElementById("bloodGroupError").innerText = "Blood Group can't be blank";
    }
    else {
        document.getElementById("bloodGroupError").classList.add("error");
    }
}

street1.onblur = () => {
    if(street1.value.length == 0){
        document.getElementById("street1Error").classList.remove("error");
        document.getElementById("street1Error").innerText = "Address can't be blank";
    }
    else {
        document.getElementById("street1Error").classList.add("error");
    }
}

country1.onblur = () => {
    if(country1.value == 0){
        document.getElementById("country1Error").classList.remove("error");
        document.getElementById("country1Error").innerText = "Country can't be blank";
    }
    else {
        document.getElementById("country1Error").classList.add("error");
    }
}

state1.onblur = () => {
    if(state1.value == 0){
        document.getElementById("state1Error").classList.remove("error");
        document.getElementById("state1Error").innerText = "State can't be blank";
    }
    else {
        document.getElementById("state1Error").classList.add("error");
    }
}

city1.onblur = () => {
    if(city1.value == 0){
        document.getElementById("city1Error").classList.remove("error");
        document.getElementById("city1Error").innerText = "City can't be blank";
    }
    else {
        document.getElementById("city1Error").classList.add("error");
    }
}

function checkZip1Number(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("zip1Error").classList.remove("error");
        document.getElementById("zip1Error").innerHTML = "Please enter only numeric";
        return false;
    }
    document.getElementById("zip1Error").classList.add("error");
    return true;
}

repeat.onclick = () => {
    if(repeat.checked == true){
        
        setTimeout(
            myObj2.load_state(document.getElementById("country1").value)
        , 5000);
        setTimeout(
            myObj2.load_city(document.getElementById("state1").value)
        , 5000);
        document.getElementById("street2").value = document.getElementById("street1").value;
        document.getElementById("zip2").value = document.getElementById("zip1").value;
        document.getElementById("country2").value = document.getElementById("country1").value;
        document.getElementById("state2").value = document.getElementById("state1").value;
        document.getElementById("city2").value = document.getElementById("city1").value;
    } else {
        document.getElementById("street2").value ="";
        document.getElementById("city2").value =-1;
        document.getElementById("state2").value = -1;
        document.getElementById("zip2").value = null;
        document.getElementById("country2").value = -1;
    }
}

street2.onblur = () => {
    if(street2.value.length == 0){
        document.getElementById("street2Error").classList.remove("error");
        document.getElementById("street2Error").innerText = "Address can't be blank";
    }
    else {
        document.getElementById("street2Error").classList.add("error");
    }
}

country2.onblur = () => {
    if(country2.value == 0){
        document.getElementById("country2Error").classList.remove("error");
        document.getElementById("country2Error").innerText = "Country can't be blank";
    }
    else {
        document.getElementById("country2Error").classList.add("error");
    }
}

state2.onblur = () => {
    if(state2.value == 0){
        document.getElementById("state2Error").classList.remove("error");
        document.getElementById("state2Error").innerText = "State can't be blank";
    }
    else {
        document.getElementById("state2Error").classList.add("error");
    }
}

city2.onblur = () => {
    if(city2.value == 0){
        document.getElementById("city2Error").classList.remove("error");
        document.getElementById("city2Error").innerText = "City can't be blank";
    }
    else {
        document.getElementById("city2Error").classList.add("error");
    }
}

function checkZip2Number(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("zip2Error").classList.remove("error");
        document.getElementById("zip2Error").innerHTML = "Please enter only numeric";
        return false;
    }
    document.getElementById("zip2Error").classList.add("error");
    return true;
}

courses.onblur = () => {
    if(courses.value == 0){
        document.getElementById("coursesError").classList.remove("error");
        document.getElementById("coursesError").innerText = "Courses can't be blank";
    }
    else {
        document.getElementById("coursesError").classList.add("error");
    }
}

courses.onclick = () => {
    if (courses.selectedIndex == 1 || courses.selectedIndex == 4)
    {
        spec.classList.remove("specialization");
        spec2.classList.remove("specialization");
    }
    else 
    {
        spec.classList.add("specialization");
        spec2.classList.add("specialization");
    }
    if(courses.selectedIndex == 4 || courses.selectedIndex == 5){
        bachelor.classList.remove("Bachelors");
    } else {
        bachelor.classList.add("Bachelors");
    }
};

spec3.onblur = () => {
    if(spec3.value == 0){
        document.getElementById("spec3Error").classList.remove("error");
        document.getElementById("spec3Error").innerText = "Specialization can't be blank";
    }
    else {
        document.getElementById("spec3Error").classList.add("error");
    }
}

//Dynamically loading state and city
var myObj1 = 
{
    init:function()
    {
        var that = this;
        this.load_country();
        document.getElementById("country1").addEventListener('change', function()
        {
            that.load_state(this.value);
        });
        document.getElementById("state1").addEventListener('change', function()
        {
            that.load_city(this.value);
        });
    },
    load_country:function()
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                var op = document.createElement('option');
                op.innerText = value.name;
                op.setAttribute('value', value.id);
                document.getElementById('country1').appendChild(op);
            });
        }
        xhr.send();
    },
    load_state:function(id)
    {
        document.getElementById('state1').innerHTML = '';
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                if(value.country_id == id){
                    var op = document.createElement('option');
                    op.innerText = value.name;
                    op.setAttribute('value', value.id);
                    document.getElementById('state1').appendChild(op);
                }
                
            });
        }
        xhr.send();
    },
    load_city:function(id)
    {
        document.getElementById('city1').innerHTML = '';
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                if(value.state_id == id){
                    var op = document.createElement('option');
                    op.innerText = value.name;
                    op.setAttribute('value', value.id);
                    document.getElementById('city1').appendChild(op);
                }

            });
        }
        xhr.send();
    }
}
myObj1.init();

var myObj2 = 
{
    init:function()
    {
        var that = this;
        this.load_country();
        document.getElementById("country2").addEventListener('change', function()
        {
            that.load_state(this.value);
        });
        document.getElementById("state2").addEventListener('change', function()
        {
            that.load_city(this.value);
        });
    },
    load_country:function()
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                var op = document.createElement('option');
                op.innerText = value.name;
                op.setAttribute('value', value.id);
                document.getElementById('country2').appendChild(op);
            });
        }
        xhr.send();
    },
    load_state:function(id)
    {
        document.getElementById('state2').innerHTML = '';
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                if(value.country_id == id){
                    var op = document.createElement('option');
                    op.innerText = value.name;
                    op.setAttribute('value', value.id);
                    document.getElementById('state2').appendChild(op);
                }
                
            });
        }
        xhr.send();
    },
    load_city:function(id)
    {
        document.getElementById('city2').innerHTML = '';
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json',true);
        xhr.onload = function()
        {
            var countries = JSON.parse(xhr.responseText);
            countries.forEach(function(value)
            {
                if(value.state_id == id){
                    var op = document.createElement('option');
                    op.innerText = value.name;
                    op.setAttribute('value', value.id);
                    document.getElementById('city2').appendChild(op);
                }

            });
        }
        xhr.send();
    }
}
myObj2.init();