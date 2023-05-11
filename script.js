fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
let placeholder = document.querySelector("#data-output");
let out = "";
for(let product of products){
    out += 
     <tr>
        <td>${product.First_name}</td>
        <td>${product.Last_name}</td>
        <td>${product.description}</td>
     </tr>
    


};
      placeholder.innerHTML = out;
})