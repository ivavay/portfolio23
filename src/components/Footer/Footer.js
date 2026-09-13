import { useState } from "react"
import "../../styles.css"
import "./Footer.css"

export default function Footer() {
    const email = "ivy0925chen@gmail.com"
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1800)
    }

    return(
        <footer>
            <h2 className="invite">Have an idea you want to bring to life? Let's chat ✷ </h2>
            <div className="socials">
                <ul>
                    <a href="https://www.linkedin.com/in/ivy-chen-4065aab7/" target="_blank" rel="noreferrer" ><li>Linkedin</li></a>
                    <a href="https://x.com/wunderbarruns" target="_blank" rel="noreferrer" ><li>Twitter</li></a>
                </ul>
                <button
                    className="email"
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    title={copied ? "Copied" : "Copy email"}
                >
                    <span>{copied ? "Copied!" : email}</span>
                    <span className="copy-icon" aria-hidden="true" />
                </button>
            </div>
            <div className="copyright">© Ivy Chen 2026 — Built with care </div>
        </footer>
    )
}
