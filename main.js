//aplication constant
const app=require('electron').app
//windows of os
const BrowserWindow=require('electron').BrowserWindow
//route of the files system of OS
const path=require('path')
//url
const url=require('url')

let PrincipalScreen

function showPrincipalScreen(){
	PrincipalScreen=new BrowserWindow({width:380,height:420})
	//Load principal screen
	PrincipalScreen.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	//show the screen
	PrincipalScreen.show()
}
app.on('ready',showPrincipalScreen)