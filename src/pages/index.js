import React from "react"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `tomato` }}>
        <h1>Hello World!</h1>
        <p>What a world!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br />
        <div>
            <Link to="/page-2/">Link</Link>
        </div>
        <div>
            <Link to="/counter/">Counter</Link>
        </div>
    </div>
)
