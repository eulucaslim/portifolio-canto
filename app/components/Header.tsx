import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

export default function Header(){
    return (
        <header className="flex flex-row justify-between p-4">
            <h3 className="text-center ml-2 text-lg">Lucas Lima</h3>
            <NavBar />
            <SocialMedia />
        </header>
    )
}