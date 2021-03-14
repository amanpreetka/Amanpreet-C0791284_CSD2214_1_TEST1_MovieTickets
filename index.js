const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectmovie = document.getElementById("movie");
const ticketPrice = document.getElementById("ticket_price");
let priceofticket = parseInt(selectmovie.value);

//To count the seats
function updatetheseats() {
  const selectedSeats = document.querySelectorAll(".row .selected");
  const countselectedseats = selectedSeats.length;
  count.innerHTML = countselectedseats;
  ticketPrice.innerHTML = priceofticket;
  //it will multiple the count * priceofticket
  total.innerHTML = countselectedseats * priceofticket;
}


//it will fetch the value or price of ticket and get call by function
selectmovie.addEventListener("change", (e) => {
  priceofticket = parseInt(e.target.value);
  updatetheseats();
});

//to fetch the price of movie


container.addEventListener("click", (e) => {
  console.log(e);
  //to apply event only on class name seat and not on class = occupied
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
    updatetheseats();
  }
});

function proceed() {
      if (!e.target.classList.contains("selected"))  {
        alert("Nothing is selected");       
      }
  }
