import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {gotoPrevPage && <button>Previous</button>}
            {gotoNextPage && <button>Next</button>}
        </div>
    )
}
