const menuButton = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closebutton = document.getElementById("closeBtn");
const destinationsDisplay = document.getElementById("destinations");
const hotels = document.getElementById("hotels");

menuButton.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(0%)";
});

closebutton.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(-100%)";
});

// popular places array
// ==================== POPULAR DESTINATIONS ====================

const destinations = [
  {
    name: "Big Sur",
    location: "California, USA",
    image: "images/dog.jpg",
  },

  {
    name: "Prescott",
    location: "Arizona, USA",
    image: "images/dog.jpg",
  },

  {
    name: "Fort Myers",
    location: "Florida, USA",
    image: "images/dog.jpg",
  },

  {
    name: "Tucson",
    location: "Arizona, USA",
    image: "images/dog.jpg",
  },

  {
    name: "St. Joseph",
    location: "Michigan, USA",
    image: "images/dog.jpg",
  },

  {
    name: "Madrid",
    location: "Spain",
    image: "images/dog.jpg",
  },
];

destinationsDisplay.innerHTML = destinations
  .slice(0, 4)
  .map(
    (d) => `
<div class="destination_card" >
<img src="${d.image}" alt="${d.name} image" />
<h4> ${d.name} </h4>
<h5> ${d.location} </h5>
</div>
    `,
  )
  .join(" ");

// dynamically rendering rating stars
const products = [
  { name: "Product A", rating: 3 },
  { name: "Product B", rating: 5 },
  { name: "Product C", rating: 2 },
];

const mappedStars = products
  .map(
    (product) => `
${Array.from(
  { length: product.rating },
  (_, index) =>
    `<span key={index}>
       <i class="bi bi-star-fill"></i>
    </span>`,
).join("")}
    `,
  )
  .join("");

hotels.innerHTML = mappedStars;

console.log(mappedStars);

const fetchMovie = async () => {
  const data = await fetch(
    "https://api.tvmaze.com/search/shows?q=breaking%20bad",
  );
  const result = data.json();
};
