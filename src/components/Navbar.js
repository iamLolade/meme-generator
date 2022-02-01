import logo from "../images/brand.png"

const Navbar = () => {
    return ( 
        <nav className="nav">
            {/* <img 
                src={logo} 
                className="nav--image"
            /> */}
            <h2 className="nav--title">Meme Generator</h2>
            <h4 className="nav--project">React Project</h4>
        </nav>
     );
}
 
export default Navbar;