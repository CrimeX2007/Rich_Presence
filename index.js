var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "DHRUV GOEL",
			assets : {
				large_image : "cxh",
				large_text : "Cheap Custom Bots"
			},
			buttons : [{label : "Discord Server" , url : "https://discord.gg/ATV8pZCXqH"},{label : "YouTube Channel" , url : "https://www.youtube.com/channel/UCZHJssQhjRThAZ6riUS5Mxg"}]
		}
	})
})
client.login({ clientId : "791884082823954432" }).catch(console.error);
