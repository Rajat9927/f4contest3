const form = document.getElementById('form');
const username = document.getElementById('username');
//const usernameValue = username.value;
const title = document.getElementById('title'); 
const lookup = document.getElementById('search'); 
const count = document.getElementById('menu'); 


form.addEventListener('submit', e => {
  e.preventDefault();
 
  getMenu(username.value);
});



function getMenu(query) {
  console.log(query);
  fetch(`https://api.postalpincode.in/pincode/${query}`)
.then((response)=> response.json())
.then((data)=>{
  var dataLen = 0;
  let productData = data[0].PostOffice;
  username.style.display = "none";
  lookup.style.display = "none";
  console.log(productData);
  let addd = document.getElementById('getdataa');
  title.innerHTML = `Pincode${query}`;

  count.innerHTML = `Number of pincode(s) found:"${productData.length}`;
  
  // we use foor loop to access all product details.
  for (let i = 0; i < productData.length; i++) {
    let element = productData[i];
    let prodTitle = element.Name;
    let prodDescription = element.BranchType;
    let prodPrice = element.District;
    let prodRating = element.Division;
    let publisher = element.State;
    //let prodCountry = element.country;
    //let imagee = imageArr[0];
    //console.log(imageArr)
    
    

    //here wee are creating html tag with the help of java script, inside for loop. It will create html for all elements

    var cardtt = document.createElement("span");
  
  cardtt.innerHTML = `<div class="card">
  <div class="card-body">
    <h5 class="card-title"><b>Name:</b> ${prodTitle}</h5>
    <p class="card-text"><b>Branch Type:</b> ${prodDescription}</p>
    <p class="card-text"><b>District:</b> ${prodPrice}</p>
    <p class="card-text"><b>Division:</b> ${prodRating}</p>
    <p class="card-text"><b>State:</b> ${publisher}</p>
  </div>
</div>`
  addd.appendChild(cardtt);
  }
  //console.log(productData);

})

}





