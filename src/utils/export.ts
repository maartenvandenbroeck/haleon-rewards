import { Recognition } from '../types';

/**
 * SPRINT 2 — BUILD
 *
 * Export the recognition feed to a downloadable CSV file.
 *
 * Acceptance criteria:
 *  - One header row, then one row per recognition.
 *  - Columns, in this order: From, To, Category, Points, Message, Date
 *  - The "Date" column uses the same human-readable format shown in the UI
 *    (see formatDate in utils/format.ts), not the raw ISO timestamp.
 *  - Message values may contain commas, quotes, and newlines: the CSV must
 *    stay valid (correct escaping/quoting) when opened in Excel or Sheets.
 *  - Triggers a browser download of a file named "haleon-rewards.csv".
 *
 * The "Export CSV" button in the toolbar calls this function. It is wired up
 * and ready; only the implementation below is missing.
 */
export function exportRecognitionsToCsv(recognitions: Recognition[]): void {
  // TODO: implement CSV generation and trigger the download.
  throw new Error('exportRecognitionsToCsv is not implemented yet.');
}
