import React, { useState } from 'react'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

import './styles.scss'

const ShowImage = ({ images, onClose, index = 0 }) => {
  const [photoIndex, setPhotoIndex] = useState(index)
  return (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
      }
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
    />
  )
}

export default ShowImage
