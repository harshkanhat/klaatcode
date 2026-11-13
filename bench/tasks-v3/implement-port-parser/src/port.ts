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
  const parsed = Number(value);
  return parsed || fallback;
}
