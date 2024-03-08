import './Menu.css';

export default function ItemsList(props) {
    let options = props.data;
    console.log(options);

    // returns formatted cards in the UI with an input in App.js
    return(
        <>
            <div class = "flex-option-container">
                <h1 id="sitename">{props.title}</h1>
                {
                    options.map((option) => {
                        return <><a href={option.url}><div class = "option-container"><span>{option.name}</span></div></a></>
                    })
                }
            </div>
        </>
    )
}