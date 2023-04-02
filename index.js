fetch("http://localhost:3000/films")
   .then (response => response.json())
   .then (data =>{
    const Kona = document.querySelector(".moviefilms");
    for(let i=0;i<data.length;i++){
        let title = data[i].title;
        let runtime = data[i].runtime;
        let capacity =data[i].capacity;
        let showtime = data[i].showtime;
        let poster = data[i].poster;
        const card =document.createElement("div");
        card.classList.add('card');
        card.innerHTML+=`
        <ol><p style = "color:white">${title}</p>
        <p style = "color:white">${runtime}</p>
        <p style = "color:white">${capacity}</p>
        <p style = "color:white">${showtime}</p>
        <img src='${poster}'style= "height:300px;width:200px" ><ol>
        `
        Kona.appendChild(card);
        }
 })
 const form = document.querySelector('.moviefilms');
 form.addEventListener('submit',handlesubmit);
 function handlesubmit(e){
    e.preventDefault()
    let movie= {
        movieTitle:e.target.title.value,
        Runtime:e.target.runtime.value,
        Capacity:e.target.capacity.value,
        Showtime:e.target.showtime.value,
        Poster:e.target.image.value
    }
}
    //console.log("hrtr");
 
 function submit(movie){
    //console.log(JSON.stringify(movieObj))
    fetch(" http://localhost:3000/films"),{
     method: 'POST',
     headers: {
        'Content-Type':'application/json'
     },
     body:JSON.stringify(movie)
 }
   .then(response=> response.json())
   .then(data =>console.log(data))
 }
 const Delete= document.getElementById("delete");
 Delete.addEventListener("click", myFunction);
 function myFunction(e) {
 e.preventDefault();
    fetch("http://localhost:3000/films", {
        method: "DELETE",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(myFunction),
    })
    .then(response=> response.json())
    .then(data =>console.log(data))
}
