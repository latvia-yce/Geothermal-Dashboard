# ♨️ Geothermal Well Planning Dashboard: Data-Driven Trade-Offs

This project is a high-impact dashboard built to assist Project Managers in rapidly assessing the trade-offs between complex drilling options (Vertical vs. Directional). It demonstrates the use of structured data to drive key capital expenditure (CAPEX) decisions.

---

## 1. 🎯 Product Goals & Problem Solved

* **Problem:** Project Managers lack a single, clear tool to visualize the cost, time, and output implications of different well path options, leading to slower CAPEX approval and analysis.
* **Target User:** Project Managers and Financial Planners making preliminary investment decisions.
* **Core Value:** Provides a clear, data-backed recommendation to justify the chosen well path.

---

## 2. 📊 Data Analysis and Logic

The dashboard uses hardcoded data to simulate a live feed from a specialized engineering model (API). This allows the focus to remain on analysis, not input.

| Metric | Vertical Well (Option A) | Directional Well (Option B) |
| :--- | :--- | :--- |
| **Total Cost** | \$10,000,000 | \$14,000,000 |
| **Energy Output** | 15 MW | 18 MW |
| **Geological Risk** | Low (3/10) | Medium (6/10) |

### The Recommendation Metric (PM Insight)

The recommendation is driven by the **Lowest Cost per Megawatt (MW)** metric, which is the most reliable way to compare the long-term **Return on Investment (ROI)** for energy projects.

* $Cost/MW = Total Cost \div Energy Output (MW)$

---

## 3. ⚙️ Technical Architecture

* **Technology Stack:** HTML5, CSS3, Vanilla JavaScript.
* **Data Structure:** All input metrics are stored in a JavaScript object (`wellData`) to simulate an API response, enabling a focus on data consumption and visualization.
* **Logic Engine:** Vanilla JavaScript performs the mathematical trade-off calculation (`runRecommendationAnalysis()`) and dynamically updates the UI based on the calculated metric.

---

## 4. 📈 Future Roadmap

* **V1.0 (Visualization):** Integrate simple **CSS bar charts** to visually compare the cost and time metrics, moving beyond just numerical display.
* **V2.0 (Customization):** Introduce user input toggles (e.g., "Prioritize Time" vs. "Prioritize Cost") to allow users to adjust the recommendation algorithm's weighting based on project constraints.