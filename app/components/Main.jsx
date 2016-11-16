var React = require('react');

var Main = (props) => {
    return (
        <div>
            <div>
                Main component
                <div>{props.children}</div>
            </div>
        </div>
    );
};

module.exports = Main;
