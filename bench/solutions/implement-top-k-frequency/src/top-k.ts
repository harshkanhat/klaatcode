export function topKFrequent(values: string[], k: number): string[] {
  if (k <= 0 || values.length === 0) return [];

  const counts = new Map<string, { count: number; firstSeen: number }>();
  values.forEach((value, index) => {
    const current = counts.get(value);
    if (current) {
      current.count += 1;
    } else {
      counts.set(value, { count: 1, firstSeen: index });
    }
  });

  return [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[1].firstSeen - b[1].firstSeen)
    .slice(0, Math.floor(k))
    .map(([value]) => value);
}
