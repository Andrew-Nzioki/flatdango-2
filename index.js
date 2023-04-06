const url = "http://localhost:3000/films";

//create a function to render each film
function renderFilm(films) {
  //forEach
  //map
  films.forEach((film) => {
    //console.log(film.title);
    let listItem = document.createElement("li");
    listItem.innerText = film.title;

    document.getElementById("list").appendChild(listItem);

    //when a single film is clicked more details of the film are added to the DOM
    listItem.addEventListener("click", () => {
      //setting the of title on click
      let Title = document.getElementById("film-title");
      Title.innerText = film.title;
      //setting the value for runtime on click
      let Runtime = document.getElementById("runtime");
      Runtime.innerText = `${film.runtime} minutes`;
    //   The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`.
      let Poster=document.getElementById('poster')
      Poster.src=film.poster
      let Showtime=document.getElementById('showtime');
      Showtime.innerText=film.showtime
      let availableTickets=document.getElementById('available-tickets')
      availableTickets.innerText=`Available tickets: ${film.capacity-film.tickets_sold}`
      
      //Buy ticket button to reduce tickets available
      let BuyTicketData=document.getElementById('buy-ticket')
      BuyTicketData.addEventListener('click',(e)=>{
        e.preventDefault()
    
        availableTickets.innerText=`Available tickets: ${(film.capacity-film.tickets_sold)-1}`
      })

    });
  });
}

//create a function to get all films/data
function getAllFilm() {
  fetch(url)
    .then((res) => res.json())
    .then((films) => {
     // console.log(films);
      renderFilm(films);
    });
}
// getAllFilm()

console.log("connected successfully");

//calls the getallfilms function when the Window loads
window.addEventListener("load", getAllFilm);
