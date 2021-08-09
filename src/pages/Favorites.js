import { useContext } from "react"
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {

    const favoritesCtx = useContext(FavoritesContext) // hookup with external function/components

    let content;

    if (favoritesCtx.totalFavorites ===0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return (
        <div>
            <h1>Favorites Page</h1>
            {content}
        </div>
    )
}

export default FavoritesPage
