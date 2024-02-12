import Layout from "../components/layouts/Layout";
import { Table, Space } from 'antd';
import useProductListingHook from "../hooks/pages/useProductListingHook";
import { Link } from "react-router-dom";
//import type { TableProps } from 'antd';

const columns = [
    {
        title: 'Index',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to="/">Invite {record.name}</Link>
                <Link to="/">Delete</Link>
            </Space>
        ),
    },
];



const ProductsListing = () => {

    const { allProducts } = useProductListingHook();

    //console.log("allProducts", allProducts);
    let productSource = [];

    allProducts?.map((productItem, productIndex) => {
        return productSource.push({
            index: productIndex + 1,
            title: productItem?.title,
            brand: productItem?.brandId?.length > 0 && productItem?.brandId[0]?.name,
            category: productItem?.categoriesId?.length > 0 && productItem?.categoriesId?.map((catItem) => catItem?.name),
            price: productItem?.price
        })
    });

    return (
        <Layout>
            <Table dataSource={productSource} columns={columns} />
        </Layout>

    )
}

export default ProductsListing
