import React from 'react'

export default function BlogMeta(props:any) {
    return (
        <div className="blog-meta">
            <p><i className="fa fa-user"></i><a href="">{props.user}</a></p>
            <p><i className="fa fa-folder"></i><a href="">{props.folder}</a></p>
            <p><i className="fa fa-comments"></i><a href="">{props.comment}</a></p>
        </div>
    )
}
