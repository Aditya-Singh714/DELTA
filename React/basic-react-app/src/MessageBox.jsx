function MessageBox({userName, textColor}) {
    // let textColor = {color: textColor};
    return(
        <div className="messageBox">
            <h1 style={{color: textColor}}> Hello {userName }</h1>
        </div>
    );
}

export default MessageBox;