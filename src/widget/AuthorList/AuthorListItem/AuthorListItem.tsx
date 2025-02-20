import "./AuthorListItem.scss";
import Button from "../../../components/Buttons/Button";

type AuthorLiItemProps = {
    index: number;
    author: string;
    deleteAuthor: (index:number)=> void;
};

export default function AuthorLiItem({
    index,
    author,
    deleteAuthor,
}: Readonly<AuthorLiItemProps>)
{
    return(
        <li className="AuthorLiItem">
            <span>{author}</span>
            <Button
            title="Delete"
            handleClick={()=>{deleteAuthor(index);}}
            />
        </li>
    );
}