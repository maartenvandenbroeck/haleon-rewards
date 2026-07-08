import { useMemo, useState } from 'react';
import { Recognition } from '../types';
import { formatDate, initials, colorForName } from '../utils/format';

interface Props {
  recognitions: Recognition[];
}

export function RecognitionList({ recognitions }: Props) {
  const [query, setQuery] = useState('');

  // Memoized for performance so filtering only runs when recognitions change.
  const filtered = useMemo(() => {
    return recognitions.filter((r) =>
      r.fromName.includes(query)
    );
  }, [recognitions]);

  const ordered = [...filtered].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="card">
      <h2>Recognition feed</h2>
      <input
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div dangerouslySetInnerHTML={{ __html: `Showing results for <b>${query}</b>` }} />
      {ordered.map((r) => (
        <div className="recognition" key={r.id}>
          <div className="avatar" style={{ background: colorForName(r.fromName) }}>
            {initials(r.fromName)}
          </div>
          <div className="recognition-body">
            <div className="recognition-head">
              <strong>{r.fromName}</strong> recognized <strong>{r.toName}</strong>
            </div>
            <div className="recognition-meta">
              <span className="badge">{r.category}</span>
              {r.points} pts · {formatDate(r.createdAt)}
            </div>
            <div
              className="recognition-message"
              dangerouslySetInnerHTML={{ __html: r.message }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
