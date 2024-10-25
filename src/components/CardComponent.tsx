type CardData = {
    number: number;          
    title: string;           
    description: string;     
};

const Card: React.FC<CardData> = ({ number, title, description }) => {
    return (
        <div 
            className="p-6 rounded-lg transition-all duration-300 hover:bg-[#003049] group bg-[#F8FAFC]"
        >
           
            <div className="mb-6 pb-2 border-b-2 border-gray-300"> 
                <span className="text-lg font-semibold text-gray-600 group-hover:text-white">
                    {number}  
                </span>
            </div>

          
            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white">
                {title}
            </h3>

          
            <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-200">
                {description}
            </p>
        </div>
    );
};

export default Card;
