"use strict";

( function( $ ) {

	"use strict";

  $(".card").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.04
  });
  
}( jQuery ) );


function toggleDropdown() {
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.toggle('hidden');
}

function filterCountries() {
    const input = document.getElementById('nationality-drop-input').value.toLowerCase();
    const listItems = document.querySelectorAll('.dropdown-item');

    listItems.forEach(item => {
        const country = item.getAttribute('data-country').toLowerCase();
        if (country.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectNationality(countryName, flagUrl) {
    const input = document.getElementById('nationality-drop-input');
    const flag = document.getElementById('nationality-flag');

    input.value = countryName;
    flag.src = flagUrl;
    flag.classList.remove('hidden'); // Show the flag

    // Hide the dropdown after selection
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.add('hidden');
}




