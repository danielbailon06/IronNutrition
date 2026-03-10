import githublogo from "../assets/githublogo.png";

function Footer(){
    return(
        <footer>
            <img src={githublogo} alt="Git Hub Logo"></img>
            <a href="https://github.com/danielbailon06/IronNutrition" target="blank">GitHub Repository</a>
        </footer>
    )
}

export default Footer;