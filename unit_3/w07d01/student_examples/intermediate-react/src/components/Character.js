const Character = (props) => {
    return (
        <div>
            <hr/>
            <p>{props.pudding.name}</p>
            <img src={props.pudding.imageUrl}/>
        </div>
    )
}
export default Character