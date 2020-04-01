export type VentilatorApplicationType = VentilatorApplicationTypes.IntensiveCare
  | VentilatorApplicationTypes.MobileCare
  | VentilatorApplicationTypes.NeonatalCare

export enum VentilatorApplicationTypes {
  IntensiveCare = "intensivecare",
  MobileCare = "mobilecare",
  NeonatalCare = "neonatalcare"
}