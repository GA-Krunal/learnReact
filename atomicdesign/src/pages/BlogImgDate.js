import React from 'react'

export default function BlogImgDate(props) {
    return (
        <div className="meta-date">
                <span>{props.date.dd}</span>
                <strong>{props.date.mm}</strong>
                <span>{props.date.yy}</span>
            </div>
    )
}
