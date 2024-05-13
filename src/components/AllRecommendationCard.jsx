 

const AllRecommendationCard = ({recom}) => {


    const { recommenderName,recommendedProductName,currentTimeStamp,recommendationReason,recommendedProductImage,recommendationTitle}= recom;
    return (
        <div className="py-12">
             <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={recommendedProductImage} />
                    </div>
                </div>
                <div className="chat-header">
                    {recommenderName}
                    <time className="text-xs opacity-50 ml-12">{currentTimeStamp}</time>
                </div>
                <div className="chat-bubble">{recommendedProductName}</div>
            </div>

            {/* another */}
            <div className="chat chat-start">
                 
                <div className="chat-bubble">{recommendationReason}</div>
                
            </div>
            <div className="chat chat-start">
                 
                <div className="chat-bubble">{recommendationTitle}</div>
               
            </div>
        </div>
    );
};

export default AllRecommendationCard;