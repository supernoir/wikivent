import React, {
  useState,
  useEffect
} from 'react'
import { RouteComponentProps } from '@reach/router'
import { DataTable } from '../../../components/DataTable/template'
import { Paper } from '../../../components/Paper/styles'
import axios from "axios"
import { Select } from '../../../components/Select/template'
import { ventilatorTypeOptions, DataContext } from '../../../types/inventory/VentilatorTypes'
import { toast } from "react-toastify"

interface HomePageProps extends RouteComponentProps { }

export const HomePage: React.FC<HomePageProps> = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get(
      `http://localhost:8081/approved/get`,
    ).then(result => setApprovedItems(result.data))
      .catch(err => {
        toast.error(err.message)
      });
  }, [])


  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <Select label={"Type of Ventilator"} options={ventilatorTypeOptions} />
    <DataTable data={data} isLoading={isLoading} context={DataContext.approved} />
  </Paper>)
}