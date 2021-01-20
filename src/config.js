const acceptedCoins = [
  { display: "¢5", value: 0.05 },
  { display: "¢10", value: 0.1 },
  { display: "¢25", value: 0.25 },
  { display: "¢50", value: 0.5 },
];

const acceptedBills = [
  { display: "$1", value: 1 },
  { display: "$2", value: 2 },
  { display: "$5", value: 5 },
  { display: "$10", value: 10 },
];

const productSlots = [
  { type: "soda", slots: 6, max: 8 },
  { type: "chips", slots: 4, max: 6 },
  { type: "nuts", slots: 4, max: 8 },
  { type: "chocolate", slots: 6, max: 10 },
  { type: "candy", slots: 5, max: 8 },
];

export { acceptedCoins, acceptedBills, productSlots };
