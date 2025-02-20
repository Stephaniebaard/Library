
import "./App.scss";
import AuthorList from "./widget/AuthorList/AuthorList";
import BookBox from "./widget/BookBox/BookBox";


function App() {
  return (
    <>
      <h1>Library📚</h1>
      <AuthorList/>
      <BookBox/>
    </>
  );
}


export default App;