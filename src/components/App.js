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
  // const [filterActor, setFilterActor] = useState('');

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

  // const handleFilterActor = (value) => {
  //   setFilterActor(value);
  // };

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

  //--FILTROS--//

  const characterFiltered = characterData

    //--Filtro por nombre--//

    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchName.toLocaleLowerCase());
    })

    //--Filtro por actor--//

    // .filter((eachCharacter) => {
    //   return eachCharacter.actor
    //     .toLowerCase()
    //     .includes(filterActor.toLowerCase());
    // })

    //--Filtro por casa--//

    .filter((eachCharacter) => {
      if (searchHouse === 'all') {
        return true;
      } else {
        return eachCharacter.house === searchHouse;
      }
    })

    //--Filtro por género--//

    .filter((eachCharacter) => {
      if (searchGender === 'all') {
        return true;
      } else {
        return eachCharacter.gender === searchGender;
      }
    });

  //--Orden alfabético--//

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
    <div className="background">
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
      <span className="backgroundSpan"></span>
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
                  alphabeticOrder={alphabeticOrder}
                  handleOrderCheck={handleOrderCheck}
                  searchGender={searchGender}
                  handleFilterGender={handleFilterGender}
                  handleReset={handleReset}
                  // filterActor={filterActor}
                  // handleFilterActor={handleFilterActor}
                />

                <CharacterList
                  characterData={characterFiltered}
                  searchName={searchName}
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
