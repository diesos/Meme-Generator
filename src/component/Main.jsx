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
		let randomUrl = Math.floor(Math.random() * memeArray.length)
		const imageUrl = memeArray[randomUrl].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage:imageUrl
		}))
		console.log(imageUrl)

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
			`{console.log(meme.randomImage)}`
			<img src={meme.randomImage} className="meme-container"/>
		</>

	)
}
