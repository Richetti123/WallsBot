let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@wall.s_ff 💙❤️ ${pesan}`
let teks = `*😈Vengan a entrenar, Mancos de mierda😈*\n${oi}\n\n*Para adquirir el Bot hablar a: +56938797918*\n`
for (let mem of participants) {
teks += `👮‍♂️👹➢ @${mem.id.split('@')[0]}\n`}
teks += `WallsBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
