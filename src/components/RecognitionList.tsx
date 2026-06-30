import { Recognition } from '../types';
import { formatDate, initials, colorForName } from '../utils/format';

interface Props {
  recognitions: Recognition[];
}

export function RecognitionList({ recognitions }: Props) {
  const ordered = [...recognitions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="card">
      <h2>Recognition feed</h2>
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
