import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import getDataApi from '../services/apiHp';
import ls from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './Characters/CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './Characters/CharacterDetail';

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
  //---API---//

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacter(data);
    });
  }, []);

  //--LOCAL STORAGE--//

  useEffect(() => {
    // Guardo los datos de los personajes en el local storage
    ls.set('characterDataLS', characterData);
    ls.set('searchNameLS', searchName);
    ls.set('searchHouseLS', searchHouse);
    ls.set('searchGenderLS', searchGender);

    // Este useEffect solo se ejecutará cuando cambien las distintas opciones
    console.log('Ha cambiado el dato');
  }, [characterData, searchName, searchHouse, searchGender]);

  //---FUNCIONES QUE EJECUTAN LAS HIJAS---//

  //Función para buscar por nombre//
  //Función que guarda el input de la usuaria

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
    // setalphabeticOrder(false); no se si quiero meter en el reset el orden alfabético
    setSearchGender('all');
    ls.clear();
  };

  //Renderizar

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

  //Si lo que pone la usuaria no coincide con ningun nombre, no se si va aqui o en otro sitio

  //Si el checked esta pulsado, ordena los datos. No sé si va aquí, funciona, se que coge los datos filtrados y los ordena pero que quede por aqui suelto no me convence. Si lo guardo en una arrow no funciona.
  //Sort compara los dos valores, si a es menor que b, da negatuvo y quiere decir que va antes.

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

  //para coger el name del usuario, no hay id en el api
  const { pathname } = useLocation();
  console.log(pathname);
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
                  inputValue={searchName} //a inputValue mejor cambiarlo por searchName
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
            element={
              <CharacterDetail
                characterData={characterData}
                foundCharacters={foundCharacters}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
