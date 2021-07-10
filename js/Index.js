console.log("This is js file");
//9ad3ff30ecd54a2f8793d57d5ca63534

let country = "in"; //India
let apiKey = "4173a6ca06935619d18ca3c5b2a066b5";//"9ad3ff30ecd54a2f8793d57d5ca63534";
//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");


//Create a get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?lang=en&country=${country}&token=${apiKey}`, true)

//What to do when response is ready
xhr.onload = function showNews() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        let newsHTML = "";
        let crouselImgs = document.getElementsByClassName("crousel-img");
        let crouselHeadings = document.getElementsByClassName("crousel-heading");

        articles.forEach(function (element, index) {
            //console.log(articles[news]);
            if (index < 5) {
                crouselImgs[index].src = element.image;
                crouselHeadings[index].innerText = element.title;
            }
            let news = `
            <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
              <button class="accordion-button collapsed btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
                            <strong>Breaking News  ${index + 1} : </strong>   ${element["title"]}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
      <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read more</a><br>
      <div class="mx-auto"></div>
      </div>
                    </div>
                </div>
            `;
            newsHTML += news;
        });
        // let ci1=document.getElementById("crousel-1-img");
        // let ci2=document.getElementById("crousel-2-img");
        // let ci3=document.getElementById("crousel-3-img");
        // ci1.src=articles[0].image;
        // ci2.src=articles[1].image;
        // ci3.src=articles[2].image;
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error");
    }
}

xhr.send();


let countries1 = document.getElementsByClassName("countries");
let countries = Array.from(countries1);

//console.log(countries);

countries.forEach(function (elem, idx) {
    elem.addEventListener('click', function () {
        console.log(idx);
        let navBarDD=document.getElementById("navbarDropdown");
        if (idx == 0) {
            country = "au";
            navBarDD.innerText="Australia";

        }
        else if (idx == 1) {
            country = "br";
            navBarDD.innerText="Brazil";

        }
        else if (idx == 2) {
            country = "ca";
            navBarDD.innerText="Canada";

        }
        else if (idx == 3) {
            country = "ch";
            navBarDD.innerText="Switzerland";
        }
        else if (idx == 4) {
            country = "cn";
            navBarDD.innerText="China";

        }
        else if (idx == 5) {
            country = "de";
            navBarDD.innerText="Germany";

        }
        else if (idx == 6) {
            country = "in";
            navBarDD.innerText="India";

        }
        else if (idx == 7) {
            country = "jp";
            navBarDD.innerText="Japan";

        }
        else if (idx == 8) {
            country = "pk";
            navBarDD.innerText="Pakistan";

        }
        else if (idx == 9) {
            country = "ru";
            navBarDD.innerText="Russia";

        }
        else if (idx == 10) {
            country = "sg";
            navBarDD.innerText="Singapore";

        }
        else if (idx == 11) {
            country = "Unitd States";

        }

        let xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `https://gnews.io/api/v4/top-headlines?lang=en&country=${country}&token=${apiKey}`, true)
        xhr2.onload = function() {
            if (this.status == 200) {
                json = JSON.parse(this.responseText);
                articles = json.articles;
                console.log(json);

                console.log(articles.length);

                if(articles.length==0){
                    document.getElementById("Warning").style.display="block";
                    document.getElementById("carousel").style.display="none";
                }
                else{
                    document.getElementById("Warning").style.display="none";
                    document.getElementById("carousel").style.display="block";
                }

                newsHTML = "";
                let crouselImgs = document.getElementsByClassName("crousel-img");
                let crouselHeadings = document.getElementsByClassName("crousel-heading");

                articles.forEach(function (element, index) {
                    //console.log(articles[news]);
                    if (index < 5) {
                        crouselImgs[index].src = element.image;
                        crouselHeadings[index].innerText = element.title;
                    }
                    let news = `
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                      <button class="accordion-button collapsed btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
                                    <strong>Breaking News  ${index + 1} : </strong>   ${element["title"]}
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
              <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read more</a><br>
              <div class="mx-auto"></div>
              </div>
                            </div>
                        </div>
                    `;
                    newsHTML += news;
                });
                newsAccordion.innerHTML = newsHTML;

                

            }
            else {
                console.log("Some error");
            }
        }
        xhr2.send();


        //What to do when response is ready



    });
});




// countries.forEach(function (element,index) {
//     element.addEventListner('click',function(index){
//         console.log(this.index);
//         if(this.index=0){
//             country="au";
//             location.reload();
//         }
//         else if(this.index=1){
//             country="br";
//             location.reload();
//         }
//         else if(this.index=2){
//             country="ca";
//             location.reload();
//         }
//         else if(this.index=3){
//             country="ch";
//             location.reload();
//         }
//         else if(this.index=4){
//             country="cn";
//             location.reload();
//         }
//         else if(this.index=5){
//             country="de";
//             location.reload();
//         }
//         else if(this.index=6){
//             country="in";
//             location.reload();
//         }
//         else if(this.index=7){
//             country="jp";
//             location.reload();
//         }
//         else if(this.index=8){
//             country="pk";
//             location.reload();
//         }
//         else if(this.index=9){
//             country="ru";
//             location.reload();
//         }
//         else if(this.index=10){
//             country="sg";
//             location.reload();
//         }
//         else if(this.index=11){
//             country="us";
//             location.reload();
//         }
//     })
// });



