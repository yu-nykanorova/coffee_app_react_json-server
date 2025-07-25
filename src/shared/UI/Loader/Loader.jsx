import "./Loader.scss";

export const Loader = ({ children }) => {
  return (
    <div className="loader">
        <span className="loader-item"></span> 
        <p>{ children }</p> 
    </div>
  )
}