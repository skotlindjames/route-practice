import React from 'react'

export default function Book({title, author, description}) {
    return (
        <div>
    <h1> {title}</h1>
            <p> {description}</p>
            <p> {author}</p>
        </div>
    )
}
