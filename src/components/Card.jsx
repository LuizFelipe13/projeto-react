import './card.css'


const Card = ({children, className, onClick}) => {
  return (
    <article className= {`card ${className}`} onClick={onClick}>
            {children}
    </article>
  )
}

Card.propTypes = {}

export default Card