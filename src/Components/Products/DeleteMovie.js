import React from 'react'

const DeleteMovie = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.EpisodeNumber}</th>
        <td>{props.title}</td>
        <td>{props.openingText}</td>
        <td>{props.releaseDate}</td>
        <td>
          <button
            className="btn btn-warning mb-2"
           value={props.EpisodeNumber}
            onClick={props.deleteData}
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default DeleteMovie;