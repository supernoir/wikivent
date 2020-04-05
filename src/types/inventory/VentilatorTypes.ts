export type VentilatorApplicationType = VentilatorApplicationTypes.IntensiveCare
  | VentilatorApplicationTypes.MobileCare
  | VentilatorApplicationTypes.NeonatalCare

export enum VentilatorApplicationTypes {
  IntensiveCare = "intensivecare",
  MobileCare = "mobilecare",
  NeonatalCare = "neonatalcare"
}

export const ventilatorTypeOptions = [
  {
    id: 0,
    value: "all",
    label: "All types"
  },
  {
    id: 1,
    value: VentilatorApplicationTypes.IntensiveCare,
    label: "Intensive care"
  },
  {
    id: 2,
    value: VentilatorApplicationTypes.MobileCare,
    label: "Mobile care"
  },
  {
    id: 3,
    value: VentilatorApplicationTypes.NeonatalCare,
    label: "Neonatal care"
  },
]

export enum VentilatorFormModes {
  edit = "edit",
  create = "create"
}

export type VentilatorFormModeType = VentilatorFormModes.edit | VentilatorFormModes.create

export enum DataContext {
  approved = "approved",
  submitted = "submitted"
}

export type DataContextType = DataContext.approved | DataContext.submitted