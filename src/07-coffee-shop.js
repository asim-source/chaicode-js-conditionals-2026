/**
 * ☕ Bean & Brew Cafe4
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {whippedCream:Boolean,extraShot:Boolean}) {
  // Your code here
  let price, priceType, extraCream, shot;
  if (size !== "small" && size !== "medium" && size !== "large") return -1;
  if (
    type !== "regular" &&
    type !== "latte" &&
    type !== "cappuccino" &&
    type !== "mocha"
  )
    return -1;

  if (size === "small") {
    price = 3.0;
  } else if (size === "medium") {
    price = 4.0;
  } else if (size === "large") {
    price = 5.0;
  }

  if (type === "regular") {
    priceType = 0.0;
  } else if (type === "latte") {
    priceType = 1.0;
  } else if (type === "cappuccino") {
    priceType = 1.5;
  } else if (type === "mocha") {
    priceType = 2.0;
  }

  if (extras.whippedCream === true) {
    extraCream = 0.50;
  } else {
    extraCream = 0.00;
  }

  if (extras.extraShot === true) {
    shot = 0.75;
  } else {
    shot = 0.00;
  }
  

  const total = price + priceType + extraCream + shot;
  return total;
}
