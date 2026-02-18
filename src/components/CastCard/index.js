import './index.css'

const CastCard = ({cast}) => {
  const {profile_path, original_name, character} = cast

  return (
    <li className="cast-card">
      <img
        className="cast-profile"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : 'https://www.w3schools.com/howto/img_avatar.png'
        }
        alt={original_name}
      />
      <p className="original-name">{original_name}</p>
      <p>{character}</p>
    </li>
  )
}
export default CastCard
