export interface LoaderType {
  id: string;
  locationName: string;
  dimension: "overworld" | "nether" | "end";
  structure?:
    | "none"
    | "buried_treasure"
    | "desert_pyramid"
    | "igloo"
    | "jungle_pyramid"
    | "mineshaft"
    | "monument"
    | "nether_bridge"
    | "ocean_ruin"
    | "pillager_outpost"
    | "shipwreck"
    | "stronghold"
    | "village"
    | "woodland_mansion";
  notes: string[];
  x: number;
  y?: number;
  z: number;
}
