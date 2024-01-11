import React from 'react';

export default function RowComponents({image}) {
 return (
    <tr>
        <td><img src={image.src.tiny} alt={image.alt}/></td>
        <td>{image.alt}</td>
        <td><a href={image.photographer_url}>{image.photographer}</a></td>
    </tr>
  )
}
