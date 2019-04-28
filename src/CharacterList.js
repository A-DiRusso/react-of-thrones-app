import React from 'react';
import PropTypes from 'prop-types';

function CharacterList({characters}) {
  return (
    <ul>
        {
            characters.map((name, i) => <li key={i} >{name}{i}</li>)
        }
    </ul>
  
  )
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
}

export default CharacterList;
