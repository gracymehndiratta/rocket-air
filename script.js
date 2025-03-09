document.addEventListener("DOMContentLoaded", function () {
  const apiContainer = document.getElementById("api-data");

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=3") 
    .then((response) => response.json()) 
    .then((data) => {
      apiContainer.innerHTML = ""; 
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.setAttribute("data-aos", "fade-up"); 
        postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
        apiContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      apiContainer.innerHTML = "<p>Failed to load data. Try again later.</p>";
      console.error("Error fetching data:", error);
    });
});
