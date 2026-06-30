import { Recognition } from '../types';
import { buildLeaderboard } from '../utils/points';
import { pluralize } from '../utils/format';

interface Props {
  recognitions: Recognition[];
}

export function Leaderboard({ recognitions }: Props) {
  const entries = buildLeaderboard(recognitions);

  return (
    <div className="card">
      <h2>Leaderboard</h2>
      {entries.map((entry, index) => (
        <div className="leaderboard-row" key={entry.name}>
          <span className="leaderboard-rank">{index + 1}</span>
          <span className="leaderboard-name">
            {entry.name}
            <br />
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>
              {pluralize(entry.count, 'recognition')}
            </span>
          </span>
          <span className="leaderboard-points">{entry.totalPoints}</span>
        </div>
      ))}
    </div>
  );
}
