let totalSeats = 100;

function placeOrder() {
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const checkboxes = document.querySelectorAll('.menu-container input[type="checkbox"]');
    
    if (!employeeId || !employeeName) {
        alert('Please enter both Employee ID and Employee Name.');
        return;
    }

    let orderedItems = [];
    let totalCost = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const itemLabel = checkbox.nextElementSibling.innerText;
            const itemPrice = parseFloat(checkbox.getAttribute('data-price'));
            orderedItems.push(itemLabel);
            totalCost += itemPrice;
        }
    });

    if (orderedItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }

    const seatNumber = Math.floor(Math.random() * 100) + 1;
    totalSeats--;

    const orderSummary = `
        <h3>Order Summary</h3>
        <p>Employee ID: ${employeeId}</p>
        <p>Employee Name: ${employeeName}</p>
        <p>Food Items Ordered: ${orderedItems.join(', ')}</p>
        <p>Total Cost: ₹${totalCost.toFixed(2)}</p>
        <p>Seat Number: ${seatNumber}</p>
    `;

    document.getElementById('orderSummary').innerHTML = orderSummary;
    document.getElementById('availableSeats').innerText = totalSeats;

    checkboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('employeeId').value = '';
    document.getElementById('employeeName').value = '';
}
