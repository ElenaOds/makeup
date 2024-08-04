import { Table, Tag } from "antd";
import { columns } from '../helpers/columns';
import { getTextColor } from '../helpers/colors';
import { Grid } from 'antd';
const { useBreakpoint } = Grid;

const TableList = ({ loading, groupedData, groupBy }) => {
  const screens = useBreakpoint();
  
return (
  <>
  {Object.keys(groupedData).map(groupKey => (
  
  <Table 

  key={groupKey}
  dataSource={groupBy ? [{ key: groupKey, children: groupedData[groupKey] }] : groupedData[groupKey]}
  columns={groupBy ? [{ title: groupKey.replace(/_/g, ' '), dataIndex: 'groupKey', key: 'groupKey' }] : columns(groupKey)} 
  loading={loading}
  bordered
  pagination={groupBy ? false : true}
  expandable={groupBy ? {
    expandedRowRender: (record) => (
      <Table 
        dataSource={record.children}
        columns={columns(groupKey)}
        pagination={false}
        showHeader={true}
        expandable={{
          expandedRowRender: (record) => (
            <div
              style={{
                margin: 0,
                display: 'flex',
                justifyContent: 'stretch',
                flexWrap: 'wrap',
                width: '100%',
                gap: '10px',
              }}
            >
              {record.product_colors?.map((color, index) => (
                <Tag 
                  key={index} 
                  style={{
                    backgroundColor: color.hex_value, 
                    color: getTextColor(color.hex_value),
                    width: '150px',
                    fontSize: screens.lg ? '12px' : '10px',
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
      />
    ),
    rowExpandable: (record) => record.children && record.children.length > 0,
  } : {
    expandedRowRender: (record) => (
      <div
        style={{
          margin: 0,
          display: 'flex',
          justifyContent: 'stretch',
          flexWrap: 'wrap',
          width: '100%',
          gap: '10px',
        }}
      >
        {record.product_colors?.map((color, index) => (
          <Tag 
            key={index} 
            style={{
              backgroundColor: color.hex_value, 
              color: getTextColor(color.hex_value),
              width: '150px',
              fontSize: screens.lg ? '10px' : '8px',
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
/>

))}
    </>
   
  )
}

export default TableList;
