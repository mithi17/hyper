import React from 'react'

const Home1 = () => {

    var rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
        let colOpen = row.querySelector(".show-col"),
        colClose = row.querySelector(".close-col");
        
        colOpen.addEventListener("click", function () {
            row.classList.add("box-active");
        });

        colClose.addEventListener("click", function () {
            row.classList.remove("box-active");
        });
    });


  return (
    <div>
        <div class="row">
          <div class="col p-2">
            <h2>Praesent Necus</h2>
            <p>In ut quam vitae odio lacinia tincidunt. Nam commodo suscipit quam. Nam adipiscing. Aliquam lobortis. Cras ultricies mi eu turpis hendrerit fringilla.</p>
            <button type="button" class="show-col">Read More</button>
          </div>
          <div class="col">
            <img src="https://via.placeholder.com/600x400/529fb8/ffffff" />
          </div>
          <div class="col p-2">
            <p>Praesent ut ligula non mi varius sagittis. Praesent venenatis metus at tortor pulvinar varius. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Praesent venenatis metus at tortor pulvinar varius.</p>
            <button type="button" class="close-col">Close</button>
          </div>
        </div>

        <div class="row">
          <div class="col p-2">
            <h2>Praesent Necus</h2>
            <p>In ut quam vitae odio lacinia tincidunt. Nam commodo suscipit quam. Nam adipiscing. Aliquam lobortis. Cras ultricies mi eu turpis hendrerit fringilla.</p>
            <button type="button" class="show-col">Read More</button>
          </div>
          <div class="col">
            <img src="https://via.placeholder.com/600x400/529fb8/ffffff" />
          </div>
          <div class="col p-2">
            <p>Praesent ut ligula non mi varius sagittis. Praesent venenatis metus at tortor pulvinar varius. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Praesent venenatis metus at tortor pulvinar varius.</p>
            <button type="button" class="close-col">Close</button>
          </div>
        </div>
    </div>
  )
}

export default Home1
