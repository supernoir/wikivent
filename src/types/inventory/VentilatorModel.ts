import { VentilatorApplicationType } from "./VentilatorTypes";

export enum EntryStatus {
  approved = "approved",
  submitted = "submitted",
  reported = "submitted"
}

export type EntryStatusType = EntryStatus.approved
  | EntryStatus.submitted | EntryStatus.reported

export interface VentilatorModel {
  // Uuid as unique identifier
  id: string,
  // Type of Status
  status: EntryStatusType,
  // Type of Ventilator
  type: VentilatorApplicationType,
  // Make, Producer / Manufacturer name
  make: string,
  // Model name
  model: string,
  // The name of the series of models
  series?: string,
  // A short list of features
  features?: string[],
  // Specs
  specs?: string[],
  // The ventilator's availability
  availability?: string[];
  // Link to product page
  extlink?: string,
  // List of sources
  sources?: [],
  // FDA regulation number
  regNumber: string
}