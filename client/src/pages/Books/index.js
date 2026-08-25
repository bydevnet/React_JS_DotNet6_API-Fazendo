import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

export default function Books(){

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState([]);
    const userName = localStorage.getItem('userName');
    const accessToken = localStorage.getItem('accessToken');
    
    const authorization = {
        header: {
            Authorization: `Bearer${accessToken}`
        }
    }
    
    const navigate = useNavigate();

    useEffect(() => {
        fetchMoreBooks();
    }, [accessToken]);

    async function fetchMoreBooks() {
        api.get(`'api/Book/v1/asc/20/${page}}'`, authorization).then(response => {
            setBooks([...books, ...response.data.list])
            setPage(page + 1);
        })
    }

    async function logout(){
        try {
            await api.get(`api/auth/v1/revoke`, authorization);
            localStorage.clear();
            navigate('/');
        } catch {
            alert('Logout failed! Try again!')
        }
    }

    async function editBook(id){
        try {
            navigate(`/book/new/${id}`);
        } catch {
            alert('Edit book failed! Try again!')
        }
    }

    async function deleteBook(id){
        try {
            await api.delete(`api/Book/v1/${id}`, authorization);
            setBooks(books.filter(book => book.id !== id))
        } catch {
            alert('Delete failed! Try again!')
        }
    }

    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Eridio"/>
                <spam>Welcome, <strong>{userName.toUpperCase()}</strong>!</spam>
                <Link className="button" to="/book/new/0">Add New Book</Link>           
                <button type="button">
                    <FiPower onClick={logout} size={18} color="#251FC5"></FiPower>
                </button>
            </header>
            <h1>Registered Books</h1>
            <ul>
                {books.map(book =>(
                    <li key={book.id}>
                        <strong>Title:</strong>
                        <p>{book.title}</p>
                        <strong>Author:</strong>
                        <p>{book.author}</p>
                        <strong>Price:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                        <strong>Release Date:</strong>
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

                        <button onClick={() => editBook(book.id)} type="button">
                            <FiEdit size={20} color="#251FC5"/>
                        </button>

                        <button onClick={() => deleteBook(book.id)} type="button">
                            <FiTrash2 size={20} color="#251FC5"/>
                        </button>
                    </li>
                ))}
            </ul>
            <button ></button>
        </div>
    );
}