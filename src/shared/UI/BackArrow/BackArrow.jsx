
export const BackArrow = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="icon-container" onClick={goBack}>
                <span className="icon-chevron-left"></span>
        </div>
    )
}
