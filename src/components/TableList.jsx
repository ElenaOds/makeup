import { Table, Tag } from "antd";
import { columns } from '../helpers/columns';
import { getTextColor } from '../helpers/colors';

const TableList = ({ loading, groupedData }) => {
  
return (
  <>
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
    </>
   
  )
}

export default TableList;
