import { useState } from 'react';
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Title from '../components/Title';
import Photo from '../assets/memory.jpg';

const LikePhoto = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const handleLike = () => {
        if(like) {
            setLike(false);
            setCount(count - 1);
        } else {
            setLike(true);
            setCount(count + 1);
        }
    }

  return (
    <div className="container">
      <Title classes={"title-main"} title={"Like my Photo"} />
      <Title classes={"subtitle"} title={`Like: ${count}`} />
      {/*================= Card Starts from ===============*/}
      <div className="card">
          <div className="card-header">
            <AiFillSmile style={{ fontSize: "42px", color: "#fff" }}/>
            <small style={ {fontWeight: "700", fontSize: "22px", marginLeft: "2rem", color: "#fff"} }>Mr Precious</small>
          </div>
          <div className="card-body">
            <img src={Photo} alt="My Picture" onDoubleClick={handleLike}/>
          </div>
          <div className="card-footer">
            <AiOutlineComment style={{ fontSize: "35px" }}/>
            { like ? <AiFillHeart className="like-icon" onClick={handleLike}/> :  <AiOutlineHeart className="default-icon" onClick={handleLike} /> }
            {/* <AiOutlineHeart className="default-icon"/> */}
            {/* <AiFillHeart className="like-icon"/> */}
          </div>
      </div>
      {/*============= Card Ends here =====================*/}
    </div>
  )
}

export default LikePhoto
