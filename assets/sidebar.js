/* ==========================================================================
   Energy Works — Shared Admin Sidebar
   Include this file on every admin page:
     <div id="ew-sidebar-root"></div>
     <script src="assets/sidebar.js"></script>
   It injects the sidebar markup, highlights the current page, wires up
   the mobile menu toggle, and handles logout. Keeping the nav in one file
   means adding/renaming a page only requires an edit here.
   ========================================================================== */
(function () {
  var NAV_LINKS = [
    { href: "AdminHome.html",      label: "Home" },
    { href: "AdminBookings.html",  label: "Bookings" },
    { href: "AdminSlots.html",     label: "Slots" },
    { href: "AdminPricing.html",   label: "Pricing" },
    { href: "AdminWhatsApp.html",  label: "WhatsApp" },
    { href: "AdminCustomers.html", label: "Customers" }
  ];

  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path || "AdminHome.html";
  }

  function buildNav() {
    var current = currentPage();
    return NAV_LINKS.map(function (link) {
      var active = link.href.toLowerCase() === current.toLowerCase();
      return '<a href="' + link.href + '"' + (active ? ' class="active"' : '') + '>' + link.label + "</a>";
    }).join("");
  }

  function render() {
    var root = document.getElementById("ew-sidebar-root");
    if (!root) return;

    var email = localStorage.getItem("ew_email") || "";

    root.innerHTML =
      '<button class="ew-menu-btn" id="ewMenuBtn" aria-label="Open menu">&#9776;</button>' +
      '<div class="ew-sidebar-backdrop" id="ewBackdrop"></div>' +
      '<aside class="ew-sidebar" id="ewSidebar">' +
      '  <div class="ew-brand">&#10022; ENERGY WORKS</div>' +
      '  <nav class="ew-nav">' + buildNav() + "</nav>" +
      '  <div class="ew-sidebar-footer">' +
      (email ? '<div class="ew-admin-email">' + email + "</div>" : "") +
      '    <button class="ew-logout" id="ewLogoutBtn">Sign out</button>' +
      "  </div>" +
      "</aside>";

    var menuBtn = document.getElementById("ewMenuBtn");
    var sidebar = document.getElementById("ewSidebar");
    var backdrop = document.getElementById("ewBackdrop");
    var logoutBtn = document.getElementById("ewLogoutBtn");

    function closeMenu() {
      sidebar.classList.remove("open");
      backdrop.classList.remove("open");
    }

    menuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      backdrop.classList.toggle("open");
    });
    backdrop.addEventListener("click", closeMenu);
    sidebar.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("ew_token");
      localStorage.removeItem("ew_email");
      window.location.href = "index.html";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
