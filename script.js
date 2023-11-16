<script>
        document.getElementById("searchBtn").addEventListener("click", function() {
            var searchInputValue = document.getElementById("searchInput").value.toLowerCase();

  
            var offerSection = document.querySelector(".offer-section");
            if (offerSection.textContent.toLowerCase().includes(searchInputValue)) {
                offerSection.style.display = "block";
            } else {
                offerSection.style.display = "none";
            }

  
            var productTableRows = document.querySelectorAll(".product-row");
            productTableRows.forEach(function(row) {
                if (row.textContent.toLowerCase().includes(searchInputValue)) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });

  
            var mediaSection = document.querySelector(".media-section");
            if (mediaSection.textContent.toLowerCase().includes(searchInputValue)) {
                mediaSection.style.display = "block";
            } else {
                mediaSection.style.display = "none";
            }
        });
    </script>


document.addEventListener('DOMContentLoaded', function () {

    var searchInput = document.querySelector('.search-container input');
    var rows = document.querySelectorAll('table tr');


    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

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

    