export interface Inputs {
  locationName: string;
  dimension: string;
  structure: string;
  disableY: boolean;
  x: number;
  y?: number;
  z: number;
}

export const AVAILABLE_DIMENSIONS = [
  {
    value: "overworld",
    label: "Overworld",
    id: 0,
  },
  {
    value: "nether",
    label: "Nether",
    id: 1,
  },
  {
    value: "end",
    label: "End",
    id: 2,
  },
];

export const AVAILABLE_STRUCTURES = [
  { value: "none", label: "Custom", id: 99 },
  {
    value: "village",
    label: "Village",
    id: 0,
  },
  {
    value: "mineshaft",
    label: "Mineshaft",
    id: 1,
  },
  {
    value: "stronghold",
    label: "Stronghold",
    id: 2,
  },
  {
    value: "monument",
    label: "Monument",
    id: 3,
  },
  {
    value: "mansion",
    label: "Mansion",
    id: 4,
  },
  {
    value: "jungle_pyramid",
    label: "Jungle Pyramid",
    id: 5,
  },
  {
    value: "desert_pyramid",
    label: "Desert Pyramid",
    id: 6,
  },
  {
    value: "igloo",
    label: "Igloo",
    id: 7,
  },
  {
    value: "shipwreck",
    label: "Shipwreck",
    id: 8,
  },
  {
    value: "swamp_hut",
    label: "Swamp Hut",
    id: 9,
  },
  {
    value: "ocean_monument",
    label: "Ocean Monument",
    id: 10,
  },
  {
    value: "ocean_ruin",
    label: "Ocean Ruin",
    id: 11,
  },
  {
    value: "buried_treasure",
    label: "Buried Treasure",
    id: 12,
  },
  {
    value: "pillager_outpost",
    label: "Pillager Outpost",
    id: 13,
  },
  {
    value: "village",
    label: "Village",
    id: 14,
  },
  {
    value: "nether_fossil",
    label: "Nether Fossil",
    id: 15,
  },
  {
    value: "bastion_remnant",
    label: "Bastion Remnant",
    id: 16,
  },
  {
    value: "ruined_portal",
    label: "Ruined Portal",
    id: 17,
  },
];
