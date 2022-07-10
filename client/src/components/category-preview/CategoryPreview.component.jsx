/**
 * Category Preview component
 * ==========================
 *
 * This component is used to display the category preview
 *
 */
import ProductCard from '../product-card/ProductCard.component';

import { CategoryPreviewContainer, Title, Preview } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
