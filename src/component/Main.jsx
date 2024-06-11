import memesData from "../memesData.js"
import {useState} from "react"

export default function Main(){

	const [meme, setMeme] = useState(
		{
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	function handler(event){
		const {name, value} = event.target
		setMeme(prevValue => {
			return {
				...prevValue,
				[name]: value
			}

		})
		console.log(value)
	}
	function getRandomImage(){
		const memeArray = memesData.data.memes
		let randomValue = Math.floor(Math.random() * memeArray.length)
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
				<input
				type="text"
				placeholder="Top text"
				name="topText"
				value={meme.topText}
				onChange={handler}
				/>
				</div>
				<div className="line-container">
					<p>Bottom text</p>
				<input
				type="text"
				placeholder="Bottom line"
				name="bottomText"
				value={meme.bottomText}
				onChange={handler}
				/>
				</div>
			</div>

		<button onClick={getRandomImage}>Get a new meme image  🖼</button>
		</div>
			<div className="image-container">
			<img src={meme.randomImage} className="meme-container"/>
			<h2 className="meme--text top">{meme.topText}</h2>
			<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</>

	)
}
