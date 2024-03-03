export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/logo-text.png","assets/logo.png","assets/picture.png","favicon.png","manifest.json","particlesjs/css/style.css","particlesjs/js/app.js","particlesjs/js/particles.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".css":"text/css",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.B006hD46.js","app":"_app/immutable/entry/app.VybX6yOP.js","imports":["_app/immutable/entry/start.B006hD46.js","_app/immutable/chunks/entry.CPW7yp65.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/entry/app.VybX6yOP.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Bpd-_tn8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
