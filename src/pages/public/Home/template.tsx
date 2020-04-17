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
  const [filterByType, setFilterbyType] = useState("")
  const [filterByMake, setFilterbyMake] = useState("")
  const [filterByModel, setFilterbyModel] = useState("")
  const [makeFilterOptions, setMakeFilterOptions] = useState([])
  const [modelFilterOptions, setModelFilterOptions] = useState([])


  const getOptionsFromData = (data: any, type: string) => {
    if (data && data.length > 0) {
      let options = data.map((item: any, index: number) => {
        return {
          id: index,
          value: item[type].trim().toLowerCase(),
          label: item[type]
        }
      })
      return options
    } else {
      return []
    }
  }

  const appendFilterToUri = () => {
    let queries = [{
      type: "",
      make: "",
      model: ""
    }]
    let queryKeys = Object.keys(queries[0])
    let queryValues = Object.values(queries[0])
    let queryString = ""

    for (let i = 0;i <= queries.length;i++) {
      if (queryValues[i].length > 0) {
        if (i === 0) {
          queryString += "?"
        }
        if (i === queries.length) {
          queryString += `${queryKeys[i]}=${queryValues[i]}`
        } else {
          queryString += `${queryKeys[i]}=${queryValues[i]}&`
        }
      }
    }

    return queryString
  }

  useEffect(() => {
    const query = appendFilterToUri()
    // Get All approved Items from API
    axios.get(
      `http://localhost:8081/approved/get${query}`,
    ).then(result => setApprovedItems(result.data))
      .catch(err => {
        toast.error(err.message)
      });
    // Get All approved Makes from API
    axios.get(
      `http://localhost:8081/approved/makes`,
    ).then(result => setMakeFilterOptions(result.data))
      .catch(err => {
        toast.error(err.message)
      });
    // Get All approved Models from API
    axios.get(
      `http://localhost:8081/approved/models`,
    ).then(result => setModelFilterOptions(result.data))
      .catch(err => {
        toast.error(err.message)
      });
  }, [])


  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <Select label={"Type of Ventilator"} options={ventilatorTypeOptions} />
    <Select label={"Make"} options={getOptionsFromData(makeFilterOptions, "make")} />
    <Select label={"Models"} options={getOptionsFromData(modelFilterOptions, "model")} />
    <DataTable data={data} isLoading={isLoading} context={DataContext.approved} />
  </Paper>)
}