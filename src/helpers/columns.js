export  const columns = [
    {
        title: 'Image',
        dataIndex: 'api_featured_image',
        render: (text, record) => <img src={text} alt={record.name} style={{ width: '100px', height: '100px' }} />,
    },

    {
        title: 'Name',
        dataIndex: 'name',
    },

    {
        title: 'Category',
        dataIndex: 'category',
        render: (text) => (text ? text : 'general'),
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },

    {
        title: 'Price',
        dataIndex: 'price',
    },

    {
        title: 'Product type',
        dataIndex: 'product_type',
    },

]
