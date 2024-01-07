// fetch() method: it is defined on the window object
// which we can use to perform request
// this methos will return Promise...
// Promise will either be fullfullided or rejected

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //   console.log(data);
    return data.json();
  })
  .then((completedata) => {
    // console.log(completedata[2].title);
    // document.getElementById("root").innerHTML = completedata[2].title;
    let data = "";
    completedata.map((values) => {
      data += ` <div class="card">
    <h1 class="title">${values.title}/h1>
    <img class='images' src=${values.image} alt=""> 
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
<p class="price">${values.price}</p>
</div>`;
    });
    document.getElementById("cards").innerHTML = data;
  })
  .catch((err) => {
    console.log(err);
  });
