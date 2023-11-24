const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

            addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
            const box = event.target.closest('.box');
            const starter = box.querySelector('h3').textContent;
            const price = box.querySelector('.price').textContent;

            // Update cart data or send information to the server
            console.log(`Adding ${starter} to cart for ${price}`);
            });
        });

function recommended() 
    {
     const year = document.getElementById('year').value;

    const food = 2023 - year;
          
    document.getElementsByClassName("food")[0].innerHTML = food;
    document.getElementsByClassName("food")[1].innerHTML = Result(food);
        
  
          
        return food;
    }
        
         
        
        
function Result(food) 
    {
        if (food < 12) {
            document.getElementsByClassName("food")[1].innerHTML = "<div>Iced Coffee</div><div>Frappe</div><div>Chocolate Cupcakes</div> ";
        } else if (food >= 12 && food <= 18) {
        document.getElementsByClassName("food")[1].innerHTML = "<div>Cappuccino</div><div>Latte</div><div>Iced Coffee</div><div>Frappe</div><div>Chocolate Coconut Cake</div><div>Chocolate Cupcakes</div><div>White Chocolate Cheesecake Wit</div><div>Red Velvet</div>";
        } else if (food > 18 && food <= 25) {
        document.getElementsByClassName("food")[1].innerHTML = "<div>Cappuccino</div><div>Espresso</div><div>Latte</div><div>Americano</div><div>Iced Coffee</div><div>Frappe</div><div>Coffee Arabica</div><div>Chocolate Coconut Cake</div><div>Chocolate Cupcakes</div><div>White Chocolate Cheesecake Wit</div><div>Red Velvet</div>";
        } else if (food > 25 && food <= 40) {
        document.getElementsByClassName("food")[1].innerHTML = "<div>Cappuccino</div><div>Espresso</div><div>Latte</div><div>Americano</div><div>Iced Coffee</div><div>Frappe</div><div>Coffee Arabica</div>";
        } else if (food > 40 && food <= 55) {
         document.getElementsByClassName("food")[1].innerHTML = "<div>Cappuccino</div><div>Americano</div><div>Coffee Arabica</div>";
        } else {
        document.getElementsByClassName("food")[1].innerHTML = "Not recommended all of drink and cake !!";
        }
          
        return type;
        }



        function orderfrm() {
            const name = document.getElementById('nameInput').value;
            const foodName = document.getElementById('foodnameInput').value;
            const quantity = document.getElementById('quantityInput').value;
            const phoneNumber = document.getElementById('phonenumberInput').value;

  
            if (!name || !foodName || !quantity || !phoneNumber ) {
              alert('Please fill in all required fields.');
              return false;
            }
  
            
  
            alert('Your order has been received. Wait for your the delivery !!.');
            return true;
          }
    