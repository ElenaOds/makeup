import { useEffect, useState } from 'react';
import { getData } from '../services/makeupApi';
import { Table, Switch, Tag } from "antd";
import { getTextColor } from '../helpers/colors';
import { columns } from '../helpers/columns';


const Test = () => {
    const [ dataSource, setDataSource ] = useState ([]);
    const [ loading, setLoading ] = useState(false);
    const [groupByBrand, setGroupByBrand] = useState(false);
    const [groupByCategory, setGroupByCategory] = useState(false);
    const [groupByType, setGroupByType] = useState(false);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getData();
          const itemsData = data.map(item => ({
            ...item,
            key: item.id,
          }));
          setDataSource(itemsData);
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

    const groupBy = groupByBrand ? 'brand' : groupByCategory ? 'category' : groupByType ? 'product_type' : null;
    const groupedData = groupBy ? sortGroupedData(groupData(dataSource, groupBy)) : { Products: dataSource };

  


  return (
    <div>
    <div style={{ marginBottom: 16 }}>
      <Switch checked={groupByBrand} onChange={handleGroupByBrand} /> Group by brand
      <Switch checked={groupByCategory} onChange={handleGroupByCategory} style={{ marginLeft: 16 }} /> Group by category
      <Switch checked={groupByType} onChange={handleGroupByType} style={{ marginLeft: 16 }} /> Group by type
    </div>



 {Object.keys(groupedData).map(groupKey => (
     
      <Table 
      key={groupKey}
      dataSource={groupedData[groupKey]}
      columns={columns(groupKey)} 
      loading={loading}
      bordered
     
      expandable={{
        expandedRowRender: (record) => ( 
          <div
         style={{
          margin: 0,
          display: 'flex',
          justifyContent: 'stretch',
          flexWrap: 'wrap',
          width: '100%',
          gap: '20px',
          }}
        >
        {record.product_colors?.map((color, index) => (
          <Tag key={index} 
            style={{
              backgroundColor: color.hex_value, 
              color: getTextColor(color.hex_value),
              width: '120px',
              textAlign: 'center',
             }} 
             >
              {color.colour_name}
          </Tag>
            ))}
          </div>
        ),
        rowExpandable: (record) => record.product_colors && record.product_colors.length > 0,
      }}
      pagination={{
        position: ['bottomCenter'],
      }}
      />
    ))}  
  </div>



  )
}

export default Test
