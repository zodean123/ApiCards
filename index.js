


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json();
  })
  .then(data => {
    let uldiv = document.getElementById("ul");

    data.map(user => {
      const card = document.createElement("div");
      card.className = "card";

      const nameElement = document.createElement("h2");
      nameElement.innerHTML = `${user.name}`;

      const usernameElement = document.createElement("p");
      usernameElement.innerHTML = `<span class="title">Username:</span> ${user.username}`;

      const emailElement = document.createElement("p");
      emailElement.innerHTML = `<span class="title">Email:</span> ${user.email}`;

      const addressElement = document.createElement("p");
      addressElement.innerHTML = `<span class="title">Address:</span> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

      const phoneElement = document.createElement("p");
      phoneElement.innerHTML = `<span class="title">Phone:</span> ${user.phone}`;

      const websiteElement = document.createElement("p");
      websiteElement.innerHTML = `<span class="title">Website:</span> ${user.website}`;

      const companyElement = document.createElement("p");
      companyElement.innerHTML = `<span class="title">Company:</span> ${user.company.name} - ${user.company.catchPhrase}`;

      card.appendChild(nameElement);
      card.appendChild(usernameElement);
      card.appendChild(emailElement);
      card.appendChild(addressElement);
      card.appendChild(phoneElement);
      card.appendChild(websiteElement);
      card.appendChild(companyElement);

      uldiv.appendChild(card);
    });
  })
  .catch(err => console.error('Error fetching users:', err));

