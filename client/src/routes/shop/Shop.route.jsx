/**
 * Shop routes
 * ===========
 *
 * Shop routes are used to display the shop page
 *
 */
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/CategoriesPreview.route';
import Category from '../category/Category.route';

import { fetchCategoriesStart } from '../../store/categories/category.actions';

// import { CategoriesPreviewContainer, CategoryContainer } from './Shop.styles';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []); // eslint-disable-line

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
