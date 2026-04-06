// Pole Position AI - Scoring Formula
// Each factor is scored from 0–100, then weighted

function calculatePolePositionScore(data) {
  // Example input object:
  // {
  //   rent: 60,            // affordability (lower rent = higher score)
  //   competition: 40,     // lower competition = higher score
  //   demand: 85,          // market demand
  //   startupActivity: 70, // innovation hotspot
  //   financialReadiness: 55 // ecosystem support
  // }

  // Define weights (adjustable for your hackathon demo)
  const weights = {
    rent: 0.25,             // 25% importance
    competition: 0.20,      // 20% importance
    demand: 0.30,           // 30% importance
    startupActivity: 0.15,  // 15% importance
    financialReadiness: 0.10 // 10% importance
  };

  // Weighted score calculation
  let score = (
    data.rent * weights.rent +
    (100 - data.competition) * weights.competition + // invert competition
    data.demand * weights.demand +
    data.startupActivity * weights.startupActivity +
    data.financialReadiness * weights.financialReadiness
  );

  // Round to nearest integer
  return Math.round(score);
}

// Example usage:
const cityData = {
 rent: 60,
  competition: 40,
  demand: 85,
  startupActivity: 70,
  financialReadiness: 55
};

const polePositionScore = calculatePolePositionScore(cityData);
console.log("Pole Position Score:", polePositionScore); 
// Output: e.g., 73
