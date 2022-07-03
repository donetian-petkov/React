var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX!"
    ),
    React.createElement(
        "h2",
        null,
        "React Subheader"
    )
);

root.render(reactElement);