/**
 * Directory component
 * ===================
 *
 * This component is used to display the shop directory
 *
 */
import DirectoryItem from '../directory-item/DirectoryItem.component';

import { DirectoryContainer } from './Directory.styles';

const categories = [
  {
    id: 1,
    title: 'samples',
    imageUrl:
      'https://kobolsoundsresources.s3.eu-west-3.amazonaws.com/categories-images/SamplesCover.png',
    route: 'shop/samples'
  },
  {
    id: 2,
    title: 'presets',
    imageUrl:
      'https://kobolsoundsresources.s3.eu-west-3.amazonaws.com/categories-images/PresetsCover.png',
    route: 'shop/presets'
  },
  {
    id: 3,
    title: 'templates',
    imageUrl:
      'https://kobolsoundsresources.s3.eu-west-3.amazonaws.com/categories-images/TemplatesCover.png',
    route: 'shop/templates'
  },
  {
    id: 4,
    title: 'free-content',
    imageUrl:
      'https://kobolsoundsresources.s3.eu-west-3.amazonaws.com/categories-images/FreeContentCover.png',
    route: 'shop/free-content'
  },
  {
    id: 5,
    title: 'sales',
    imageUrl:
      'https://kobolsoundsresources.s3.eu-west-3.amazonaws.com/categories-images/SalesCover.png',
    route: 'shop/sales'
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
