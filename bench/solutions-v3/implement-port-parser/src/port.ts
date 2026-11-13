/**
 * Parse a TCP/UDP port from an environment-style value.
 *
 * Contract:
 * - Accept an integer number or a string containing decimal digits.
 * - Trim surrounding whitespace from strings.
 * - Valid ports are integers from 1 through 65535 inclusive.
 * - Return fallback for undefined, blank, malformed, fractional, or out-of-range values.
 * - A fallback of 0 is allowed and must be preserved.
 */
export function parsePort(value: string | number | undefined, fallback = 3000): number {
  if (value === undefined) return fallback;

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.length === 0 || !/^\d+$/.test(trimmed)) return fallback;
    value = Number(trimmed);
  }

  if (!Number.isInteger(value) || value < 1 || value > 65535) {
    return fallback;
  }

  return value;
}
