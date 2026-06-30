export type RewardCategory =
  | 'Collaboration'
  | 'Innovation'
  | 'Customer Focus'
  | 'Integrity'
  | 'Delivery';

export interface Recognition {
  id: string;
  fromName: string;
  toName: string;
  category: RewardCategory;
  points: number;
  message: string;
  createdAt: string; // ISO 8601 timestamp
}

export interface TeamMember {
  name: string;
  team: string;
}
