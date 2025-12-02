// --- DATA STRUCTURE (Simulated API Data) ---
const wellData = {
    vertical: {
        cost: 10000000, // $10 Million
        time: 60,       // 60 Days
        output: 15,     // 15 MW
        risk: "Low (3/10)"
    },
    directional: {
        cost: 14000000, // $14 Million
        time: 95,       // 95 Days
        output: 18,     // 18 MW
        risk: "Medium (6/10)"
    }
};

// --- FUNCTION 1: DISPLAY DATA ON LOAD ---

function displayWellData() {
    // Helper function to format money cleanly
    const formatMoney = (amount) => '$' + amount.toLocaleString();

    // Vertical Well (Option A)
    document.getElementById('cost-a').textContent = formatMoney(wellData.vertical.cost);
    document.getElementById('time-a').textContent = wellData.vertical.time + ' Days';
    document.getElementById('output-a').textContent = wellData.vertical.output + ' MW';
    document.getElementById('risk-a').textContent = wellData.vertical.risk;

    // Directional Well (Option B)
    document.getElementById('cost-b').textContent = formatMoney(wellData.directional.cost);
    document.getElementById('time-b').textContent = wellData.directional.time + ' Days';
    document.getElementById('output-b').textContent = wellData.directional.output + ' MW';
    document.getElementById('risk-b').textContent = wellData.directional.risk;
}


// --- FUNCTION 2: THE RECOMMENDATION LOGIC ENGINE ---

function runRecommendationAnalysis() {
    const outputElement = document.getElementById('recommendation-output');
    
    // 1. Calculate the Business Metric (Cost per MW)
    const costPerMWA = wellData.vertical.cost / wellData.vertical.output;
    const costPerMWB = wellData.directional.cost / wellData.directional.output;
    
    // 2. Format the Metric for Display
    const formatCostPerMW = (cost) => '$' + Math.round(cost).toLocaleString() + ' / MW';
    
    // 3. Determine the Recommendation (Lowest Cost per MW wins)
    let recommendationText = "";
    
    if (costPerMWA < costPerMWB) {
        recommendationText = `✅ **RECOMMENDATION: VERTICAL WELL (Option A)**. It provides a lower cost per Megawatt. 
                              (Option A: ${formatCostPerMW(costPerMWA)} vs. Option B: ${formatCostPerMW(costPerMWB)})`;
        outputElement.style.backgroundColor = '#27ae60'; // Green success color
    } else {
        recommendationText = `✅ **RECOMMENDATION: DIRECTIONAL WELL (Option B)**. It provides a lower cost per Megawatt.
                              (Option B: ${formatCostPerMW(costPerMWB)} vs. Option A: ${formatCostPerMWA})`;
        outputElement.style.backgroundColor = '#27ae60'; // Green success color
    }
    
    // 4. Update the Recommendation Box
    outputElement.innerHTML = recommendationText;
}


// --- FUNCTION 3: ATTACH TO BUTTON (DOM Load Listener) ---

// Wait for the entire page structure to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Display data immediately upon load
    displayWellData();

    // Attach the click event to the button
    const recommendationBtn = document.getElementById('recommendation-btn');
    
    // Attach the main logic engine to the button click
    recommendationBtn.addEventListener('click', function() {
        runRecommendationAnalysis();
    });
});