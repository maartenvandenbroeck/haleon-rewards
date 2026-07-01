import { Recognition } from '../types';

/**
 * SPRINT 2 — BUILD (core task)
 *
 * Export the recognition feed to a downloadable CSV file.
 *
 * This function receives the recognitions that are currently visible after
 * the category filter has been applied — so it should export exactly what
 * the user sees, not the full dataset.
 *
 * Acceptance criteria:
 *  - One header row, then one row per recognition passed in.
 *  - Columns, in this order: From, To, Category, Points, Message, Date
 *  - The "Date" column uses the same human-readable format shown in the UI
 *    (see formatDate in utils/format.ts), not the raw ISO timestamp.
 *  - Message values may contain commas, quotes, and newlines: the CSV must
 *    stay valid (correct escaping/quoting) when opened in Excel or Sheets.
 *  - Triggers a browser download of a file named "haleon-rewards.csv".
 *
 * The "Export CSV" button in the toolbar calls this function. It is wired up
 * and ready; only the implementation below is missing.
 *
 * NOTE: the category filter dropdown (also part of Sprint 2) lives in the
 * component layer. Think about where to hold its state so both the feed and
 * this export function receive the same filtered list.
 */
export function exportRecognitionsToCsv(recognitions: Recognition[]): void {
  // TODO: implement CSV generation and trigger the download.
  throw new Error('exportRecognitionsToCsv is not implemented yet.');
}
