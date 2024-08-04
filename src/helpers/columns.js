
export const columns = (groupKey) => [
    {
        title: 'Image',
        dataIndex: 'api_featured_image',
        onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
        render: (text, record) => <img src={text} alt={record.name} style={{ display: 'block', width: '100px', height: '100px' }} />,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onCell: () => ({
            style: { minWidth: '50px', padding: '5px', textAlign: 'center' },
          }),
          onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
    },

    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: text => (text ? text.replace(/_/g, ' ') : 'general'),
        minWidth: 80,
        onCell: () => ({
            style: { minWidth: '50px', padding: '5px', textAlign: 'center' },
          }),
          onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
    },

    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        render: text => (text ? text : 'no brand'),
        onCell: () => ({
            style: { minWidth: '50px', padding: '5px', textAlign: 'center' },
          }),
          onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
    },

    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) => `${text} ${record.price_sign || '$' }`,
        onCell: () => ({
            style: { minWidth: '50px', padding: '5px', textAlign: 'center' },
          }),
          onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
    },

    {
        title: 'Product type',
        dataIndex: 'product_type',
        key: 'product_type',
        render: text => text.replace(/_/g, ' '),
        onCell: () => ({
            style: { minWidth: '50px', padding: '5px', textAlign: 'center' },
          }),
        onHeaderCell: () => ({
            style: { textAlign: 'center' },
          }),
    },

];
