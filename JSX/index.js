ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
  
// console.log(page)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

const nav = (
    <div>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        
    </div>   
)

ReactDOM.render(
    nav, document.getElementById("root")
)