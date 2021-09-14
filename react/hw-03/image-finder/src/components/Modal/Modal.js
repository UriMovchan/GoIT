const ImageGalleryItem = (props) => {
  const {
    img: { src, alt },
    close,
  } = props;

  return (
    <div className="Overlay" onClick={close}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ImageGalleryItem;
