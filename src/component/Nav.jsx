import Logo from "/public/logo.svg"
export default function Nav(){
	return (
		<nav>
			<div className="logo">
			<img src={Logo} alt="logo" />
			<h3>Meme Generator</h3>
			</div>

		</nav>
	)
}
