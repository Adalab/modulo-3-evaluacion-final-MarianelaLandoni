import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';
//Servicios
import getDataApi from '../services/apiHp';
import ls from '../services/localStorage';
//Componentes
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';
//Estilos
import '../styles/App.scss';

function App() {
  //---VARIABLES DE ESTADO---//

  const [characterData, setCharacter] = useState(ls.get('characterDataLS', []));
  const [searchName, setSearchName] = useState(ls.get('searchNameLS', ''));
  const [searchHouse, setSearchHouse] = useState(
    ls.get('searchHouseLS', 'Gryffindor')
  );
  const [alphabeticOrder, setalphabeticOrder] = useState(false);
  const [searchGender, setSearchGender] = useState(
    ls.get('searchGenderLS', 'all')
  );
  console.log(characterData);
  //---API---//

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacter(data);
    });
  }, []);

  //--LOCAL STORAGE--//

  useEffect(() => {
    ls.set('characterDataLS', characterData);
    ls.set('searchNameLS', searchName);
    ls.set('searchHouseLS', searchHouse);
    ls.set('searchGenderLS', searchGender);
  }, [characterData, searchName, searchHouse, searchGender]);

  //---FUNCIONES MANEJADORAS---//

  const handleInputName = (value) => {
    setSearchName(value);
  };

  const handleFilterHouse = (value) => {
    setSearchHouse(value);
  };

  const handleOrderCheck = (value) => {
    setalphabeticOrder(value);
  };

  const handleFilterGender = (value) => {
    setSearchGender(value);
  };

  const handleReset = () => {
    setSearchName('');
    setSearchHouse('Gryffindor');
    setSearchGender('all');
  };

  //--RENDERIZAR--//

  const characterFiltered = characterData
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchName.toLocaleLowerCase());
    })

    .filter((eachCharacter) => {
      if (searchHouse === 'all') {
        return true;
      } else {
        return eachCharacter.house === searchHouse;
      }
    })

    .filter((eachCharacter) => {
      if (searchGender === 'all') {
        return true;
      } else {
        return eachCharacter.gender === searchGender;
      }
    });

  if (alphabeticOrder === true) {
    characterFiltered.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  //--RUTA DINÁMICA--//

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const foundCharacters = characterData.find((item) => item.id === characterId);

  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchName={searchName}
                  handleInputName={handleInputName}
                  searchHouse={searchHouse}
                  handleFilterHouse={handleFilterHouse}
                  handleOrderCheck={handleOrderCheck}
                  alphabeticOrder={alphabeticOrder}
                  searchGender={searchGender}
                  handleFilterGender={handleFilterGender}
                  handleReset={handleReset}
                />

                <CharacterList
                  characterData={characterFiltered}
                  inputValue={searchName}
                />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail foundCharacters={foundCharacters} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
