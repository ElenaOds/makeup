import { Switch, Grid } from "antd";
const { useBreakpoint } = Grid;

const SwitchList = ({groupByBrand, handleGroupByBrand, handleGroupByCategory, groupByCategory, groupByType, handleGroupByType }) => {
  const screens = useBreakpoint();

  const listStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '8px',
      color: '#fff',
  }
  return (
    <ul style={{ 
      marginBottom: screens.lg ? 0 : 20,
      display: 'flex',
      gap: '20px',
      }}>
    <li style={listStyle}>
    <Switch 
      checked={groupByBrand} onChange={handleGroupByBrand} />Group by brand
    </li>
    <li style={listStyle}>
    <Switch checked={groupByCategory} onChange={handleGroupByCategory} style={{ marginLeft: 16 }} /> Group by category
    </li>
    <li style={listStyle}>
    <Switch checked={groupByType} onChange={handleGroupByType} style={{ marginLeft: 16 }} /> Group by type
    </li>
  </ul>
  )
}

export default SwitchList
