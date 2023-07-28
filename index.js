// Add your code here
function submitData(name ="mary", email = "marynjoki738@gmail.com") {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const id = object.id;
        document.body.innerHTML = `User with ID ${id} has been successfully created.`;
      })
      .catch(function (error) {
        document.body.innerHTML = "An error occurred while processing your request.";
        console.log(error.message);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to form submission
    const form = document.getElementById("userForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = event.target.elements["name"].value;
      const email = event.target.elements["email"].value;
      submitData(name, email);
    });
  });
  