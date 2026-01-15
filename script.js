const pharmacies = [
    { name: "Apollo Pharmacy", address: "Bidhannagar,Sector 3,Kolkata-700015,", contact: "079 4284 5656", 
        timing: "24 Hours", delivery: true, rating: "4.56 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 32.00, discount: "20% Off", status: "Available" },
            { name: "Calpol 500", mrp: 14.26, price: 12.55, discount: "12% Off", status: "Limited Stock" },
            { name: "Pantocid", mrp: 195.94, price: 172.43, discount: "12% Off", status: "Available" },
             { name: "Saridon", mrp: 51.56, price: 41.25, discount: "20% Off", status: "Limited Stock"},
            { name: "Inhaler", mrp: 69.00, price: 60.72, discount: "12% Off", status: "Available"}
        ]
    },
    {
        name: "Blue Print Pharmacy", address: "Sadananda Road,Hazra,Kolkata", contact: "9123456789", 
        timing: "9 AM - 11 PM", delivery: false, rating: "4.2 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 34.80, discount: "13% Off", status: "Out of Stock" },
            { name: "Calpol 500", mrp: 14.26, price: 13.55, discount: "5% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 172.43, discount: "12% Off", status: "Limited Stock" },
         { name: "Saridon", mrp: 51.56, price: 48.98, discount: "5% Off", status: "Limited Stock" },
        { name: "Inhaler", mrp: 69.00, price: 60.72, discount: "12% Off", status: "Available"}]
    },
    {
        name: "Med-Plus(Lake-Town)", address: "P-76,Block B,Lake Town,Kolkata-700089", contact: "033-2521-0694", 
        timing: "10 AM - 12 PM", delivery: true, rating: "3.9 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 38.00, discount: "5% Off", status: "Out of Stock" },
            {name: "Calpol 500", mrp: 14.26, price: 12.55, discount: "12% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 156.75, discount: "20% Off", status: "Limited Stock" },
              { name: "Inhaler", mrp: 69.00, price: 55.20, discount: "20% Off", status: "Limited Stock" },
        { name: "Saridon", mrp: 51.56, price: 45.37, discount: "12% Off", status: "Limited Stock" }
            ]
    },
    {
        name: "Dey's Medical Store", address: "6/2B,Lindsay Street,New Market,Kolkata-700087", contact: "033-2552-0055", 
        timing: "24 Hours (Except:Sunday)", delivery: false, rating: "4.0 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 40.00, discount: "0% Off", status: "Out of Stock" },
            { name: "Calpol 500", mrp: 14.26, price: 13.12, discount: "8% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 166.55, discount: "15% Off", status: "Available" },
              { name: "Inhaler", mrp: 69.00, price: 58.65, discount: "15% Off", status: "Available" },
              { name: "Saridon", mrp: 51.56, price: 43.83, discount: "15% Off", status: "Limited Stock" }
        ]
    },
    {
        name: "Metro Pharma", address: "128/1,Bidhan Sarani(Shyambazar),Kolkata-700004", contact: "98365-24241", 
        timing: "10 AM - 11 PM", delivery: true, rating: "3.7 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 39.20, discount: "2% Off", status: "Out of Stock" },
            { name: "Calpol 500", mrp: 14.26, price: 13.55, discount: "5% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 186.14, discount: "5% Off", status: "Out of Stock" },
              { name: "Inhaler", mrp: 69.00, price: 60.72, discount: "12% Off", status: "Out of Stock" },
              { name: "Saridon", mrp: 51.56, price: 45.37, discount: "12% Off", status: "Limited Stock" }
        ]
    },
    {
        name: "Frank Ross Pharmecy", address: "7,Jawaharlal Nehru Rd,Dharmatala,Kolkata-700013", contact: "033-2225-0101", 
        timing: "7 AM - 11 PM (Except:Sunday)", delivery: false, rating: "3.0 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 34.80, discount: "13% Off", status: "Out of Stock" },
            { name: "Calpol 500", mrp: 14.26, price: 13.55, discount: "5% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 156.75 , discount: "20% Off", status: "Available" },
              { name: "Saridon", mrp: 51.56, price: 44.86 , discount: "13% Off", status: "Limited Stock" },
              { name: "Inhaler", mrp: 69.00, price: 62.10 , discount: "10% Off", status: "Out of stock" }
        ]
    },
    {
        name: "Calcutta Medical", address: "90B,S.P.Mukherjee Road,Bhowanipore,Kolkata-700026", contact: "86973-07722", 
        timing: "8 AM - 12 PM", delivery: true, rating: "4.5 ⭐",
        inventory: [
            { name: "Paracetamol", mrp: 40.00, price: 38.00, discount: "5% Off", status: "Available" },
            { name: "Calpol 500", mrp: 14.26, price: 13.55, discount: "5% Off", status: "Available" },
             { name: "Pantocid", mrp: 195.94, price: 156.75, discount: "20% Off", status: "Limited Stock" },
              { name: "Saridon", mrp: 51.56, price: 44.86, discount: "13% Off", status: "Available" },
              { name: "Inhaler", mrp: 69.00, price: 62.10, discount: "10% Off", status: "Available" }
        ]
    }
];

