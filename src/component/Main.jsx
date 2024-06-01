import memesData from "../memesData.js"
import {useState} from "react"

export default function Main(){

	const [meme, setMeme] = useState(
		{
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	function getRandomImage(){
		const memeArray = memesData.data.memes
		let randomValue = Math.floor(Math.random() * memeArray.length)
		console.log(randomValue)
		const imageUrl = memeArray[randomValue].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage:imageUrl
		}))


	}

	return(
		<>
		<div className="main-outer">
			<div className="main-inner">
				<div className="line-container">
					<p>Top text</p>
				<input type="text" placeholder="Top text" />
				</div>
				<div className="line-container">
					<p>Bottom text</p>
				<input type="text" placeholder="Bottom line" />
				</div>
			</div>

		<button onClick={getRandomImage}>Get a new meme image  🖼</button>
		</div>
			{console.log(meme.randomImage)}
			<div className="image-container">
			<img src={meme.randomImage} className="meme-container"/>
			</div>
		</>

	)
}
