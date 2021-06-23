const CharactersCard = ({ characters }) => {
  return (
    <>
      {characters.map((character, characterIndex) => (
        <div key={characterIndex} className="characters">
          <div className="characters-details">
            <h2 className="characters-name">{character.name}</h2>
            <div className="characters-info">
              <p>
                <span>Birth Year:</span> {character.birth_year}
              </p>
              <p>
                <span>Gender:</span> {character.gender}
              </p>
              <p>
                <span>Height:</span> {character.height}
              </p>
              <p>
                <span>Hair Color:</span> {character.hair_color}
              </p>
              <p>
                <span>Eye Color:</span> {character.eye_color}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CharactersCard;