function searchMed() {
    const searchTerm = document.getElementById('medInput').value.trim().toLowerCase();
    const resultsArea = document.getElementById('resultsArea');
    resultsArea.innerHTML = "";

    if (searchTerm === "") return;

    pharmacies.forEach(shop => {
        // Find specific medicine in the inventory array
        const foundMed = shop.inventory.find(m => m.name.toLowerCase().includes(searchTerm));

        if (foundMed) {
            let statusColor = "";
            
            // Critical: Correct Red/Orange/Green logic
            if (foundMed.status === "Available") {
                statusColor = "#0fc159ff"; // Green
            } else if (foundMed.status === "Limited Stock") {
                statusColor = "#f0bb1cff"; // Orange
            } else if (foundMed.status === "Out of Stock") {
                statusColor = "#dc311eff"; // Vivid Red
            }
            resultsArea.innerHTML += `
                <div class="card">
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span style="color:var(--accent); font-weight:bold; font-size:0.8rem;">
                            ${shop.delivery ? '🚚 HOME DELIVERY' : '🏪 STORE PICKUP'}
                        </span>
                        <span style="color:#f39c12; font-weight:bold;">${shop.rating} <i class="fas fa-star"></i></span>
                    </div>
                    <h3 style="margin:0 0 15px 0; color:#020c1b;">${shop.name}</h3>
                    
                    <div class="detail-row"><i class="fas fa-map-marker-alt"></i> <span>${shop.address}</span></div>
                    <div class="detail-row"><i class="fas fa-pills"></i> <strong>${foundMed.name}</strong></div>
                    <div class="detail-row"><i class="fas fa-clock"></i> <span>Open: ${shop.timing}</span></div>
                    
                    <div class="price-box">
                        <div>
                            <span style="font-size:1.5rem; font-weight:800;">₹${foundMed.price}</span>
                            <s style="color:#999; margin-left:8px;">₹${foundMed.mrp}</s>
                        </div>
                        <span style="color:#2ecc71; font-weight:bold; background:#e8f5e9; padding:2px 8px; border-radius:4px;">${foundMed.discount}</span>
                    </div>

                    <div class="detail-row">
                        <i class="fas fa-layer-group"></i> 
                        <span>Stock: <span style="background:${statusColor}; color:white; padding:3px 10px; border-radius:4px; font-weight:bold;">${foundMed.status}</span></span>
                    </div>

                    <a href="tel:${shop.contact}" class="call-btn">
                        <i class="fas fa-phone-alt"></i> Call & Reserve Now
                    </a>
                </div>`;
        }
    });
}
