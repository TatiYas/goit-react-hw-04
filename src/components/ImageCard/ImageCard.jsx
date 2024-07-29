import s from "./ImageCard.module.css";
export default function ImageCard({ items, description, openModal }) {
    return (
        <div>
            <img className={s.img} 
            src={items.urls.small} 
            alt={items.description} onClick={() => openModal(items.urls.regular, description)} />
        </div>
    )
}