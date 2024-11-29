// Show and Hide Sections Based on User Click
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page path
    const currentPage = window.location.pathname;

    // Check if we are on the "Donate Food" page
    if (currentPage.includes('donate-food')) {
        document.getElementById('donated-food-table').style.display = 'table';
        document.getElementById('requested-food-table').style.display = 'none';
    }
    // Check if we are on the "Request Food" page
    else if (currentPage.includes('request-food')) {
        document.getElementById('donated-food-table').style.display = 'none';
        document.getElementById('requested-food-table').style.display = 'table';
    }
    else {
        // Hide both tables if not on either page
        document.getElementById('donated-food-table').style.display = 'none';
        document.getElementById('requested-food-table').style.display = 'none';
    }
});


// Function to update the unit options based on the food type
function updateUnitOptions(formType) {
    let unitSelect;
    let foodType;
    
    if (formType === 'donate') {
        foodType = document.getElementById('food-type').value;
        unitSelect = document.getElementById('unit-of-measurement');
    } else if (formType === 'request') {
        foodType = document.getElementById('food-type-request').value;
        unitSelect = document.getElementById('unit-of-measurement-request');
    }

    // Clear existing options
    unitSelect.innerHTML = '';

    // Add unit options based on the selected food type
    const unitOptions = {
        'liquid': ['Liters', 'Milliliters'],
        'solid': ['Kilograms', 'Grams', 'Packets'],
        'bottle': ['Number']
    };

    unitOptions[foodType]?.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.toLowerCase();
        option.textContent = unit;
        unitSelect.appendChild(option);
    });
}

// Handle Donate Form Submission
document.getElementById('donateForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donor-name').value;
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const foodType = document.getElementById('food-type').value;
    const unitOfMeasurement = document.getElementById('unit-of-measurement').value;

    // Get recipe values
    const recipeName = document.getElementById('recipe-name').value;
    const recipeDescription = document.getElementById('recipe-description').value;

    // Add to Donated Food Table
    const donatedFoodTable = document.getElementById('donated-food-table').getElementsByTagName('tbody')[0];
    const newRow = donatedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${donorName}</td>
        <td>${foodName}</td>
        <td>${foodType}</td>
        <td>${quantity}</td>
        <td>${unitOfMeasurement}</td>
        <td>${expiryDate}</td>
        <td>${recipeName || 'N/A'}</td>  <!-- Display recipe name if provided -->
        <td>${recipeDescription || 'N/A'}</td>  <!-- Display recipe description if provided -->
    `;

    // Update the Impact Tracker (Optional: Track food donation impact)
    updateImpactTracker(quantity);

    // Clear the Donate Food form
    document.getElementById('donateForm').reset();
    updateUnitOptions('donate');  // Reset unit options
});

document.getElementById('donateForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donor-name').value;
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const foodType = document.getElementById('food-type').value;
    const unitOfMeasurement = document.getElementById('unit-of-measurement').value;

    // Add to Donated Food Table
    const donatedFoodTable = document.getElementById('donated-food-table').getElementsByTagName('tbody')[0];
    const newRow = donatedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${donorName}</td>
        <td>${foodName}</td>
        <td>${foodType}</td>
        <td>${quantity}</td>
        <td>${unitOfMeasurement}</td>
        <td>${expiryDate}</td>
    `;

    // Clear the Donate Food form
    document.getElementById('donateForm').reset();
    updateUnitOptions('donate');  // Reset unit options
});

document.getElementById('donateForm')?.addEventListener('submit', function (e) {
    console.log("Donate form submitted"); // Check if it's being logged multiple times
    e.preventDefault();

    // Get form values
    const donorName = document.getElementById('donor-name').value;
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const foodType = document.getElementById('food-type').value;
    const unitOfMeasurement = document.getElementById('unit-of-measurement').value;

    // Prevent duplicate rows
    const donatedFoodTable = document.getElementById('donated-food-table').getElementsByTagName('tbody')[0];
    const rows = donatedFoodTable.getElementsByTagName('tr');
    let duplicateFound = false;

    for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        if (cells[1].textContent === foodName && cells[0].textContent === donorName) {
            duplicateFound = true;
            break;
        }
    }

    if (duplicateFound) {
        alert("This food donation has already been submitted.");
    } else {
        // Add to Donated Food Table
        const newRow = donatedFoodTable.insertRow();
        newRow.innerHTML = `
            <td>${donorName}</td>
            <td>${foodName}</td>
            <td>${foodType}</td>
            <td>${quantity}</td>
            <td>${unitOfMeasurement}</td>
            <td>${expiryDate}</td>
        `;

        // Clear the Donate Food form
        document.getElementById('donateForm').reset();
        updateUnitOptions('donate');  // Reset unit options
    }
});

// Handle Request Form Submission
document.getElementById('requestForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const requesterName = document.getElementById('requester-name').value;
    const requestedFood = document.getElementById('requested-food').value;
    const quantityRequested = document.getElementById('quantity-requested').value;
    const foodTypeRequest = document.getElementById('food-type-request').value;
    const unitOfMeasurementRequest = document.getElementById('unit-of-measurement-request').value;

    // Add to Requested Food Table
    const requestedFoodTable = document.getElementById('requested-food-table').getElementsByTagName('tbody')[0];
    const newRow = requestedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${requesterName}</td>
        <td>${requestedFood}</td>
        <td>${foodTypeRequest}</td>
        <td>${quantityRequested}</td>
        <td>${unitOfMeasurementRequest}</td>
    `;

    // Clear the Request Food form
    document.getElementById('requestForm').reset();
    updateUnitOptions('request');  // Reset unit options
});

document.getElementById('requestForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const requesterName = document.getElementById('requester-name').value;
    const requestedFood = document.getElementById('requested-food').value;
    const quantityRequested = document.getElementById('quantity-requested').value;
    const foodTypeRequest = document.getElementById('food-type-request').value;
    const unitOfMeasurementRequest = document.getElementById('unit-of-measurement-request').value;

    // Add to Requested Food Table
    const requestedFoodTable = document.getElementById('requested-food-table').getElementsByTagName('tbody')[0];
    const newRow = requestedFoodTable.insertRow();
    newRow.innerHTML = `
        <td>${requesterName}</td>
        <td>${requestedFood}</td>
        <td>${foodTypeRequest}</td>
        <td>${quantityRequested}</td>
        <td>${unitOfMeasurementRequest}</td>
    `;

    // Clear the Request Food form
    document.getElementById('requestForm').reset();
    updateUnitOptions('request');  // Reset unit options
});

// Environmental Impact Tracker
let totalFoodSaved = 0;
let totalCarbonReduction = 0;

function updateImpactTracker(savedFoodKg) {
    totalFoodSaved += savedFoodKg;
    totalCarbonReduction += savedFoodKg * 2.5;  // Assuming 1 kg food saved = 2.5 kg CO2 saved

    document.getElementById('totalFoodSaved').textContent = totalFoodSaved;
    document.getElementById('carbonReduction').textContent = totalCarbonReduction.toFixed(2);
}