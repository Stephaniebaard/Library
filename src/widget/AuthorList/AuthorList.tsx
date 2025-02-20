import "./AuthorList.scss"; 
import { useState } from "react";
import AuthorLiItem from "./AuthorListItem/AuthorListItem";
import Button from "../../components/Buttons/Button";

export default function AuthorList(){
    const [Author, setAuthor] = useState<string[]>([
        "Sarah J Maas",
        "Rebecca Yarros",
        "Donna Tartt",
    ]);

    const deleteAuthor =(index: number)=>{
        setAuthor(Author.filter((_,i)=> i !== index));
    };

    return (
        <div className="AuthorList">
            <h2>Authors</h2>
            <ul>
                {Author.map((author,index)=>(
                    <AuthorLiItem 
                    key={`${index}-${author}`}
                    index={index}
                    author={author}
                    deleteAuthor={deleteAuthor}
                    />
                ))}
            </ul>
            <Button
				title="Reset"
				handleClick={() =>
					setAuthor([
						"Sarah J Maas",
						"Rebecca Yarros",
						"Donna Tartt",
					])
				}
			/>
        </div>
    );
}