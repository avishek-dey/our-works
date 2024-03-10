function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  // You can change the password here
  const correctPassword = "12345";

  if (password === correctPassword) {
    // If password is correct, remove the password form and show the website content
    document.querySelector(".password-form").style.display = "none";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Get all tag buttons
const tagButtons = document.querySelectorAll(".tag-btn");
// Get all images
const images = document.querySelectorAll(".image");

// Function to filter images based on tag
function filterImages(tag) {
  images.forEach((image) => {
    const tags = image.getAttribute("data-tags").split(" ");
    if (tags.includes(tag) || tag === "All") {
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
      gallery.style.columnCount = "6";
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
    window.location.href =
      "https://drive.google.com/drive/folders/1lJ1TDMF2sURGAAwtwTsG_Co1S143hAMw?usp=sharing"; // Redirect to Google after successful password entry
  } else {
    alert("Incorrect password. Access denied.");
  }
}

// ---------------------sheryJs-------------------------------

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

// ---------------------TagCount-------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class 'tag-btn'
  const tagButtons = document.querySelectorAll(".tag-btn");

  // Get all elements with class 'image' inside the gallery
  const galleryImages = document.querySelectorAll(".gallery .image");

  // Function to update tag button text
  function updateTagButtonCounts() {
    // Initialize an object to store tag counts
    const tagCounts = {};

    // Loop through each image element to count tag occurrences
    galleryImages.forEach(function (image) {
      const tags = image.dataset.tags.split(" "); // Split tags attribute value into an array
      tags.forEach(function (tag) {
        if (!tagCounts[tag]) {
          tagCounts[tag] = 1; // Initialize count to 1 if tag is encountered for the first time
        } else {
          tagCounts[tag]++; // Increment count if tag has been encountered before
        }
      });
    });

    // Update the text of each tag button with the corresponding count
    tagButtons.forEach(function (button) {
      const tag = button.dataset.tag;
      if (tag === "All") {
        button.textContent = `All (${galleryImages.length})`; // Count all images for 'All' tab
      } else if (tagCounts[tag]) {
        button.textContent = `${tag} (${tagCounts[tag]})`;
      } else {
        button.textContent = `${tag} (0)`; // Default to 0 if tag not found
      }
    });
  }

  // Initial update of tag button counts
  updateTagButtonCounts();

  // Add click event listener to the 'All' tab button
  const allTabButton = document.querySelector('.tag-btn[data-tag="all"]');
  allTabButton.addEventListener("click", function () {
    // Show all images
    galleryImages.forEach(function (image) {
      image.style.display = "block";
    });

    // Update tag button counts
    updateTagButtonCounts();
  });

  // Add click event listener to other tag buttons if needed
  tagButtons.forEach(function (button) {
    if (button.dataset.tag !== "all") {
      button.addEventListener("click", function () {
        const tag = button.dataset.tag;
        // Show images with the selected tag and hide others
        galleryImages.forEach(function (image) {
          if (image.dataset.tags.includes(tag)) {
            image.style.display = "block";
          } else {
            image.style.display = "none";
          }
        });
      });
    }
  });
});

// ---------------------ImageViewer-------------------------------

const gallery = new Viewer(document.getElementById("image"));

function checkPassword() {
  var password = document.getElementById("password-input").value;
  // Replace 'your_password' with the correct password
  if (password === "123") {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling on the body
  } else {
    alert("Incorrect password. Please try again.");
  }
}
