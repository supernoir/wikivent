import { VentilatorApplicationType } from "./VentilatorTypes";

export interface VentilatorModel {
  id: string,
  type: VentilatorApplicationType,
  make: string,
  model: string,
  features?: string[]
  extlink?: string
}