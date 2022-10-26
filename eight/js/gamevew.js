export const canvas = document.querySelector("#canvas")
const boardColor = "lightgray";
const tileColor = "#C71585";
const dimension = 3;
const tileWidth = canvas.width / dimension;
const tileHeight = canvas.height / dimension;

canvas.style.backgroundColor = boardColor
//создаем графический контекст
const ctx = canvas.getContext('2d')

class Tile
{
	constructor(i, j, n)
	{
		this.row = i;
		this.col = j;
		this.val = n;
	}

	draw()
	{
		if(this.val)
		{
			ctx.fillStyle = tileColor;
			ctx.strokeStyle = boardColor;
			ctx.lineWidth = 5;
			ctx.fillRect(this.col * tileWidth, this.row * tileHeight, tileWidth, tileHeight)
			ctx.strokeRect(this.col * tileWidth, this.row * tileHeight, tileWidth, tileHeight)
			ctx.font = "italic 45pt Arial"
			ctx.fillStyle = "#FFC0CB"
			ctx.textAlign = "center"
			ctx.textBaseline = "middle"
			ctx.fillText(this.val, this.col * tileWidth + tileWidth / 2,
			this.row * tileHeight + tileHeight / 2)
		}

	}
}

export class GameView
{
	constructor(state)
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		this.board = [new Array(dimension), new Array(dimension), new Array(dimension)]
		for(let i = 0; i < dimension; i++)
		{
			for(let j = 0; j < dimension; j++)
			{
				this.board[i][j] = new Tile(i, j, state[i][j])
				this.board[i][j].draw()
			}
		}
	}
}

export function clickToTail(x, y)
{
	const j = Math.floor(x / tileWidth)
	const i = Math.floor(y / tileHeight)
	return [i, j]
}