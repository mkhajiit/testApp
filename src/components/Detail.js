import { useParams } from "react-router";
import { useEffect,useState } from "react";

function Detail(){
    const {id} = useParams();
    const[movies, setMovies] = useState([]);
    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovies(json.data.movie);
        console.log(movies);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>
            <img src={movies.medium_cover_image}></img>
            <h1>{movies.title}</h1>
        </div>
    );
}
export default Detail;