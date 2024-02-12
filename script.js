// Get all tag buttons
const tagButtons = document.querySelectorAll(".tag-btn");
// Get all images
const images = document.querySelectorAll(".image");

// Function to filter images based on tag
function filterImages(tag) {
  images.forEach((image) => {
    const tags = image.getAttribute("data-tags").split(" ");
    if (tags.includes(tag) || tag === "all") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

// Add click event listener to each tag button
tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    tagButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to clicked button
    button.classList.add("active");
    // Filter images based on clicked tag
    const tag = button.getAttribute("data-tag");
    filterImages(tag);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const columnToggleButton = document.querySelector(".column-toggle-btn");
  const gallery = document.querySelector(".gallery");

  let isFourColumns = true; // Track current column count state

  columnToggleButton.addEventListener("click", function () {
    isFourColumns = !isFourColumns; // Toggle column count state
    if (isFourColumns) {
      gallery.style.columnCount = "4";
    } else {
      gallery.style.columnCount = "1";
    }
    columnToggleButton.classList.toggle("active"); // Toggle active class for button
  });
});
