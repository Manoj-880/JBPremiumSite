document.addEventListener("DOMContentLoaded", function () {
  localStorage.clear();

  // responsive nav bar
  const menuIcon = document.querySelector(".menu-bar");
  const closeIcon = document.querySelector(".close");
  const mobileNavBar = document.querySelector(".mobile-nav-bar");

  menuIcon.style.display = "block";
  closeIcon.style.display = "none";

  menuIcon.addEventListener("click", function () {
    // Hide menuIcon and show closeIcon
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

    // Show mobileNavBar
    mobileNavBar.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    // Show menuIcon and hide closeIcon
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";

    // Hide mobileNavBar
    mobileNavBar.style.display = "none";
  });

  // Service carousel
  const serviceItems = document.querySelectorAll(".service-item");
  let currentIndex = 0;

  function activateService(index) {
    // console.log("called");
    // Remove 'active' class from all items
    serviceItems.forEach((item) => item.classList.remove("active"));
    // Add 'active' class to the current item
    serviceItems[index].classList.add("active");
  }

  function cycleServices() {
    activateService(currentIndex);
    currentIndex = (currentIndex + 1) % serviceItems.length;
  }

  // Start the cycling effect
  setInterval(cycleServices, 3000);

  // Initialize the first active service
  activateService(currentIndex);
});
