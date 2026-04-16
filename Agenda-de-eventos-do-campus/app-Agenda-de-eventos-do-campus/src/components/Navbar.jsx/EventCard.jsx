import { LucideHeart, LucideMapPin, LucideClock, LucideInfo } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const EventCard = ({ event, onDetail }) => {
  const { favorites, toggleFavorite } = useContext(AppContext);
  const isFav = favorites.find(f => f.id === event.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Conteúdo do Card... */}
    </div>
  );
};