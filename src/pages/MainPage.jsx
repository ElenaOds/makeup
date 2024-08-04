import { useEffect, useState } from 'react';
import { getData } from '../services/makeupApi';
import TableList from '../components/TableList';
import SwitchList from '../components/SwitchList';
import Filter from '../components/Filter';

import { Grid } from 'antd';
const { useBreakpoint } = Grid;

const MainPage = () => {
    const [ dataSource, setDataSource ] = useState ([]);
    const [ loading, setLoading ] = useState(false);
    const [ groupByBrand, setGroupByBrand ] = useState(false);
    const [ groupByCategory, setGroupByCategory ] = useState(false);
    const [ groupByType, setGroupByType ] = useState(false);
    const [ filteredData, setFilteredData ] = useState([]);

    const screens = useBreakpoint();


    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const data = await getData();
            const itemsData = data.map(item => ({
                ...item,
                key: item.id,
            }));
            setDataSource(itemsData);
            setFilteredData(itemsData);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

         const handleGroupByBrand = (checked) => {
        setGroupByBrand(checked);
        if (checked) {
          setGroupByCategory(false);
          setGroupByType(false);
        }
      };
    
      const handleGroupByCategory = (checked) => {
        setGroupByCategory(checked);
        if (checked) {
          setGroupByBrand(false);
          setGroupByType(false);
        }
      };
    
      const handleGroupByType = (checked) => {
        setGroupByType(checked);
        if (checked) {
          setGroupByBrand(false);
          setGroupByCategory(false);
        } 
      };
  
     
      const groupData = (dataSource, key) => {
        return dataSource.reduce((result, item) => {
          const groupKey = item[key];
          if (!result[groupKey]) {
            result[groupKey] = [];
          }
          result[groupKey].push(item);
          return result;
        }, 
        {});
      };
    
      const sortGroupedData = (groupedData) => {
        return Object.keys(groupedData).sort().reduce((result, key) => {
          result[key] = groupedData[key];
          return result;
        }, {});
      };
  
      const groupBy = groupByBrand ? 'brand'
      : groupByCategory ? 'category' 
      : groupByType ? 'product_type' 
      : null;

  
      const groupedData = groupBy ? sortGroupedData(groupData(filteredData, groupBy)) : { Products: filteredData };

  return (
    <div>
      <div 
     
      style={{
        marginBottom: '26px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: screens.lg ? 'row' : 'column',
      }}
      >
      <SwitchList groupByBrand={groupByBrand} handleGroupByBrand={handleGroupByBrand}
      handleGroupByCategory={handleGroupByCategory} groupByCategory={groupByCategory}
      groupByType={groupByType} handleGroupByType={handleGroupByType}
      /> 
    
      <Filter dataSource={dataSource} setFilteredData={setFilteredData}/>
      </div>

      <TableList loading={loading} groupedData={groupedData}/>
    </div>
  )
}

export default MainPage;
