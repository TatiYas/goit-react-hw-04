import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={s.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard
            imgLink={item.urls.small}
            imgDescr={item.description}
            onImageClick={onImageClick}
            bigUrl={item.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
}