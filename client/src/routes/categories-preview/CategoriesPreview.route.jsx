/**
 * Categories preview routes
 * =========================
 *
 * Categories preview routes are used to preview categories
 *
 */
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/CategoryPreview.component';
import Spinner from '../../components/spinner/Spinner.component';

import {
  selectCategoriesMap,
  selectCategoriesLoading
} from '../../store/categories/category.selector';

const CategoriesPreviewRoute = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })
      )}
    </>
  );
};

export default CategoriesPreviewRoute;
