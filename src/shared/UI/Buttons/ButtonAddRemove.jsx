import "./Buttons.scss";

export const ButtonAddRemove = ({ form }) => {

  console.log(form);

  const renderButtonContent = () => {
    switch(form) {
      case "plus":
        return (
          <span className="icon-plus"></span>
        );
      case "minus":
        return (
          <span className="icon-minus"></span>
        );
      default:
        return (
          <p>?</p>
        );
    }
  }

  return (
    <div className="btn btn-add-remove">{renderButtonContent()}</div>
  )
}
