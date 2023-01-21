

fetch('https://jsonplaceholder.typicode.com/users').
  then(res => {
    return res.json()
  }).then(data => {
    let uldiv = document.getElementById("ul");
  
 
    for(let i=0;i<data.length;i++) {
      const tab = document.createElement("div");
      tab.id = "test";

      const node = document.createElement("h1");
      const namenode = document.createTextNode(data[i].name);
      const usernamenode = document.createTextNode(data[i].username);
      const phone = document.createTextNode(data[i].phone);
      const userwebsite = document.createTextNode(data[i].website);
      const useremail = document.createTextNode(data[i].email);
     var address = new Array();
     address = document.createTextNode(data[i].address.street + " ," + data[i].address.suite + "," + data[i].address.city + "," + data[i].address.zipcode +"," +  data[i].address.geo.lat + "," +  data[i].address.geo.lng)
     var company = new Array();
     company = document.createTextNode(data[i].company.bs + " ," + data[i].company.catchPhrase + "," + data[i].company.name);
      
      node.appendChild(namenode);
      node.appendChild(document.createElement("br"));
      node.appendChild(usernamenode);
      node.appendChild(document.createElement("br"));
      node.appendChild(address);
      node.appendChild(document.createElement("br"));
      node.appendChild(company);
      node.appendChild(document.createElement("br"));
      node.appendChild(phone);
      node.appendChild(document.createElement("br"));
      node.appendChild(userwebsite);
     node.appendChild(useremail);
      tab.appendChild(node);
      uldiv.appendChild(tab);
    }
    console.log(uldiv)
    
  }).catch(err =>
    console.log(err))
