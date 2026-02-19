import './index.css'

const CastCard = ({cast}) => {
  const {profilePath, originalName, character} = cast

  return (
    <li className="cast-card">
      <img
        className="cast-profile"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/original/${profilePath}`
            : 'https://www.w3schools.com/howto/img_avatar.png'
        }
        alt={originalName}
      />
      <p className="original-name">{originalName}</p>
      <p>{character}</p>
    </li>
  )
}
export default CastCard
