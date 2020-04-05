import React, {
  useState,
  useEffect
} from 'react'
import { RouteComponentProps } from '@reach/router'
import { DataTable } from '../../../components/DataTable/template'
import { Paper } from '../../../components/Paper/styles'
import axios from "axios"
import { toast } from "react-toastify"
import { DataContext } from '../../../types/inventory/VentilatorTypes'

interface ReviewPage extends RouteComponentProps { }

export const ReviewPage: React.FC<ReviewPage> = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get(
      `http://localhost:8081/submitted/get`,
    ).then(result => setApprovedItems(result.data))
      .catch(err => {
        toast.error(err.message)
      });
  }, [])

  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <DataTable data={data} isLoading={isLoading} context={DataContext.submitted} />
  </Paper>)
}