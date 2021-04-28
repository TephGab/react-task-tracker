import Button from './Button';

const Header = (props) => {
    const handleClick = (e) =>{
        console.log(e);
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
          <Button onClick={handleClick} className="header__btn" text="Add"/>
        </header>
    );
};

export default Header;