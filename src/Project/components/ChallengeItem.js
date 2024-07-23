import { Link } from 'react-router-dom';
import './ChallengeItem.css';

function ChallengeItem({ challenge_id, challenge_img, challenge_name, participant_count }) {
    return (
        <div className="ChallengeItemWrapper"> {/* 추가된 감싸는 div */}
            <Link to={`/challengeDetail/${challenge_id}`} className="ChallengeItem">
                <div className='ChallengeItem-img'>
                    <img src={`http://localhost:5000/${challenge_img}`} alt={challenge_name} />
                </div>
                <div className="challengeItem-name">{challenge_name}</div>
                <div className="challengeItem-participant">{participant_count}명 도전중</div>
            </Link>
        </div>
    );
}

export default ChallengeItem;