const searchInput = document.querySelector(".residency-search-input");
const searchFlag = document.querySelector(".residency-search-flag");
const countryOptions = document.querySelectorAll(".residency-country-option");

// Update input and flag on country selection
countryOptions.forEach(option => {
  option.addEventListener("click", () => {
    const flag = option.getAttribute("data-flag");
    const name = option.getAttribute("data-name");

    // Update the search input and flag
    searchInput.value = name;
    searchFlag.src = flag;
    searchFlag.classList.remove("hidden");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const nationalityInput = document.getElementById('nationality-drop-input');
  const nationalityList = document.getElementById('nationality-drop-list');
  const nationalityFlag = document.getElementById('nationality-flag');
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownIcon = document.getElementById('dropdown-icon');

  // Function to toggle dropdown and icon rotation
  function toggleDropdown() {
    nationalityList.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180');
  }

  // Show or hide the dropdown when input or icon is clicked
  nationalityInput.addEventListener('click', toggleDropdown);
  dropdownButton.addEventListener('click', toggleDropdown);

  // Select nationality and update input/flag
  window.selectNationality = function (name, flagPath) {
    nationalityInput.value = name;
    nationalityFlag.src = flagPath;
    nationalityFlag.classList.remove('hidden');
    nationalityList.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  };

  // Filter nationalities based on input
  nationalityInput.addEventListener('input', function () {
    const filter = nationalityInput.value.toLowerCase();
    const items = nationalityList.querySelectorAll('li');

    items.forEach(item => {
      const text = item.textContent || item.innerText;
      item.style.display = text.toLowerCase().includes(filter) ? "flex" : "none";
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!nationalityList.contains(event.target) && event.target !== nationalityInput && event.target !== dropdownIcon && event.target !== dropdownButton) {
      nationalityList.classList.add('hidden');
      dropdownIcon.classList.remove('rotate-180');
    }
  });
});

const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Toggle dropdown visibility
  dropdown.classList.toggle('hidden');

  // Adjust the icon's rotation
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}

function selectCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('selected-flag');
  const currencyElement = document.getElementById('selected-currency');
  const dropdown = document.getElementById('currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function selectRecipientCurrency(flagUrl, currencyCode) {
  const flagElement = document.getElementById('recipient-flag');
  const currencyElement = document.getElementById('recipient-currency');
  const dropdown = document.getElementById('recipient-currency-dropdown');
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Update selected flag and currency
  flagElement.src = flagUrl;
  currencyElement.textContent = currencyCode;

  // Close dropdown
  dropdown.classList.add('hidden');

  // Reset the icon's rotation
  dropdownIcon.classList.remove('rotate-180');
}

function filterDropdown(listId, searchId) {
  const dropdown = document.getElementById(listId);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');
  const searchInput = document.getElementById(searchId).value.toLowerCase();
  const items = dropdown.querySelectorAll('li');

  // Filter dropdown items
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchInput) ? '' : 'none';
  });

  // Keep dropdown icon rotated while searching
  if (!dropdown.classList.contains('hidden')) {
    dropdownIcon.classList.add('rotate-180');
  } else {
    dropdownIcon.classList.remove('rotate-180');
  }
}


let activeCategory = 'money'; // Default active category

function showCategory(category) {
  const categories = document.querySelectorAll('.faq-category');
  categories.forEach(cat => {
    if (cat.dataset.category === category) {
      cat.classList.remove('hidden');
    } else {
      cat.classList.add('hidden');
    }
  });

  // Update active button styling
  document.querySelectorAll('.filter-button').forEach(button => {
    button.classList.remove('bg-blue-500', 'text-white');
    button.classList.add('bg-gray-200');
  });
  const activeButton = document.getElementById(category + '-button');
  activeButton.classList.add('bg-blue-500', 'text-white');
  activeButton.classList.remove('bg-gray-200');

  activeCategory = category;
}

function toggleFAQ(faq) {
  const content = document.getElementById(faq);
  const arrow = document.querySelector(`[data-arrow="${faq}"]`);
  content.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

window.onload = () => {
  showCategory(activeCategory);
};



function togglePassword(fieldId, iconId, imgId) {
  const input = document.getElementById(fieldId);
  const eyeIcon = document.getElementById(imgId);

  if (input.type === 'password') {
    input.type = 'text';
    eyeIcon.src = '../images/signup/visible.png';
  } else {
    input.type = 'password';
    eyeIcon.src = '../images/signup/hide.png';
  }
}


// Toggle the country code list dropdown
function toggleCountryCodeList(event) {
  event.stopPropagation();
  const countryCodeList = document.getElementById('country-code-list');
  countryCodeList.classList.toggle('hidden');
}

// Filter country codes based on search input
function filterCountryCodes(event) {
  const searchValue = event.target.value.toLowerCase();
  const options = document.querySelectorAll('#country-code-options li');

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.classList.remove('hidden');
    } else {
      option.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Toggle country code dropdown
  document.querySelectorAll('.country-code-btn').forEach(button => {
    button.addEventListener('click', event => {
      const dropdown = event.currentTarget.closest('.phone-input, .phone-input-old').querySelector('.country-code-list');
      dropdown.classList.toggle('hidden');
    });
  });

  // Select country code
  document.querySelectorAll('.country-option').forEach(option => {
    option.addEventListener('click', event => {
      const parent = event.currentTarget.closest('.phone-input, .phone-input-old');
      const flag = parent.querySelector('.phone-flag');
      const code = parent.querySelector('.country-code');

      const flagSrc = event.currentTarget.getAttribute('data-flag');
      const countryCode = event.currentTarget.getAttribute('data-code');

      flag.src = flagSrc;
      code.textContent = countryCode;

      // Close dropdown after selection
      const dropdown = parent.querySelector('.country-code-list');
      dropdown.classList.add('hidden');
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', event => {
    document.querySelectorAll('.country-code-list').forEach(dropdown => {
      if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
        dropdown.classList.add('hidden');
      }
    });
  });
});




// *********** slider  **************************** 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Makes pagination dots clickable
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});



