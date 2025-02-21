import './App.scss';
import AnimalList from './widget/AnimalList/AnimalList';
import AuthorList from './widget/AuthorList/AuthorList';
import BookBox from './widget/BookBox/BookBox';

function App() {
  return (
    <>
      <h1>Library📚</h1>
      <AuthorList />
      <BookBox />
      <AnimalList />
    </>
  );
}

export default App;
