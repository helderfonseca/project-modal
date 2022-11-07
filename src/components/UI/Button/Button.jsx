import './Button.css';

export const Button = props => {
    return (
            <button type={props.type}>{props.children}</button>
        );
};