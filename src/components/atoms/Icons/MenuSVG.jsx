import React from 'react'

export default function MenuSVG() {
    function clicked(){
        alert("Clicou")
    }
    return (
        <svg onClick={clicked} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="24" height="24" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_10_14" transform="scale(0.01)" />
                </pattern>
                <image id="image0_10_14" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVR4nO3asREAMAwCMe+/dFJ7AriztMIXNMwAAAAAAAAAhz2qCFJGkDKClElPGAAAAAAAAAAAAHBK+jrJJkgZQcoIUiY9YQAAAAAAAAAAAMAp6eskmyBlBCkjSJn0hAEAAAAAAAAT9AFVua5PjXrJHwAAAABJRU5ErkJggg==" />
            </defs>
        </svg>
    )
}
