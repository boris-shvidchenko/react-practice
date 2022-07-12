const bodyElem = document.querySelector("body");
const markupPage = (
    <div>
        <img src="../images/React-icon.png" width="50px;" alt="React icon"></img>
        <h1 >Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);
ReactDOM.render(markupPage, bodyElem)