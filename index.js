

// fetch('https://jsonplaceholder.typicode.com/users').
//   then(res => {
//     return res.json()
//   }).then(data => {
//     let uldiv = document.getElementById("ul");
  
 
//     for(let i=0;i<data.length;i++) {
//       const tab = document.createElement("div");
//       tab.id = "test";

//       const node = document.createElement("h1");
//       const namenode = document.createTextNode(data[i].name);
//       const usernamenode = document.createTextNode(data[i].username);
//       const phone = document.createTextNode(data[i].phone);
//       const userwebsite = document.createTextNode(data[i].website);
//       const useremail = document.createTextNode(data[i].email);
//      var address = new Array();
//      address = document.createTextNode(data[i].address.street + " ," + data[i].address.suite + "," + data[i].address.city + "," + data[i].address.zipcode +"," +  data[i].address.geo.lat + "," +  data[i].address.geo.lng)
//      var company = new Array();
//      company = document.createTextNode(data[i].company.bs + " ," + data[i].company.catchPhrase + "," + data[i].company.name);
      
//       node.appendChild(namenode);
//       node.appendChild(document.createElement("br"));
//       node.appendChild(usernamenode);
//       node.appendChild(document.createElement("br"));
//       node.appendChild(address);
//       node.appendChild(document.createElement("br"));
//       node.appendChild(company);
//       node.appendChild(document.createElement("br"));
//       node.appendChild(phone);
//       node.appendChild(document.createElement("br"));
//       node.appendChild(userwebsite);
//      node.appendChild(useremail);
//       tab.appendChild(node);
//       uldiv.appendChild(tab);
//     }
//     console.log(uldiv)
    
//   }).catch(err =>
//     console.log(err))
    
    
//     const arr = [{
//       id:1,key:"rohan"
//   },
//   {id:2,key:"samarth"},
//   {id:3,key:"manjit"}]
  
  
//   const name=arr.filter((e)=> e.key ==="samarth");
//   console.log(name);
  


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

