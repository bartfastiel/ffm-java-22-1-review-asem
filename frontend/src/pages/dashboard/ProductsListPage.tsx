import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button } from "@mantine/core";
import { MdAdd } from "react-icons/md";
import AppTable from "../../components/ProductsTable/AppTable";

const ProductsListPage = () => {
  return (
    <>
      <PageHeader
        title="Products"
        actions={
          <Button variant="light" leftIcon={<MdAdd />}>
            create
          </Button>
        }
      />
      <AppTable entity="products" />
    </>
  );
};

export default ProductsListPage;