// *********** slider  **************************** 
document.addEventListener("DOMContentLoaded", function() {
  // Right to Left Swiper
  const swiperRTL = new Swiper('.swiper-container-rtl', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    rtl: true,  // Ensures movement from right to left
    autoplay: {
        delay: 0, // Continuous effect
        disableOnInteraction: false
    },
    speed: 3000,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

  // Left to Right Swiper
  const swiperLTR = new Swiper('.swiper-container-ltr', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    rtl: false,  // Ensures default movement from left to right
    autoplay: {
        delay: 0, // Continuous effect
        disableOnInteraction: false
    },
    speed: 3000,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

  // Event listeners for hover to pause/resume autoplay
  const swiperContainerRTL = document.querySelector('.swiper-container-rtl');
  swiperContainerRTL.onmouseenter = () => swiperRTL.autoplay.stop();
  swiperContainerRTL.onmouseleave = () => swiperRTL.autoplay.start();

  const swiperContainerLTR = document.querySelector('.swiper-container-ltr');
  swiperContainerLTR.onmouseenter = () => swiperLTR.autoplay.stop();
  swiperContainerLTR.onmouseleave = () => swiperLTR.autoplay.start();
});



// *********** box-input  **************************** 
function moveFocus(event, inputIndex) {
  const inputs = document.querySelectorAll('#pin-input-container input');
  if (event.inputType === 'deleteContentBackward') {
      // Focus previous input if exists when backspace is pressed
      if (inputIndex > 0) inputs[inputIndex - 1]?.focus();
  } else {
      // Move focus to next input if character is entered and not a backspace
      if (event.target.value.length === 1 && inputIndex < inputs.length - 1) {
          inputs[inputIndex + 1].focus();
      }
  }
}

// *********** filter for Account  **************************** 
function showForm(formId, element) {
  // Hide all forms
  document.getElementById('personalForm').classList.add('hidden');
  document.getElementById('businessForm').classList.add('hidden');

  // Remove active style from all links
  document.querySelectorAll('.flex > a').forEach(a => {
      a.children[0].style.backgroundColor = ''; // Reset background color
  });

  // Show the selected form and add active style
  document.getElementById(formId).classList.remove('hidden');
  element.children[0].style.backgroundColor = '#8B1EC4'; // Custom purple color for active state
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  const personalLink = document.getElementById('personalLink');
  showForm('personalForm', personalLink);
});



// *********** Payment Method **************************** 
function togglePaymentMethodDropdown(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectPaymentMethod(code, flagPath) {
  const codeElement = document.getElementById('payment-method-code');
  const flagElement = document.getElementById('payment-method-flag');
  const icon = document.getElementById('payment-method-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('payment-method-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the payment method dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('payment-method-dropdown');
  const icon = document.getElementById('payment-method-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});

// *********** Account Transfer **************************** 
function toggleAccountTransferDropdown(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  dropdown.classList.toggle('hidden'); // Toggle visibility
  icon.classList.toggle('rotate-180'); // Rotate the icon
  event.stopPropagation(); // Prevent click event from bubbling up
}

function selectAccountTransferMethod(code, flagPath) {
  const codeElement = document.getElementById('account-transfer-code');
  const flagElement = document.getElementById('account-transfer-flag');
  const icon = document.getElementById('account-transfer-icon');
  codeElement.textContent = code;
  flagElement.src = flagPath;
  document.getElementById('account-transfer-dropdown').classList.add('hidden');
  icon.classList.remove('rotate-180'); // Reset the icon rotation
}

// Click outside the account transfer dropdown to close it and reset the icon rotation
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('account-transfer-dropdown');
  const icon = document.getElementById('account-transfer-icon');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
    icon.classList.remove('rotate-180'); // Reset the icon rotation
  }
});

// *********** Countable **************************** 

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + "+";
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const userCount = document.getElementById('userCount');
  if (userCount) {
      animateValue(userCount, 0, 5000000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const visaCount = document.getElementById('visaCount');
  if (visaCount) {
      animateValue(visaCount, 0, 1000000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const companyCount = document.getElementById('companyCount');
  if (companyCount) {
      animateValue(companyCount, 0, 60000, 8000); // Increased duration from 4000ms to 8000ms
  }

  const transactionCount = document.getElementById('transactionCount');
  if (transactionCount) {
      animateValue(transactionCount, 0, 250000, 8000); // Increased duration from 4000ms to 8000ms
  }
});


// *********** Card-tilt **************************** 
var cards = document.querySelectorAll('.card-tilt');

cards.forEach(card => {
  var mouseHover = false;
  var mousePosition = { x: 0, y: 0 };
  var cardSize = { width: 0, height: 0 };
  var SCALE_X = 8;
  var SCALE_Y = 10;

  card.onblur = function() {
    mouseHover = false;
  };

  card.onfocus = function() {
    mouseHover = true;
  };

  card.onmousemove = function(e) {
    if (!mouseHover) return;
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mousePosition = { x, y };
    cardSize = {
      width: card.offsetWidth || 0,
      height: card.offsetHeight || 0,
    };
    card.style.transform = `perspective(1000px) rotateX(${
      (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
    }deg) rotateY(${
      (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
    }deg) translateZ(10px)`;
  };

  card.onmouseout = function() {
    mouseHover = false;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  card.onmouseover = function() {
    mouseHover = true;
  };
});
