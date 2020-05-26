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
import { FilterType, FilterTypes } from '../../../types/filter'
import { appendFilterToUri } from '../../../services/QueryString'
import { useResource } from 'rest-hooks'
import VentilatorResource from '../../../resources/VentilatorResource'

interface HomePageProps extends RouteComponentProps { }

export const HomePage: React.FC<HomePageProps> = () => {
  const ventilators = useResource(
    VentilatorResource.listShape(), {}
  );
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
          value: item[type],
          label: item[type]
        }
      })
      return options
    } else {
      return []
    }
  }

  const setFilter = (type: FilterType, val: string) => {
    switch (type) {
      case FilterTypes.type:
        return setFilterbyType(val)
      case FilterTypes.make:
        return setFilterbyMake(val)
      case FilterTypes.model:
        return setFilterbyModel(val)
      default:
        break;
    }
  }


  useEffect(() => {
    let typeFilter = filterByType
    let makeFilter = filterByMake
    let modelFilter = filterByModel

    const query = appendFilterToUri({ type: typeFilter, make: makeFilter, model: modelFilter })

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
  }, [filterByMake, filterByModel, filterByType])


  function setApprovedItems(newData: any) {
    setData(newData)
  }

  return (<Paper>
    <Select
      label={"Type of Ventilator"}
      options={ventilatorTypeOptions}
      onChange={(id, val) => setFilter(FilterTypes.type, val)}
    />
    <Select
      label={"Make"}
      options={getOptionsFromData(makeFilterOptions, "make")}
      onChange={(id, val) => setFilter(FilterTypes.make, val)}
    />
    <Select
      label={"Models"}
      options={getOptionsFromData(modelFilterOptions, "model")}
      onChange={(id, val) => setFilter(FilterTypes.model, val)}
    />
    <DataTable data={ventilators} isLoading={isLoading} context={DataContext.approved} />
  </Paper>)
}