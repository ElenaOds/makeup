import { Switch } from "antd";

const SwitchList = ({groupByBrand, handleGroupByBrand, handleGroupByCategory, groupByCategory, groupByType, handleGroupByType}) => {
  return (
    <div style={{ marginBottom: 16 }}>
    <Switch checked={groupByBrand} onChange={handleGroupByBrand} /> Group by brand
    <Switch checked={groupByCategory} onChange={handleGroupByCategory} style={{ marginLeft: 16 }} /> Group by category
    <Switch checked={groupByType} onChange={handleGroupByType} style={{ marginLeft: 16 }} /> Group by type
  </div>
  )
}

export default SwitchList
