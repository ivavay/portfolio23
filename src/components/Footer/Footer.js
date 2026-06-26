import "../../styles.css"
import "./Footer.css"

export default function Footer() {
    return(
        <footer>
            <h2 className="invite">Have an idea you want to bring to life? Let's chat ✷ </h2>
            <div className="socials">
                <ul>
                    <a href="https://www.linkedin.com/in/ivy-chen-4065aab7/" target="_blank" rel="noreferrer" ><li>Linkedin</li></a>
                    <a href="https://x.com/wunderbarruns" target="_blank" rel="noreferrer" ><li>Twitter</li></a>
                </ul>
                <div className="email">📨 ivy0925chen@gmail.com</div>
            </div>
            <div className="copyright">© Ivy Chen 2026 — Built with care in React.js</div>
        </footer>
    )
}