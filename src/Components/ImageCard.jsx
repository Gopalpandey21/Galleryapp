import React from 'react'
import { MdDownloadForOffline } from "react-icons/md";
function ImageCard({ image }) {
  const tags = image.tags.split(',').map(tag => tag.trim())
  const downloadImage = (url, user) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${user}-${image.id}.jpg`); // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="img" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-950 text-xl">
          <p>{image.user} </p>
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
          <div className='flex justify-end'>
          <button
          className="text-3xl text-black "
          onClick={() => downloadImage(image.webformatURL, image.user)}
        >
        <MdDownloadForOffline />
        </button>
        </div>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>#{tag} </span>
        ))}


      </div>
      

    </div>
  )
}

export default ImageCard
