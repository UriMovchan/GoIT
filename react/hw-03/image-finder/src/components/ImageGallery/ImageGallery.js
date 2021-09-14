import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = (props) => (
  <ul className="ImageGallery">
    {props.hits &&
      props.hits.map((i) => (
        <ImageGalleryItem
          key={i.id}
          src={i.webformatURL}
          alt={i.tags}
          modalSrc={i.largeImageURL}
          onClick={props.modalOpen}
        />
      ))}
  </ul>
);

export default ImageGallery;
