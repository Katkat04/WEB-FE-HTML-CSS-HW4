function Footer() {
    return (
        <footer className="flex w-full h-auto bg-[#f6a019] bg-cover">
            <div className="flex flex-row gap-8 justify-between w-full p-8 text-white">
                <ul className="flex flex-col cursor-pointer">
                    <li>Our Company</li>
                    <li>About Us</li>
                    <li>History</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex flex-col cursor-pointer">
                    <li>Legal Information</li>
                    <li>Privacy polices</li>
                    <li>Terms and conditions</li>
                    <li>Cookies politice</li>
                </ul>
                <ul className="flex flex-col cursor-pointer">
                    <li>Services</li>
                    <li>Guarantee</li>
                    <li>Call Center</li>
                    <li>Consultancy</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;