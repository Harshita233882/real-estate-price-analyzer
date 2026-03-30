
    // This function shows project details when card is clicked
function showproject(project) {

  let content = document.getElementById("details-content");

  if (project === "golden") {
    content.innerHTML = `
      <h3>Golden City Project</h3>
      <div class="gallery">
      <img src="plot images/plot1.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/city plot1.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot9.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot4.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot8.jpeg"
      onclick="openImage(this.src)">
      </div>

      <p>Location: Prime area with good road connectivity.</p>
      <p>Plot Size: 1000 - 2000 sq ft</p>
      <p>Price: Contact for details</p>
    `;
  }

  if (project === "vrindavan") {
    content.innerHTML = `
      <h3>Vrindavan Colony Project</h3>

      <div class="gallery">
      <img src="plot images/colony.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot10.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot5.jpeg"
      onclick="openImage(this.src)">
      <img src="plot images/plot7.jpeg"
      onclick="openImage(this.src)"
      onclick="openImage(this.src)">
      <img src="plot images/plot6.jpeg"
      onclick="openImage(this.src)">

      <p>Location: Peaceful residential area.</p>
      <p>Plot Size: 800 - 1500 sq ft</p>
      <p>Price: Contact for details</p>
    `;
  }
}
function openImage(src){
    let popup=
    document.getElementById("image-popup");
    let img=document.getElementById("popup-img");

    img.src=src;
    popup.style.display="flex";
    
}
function closeImage(){
    document.getElementById("image-popup").style.display="none";
}

let counters=
document.getElementById('.counter');

counters.forEach(counter => {
    counter.innerText='0';

    let updateCounter = () => {
        let target=+counter.getAttribute('data-target')
        || counter.innerText;
        let count = +counter.innerText;

        let increment=target/100;

        if(count<target){
            counter.innerText=Math.ceil(count+increment);
            setTimeout(updateCounter,20);

        }
        else{
            counter.innerText=target;

        }
    };

    updateCounter();
});

let form = document.getElementById("feedbackForm");
let feedbackList = document.getElementById("feedbackList");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let message = document.getElementById("message").value;

let feedback = {
name: name,
message: message
};

let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

feedbacks.push(feedback);

localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

displayFeedback();

form.reset();

});

function displayFeedback(){

let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

feedbackList.innerHTML = "";

feedbacks.forEach(f => {

feedbackList.innerHTML += `
<div class="feedback-card">
<h4>${f.name}</h4>
<p>${f.message}</p>
</div>
`;

});

}

displayFeedback();