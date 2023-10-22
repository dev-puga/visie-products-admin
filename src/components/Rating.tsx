type Rating = {
  rating: number;
};

export const Rating = ({ rating }: Rating) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= roundedRating ? "text-yellow-400" : "text-gray-100";
    stars.push(
      <span key={i} className={`text-2xl ${starClass} pr-1`}>
        ★
      </span>
    );
  }

  return <p className="flex">{stars}</p>;
};
