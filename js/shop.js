//Variable declaration in jquery
let fName = $('#fName'),
  age = $('#age'),
  email = $('#email'),
  phoneNumber = $('#phoneNumber'),
  regBtn = $('#regBtn'),
  productIndex,
  products = [],
  globalIpAddress="http://159.65.21.42:9000";

loadShopsData();


function loadShopsData() {
  $.ajax({
    type: 'GET',
    url: `${globalIpAddress}/products`,
    success: function (response) {
      products = response;
      let rows = '';
      for (let index = 0; index < products.length; index++) {

          if(products[index]['category']== "jaySlider" ){
            rows += ` 
            <div class="item" id="prod-item">
                <img src="${globalIpAddress}${products[index]['image']}" alt=""><br>
                <h4>${products[index]['name']}</h4>
                <small>$${products[index]['price']}</small><br />
                <a href="product.html"><button class="product-btn">QUICK SHOP</button></a>
            </div>`;
          }
       
      }

      $('#product-items-2').html(rows);
    },
    error: function (err) {
      console.log(err);
    },
  });

}

function clearForm() {
  fName.val('');
  age.val('');
  email.val('');
  phoneNumber.val('');
}
