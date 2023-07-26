import { styled } from 'styled-components'
import React from 'react'
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import ProductsMain from '../Components/ProductsMain';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters , setFilters] = useState({});
  const [sort, setSort] = useState("newest"); // Initialize with "newest" as the default value


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  
  return (

    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name = "color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>brown</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>gray</Option>
          </Select >
          <Select name = "size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
          </Select>

        </Filter>
        </FilterContainer>
        <ProductsMain cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default ProductList;