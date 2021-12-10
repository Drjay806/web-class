document.addEventListener("DOMContentLoaded", function (event) {
  //
  const showNavbar = (toggleId2, navId2, bodyId2, headerId2) => {
    //set toggle to the id toggle id from above param
    const toggle = document.getElementById(toggleId2),
      //set navId from parma to variable nav
      nav = document.getElementById(navId2),
      bodypd = document.getElementById(bodyId2),
      headerpd = document.getElementById(headerId2);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show2");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body

        // add padding to header
        headerpd.classList.toggle("body-pd2");
      });
    }
  };

  showNavbar("header-toggle2", "nav-bar2", "body-pd2", "header2");
});
