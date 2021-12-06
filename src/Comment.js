import React from 'react'
import faker from "faker";

 const Comment = ({name,date,star,comment}) => {
    return (
        <div className="ui comments">
            <div className="comment">

                <a href="/" className="avatar">
                    <img alt="" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">{name}</a>
                    <div className="metadata">
                        <div className="date">{date}</div>
                        <div className="rating">
                            <i className="star icon"></i>
                            {star}
                        </div>
                    </div>

                    <div className="text">
                        {comment}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Comment;