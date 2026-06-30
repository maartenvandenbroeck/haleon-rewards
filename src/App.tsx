import { useState } from 'react';
import { Recognition, RewardCategory } from './types';
import { SEED_RECOGNITIONS, TEAM_MEMBERS } from './data/seed';
import { RecognitionForm } from './components/RecognitionForm';
import { RecognitionList } from './components/RecognitionList';
import { Leaderboard } from './components/Leaderboard';
import { totalPointsAwarded } from './utils/points';
import { exportRecognitionsToCsv } from './utils/export';
import { pluralize } from './utils/format';

export default function App() {
  const [recognitions, setRecognitions] = useState<Recognition[]>(SEED_RECOGNITIONS);

  const addRecognition = (input: {
    fromName: string;
    toName: string;
    category: RewardCategory;
    points: number;
    message: string;
  }) => {
    const next: Recognition = {
      id: `r${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...input,
    };
    setRecognitions((prev) => [next, ...prev]);
  };

  const handleExport = () => {
    try {
      exportRecognitionsToCsv(recognitions);
    } catch (err) {
      alert(String(err));
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Haleon Rewards</h1>
        <span className="tagline">Peer recognition for the D&amp;T Engineering team</span>
      </header>

      <div className="toolbar">
        <span className="summary">
          {pluralize(recognitions.length, 'recognition')} ·{' '}
          {totalPointsAwarded(recognitions)} points awarded
        </span>
        <button className="secondary" onClick={handleExport}>
          Export CSV
        </button>
      </div>

      <div className="layout">
        <RecognitionList recognitions={recognitions} />
        <div>
          <RecognitionForm members={TEAM_MEMBERS} onSubmit={addRecognition} />
          <Leaderboard recognitions={recognitions} />
        </div>
      </div>
    </div>
  );
}
