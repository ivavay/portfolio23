import "./Footer.css"
import "../../styles.css"

export default function Footer() {
    return(
        <footer>
            <h2 className="invite">Have an idea you want to bring to life? Let's chat ✷ </h2>
            <div className="socials">
                <ul>
                    <a href="https://www.linkedin.com/in/ivy-chen-4065aab7/" target="_blank"><li>Linkedin</li></a>
                    <a href="https://www.instagram.com/wonderbar.studio/" target="_blank"><li>Instagram</li></a>
                    <a href="https://twitter.com/Ivavay" target="_blank"><li>Twitter</li></a>
                </ul>
                <div className="email">📨 ivy0925chen@gmail.com</div>
            </div>
            <div className="copyright">© Ivy Chen 2023 — Built with care in React.js</div>
        </footer>
    )
}