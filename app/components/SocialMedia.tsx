import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function SocialMedia() {
    return (
        <div className="flex flex-row gap-4 mr-6">
            <a 
              href="https://linkedin.com/in/lucaslimacanto" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30}/>
            </a>
            <a 
              href="https://github.com/eulucaslim" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
            <a 
              href="https://instagram.com/eulucaslim" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={30}/>
            </a>
        </div>
    )
}