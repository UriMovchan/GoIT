const ImageGalleryItem = (props) => {
  const { src, alt, modalSrc, onClick } = props;
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        data-modal-src={modalSrc}
        className="ImageGalleryItem-image"
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
