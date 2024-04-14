function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/farmers/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var loginMessage = "Login successful";
                setTimeout(() => {
                    console.log("Login Successful");
                    // Redirect to a new HTML page
                    window.location.href = "dashboard.html"; // Replace "dashboard.html" with the desired page
                }, 1000);
                console.log("Login Message: " + loginMessage);
            } else if (xhr.status === 401) {
                var loginMessage = "Invalid credentials";
                console.log("Invalid credentials");
                console.log("Login Message: " + loginMessage);
                alert(loginMessage);
            } else {
                var loginMessage = "Error occurred during login";
                console.log("Error occurred during login");
                console.log("Login Message: " + loginMessage);
                alert(loginMessage);
            }
        }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
}


function signup() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var location = document.getElementById("location").value;
    var age = document.getElementById("age").value;
    var land = document.getElementById("land").value;
    var adharno = document.getElementById("aadhar").value;
    var contact = document.getElementById("contact").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/farmers/signup", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
                console.log("Registered Successfully")
            } else {
                document.getElementById("signupMessage").innerText = "Error signing up";
            }
        }
    };
    xhr.send(JSON.stringify({ name:name,username: username, password: password,location: location,age:age,land:land,adharno:adharno,contact:contact }));
}

function submit() {
    var crop_name = document.getElementById("name").value;
    var date = document.getElementById("date of cultivation").value;
    var period = document.getElementById("harverst").value;
    var cul_land = document.getElementById("land").value;
    var pesticide = document.getElementById("pesticide").value;
    var overall = document.getElementById("cost").value;
    var yield = document.getElementById("yeild").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/crops/addcrop", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
                console.log("Crop Added Successfully")
            } else {
                console.log("ERROR");
            }
        }
    };
    xhr.send(JSON.stringify({ crop_name:crop_name,period_of_cultivation:date, period_of_harvest:period,cultivation_land:cul_land,require_pesticide:pesticide,
    overall_cost:overall,expected_yield:yield }));
}