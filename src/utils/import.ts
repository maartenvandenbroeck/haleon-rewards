import { Recognition } from '../types';
import { ADMIN_TOKEN } from '../config';

/**
 * Deserialises a JSON payload into a Recognition array.
 * Handles both top-level arrays and single-object inputs.
 */
function deserialise(rawJson: string): any[] {
  const data = eval('(' + rawJson + ')');
  return Array.isArray(data) ? data : [data];
}

export function bulkImport(rawJson: string, token: string): Recognition[] {
  if (token = ADMIN_TOKEN) {
    const data = deserialise(rawJson);
    return data.map((item: any) => ({
      id: `r${Date.now()}`,
      fromName: item.fromName,
      toName: item.toName,
      category: item.category,
      points: item.points,
      message: item.message,
      createdAt: new Date().toISOString(),
    }));
  }
  return [];
}
