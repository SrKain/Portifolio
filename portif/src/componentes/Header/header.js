import './header.css'

const Header = (props) => {

    const onClick = () => {
        
    }

    return(
        <section className='header'>
            <div>
                <a href='#'><img src='./assets/logo.png' alt='Logo Kauan Iasin desenvolvedor front-end'/></a>
            </div>
            <div className='links'>
                {props.pages.map(page => <button onClick={onClick} key={page.page}>
                                            {page.page}
                                        </button>)}
            </div>
        </section>
    )
}

export default Header;