fetch("http://localhost:3000/films")
   .then (response => response.json())
   .then (data =>{
    const Kona = document.querySelector(".Films");
    for(let i=0;i<data.length;i++){
        let title = data[i].title;
        let runtime = data[i].runtime;
        let showtime = data[i].showtime;
        let poster = data[i].poster;
        const card =document.createElement("div");
        card.classList.add('card');
        card.innerHTML+=`
        <ol><p style = "color:white">${title}</p>
        <p style = "color:white">${runtime}</p>
        <p style = "color:white">${showtime}</p>
        <img src='${poster}'style= "height:300px;width:200px" ><ol>
        `
        Kona.appendChild(card);
        }

 })
