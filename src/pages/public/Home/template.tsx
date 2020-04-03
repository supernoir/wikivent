import React, {
  useState,
  useEffect
} from 'react'
import { RouteComponentProps } from '@reach/router'
import { DataTable } from '../../../components/DataTable/template'
import { Paper } from '../../../components/Paper/styles'
import axios from "axios"
import { Select } from '../../../components/Select/template'
import { VentilatorApplicationTypes } from '../../../types/inventory/VentilatorTypes'

const ventilatorTypeOptions = [
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

interface HomePageProps extends RouteComponentProps { }

export const HomePage: React.FC<HomePageProps> = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get(
      `http://localhost:8081/approved/get`,
    ).then(result => setApprovedItems(result.data));
  }, [])


  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <Select label={"Type of Ventilator"} options={ventilatorTypeOptions} />
    <DataTable data={data} isLoading={isLoading} />
  </Paper>)
}