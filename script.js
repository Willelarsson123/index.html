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