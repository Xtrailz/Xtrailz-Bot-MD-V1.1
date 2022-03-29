const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'Hillal Zian' //Ganti Jadi Namamu
global.owner = ['6289678423699'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6289678423699' //Owner Utama Istilahnya
global.namabot = 'Xtrailz Bot' //Ganti Jadi Nama Botmu
global.packname = '© Xtrailz Bot' //Sticker Weem
global.author = 'By Zian' //Sticker Weem
global.webme = 'https://api-ryubotz.herokuapp.com'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/channel/UCZjPStjZEJV_2H4moucLP_w'
global.github = 'https://github.com/Xtrailz'
global.instagram = 'https://instagram.com/x.trailz'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*Anda bukan admin*',
botAdmin: '*Bot bukan admin*',
owner: '*Anda bukan owner bot ini*',
group: '*Khusus grup*',
private: '*Khusus private chat*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
