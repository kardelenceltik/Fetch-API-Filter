alert("Please enter age!");
const apiUrl = "https://randomuser.me/api/?results=35";
//apply filter function
const ApplyFilter = () => {
  let age = document.getElementById("age-filter").value;

  let userListElement = document.getElementById("user-list");

  fetch(apiUrl).then((response) => {
    response.json().then((userResponse) => {
      userListElement.innerHTML = "";

      let userCount = 0;

      userResponse.results.forEach((user) => {
        if (user.registered.age == age) {
          userCount = userCount + 1;
          // generate card html for current user
          let cardElement = GenerateCardHtmlForUser(user);
          //append card html
          userListElement.insertAdjacentHTML("afterbegin", cardElement);
        }
      });

      //user count zero check
      if (userCount == 0) {
        document.getElementById("user-count").innerHTML = "No available data";
      } else {
        document.getElementById(
          "user-count"
        ).innerHTML = `Show ${userCount} user`;
      }
    });
  });
};

//generate card html for related user
const GenerateCardHtmlForUser = (user) => {
  return `  <div class="card-list">
  <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
<img src="${user.picture.large}" class="card-img-top" alt="...">

<div class="card-body">


<p class="card-text"> Fullname:  ${user.name.first}  ${user.name.last} 
</p>

<p class="card-text"> Age:   
${user.registered.age} </p>

<p class="card-text"> Gender:   ${user.gender} </p>

<p class="card-text"> Email:   ${user.email} </p>

<p class="card-text"> Phone:  ${user.phone}</p>



</div>
</div></div>`;
};
