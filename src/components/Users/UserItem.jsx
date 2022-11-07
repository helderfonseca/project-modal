

export const UserItem = props => {
    return (
            <li><span style={{display: 'hidden'}}>{props.id}</span> {`${props.name} ${props.age} years old.`}</li>
    )
};