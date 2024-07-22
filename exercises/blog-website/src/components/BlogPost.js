import React from 'react';

const BlogPost = ({ title, subTitle, author, date }) => {
    return (
        <div style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
            <h2>{title}</h2>
            {subTitle && <h3>{subTitle}</h3>}
            <p>Posted by {author} on {date}</p>
        </div>
    );
};

export default BlogPost;
