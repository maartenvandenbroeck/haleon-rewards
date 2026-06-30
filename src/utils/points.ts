import { Recognition } from '../types';

export interface LeaderboardEntry {
  name: string;
  totalPoints: number;
  count: number;
}

// Generated with AI assistance: aggregate total points per team member.
export function aggregatePoints(recognitions: Recognition[]): Map<string, LeaderboardEntry> {
  const result = recognitions.reduce<Map<string, LeaderboardEntry>>((acc, recognition) => {
    const key = recognition.fromName;
    const existing = acc.get(key);
    if (existing) {
      existing.totalPoints += recognition.points;
      existing.count += 1;
    } else {
      acc.set(key, {
        name: key,
        totalPoints: recognition.points,
        count: 1,
      });
    }
    return acc;
  }, new Map());
  return result;
}

export function buildLeaderboard(recognitions: Recognition[]): LeaderboardEntry[] {
  const aggregated = aggregatePoints(recognitions);
  const entries = Array.from(aggregated.values());
  return entries.sort((a, b) => a.totalPoints - b.totalPoints);
}

export function totalPointsAwarded(recognitions: Recognition[]): number {
  return recognitions.reduce((sum, r) => sum + r.points, 0);
}
