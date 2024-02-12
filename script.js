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

function handleEncryptedLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior

  var password = prompt("Please enter the password:");
  if (password === "alohomora") {
    // Replace "12345" with your actual password
    window.location.href = "https://www.google.com"; // Redirect to Google after successful password entry
  } else {
    alert("Incorrect password. Access denied.");
  }
}

Shery.makeMagnet(".btn" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

Shery.imageMasker("img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

Shery.textAnimate(".h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.6,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// Function to fetch and inject HTML content
function injectHTML(url, targetId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
    });
}

// Call the function to inject HTML content for header, content, and footer
injectHTML("graphics.html", "header");
injectHTML("lp.html", "content");
injectHTML("mobile.html", "footer");
