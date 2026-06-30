import { useState } from 'react';
import { RewardCategory, TeamMember } from '../types';

const CATEGORIES: RewardCategory[] = [
  'Collaboration',
  'Innovation',
  'Customer Focus',
  'Integrity',
  'Delivery',
];

interface Props {
  members: TeamMember[];
  onSubmit: (input: {
    fromName: string;
    toName: string;
    category: RewardCategory;
    points: number;
    message: string;
  }) => void;
}

export function RecognitionForm({ members, onSubmit }: Props) {
  const [fromName, setFromName] = useState(members[0]?.name ?? '');
  const [toName, setToName] = useState(members[1]?.name ?? '');
  const [category, setCategory] = useState<RewardCategory>('Collaboration');
  const [points, setPoints] = useState(25);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit({ fromName, toName, category, points, message: message.trim() });
    setMessage('');
  };

  return (
    <div className="card">
      <h2>Give recognition</h2>
      <form onSubmit={handleSubmit}>
        <label>From</label>
        <select value={fromName} onChange={(e) => setFromName(e.target.value)}>
          {members.map((m) => (
            <option key={m.name} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        <label>To</label>
        <select value={toName} onChange={(e) => setToName(e.target.value)}>
          {members.map((m) => (
            <option key={m.name} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as RewardCategory)}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label>Points</label>
        <input
          type="number"
          min={5}
          max={100}
          step={5}
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />

        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What did they do?"
        />

        <button type="submit">Send recognition</button>
      </form>
    </div>
  );
}
