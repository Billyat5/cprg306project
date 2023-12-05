const DEFAULT_ACTOR_IMAGE = 'https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png'; 

const ActorListItem = ({ actor }) => {
    const actorImage = actor.ProfilePic ? actor.ProfilePic : DEFAULT_ACTOR_IMAGE;

    return (
        <div className="flex flex-row items-center space-x-4">
            <img 
                src={actorImage} 
                alt={actor.Name} 
                className="w-24 h-24 rounded-full object-cover" 
            />
            <p className="text-lg font-semibold">{actor.Name}</p>
        </div>
    );
};

export default ActorListItem;
