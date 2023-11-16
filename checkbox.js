<script>
    var checkboxes = document.querySelectorAll('.product-checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                console.log('Checkbox är markerad för produkt: ' + checkbox.parentElement.parentElement.children[2].textContent);
            } else {
                console.log('Checkbox är inte markerad för produkt: ' + checkbox.parentElement.parentElement.children[2].textContent);
            }
        });
    });
</script>
