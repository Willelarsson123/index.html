<script>
        document.getElementById("searchBtn").addEventListener("click", function() {
            var searchInputValue = document.getElementById("searchInput").value.toLowerCase();

            // Sök på startsidan
            var offerSection = document.querySelector(".offer-section");
            if (offerSection.textContent.toLowerCase().includes(searchInputValue)) {
                offerSection.style.display = "block";
            } else {
                offerSection.style.display = "none";
            }

            // Sök på produktsidan
            var productTableRows = document.querySelectorAll(".product-row");
            productTableRows.forEach(function(row) {
                if (row.textContent.toLowerCase().includes(searchInputValue)) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });

            // Sök på mediasektionen
            var mediaSection = document.querySelector(".media-section");
            if (mediaSection.textContent.toLowerCase().includes(searchInputValue)) {
                mediaSection.style.display = "block";
            } else {
                mediaSection.style.display = "none";
            }
        });
    </script>
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Hämta referenser till sökrutan och tabellen
    var searchInput = document.querySelector('.search-container input');
    var rows = document.querySelectorAll('table tr');

    // Lyssna på ändringar i sökrutan
    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        // Loopa igenom varje rad och göm eller visa beroende på söktermen
        rows.forEach(function (row) {
            var textContent = row.textContent.toLowerCase();
            if (textContent.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

    