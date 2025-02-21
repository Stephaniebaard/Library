import './AuthorList.scss';
import { useState } from 'react';
import AuthorLiItem from './AuthorListItem/AuthorListItem';
import Button from '../../components/Buttons/Button';

export default function AuthorList() {
  const [Author, setAuthor] = useState<string[]>([
    'Sarah J Maas',
    'Rebecca Yarros',
    'Donna Tartt',
  ]);

  const [inputAuthor, setInputAuthor] = useState('');

  const deleteAuthor = (index: number) => {
    setAuthor(Author.filter((_, i) => i !== index));
  };

  const addAuthor = () => {
    inputAuthor.trim() && setAuthor([...Author, inputAuthor]);
    setInputAuthor('');
  };

  return (
    <div className='AuthorListDiv'>
      <h2>Authors</h2>
      <ul className='AthorList'>
        {Author.map((author, index) => (
          <AuthorLiItem
            key={`${index}-${author}`}
            index={index}
            author={author}
            deleteAuthor={deleteAuthor}
          />
        ))}
      </ul>
      <Button
        title='Reset'
        handleClick={() =>
          setAuthor(['Sarah J Maas', 'Rebecca Yarros', 'Donna Tartt'])
        }
      />
      <input
        autoFocus
        type='text'
        placeholder='Add author... (max 50 letters)'
        maxLength={50}
        value={inputAuthor}
        onChange={(e) => setInputAuthor(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addAuthor()}
      />
      <button onClick={addAuthor}>Add</button>
    </div>
  );
}
