window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['boot.worldwide.1.mouse.js'] = (new Date()).getTime();;
_a.d.G = function(n, t) {
	this.b = n;
	this.a = t
};
_a.d.G.prototype = {
	b: 0,
	a: 0
};
_a.fo = function(n) {
	this.s = n
};
_a.fo.prototype = {
	s: null,
	t: null,
	i: function() {
		return this.s.currentTarget
	},
	e: function() {
		return this.t ? this.t.x : this.s.pageX
	},
	f: function() {
		return this.t ? this.t.y : this.s.pageY
	},
	o: function() {
		return this.s.relatedTarget
	},
	b: function() {
		return this.s.target
	},
	n: function() {
		return this.s.timeStamp || +new Date
	},
	a: function() {
		var n = this.s.which;
		!n && _a.n.a().J && this.s.type === "keypress" && (n = this.u());
		return n
	},
	u: function() {
		return this.s.keyCode
	},
	m: function() {
		return this.s.originalEvent
	},
	j: function() {
		return this.s.type
	},
	k: function() {
		return this.s.originalEvent.touches
	},
	q: function() {
		return this.s.isDefaultPrevented()
	},
	g: function() {
		return this.s.shiftKey
	},
	h: function() {
		return _j.G.a().P ? this.s.metaKey : this.s.ctrlKey
	},
	l: function() {
		return this.s.altKey
	},
	r: function() {
		return this.s.metaKey
	},
	p: function() {
		return this.g() || this.h() || this.l() || this.r()
	},
	c: function() {
		this.s.preventDefault()
	},
	d: function() {
		this.s.stopPropagation()
	}
};
_a.I = function(n) {
	n || (n = {});
	this.a = n
};
_a.I.prototype = {
	a: null,
	g: function() {
		return this.e("cmd", "contents", !1)
	},
	l: function() {
		return this.c("part", !0)
	},
	h: function() {
		return this.e("module", "calendar", !1)
	},
	m: function() {
		return this.e("module", "discovery", !1)
	},
	f: function() {
		return this.c("ispopout", !0)
	},
	j: function() {
		return this.c("sharepointapp", !0)
	},
	d: function() {
		return this.c("leanMode", !0)
	},
	p: function() {
		return this.c("superTag", !0)
	},
	k: function() {
		return this.c("animation", !1)
	},
	o: function() {
		return this.c("prefetch", !1)
	},
	n: function() {
		return this.c("folderPrefetch", !1)
	},
	i: function(n, t) {
		this.a[n] = t;
		return t
	},
	b: function(n) {
		return n in this.a
	},
	e: function(n, t, i) {
		var r = this.a[n];
		return r === t ? !0 : !i && !!r && r.toLowerCase() === t
	},
	c: function(n, t) {
		return t ? this.e(n, "1", !1) || this.e(n, "true", !1) : this.e(n, "0", !1) || this.e(n, "false", !1)
	}
};
_a.n = function() {
	_a.n.initializeBase(this);
	this.L = new _j.N(this.K);
	this.bj = document.cookie.indexOf("PALEnabled") !== -1 || window.location.search.toLowerCase().indexOf("palenabled=1") !== -1 || window.location.pathname.toLowerCase().indexOf("outofboxexperience") !== -1 ? !0 : !1;
	this.U = this.K.indexOf("rv:") !== -1 && this.K.indexOf("Trident") !== -1;
	this.I && (this.bn = !0);
	this.bB = "ontouchstart" in window.document || navigator.msMaxTouchPoints > 0;
	this.I && (this.br = this.K.indexOf("IEMobile") !== -1 || this.K.indexOf("ZuneWP7") !== -1 || this.K.indexOf("WPDesktop") !== -1);
	this.ba = this.bD() || this.U;
	this.T = this.bC() || this.U;
	this.bh = this.I && !this.T ? !1 : !!navigator.geolocation;
	var n = this.K.indexOf("Firefox");
	var t = n > 0 ? Number.parseInvariant(this.K.substr(n + 8).split(".", 1)[0]) : 0;
	var r = this.J && t < 4;
	this.X = this.J && t >= 23;
	var i = n > 0 ? this.K.substr(n + 8) : "0";
	this.bf = parseFloat(i);
	this.bl = this.bo(" Chrome/");
	this.bm = this.bo(" Edge/");
	this.bt = this.Q && this.bo(" Version/") >= 9;
	this.V = this.br && this.T;
	r || this.V || (this.Z() ? this.R = !0 : this.be = !0);
	this.bp = _a.n.d() && !this.V;
	this.bg = this.bE();
	this.bv = _a.n.e();
	this.Y = window.navigator.appVersion.indexOf("NT 6.2") !== -1;
	this.bu = window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1;
	this.bi = _a.n.g();
	this.bb = this.bG();
	this.bs = this.bF();
	this.bA = this.K.indexOf("QtCarBrowser") > -1
};
_a.n.a = function() {
	_a.n.b || (_a.n.b = new _a.n);
	return _a.n.b
};
_a.n.d = function() {
	var n = window.document.createElement("input");
	n.type = "file";
	return n.type === "file" && !n.disabled
};
_a.n.e = function() {
	var n = !1;
	var i = {};
	try {
		if(Object.defineProperty) {
			var t = {
				get: _a.n.f,
				configurable: !1
			};
			Object.defineProperty(i, "testProperty", t);
			n = !0
		}
	} catch(r) {}
	return n
};
_a.n.f = function() {
	return null
};
_a.n.g = function() {
	return _a.n.c(window.navigator.appVersion, "NT ", 6.2)
};
_a.n.c = function(n, t, i) {
	try {
		var r = n.indexOf(t);
		if(r !== -1) return _a.n.h(n.substr(r + t.length)) >= i
	} catch(u) {}
	return !1
};
_a.n.h = function(n) {
	var t = n.split(";");
	if(t.length > 0) return parseFloat(t[0]);
	throw Error.argument("input", "The version string was not semi-colon terminated.");
};
_a.n.prototype = {
	bj: !1,
	bB: !1,
	bg: !1,
	bh: !1,
	R: !1,
	be: !1,
	bv: !1,
	Y: !1,
	bu: !1,
	V: !1,
	bi: !1,
	bA: !1,
	bn: !1,
	bp: !1,
	ba: !1,
	T: !1,
	U: !1,
	bt: !1,
	X: !1,
	bf: 0,
	bl: 0,
	bm: 0,
	br: !1,
	bb: null,
	bs: !1,
	L: null,
	d: function() {
		return this.L
	},
	c: function() {
		return !_a.g.j && this.bj
	},
	A: function() {
		return !!window.applicationCache
	},
	u: function() {
		return(this.bz() || !!this.bq()) && (this.S || this.I || this.O || this.Q || this.c() || this.J && this.X)
	},
	x: function() {
		return this.I && !!this.bq()
	},
	bz: function() {
		return _a.Z.c("openDatabase")
	},
	bq: function() {
		var n = null;
		try {
			n = window.self.indexedDB || window.self.msIndexedDB
		} catch(t) {
			_j.e.b(_a.a.T, "Exception while accessing indexedDB property: {0}", t.message)
		}
		return n
	},
	Z: function() {
		return typeof FileReader != "undefined"
	},
	B: function() {
		return this.bp && (this.R || this.be)
	},
	r: function() {
		return this.R
	},
	t: function() {
		return this.be
	},
	H: function() {
		return this.bv
	},
	m: function() {
		return this.T
	},
	D: function() {
		return this.X
	},
	C: function() {
		return this.bf
	},
	p: function() {
		return this.Y
	},
	G: function() {
		return this.bu
	},
	w: function() {
		return this.bi
	},
	F: function() {
		return this.bs
	},
	y: function() {
		return this.bn
	},
	E: function() {
		return this.ba && !this.T
	},
	bE: function() {
		var n = !1;
		if(this.M) return !1;
		var t = window.document.createElement("audio");
		try {
			t.canPlayType && (n = !_j.h.a(t.canPlayType("audio/mpeg")))
		} catch(i) {
			n = !1
		}
		return n
	},
	bD: function() {
		return _a.n.c(this.K, "MSIE ", 9)
	},
	bC: function() {
		return _a.n.c(this.K, "MSIE ", 10)
	},
	bF: function() {
		return this.a() && _a.n.c(this.K, "OS", 8)
	},
	bG: function() {
		var r = "OWASMIME/";
		var n = this.K.indexOf(r);
		if(n === -1) return null;
		else {
			n += r.length;
			for(var t = n; t < this.K.length; t++) {
				var i = this.K.charAt(t);
				if((i > "9" || i < "0") && i !== ".") break
			}
			return this.K.substr(n, t - n)
		}
	},
	bo: function(n) {
		var t = this.K.indexOf(n);
		return t >= 0 ? Number.parseInvariant(this.K.substr(t + n.length).split(".", 1)[0]) : -1
	}
};
_a.cN = function() {};
_a.cN.b = function(n, t) {
	var c = _j.F.m(Object.getType(n), _a.bw);
	if(c) {
		var r = null;
		var u = -1;
		var v = !1;
		var a = !1;
		var o = "%";
		var f = "%";
		switch(t) {
			case "TouchNarrow":
				o = "TouchNarrowView";
				f = ".Narrow";
				break;
			case "TouchWide":
				o = "TouchWideView";
				f = ".Wide";
				break;
			case "Mouse":
				o = "MouseView";
				f = ".Mouse";
				break
		}
		for(var l = c.length - 1; l >= 0; l--) {
			var i = c[l];
			var e = !1;
			if(i.d.endsWith(o)) {
				var y = _a.cN.a(r, i, u, 2);
				if(y) {
					r = y;
					u = 2
				} else e = !0
			} else if(i.d.endsWith(f)) {
				var h = _a.cN.a(r, i, u, 1);
				if(h) {
					if(h !== r) {
						r = h;
						u = 1
					}
				} else e = !0
			} else if(i.d.indexOf(".") < 0 && !i.d.endsWith("TouchNarrowView") && !i.d.endsWith("TouchWideView") && !i.d.endsWith("MouseView")) {
				var s = _a.cN.a(r, i, u, 0);
				if(s) {
					if(s !== r) {
						r = s;
						u = 0
					}
				} else e = !0
			}
			e && (i.e ? a = !0 : v = !0)
		}
		if(a || !r.e && v) throw Error.invalidOperation("Multiple templates found for ViewModel " + Object.getType(n).getName() + '. Use PrimaryTemplate="true" attribute in your primary template that you want to be picked up.');
		return r
	}
	return null
};
_a.cN.c = function(n, t) {
	var i = _a.cN.b(n, t);
	return i ? i.d : null
};
_a.cN.a = function(n, t, i, r) {
	if(!t) return n;
	if(!n) return t;
	if(n.f !== t.f) {
		if(_j.F.c(n.f)) return n;
		else if(_j.F.c(t.f)) return t
	} else if(t.e === n.e) {
		if(i > r) return n;
		else if(r > i) return t;
		else if(_a.cN.d(n, t)) return n;
		return null
	} else if(n.e) return n;
	else if(t.e) return t;
	return null
};
_a.cN.d = function(n, t) {
	return n.h > 0 && t.h > 0 && n.h === t.h && n.d === t.d ? !0 : !1
};
_a.bw = function() {
	_a.bw.initializeBase(this)
};
_a.bw.prototype = {
	jh: null,
	k: function() {
		this.jh || (this.jh = (++_a.bw.a).toString());
		return this.jh
	},
	nz: function() {
		return Object.getType(this).getName()
	}
};
_a.dl = function() {
	this.b = {}
};
_a.dl.a = function(n) {
	return n.value ? n.value : null
};
_a.dl.prototype = {
	a: function(n) {
		return n.nz() in this.b
	},
	d: function(n) {
		delete this.b[n.nz()]
	},
	c: function(n, t) {
		var u = new _j.q;
		var f = this.b;
		for(var i in f) {
			var r = {
				key: i,
				value: f[i]
			};
			n(r) && u.c(t(r))
		}
		return u
	}
};
_a.fP = function(n, t, i, r, u, f, e) {
	this.a = n;
	this.b = t;
	this.f = i;
	this.e = r;
	this.g = u;
	this.h = f;
	this.i = e
};
_a.fP.prototype = {
	a: 0,
	b: 0,
	f: 0,
	e: 0,
	g: 0,
	h: 0,
	i: 0,
	c: function() {
		return !isNaN(this.a) && !isNaN(this.b)
	},
	d: function(n) {
		return n ? this.c() && n.c() ? this.a === n.a && this.b === n.b : !this.c() && !n.c() ? !0 : !1 : !1
	}
};
_a.bE = function(n, t, i, r, u, f, e, o) {
	if(_j.C.a(n) && _j.C.a(t)) {
		this.a = new _a.fP(Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN);
		this.b = null
	} else {
		this.a = new _a.fP(n, t, i, r, u, f, e);
		this.b = o
	}
};
_a.bE.d = function(n) {
	_a.c.a(n, "pos");
	return new _a.bE(n.coords.latitude, n.coords.longitude, n.coords.altitude, n.coords.accuracy, n.coords.altitudeAccuracy, n.coords.heading, n.coords.speed, _a.d.y(n.timestamp))
};
_a.bE.b = function(n) {
	_a.c.a(n, "pos");
	return new _a.bE(n.latitude, n.longitude, n.altitude, 0, Number.NaN, Number.NaN, Number.NaN, null)
};
_a.bE.c = function(n, t) {
	_a.c.a(n, "latitude");
	_a.c.a(t, "longitude");
	return new _a.bE(n, t, Number.NaN, 0, Number.NaN, Number.NaN, Number.NaN, null)
};
_a.bE.a = function(n) {
	_a.c.a(n, "pos");
	return new Microsoft.Maps.Location(n.a.a, n.a.b)
};
_a.bE.prototype = {
	a: null,
	b: null
};
_a.kX = function() {};
_a.kX.registerInterface("_a.kX");
_a.cg = function(n) {
	_a.cg.initializeBase(this);
	_a.c.a(n, "uri");
	this.d({});
	this.h(n)
};
_a.cg.prototype = {
	g: function(n) {
		this.eI(_a.cg.c, n);
		return n
	},
	f: function() {
		return this.eK(_a.cg.a).a
	},
	d: function(n) {
		this.eI(_a.cg.a, new _a.ca(n));
		return n
	},
	c: function() {
		return this.eK(_a.cg.b)
	},
	h: function(n) {
		this.eI(_a.cg.b, n);
		return n
	},
	b: function(n) {
		this.eI(_a.cg.d, n);
		return n
	}
};
_a.bU = function(n) {
	_a.bU.initializeBase(this, [n])
};
_a.bU.prototype = {
	i: function(n) {
		this.eI(_a.bU.b, n);
		return n
	},
	j: function(n) {
		this.eI(_a.bU.c, n);
		return n
	},
	e: function() {
		return this.eK(_a.bU.a)
	},
	a: function(n) {
		this.eI(_a.bU.a, n);
		return n
	}
};
_a.bz = function() {
	_a.bz.initializeBase(this);
	this.g({})
};
_a.bz.prototype = {
	e: function() {
		return this.eK(_a.bz.c)
	},
	d: function() {
		return this.eK(_a.bz.a)
	},
	f: function(n) {
		this.eI(_a.bz.a, n);
		return n
	},
	b: function() {
		return this.eK(_a.bz.b)
	},
	g: function(n) {
		this.eI(_a.bz.b, n);
		return n
	},
	a: function() {
		return this.eK(_a.bz.d)
	},
	c: function() {
		return this.eK(_a.bz.e)
	}
};
_a.cx = function(n) {
	_a.cx.initializeBase(this, [n]);
	this.i({});
	this.j({})
};
_a.cx.prototype = {
	a: function() {
		return this.eK(_a.cx.a).a
	},
	i: function(n) {
		this.eI(_a.cx.a, new _a.ca(n));
		return n
	},
	e: function() {
		return this.eK(_a.cx.b).a
	},
	j: function(n) {
		this.eI(_a.cx.b, new _a.ca(n));
		return n
	}
};
_a.fb = function(n, t, i, r, u, f, e) {
	_a.c.c(n, "actionName");
	_a.c.c(t, "serviceUriDir");
	_a.c.c(u, "requestMethod");
	_a.c.a(e, "taskRunner");
	this.c = n;
	this.j = t;
	this.h = i;
	this.k = r;
	this.i = u;
	this.g = f;
	this.f = new XMLHttpRequest;
	this.b = !1;
	this.d = e
};
_a.fb.prototype = {
	c: null,
	j: null,
	h: !1,
	k: 0,
	i: null,
	g: !1,
	d: null,
	f: null,
	b: !1,
	e: null,
	a: function() {
		return this.f
	},
	l: function(n) {
		this.f = n;
		return n
	},
	m: function(n, t) {
		_a.c.a(n, "successCallback");
		_a.c.a(t, "failureCallback");
		if(this.a().onreadystatechange) throw Error.invalidOperation("SyncInlineAttachmentRequestManager is already executing sync request");
		this.a().open(this.i, _a.fb.a + this.j, this.g);
		_a.p.M(this.a());
		this.h && (this.a().responseType = "blob");
		this.o(n, t);
		this.e = this.n(this.k, t);
		try {
			this.a().send(null)
		} catch(i) {
			t(503, i)
		}
	},
	o: function(n, t) {
		var i = this;
		this.a().onreadystatechange = function() {
			if(!i.b && i.a().readyState === 4) {
				i.b = !0;
				i.e = i.d.b(i.e);
				i.a().onreadystatechange = null;
				var u = 0;
				var e = "unkown";
				var o = !1;
				var r = "";
				try {
					u = i.a().status;
					e = i.a().statusText;
					r = i.a().getResponseHeader("Content-Disposition");
					o = !!r && r.toLowerCase().startsWith("inline;".toLowerCase())
				} catch(c) {}
				if(u === 200)
					if(o) n(i.a().response);
					else {
						var f = 503;
						var h = String.format("Overriding the actual response status ('{0} {1}' due to invalid content-disposition ({2}) for {3}", f, f, r, i.c);
						t(f, Error.create(h))
					} else {
					var s = String.format("{0} failed with StatusCode: {1} - StatusText: {2}", i.c, u, e);
					t(u, Error.create(s))
				}
				i.l(null)
			}
		}
	},
	n: function(n, t) {
		var i = this;
		return this.d.a(_a.a.cn, "ScheduleTimeoutCallback", function() {
			if(!i.b) {
				i.b = !0;
				i.a().onreadystatechange = null;
				i.a().abort();
				var n = 408;
				var r = String.format("{0} failed with StatusCode: {1} - StatusText: TimeOut", i.c, n);
				t(n, Error.create(r));
				i.l(null)
			}
		}, n)
	}
};
_a.P = function(n) {
	_a.c.c(n, "uri");
	if(!_a.P.b(n)) throw Error.format("Input string is not a valid URI: " + n);
	var t = _a.P.c.exec(n);
	this.b = n;
	this.c = t[1];
	this.e = t[2];
	this.d = t[3];
	this.f = t[4];
	this.g = t[5];
	if(!_j.h.a(this.e)) {
		var i = _a.P.d.exec(this.e);
		this.i = i[1];
		this.a = i[2];
		this.h = i[3]
	}
};
_a.P.b = function(n) {
	if(!_a.P.c.test(n)) return !1;
	var i = _a.P.c.exec(n);
	var t = i[2];
	return _j.h.a(t) || _a.P.d.test(t)
};
_a.P.condense = function(n) {
	return n ? n.b : null
};
_a.P.create = function(n) {
	return _a.P.parse(n)
};
_a.P.parse = function(n) {
	return _j.h.a(n) ? null : new _a.P(n)
};
_a.P.a = function(n) {
	var t;
	var r = document.createElement("a");
	r.href = n;
	t = r.href;
	if(t === n) {
		var i = document.createElement("img");
		i.src = n;
		t = i.src
	}
	return t
};
_a.P.prototype = {
	b: null,
	c: null,
	e: null,
	d: null,
	f: null,
	g: null,
	i: null,
	a: null,
	h: null,
	toString: function() {
		return this.b
	}
};
_a.fg = function() {
	_j.k.J = _a.bd.i;
	Error.stackTraceLimit = 30
};
_a.dD = function() {};
_a.dD.prototype = {
	unknownError: 0,
	constraintError: 1,
	notFoundError: 2,
	quotaError: 3,
	timeoutError: 4,
	aborted: 5
};
_a.dD.registerEnum("_a.dD", !1);
_a.lg = function() {};
_a.lg.registerInterface("_a.lg");
_a.ge = function() {};
_a.ge.registerInterface("_a.ge");
_a.lh = function() {};
_a.li = function() {};
_a.li.registerInterface("_a.li");
_a.lk = function() {};
_a.lk.registerInterface("_a.lk");
_a.ln = function() {};
_a.lo = function() {};
_a.lp = function() {};
_a.lp.registerInterface("_a.lp");
_a.lm = function() {};
_a.lm.registerInterface("_a.lm");
_a.ll = function() {};
_a.ll.registerInterface("_a.ll");
_a.ls = function() {};
_a.ls.registerInterface("_a.ls");
_a.lt = function() {};
_a.lt.registerInterface("_a.lt");
_a.lr = function() {};
_a.lr.registerInterface("_a.lr");
_a.lq = function() {};
_a.dE = function() {};
_a.dE.registerInterface("_a.dE");
_a.lj = function() {};
_a.lj.registerInterface("_a.lj");
_a.jp = function() {};
_a.jp.registerInterface("_a.jp");
_a.bQ = function(n, t) {
	this.b = n;
	this.a = _a.bQ.b(n, t)
};
_a.bQ.a = function(n, t) {
	var i = new _a.bQ(n, t);
	throw Error.create(i.a);
};
_a.bQ.b = function(n, t) {
	var i = "BrowserDbError: ";
	switch(n) {
		case 1:
			i += "ConstraintError. ";
			break;
		case 2:
			i += "NotFoundError. ";
			break;
		case 3:
			i += "QuotaError. ";
			break;
		case 4:
			i += "TimeoutError. ";
			break;
		default:
			i += "UnknownError. ";
			break
	}
	return i + t
};
_a.bQ.prototype = {
	a: null,
	b: 0
};
_a.Q = function(n, t) {
	this.a = n;
	this.b = t
};
_a.Q.prototype = {
	a: null,
	b: 0
};
_a.T = function(n) {
	_a.c.c(n, "path");
	this.a = n
};
_a.T.prototype = {
	a: null,
	b: function(n) {
		for(var r = this.a.split("."), t = n, i = 0; i < r.length && t; ++i) t = t[r[i]];
		return t
	},
	c: function(n, t) {
		for(var f = this.a.split("."), u = n, i = 0; i < f.length - 1; ++i) {
			var e = f[i];
			var r = u[e];
			if(!r) {
				r = {};
				u[e] = r
			}
			u = r
		}
		u[f[i]] = t
	},
	d: function(n) {
		for(var i = this.a.split("."), t = n, r = 0; r < i.length - 1 && t; ++r) t = t[i[r]];
		t && delete t[i[i.length - 1]]
	}
};
_a.gf = function() {};
_a.gf.b = function(n) {
	var t = "";
	if(!_j.u.a(n)) switch(n) {
		case 0:
			t = "TEXT";
			break;
		case 1:
			t = "INTEGER";
			break
	}
	return t
};
_a.gf.a = function(n) {
	var t = null;
	switch(n) {
		case 0:
			t = "";
			break;
		case 1:
			t = 0;
			break;
		default:
			break
	}
	return t
};
_a.di = function(n) {
	if(n) {
		var t = Object.getType(n);
		if(t !== String && t !== Number && t !== Number && t !== Date) throw Error.argumentType("keyValue", t, null, "keyValue must be a javascript primitive (string, int, float, Datetime (or null))");
	}
	this.a = n
};
_a.di.prototype = {
	a: null,
	toString: function() {
		return this.a ? "" + this.a : null
	}
};
_a.bk = function(n, t) {
	if(t && t.length > 2) throw Error.invalidOperation("SortBy can have at most 2 sort fields.");
	this.b = n;
	this.a = t
};
_a.bk.prototype = {
	b: null,
	a: null
};
_a.lv = function(n) {
	this.a = n || []
};
_a.lv.prototype = {
	a: null,
	f: function(n, t) {
		var i = this.a[0].a === _a.T.a.a ? n : this.a[0].b(t);
		return this.e(i)
	},
	g: function(n) {
		var t = n[this.a[0].a];
		return this.e(t)
	}
};
_a.es = function(n, t) {
	this.b = n;
	this.a = t
};
_a.es.prototype = {
	b: null,
	a: null
};
_a.cd = function(n, t) {
	_a.c.a(n, "sortField");
	this.a = n;
	this.b = t
};
_a.cd.prototype = {
	a: null,
	b: 0
};
_a.gg = function(n, t) {
	_a.gg.initializeBase(this);
	this.code = n;
	this.message = t
};
_a.lu = function() {};
_a.lu.prototype = {
	insertId: 0,
	rowsAffected: 0,
	columnNames: null,
	rows: null
};
_a.lB = function() {};
_a.lB.prototype = {
	code: 0,
	message: null
};
_a.lw = function() {};
_a.cI = function() {};
_a.cI.prototype = {
	full: 1,
	timeBased: 2,
	notificationBased: 3,
	cleanup: 4,
	refresh: 5,
	quick: 6,
	reconcile: 7,
	backgroundSync: 8
};
_a.cI.registerEnum("_a.cI", !1);
_a.cY = function() {};
_a.cY.prototype = {
	byDefault: 0,
	owaStart: 1,
	syncEnabled: 2,
	onResumePendingGetEvent: 3,
	onPendingGetRequestAliveChangedEvent: 4,
	reloadNotification: 5,
	palSyncNotification: 6,
	notificationQueueManager: 7,
	mobileDevicePolicyComplianceChangedEvent: 8,
	userConfigImportantChange: 9,
	owaResume: 10,
	reachMaxSyncLimitPostALT1: 11,
	invalidSyncState: 12,
	backgroundSyncNotification: 13,
	hierarchyNotification: 14,
	invalidSyncSortOrder: 15,
	test: 100
};
_a.cY.registerEnum("_a.cY", !1);
_a.lx = function() {};
_a.lx.registerInterface("_a.lx");
_a.gh = function() {};
_a.gh.registerInterface("_a.gh");
_a.ly = function() {};
_a.ly.registerInterface("_a.ly");
_a.lz = function() {};
_a.lz.registerInterface("_a.lz");
_a.et = function() {};
_a.et.registerInterface("_a.et");
_a.gi = function() {};
_a.gi.prototype = {
	batchCompleted: 0,
	syncCompleted: 1,
	syncAborted: 2
};
_a.gi.registerEnum("_a.gi", !1);
_a.by = function() {};
_a.by.prototype = {
	none: -1,
	owaUserConfiguration: 0,
	timeZoneOffsets: 1,
	folderHierarchy: 2,
	reminders: 3,
	conversationMinimum: 4,
	messageMinimum: 5,
	favoriteFolders: 6,
	peopleFilters: 7,
	people: 8,
	calendarFolders: 9,
	calendar: 10,
	conversationFull: 11,
	messageFull: 12,
	otherMailboxConfiguration: 13,
	attachment: 14,
	lastPrimaryModule: 14,
	conversationItemsMinimum: 15,
	conversationItemsFull: 16,
	messageItemsMinimum: 17,
	messageItemsFull: 18,
	conversationItemsReadFlag: 19,
	syncCompleted: 20
};
_a.by.registerEnum("_a.by", !1);
_a.cs = function() {};
_a.cs.prototype = {
	moduleEnqueued: 0,
	moduleSyncStarted: 1,
	moduleProgress: 2,
	moduleCompleted: 3,
	moduleSyncCanceled: 4,
	syncCompleted: 5,
	syncAborted: 6
};
_a.cs.registerEnum("_a.cs", !1);

function CalendarSyncState(n, t, i, r, u, f, e) {
	CalendarSyncState.initializeBase(this, ["CalendarSyncState", n]);
	_a.c.b(t, "folderId");
	_a.c.b(i, "windowStart");
	_a.c.b(r, "windowEnd");
	_a.c.c(u, "timeZone");
	this.FolderId = t;
	this.WindowStart = i.i();
	this.WindowEnd = r.i();
	this.TimeZone = u;
	this.ApproximateWindowSize = f;
	this.TryToIncrementWindowSizeOnNextSync = e
}
CalendarSyncState.prototype = {
	FolderId: null,
	WindowStart: null,
	WindowEnd: null,
	TimeZone: null,
	ApproximateWindowSize: 0,
	TryToIncrementWindowSizeOnNextSync: !1
};

function MultiFolderSyncState(n) {
	MultiFolderSyncState.initializeBase(this, [n, MultiFolderSyncState.a]);
	_a.c.c(n, "parentSyncStateId");
	this.PerFolderSyncStateContainer = {}
}
MultiFolderSyncState.prototype = {
	PerFolderSyncStateContainer: null
};

function SyncFolderListItem(n, t) {
	this.FolderId = n;
	this.LastAccessTime = t
}
SyncFolderListItem.prototype = {
	FolderId: null,
	LastAccessTime: null
};
_a.dV = function(n, t, i, r, u, f, e, o, s, h) {
	this.a = n;
	this.c = t;
	this.i = i;
	this.e = r;
	this.h = t.toString();
	this.f = u;
	this.k = f;
	this.b = e;
	this.j = o;
	this.d = null;
	this.g = h;
	s && (this.d = s)
};
_a.dV.a = function(n, t, i, r, u, f, e, o, s, h) {
	return new _a.dV(n, t, i, r, u, f, e, o, s, h)
};
_a.dV.b = function(n, t) {
	return new _a.dV(n, 20, 0, null, null, !1, null, null, t, null)
};
_a.dV.prototype = {
	k: !1,
	a: 0,
	d: null,
	c: 0,
	h: null,
	i: 0,
	f: null,
	e: null,
	b: null,
	j: null,
	g: null
};

function SyncState(n, t) {
	_a.c.c(n, "syncStateId");
	this.Id = n;
	this.IsSynced = !1;
	this.LastAttemptedSyncTime = _a.d.d(_a.d.a());
	this.State = t;
	this.Diagnostics = new OfflineDiagnostics;
	this.SortKeyVersionAtLastSync = SyncState.a
}
SyncState.prototype = {
	Id: null,
	IsSynced: !1,
	LastAttemptedSyncTime: null,
	LastSuccessfulSyncTime: null,
	UserCultureAtLastSync: null,
	SortKeyVersionAtLastSync: null,
	Diagnostics: null,
	State: null,
	ModuleSpecificContext: null
};
_a.cq = function() {};
_a.gm = function() {
	_a.gm.initializeBase(this)
};
_a.gm.prototype = {
	AllowedSenderDomains: null
};
_a.gn = function() {
	_a.gn.initializeBase(this)
};
_a.gn.prototype = {
	LocalyticsAppKey: null
};
_a.go = function() {
	_a.go.initializeBase(this)
};
_a.go.prototype = {
	UserVoiceForumUrl: null
};
_a.gp = function() {
	_a.gp.initializeBase(this)
};
_a.gq = function() {
	_a.gq.initializeBase(this)
};
_a.gq.prototype = {
	ConnectUrl: null
};
_a.gr = function() {
	_a.gr.initializeBase(this)
};
_a.gs = function() {
	_a.gs.initializeBase(this)
};
_a.gt = function() {
	_a.gt.initializeBase(this)
};
_a.gt.prototype = {
	AriaTenant: null
};
_a.gu = function() {
	_a.gu.initializeBase(this)
};
_a.gu.prototype = {
	DemoPageUrl: null
};
_a.gv = function() {
	_a.gv.initializeBase(this)
};
_a.gv.prototype = {
	MerchantManagementURL: null
};
_a.gw = function() {
	_a.gw.initializeBase(this)
};
_a.gw.prototype = {
	DefaultMaxNumberOfTrustedEntries: 0,
	DefaultMaxNumberOfBlockedEntries: 0
};
_a.i = function() {
	_a.i.initializeBase(this)
};
_a.i.prototype = {
	Enabled: !1
};
_a.gx = function() {
	_a.gx.initializeBase(this)
};
_a.gy = function() {
	_a.gy.initializeBase(this)
};
_a.gy.prototype = {
	IssuesServiceEndpoint: null,
	SuggestFaqsServiceEndpoint: null,
	GeFaqByIdServiceEndpoint: null,
	WriteOnlyAPIKey: null,
	ReadOnlyAPIKey: null
};
_a.gz = function() {
	_a.gz.initializeBase(this)
};
_a.gz.prototype = {
	MinimumConfidenceScore: 0
};
_a.gA = function() {
	_a.gA.initializeBase(this)
};
_a.gA.prototype = {
	AllowedManifestUrls: null
};
_a.jy = function() {
	_a.jy.initializeBase(this)
};
_a.jy.prototype = {
	IsNonMicrosoftUser: !1
};
_a.gB = function() {
	_a.gB.initializeBase(this)
};
_a.gB.prototype = {
	SkypeScriptsUrl: null,
	SkypeConsumerApiKey: null,
	SkypeEnterpriseApiKey: null,
	ShowDogfoodExperience: !1
};
_a.gC = function() {
	_a.gC.initializeBase(this)
};
_a.gC.prototype = {
	MaxAllowedConnectedAccounts: 0
};
_a.gD = function() {
	_a.gD.initializeBase(this)
};
_a.gD.prototype = {
	OptionsEndpoint: null
};
_a.gE = function() {
	_a.gE.initializeBase(this)
};
_a.gE.prototype = {
	MCBingInlineImagePickerEndpoint: null,
	MCBingInlineImagePickerBaseEndpoint: null
};
_a.gF = function() {
	_a.gF.initializeBase(this)
};
_a.gF.prototype = {
	GetConceptsEndpoint: null
};
_a.gG = function() {
	_a.gG.initializeBase(this)
};
_a.gG.prototype = {
	CrossOrigin: null
};
_a.gH = function() {
	_a.gH.initializeBase(this)
};
_a.gH.prototype = {
	SubstrateSearchEndpoint: null
};
_a.gI = function() {
	_a.gI.initializeBase(this)
};
_a.gI.prototype = {
	DateThreshold: null
};
_a.gJ = function() {
	_a.gJ.initializeBase(this)
};
_a.gJ.prototype = {
	SupportedMarkets: null,
	BingCardPickerEndpoint: null,
	BingCardPickerUrlFormat: null,
	OptionsEndpoint: null,
	BingCardPickerLocationParam: null
};
_a.gK = function() {
	_a.gK.initializeBase(this)
};
_a.gK.prototype = {
	ActionsToMeasure: null
};
_a.gL = function() {
	_a.gL.initializeBase(this)
};
_a.gL.prototype = {
	WidgetBaseUrl: null,
	WidgetAppId: null,
	WidgetLoadTimeout: null
};
_a.gM = function() {
	_a.gM.initializeBase(this)
};
_a.gN = function() {
	_a.gN.initializeBase(this)
};
_a.gN.prototype = {
	SupportedMarkets: null
};
_a.gO = function() {
	_a.gO.initializeBase(this)
};
_a.gO.prototype = {
	SupportedMarkets: null
};
_a.gP = function() {
	_a.gP.initializeBase(this)
};
_a.gP.prototype = {
	SupportedMarkets: null
};
_a.gQ = function() {
	_a.gQ.initializeBase(this)
};
_a.gQ.prototype = {
	SupportedMarkets: null
};
_a.gR = function() {
	_a.gR.initializeBase(this)
};
_a.gR.prototype = {
	SupportedMarkets: null
};
_a.gS = function() {
	_a.gS.initializeBase(this)
};
_a.gS.prototype = {
	SupportedMarkets: null
};
_a.gT = function() {
	_a.gT.initializeBase(this)
};
_a.gT.prototype = {
	SupportedMarkets: null
};
_a.gU = function() {
	_a.gU.initializeBase(this)
};
_a.gU.prototype = {
	SupportedMarkets: null
};
_a.gV = function() {
	_a.gV.initializeBase(this)
};
_a.gV.prototype = {
	SupportedMarkets: null
};
_a.gW = function() {
	_a.gW.initializeBase(this)
};
_a.gW.prototype = {
	SupportedMarkets: null
};
_a.gX = function() {
	_a.gX.initializeBase(this)
};
_a.gX.prototype = {
	SupportedMarkets: null
};
_a.gY = function() {
	_a.gY.initializeBase(this)
};
_a.gY.prototype = {
	SupportedMarkets: null
};
_a.gZ = function() {
	_a.gZ.initializeBase(this)
};
_a.gZ.prototype = {
	SupportedMarkets: null
};
_a.ha = function() {
	_a.ha.initializeBase(this)
};
_a.ha.prototype = {
	SupportedMarkets: null
};
_a.hb = function() {
	_a.hb.initializeBase(this)
};
_a.hb.prototype = {
	SupportedMarkets: null
};
_a.hc = function() {
	_a.hc.initializeBase(this)
};
_a.hc.prototype = {
	SupportedMarkets: null
};
_a.hd = function() {
	_a.hd.initializeBase(this)
};
_a.hd.prototype = {
	OPayUrlFormat_petch: null,
	OPayUrlFormat_adeka: null,
	OPayUrlFormat_patawari: null
};
_a.he = function() {
	_a.he.initializeBase(this)
};
_a.he.prototype = {
	OPayUrlFormat: null,
	OPayRefreshUrl: null
};
_a.hf = function() {
	_a.hf.initializeBase(this)
};
_a.hf.prototype = {
	OPayUrlFormat: null,
	OPayRefreshUrl: null
};
_a.hg = function() {
	_a.hg.initializeBase(this)
};
_a.hh = function() {
	_a.hh.initializeBase(this)
};
_a.hh.prototype = {
	OptionsEndpoint: null
};
_a.hi = function() {
	_a.hi.initializeBase(this)
};
_a.hi.prototype = {
	AllowedUrls: null,
	RootDomain: null
};
_a.jz = function() {
	_a.jz.initializeBase(this)
};
_a.jz.prototype = {
	SettingsJson: null
};
_a.jA = function() {
	_a.jA.initializeBase(this)
};
_a.jA.prototype = {
	SettingsJson: null
};
_a.hj = function() {
	_a.hj.initializeBase(this)
};
_a.hj.prototype = {
	RedirectUrl: null
};
_a.hk = function() {
	_a.hk.initializeBase(this)
};
_a.hk.prototype = {
	SaveToCloudTimeout: 0
};
_a.hl = function() {
	_a.hl.initializeBase(this)
};
_a.hl.prototype = {
	UpsellUrlFormat: null
};
_a.hm = function() {
	_a.hm.initializeBase(this)
};
_a.hm.prototype = {
	UpsellUrlFormat: null
};
_a.hn = function() {
	_a.hn.initializeBase(this)
};
_a.hn.prototype = {
	UpsellUrlFormat: null
};
_a.hp = function() {
	_a.hp.initializeBase(this)
};
_a.hp.prototype = {
	DisplayId: null
};
_a.hq = function() {
	_a.hq.initializeBase(this)
};
_a.hq.prototype = {
	DisplayId: null
};
_a.ho = function() {
	_a.ho.initializeBase(this)
};
_a.ho.prototype = {
	DisplayId: null
};
_a.hr = function() {
	_a.hr.initializeBase(this)
};
_a.hr.prototype = {
	UpsellUrlFormat: null
};
_a.hs = function() {
	_a.hs.initializeBase(this)
};
_a.hs.prototype = {
	UpsellUrlFormat: null
};
_a.ht = function() {
	_a.ht.initializeBase(this)
};
_a.ht.prototype = {
	UpsellUrlFormat: null
};
_a.hu = function() {
	_a.hu.initializeBase(this)
};
_a.hu.prototype = {
	UpsellUrlFormat: null,
	RenewUrlFormat: null,
	ReactiveUrlFormat: null
};
_a.hv = function() {
	_a.hv.initializeBase(this)
};
_a.hv.prototype = {
	UpsellUrlFormat: null
};
_a.hw = function() {
	_a.hw.initializeBase(this)
};
_a.hw.prototype = {
	ActionsToProxy: null
};
_a.hx = function() {
	_a.hx.initializeBase(this)
};
_a.hx.prototype = {
	CacheSize: 0
};
_a.hy = function() {
	_a.hy.initializeBase(this)
};
_a.hy.prototype = {
	DLRequestLimit: 0,
	OnPremisesDLUpgradeAvailable: !1,
	ContactUsAddress: null,
	DLHideDelay: 0
};
_a.hz = function() {
	_a.hz.initializeBase(this)
};
_a.hz.prototype = {
	Url: null,
	IsUrlVersionSpecific: !1
};
_a.hA = function() {
	_a.hA.initializeBase(this)
};
_a.hA.prototype = {
	Url: null,
	Filename: null
};
_a.hB = function() {
	_a.hB.initializeBase(this)
};
_a.hB.prototype = {
	Region: null
};
_a.hC = function() {
	_a.hC.initializeBase(this)
};
_a.hC.prototype = {
	ChromeEnabled: !1,
	MinSupportedFireFoxVersion: 0,
	FirefoxEnabled: !1,
	EdgeEnabled: !1,
	DefaultEnabled: !1
};
_a.jB = function() {};
_a.jB.prototype = {
	Name: null
};
_a.hD = function() {
	_a.hD.initializeBase(this)
};
_a.hD.prototype = {
	ImmersiveReaderAppDomain: null,
	Region: null,
	ImmersiveReaderAppPath: null
};
_a.hE = function() {
	_a.hE.initializeBase(this)
};
_a.hE.prototype = {
	MaxFilesToShow: 0
};
_a.jC = function() {
	_a.jC.initializeBase(this)
};
_a.jC.prototype = {
	CacheMaxAgeInSeconds: null
};
_a.hF = function() {
	_a.hF.initializeBase(this)
};
_a.hF.prototype = {
	MaxNumberOfFilesForEmail: 0
};
_a.hG = function() {
	_a.hG.initializeBase(this)
};
_a.hG.prototype = {
	LogEntries: null
};
_a.hH = function() {
	_a.hH.initializeBase(this)
};
_a.hH.prototype = {
	MaxAllowedNameLength: 0,
	MaxAllowedAliasLength: 0
};
_a.hI = function() {
	_a.hI.initializeBase(this)
};
_a.hI.prototype = {
	ClientLoggingUrl: null,
	ClientLoggingThreshold: 0
};
_a.hJ = function() {
	_a.hJ.initializeBase(this)
};
_a.hJ.prototype = {
	AolCountryCodes: null,
	SupportedMarkets: null,
	OwaAdBarBaseUrl: null,
	OwaAdBarScript: null,
	AstScriptUrl: null,
	CountryDefaultMapMarkets: null,
	GDPRCountries: null
};
_a.hK = function() {
	_a.hK.initializeBase(this)
};
_a.hK.prototype = {
	PixelUrl: null
};
_a.hL = function() {
	_a.hL.initializeBase(this)
};
_a.hL.prototype = {
	PixelUrl: null
};
_a.hM = function() {
	_a.hM.initializeBase(this)
};
_a.hM.prototype = {
	PixelUrl: null
};
_a.hN = function() {
	_a.hN.initializeBase(this)
};
_a.hN.prototype = {
	SupportedMarkets: null
};
_a.hO = function() {
	_a.hO.initializeBase(this)
};
_a.hO.prototype = {
	SupportedMarkets: null
};
_a.hP = function() {
	_a.hP.initializeBase(this)
};
_a.hP.prototype = {
	SupportedMarkets: null
};
_a.hQ = function() {
	_a.hQ.initializeBase(this)
};
_a.hQ.prototype = {
	SupportedMarkets: null
};
_a.jD = function() {
	_a.jD.initializeBase(this)
};
_a.jD.prototype = {
	SupportedMarkets: null
};
_a.jE = function() {
	_a.jE.initializeBase(this)
};
_a.jE.prototype = {
	SupportedMarkets: null
};
_a.jF = function() {
	_a.jF.initializeBase(this)
};
_a.jF.prototype = {
	SupportedMarkets: null
};
_a.hR = function() {
	_a.hR.initializeBase(this)
};
_a.hR.prototype = {
	SupportedMarkets: null
};
_a.jG = function() {
	_a.jG.initializeBase(this)
};
_a.jG.prototype = {
	SupportedMarkets: null
};
_a.jH = function() {
	_a.jH.initializeBase(this)
};
_a.jH.prototype = {
	SupportedMarkets: null
};
_a.jI = function() {
	_a.jI.initializeBase(this)
};
_a.jI.prototype = {
	SupportedMarkets: null
};
_a.hS = function() {
	_a.hS.initializeBase(this)
};
_a.hS.prototype = {
	ConciergeUrl: null
};
_a.hT = function() {
	_a.hT.initializeBase(this)
};
_a.hT.prototype = {
	OneRMServiceUrl: null
};
_a.hU = function() {
	_a.hU.initializeBase(this)
};
_a.hU.prototype = {
	ServiceUrl: null,
	ViewChancePercent: 0,
	ORMServiceUrl: null
};
_a.hV = function() {
	_a.hV.initializeBase(this)
};
_a.hV.prototype = {
	DaysBeforeNextFetch: 0
};
_a.hW = function() {
	_a.hW.initializeBase(this)
};
_a.hW.prototype = {
	UpsellPremiumBaseUrlFormat: null
};
_a.hX = function() {
	_a.hX.initializeBase(this)
};
_a.hX.prototype = {
	DefaultAdTargetUpsellUrlFormat: null,
	ShowAdsNumber: 0
};
_a.hY = function() {
	_a.hY.initializeBase(this)
};
_a.hY.prototype = {
	SupportedMarkets: null
};
_a.hZ = function() {
	_a.hZ.initializeBase(this)
};
_a.hZ.prototype = {
	SupportedMarkets: null
};
_a.jJ = function() {
	_a.jJ.initializeBase(this)
};
_a.jJ.prototype = {
	SupportedMarkets: null
};
_a.ia = function() {
	_a.ia.initializeBase(this)
};
_a.ia.prototype = {
	SupportedMarkets: null
};
_a.jK = function() {
	_a.jK.initializeBase(this)
};
_a.jK.prototype = {
	SupportedMarkets: null
};
_a.jL = function() {
	_a.jL.initializeBase(this)
};
_a.jL.prototype = {
	SupportedMarkets: null
};
_a.jM = function() {
	_a.jM.initializeBase(this)
};
_a.jM.prototype = {
	SupportedMarkets: null
};
_a.ib = function(n) {
	this.bv = n
};
_a.ib.prototype = {
	bv: null,
	eh: function() {
		return this.a(_a.i, "AriaUsage")
	},
	lS: function() {
		return this.a(_a.i, "TailoredPropertiesInItemViewV1_C")
	},
	bj: function() {
		return this.a(_a.i, "ModernGroupsOldListViewNoCountNumbers")
	},
	bZ: function() {
		return this.a(_a.i, "OwaOneNoteSupport")
	},
	gE: function() {
		return this.a(_a.i, "SuggestPublicGroupsSearch")
	},
	ka: function() {
		return this.a(_a.i, "MowaEndOfLifeNotification")
	},
	ds: function() {
		return this.a(_a.i, "RequestPersonaResponseShape")
	},
	kz: function() {
		return this.a(_a.i, "OwaLocationWellDeleteLocationsFromCache")
	},
	io: function() {
		return this.a(_a.i, "CollegeBasketballPromotion")
	},
	gH: function() {
		return this.a(_a.i, "SuperCharmingMeetings")
	},
	hL: function() {
		return this.a(_a.i, "BasicInvoiceV1")
	},
	w: function() {
		return this.a(_a.i, "ExtReactTaskPane")
	},
	jv: function() {
		return this.a(_a.i, "MCInlineImageDiagnostics")
	},
	jc: function() {
		return this.a(_a.i, "InsertPictureInline")
	},
	hM: function() {
		return this.a(_a.i, "BasicLodgingReservationV1")
	},
	bO: function() {
		return this.a(_a.gI, "MCSmartReplyForEmailExperimentWithUI")
	},
	jQ: function() {
		return this.a(_a.i, "MFSchedulingNoString")
	},
	lx: function() {
		return this.a(_a.i, "SubstrateSearchInstrumentation_SearchPerf")
	},
	cB: function() {
		return this.a(_a.i, "InvitationManagerErrorFiltering")
	},
	ei: function() {
		return this.a(_a.i, "AttachmentIntraOrgSafelinks")
	},
	dZ: function() {
		return this.a(_a.i, "AgendaMail")
	},
	lK: function() {
		return this.a(_a.i, "SuperTriageOne")
	},
	mb: function() {
		return this.a(_a.i, "TopicQuerySearchUX")
	},
	eI: function() {
		return this.a(_a.i, "GDPRAds")
	},
	eN: function() {
		return this.a(_a.gA, "InvokeAddinInstallByManifest")
	},
	hv: function() {
		return this.a(_a.gm, "ActionInjectionMessages")
	},
	ea: function() {
		return this.a(_a.i, "AgendaMailFeedback")
	},
	kZ: function() {
		return this.a(_a.i, "RelevantSearch")
	},
	fh: function() {
		return this.a(_a.i, "ModernGroupsQuotedText")
	},
	Y: function() {
		return this.a(_a.i, "OWAInClientStore")
	},
	eH: function() {
		return this.a(_a.i, "FrePanel")
	},
	y: function() {
		return this.a(_a.gy, "HelpShift")
	},
	lq: function() {
		return this.a(_a.hB, "ServiceRegion")
	},
	ef: function() {
		return this.a(_a.i, "AriaError")
	},
	mv: function() {
		return this.a(_a.hU, "XOWAConsumerPromotion")
	},
	cw: function() {
		return this.a(_a.i, "GDPRAdsOption")
	},
	H: function() {
		return this.a(_a.i, "XOWAPeopleToPicker")
	},
	ew: function() {
		return this.a(_a.i, "ConnectorGenereicSenderLightningCalloutEnabled")
	},
	kH: function() {
		return this.a(_a.i, "Oxford")
	},
	b: function() {
		return this.a(_a.i, "XOWAIsConsumerUser")
	},
	ba: function() {
		return this.a(_a.hC, "ServiceWorkerV2")
	},
	L: function() {
		return this.a(_a.gE, "MCBingInlineImagePicker")
	},
	kv: function() {
		return this.a(_a.i, "OWAInClientStoreFeedback")
	},
	iF: function() {
		return this.a(_a.i, "DownloadAuthenticatorFactory")
	},
	mj: function() {
		return this.a(_a.i, "UnifiedGroupsAccessTypeSwitch")
	},
	kF: function() {
		return this.a(_a.i, "OwaTimeEntityFeedback")
	},
	je: function() {
		return this.a(_a.i, "InstantSurfaceFiltering")
	},
	ca: function() {
		return this.a(_a.ht, "PremiumUpsellNoCC_C")
	},
	ge: function() {
		return this.a(_a.hl, "PremiumUpsellAdBar")
	},
	jH: function() {
		return this.a(_a.i, "MentionsPlaceholderB")
	},
	dL: function() {
		return this.a(_a.i, "TrapOnSendAddinCommands")
	},
	hy: function() {
		return this.a(_a.i, "AddMemberWithOnlyGuestValidation")
	},
	ir: function() {
		return this.a(_a.i, "ConferenceRoomInQuickCompose")
	},
	jR: function() {
		return this.a(_a.i, "MFTimeSimplification")
	},
	jz: function() {
		return this.a(_a.i, "MCSmartSuggestions_NoUI")
	},
	eV: function() {
		return this.a(_a.i, "LivePeopleCardsPrefetchOnly")
	},
	fz: function() {
		return this.a(_a.i, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnlyAccountOnly")
	},
	M: function() {
		return this.a(_a.gF, "MCHighlightAcronyms")
	},
	kE: function() {
		return this.a(_a.i, "OwaShowActiveGroupsInDiscovery")
	},
	lp: function() {
		return this.a(_a.i, "SeparateBlockedSendersAndDomains")
	},
	bb: function() {
		return this.a(_a.i, "SuperSwitcher")
	},
	lF: function() {
		return this.a(_a.i, "SuperHashtagsPartialSearchResults")
	},
	my: function() {
		return this.a(_a.i, "XOWAManageMailboxQuotaOptionShowUpsell")
	},
	bP: function() {
		return this.a(_a.gM, "ModernGroupsConversationReadUnread")
	},
	hU: function() {
		return this.a(_a.gp, "BookingMobileAppAvailable")
	},
	X: function() {
		return this.a(_a.i, "MOWASharingInterruptDesignV1")
	},
	df: function() {
		return this.a(_a.i, "O365SuiteMeControl")
	},
	fg: function() {
		return this.a(_a.i, "ModernGroupsInL2FolderView")
	},
	ig: function() {
		return this.a(_a.i, "CalendarPeekSkypeExperiment")
	},
	fu: function() {
		return this.a(_a.i, "NativeAdsBingOneClickRefreshAccountOnly")
	},
	fZ: function() {
		return this.a(_a.i, "OwaXRFArchiveAndSharedFolder")
	},
	ja: function() {
		return this.a(_a.gz, "InfoTipsSettings")
	},
	gh: function() {
		return this.a(_a.hq, "PremiumUpsellFlexPaneGearMenu")
	},
	ih: function() {
		return this.a(_a.i, "CalendarPeopleRecommendations")
	},
	kj: function() {
		return this.a(_a.i, "OwaAttachmentsAriaEvents")
	},
	jF: function() {
		return this.a(_a.i, "MentionsFriendlyName")
	},
	ek: function() {
		return this.a(_a.gn, "BookerAnalytics")
	},
	dS: function() {
		return this.a(_a.i, "XOWAClientThumbnail")
	},
	kP: function() {
		return this.a(_a.i, "PreserveMeetingHistory")
	},
	fb: function() {
		return this.a(_a.gK, "MeasureActionsLatency")
	},
	gn: function() {
		return this.a(_a.i, "PublicGroupsSearchInInboxSearchRefiner")
	},
	eU: function() {
		return this.a(_a.i, "LivePeopleCardsForLocations")
	},
	iM: function() {
		return this.a(_a.i, "FasterPhoto")
	},
	hJ: function() {
		return this.a(_a.i, "BasicFlightReservationV1")
	},
	jJ: function() {
		return this.a(_a.i, "MFCategoriesSimplification")
	},
	kQ: function() {
		return this.a(_a.i, "PrimeCallIncludeImplicitGroups")
	},
	dl: function() {
		return this.a(_a.i, "PeopleSmartCard")
	},
	dX: function() {
		return this.a(_a.ia, "XOWATaboolaMobileOneClickNativeAds")
	},
	fs: function() {
		return this.a(_a.i, "NativeAdsBingOneClickDisplayAccountOnly")
	},
	kX: function() {
		return this.a(_a.hx, "RecipientCacheSize")
	},
	lG: function() {
		return this.a(_a.i, "SuperNotification")
	},
	dy: function() {
		return this.a(_a.i, "SuperCleanup")
	},
	eE: function() {
		return this.a(_a.i, "EnsurePrimaryAddressForExplicitLogon")
	},
	fC: function() {
		return this.a(_a.i, "ODBThumbnailsInFilePicker")
	},
	cd: function() {
		return this.a(_a.i, "SuiteExtensionsAttachmentHandler")
	},
	di: function() {
		return this.a(_a.i, "OwaFlow")
	},
	bW: function() {
		return this.a(_a.hg, "OPayFlexPane")
	},
	mo: function() {
		return this.a(_a.i, "UpdateAttPerm")
	},
	gY: function() {
		return this.a(_a.i, "UnifiedCreateGroupLearnability")
	},
	mq: function() {
		return this.a(_a.i, "UseEmbeddedThumbnail")
	},
	hs: function() {
		return this.a(_a.hV, "XOWAConsumerSubscription")
	},
	bM: function() {
		return this.a(_a.i, "MCAutoHighlights_c")
	},
	id: function() {
		return this.a(_a.i, "CalendarComposePopoutExperiment")
	},
	kC: function() {
		return this.a(_a.i, "OwaOneDriveConsumerProviderForO365")
	},
	jw: function() {
		return this.a(_a.gG, "MCInlineImageSettings")
	},
	t: function() {
		return this.a(_a.i, "AttachmentsClientTest")
	},
	D: function() {
		return this.a(_a.i, "SuperAutoSuggestions")
	},
	jW: function() {
		return this.a(_a.i, "ModernGroupsSendAs")
	},
	gq: function() {
		return this.a(_a.i, "RefreshOptIn")
	},
	I: function() {
		return this.a(_a.gv, "BookingsPayments")
	},
	lH: function() {
		return this.a(_a.i, "SuperSearchInContextFeedback")
	},
	el: function() {
		return this.a(_a.i, "BookingInternalNotes")
	},
	fY: function() {
		return this.a(_a.i, "OWAUnifiedInClientStore")
	},
	lt: function() {
		return this.a(_a.i, "SingleDaySchedulingGrid")
	},
	il: function() {
		return this.a(_a.i, "ClearCalendarOOF")
	},
	jO: function() {
		return this.a(_a.i, "MFPrivateSettingSimplification")
	},
	mz: function() {
		return this.a(_a.i, "XOWAPeopleTypeAheadSearch")
	},
	k: function() {
		return this.a(_a.i, "ExtPinnableTaskPane")
	},
	eZ: function() {
		return this.a(_a.i, "MCSmartReplyForEmailExperimentWithoutUI")
	},
	hV: function() {
		return this.a(_a.i, "BookingPageRegionSettings")
	},
	lg: function() {
		return this.a(_a.i, "RPScrollLast")
	},
	hi: function() {
		return this.a(_a.i, "XOFilterReportingOptions")
	},
	bK: function() {
		return this.a(_a.i, "GroupsRegionalConfiguration")
	},
	gS: function() {
		return this.a(_a.i, "TailoredRemoveAllEventsV1")
	},
	jl: function() {
		return this.a(_a.i, "LivePeopleCardsUseAadAuthToken")
	},
	lY: function() {
		return this.a(_a.i, "ThreadsOnGroups")
	},
	hx: function() {
		return this.a(_a.i, "AddinsTelemetry")
	},
	jh: function() {
		return this.a(_a.i, "LegacyConversationalScheduling")
	},
	hE: function() {
		return this.a(_a.i, "AttachmentsWacAnonymous")
	},
	E: function() {
		return this.a(_a.i, "SuperDiagnostics")
	},
	cV: function() {
		return this.a(_a.gX, "NativeAdsBingOneClickRefreshRamp")
	},
	iy: function() {
		return this.a(_a.i, "CopyLinkToConversation")
	},
	kU: function() {
		return this.a(_a.i, "React")
	},
	fT: function() {
		return this.a(_a.i, "OwaLinkPrefetch")
	},
	et: function() {
		return this.a(_a.i, "ClutterReasons")
	},
	cO: function() {
		return this.a(_a.gQ, "NativeAdsAppNexusOneClickRamp")
	},
	cm: function() {
		return this.a(_a.i, "UnifiedGroupNotificationChangesV1")
	},
	ko: function() {
		return this.a(_a.i, "OwaClientLinkInBodyReplaceText")
	},
	hO: function() {
		return this.a(_a.i, "BasicRentalCarReservationV1")
	},
	mB: function() {
		return this.a(_a.i, "XOWAUserVoiceSatisfactionWidget")
	},
	hT: function() {
		return this.a(_a.go, "BookingFeedback")
	},
	bX: function() {
		return this.a(_a.i, "OwaConversationAttachmentWell")
	},
	bw: function() {
		return this.a(_a.i, "AddinComplianceVerification")
	},
	jP: function() {
		return this.a(_a.i, "MFRequestResponses")
	},
	ie: function() {
		return this.a(_a.i, "CalendarComposeSkypeExperiment")
	},
	x: function() {
		return this.a(_a.i, "GroupsDiscoveryInOwa")
	},
	jM: function() {
		return this.a(_a.i, "MFFieldsSimplification")
	},
	dN: function() {
		return this.a(_a.i, "UnifiedGroupHeaderV1")
	},
	iI: function() {
		return this.a(_a.i, "EnhancedPeopleHubInfiniteScrollSearch")
	},
	gX: function() {
		return this.a(_a.i, "TxpTeeTriggeredDonation")
	},
	iY: function() {
		return this.a(_a.i, "HelpPanel")
	},
	es: function() {
		return this.a(_a.i, "ClutterOverridesDialogPrompt")
	},
	fd: function() {
		return this.a(_a.i, "MeetingCollabShowAttachmentsFromEventConversation")
	},
	lm: function() {
		return this.a(_a.i, "SchedulingGridGreyAreas")
	},
	hg: function() {
		return this.a(_a.i, "UserVoiceSuggestionV2")
	},
	dG: function() {
		return this.a(_a.i, "SuperSweepGreyEmailsOlderThan90Days")
	},
	mh: function() {
		return this.a(_a.i, "UnifiedGroupFilesShowTitleAndMoreFilesLink")
	},
	gG: function() {
		return this.a(_a.i, "SuperBundle")
	},
	R: function() {
		return this.a(_a.i, "XOWAWeather")
	},
	hz: function() {
		return this.a(_a.i, "AgavePerformance")
	},
	cC: function() {
		return this.a(_a.i, "LivePeopleCardsForGroups")
	},
	fw: function() {
		return this.a(_a.i, "NativeAdsBingTwoClickDesktopOtherOnlyAccountOnly")
	},
	fO: function() {
		return this.a(_a.i, "OwaDropbox")
	},
	lo: function() {
		return this.a(_a.i, "SearchSuggestionsV2")
	},
	fe: function() {
		return this.a(_a.i, "MeLike")
	},
	kR: function() {
		return this.a(_a.i, "PrintPopup")
	},
	fN: function() {
		return this.a(_a.i, "OwaClientUnsharableAttachmentImprovements")
	},
	eJ: function() {
		return this.a(_a.i, "GroupDataPrefetching")
	},
	ex: function() {
		return this.a(_a.i, "ConnectorSenderLightningCalloutEnabled")
	},
	eK: function() {
		return this.a(_a.i, "HashtagsFeedbackYammer")
	},
	mc: function() {
		return this.a(_a.i, "TxpEntityProcessingEmailOnlyV2")
	},
	fW: function() {
		return this.a(_a.i, "OwaOfflinePinnedSupport")
	},
	ji: function() {
		return this.a(_a.i, "ListViewActions")
	},
	iq: function() {
		return this.a(_a.i, "ConditionalAction")
	},
	l: function() {
		return this.a(_a.gB, "LWX")
	},
	lh: function() {
		return this.a(_a.i, "RPSmimeModernExtensionChrome")
	},
	kc: function() {
		return this.a(_a.i, "NativeAdsBingUseSingleAdUnit")
	},
	dj: function() {
		return this.a(_a.i, "OwaODBAttachmentsFolder")
	},
	eu: function() {
		return this.a(_a.i, "ComposeMentionsSearchRecipients")
	},
	iP: function() {
		return this.a(_a.i, "FindUnifiedGroupsEWS")
	},
	le: function() {
		return this.a(_a.i, "RPOofFilter")
	},
	jp: function() {
		return this.a(_a.i, "LocationSuggestionsInQuickCompose")
	},
	kt: function() {
		return this.a(_a.i, "OWAExperiment1")
	},
	he: function() {
		return this.a(_a.i, "UnifiedGroupsHub")
	},
	ff: function() {
		return this.a(_a.i, "ModalPopupForGroupsApp_t1")
	},
	bk: function() {
		return this.a(_a.i, "ModernGroupsUnreadCountLocalLies")
	},
	mp: function() {
		return this.a(_a.i, "UrlManager")
	},
	kS: function() {
		return this.a(_a.i, "ProxyOws")
	},
	kD: function() {
		return this.a(_a.i, "OwaRoomSelectionFromPeoplePicker")
	},
	hN: function() {
		return this.a(_a.i, "BasicParcelDeliveryV1")
	},
	ju: function() {
		return this.a(_a.i, "MCHighlightsTestMode")
	},
	by: function() {
		return this.a(_a.i, "AllPublicGroupsSearch")
	},
	ld: function() {
		return this.a(_a.i, "RPLeanPopout")
	},
	gR: function() {
		return this.a(_a.i, "TailoredPropertiesInItemViewV1")
	},
	Z: function() {
		return this.a(_a.i, "RichSharingMessages")
	},
	kJ: function() {
		return this.a(_a.i, "PdfJsPreview")
	},
	iU: function() {
		return this.a(_a.i, "GroupProfilePage")
	},
	bJ: function() {
		return this.a(_a.i, "GroupRelevantSearch")
	},
	lP: function() {
		return this.a(_a.i, "TailoredExperiencesV1_T")
	},
	eT: function() {
		return this.a(_a.i, "LivePeopleCards")
	},
	jL: function() {
		return this.a(_a.i, "MFDetailsStrings")
	},
	lD: function() {
		return this.a(_a.i, "SuperDeleteAndExportSearch")
	},
	F: function() {
		return this.a(_a.i, "UnifiedGroupCrudV1")
	},
	dI: function() {
		return this.a(_a.i, "TailoredFoodEstablishmentReservationV1")
	},
	dH: function() {
		return this.a(_a.i, "TailoredEventReservationV1")
	},
	dn: function() {
		return this.a(_a.i, "PrankieForUnifiedGroups")
	},
	dz: function() {
		return this.a(_a.i, "SuperClientNotifications")
	},
	B: function() {
		return this.a(_a.hi, "OWAConnectors")
	},
	bS: function() {
		return this.a(_a.i, "ModernGroupsListViewNewTriage")
	},
	eg: function() {
		return this.a(_a.i, "AriaSamplePerf")
	},
	q: function() {
		return this.a(_a.i, "OWADiagnostics")
	},
	bV: function() {
		return this.a(_a.he, "OPayEndpointPPE")
	},
	J: function() {
		return this.a(_a.i, "HashtagsUX")
	},
	ml: function() {
		return this.a(_a.i, "UnifiedGroupsBulkAdditionSwitch")
	},
	kB: function() {
		return this.a(_a.i, "OwaLocationWellUseLocationsApi")
	},
	dO: function() {
		return this.a(_a.i, "WaitTrapOnSendAddinCommands")
	},
	iu: function() {
		return this.a(_a.i, "ConnectorHoverExperienceOnHomePageWithoutAddButton")
	},
	cP: function() {
		return this.a(_a.gR, "NativeAdsAppNexusTwoClickDisplayRamp")
	},
	cs: function() {
		return this.a(_a.i, "BootExperienceBoost")
	},
	gQ: function() {
		return this.a(_a.i, "TailoredParcelDeliveryV1")
	},
	br: function() {
		return this.a(_a.i, "ShowBookingsOverride")
	},
	j: function() {
		return this.a(_a.i, "UnifiedGroupGuestAccess")
	},
	lW: function() {
		return this.a(_a.i, "TextBoys")
	},
	dK: function() {
		return this.a(_a.i, "TenantIndex")
	},
	bQ: function() {
		return this.a(_a.i, "ModernGroupsLikersStringBottom")
	},
	dJ: function() {
		return this.a(_a.i, "TailoredShareEventV1")
	},
	fL: function() {
		return this.a(_a.i, "OwaClientDefaultGroupAccessTypeInGetGroupSettings")
	},
	bp: function() {
		return this.a(_a.hu, "PremiumUpsellNoCC_T")
	},
	cn: function() {
		return this.a(_a.i, "UnifiedGroupSimplifiedCreateForm")
	},
	gW: function() {
		return this.a(_a.i, "TopicQuerySearch")
	},
	hY: function() {
		return this.a(_a.i, "BookingServiceWindows")
	},
	hj: function() {
		return this.a(_a.hK, "XOWAAdsBingCGif")
	},
	mi: function() {
		return this.a(_a.i, "UnifiedGroupJoinPrivateGroupOnGroupMailbox")
	},
	dQ: function() {
		return this.a(_a.hQ, "XOWAAppNexusMobileOneClickNativeAds")
	},
	eX: function() {
		return this.a(_a.i, "LocationWellDesignV2")
	},
	dU: function() {
		return this.a(_a.hY, "XOWAPrebidMobileOneClickNativeAds")
	},
	iC: function() {
		return this.a(_a.i, "DocLinkSxS")
	},
	P: function() {
		return this.a(_a.i, "XOWAConsumerFirstRun")
	},
	eB: function() {
		return this.a(_a.i, "EmailReminders")
	},
	iE: function() {
		return this.a(_a.i, "DoNotForwardMeeting")
	},
	gw: function() {
		return this.a(_a.i, "RWResolveFixExperiment")
	},
	hb: function() {
		return this.a(_a.i, "UnifiedGroupDirectReportsPersonification")
	},
	mg: function() {
		return this.a(_a.i, "UnifiedGroupFilesHubHideToggleButton")
	},
	jr: function() {
		return this.a(_a.i, "MCAvailableTime")
	},
	km: function() {
		return this.a(_a.i, "OwaClientAnonymousLinksInBody")
	},
	fD: function() {
		return this.a(_a.i, "OnlyPeopleIndexSearchResults")
	},
	fJ: function() {
		return this.a(_a.i, "OWACalendarAgendaReadingPaneView")
	},
	fa: function() {
		return this.a(_a.i, "MCUserHighlighting")
	},
	ll: function() {
		return this.a(_a.i, "SatoriInterestingCalendars")
	},
	gZ: function() {
		return this.a(_a.i, "UnifiedGroupDataClassificationForCreate")
	},
	z: function() {
		return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingDesktopOneClick")
	},
	lk: function() {
		return this.a(_a.i, "Sacker")
	},
	du: function() {
		return this.a(_a.i, "SimpleComposeForBots")
	},
	m: function() {
		return this.a(_a.i, "UnifiedGroupSearchV2")
	},
	dR: function() {
		return this.a(_a.hR, "XOWABingMobileOneClickNativeAds")
	},
	lM: function() {
		return this.a(_a.i, "SxSSingleShowHideEmailButton")
	},
	hI: function() {
		return this.a(_a.i, "BasicEventReservationV1")
	},
	Q: function() {
		return this.a(_a.i, "XOWAPeopleLandingPage")
	},
	gz: function() {
		return this.a(_a.i, "SendLinkClickedSignalToSP")
	},
	dw: function() {
		return this.a(_a.i, "SummaryCardRendering")
	},
	gj: function() {
		return this.a(_a.hs, "PremiumUpsellLeftNav")
	},
	ez: function() {
		return this.a(_a.gw, "ConsumerJunkEmailRuleSettings")
	},
	gr: function() {
		return this.a(_a.i, "ReplyAllByMeetingThroughSidePanel")
	},
	gb: function() {
		return this.a(_a.i, "PeoplePackageWW")
	},
	iz: function() {
		return this.a(_a.i, "CreateBookingMailbox")
	},
	mr: function() {
		return this.a(_a.i, "UserVoiceNpsRating")
	},
	kk: function() {
		return this.a(_a.i, "OwaCalendarSchedulingAssistantAddRecipient")
	},
	bH: function() {
		return this.a(_a.i, "GroupFirstBody")
	},
	dr: function() {
		return this.a(_a.i, "ReactAgendaPlus")
	},
	bz: function() {
		return this.a(_a.i, "AtAllMentionUX")
	},
	gp: function() {
		return this.a(_a.i, "RefAttachmentDirectDownload")
	},
	cR: function() {
		return this.a(_a.gT, "NativeAdsBingOneClickDesktopOtherOnly_Major")
	},
	cH: function() {
		return this.a(_a.i, "ModernGroupsGEOListView")
	},
	G: function() {
		return this.a(_a.i, "XOWACircularAvatars")
	},
	gK: function() {
		return this.a(_a.i, "SuperForesight")
	},
	ix: function() {
		return this.a(_a.i, "ConversationLinkingForMeetings")
	},
	dg: function() {
		return this.a(_a.i, "OwaAttachWellExperimentIcon")
	},
	bx: function() {
		return this.a(_a.i, "AgendaMailSelectedCalendars")
	},
	bh: function() {
		return this.a(_a.i, "MCImage")
	},
	dq: function() {
		return this.a(_a.ho, "PremiumUpsellFlexPane_T1")
	},
	jI: function() {
		return this.a(_a.i, "MentionsPlaceholderC")
	},
	gJ: function() {
		return this.a(_a.i, "SuperEmailEntitySuggestions")
	},
	bc: function() {
		return this.a(_a.i, "UnifiedGroupDataClassification")
	},
	ee: function() {
		return this.a(_a.i, "AriaCorePerf")
	},
	ip: function() {
		return this.a(_a.i, "ComposeResponsiveness")
	},
	bF: function() {
		return this.a(_a.i, "ExtDetectedEntity")
	},
	ct: function() {
		return this.a(_a.i, "CalendarMeetingCard")
	},
	hu: function() {
		return this.a(_a.i, "AccountSettingsOption")
	},
	gO: function() {
		return this.a(_a.i, "TailoredLodgingReservationV1")
	},
	en: function() {
		return this.a(_a.gq, "BookingPageFacebookConnect")
	},
	jy: function() {
		return this.a(_a.i, "MCSmartSuggestions_AutoOpen")
	},
	kg: function() {
		return this.a(_a.i, "O365Panorama")
	},
	jB: function() {
		return this.a(_a.i, "MeetingCollabAttachmentsFromEventConversation")
	},
	mn: function() {
		return this.a(_a.i, "UnInstallLegacyUrlAppcache")
	},
	cY: function() {
		return this.a(_a.ha, "NativeAdsBingTwoClickRamp")
	},
	iS: function() {
		return this.a(_a.gx, "GetOutlookMobileGearMenu")
	},
	hk: function() {
		return this.a(_a.hL, "XOWAAdsCLiveGif")
	},
	lu: function() {
		return this.a(_a.i, "SkypeShortCircuit")
	},
	dt: function() {
		return this.a(_a.hz, "RPSmimeDefaultExtensionInstaller")
	},
	fB: function() {
		return this.a(_a.i, "O365SuiteMeFlexPane")
	},
	iD: function() {
		return this.a(_a.i, "DocumentThumbnail")
	},
	bT: function() {
		return this.a(_a.i, "ModernGroupsListViewNewTriageAlt")
	},
	fI: function() {
		return this.a(_a.i, "OwaBox")
	},
	kl: function() {
		return this.a(_a.i, "OwaClassicSlicedAttachments")
	},
	jd: function() {
		return this.a(_a.i, "InsightSettingsPage")
	},
	gu: function() {
		return this.a(_a.i, "RPResponsiveness")
	},
	hc: function() {
		return this.a(_a.i, "UnifiedGroupDragDropToGroup")
	},
	eC: function() {
		return this.a(_a.i, "EmailRemindersRefresh")
	},
	mw: function() {
		return this.a(_a.i, "XOWAEnterpriseSharing")
	},
	fc: function() {
		return this.a(_a.i, "MeetingCollabCalendarAgendaReminderTable")
	},
	bu: function() {
		return this.a(_a.hX, "XOWANativeAdsSettings")
	},
	cc: function() {
		return this.a(_a.hD, "ShowInImmersiveReader")
	},
	lV: function() {
		return this.a(_a.i, "TailoredViewInCalendarV1_T")
	},
	A: function() {
		return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingSendTagIdDesktopOneClick")
	},
	eY: function() {
		return this.a(_a.i, "MCArticleSummarization")
	},
	o: function() {
		return this.a(_a.gJ, "MCSmartSuggestions")
	},
	h: function() {
		return this.a(_a.i, "FolderBasedClutter")
	},
	ic: function() {
		return this.a(_a.i, "CalendarChangeNotifications")
	},
	iW: function() {
		return this.a(_a.i, "GroupSuggestionInCompose")
	},
	jk: function() {
		return this.a(_a.i, "LivePeopleCardsDogfoodRegionOverride")
	},
	cf: function() {
		return this.a(_a.i, "SuperDumpster")
	},
	fx: function() {
		return this.a(_a.i, "NativeAdsBingTwoClickDisplayAccountOnly")
	},
	ij: function() {
		return this.a(_a.i, "CalendarTimeSuggestionsInSchedulingAssistant")
	},
	cF: function() {
		return this.a(_a.i, "MCInlineImageInSxS")
	},
	bE: function() {
		return this.a(_a.i, "DotInAlias")
	},
	cq: function() {
		return this.a(_a.i, "AttachmentChangeUploadFolder")
	},
	mk: function() {
		return this.a(_a.i, "UnifiedGroupsBulkAddCSVAliasesSwitch")
	},
	lN: function() {
		return this.a(_a.i, "TailoredEventReservationV1_C")
	},
	jD: function() {
		return this.a(_a.i, "MeetingCollabBodyHtmlToPlainTextConversion")
	},
	dY: function() {
		return this.a(_a.i, "AddinsOnSmime")
	},
	lZ: function() {
		return this.a(_a.i, "TimezonePicker")
	},
	it: function() {
		return this.a(_a.i, "ConnectorHoverExperienceOnHomePageWithAddButton")
	},
	fn: function() {
		return this.a(_a.i, "NativeAdsAppNexusTwoClickAccountOnly")
	},
	cg: function() {
		return this.a(_a.i, "SuperUnsubscribe")
	},
	hX: function() {
		return this.a(_a.gs, "BookingPageShareViaTwitter")
	},
	lI: function() {
		return this.a(_a.i, "SuperSubstrateArchiveSearch")
	},
	kV: function() {
		return this.a(_a.i, "ReactPhotoHub")
	},
	e: function() {
		return this.a(_a.i, "AddinCommands")
	},
	T: function() {
		return this.a(_a.i, "ConsumerClientPeopleCard")
	},
	hW: function() {
		return this.a(_a.gr, "BookingPageShareViaFacebook")
	},
	lR: function() {
		return this.a(_a.i, "TailoredInvoiceV1_C")
	},
	bo: function() {
		return this.a(_a.i, "OwsFindPlacesGateway")
	},
	gx: function() {
		return this.a(_a.i, "SearchCacheForImplicitGroups")
	},
	jA: function() {
		return this.a(_a.i, "MCUseThumbnailApiForInlineImage")
	},
	eM: function() {
		return this.a(_a.i, "InterestingCalendarsSportPromotion")
	},
	gf: function() {
		return this.a(_a.hm, "PremiumUpsellAdBar2")
	},
	ht: function() {
		return this.a(_a.hW, "XOWAManageMailboxQuotaOption")
	},
	kK: function() {
		return this.a(_a.i, "PdfJsPreviewAsDefaultInFirefox")
	},
	eq: function() {
		return this.a(_a.i, "BootDiagnostics")
	},
	gg: function() {
		return this.a(_a.hp, "PremiumUpsellFlexPaneAdbar")
	},
	bm: function() {
		return this.a(_a.i, "OwaOnLoadNotifications")
	},
	lC: function() {
		return this.a(_a.i, "SuperAutoSuggestions_5CharGAL")
	},
	jN: function() {
		return this.a(_a.i, "MFMoreOptions_exp1")
	},
	hf: function() {
		return this.a(_a.i, "UserVoiceSuggestion")
	},
	co: function() {
		return this.a(_a.i, "XOWADownloadDomain")
	},
	lA: function() {
		return this.a(_a.i, "SubstrateSearchInstrumentation_SuggestionsPerf")
	},
	cJ: function() {
		return this.a(_a.i, "ModernGroupsListViewTimeBasedHeaders")
	},
	bg: function() {
		return this.a(_a.i, "JoinedGroupsSearch")
	},
	iA: function() {
		return this.a(_a.i, "DocCollabVisioPreview")
	},
	go: function() {
		return this.a(_a.i, "RecentActivity")
	},
	iK: function() {
		return this.a(_a.i, "ExtTrackCalendarUsage")
	},
	iR: function() {
		return this.a(_a.i, "ForceEnableBingSuggestions")
	},
	mu: function() {
		return this.a(_a.hS, "XOWAConcierge")
	},
	jb: function() {
		return this.a(_a.i, "InlinePreview")
	},
	gs: function() {
		return this.a(_a.i, "RPModernConversations")
	},
	me: function() {
		return this.a(_a.i, "TxpGriffinShareEventCall")
	},
	dm: function() {
		return this.a(_a.i, "PrankieAndFavoritesForUnifiedGroups")
	},
	iZ: function() {
		return this.a(_a.i, "HelpShiftFaqs")
	},
	eA: function() {
		return this.a(_a.i, "DisableAnimations")
	},
	ia: function() {
		return this.a(_a.i, "BookingsTrialInfo")
	},
	lc: function() {
		return this.a(_a.i, "RPFossilizedText")
	},
	bL: function() {
		return this.a(_a.i, "IrmCloudAttachments")
	},
	fQ: function() {
		return this.a(_a.i, "OwaGoogleDrive")
	},
	gk: function() {
		return this.a(_a.hv, "PremiumUpsellReadingPane")
	},
	gv: function() {
		return this.a(_a.hA, "RPSmimeEdgeExtensionInstaller")
	},
	eR: function() {
		return this.a(_a.i, "LightBoxV3")
	},
	hC: function() {
		return this.a(_a.i, "AttachmentsDualAttachEntries")
	},
	hP: function() {
		return this.a(_a.i, "BookingCustomerConsent")
	},
	mA: function() {
		return this.a(_a.i, "XOWASeparateSafeLists")
	},
	gl: function() {
		return this.a(_a.i, "PromptUnblockPopup")
	},
	dV: function() {
		return this.a(_a.hZ, "XOWAPrebidMobileOneClickNativeAds_ROW")
	},
	ck: function() {
		return this.a(_a.hH, "UnifiedGroupMaxLengths")
	},
	eL: function() {
		return this.a(_a.i, "InClientLinkFromEmailClick")
	},
	jm: function() {
		return this.a(_a.i, "LivePeopleCardsUseChatClientFallbackInsteadOfSkypePopup")
	},
	iG: function() {
		return this.a(_a.i, "EdgePromoChrome")
	},
	ep: function() {
		return this.a(_a.gt, "BookingsAria")
	},
	ce: function() {
		return this.a(_a.i, "SuperAutoSuggestionsWithGateway")
	},
	li: function() {
		return this.a(_a.i, "RPSmimeModernExtensionEdge")
	},
	fH: function() {
		return this.a(_a.i, "OwaAttachmentsSharingPermissions")
	},
	eF: function() {
		return this.a(_a.i, "ExtDisableLegacyInMouseRead")
	},
	hZ: function() {
		return this.a(_a.i, "BookingsHomePageStatistics")
	},
	cx: function() {
		return this.a(_a.i, "GroupHeaderRedesign")
	},
	bt: function() {
		return this.a(_a.i, "TailoredFeedbackTicketV1")
	},
	fk: function() {
		return this.a(_a.gO, "NativeAdsAppNexusFallbacktoBingMobile")
	},
	em: function() {
		return this.a(_a.i, "BookingMultiDay")
	},
	dc: function() {
		return this.a(_a.i, "NativeAdsUsePrebidForAppNexusOneClickDesktop")
	},
	gm: function() {
		return this.a(_a.hw, "ProxyActionsToOwsGateway")
	},
	ev: function() {
		return this.a(_a.i, "ConnectorActionCardsV1")
	},
	dx: function() {
		return this.a(_a.i, "SuperAutoReadInUnreadView")
	},
	iV: function() {
		return this.a(_a.i, "GroupsFRE_t2")
	},
	ii: function() {
		return this.a(_a.i, "CalendarTimeSuggestions")
	},
	dB: function() {
		return this.a(_a.i, "SuperNewsAndPromos")
	},
	iB: function() {
		return this.a(_a.i, "DocCollabWacSafetySwitch")
	},
	gt: function() {
		return this.a(_a.i, "RPRehydrateReparent")
	},
	iO: function() {
		return this.a(_a.i, "FindControlIncludeImplicitGroups")
	},
	kO: function() {
		return this.a(_a.i, "PreinstalledAddinTeachingUx_T1")
	},
	gV: function() {
		return this.a(_a.i, "TailoredViewInCalendarV1")
	},
	cD: function() {
		return this.a(_a.gC, "MaxConnectedAccounts")
	},
	dA: function() {
		return this.a(_a.i, "SuperFocusedAllPivot")
	},
	hA: function() {
		return this.a(_a.i, "AgendaMailIntroduction")
	},
	ku: function() {
		return this.a(_a.i, "OwaFrequentLocations")
	},
	S: function() {
		return this.a(_a.i, "ConsensusScheduling")
	},
	jY: function() {
		return this.a(_a.i, "ModernGroupsSyncDelivery")
	},
	cI: function() {
		return this.a(_a.i, "ModernGroupsLikersStringInButton")
	},
	gy: function() {
		return this.a(_a.i, "SenderAddIns")
	},
	fi: function() {
		return this.a(_a.i, "MOWAStarReadingPane")
	},
	gT: function() {
		return this.a(_a.i, "TailoredRentalCarReservationV1")
	},
	fy: function() {
		return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingMobileOneClick")
	},
	fP: function() {
		return this.a(_a.i, "OwaFacebookAttachments")
	},
	ki: function() {
		return this.a(_a.i, "OptimizedGroupsNavigation")
	},
	V: function() {
		return this.a(_a.i, "MessageSafetyReporting")
	},
	bd: function() {
		return this.a(_a.i, "UnifiedGroupsHiddenMembershipEnabledForIW")
	},
	ft: function() {
		return this.a(_a.i, "NativeAdsBingOneClickDisplayRefreshAccountOnly")
	},
	gi: function() {
		return this.a(_a.hr, "PremiumUpsellGearMenu")
	},
	bC: function() {
		return this.a(_a.i, "CalendarFeeds")
	},
	ga: function() {
		return this.a(_a.i, "OwaXRFRemoteExecute")
	},
	jZ: function() {
		return this.a(_a.i, "ModernGroupsUserSessionRefresh")
	},
	lE: function() {
		return this.a(_a.i, "SuperEmptyPost")
	},
	cl: function() {
		return this.a(_a.i, "UnifiedGroupNamingPolicy")
	},
	cA: function() {
		return this.a(_a.i, "HashtagsForCompass")
	},
	eD: function() {
		return this.a(_a.i, "EnhancedPeopleHub")
	},
	hp: function() {
		return this.a(_a.hP, "XOWAAdsYield")
	},
	lf: function() {
		return this.a(_a.i, "RPSafeLink")
	},
	cp: function() {
		return this.a(_a.i, "ActionableMessages")
	},
	db: function() {
		return this.a(_a.hc, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnly_ROW")
	},
	lX: function() {
		return this.a(_a.i, "ThirdPartyAnalytics")
	},
	lv: function() {
		return this.a(_a.i, "SmartPrefetch")
	},
	dC: function() {
		return this.a(_a.i, "SuperRestoreAction")
	},
	mt: function() {
		return this.a(_a.i, "XOWAAdsNativeAdsShowDisplay")
	},
	kh: function() {
		return this.a(_a.i, "O365ThemePanel")
	},
	s: function() {
		return this.a(_a.i, "Schedules")
	},
	ly: function() {
		return this.a(_a.i, "SubstrateSearchInstrumentation_SearchResultClicks")
	},
	bG: function() {
		return this.a(_a.i, "GroupDataCaching")
	},
	js: function() {
		return this.a(_a.i, "MCAvailableTimeRP")
	},
	la: function() {
		return this.a(_a.i, "RPAttachmentLeanPopout")
	},
	bR: function() {
		return this.a(_a.i, "ModernGroupsLikersStringInfoBar")
	},
	dd: function() {
		return this.a(_a.i, "NativeAdsUsePrebidForFireFox")
	},
	bI: function() {
		return this.a(_a.i, "GroupHeaderV3")
	},
	jf: function() {
		return this.a(_a.i, "InterestingCalendarsCalendarModulePromotion")
	},
	jV: function() {
		return this.a(_a.i, "ModernGroupsDeleteMessage")
	},
	ej: function() {
		return this.a(_a.i, "AttachmentsThumbnailViewInCompose")
	},
	fv: function() {
		return this.a(_a.i, "NativeAdsBingTwoClickAccountOnly")
	},
	cW: function() {
		return this.a(_a.gY, "NativeAdsBingTwoClickDesktopOtherOnly_Major")
	},
	gD: function() {
		return this.a(_a.i, "SplitSingleDaySchedulingGrid")
	},
	ey: function() {
		return this.a(_a.i, "ConnectorSettingsLightningCalloutEnabled")
	},
	fj: function() {
		return this.a(_a.gN, "NativeAdsAppNexusFallbacktoBingDesktop")
	},
	gA: function() {
		return this.a(_a.i, "ShowClientWatson")
	},
	bn: function() {
		return this.a(_a.i, "OwaOrganizationLinks")
	},
	bs: function() {
		return this.a(_a.i, "TailoredExperiencesV1")
	},
	dD: function() {
		return this.a(_a.i, "SuperSubstrateSearch")
	},
	fE: function() {
		return this.a(_a.hf, "OPayEndpointProd")
	},
	gN: function() {
		return this.a(_a.i, "TailoredFlightsV1")
	},
	lB: function() {
		return this.a(_a.i, "SuiteExtensionsAzureADStorage")
	},
	fR: function() {
		return this.a(_a.hj, "OWAInClientStoreDebug")
	},
	cS: function() {
		return this.a(_a.gU, "NativeAdsBingOneClickDisplayRamp")
	},
	eO: function() {
		return this.a(_a.i, "ItemAttachment")
	},
	cu: function() {
		return this.a(_a.i, "EventCoauthoring")
	},
	im: function() {
		return this.a(_a.i, "ClutterUserVoiceSurvey")
	},
	hr: function() {
		return this.a(_a.hT, "XOWAConsumerFirstRun1RM")
	},
	iH: function() {
		return this.a(_a.i, "EdgePromoFirefox")
	},
	ec: function() {
		return this.a(_a.i, "AllPublicGroupsRelevantSearch")
	},
	ch: function() {
		return this.a(_a.i, "TailoredInvoiceV1")
	},
	lz: function() {
		return this.a(_a.i, "SubstrateSearchInstrumentation_SuggestionsInteractions")
	},
	iL: function() {
		return this.a(_a.i, "ExtTrackUsage")
	},
	fr: function() {
		return this.a(_a.i, "NativeAdsBingOneClickDesktopOtherOnlyAccountOnly")
	},
	U: function() {
		return this.a(_a.i, "ConversationalSchedulingHighlight")
	},
	jC: function() {
		return this.a(_a.i, "MeetingCollabAttachmentsInPeek")
	},
	jj: function() {
		return this.a(_a.i, "LivePeopleCardsBootstrapperAriaTelemetry")
	},
	hR: function() {
		return this.a(_a.i, "BookingCustomTimeSlotInterval")
	},
	iv: function() {
		return this.a(_a.i, "ConsumerSocialConnect")
	},
	jU: function() {
		return this.a(_a.i, "ModernGroupsConversationsUseNotificationBroker")
	},
	eP: function() {
		return this.a(_a.i, "JoinedGroupsRelevantSearch")
	},
	fo: function() {
		return this.a(_a.i, "NativeAdsAppNexusTwoClickDisplayAccountOnly")
	},
	fF: function() {
		return this.a(_a.hh, "OutlookServiceOptionsManager")
	},
	lw: function() {
		return this.a(_a.i, "SubstrateSearchInstrumentation_SearchInteractions")
	},
	dM: function() {
		return this.a(_a.i, "UnifiedGroupCreationInReact")
	},
	lj: function() {
		return this.a(_a.i, "RWSelfAsYou")
	},
	kI: function() {
		return this.a(_a.i, "PALDogfoodEnforcement")
	},
	eW: function() {
		return this.a(_a.i, "LocalEvents")
	},
	iQ: function() {
		return this.a(_a.i, "FloatingTasksWidget")
	},
	kY: function() {
		return this.a(_a.i, "RelevanceGroupRankingInfoTips")
	},
	mx: function() {
		return this.a(_a.i, "XOWAHolidayCalendars")
	},
	hG: function() {
		return this.a(_a.i, "AttendeeTypeManagementInMeetingForm")
	},
	lL: function() {
		return this.a(_a.i, "SuperUseJsonNetSerializer")
	},
	eG: function() {
		return this.a(_a.i, "FindPeopleEntityFeedback")
	},
	bN: function() {
		return this.a(_a.i, "MCQuickReply")
	},
	kL: function() {
		return this.a(_a.i, "PdfPrint")
	},
	lb: function() {
		return this.a(_a.i, "RPDefaultReplyOption")
	},
	cb: function() {
		return this.a(_a.i, "SaveToOneNote")
	},
	bf: function() {
		return this.a(_a.i, "AttachmentsFilePicker")
	},
	hn: function() {
		return this.a(_a.hN, "XOWAAdsSmall")
	},
	kT: function() {
		return this.a(_a.i, "ProxyOwsPrime")
	},
	cT: function() {
		return this.a(_a.gV, "NativeAdsBingOneClickDisplayRefreshRamp")
	},
	hm: function() {
		return this.a(_a.hM, "XOWAAdsLinkedInInsightTag")
	},
	gF: function() {
		return this.a(_a.i, "SuperArchiveSearch")
	},
	is: function() {
		return this.a(_a.i, "ConnectorHoverExperienceOnHomePageControl")
	},
	mm: function() {
		return this.a(_a.i, "UnifiedGroupsPlannerLink")
	},
	ib: function() {
		return this.a(_a.i, "CalendarAgendaReminder")
	},
	gI: function() {
		return this.a(_a.i, "SuperDeletedItemsSort")
	},
	dh: function() {
		return this.a(_a.i, "OwaClientAssignLabelInComposeView")
	},
	kw: function() {
		return this.a(_a.i, "OWAInClientStoreMenuTitle2")
	},
	eS: function() {
		return this.a(_a.i, "Like")
	},
	d: function() {
		return this.a(_a.hJ, "XOWAAds")
	},
	ik: function() {
		return this.a(_a.i, "ClassicAttachmentsProgressBar")
	},
	cv: function() {
		return this.a(_a.i, "FlightAndScriptVersionOption")
	},
	jK: function() {
		return this.a(_a.i, "MFCharmSimplification")
	},
	ma: function() {
		return this.a(_a.i, "TopicBasedPeopleSuggestions")
	},
	gP: function() {
		return this.a(_a.i, "TailoredParcelDeliveryStatusV1")
	},
	cU: function() {
		return this.a(_a.gW, "NativeAdsBingOneClickRamp")
	},
	mf: function() {
		return this.a(_a.hE, "UnifiedGroupFilesFileListSize")
	},
	dP: function() {
		return this.a(_a.i, "WopiClient")
	},
	ed: function() {
		return this.a(_a.i, "AppointmentSchedulingGrid")
	},
	fG: function() {
		return this.a(_a.i, "OwaAnonymousLinks")
	},
	f: function() {
		return this.a(_a.i, "EntitySharing")
	},
	iw: function() {
		return this.a(_a.i, "ContactCleanupV2")
	},
	er: function() {
		return this.a(_a.i, "BootNetworkTrace")
	},
	cK: function() {
		return this.a(_a.i, "ModernGroupsQuickCompose")
	},
	jx: function() {
		return this.a(_a.i, "MCLinkPreviewMetadata")
	},
	g: function() {
		return this.a(_a.i, "PrefetchThrottler")
	},
	fS: function() {
		return this.a(_a.i, "OwaLightning")
	},
	hF: function() {
		return this.a(_a.i, "AttachmentViewModelRefactoring1")
	},
	dE: function() {
		return this.a(_a.i, "SuperSubstrateSearch_GWSV2")
	},
	iJ: function() {
		return this.a(_a.i, "ExtSSO")
	},
	dp: function() {
		return this.a(_a.hn, "PremiumUpsellAdBarBlock")
	},
	hd: function() {
		return this.a(_a.hF, "UnifiedGroupFilesHubMaxFilesEmail")
	},
	gd: function() {
		return this.a(_a.i, "PeopleSmartLists")
	},
	K: function() {
		return this.a(_a.gD, "MCAutoHighlights")
	},
	hl: function() {
		return this.a(_a.i, "XOWAAdsDefaultPG")
	},
	hh: function() {
		return this.a(_a.hI, "XOClientLoggingProduction")
	},
	ha: function() {
		return this.a(_a.i, "UnifiedGroupDefaultAccessTypeAsPrivate")
	},
	bl: function() {
		return this.a(_a.i, "OwaClientLinkInBodySharingTips")
	},
	kN: function() {
		return this.a(_a.i, "PersonalSchedulingPage")
	},
	lT: function() {
		return this.a(_a.i, "TailoredPropertiesInItemViewV1_T")
	},
	gM: function() {
		return this.a(_a.i, "SuperTriageTwo")
	},
	cQ: function() {
		return this.a(_a.gS, "NativeAdsAppNexusTwoClickRamp")
	},
	jt: function() {
		return this.a(_a.i, "MCHighlightAcronymsDebugMode")
	},
	jn: function() {
		return this.a(_a.i, "LivePeopleCardsUseNewApi")
	},
	N: function() {
		return this.a(_a.gH, "MCReplyWith")
	},
	gC: function() {
		return this.a(_a.i, "SPDocLinkPreview")
	},
	hQ: function() {
		return this.a(_a.i, "BookingCustomQuestions")
	},
	kq: function() {
		return this.a(_a.i, "OwaClientOwaSearchInFilePicker")
	},
	iN: function() {
		return this.a(_a.i, "Filmstrip")
	},
	kn: function() {
		return this.a(_a.i, "OwaClientConsumerGroupUX")
	},
	hw: function() {
		return this.a(_a.i, "ActiveSyncSuppressReadReceipt")
	},
	cZ: function() {
		return this.a(_a.i, "NativeAdsBingUseHeaderPrebiddingDesktopTwoClick")
	},
	r: function() {
		return this.a(_a.hk, "OwaSaveToCloudImprovements")
	},
	bi: function() {
		return this.a(_a.i, "ModernGroupsDirectDelivery")
	},
	md: function() {
		return this.a(_a.i, "TxpGriffinServiceCalls")
	},
	ke: function() {
		return this.a(_a.i, "NotificationBroker")
	},
	bY: function() {
		return this.a(_a.i, "OwaLocationWellRanking")
	},
	ks: function() {
		return this.a(_a.i, "OwaDeferrableSlabs")
	},
	lQ: function() {
		return this.a(_a.i, "TailoredFoodEstablishmentReservationV1_C")
	},
	ms: function() {
		return this.a(_a.i, "UseXAnchorMailboxHeader")
	},
	dk: function() {
		return this.a(_a.i, "OWAStoreRedirectURLToBlackForest")
	},
	hK: function() {
		return this.a(_a.i, "BasicFoodEstablishmentReservationV1")
	},
	W: function() {
		return this.a(_a.gL, "MiniMavenWidget")
	},
	fV: function() {
		return this.a(_a.i, "OwaLocationWellInferences")
	},
	kb: function() {
		return this.a(_a.i, "MSOnlineServiceProbe")
	},
	cz: function() {
		return this.a(_a.i, "HashtagsFeedbackUV")
	},
	da: function() {
		return this.a(_a.hb, "NativeAdsPrebidAppNexusOneClickDesktopOtherOnly_Major")
	},
	cE: function() {
		return this.a(_a.i, "MCHighlightsPopupV2")
	},
	kM: function() {
		return this.a(_a.i, "PeoplePanePackage2")
	},
	jo: function() {
		return this.a(_a.i, "LocalEventsFirstRun")
	},
	p: function() {
		return this.a(_a.i, "PeopleProfilePage")
	},
	gU: function() {
		return this.a(_a.i, "TailoredViewEvent")
	},
	gc: function() {
		return this.a(_a.i, "PeopleProfileWorkingWith")
	},
	cG: function() {
		return this.a(_a.i, "MeetingCollabShowLocalLiesForReplyAllAttachments")
	},
	fm: function() {
		return this.a(_a.i, "NativeAdsAppNexusOneClickDisplayAccountOnly")
	},
	O: function() {
		return this.a(_a.hy, "RequestEligibleDistributionGroups")
	},
	cj: function() {
		return this.a(_a.i, "UnifiedGroupGuestAccessLearnability")
	},
	ci: function() {
		return this.a(_a.hG, "UnifiedGroupFilesLogFileIds")
	},
	fA: function() {
		return this.a(_a.i, "O365Settings")
	},
	bB: function() {
		return this.a(_a.gu, "BookingSelfService")
	},
	jG: function() {
		return this.a(_a.i, "MentionsPlaceholderA")
	},
	kf: function() {
		return this.a(_a.i, "O365Miniatures")
	},
	hH: function() {
		return this.a(_a.i, "AutoRefreshAction")
	},
	jT: function() {
		return this.a(_a.i, "ModernGroupsCommandingBar")
	},
	c: function() {
		return this.a(_a.i, "ModernGroups")
	},
	hB: function() {
		return this.a(_a.i, "AgendaMailOptionsPage")
	},
	fX: function() {
		return this.a(_a.i, "OwaSlicedAttachments")
	},
	lr: function() {
		return this.a(_a.i, "ServiceWorker")
	},
	kr: function() {
		return this.a(_a.i, "OwaClientSharingDialogOnMailSend")
	},
	dv: function() {
		return this.a(_a.i, "StaticGroupSearchRefiner")
	},
	dW: function() {
		return this.a(_a.i, "XOWASharing")
	},
	dF: function() {
		return this.a(_a.i, "SuperSweepGreyEmailsOlderThan180Days")
	},
	lJ: function() {
		return this.a(_a.i, "SuperSweepGreyEmailsOlderThan365Days")
	},
	bD: function() {
		return this.a(_a.i, "DefaultMeetingDuration")
	},
	lO: function() {
		return this.a(_a.i, "TailoredExperiencesV1_C")
	},
	jq: function() {
		return this.a(_a.i, "LocationWellFetchAvailability")
	},
	fM: function() {
		return this.a(_a.i, "OwaClientSharingTipsWithoutSharingInfo")
	},
	kG: function() {
		return this.a(_a.i, "OwsFindMeetingTimesGateway")
	},
	C: function() {
		return this.a(_a.i, "QuickCapture")
	},
	lU: function() {
		return this.a(_a.i, "TailoredShareEventV1_C")
	},
	hS: function() {
		return this.a(_a.i, "BookingDropDownCustomQuestions")
	},
	kA: function() {
		return this.a(_a.i, "OwaLocationWellMultipleLocations")
	},
	be: function() {
		return this.a(_a.i, "UserVoiceTicketV1")
	},
	u: function() {
		return this.a(_a.i, "MentionsUX")
	},
	jg: function() {
		return this.a(_a.i, "JoinedGroupsSearchHitsCountInInboxSearchRefiner")
	},
	ho: function() {
		return this.a(_a.hO, "XOWAAdsWide")
	},
	bq: function() {
		return this.a(_a.i, "RmsV2UI")
	},
	cX: function() {
		return this.a(_a.gZ, "NativeAdsBingTwoClickDisplayRamp")
	},
	cr: function() {
		return this.a(_a.i, "AttachmentsProgressBar")
	},
	dT: function() {
		return this.a(_a.i, "XOWADeepLinkMail")
	},
	bU: function() {
		return this.a(_a.hd, "OPayEndpointDev")
	},
	eQ: function() {
		return this.a(_a.i, "JoinedGroupsSearchInInboxSearchRefiner")
	},
	jX: function() {
		return this.a(_a.i, "ModernGroupsSettingsPanel")
	},
	hD: function() {
		return this.a(_a.i, "AttachmentsSharePointDogfood")
	},
	eb: function() {
		return this.a(_a.i, "AgendaMailWeatherDisplay")
	},
	i: function() {
		return this.a(_a.i, "PerfExperiment")
	},
	iT: function() {
		return this.a(_a.i, "GroupHeaderSites")
	},
	hq: function() {
		return this.a(_a.i, "XOWAClientConnectedAccountsVnext")
	},
	kd: function() {
		return this.a(_a.i, "NewGroupFromInboxCommandBar")
	},
	ls: function() {
		return this.a(_a.i, "ShowAppCacheDiagnostic")
	},
	kW: function() {
		return this.a(_a.i, "RecentAttachmentsInFilePicker")
	},
	eo: function() {
		return this.a(_a.i, "BookingPersonalCalendars")
	},
	fl: function() {
		return this.a(_a.i, "NativeAdsAppNexusOneClickAccountOnly")
	},
	n: function() {
		return this.a(_a.i, "XOWAAdsNativeAdsInAccountOnlyFlights")
	},
	fq: function() {
		return this.a(_a.i, "NativeAdsBingOneClickAccountOnly")
	},
	fp: function() {
		return this.a(_a.i, "NativeAdsBigSwitchOff")
	},
	cN: function() {
		return this.a(_a.gP, "NativeAdsAppNexusOneClickDisplayRamp")
	},
	cL: function() {
		return this.a(_a.i, "MowaInternalFeedback")
	},
	bA: function() {
		return this.a(_a.i, "BookerModule")
	},
	iX: function() {
		return this.a(_a.i, "GroupSyncDeliveryDisabled")
	},
	kp: function() {
		return this.a(_a.i, "OwaClientOneDriveMruInFilePicker")
	},
	ln: function() {
		return this.a(_a.i, "SearchAddressListIndex")
	},
	ky: function() {
		return this.a(_a.i, "OwaLocationWellAddRoomShowsAllRoomsOption")
	},
	cy: function() {
		return this.a(_a.i, "GroupsFRE_t1")
	},
	fU: function() {
		return this.a(_a.i, "OwaLocationWellAvailability")
	},
	de: function() {
		return this.a(_a.i, "O365NFDPanel")
	},
	jS: function() {
		return this.a(_a.i, "ModernAttachments")
	},
	gL: function() {
		return this.a(_a.i, "SuperReact")
	},
	kx: function() {
		return this.a(_a.i, "OwaLocationEntityFeedback")
	},
	fK: function() {
		return this.a(_a.i, "OwaClientAttachmentSharingTips")
	},
	gB: function() {
		return this.a(_a.i, "SimpleLeftNavGroup")
	},
	cM: function() {
		return this.a(_a.i, "MOWASharingInterruptDesignV2")
	},
	v: function() {
		return this.a(_a.i, "RecipientWellPeopleIndexSearch")
	},
	jE: function() {
		return this.a(_a.i, "MeetingCollabCalendarAgendaReminder_C")
	},
	a: function(n, t) {
		if(t in this.bv) return this.bv[t];
		else {
			var i;
			return i = new n, i.Name = t, i
		}
	}
};
_a.jO.registerClass("_a.jO");
_a.cE.registerClass("_a.cE");
_a.ei.registerClass("_a.ei");
_a.cH.registerClass("_a.cH");
_a.bZ.registerClass("_a.bZ");
_a.dz.registerClass("_a.dz", _a.bZ);
_a.dh.registerClass("_a.dh", null, _a.kH);
_a.bj.registerClass("_a.bj", null, _a.eY);
_a.ey.registerClass("_a.ey");
_a.U.registerClass("_a.U");
_a.cC.registerClass("_a.cC");
_a.ds.registerClass("_a.ds");
_a.eZ.registerClass("_a.eZ");
_a.eA.registerClass("_a.eA");
_a.dg.registerClass("_a.dg");
_a.fa.registerClass("_a.fa");
_a.de.registerClass("_a.de");
_a.dZ.registerClass("_a.dZ");
_a.du.registerClass("_a.du");
_a.fV.registerClass("_a.fV", null, _a.fD);
_a.dm.registerClass("_a.dm", _j.S, IActionBase);
_a.ch.registerClass("_a.ch", null, _a.q);
_a.bo.registerClass("_a.bo", _j.S);
_a.ie.registerClass("_a.ie");
_a.dX.registerClass("_a.dX");
_a.jN.registerClass("_a.jN");
_a.ip.registerClass("_a.ip", _a.ie);
_a.ij.registerClass("_a.ij");
_a.cQ.registerClass("_a.cQ", null, _a.fB);
_a.dY.registerClass("_a.dY");
_a.eC.registerClass("_a.eC");
_a.fs.registerClass("_a.fs", null, _a.eO);
_a.jP.registerClass("_a.jP");
_a.eE.registerClass("_a.eE", _a.jP);
_a.dk.registerClass("_a.dk", _a.jP);
_a.jh.registerClass("_a.jh", _a.jP);
_a.bG.registerClass("_a.bG");
_a.dq.registerClass("_a.dq", null, _a.A);
_a.R.registerClass("_a.R");
_a.R.prototype.toString = _a.R.prototype.toString;
_a.jQ.registerClass("_a.jQ");
_a.G.registerClass("_a.G");
_a.cu.registerClass("_a.cu", null, _a.kh);
CoreFrameworkComponent.registerClass("CoreFrameworkComponent", null, _a.kg, _j.ce);
_a.eD.registerClass("_a.eD");
_a.ir.registerClass("_a.ir", _a.eC);
_a.ec.registerClass("_a.ec", _j.bY);
_a.bW.registerClass("_a.bW");
_a.is.registerClass("_a.is");
_a.f.registerClass("_a.f", _j.K);
_a.r.registerClass("_a.r", _j.S);
_a.ca.registerClass("_a.ca");
_a.dH.registerClass("_a.dH");
_a.dn.registerClass("_a.dn");
_a.dG.registerClass("_a.dG");
_a.cP.registerClass("_a.cP");
_a.dp.registerClass("_a.dp");
_a.da.registerClass("_a.da");
_a.eB.registerClass("_a.eB");
_a.cS.registerClass("_a.cS");
_a.ea.registerClass("_a.ea");
_a.bq.registerClass("_a.bq");
_a.eg.registerClass("_a.eg");
_a.dv.registerClass("_a.dv");
_a.cl.registerClass("_a.cl");
_a.fz.registerClass("_a.fz");
_a.cU.registerClass("_a.cU");
_a.dP.registerClass("_a.dP");
_a.cc.registerClass("_a.cc");
_a.dB.registerClass("_a.dB");
_a.dC.registerClass("_a.dC");
_a.bp.registerClass("_a.bp");
_a.el.registerClass("_a.el");
_a.cy.registerClass("_a.cy");
_a.en.registerClass("_a.en");
_a.ep.registerClass("_a.ep");
_a.eq.registerClass("_a.eq");
_a.bP.registerClass("_a.bP");
_a.fe.registerClass("_a.fe");
_a.jm.registerClass("_a.jm");
_a.cW.registerClass("_a.cW");
_a.fh.registerClass("_a.fh");
_a.dU.registerClass("_a.dU");
_a.fi.registerClass("_a.fi");
_a.cp.registerClass("_a.cp");
_a.dj.registerClass("_a.dj");
_a.ev.registerClass("_a.ev");
_a.cA.registerClass("_a.cA");
_a.fm.registerClass("_a.fm");
_a.fy.registerClass("_a.fy", null, _a.x, _a.e);
_a.cb.registerClass("_a.cb", null, _a.e);
_a.bX.registerClass("_a.bX");
_a.cm.registerClass("_a.cm");
_a.bm.registerClass("_a.bm", null, _a.cw);
_a.dw.registerClass("_a.dw", _a.bm);
_a.cr.registerClass("_a.cr");
_a.dy.registerClass("_a.dy");
_a.bC.registerClass("_a.bC", _a.fN.$$(_j.l));
_a.fQ.registerClass("_a.fQ", null, _a.bu);
_a.kW.registerClass("_a.kW");
_a.gd.registerClass("_a.gd", _a.ec, _j.bs, Sys.IDisposable);
_a.co.registerClass("_a.co", _a.gd);
_a.iN.registerClass("_a.iN", _a.eC);
_a.fR.registerClass("_a.fR", _a.r);
_a.fW.registerClass("_a.fW", null, _a.cL);
_a.df.registerClass("_a.df", _ff.n);
_a.df.a.registerClass("_a.df.a", _j.q);
_a.iW.registerClass("_a.iW", _j.S, _j.M, _j.bs, Sys.IDisposable, _j.cg, _a.cF);
_a.k.registerClass("_a.k", _j.S, _a.cF, _j.cg);
_a.fU.registerClass("_a.fU", null, _a.eW);
_a.F.m.registerClass("_a.F.m");
_a.em.registerClass("_a.em", null, _a.dx);
_a.er.registerClass("_a.er");
_a.eu.a.registerClass("_a.eu.a");
_a.a.registerClass("_a.a", null, _j.cr);
_a.bO.registerClass("_a.bO");
_a.br.registerClass("_a.br");
_a.jc.registerClass("_a.jc", _a.br);
_a.jd.registerClass("_a.jd", _a.br);
_a.l.registerClass("_a.l");
_a.je.registerClass("_a.je", _a.br);
_a.eo.registerClass("_a.eo", _a.bm);
_a.fd.registerClass("_a.fd");
_a.jj.registerClass("_a.jj");
_a.fZ.registerClass("_a.fZ", _a.gd, _a.S, _j.bs, Sys.IDisposable);
_a.gc.registerClass("_a.gc", null, _a.E, _a.kj);
_a.dr.registerClass("_a.dr");
_a.fl.registerClass("_a.fl");
_a.cX.registerClass("_a.cX");
_a.u.registerClass("_a.u");
_a.J.registerClass("_a.J");
_a.fk.registerClass("_a.fk", _a.br);
_a.bl.registerClass("_a.bl", _j.S);
_a.dA.registerClass("_a.dA", null, _no.h);
_a.iR.registerClass("_a.iR", _no.k);
_a.iR.prototype.toString = _no.k.prototype.toString;
_a.iS.registerClass("_a.iS", _no.k);
_a.iS.prototype.toString = _no.k.prototype.toString;
_a.lc.registerClass("_a.lc", null, _no.r);
_a.iT.registerClass("_a.iT", _a.lc);
_a.iU.registerClass("_a.iU", _a.lc);
_a.cJ.registerClass("_a.cJ");
_a.cT.registerClass("_a.cT");
_a.dI.registerClass("_a.dI");
_a.ef.registerClass("_a.ef");
_a.jV.registerClass("_a.jV");
_a.eI.registerClass("_a.eI");
_a.eK.registerClass("_a.eK");
_a.eL.registerClass("_a.eL", _a.jV);
_a.eN.registerClass("_a.eN", _a.jV);
_a.eJ.registerClass("_a.eJ");
_a.cv.registerClass("_a.cv");
_a.ck.registerClass("_a.ck", _a.jV);
_a.ed.registerClass("_a.ed");
_a.eM.registerClass("_a.eM");
_a.dd.registerClass("_a.dd");
_a.ee.registerClass("_a.ee");
_a.dJ.registerClass("_a.dJ");
_a.bL.registerClass("_a.bL");
_a.eH.registerClass("_a.eH");
OfflineDiagnostics.registerClass("OfflineDiagnostics");
_a.eR.registerClass("_a.eR");
_a.bY.registerClass("_a.bY");
_a.eT.registerClass("_a.eT", _a.bY);
_a.bx.registerClass("_a.bx", _a.bY);
_a.fJ.registerClass("_a.fJ", _a.br);
_a.eV.registerClass("_a.eV", _a.bY);
_a.bM.registerClass("_a.bM", null, _a.kC, _j.ck);
_a.z.registerClass("_a.z");
_a.K.registerClass("_a.K");
_a.bf.registerClass("_a.bf", null, _a.kD);
_a.bf.l.registerClass("_a.bf.l", null, _j.ck);
_a.bA.registerClass("_a.bA", null, _j.ck);
_a.iE.registerClass("_a.iE", _a.br);
_a.iF.registerClass("_a.iF", _a.br);
_a.jv.registerClass("_a.jv", null, _a.lA);
_a.SmimePluginFirefox.registerClass("_a.SmimePluginFirefox", _a.jv, _a.lA);
$d.registerClass("$d");
_a.Z.registerClass("_a.Z");
_a.V.registerClass("_a.V");
_a.db.registerClass("_a.db");
_a.ba.registerClass("_a.ba");
_a.d.registerClass("_a.d", null, _j.L);
_a.d.G.registerClass("_a.d.G");
_a.I.registerClass("_a.I");
_a.n.registerClass("_a.n", _j.G, _j.o, _j.p);
_a.bw.registerClass("_a.bw", _a.gd, _a.kT, _j.bs, Sys.IDisposable);
_a.dl.registerClass("_a.dl");
_a.fP.registerClass("_a.fP");
_a.bE.registerClass("_a.bE");
_a.cg.registerClass("_a.cg", _a.ec);
_a.bU.registerClass("_a.bU", _a.cg);
_a.bz.registerClass("_a.bz", _a.ec);
_a.cx.registerClass("_a.cx", _a.cg);
_a.P.registerClass("_a.P");
_a.fg.registerClass("_a.fg");
_a.bQ.registerClass("_a.bQ");
_a.T.registerClass("_a.T");
_a.di.registerClass("_a.di");
_a.bk.registerClass("_a.bk");
_a.lv.registerClass("_a.lv");
_a.es.registerClass("_a.es");
_a.lB.registerClass("_a.lB");
_a.gg.registerClass("_a.gg", _a.lB);
SyncState.registerClass("SyncState");
CalendarSyncState.registerClass("CalendarSyncState", SyncState);
MultiFolderSyncState.registerClass("MultiFolderSyncState", SyncState);
SyncFolderListItem.registerClass("SyncFolderListItem");
_a.dV.registerClass("_a.dV");
_a.cq.registerClass("_a.cq");
_a.jB.registerClass("_a.jB");
_a.i.registerClass("_a.i", _a.jB);
_a.jz.registerClass("_a.jz", _a.i);
_a.gm.registerClass("_a.gm", _a.jz);
_a.gn.registerClass("_a.gn", _a.jz);
_a.go.registerClass("_a.go", _a.jz);
_a.gp.registerClass("_a.gp", _a.jz);
_a.gq.registerClass("_a.gq", _a.jz);
_a.gr.registerClass("_a.gr", _a.jz);
_a.gs.registerClass("_a.gs", _a.jz);
_a.gt.registerClass("_a.gt", _a.jz);
_a.gu.registerClass("_a.gu", _a.jz);
_a.gv.registerClass("_a.gv", _a.jz);
_a.gw.registerClass("_a.gw", _a.jz);
_a.gx.registerClass("_a.gx", _a.jz);
_a.gy.registerClass("_a.gy", _a.jz);
_a.jA.registerClass("_a.jA", _a.jB);
_a.gz.registerClass("_a.gz", _a.jA);
_a.gA.registerClass("_a.gA", _a.jz);
_a.jy.registerClass("_a.jy", _a.jz);
_a.gB.registerClass("_a.gB", _a.jz);
_a.gC.registerClass("_a.gC", _a.jz);
_a.gD.registerClass("_a.gD", _a.jz);
_a.gE.registerClass("_a.gE", _a.jz);
_a.gF.registerClass("_a.gF", _a.jz);
_a.gG.registerClass("_a.gG", _a.jA);
_a.gH.registerClass("_a.gH", _a.jz);
_a.gI.registerClass("_a.gI", _a.jz);
_a.gJ.registerClass("_a.gJ", _a.jz);
_a.gK.registerClass("_a.gK", _a.jz);
_a.gL.registerClass("_a.gL", _a.jz);
_a.gM.registerClass("_a.gM", _a.jz);
_a.gN.registerClass("_a.gN", _a.jz);
_a.gO.registerClass("_a.gO", _a.jz);
_a.gP.registerClass("_a.gP", _a.jz);
_a.gQ.registerClass("_a.gQ", _a.jz);
_a.gR.registerClass("_a.gR", _a.jz);
_a.gS.registerClass("_a.gS", _a.jz);
_a.gT.registerClass("_a.gT", _a.jz);
_a.gU.registerClass("_a.gU", _a.jz);
_a.gV.registerClass("_a.gV", _a.jz);
_a.gW.registerClass("_a.gW", _a.jz);
_a.gX.registerClass("_a.gX", _a.jz);
_a.gY.registerClass("_a.gY", _a.jz);
_a.gZ.registerClass("_a.gZ", _a.jz);
_a.ha.registerClass("_a.ha", _a.jz);
_a.hb.registerClass("_a.hb", _a.jz);
_a.hc.registerClass("_a.hc", _a.jz);
_a.hd.registerClass("_a.hd", _a.jz);
_a.he.registerClass("_a.he", _a.jz);
_a.hf.registerClass("_a.hf", _a.jz);
_a.hg.registerClass("_a.hg", _a.jz);
_a.hh.registerClass("_a.hh", _a.jz);
_a.hi.registerClass("_a.hi", _a.jz);
_a.hj.registerClass("_a.hj", _a.jz);
_a.hk.registerClass("_a.hk", _a.jz);
_a.hl.registerClass("_a.hl", _a.jz);
_a.hm.registerClass("_a.hm", _a.jz);
_a.hn.registerClass("_a.hn", _a.jz);
_a.hp.registerClass("_a.hp", _a.jz);
_a.hq.registerClass("_a.hq", _a.jz);
_a.ho.registerClass("_a.ho", _a.jz);
_a.hr.registerClass("_a.hr", _a.jz);
_a.hs.registerClass("_a.hs", _a.jz);
_a.ht.registerClass("_a.ht", _a.jz);
_a.hu.registerClass("_a.hu", _a.jz);
_a.hv.registerClass("_a.hv", _a.jz);
_a.hw.registerClass("_a.hw", _a.jz);
_a.hx.registerClass("_a.hx", _a.jz);
_a.hy.registerClass("_a.hy", _a.jz);
_a.hz.registerClass("_a.hz", _a.jz);
_a.hA.registerClass("_a.hA", _a.jz);
_a.hB.registerClass("_a.hB", _a.jz);
_a.hC.registerClass("_a.hC", _a.jz);
_a.hD.registerClass("_a.hD", _a.jz);
_a.hE.registerClass("_a.hE", _a.jA);
_a.jC.registerClass("_a.jC", _a.jz);
_a.hF.registerClass("_a.hF", _a.jA);
_a.hG.registerClass("_a.hG", _a.jz);
_a.hH.registerClass("_a.hH", _a.jz);
_a.hI.registerClass("_a.hI", _a.jz);
_a.hJ.registerClass("_a.hJ", _a.jz);
_a.hK.registerClass("_a.hK", _a.jz);
_a.hL.registerClass("_a.hL", _a.jz);
_a.hM.registerClass("_a.hM", _a.jz);
_a.hN.registerClass("_a.hN", _a.jz);
_a.hO.registerClass("_a.hO", _a.jz);
_a.hP.registerClass("_a.hP", _a.jz);
_a.hQ.registerClass("_a.hQ", _a.jz);
_a.jD.registerClass("_a.jD", _a.jz);
_a.jE.registerClass("_a.jE", _a.jz);
_a.jF.registerClass("_a.jF", _a.jz);
_a.hR.registerClass("_a.hR", _a.jz);
_a.jG.registerClass("_a.jG", _a.jz);
_a.jH.registerClass("_a.jH", _a.jz);
_a.jI.registerClass("_a.jI", _a.jz);
_a.hS.registerClass("_a.hS", _a.jz);
_a.hT.registerClass("_a.hT", _a.jz);
_a.hU.registerClass("_a.hU", _a.jA);
_a.hV.registerClass("_a.hV", _a.jz);
_a.hW.registerClass("_a.hW", _a.jz);
_a.hX.registerClass("_a.hX", _a.jA);
_a.hY.registerClass("_a.hY", _a.jz);
_a.hZ.registerClass("_a.hZ", _a.jz);
_a.jJ.registerClass("_a.jJ", _a.jz);
_a.ia.registerClass("_a.ia", _a.jz);
_a.jK.registerClass("_a.jK", _a.jz);
_a.jL.registerClass("_a.jL", _a.jz);
_a.jM.registerClass("_a.jM", _a.jz);
_a.ib.registerClass("_a.ib");
_a.ey.a = 0;
_a.t.b = null;
_a.L.d = null;
_a.L.f = null;
_a.L.e = null;
_a.dm.a = new _a.f("State", _a.ew, _a.dm, 0);
_a.dm.b = 0;
_a.ch.a = 0;
_a.bo.b = "LastUserActivityTime";
_a.bo.a = null;
_a.j.k = 0;
_a.j.h = 0;
_a.j.p = 0;
_a.j.H = 0;
_a.j.G = 0;
_a.j.s = 0;
_a.j.bu = 0;
_a.j.bs = 0;
_a.j.bt = 0;
_a.j.bg = "";
_a.j.I = null;
_a.j.bb = null;
_a.j.t = null;
_a.j.ba = 0;
_a.j.E = {};
_a.j.i = !1;
_a.j.bh = !1;
_a.j.c = 0;
_a.j.u = 0;
_a.j.o = null;
_a.j.j = null;
_a.j.Z = null;
_a.j.f = 0;
_a.j.d = 0;
_a.j.e = 0;
_a.j.Q = 0;
_a.j.L = 0;
_a.j.M = 0;
_a.j.v = 0;
_a.j.z = 0;
_a.j.C = 0;
_a.j.R = 0;
_a.j.X = 0;
_a.j.N = 0;
_a.j.n = 0;
_a.j.bf = 0;
_a.j.bd = 0;
_a.j.be = 0;
_a.j.V = 0;
_a.j.b = null;
_a.j.q = !1;
_a.j.w = 0;
_a.j.O = !1;
_a.j.m = !1;
_a.j.K = 0;
_a.j.r = 0;
_a.j.D = 0;
_a.j.P = !1;
_a.j.W = 0;
_a.j.Y = null;
_a.j.l = !1;
_a.j.U = null;
_a.j.y = !1;
_a.j.bc = !1;
_a.j.T = 0;
_a.j.S = 0;
_a.j.x = !1;
_a.j.B = 0;
_a.j.A = 0;
_a.ce.b = {};
_a.bh.b = 0;
_a.bh.c = !1;
_a.bh.e = {};
_a.bh.a = !1;
CoreFrameworkComponent.$$cctor();
_a.eD.a = new _a.eD(0, 0, 0, 0, 0);
_a.m.f = {};
_a.m.h = {};
_a.m.g = {};
_a.dt.b = !1;
_a.ci.a = !1;
_a.ci.d = 0;
_a.ci.$$cctor();
_a.bi.c = new _a.bG(100);
_a.bi.b = !1;
_a.bi.e = {};
_a.bi.f = {};
_a.bi.g = {};
_a.bi.h = {};
_a.bi.a = 0;
_a.bW.b = null;
_a.bW.a = null;
_a.ErrorConverter.c = "errorMessage";
_a.ErrorConverter.e = "errorType";
_a.ErrorConverter.d = "errorString";
_a.ErrorConverter.a = "errorCause";
_a.ErrorConverter.b = "message";
_a.ErrorConverter.h = "name";
_a.ErrorConverter.g = "exceptionString";
_a.ErrorConverter.f = "innerException";
_a.bX.a = [];
_a.bX.b = null;
_a.v.i = null;
_a.v.h = null;
_a.v.f = null;
_a.v.e = null;
_a.bK.i = {};
_a.dw.a = {};
_a.be.a = null;
_a.be.d = null;
_a.W.i = 500;
_a.W.h = .5;
_a.W.g = null;
_a.W.f = 0;
_a.W.c = 0;
_a.W.d = 0;
_a.W.$$cctor();
_a.dy.a = new _a.dy;
_a.co.c = _a.co.b(1);
_a.co.a = _a.co.b(2);
_a.co.d = new Array(0);
_a.g.E = new _j.Q;
_a.g.I = !1;
_a.g.y = !1;
_a.g.K = !1;
_a.g.a = new _a.ch;
_a.g.d = null;
_a.g.l = new _a.cr;
_a.g.k = null;
_a.g.u = null;
_a.g.w = null;
_a.g.z = null;
_a.g.v = null;
_a.g.p = !1;
_a.g.j = !1;
_a.g.b = !1;
_a.g.r = null;
_a.g.C = !1;
_a.g.G = null;
_a.g.m = null;
_a.g.B = null;
_a.g.x = null;
_a.g.t = null;
_a.g.H = new Sys.EventHandlerList;
_a.g.o = new _a.ek;
_a.g.A = null;
_a.g.F = !1;
_a.g.q = null;
_a.g.i = !1;
_a.cj.b = null;
_a.F.d = new RegExp("\\'+", "g");
_a.F.k = new RegExp("^1$");
_a.F.u = new RegExp(".");
_a.F.t = new RegExp("^[234]$");
_a.F.l = new RegExp("^[234]$|[^1][234]$");
_a.F.x = new RegExp("^1$|[^1]1$");
_a.F.e = new _a.F.m(_a.F.x, _a.F.l);
_a.F.g = new _a.F.m(_a.F.k, _a.F.t);
_a.F.i = {
	"cs-CZ": _a.F.g,
	"sk-SK": _a.F.g,
	"sl-SI": _a.F.g,
	"uk-UA": _a.F.g,
	"pl-PL": new _a.F.m(_a.F.k, _a.F.l),
	"ru-RU": _a.F.e,
	"sr-Latn-CS": _a.F.e,
	"sr-Cyrl-CS": _a.F.e,
	"lt-LT": _a.F.e,
	"lv-LV": _a.F.e
};
_a.F.s = {
	"default": "default",
	"af-za": "af-ZA",
	"am-et": "am-ET",
	"ar-ae": "ar-AE",
	"ar-bh": "ar-BH",
	"ar-dz": "ar-DZ",
	"ar-eg": "ar-EG",
	"ar-iq": "ar-IQ",
	"ar-jo": "ar-JO",
	"ar-kw": "ar-KW",
	"ar-lb": "ar-LB",
	"ar-ly": "ar-LY",
	"ar-ma": "ar-MA",
	"ar-om": "ar-OM",
	"ar-qa": "ar-QA",
	"ar-sa": "ar-SA",
	"ar-sy": "ar-SY",
	"ar-tn": "ar-TN",
	"ar-ye": "ar-YE",
	"az-latn-az": "az-Latn-AZ",
	"be-by": "be-BY",
	"bg-bg": "bg-BG",
	"bn-bd": "bn-BD",
	"bn-in": "bn-IN",
	"bs-latn-ba": "bs-Latn-BA",
	"ca-es": "ca-ES",
	"cs-cz": "cs-CZ",
	"cy-gb": "cy-GB",
	"da-dk": "da-DK",
	"de-at": "de-AT",
	"de-ch": "de-CH",
	"de-de": "de-DE",
	"de-li": "de-LI",
	"de-lu": "de-LU",
	"el-gr": "el-GR",
	"en-029": "en-029",
	"en-au": "en-AU",
	"en-bz": "en-BZ",
	"en-ca": "en-CA",
	"en-gb": "en-GB",
	"en-ie": "en-IE",
	"en-in": "en-IN",
	"en-jm": "en-JM",
	"en-my": "en-MY",
	"en-nz": "en-NZ",
	"en-ph": "en-PH",
	"en-sg": "en-SG",
	"en-tt": "en-TT",
	"en-us": "en-US",
	"en-za": "en-ZA",
	"en-zw": "en-ZW",
	"es-ar": "es-AR",
	"es-bo": "es-BO",
	"es-cl": "es-CL",
	"es-co": "es-CO",
	"es-cr": "es-CR",
	"es-do": "es-DO",
	"es-ec": "es-EC",
	"es-es": "es-ES",
	"es-gt": "es-GT",
	"es-hn": "es-HN",
	"es-mx": "es-MX",
	"es-ni": "es-NI",
	"es-pa": "es-PA",
	"es-pe": "es-PE",
	"es-pr": "es-PR",
	"es-py": "es-PY",
	"es-sv": "es-SV",
	"es-us": "es-US",
	"es-uy": "es-UY",
	"es-ve": "es-VE",
	"et-ee": "et-EE",
	"eu-es": "eu-ES",
	"fa-ir": "fa-IR",
	"fi-fi": "fi-FI",
	"fil-ph": "fil-PH",
	"fr-be": "fr-BE",
	"fr-ca": "fr-CA",
	"fr-ch": "fr-CH",
	"fr-fr": "fr-FR",
	"fr-lu": "fr-LU",
	"fr-mc": "fr-MC",
	"ga-ie": "ga-IE",
	"gl-es": "gl-ES",
	"gu-in": "gu-IN",
	"ha-latn-ng": "ha-Latn-NG",
	"he-il": "he-IL",
	"hi-in": "hi-IN",
	"hr-ba": "hr-BA",
	"hr-hr": "hr-HR",
	"hu-hu": "hu-HU",
	"hy-am": "hy-AM",
	"id-id": "id-ID",
	"is-is": "is-IS",
	"it-ch": "it-CH",
	"it-it": "it-IT",
	"ja-jp": "ja-JP",
	"ka-ge": "ka-GE",
	"kk-kz": "kk-KZ",
	"km-kh": "km-KH",
	"kn-in": "kn-IN",
	"ko-kr": "ko-KR",
	"lb-lu": "lb-LU",
	"lt-lt": "lt-LT",
	"lv-lv": "lv-LV",
	"mk-mk": "mk-MK",
	"ml-in": "ml-IN",
	"mn-mn": "mn-MN",
	"mr-in": "mr-IN",
	"ms-bn": "ms-BN",
	"mt-mt": "mt-MT",
	"ms-my": "ms-MY",
	"nb-no": "nb-NO",
	"ne-np": "ne-NP",
	"nl-be": "nl-BE",
	"nl-nl": "nl-NL",
	"nn-no": "nn-NO",
	"or-in": "or-IN",
	"pl-pl": "pl-PL",
	"pt-br": "pt-BR",
	"pt-pt": "pt-PT",
	"ro-ro": "ro-RO",
	"ru-ru": "ru-RU",
	"si-lk": "si-LK",
	"sk-sk": "sk-SK",
	"sl-si": "sl-SI",
	"sq-al": "sq-AL",
	"sr-cyrl-cs": "sr-Cyrl-CS",
	"sr-latn-cs": "sr-Latn-CS",
	"sv-fi": "sv-FI",
	"sv-se": "sv-SE",
	"sw-ke": "sw-KE",
	"ta-in": "ta-IN",
	"te-in": "te-IN",
	"th-th": "th-TH",
	"tr-tr": "tr-TR",
	"uk-ua": "uk-UA",
	"ur-pk": "ur-PK",
	"vi-vn": "vi-VN",
	"zh-cn": "zh-CN",
	"zh-hk": "zh-HK",
	"zh-mo": "zh-MO",
	"zh-sg": "zh-SG",
	"zh-tw": "zh-TW"
};
_a.F.j = {
	"default": !0,
	en: !0,
	"am-ET": !0,
	"bg-BG": !0,
	"bn-IN": !0,
	"ca-ES": !0,
	"cz-CZ": !0,
	"cy-GB": !0,
	"da-DK": !0,
	"de-DE": !0,
	"el-GR": !0,
	"en-029": !0,
	"en-AU": !0,
	"en-BZ": !0,
	"en-CA": !0,
	"en-GB": !0,
	"en-IE": !0,
	"en-IN": !0,
	"en-JM": !0,
	"en-MY": !0,
	"en-NZ": !0,
	"en-PH": !0,
	"en-SG": !0,
	"en-TT": !0,
	"en-US": !0,
	"en-ZA": !0,
	"en-ZW": !0,
	"es-ES": !0,
	"es-MX": !0,
	"et-EE": !0,
	"eu-ES": !0,
	"fi-FI": !0,
	"fr-BE": !0,
	"fr-CA": !0,
	"fr-CH": !0,
	"fr-FR": !0,
	"fr-LU": !0,
	"fr-MC": !0,
	"gl-ES": !0,
	"gu-IN": !0,
	"hi-IN": !0,
	"hr-HR": !0,
	"hu-HU": !0,
	"id-ID": !0,
	"is-IS": !0,
	"it-IT": !0,
	"kk-KZ": !0,
	"kn-IN": !0,
	"lt-LT": !0,
	"lv-LV": !0,
	"ms-MY": !0,
	"nb-NO": !0,
	"nl-NL": !0,
	"pl-PL": !0,
	"pt-BR": !0,
	"pt-PT": !0,
	"ro-RO": !0,
	"ru-RU": !0,
	"sk-SK": !0,
	"sl-SI": !0,
	"sv-SE": !0,
	"ta-IN": !0,
	"te-IN": !0,
	"tr-TR": !0,
	"uk-UA": !0,
	"vi-VN": !0
};
_a.F.A = {
	"ar-SA": !0,
	"fa-IR": !0,
	"he-IL": !0,
	"ur-PK": !0
};
_a.F.z = {
	"fil-PH": !0,
	"ja-JP": !0,
	"ko-KR": !0,
	"ml-IN": !0,
	"mr-IN": !0,
	"or-IN": !0,
	"sw-KE": !0,
	"th-TH": !0,
	"zh-CN": !0,
	"zh-HK": !0,
	"zh-SG": !0,
	"zh-TW": !0
};
_a.F.f = {
	"ja-JP": !0,
	"ko-KR": !0,
	"tr-TR": !0
};
_a.F.o = {
	"ja-JP": "d'日'",
	"ko-KR": "d'일'",
	"zh-CN": "d'日'",
	"zh-HK": "d'日'",
	"zh-MO": "d'日'",
	"zh-SG": "d'日'",
	"zh-TW": "d'日'"
};
_a.F.q = {
	"ja-JP": "yyyy'年'",
	"ko-KR": "yyyy'년'",
	"zh-CN": "yyyy'年'",
	"zh-HK": "yyyy'年'",
	"zh-MO": "yyyy'年'",
	"zh-SG": "yyyy'年'",
	"zh-TW": "yyyy'年'"
};
_a.F.n = {
	"ja-JP": "MMM'月'd'日'",
	"ko-KR": "MMM'월' d'일'",
	"zh-CN": "M'月'd'日'",
	"zh-HK": "M'月'd'日'",
	"zh-MO": "M'月'd'日'",
	"zh-SG": "M'月'd'日'",
	"zh-TW": "M'月'd'日'"
};
_a.F.r = {
	"zh-CN": "yyyy'年'M'月'",
	"zh-HK": "yyyy'年'M'月'",
	"zh-MO": "yyyy'年'M'月'",
	"zh-SG": "yyyy'年'M'月'",
	"zh-TW": "yyyy'年'M'月'"
};
_a.F.p = {
	"zh-CN": "d'日'",
	"zh-HK": "d'日'",
	"zh-MO": "d'日'",
	"zh-SG": "d'日'",
	"zh-TW": "d'日'",
	"ja-JP": "d'日'",
	"ko-KR": "d'일'"
};
_a.F.w = {
	hi: !0,
	th: !0,
	ar: !0,
	gu: !0,
	fa: !0,
	he: !0,
	hi: !0,
	ja: !0,
	kn: !0,
	ko: !0,
	ml: !0,
	mr: !0,
	or: !0,
	ur: !0,
	ta: !0,
	te: !0,
	vi: !0,
	zh: !0,
	"zh-hans": !0,
	"zh-hant": !0
};
_a.F.v = {
	"fil-PH": !0,
	"he-IL": !0,
	"ml-IN": !0,
	"or-IN": !0,
	"sw-KE": !0,
	"th-TH": !0,
	"ur-PK": !0,
	"zh-SG": !0
};
_a.F.a = {
	"ja-JP": !0,
	"ko-KR": !0,
	"zh-CN": !0,
	"zh-HK": !0,
	"zh-MO": !0,
	"zh-SG": !0,
	"zh-TW": !0
};
_a.F.y = {
	en: !0,
	bg: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fil: !0,
	fr: !0,
	gl: !0,
	id: !0,
	is: !0,
	it: !0,
	kk: !0,
	ms: !0,
	nl: !0,
	nn: !0,
	"nn-no": !0,
	nb: !0,
	no: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	"sr-Cyrl": !0,
	"sr-cyrl": !0,
	"sr-Latn": !0,
	sr: !0,
	sv: !0,
	sw: !0,
	tr: !0,
	uk: !0
};
_a.H.b = null;
_a.a.dI = new _a.a(0);
_a.a.C = new _a.a(1);
_a.a.cZ = new _a.a(486);
_a.a.dJ = new _a.a(247);
_a.a.en = new _a.a(2);
_a.a.cc = new _a.a(3);
_a.a.bL = new _a.a(4);
_a.a.bR = new _a.a(5);
_a.a.eo = new _a.a(6);
_a.a.ep = new _a.a(7);
_a.a.eq = new _a.a(8);
_a.a.c = new _a.a(9);
_a.a.m = new _a.a(10);
_a.a.dM = new _a.a(11);
_a.a.es = new _a.a(12);
_a.a.Z = new _a.a(283);
_a.a.b = new _a.a(13);
_a.a.et = new _a.a(14);
_a.a.dm = new _a.a(410);
_a.a.n = new _a.a(15);
_a.a.ex = new _a.a(16);
_a.a.dp = new _a.a(17);
_a.a.dN = new _a.a(18);
_a.a.l = new _a.a(19);
_a.a.gf = new _a.a(20);
_a.a.V = new _a.a(23);
_a.a.ce = new _a.a(24);
_a.a.ez = new _a.a(25);
_a.a.ba = new _a.a(26);
_a.a.U = new _a.a(27);
_a.a.cN = new _a.a(28);
_a.a.S = new _a.a(29);
_a.a.dd = new _a.a(470);
_a.a.N = new _a.a(30);
_a.a.dO = new _a.a(34);
_a.a.eB = new _a.a(35);
_a.a.eC = new _a.a(36);
_a.a.gj = new _a.a(39);
_a.a.eF = new _a.a(40);
_a.a.eG = new _a.a(41);
_a.a.eH = new _a.a(42);
_a.a.gv = new _a.a(301);
_a.a.ds = new _a.a(43);
_a.a.dt = new _a.a(44);
_a.a.cE = new _a.a(255);
_a.a.eJ = new _a.a(45);
_a.a.gl = new _a.a(46);
_a.a.i = new _a.a(47);
_a.a.eM = new _a.a(48);
_a.a.eN = new _a.a(49);
_a.a.dT = new _a.a(298);
_a.a.Y = new _a.a(302);
_a.a.v = new _a.a(50);
_a.a.T = new _a.a(51);
_a.a.dU = new _a.a(488);
_a.a.cP = new _a.a(268);
_a.a.dV = new _a.a(406);
_a.a.eO = new _a.a(52);
_a.a.go = new _a.a(277);
_a.a.eP = new _a.a(53);
_a.a.eQ = new _a.a(54);
_a.a.eR = new _a.a(55);
_a.a.dW = new _a.a(56);
_a.a.eU = new _a.a(57);
_a.a.cv = new _a.a(291);
_a.a.eV = new _a.a(59);
_a.a.G = new _a.a(60);
_a.a.cq = new _a.a(454);
_a.a.cQ = new _a.a(61);
_a.a.cG = new _a.a(62);
_a.a.bT = new _a.a(63);
_a.a.eY = new _a.a(64);
_a.a.df = new _a.a(271);
_a.a.cb = new _a.a(278);
_a.a.bu = new _a.a(65);
_a.a.eZ = new _a.a(66);
_a.a.a = new _a.a(67);
_a.a.bq = new _a.a(68);
_a.a.dv = new _a.a(69);
_a.a.fb = new _a.a(70);
_a.a.cj = new _a.a(71);
_a.a.fi = new _a.a(72);
_a.a.E = new _a.a(73);
_a.a.fk = new _a.a(74);
_a.a.bx = new _a.a(75);
_a.a.bC = new _a.a(76);
_a.a.cx = new _a.a(77);
_a.a.ec = new _a.a(79);
_a.a.gy = new _a.a(80);
_a.a.j = new _a.a(81);
_a.a.Q = new _a.a(84);
_a.a.fn = new _a.a(85);
_a.a.dz = new _a.a(86);
_a.a.dA = new _a.a(499);
_a.a.fo = new _a.a(87);
_a.a.y = new _a.a(88);
_a.a.fq = new _a.a(89);
_a.a.r = new _a.a(90);
_a.a.o = new _a.a(91);
_a.a.z = new _a.a(92);
_a.a.gB = new _a.a(253);
_a.a.ft = new _a.a(93);
_a.a.fu = new _a.a(94);
_a.a.gD = new _a.a(95);
_a.a.F = new _a.a(96);
_a.a.I = new _a.a(97);
_a.a.bb = new _a.a(460);
_a.a.eg = new _a.a(481);
_a.a.fy = new _a.a(98);
_a.a.cm = new _a.a(99);
_a.a.ed = new _a.a(100);
_a.a.fA = new _a.a(101);
_a.a.fB = new _a.a(102);
_a.a.fC = new _a.a(103);
_a.a.bc = new _a.a(104);
_a.a.g = new _a.a(105);
_a.a.cH = new _a.a(106);
_a.a.dh = new _a.a(107);
_a.a.gE = new _a.a(108);
_a.a.bP = new _a.a(109);
_a.a.gF = new _a.a(110);
_a.a.dB = new _a.a(111);
_a.a.fF = new _a.a(112);
_a.a.by = new _a.a(304);
_a.a.fI = new _a.a(113);
_a.a.fJ = new _a.a(114);
_a.a.fK = new _a.a(115);
_a.a.di = new _a.a(116);
_a.a.cn = new _a.a(117);
_a.a.fL = new _a.a(118);
_a.a.dC = new _a.a(119);
_a.a.fN = new _a.a(120);
_a.a.gI = new _a.a(121);
_a.a.fR = new _a.a(122);
_a.a.gJ = new _a.a(123);
_a.a.fS = new _a.a(124);
_a.a.fT = new _a.a(125);
_a.a.fU = new _a.a(126);
_a.a.fV = new _a.a(127);
_a.a.cY = new _a.a(485);
_a.a.cA = new _a.a(128);
_a.a.gK = new _a.a(129);
_a.a.de = new _a.a(130);
_a.a.dH = new _a.a(133);
_a.a.fZ = new _a.a(134);
_a.a.cJ = new _a.a(135);
_a.a.p = new _a.a(136);
_a.a.q = new _a.a(137);
_a.a.bY = new _a.a(243);
_a.a.bX = new _a.a(295);
_a.a.bW = new _a.a(138);
_a.a.bh = new _a.a(139);
_a.a.bB = new _a.a(140);
_a.a.u = new _a.a(141);
_a.a.bl = new _a.a(142);
_a.a.fv = new _a.a(143);
_a.a.B = new _a.a(144);
_a.a.eK = new _a.a(145);
_a.a.d = new _a.a(146);
_a.a.bk = new _a.a(147);
_a.a.bo = new _a.a(405);
_a.a.bj = new _a.a(459);
_a.a.gt = new _a.a(148);
_a.a.w = new _a.a(149);
_a.a.cr = new _a.a(150);
_a.a.X = new _a.a(151);
_a.a.bi = new _a.a(152);
_a.a.fp = new _a.a(153);
_a.a.dP = new _a.a(154);
_a.a.dD = new _a.a(155);
_a.a.cw = new _a.a(156);
_a.a.dQ = new _a.a(157);
_a.a.dx = new _a.a(158);
_a.a.P = new _a.a(159);
_a.a.gs = new _a.a(160);
_a.a.cU = new _a.a(161);
_a.a.fs = new _a.a(270);
_a.a.fx = new _a.a(162);
_a.a.bU = new _a.a(163);
_a.a.eA = new _a.a(164);
_a.a.ek = new _a.a(165);
_a.a.bQ = new _a.a(166);
_a.a.fz = new _a.a(167);
_a.a.ct = new _a.a(168);
_a.a.gh = new _a.a(169);
_a.a.ey = new _a.a(170);
_a.a.em = new _a.a(171);
_a.a.cC = new _a.a(172);
_a.a.fg = new _a.a(173);
_a.a.bG = new _a.a(174);
_a.a.gp = new _a.a(175);
_a.a.fh = new _a.a(176);
_a.a.ew = new _a.a(177);
_a.a.fr = new _a.a(178);
_a.a.cB = new _a.a(179);
_a.a.dk = new _a.a(496);
_a.a.gi = new _a.a(180);
_a.a.cz = new _a.a(181);
_a.a.cl = new _a.a(182);
_a.a.gz = new _a.a(183);
_a.a.cO = new _a.a(184);
_a.a.fM = new _a.a(185);
_a.a.be = new _a.a(186);
_a.a.O = new _a.a(187);
_a.a.ga = new _a.a(188);
_a.a.gL = new _a.a(189);
_a.a.dr = new _a.a(190);
_a.a.fX = new _a.a(191);
_a.a.gC = new _a.a(192);
_a.a.bK = new _a.a(194);
_a.a.co = new _a.a(195);
_a.a.gA = new _a.a(196);
_a.a.W = new _a.a(197);
_a.a.eI = new _a.a(198);
_a.a.fl = new _a.a(269);
_a.a.fj = new _a.a(199);
_a.a.gG = new _a.a(200);
_a.a.cg = new _a.a(201);
_a.a.ev = new _a.a(202);
_a.a.fO = new _a.a(203);
_a.a.dy = new _a.a(204);
_a.a.bF = new _a.a(205);
_a.a.cK = new _a.a(206);
_a.a.ff = new _a.a(207);
_a.a.cF = new _a.a(208);
_a.a.dK = new _a.a(209);
_a.a.dG = new _a.a(210);
_a.a.gu = new _a.a(211);
_a.a.cS = new _a.a(212);
_a.a.dL = new _a.a(213);
_a.a.fY = new _a.a(214);
_a.a.ch = new _a.a(215);
_a.a.eS = new _a.a(216);
_a.a.cd = new _a.a(276);
_a.a.fD = new _a.a(217);
_a.a.gr = new _a.a(218);
_a.a.dj = new _a.a(219);
_a.a.gg = new _a.a(220);
_a.a.k = new _a.a(221);
_a.a.fE = new _a.a(292);
_a.a.ge = new _a.a(222);
_a.a.bw = new _a.a(223);
_a.a.bt = new _a.a(455);
_a.a.K = new _a.a(472);
_a.a.D = new _a.a(264);
_a.a.ej = new _a.a(266);
_a.a.dZ = new _a.a(244);
_a.a.eb = new _a.a(224);
_a.a.h = new _a.a(225);
_a.a.J = new _a.a(465);
_a.a.bD = new _a.a(226);
_a.a.dl = new _a.a(227);
_a.a.dn = new _a.a(228);
_a.a.dw = new _a.a(229);
_a.a.gm = new _a.a(230);
_a.a.dE = new _a.a(231);
_a.a.f = new _a.a(232);
_a.a.x = new _a.a(233);
_a.a.dY = new _a.a(299);
_a.a.gq = new _a.a(309);
_a.a.bZ = new _a.a(400);
_a.a.eT = new _a.a(267);
_a.a.gx = new _a.a(234);
_a.a.bA = new _a.a(236);
_a.a.gH = new _a.a(238);
_a.a.M = new _a.a(275);
_a.a.bd = new _a.a(239);
_a.a.cs = new _a.a(258);
_a.a.bE = new _a.a(240);
_a.a.cy = new _a.a(404);
_a.a.t = new _a.a(241);
_a.a.eL = new _a.a(242);
_a.a.bf = new _a.a(248);
_a.a.gw = new _a.a(245);
_a.a.fP = new _a.a(246);
_a.a.cT = new _a.a(249);
_a.a.cR = new _a.a(273);
_a.a.cu = new _a.a(274);
_a.a.er = new _a.a(257);
_a.a.dq = new _a.a(250);
_a.a.fH = new _a.a(251);
_a.a.cL = new _a.a(252);
_a.a.L = new _a.a(254);
_a.a.el = new _a.a(256);
_a.a.bH = new _a.a(259);
_a.a.s = new _a.a(260);
_a.a.gk = new _a.a(474);
_a.a.fw = new _a.a(261);
_a.a.eh = new _a.a(262);
_a.a.ea = new _a.a(263);
_a.a.fW = new _a.a(272);
_a.a.eX = new _a.a(280);
_a.a.cI = new _a.a(279);
_a.a.bv = new _a.a(282);
_a.a.eE = new _a.a(287);
_a.a.da = new _a.a(281);
_a.a.eD = new _a.a(284);
_a.a.fa = new _a.a(286);
_a.a.eW = new _a.a(285);
_a.a.gb = new _a.a(288);
_a.a.gc = new _a.a(289);
_a.a.dF = new _a.a(290);
_a.a.gn = new _a.a(293);
_a.a.cW = new _a.a(296);
_a.a.du = new _a.a(297);
_a.a.ci = new _a.a(300);
_a.a.db = new _a.a(303);
_a.a.e = new _a.a(305);
_a.a.bN = new _a.a(308);
_a.a.bO = new _a.a(450);
_a.a.cX = new _a.a(493);
_a.a.ei = new _a.a(494);
_a.a.fQ = new _a.a(495);
_a.a.bs = new _a.a(306);
_a.a.fc = new _a.a(471);
_a.a.bS = new _a.a(452);
_a.a.dX = new _a.a(490);
_a.a.ee = new _a.a(453);
_a.a.ck = new _a.a(307);
_a.a.gd = new _a.a(310);
_a.a.bz = new _a.a(402);
_a.a.fG = new _a.a(407);
_a.a.bn = new _a.a(408);
_a.a.dc = new _a.a(451);
_a.a.eu = new _a.a(412);
_a.a.cp = new _a.a(457);
_a.a.dS = new _a.a(463);
_a.a.R = new _a.a(411);
_a.a.br = new _a.a(458);
_a.a.bm = new _a.a(461);
_a.a.fm = new _a.a(462);
_a.a.bg = new _a.a(464);
_a.a.cV = new _a.a(456);
_a.a.bp = new _a.a(466);
_a.a.cf = new _a.a(473);
_a.a.bM = new _a.a(475);
_a.a.fe = new _a.a(476);
_a.a.bI = new _a.a(477);
_a.a.H = new _a.a(480);
_a.a.fd = new _a.a(482);
_a.a.ca = new _a.a(483);
_a.a.bV = new _a.a(484);
_a.a.cM = new _a.a(487);
_a.a.A = new _a.a(489);
_a.a.cD = new _a.a(491);
_a.a.bJ = new _a.a(492);
_a.a.ef = new _a.a(497);
_a.a.dg = new _a.a(498);
_a.bD.b = null;
_a.O.d = {};
_a.O.c = {};
_a.eo.a = _a.eo.b();
_a.Y.b = null;
_a.X.e = "/" + _a.M.toString(2) + "/browsegroups";
_a.cX.a = {};
_a.cX.b = 0;
_a.J.b = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2177, 129, 1, 1, 129, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2432, 536, 518, 536, 536, 536, 536, 792, 774, 774, 536, 792, 774, 792, 778, 788, 888, 888, 888, 888, 888, 888, 888, 888, 888, 888, 262, 518, 518, 788, 518, 788, 518, 1880, 1880, 1880, 1880, 1880, 1880, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 518, 518, 518, 536, 792, 536, 1880, 1880, 1880, 1880, 1880, 1880, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 536, 536, 536, 536, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
_a.cz.a = -1;
_a.N.a = null;
_a.N.f = null;
_a.N.e = 0;
_a.N.n = null;
_a.N.c = null;
_a.N.b = null;
_a.N.o = null;
_a.N.h = null;
_a.N.i = null;
_a.N.j = null;
_a.N.k = null;
_a.N.l = null;
_a.N.m = null;
_a.N.$$cctor();
_a.bn.b = null;
_a.bn.a = null;
_a.cD.a = [];
_a.bB.g = "FL.RP";
_a.bB.f = "FL.MC";
_a.bB.a = "FL.GN";
_a.bB.e = "FL.GLSD";
_a.bB.d = "FL.BES";
_a.bB.c = "FL.BEL";
_a.bB.b = "FL.GUCL";
_a.bY.f = "te";
_a.bY.e = "s";
_a.bY.c = "se";
_a.bY.a = "en";
_a.bY.d = "st";
_a.bY.b = {};
_a.eT.a = "owaclienterror";
_a.bx.a = "ec";
_a.bx.b = "ed";
_a.eV.a = "Usage";
_a.y.a = new _a.eb(_a.g.l, 1);
_a.y.b = new _a.eb(_a.g.l, 1);
_a.y.f = new _j.q;
_a.y.e = null;
_a.b.t = 3e5;
_a.b.f = "Abandoned";
_a.b.B = new RegExp("^[a-zA-Z0-9\\._]{0,64}$");
_a.b.i = null;
_a.b.h = null;
_a.b.p = null;
_a.b.l = null;
_a.b.r = 0;
_a.b.n = 0;
_a.b.w = new _a.z("Warm");
_a.b.u = new _a.z("Cold");
_a.b.v = new _a.z("Ready");
_a.b.k = null;
_a.b.j = null;
_a.b.q = null;
_a.b.$$cctor();
_a.o.d = {};
_a.dL.a = new _a.dL;
_a.bf.a = [];
_a.bf.i = _a.dL.a;
_a.bf.e = {};
_a.bf.h = {};
_a.bf.g = !1;
_a.bf.f = null;
_a.bA.c = 0;
_a.dM.a = new _a.dM;
_a.fn.a = 0;
_a.bg.c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
_a.B.j = "<BR>";
_a.B.f = "<P style='margin-top:0;margin-bottom:0'>";
_a.B.d = "</P>";
_a.B.r = '<a href="{0}" target="_blank">{1}</a>{2}';
_a.B.q = "WWW";
_a.B.C = _a.B.q.toLowerCase();
_a.B.u = "http://";
_a.B.s = _a.B.d + _a.B.f;
_a.B.I = _a.B.f + _a.B.d;
_a.B.i = new RegExp("<BR([^>]*)>", "gi");
_a.B.n = new RegExp("\r|\n", "g");
_a.B.g = new RegExp("\n", "g");
_a.B.y = new RegExp("\r", "g");
_a.B.k = new RegExp("<DIV([^>]*)>", "gi");
_a.B.m = new RegExp("</P>", "gi");
_a.B.l = new RegExp("</li>", "gi");
_a.B.z = new RegExp(" (?= )", "g");
_a.B.x = new RegExp(_a.B.c(), "gi");
_a.B.B = new RegExp("(https://[^\\s]+|http://[^\\s]+|www[.][^\\s]+)", "gi");
_a.B.v = new RegExp("(<img[^>]*\\s)src(.?=.?['\\u0022])", "gi");
_a.B.w = new RegExp("<BR([^>]*)></P>", "gi");
_a.B.A = {
	",": ",",
	";": ";",
	"!": "!",
	"?": "?",
	".": "."
};
_a.B.o = {};
_a.bJ.a = null;
_a.bJ.b = ["\\", "/", "[", "]", "(", ")", "{", "}", "?", "+", "*", "|", ".", "^", "$"];
_a.bJ.$$cctor();
_a.w.j = null;
_a.w.l = new RegExp("\\+", "g");
_a.w.r = _a.a.dG;
_a.cB.a = !0;
_a.bt.a = !1;
_a.p.I = null;
_a.p.e = null;
_a.p.u = "4";
_a.p.z = "0600";
_a.p.L = 4;
_a.p.a = !1;
_a.p.q = !1;
_a.p.r = !1;
_a.p.b = null;
_a.p.m = -1;
_a.p.w = -1;
_a.p.k = -1;
_a.p.n = -1;
_a.p.x = -1;
_a.p.t = {};
_a.p.H = null;
_a.p.y = null;
_a.p.i = null;
_a.p.$$cctor();
_a.D.f = new RegExp('\\sSRC\\s*=\\s*"[\\s\\S]+?"', "im");
_a.D.e = new RegExp('<IMG[^>]+?ORIGINALSRC\\s*=\\s*"[\\s\\S]+?"[\\s\\S]*?>', "gim");
_a.D.h = new RegExp('\\sONLOAD\\s*=\\s*"[\\s\\S]+?"', "im");
_a.D.i = new RegExp('\\sORIGINALSRC\\s*=\\s*"', "im");
_a.D.j = new RegExp("[xy]", "g");
_a.D.k = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
_a.bR.a = null;
_a.bd.d = null;
_a.bd.c = !1;
_a.bd.e = _a.bd.h;
_a.d.g = new _a.d(-271821, 3, 20, 0, 0, 0, 0, 0);
_a.d.q = new _a.d(275760, 8, 13, 0, 0, 0, 0, 0);
_a.d.cg = new RegExp("^(\\d{4})-{0,1}(\\d{2})-{0,1}(\\d{2})(T(\\d{2}):{0,1}(\\d{2}){0,1}:{0,1}(\\d{2}){0,1}([,\\.](\\d{3})\\d*){0,1}){0,1}(Z|(([-\\+])(\\d{2}):?(\\d{2}))){0,1}$");
_a.d.bG = null;
_a.d.X = null;
_a.d.bx = !1;
_a.d.bo = !1;
_a.d.U = null;
_a.d.T = null;
_a.d.R = null;
_a.d.S = null;
_a.d.V = null;
_a.d.bj = null;
_a.d.bi = null;
_a.d.bd = null;
_a.d.be = null;
_a.d.bg = null;
_a.d.w = null;
_a.d.u = null;
_a.d.x = null;
_a.d.v = null;
_a.d.k = null;
_a.d.i = null;
_a.d.l = null;
_a.d.j = null;
_a.d.bf = null;
_a.d.bh = null;
_a.d.E = null;
_a.d.J = null;
_a.d.D = null;
_a.d.I = null;
_a.d.C = null;
_a.d.F = null;
_a.d.bn = null;
_a.d.M = null;
_a.d.W = null;
_a.d.bk = null;
_a.d.bm = null;
_a.d.bl = null;
_a.d.L = null;
_a.d.$$cctor();
_a.n.b = null;
_a.bw.a = 0;
_a.cg.c = new _a.f("accept", String, _a.cg, "");
_a.cg.a = new _a.f("headers", _a.ca, _a.cg, null);
_a.cg.b = new _a.f("requestUri", _a.P, _a.cg, null);
_a.cg.d = new _a.f("timeout", Number, _a.cg, 1e5);
_a.bU.b = new _a.f("body", String, _a.bU, "");
_a.bU.c = new _a.f("contentType", String, _a.bU, "");
_a.bU.a = new _a.f("method", String, _a.bU, "GET");
_a.bz.c = new _a.f("body", String, _a.bz, null);
_a.bz.f = new _a.f("characterSet", String, _a.bz, null);
_a.bz.g = new _a.f("contentEncoding", String, _a.bz, null);
_a.bz.h = new _a.f("contentLength", Number, _a.bz, -1);
_a.bz.a = new _a.f("contentType", String, _a.bz, null);
_a.bz.b = new _a.f("headers", Object, _a.bz, null);
_a.bz.i = new _a.f("protocolVersion", String, _a.bz, null);
_a.bz.d = new _a.f("statusCode", _ff.C, _a.bz, null);
_a.bz.e = new _a.f("statusDescription", String, _a.bz, null);
_a.cx.a = new _a.f("formData", _a.ca, _a.cx, null);
_a.cx.b = new _a.f("formFiles", _a.ca, _a.cx, null);
_a.fb.a = "";
_a.P.g = String.format("{0}.{0}.{0}.{0}", "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])");
_a.P.h = String.format("(?:{0}|{1}|{2})*", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
_a.P.f = String.format("({0}|{1})", _a.P.g, _a.P.h);
_a.P.i = String.format("((?:{0}|{1}|{2}|:)*)", "[A-Za-z0-9-\\._~]", "%[A-Fa-f0-9][A-Fa-f0-9]", "[!\\$&'\\(\\)\\*\\+,;=]");
_a.P.e = String.format("^(?:{0}@)?{1}(?::([0-9]*))?$", _a.P.i, _a.P.f);
_a.P.c = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
_a.P.d = new RegExp(_a.P.e);
_a.T.a = new _a.T("id");
MultiFolderSyncState.a = "##MultiFolderSyncState##";
SyncState.a = "none";
Type.registerNamespace("_z");
_z.a = function() {};
_z.a.registerInterface("_z.a");
_z.b = function() {};
_z.b.b = function(n, t, i) {
	var et = new _a.ce;
	et.g();
	var tt = _a.bm.a();
	var ft = new _a.bB(tt);
	var it = _j.n.b(_a.a.by, 0, "BootStrap");
	var r = new _j.bK;
	var a = new _a.fs;
	var b = new _j.N(window.navigator.userAgent);
	var nt = n.clientSettings;
	var e = new _a.cb(nt);
	var k = new _a.ft;
	var rt = new _a.ik(e, k);
	var u = new _a.dq(n, a, e, i);
	var s = new _j.j;
	_a.g.r = s;
	_a.g.c().b(_a.cA, function(n) {
		ft.g()
	});
	var h = _j.m.a();
	var p = new _a.dS(u, h, b, window);
	var w = window.matchMedia ? window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 2)") : null;
	var ut = !!w && w.matches;
	var y = new _a.dF(u.bg, u.bw, u.bx, _a.n.a(), h, ut, window);
	var g = _dtl.f(h, u.S);
	var f = new _j.be(t, p, y, new _j.bS(_a.t.c, function(n) {
		n.b(r, a, u)
	}, function(n) {
		return r.g(n)
	}, s, u.P, u.X), s, g, u.bf.toLowerCase());
	if(u.R && e.b.cs().Enabled && !_a.g.j && !e.b.i().Enabled) {
		f.m("deferredwebservices");
		f.m("nonbootwebservices");
		f.m("deferredboot");
		var o = _a.cZ.b(u.L);
		if(o.startsWith("/mail")) {
			f.m("textboys");
			f.m("peoplecore");
			f.m("readingpane");
			f.m("mailcompose")
		} else o.startsWith("/calendar") ? f.m("calendarsurface") : o.startsWith("/group") && (o.endsWith("/mail") ? f.m("moderngroupsconversation") : o.endsWith("/people") ? f.m("moderngroupspeople") : o.endsWith("/files") && f.m("files"))
	}
	_j.h.b(window.location.origin) && (window.location.origin = window.location.protocol + "//" + window.location.hostname + (_j.h.b(window.location.port) ? "" : ":" + window.location.port));
	var c = _z.b.a(n, "outlookGatewayUrl", window.location.origin + "/outlookgateway");
	var v = "";
	v = e.b.kS().Enabled ? c + "/owa/" + "service.svc" : _z.b.a(n, "owaServiceUrl", "");
	var l = "";
	l = e.b.kT().Enabled ? c + "/ows" : _z.b.a(n, "owsApiUrl", window.location.origin + "/ows");
	var d = _z.b.a(n, "getCustomGetPhotoUrl", "");
	r.b(_a.fW, function() {
		return new _a.fW(v, l, c, d)
	}).b(_a.cL).a();
	r.b(_a.dq, function() {
		return u
	}).b(_a.A).a();
	r.b(_a.fs, function() {
		return a
	}).b(_a.eO).a();
	r.b(_j.Z, function() {
		return b
	}).a();
	r.b(_a.cb, function() {
		return e
	}).b(_a.e).a();
	r.b(_j.bb, function() {
		return p
	}).a();
	r.b(_j.bv, function() {
		return y
	}).a();
	r.b(_j.I, function() {
		return f
	}).a();
	r.b(_a.cK, function() {
		return k
	}).a();
	r.b(_j.j, function() {
		return s
	}).a();
	r.b(_a.cn, function() {
		return rt
	}).a();
	f.X();
	e.b.g().Enabled && (_a.g.a = new _a.ch(r.d(_a.cV)));
	if(e.b.eq().Enabled && e.b.E().Enabled && !u.L.d()) try {
		r.a(_a.eF).a(u.bc)
	} catch(ot) {}
	e.b.er().Enabled && _a.cD.c();
	_j.b.Instance = r;
	_j.n.a(it);
	return r
};
_z.b.a = function(n, t, i) {
	return t in n ? n[t].toString() : i
};

function Program() {}
Program.main = function(n, t) {
	var i = _z.b.b(n, t);
	i.a(_z.a).a();
	delete window.applicationBooting
};
Program.registerClass("Program");
Type.registerNamespace("_g");
_g.q = function() {};
_g.q.prototype = {
	OneDrivePro: 0,
	OneDriveConsumer: 1,
	Dropbox: 2,
	Box: 3,
	Mailbox: 4,
	GDrive: 5,
	Facebook: 6,
	WopiBox: 7,
	WopiEgnyte: 8,
	WopiDropbox: 9
};
_g.q.registerEnum("_g.q", !1);
_g.he = function() {};
_g.he.prototype = {
	Invalid: 0,
	Administrator: 1,
	Viewer: 2,
	Guest: 3
};
_g.he.registerEnum("_g.he", !1);
_g.ia = function() {};
_g.ia.prototype = {
	LightBlue: 0,
	LightGreen: 1,
	LightOrange: 2,
	LightGray: 3,
	LightYellow: 4,
	LightTeal: 5,
	LightPink: 6,
	LightBrown: 7,
	LightRed: 8,
	MaxColor: 9,
	Auto: -1
};
_g.ia.registerEnum("_g.ia", !1);
_g.ic = function() {};
_g.ic.prototype = {
	MyCalendars: 0,
	OtherCalendars: 1,
	PeoplesCalendars: 2,
	Normal: 3
};
_g.ic.registerEnum("_g.ic", !1);
_g.cT = function() {};
_g.cT.prototype = {
	NotResponded: 0,
	NotConsented: 1,
	Consented: 2
};
_g.cT.registerEnum("_g.cT", !1);
_g.ix = function() {};
_g.ix.prototype = {
	NotSet: 0,
	User: 1,
	AllAttendees: 2,
	Staff: 3,
	Customer: 4
};
_g.ix.registerEnum("_g.ix", !1);
_g.cW = function() {};
_g.cW.prototype = {
	Free: 0,
	Owned: 1,
	InTrial: 2,
	TrialExpired: 3
};
_g.cW.registerEnum("_g.cW", !1);
_g.iC = function() {};
_g.iC.prototype = {
	None: 0,
	Attached: 1,
	Uploaded: 2,
	Modified: 3,
	Shared: 4
};
_g.iC.registerEnum("_g.iC", !1);
_g.iR = function() {};
_g.iR.prototype = {
	None: 0,
	IsCalculated: 1,
	GuestsEnabled: 2,
	GroupHasGuests: 4
};
_g.iR.registerEnum("_g.iR", !0);
_g.ky = function() {};
_g.ky.prototype = {
	MeetingSuggestion: 1,
	TaskSuggestion: 2,
	Address: 3,
	Url: 4,
	PhoneNumber: 5,
	EmailAddress: 6,
	Contact: 7
};
_g.ky.registerEnum("_g.ky", !1);
_g.iX = function() {};
_g.iX.prototype = {
	None: 0,
	Message: 1,
	Calendar: 2,
	All: 3
};
_g.iX.registerEnum("_g.iX", !0);
_g.iY = function() {};
_g.iY.prototype = {
	None: 0,
	ClassicAttachment: 2,
	OneDrive: 3,
	SharePoint: 4,
	Link: 5,
	ModernAttachment: 6,
	All: 100
};
_g.iY.registerEnum("_g.iY", !1);
_g.iZ = function() {};
_g.iZ.prototype = {
	None: 0,
	Delete: 1,
	Archive: 2,
	PinUnpin: 3,
	ReadUnread: 4,
	FlagUnflag: 5,
	Move: 6
};
_g.iZ.registerEnum("_g.iZ", !1);
_g.jq = function() {};
_g.jq.prototype = {
	None: 0,
	ConversationStarterIsYou: 1,
	OnlyRecipient: 2,
	ConversationContributions: 3,
	MarkedImportantBySender: 4,
	SenderIsManager: 5,
	SenderIsInManagementChain: 6,
	SenderIsDirectReport: 7,
	ActionBasedOnSender: 8,
	NameOnToLine: 9,
	NameOnCcLine: 10,
	ManagerPosition: 11,
	ReplyToAMessageFromMe: 12,
	PreviouslyFlagged: 13,
	ActionBasedOnRecipients: 14,
	ActionBasedOnSubjectWords: 15,
	ActionBasedOnBasedOnBodyWords: 16,
	SenderIsYou: 17,
	ItemClass: 18,
	ReplyForwardRule: 19,
	BulkAutoListMimeHeaders: 20,
	WellKnownBulkSenderLocalpart: 21,
	ReturnPathMatches: 22,
	InlineAttachmentCount: 23,
	NotInlineImageCount: 24,
	InferenceBypassedByTransportRuleOverride: 25,
	OverriddenByClutterConversationAction: 26,
	OverriddenByNotClutterConversationAction: 27,
	OverriddenByNeverClutterRule: 28,
	OverriddenByAlwaysClutterRule: 29,
	PreviousMessageNotClutter: 30
};
_g.jq.registerEnum("_g.jq", !1);
_g.G = function() {};
_g.G.prototype = {
	DateTimeReceived: 1,
	SearchRecipients: 2,
	From: 3,
	HasAttachment: 4,
	FolderEntryId: 5,
	Hashtags: 6,
	Actiontags: 7
};
_g.G.registerEnum("_g.G", !1);
_g.ju = function() {};
_g.ju.prototype = {
	Calendar: 0,
	Task: 1
};
_g.ju.registerEnum("_g.ju", !1);
_g.jv = function() {};
_g.jv.prototype = {
	None: 0,
	Calendar: 1,
	Task: 2,
	Birthdays: 4,
	All: 268435455
};
_g.jv.registerEnum("_g.jv", !0);
_g.df = function() {};
_g.df.prototype = {
	Restricted: 0,
	ReadItem: 1,
	ReadWriteMailbox: 2,
	ReadWriteItem: 3
};
_g.df.registerEnum("_g.df", !1);
_g.kJ = function() {};
_g.kJ.prototype = {
	NotDefined: 0,
	FromContact: 5,
	Newsletter: 15,
	Photo: 53,
	SocialUpdate: 55,
	Video: 61,
	Document: 63,
	File: 65,
	MailingList: 67,
	ShippingNotification: 69,
	LiveView: 71,
	DocumentPlus: 73,
	Important: 75,
	Family: 77,
	Bills: 81,
	Shopping: 83,
	Travel: 85,
	Flight: 87,
	RestaurantReservation: 89,
	Lodging: 91,
	RentalCar: 93,
	Purchase: 95,
	Event: 97,
	RetiredPromotion: 99,
	MaxValue: 100
};
_g.kJ.registerEnum("_g.kJ", !1);
_g.gD = function() {};
_g.gD.prototype = {
	None: 0,
	Mock: 1,
	Facebook: 2,
	Twitter: 3,
	LinkedIn: 4,
	Google: 5,
	Yahoo: 6,
	SinaWeibo: 7,
	TripIt: 8,
	AirBrake: 9,
	AppSignal: 10,
	Asana: 11,
	BeanStalk: 12,
	BingNews: 13,
	BitBucket: 14,
	Boundary: 15,
	Bugsnag: 16,
	BuildKite: 17,
	Cloud66: 18,
	Crashlytics: 19,
	CircleCI: 20,
	Codeship: 21,
	Datadog: 22,
	DynamicsCrm: 23,
	Enchant: 24,
	Envoy: 25,
	Github: 26,
	GoSquared: 27,
	Groove: 28,
	GroupFiles: 29,
	HelpScout: 30,
	Heroku: 31,
	HoneyBadger: 32,
	IncomingWebhook: 33,
	Intercom: 34,
	Jira: 35,
	LogEntries: 36,
	MagnumCI: 37,
	MailChimp: 38,
	OpsGenie: 39,
	PagerDuty: 40,
	Papertrail: 41,
	Pingdom: 42,
	PivotalTracker: 43,
	RainforestQA: 44,
	Raygun: 45,
	RSS: 46,
	Runscope: 47,
	Salesforce: 48,
	Semaphore: 49,
	Sentry: 50,
	StackExchange: 51,
	StatusPageIO: 52,
	Subversion: 53,
	TravisCI: 54,
	Trello: 55,
	UserLike: 56,
	UserVoice: 57,
	VisualStudioOnline: 58,
	Wunderlist: 59,
	Yo: 60,
	Zendesk: 61,
	AAD: 62,
	SkypeSpaces: 63,
	SkypeSpaces_DM2P: 64,
	Aha: 65,
	Librato: 66,
	Chatra: 67,
	XPDev: 68,
	BitHound: 69,
	Chatlio: 70,
	CheckMarket: 71,
	Doorbell: 72,
	GhostInspector: 73,
	HipMob: 74,
	Insping: 75,
	NewRelic: 76,
	Ramen: 77,
	TestFairy: 78,
	XPlenty: 79,
	ConnectorExtension: 80,
	Flickr: 81,
	Pickit: 82
};
_g.gD.registerEnum("_g.gD", !1);
_g.jN = function() {};
_g.jN.prototype = {
	Default: 0,
	HomeRoom: 1,
	Yammer: 2,
	SkypeConsumer: 3,
	PartialCreate: 4,
	PartialPostCreate: 5
};
_g.jN.registerEnum("_g.jN", !1);
_g.hy = function() {};
_g.hy.prototype = {
	UploadPhoto: 0,
	UploadPreview: 1,
	ClearPhoto: 2,
	ClearPreview: 3
};
_g.hy.registerEnum("_g.hy", !1);
_g.kx = function() {};
_g.kx.registerInterface("_g.kx");
_g.hK = function(n) {
	this.a(n)
};
_g.hK.prototype = {
	a: function(n) {
		this.source = n
	}
};
_g.H = function(n) {
	this.__type = _g.H.dataContractName;
	this.request = n;
	this.state = 0;
	this.attemptCount = 0;
	this.successCount = 0;
	this.rejectedCount = 0;
	this.failureCount = 0;
	this.responseCode = "NoError";
	this.timeoutCount = 0;
	this.abandonedCount = 0;
	this.firstAttempt = null;
	this.lastAttempt = null;
	this.processingTime = 0;
	this.checkpointValue = "";
	this.startTime = 0;
	this.offlineRejectCode = 0;
	this.edgeRequest = 0;
	this.webrequestCompletedCount = 0;
	if(n && n.actionContext && n.actionContext.correlationId) this.correlationId = n.actionContext.correlationId;
	else {
		this.correlationId = _g.H.e();
		n && n.actionContext && (n.actionContext.correlationId = this.correlationId)
	}
	this.activityId = "";
	this.beginTimeString = "";
	this.timestamps = {};
	this.externalTimestamps = {};
	this.externalCorrelationId = "";
	this.externalClientName = "";
	this.externalServerName = "";
	this.backEndTime = 0;
	this.frontEndTime = 0;
	this.requestLength = 0;
	this.responseLength = 0;
	this.responseBytes = Number.NaN;
	this.callBackStartTime = 0;
	this.callBackEndTime = 0;
	this.responseEndTimeStamp = 0;
	this.requestInvokedTimeStamp = 0;
	this.actionType = 0;
	this.nextHopProtocol = "";
	this.msEdgeRef = ""
};
_g.H.d = function(n) {
	if(n.id) return n.id < 0;
	else {
		n.id = _g.H.f();
		return !0
	}
};
_g.H.g = function(n) {
	n.attemptCount++;
	n.lastAttempt = _a.d.f(_a.d.get_utcNow());
	n.firstAttempt = n.firstAttempt || n.lastAttempt
};
_g.H.c = function(n, t) {
	var i = _a.d.get_utcNow().e(t);
	n.processingTime = (n.processingTime || 0) + i
};
_g.H.a = function(n) {
	var t = "ActionRecord [";
	if(n) {
		t += n.id.toString();
		n.request && (t += ", " + n.request.methodName);
		n.response && (t += ", " + n.response.statusCode);
		n.correlationId && (t += ", " + n.correlationId)
	} else t += "null";
	t += "]";
	return t
};
_g.H.f = function() {
	_g.H.b--;
	_g.H.b === Number.NEGATIVE_INFINITY && (_g.H.b = -1);
	return _g.H.b
};
_g.H.e = function() {
	var n = window.getClientId();
	return n + "_" + _a.cz.b().a.toString()
};
_g.H.prototype = {
	id: 0,
	state: 0,
	request: null,
	response: null,
	attemptCount: 0,
	successCount: 0,
	failureCount: 0,
	rejectedCount: 0,
	responseCode: "NoError",
	timeoutCount: 0,
	abandonedCount: 0,
	firstAttempt: null,
	lastAttempt: null,
	processingTime: 0,
	correlationId: null,
	activityId: null,
	beginTimeString: null,
	timestamps: null,
	externalTimestamps: null,
	externalCorrelationId: null,
	externalClientName: null,
	externalServerName: null,
	backEndTime: 0,
	frontEndTime: 0,
	requestLength: 0,
	responseLength: 0,
	responseBytes: 0,
	callBackStartTime: 0,
	callBackEndTime: 0,
	responseEndTimeStamp: 0,
	requestInvokedTimeStamp: 0,
	actionType: 0,
	offlineRejectCode: 0,
	edgeRequest: 0,
	webrequestCompletedCount: 0,
	resource: null,
	frontEndServer: null,
	backEndServer: null,
	checkpointValue: null,
	startTime: 0,
	nextHopProtocol: null,
	msEdgeRef: null
};
_g.gZ = function(n) {
	_g.gZ.initializeBase(this, [n])
};
_g.gZ.prototype = {
	instanceKeysToRemoveFromPendingOperations: null,
	folderIdForInstanceKeysToRemoveFromPendingOperations: null,
	isActionGlobal: !1
};
_g.en = function() {
	this.DirtyState = undefined;
	_g.en.initializeBase(this);
	this.__type = _g.en._dataContractName
};
_g.en._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastDeliveryTime", "GlobalLastDeliveryTime", "LastModifiedTime", "LastDeliveryOrRenewTime", "GlobalLastDeliveryOrRenewTime", "ReturnTime", "LastSentTime", "LastAttachmentsProcessedTime", "GlobalLastAttachmentsProcessedTime", "ExtractedCardAndActionsLastUpdatedTime"], null)
};
_g.hi = function(n) {
	_g.hi.initializeBase(this, [n])
};
_g.hi.prototype = {
	clientStoreItem: 0,
	itemIds: null,
	createdCalendarItemIds: null,
	isQueued: !1,
	parentFolderId: null,
	uIds: null,
	userEmailAddress: null,
	userDisplayName: null,
	isReferencedItemMeetingRequest: !1,
	referencedCalendarItemType: "Single",
	draftsFolderId: null,
	inboxFolderId: null,
	outboxFolderId: null,
	deletedItemsFolderId: null,
	calendarFolderId: null,
	clientStoreBodyValue: null,
	rightsManagementLicenseData: null,
	outboxItemId: null,
	conversationId: null,
	parentConversationNodeId: null,
	bodySubstring: null,
	viewModelContextId: null,
	itemPartsOrderDescending: !1,
	resendItemId: null,
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.popOutContext = new _g.ki("CreateItemResponseMessageSuccess", "CreateItemResponseMessageFailure", "CreateItemResponseCompleted")
	}
};
_g.cq = function() {
	_g.cq.initializeBase(this);
	this.__type = _g.cq._dataContractName
};
_g.e = function(n) {
	_g.e.initializeBase(this);
	this.__type = _g.e._dataContractName;
	this.Id = n
};
_g.e.b = function(n) {
	if(!n) return null;
	var t = new _g.e(n);
	t.Id = n;
	return t
};
_g.e.a = function(n, t) {
	if(_g.dk.isInstanceOfType(n)) {
		var r = new _g.bn(n.Id);
		t || (r.ChangeKey = n.ChangeKey);
		return r
	} else {
		var i = new _g.e(n.Id);
		t || (i.ChangeKey = n.ChangeKey);
		return i
	}
};
_g.cz = function(n) {
	_g.cz.initializeBase(this);
	this.__type = _g.cz._dataContractName;
	this.Value = n
};
_g.cz.a = function(n) {
	return !n || _j.h.b(n.Value)
};
_g.hj = function(n) {
	_g.hj.initializeBase(this, [n])
};
_g.hj.prototype = {
	clientStoreItem: 0,
	folderToReloadOnError: null,
	isReferencedItemRecurringMaster: !1,
	instanceKeysToRemoveFromPendingOperations: null,
	folderIdForInstanceKeysToRemoveFromPendingOperations: null
};
_g.iy = function(n) {
	_g.iy.initializeBase(this, [n])
};
_g.iy.prototype = {
	b: !1
};
_g.z = function() {
	_g.z.initializeBase(this);
	this.__type = _g.z._dataContractName
};
_g.z._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!0, n, i, n.StartTimeZoneId, ["Start"], ["StartWallClock"]);
		r.a(!0, n, i, n.EndTimeZoneId, ["End"], ["EndWallClock"]);
		r.a(!1, n, i, t, ["DateTimeStamp", "TailoredXpEntitiesSourceUpdatedTime", "OriginalStart", "AppointmentReplyTime"], null);
		_g.M._TZ(n, t, i, r)
	}
};
_g.z.prototype = {
	unfoldedIndex: 0
};
_g.bX = function(n) {
	_g.bX.initializeBase(this, [n])
};
_g.bX.b = function(n, t, i) {
	if(t && t.explicitLogonUser) {
		i.val = 307;
		return !1
	}
	if(_j.u.a(n.ViewFilter) || n.ViewFilter !== "All") {
		i.val = 308;
		return !1
	}
	if(!_j.h.a(n.FromFilter)) {
		i.val = 309;
		return !1
	}
	var u = !1;
	var r = n.SortOrder;
	if(r) {
		if(r.length === 1 || r.length === 2) {
			var f = r[0];
			f.Order === _g.bX.a && (f.Path.FieldURI === "ConversationLastDeliveryTime" || f.Path.FieldURI === "ConversationLastDeliveryOrRenewTime") && (u = _g.cz.a(n.QueryString))
		}
	} else u = _g.cz.a(n.QueryString);
	i.val = u ? -1 : 311;
	return u
};
_g.bX.prototype = {
	itemLastDeliveryTime: null
};
_g.bt = function(n) {
	_g.bt.initializeBase(this, [n])
};
_g.bt.c = function(n) {
	return _g.C.a(n, "DateTimeReceived")
};
_g.bt.d = function(n) {
	var f = _g.bt.b(n);
	if(n.Restriction || n.Traversal !== "Shallow" || _j.u.a(n.ViewFilter) || n.ViewFilter !== "All" || !_g.bt.e(n.Paging) && !_g.bt.f(n.Paging) || !_j.h.a(n.FromFilter)) return !1;
	var i = !1;
	var t = n.SortOrder;
	if(t) {
		if(t.length === 1) {
			var r = t[0];
			var u = _g.bt.c(f);
			r.Order === _g.bt.a && r.Path.FieldURI === u && (i = _g.cz.a(n.QueryString))
		}
	} else i = _g.cz.a(n.QueryString);
	return i
};
_g.bt.b = function(n) {
	_a.c.a(n, "request");
	var t = n.ParentFolderIds;
	_a.c.a(t, "ParentFolderIds");
	_a.c.e(t.length, 1, 1, "ParentFolderIds should contain exactly one ID.");
	var i = t[0];
	_a.c.b(i, "ParentFolderIds[0]");
	return i
};
_g.bt.e = function(n) {
	return _g.L.isInstanceOfType(n) && n.BasePoint === "Beginning"
};
_g.bt.f = function(n) {
	return _g.bj.isInstanceOfType(n) && _g.ba.isInstanceOfType(n.Condition.Item)
};
_g.bt.prototype = {
	tableSize: 0,
	loadedStartIndex: 0,
	firstMatchingRowIndex: 0,
	itemReceivedTime: null,
	isReload: !1
};
_g.kz = function() {
	_g.kz.initializeBase(this)
};
_g.kz.prototype = {
	Sender: null,
	Subject: null,
	PreviewText: null,
	ItemId: null,
	ConversationId: null,
	IsClutter: !1,
	SenderSmtpEmailAddress: null,
	InferenceClassification: "Focused"
};
_g.fU = function(n) {
	_g.fU.initializeBase(this, [n])
};
_g.fU.a = function(n, t, i, r, u, f, e) {
	var o = new _g.fU(n);
	o.lastModifiedTimeDictionary = t;
	o.currentUserOptionsIgnoringDeletedItems = i;
	o.currentUserOptionsSortOrder = r;
	o.requestIgnoringDeleteditems = u;
	o.explicitLogonUser = f;
	o.actionName = e;
	return o
};
_g.fU.prototype = {
	lastModifiedTimeDictionary: null,
	currentUserOptionsIgnoringDeletedItems: !1,
	currentUserOptionsSortOrder: "TreeOrderAscending",
	requestIgnoringDeleteditems: !1,
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.bz = function(n) {
	_g.bz.initializeBase(this, [n])
};
_g.bz.prototype = {
	clientStoreItem: 0,
	requireNormalizedBody: !1
};
_g.V = function(n, t) {
	_g.V.initializeBase(this);
	this.__type = _g.V._dataContractName;
	this.FaultMessage = n;
	this.ErrorCode = t
};
_g.V.c = function(n) {
	return !_g.bs.a(n.ErrorCode)
};
_g.V.b = function(n) {
	var t = _a.c.l(n);
	if(!t) {
		var r = n.ErrorCode;
		var i = _ff.C.toString(r);
		t = "HTTP_" + (i === "" ? r : i)
	}
	return t
};
_g.V.a = function(n) {
	var t = n.__type;
	return !!t && t === _g.V._dataContractName
};
_g.eC = function() {
	_g.eC.initializeBase(this);
	this.__type = _g.eC._dataContractName
};
_g.eC.prototype = {
	ErrorInfo: null
};
_g.iW = function(n) {
	_g.iW.initializeBase(this, [n])
};
_g.iW.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.jb = function(n) {
	_g.jb.initializeBase(this, [n])
};
_g.jb.prototype = {
	folderToReloadOnError: null
};
_g.bq = function() {
	_g.bq.initializeBase(this);
	this.__type = _g.bq._dataContractName
};
_g.bq._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastModifiedTime"], null)
};
_g.dC = function() {
	this.ParentItemId = undefined;
	this.IsAttachmentItemAttachment = undefined;
	this.MimeContent = undefined;
	_g.dC.initializeBase(this);
	this.__type = _g.dC._dataContractName
};
_g.dC._TZ = function(n, t, i, r) {
	_g.bq._TZ(n, t, i, r)
};
_g.di = function() {
	_g.di.initializeBase(this);
	this.__type = _g.di._dataContractName
};
_g.di.prototype = {
	b: !0,
	a: null
};
_g.dt = function() {
	_g.dt.initializeBase(this)
};
_g.dt.a = function(n, t) {
	if(_g.r.isInstanceOfType(n) && _g.r.isInstanceOfType(t)) {
		var r = n;
		var i = t;
		var f = r.Mailbox ? r.Mailbox.EmailAddress : "";
		var u = i.Mailbox ? i.Mailbox.EmailAddress : "";
		return r.Id === i.Id && f === u
	} else return !n || !t ? n === t : n.Id === t.Id
};
_g.cj = function() {
	_g.cj.initializeBase(this);
	this.__type = _g.cj._dataContractName
};
_g.cj.prototype = {
	WasLoadedFromServer: !1,
	IsLoadingFromServer: !1,
	PopulateFromServerData: function(n) {
		this.RmsTemplates = n.RmsTemplates;
		this.MessageClassifications = n.MessageClassifications;
		this.OmeSettings = n.OmeSettings;
		this.IsLoadingFromServer = !1;
		this.WasLoadedFromServer = !0
	}
};
_g.jj = function(n) {
	_g.jj.initializeBase(this, [n])
};
_g.jj.prototype = {
	clientStoreItem: 0,
	folderToReloadOnError: null,
	instanceKeysToRemoveFromPendingOperations: null,
	folderIdForInstanceKeysToRemoveFromPendingOperations: null
};
_g.bP = function(n, t) {
	_g.bP.initializeBase(this);
	this.a = n;
	this.DisplayText = n.Name;
	this.b = t
};
_g.bP.prototype = {
	a: null,
	b: 0
};
_g.jw = function() {
	_g.jw.initializeBase(this)
};
_g.jw.prototype = {
	Item: null,
	Conversation: null,
	Prior: null,
	Reload: !1
};
_g.P = function() {
	_g.P.initializeBase(this);
	this.__type = _g.P._dataContractName
};
_g.P.b = function() {
	if(!_g.P.a) {
		_g.P.a = new _g.P;
		_g.P.a.CheckCRLOnSend = !1;
		_g.P.a.DLExpansionTimeout = 6e4;
		_g.P.a.UseSecondaryProxiesWhenFindingCertificates = !0;
		_g.P.a.CRLConnectionTimeout = 6e4;
		_g.P.a.CRLRetrievalTimeout = 1e4;
		_g.P.a.DisableCRLCheck = !1;
		_g.P.a.AlwaysSign = !1;
		_g.P.a.AlwaysEncrypt = !1;
		_g.P.a.ClearSign = !0;
		_g.P.a.IncludeCertificateChainWithoutRootCertificate = !1;
		_g.P.a.IncludeCertificateChainAndRootCertificate = !1;
		_g.P.a.EncryptTemporaryBuffers = !0;
		_g.P.a.SignedEmailCertificateInclusion = !0;
		_g.P.a.BccEncryptedEmailForking = 0;
		_g.P.a.IncludeSMIMECapabilitiesInMessage = !1;
		_g.P.a.CopyRecipientHeaders = !1;
		_g.P.a.OnlyUseSmartCard = !1;
		_g.P.a.TripleWrapSignedEncryptedMail = !1;
		_g.P.a.UseKeyIdentifier = !1;
		_g.P.a.EncryptionAlgorithms = "0x6610";
		_g.P.a.SigningAlgorithms = "0x8004";
		_g.P.a.ForceSmimeClientUpgrade = !0;
		_g.P.a.SenderCertificateAttributesToDisplay = "";
		_g.P.a.AllowUserChoiceOfSigningCertificate = !1
	}
	return _g.P.a
};
_g.jH = function(n) {
	_g.jH.initializeBase(this, [n])
};
_g.jH.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.jI = function(n) {
	_g.jI.initializeBase(this, [n])
};
_g.jI.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.jJ = function(n) {
	_g.jJ.initializeBase(this, [n])
};
_g.jJ.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.S = function() {
	_g.S.initializeBase(this);
	this.__type = _g.S._dataContractName
};
_g.S.prototype = {
	subscriptionIdSuffix: ""
};
_g.cl = function() {
	_g.cl.initializeBase(this)
};
_g.cl.prototype = {
	d: null,
	c: null,
	b: null,
	e: null,
	a: null
};
_g.jO = function(n) {
	_g.jO.initializeBase(this, [n])
};
_g.jO.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.jP = function(n) {
	_g.jP.initializeBase(this, [n])
};
_g.jP.prototype = {
	a: function(n) {
		_g.hK.prototype.a.call(this, n);
		this.isAutomated = !0
	}
};
_g.gE = function(n) {
	_g.gE.initializeBase(this, [n])
};
_g.gE.prototype = {
	clientStoreItem: 0,
	itemIds: null,
	folderToReloadOnError: null,
	clientStoreBodyValue: null,
	inboxFolderId: null,
	outboxFolderId: null,
	isFlagConversation: !1,
	flag: null,
	rightsManagementLicenseData: null,
	isUpdatingRightsManagementLicenseData: !1,
	outboxItemId: null,
	parentFolderId: null,
	conversationId: null,
	parentConversationNodeId: null,
	bodySubstring: null,
	isReferencedItemRecurring: !1,
	itemPartsOrderDescending: !1,
	isTextBodyValue: !1,
	instanceKeysToRemoveFromPendingOperations: null,
	folderIdForInstanceKeysToRemoveFromPendingOperations: null,
	resendItemId: null
};
_g.dr = function() {
	_g.dr.initializeBase(this)
};
_g.dr._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["CreatedDateTime", "ServerCreatedDateTime"], null)
};
_g.cS = function() {
	_g.cS.initializeBase(this);
	this.__type = _g.cS._dataContractName
};
_g.cS._TZ = function(n, t, i, r) {
	_g.dF._TZ(n, t, i, r)
};
_g.fh = function() {
	_g.fh.initializeBase(this);
	this.__type = _g.fh._dataContractName
};
_g.fh._TZ = function(n, t, i, r) {
	_g.eL._TZ(n, t, i, r)
};
_g.fi = function() {
	_g.fi.initializeBase(this);
	this.__type = _g.fi._dataContractName
};
_g.fi._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.bJ = function(n) {
	_g.bJ.initializeBase(this);
	this.__type = _g.bJ._dataContractName;
	this.Id = n
};
_g.ds = function() {
	_g.ds.initializeBase(this);
	this.__type = _g.ds._dataContractName
};
_g.ed = function() {
	_g.ed.initializeBase(this);
	this.__type = _g.ed._dataContractName
};
_g.ed._TZ = function(n, t, i, r) {
	_g.dr._TZ(n, t, i, r)
};
_g.hM = function() {
	_g.hM.initializeBase(this);
	this.__type = _g.hM._dataContractName
};
_g.ef = function() {
	_g.ef.initializeBase(this);
	this.__type = _g.ef._dataContractName
};
_g.ef._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ApprovalDecisionTime"], null)
};
_g.bi = function(n) {
	_g.bi.initializeBase(this);
	this.__type = _g.bi._dataContractName;
	this.Id = n
};
_g.fp = function() {
	_g.fp.initializeBase(this);
	this.__type = _g.fp._dataContractName
};
_g.hW = function() {
	_g.hW.initializeBase(this);
	this.__type = _g.hW._dataContractName
};
_g.ha = function() {
	_g.ha.initializeBase(this)
};
_g.fr = function() {
	_g.fr.initializeBase(this)
};
_g.ko = function() {
	_g.ko.initializeBase(this)
};
_g.eg = function() {
	_g.eg.initializeBase(this)
};
_g.hc = function() {
	_g.hc.initializeBase(this)
};
_g.hd = function() {
	_g.hd.initializeBase(this)
};
_g.ks = function() {
	_g.ks.initializeBase(this)
};
_g.eh = function() {
	_g.eh.initializeBase(this);
	this.__type = _g.eh._dataContractName
};
_g.s = function(n, t) {
	_g.s.initializeBase(this);
	this.__type = _g.s._dataContractName;
	this.BodyType = n;
	this.Value = t
};
_g.hf = function() {
	_g.hf.initializeBase(this);
	this.__type = _g.hf._dataContractName
};
_g.hZ = function() {
	_g.hZ.initializeBase(this);
	this.__type = _g.hZ._dataContractName
};
_g.ib = function() {
	_g.ib.initializeBase(this);
	this.__type = _g.ib._dataContractName;
	this.Name = _name
};
_g.ej = function() {
	_g.ej.initializeBase(this);
	this.__type = _g.ej._dataContractName
};
_g.ej._TZ = function(n, t, i, r) {
	_g.cb._TZ(n, t, i, r)
};
_g.bC = function() {
	_g.bC.initializeBase(this);
	this.__type = _g.bC._dataContractName
};
_g.ClientVersionProvider = function() {};
_g.hg = function() {
	_g.hg.initializeBase(this);
	this.__type = _g.hg._dataContractName;
	this.SubscriptionGuid = _subscriptionGuid;
	this.EmailAddress = _emailAddress;
	this.DisplayName = _displayName
};
_g.du = function() {
	_g.du.initializeBase(this);
	this.__type = _g.du._dataContractName
};
_g.du._TZ = function(n, t, i, r) {
	_g.M._TZ(n, t, i, r)
};
_g.el = function() {
	_g.el.initializeBase(this);
	this.__type = _g.el._dataContractName
};
_g.ck = function(n) {
	_g.ck.initializeBase(this);
	this.__type = _g.ck._dataContractName;
	this.InternetMessageId = n;
	this.Items = new Array(0)
};
_g.em = function(n) {
	_g.em.initializeBase(this);
	this.__type = _g.em._dataContractName;
	this.ThreadId = n
};
_g.em._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastDeliveryTime"], null)
};
_g.ku = function() {
	_g.ku.initializeBase(this)
};
_g.cV = function() {
	_g.cV.initializeBase(this);
	this.__type = _g.cV._dataContractName
};
_g.cV._TZ = function(n, t, i, r) {
	_g.dF._TZ(n, t, i, r)
};
_g.r = function(n) {
	_g.r.initializeBase(this);
	this.__type = _g.r._dataContractName;
	this.Id = n
};
_g.dw = function() {
	_g.dw.initializeBase(this);
	this.__type = _g.dw._dataContractName
};
_g.dw._TZ = function(n, t, i, r) {
	_g.M._TZ(n, t, i, r)
};
_g.er = function() {
	_g.er.initializeBase(this);
	this.__type = _g.er._dataContractName
};
_g.cG = function() {
	_g.cG.initializeBase(this);
	this.__type = _g.cG._dataContractName
};
_g.g = function() {
	_g.g.initializeBase(this);
	this.__type = _g.g._dataContractName
};
_g.iB = function() {
	_g.iB.initializeBase(this);
	this.__type = _g.iB._dataContractName
};
_g.T = function() {
	_g.T.initializeBase(this);
	this.__type = _g.T._dataContractName
};
_g.O = function() {
	_g.O.initializeBase(this);
	this.__type = _g.O._dataContractName
};
_g.es = function() {
	_g.es.initializeBase(this);
	this.__type = _g.es._dataContractName;
	this.Body = new _g.eu
};
_g.eu = function() {
	_g.eu.initializeBase(this);
	this.__type = _g.eu._dataContractName
};
_g.cH = function() {
	_g.cH.initializeBase(this);
	this.__type = _g.cH._dataContractName
};
_g.cH._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["StartDate", "DueDate", "CompleteDate"], null)
};
_g.m = function(n) {
	_g.m.initializeBase(this);
	this.__type = _g.m._dataContractName;
	this.Id = n
};
_g.bD = function() {
	_g.bD.initializeBase(this);
	this.__type = _g.bD._dataContractName
};
_g.bL = function() {
	_g.bL.initializeBase(this);
	this.__type = _g.bL._dataContractName
};
_g.bL._TZ = function(n, t, i, r) {
	_g.cb._TZ(n, t, i, r)
};
_g.iE = function() {};
_g.iE.a = function(n) {
	var t = _ff.e;
	return n === t || n.inheritsFrom(t) ? new n : null
};
_g.cX = function() {
	_g.cX.initializeBase(this);
	this.__type = _g.cX._dataContractName
};
_g.L = function(n) {
	_g.L.initializeBase(this);
	this.__type = _g.L._dataContractName;
	this.BasePoint = n
};
_g.gg = function() {
	_g.gg.initializeBase(this);
	this.__type = _g.gg._dataContractName
};
_g.iT = function() {
	_g.iT.initializeBase(this);
	this.__type = _g.iT._dataContractName
};
_g.ba = function() {
	_g.ba.initializeBase(this);
	this.__type = _g.ba._dataContractName
};
_g.dD = function() {
	_g.dD.initializeBase(this);
	this.__type = _g.dD._dataContractName;
	this.Items = new Array(0)
};
_g.M = function() {
	_g.M.initializeBase(this);
	this.__type = _g.M._dataContractName
};
_g.M._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["DateTimeReceived", "DateTimeSent", "DateTimeCreated", "ReminderDueBy", "ReminderNextTime", "LastModifiedTime", "RetentionDate", "ReceivedOrRenewTime", "RenewTime", "ReturnTime", "LastSmartResponseTime", "ExtractedCardAndActionsLastUpdatedTime"], null)
};
_g.gh = function() {
	_g.gh.initializeBase(this);
	this.__type = _g.gh._dataContractName
};
_g.eD = function(n, t, i) {
	_g.eD.initializeBase(this);
	this.__type = _g.eD._dataContractName;
	this.Name = n;
	this.Longitude = t;
	this.Latitude = i
};
_g.iV = function() {
	_g.iV.initializeBase(this);
	this.__type = _g.iV._dataContractName
};
_g.iV._TZ = function(n, t, i, r) {
	_g.dr._TZ(n, t, i, r)
};
_g.iU = function() {
	_g.iU.initializeBase(this);
	this.__type = _g.iU._dataContractName
};
_g.iU._TZ = function(n, t, i, r) {
	_g.dr._TZ(n, t, i, r)
};
_g.dE = function(n, t, i, r) {
	_g.dE.initializeBase(this);
	this.__type = _g.dE._dataContractName;
	this.MailboxId = n;
	this.DisplayName = t;
	this.ItemCount = i;
	this.Size = r
};
_g.ja = function() {
	_g.ja.initializeBase(this);
	this.__type = _g.ja._dataContractName
};
_g.cY = function() {
	_g.cY.initializeBase(this);
	this.__type = _g.cY._dataContractName
};
_g.eE = function() {
	_g.eE.initializeBase(this);
	this.__type = _g.eE._dataContractName
};
_g.cn = function() {
	_g.cn.initializeBase(this);
	this.__type = _g.cn._dataContractName
};
_g.cn._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["DateTimeStamp"], null);
		_g.I._TZ(n, t, i, r)
	}
};
_g.dF = function() {
	_g.dF.initializeBase(this);
	this.__type = _g.dF._dataContractName
};
_g.dF._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["ProposedStart", "ProposedEnd"], null);
		_g.gM._TZ(n, t, i, r)
	}
};
_g.bY = function() {
	_g.bY.initializeBase(this);
	this.__type = _g.bY._dataContractName
};
_g.bY._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!0, n, i, n.StartTimeZoneId, ["Start"], ["StartWallClock"]);
		r.a(!0, n, i, n.EndTimeZoneId, ["End"], ["EndWallClock"]);
		r.a(!1, n, i, t, ["OriginalStart", "AppointmentReplyTime"], null);
		_g.cn._TZ(n, t, i, r)
	}
};
_g.co = function() {
	_g.co.initializeBase(this);
	this.__type = _g.co._dataContractName
};
_g.co._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["Start", "End", "ProposedStart", "ProposedEnd"], null);
		_g.cn._TZ(n, t, i, r)
	}
};
_g.je = function() {
	_g.je.initializeBase(this);
	this.__type = _g.je._dataContractName
};
_g.I = function() {
	_g.I.initializeBase(this);
	this.__type = _g.I._dataContractName
};
_g.I._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["LastActionTime"], null);
		_g.M._TZ(n, t, i, r)
	}
};
_g.eF = function(n) {
	_g.eF.initializeBase(this);
	this.__type = _g.eF._dataContractName;
	this.Value = n
};
_g.gl = function() {
	_g.gl.initializeBase(this);
	this.__type = _g.gl._dataContractName
};
_g.eG = function() {
	_g.eG.initializeBase(this);
	this.__type = _g.eG._dataContractName
};
_g.cK = function() {
	_g.cK.initializeBase(this);
	this.__type = _g.cK._dataContractName
};
_g.cK._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ReferenceTime", "CustomReminderTime", "DueDate"], null)
};
_g.cZ = function() {
	_g.cZ.initializeBase(this);
	this.__type = _g.cZ._dataContractName
};
_g.eH = function() {
	_g.eH.initializeBase(this);
	this.__type = _g.eH._dataContractName
};
_g.eI = function() {
	_g.eI.initializeBase(this);
	this.__type = _g.eI._dataContractName
};
_g.bE = function() {
	_g.bE.initializeBase(this);
	this.__type = _g.bE._dataContractName
};
_g.jk = function() {
	_g.jk.initializeBase(this);
	this.__type = _g.jk._dataContractName
};
_g.jo = function() {
	_g.jo.initializeBase(this);
	this.__type = _g.jo._dataContractName
};
_g.jp = function() {
	_g.jp.initializeBase(this);
	this.__type = _g.jp._dataContractName
};
_g.jp._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["WhenChanged"], null)
};
_g.kA = function() {};
_g.kA.prototype = {
	dt: function(n, t, i, r) {
		this.jA(Number, "AcceptChatSession", {
			chatSessionId: n
		}, t, i, r)
	},
	U: function(n, t, i, r, u) {
		this.jA(0, "AcceptPersonaLinkSuggestion", {
			linkToPersonaId: n,
			suggestedPersonaId: t
		}, i, r, u)
	},
	du: function(n, t, i, r) {
		this.jA(0, "AcceptSharedCalendarInvite", n, t, i, r)
	},
	dv: function(n, t, i, r) {
		this.jA(0, "AddActiveRetentionPolicyTags", n, t, i, r)
	},
	V: function(n, t, i, r) {
		this.jA(0, "AddEntityFeedback", n, t, i, r)
	},
	W: function(n, t, i, r) {
		this.jA(0, "AddEventToMyCalendar", {
			request: n
		}, t, i, r)
	},
	dw: function(n, t, i, r) {
		this.jA(Boolean, "AddFavorite", {
			instantMessageBuddy: n
		}, t, i, r)
	},
	dx: function(n, t, i, r) {
		this.jA(0, "AddFeedSubscriptions", n, t, i, r)
	},
	X: function(n, t, i, r) {
		this.jA(0, "AddNewAttachmentDataProvider", n, t, i, r)
	},
	Y: function(n, t, i, r) {
		this.jA(0, "AddSharedCalendar", {
			request: n
		}, t, i, r)
	},
	dy: function(n, t, i, r, u) {
		this.jA(Boolean, "AddSharedFolders", {
			displayName: n,
			primarySMTPAddress: t
		}, i, r, u)
	},
	Z: function(n, t, i, r) {
		this.jA(0, "AddTailoredExperienceEventsToCalendar", n, t, i, r)
	},
	j: function(n, t, i, r) {
		this.jB("AddTrustedSender", {
			itemId: n
		}, t, i, r)
	},
	ba: function(n, t, i, r) {
		this.jB("ApplyBulkItemAction", n, t, i, r)
	},
	k: function(n, t, i, r) {
		this.jB("ApplyConversationAction", n, t, i, r)
	},
	dz: function(n, t, i, r) {
		this.jA(0, "ApplyGroupedItemAction", n, t, i, r)
	},
	l: function(n, t, i, r) {
		this.jB("ApplyMessageAction", n, t, i, r)
	},
	bb: function(n, t, i, r) {
		this.jA(Boolean, "CancelAttachment", {
			cancellationId: n
		}, t, i, r)
	},
	m: function(n, t, i, r) {
		this.jB("CancelCalendarEvent", n, t, i, r)
	},
	bc: function(n, t, i, r) {
		this.jA(Boolean, "CancelConvertLocalToRefAttachment", n, t, i, r)
	},
	bd: function(n, t, i, r) {
		this.jA(Boolean, "CancelConvertRefToLocalAttachment", n, t, i, r)
	},
	be: function(n, t, i, r) {
		this.jA(0, "CancelMeetingPoll", n, t, i, r)
	},
	dA: function(n, t, i, r) {
		this.jA(Boolean, "CancelSaveAttachmentsToCloud", {
			itemId: n
		}, t, i, r)
	},
	dB: function(n, t, i, r) {
		this.jA(0, "CheckPendingAttachmentOperation", n, t, i, r)
	},
	dC: function(n, t, i, r) {
		this.jA(0, "ClearMobileDevice", n, t, i, r)
	},
	dD: function(n, t, i, r) {
		this.jA(0, "ClearTextMessagingAccount", n, t, i, r)
	},
	dE: function(n, t, i, r) {
		this.jA(0, "CompareTextMessagingVerificationCode", n, t, i, r)
	},
	dF: function(n, t, i, r) {
		this.jA(Boolean, "ConnectedAccountsNotification", {
			isOWALogon: n
		}, t, i, r)
	},
	bf: function(n, t, i, r) {
		this.jA(0, "ConvertAttachmentToInline", {
			requestObject: n
		}, t, i, r)
	},
	n: function(n, t, i, r) {
		this.jA(0, "ConvertIcsToCalendarItem", n, t, i, r)
	},
	bg: function(n, t, i, r) {
		this.jA(0, "ConvertId", n, t, i, r)
	},
	bh: function(n, t, i, r) {
		this.jA(String, "ConvertLocalToRefAttachment", {
			requestObject: n
		}, t, i, r)
	},
	bi: function(n, t, i, r) {
		this.jA(String, "ConvertRefToLocalAttachment", {
			requestObject: n
		}, t, i, r)
	},
	dG: function(n, t, i, r) {
		this.jA(0, "CopyItem", n, t, i, r)
	},
	d: function(n, t, i, r) {
		this.jA(0, "CreateAttachment", n, t, i, r)
	},
	bj: function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
		this.jA(String, "CreateAttachmentFromAttachmentDataProvider", {
			itemId: n,
			attachmentDataProviderId: t,
			location: i,
			attachmentId: r,
			subscriptionId: u,
			channelId: f,
			dataProviderParentItemId: e,
			providerEndpointUrl: o,
			cancellationId: l,
			isInline: a
		}, s, h, c)
	},
	bk: function(n, t, i, r) {
		this.jA(0, "CreateAttachmentFromLocalFile", n, t, i, r)
	},
	bl: function(n, t, i, r, u, f, e, o, s) {
		this.jA(String, "CreateAttachmentFromUri", {
			itemId: n,
			uri: t,
			name: i,
			subscriptionId: r,
			isInline: o,
			contentId: s
		}, u, f, e)
	},
	dH: function(n, t, i, r) {
		this.jA(0, "CreateAttachmentSharingLink", n, t, i, r)
	},
	dI: function(n, t, i, r) {
		this.jA(0, "CreateBirthdayEvent", n, t, i, r)
	},
	dJ: function(n, t, i, r) {
		this.jA(0, "CreateBookingCustomQuestionCommand", n, t, i, r)
	},
	dK: function(n, t, i, r) {
		this.jA(0, "CreateBookingService", n, t, i, r)
	},
	dL: function(n, t, i, r) {
		this.jA(0, "CreateBookingStaff", n, t, i, r)
	},
	dM: function(n, t, i, r, u, f) {
		this.jA(0, "CreateCalendar", {
			newCalendarName: n,
			parentGroupGuid: t,
			emailAddress: i
		}, r, u, f)
	},
	o: function(n, t, i, r) {
		this.jB("CreateCalendarEvent", n, t, i, r)
	},
	dO: function(n, t, i, r) {
		this.jA(0, "CreateCalendarGroup", {
			newGroupName: n
		}, t, i, r)
	},
	dP: function(n, t, i, r) {
		this.jA(0, "CreateConnectedAccount", n, t, i, r)
	},
	dQ: function(n, t, i, r, u, f) {
		this.jA(0, "CreateContactFolder", {
			parentFolderId: n,
			displayName: t,
			priority: i
		}, r, u, f)
	},
	dR: function(n, t, i, r) {
		this.jA(0, "CreateFolder", n, t, i, r)
	},
	p: function(n, t, i, r) {
		this.jA(0, "CreateItem", n, t, i, r)
	},
	bm: function(n, t, i, r) {
		this.jA(0, "CreateMeetingPoll", n, t, i, r)
	},
	dS: function(n, t, i, r, u) {
		this.jA(0, "CreateMeetNow", {
			sipUri: n,
			subject: t
		}, i, r, u)
	},
	dT: function(n, t, i, r) {
		this.jA(0, "CreateModernGroup", {
			request: n
		}, t, i, r)
	},
	bn: function(n, t, i, r, u) {
		this.jA(0, "CreateOnlineMeeting", {
			sipUri: n,
			itemId: t
		}, i, r, u)
	},
	dU: function(n, t, i, r) {
		this.jA(0, "CreateOrUpdateFocusedOtherOverride", n, t, i, r)
	},
	q: function(n, t, i, r) {
		this.jA(0, "CreatePersona", {
			request: n
		}, t, i, r)
	},
	bo: function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
		this.jA(0, "CreateReferenceAttachmentFromAttachmentDataProvider", {
			itemId: n,
			attachmentDataProviderId: t,
			location: i,
			attachmentId: r,
			dataProviderParentItemId: u,
			providerEndpointUrl: f,
			cancellationId: h,
			thumbnailUrl: c,
			previewUrl: l,
			isFolder: a,
			mimeType: v
		}, e, o, s)
	},
	bp: function(n, t, i, r) {
		this.jA(String, "CreateReferenceAttachmentFromLocalFile", {
			requestObject: n
		}, t, i, r)
	},
	bq: function(n, t, i, r, u) {
		this.jA(String, "CreateResendDraft", {
			ndrMessageId: n,
			draftsFolderId: t
		}, i, r, u)
	},
	dV: function(n, t, i, r) {
		this.jA(0, "CreateResponseFromModernGroup", n, t, i, r)
	},
	dW: function(n, t, i, r) {
		this.jA(0, "CreateSchedule", n, t, i, r)
	},
	dX: function(n, t, i, r) {
		this.jA(0, "CreateSharePointDocumentAndGetEditLink", n, t, i, r)
	},
	dY: function(n, t, i, r) {
		this.jA(0, "CreateSharingPermission", n, t, i, r)
	},
	br: function(n, t, i, r) {
		this.jA(0, "CreateSweepRuleForSender", n, t, i, r)
	},
	dZ: function(n, t, i, r) {
		this.jA(0, "CreateSweepRuleForSystemCategory", n, t, i, r)
	},
	ea: function(n, t, i, r, u) {
		this.jA(0, "CreateTaskFolder", {
			newTaskFolderName: n,
			parentGroupGuid: t
		}, i, r, u)
	},
	eb: function(n, t, i, r) {
		this.jA(0, "CreateUnifiedGroup", {
			request: n
		}, t, i, r)
	},
	r: function(n, t, i, r) {
		this.jA(0, "DeleteAttachment", n, t, i, r)
	},
	ec: function(n, t, i, r) {
		this.jA(0, "DeleteBookingCustomQuestion", n, t, i, r)
	},
	ed: function(n, t, i, r) {
		this.jA(0, "DeleteBookingService", n, t, i, r)
	},
	ee: function(n, t, i, r) {
		this.jA(0, "DeleteBookingStaff", n, t, i, r)
	},
	ef: function(n, t, i, r) {
		this.jA(0, "DeleteCalendar", {
			itemId: n
		}, t, i, r)
	},
	s: function(n, t, i, r) {
		this.jB("DeleteCalendarEvent", n, t, i, r)
	},
	eg: function(n, t, i, r) {
		this.jA(0, "DeleteCalendarGroup", {
			groupId: n
		}, t, i, r)
	},
	eh: function(n, t, i, r) {
		this.jA(0, "DeleteCalendarSharingPermissions", n, t, i, r)
	},
	ei: function(n, t, i, r) {
		this.jA(0, "DeleteConnectedAccount", n, t, i, r)
	},
	ej: function(n, t, i, r) {
		this.jA(Boolean, "DeleteContactFolder", {
			folderId: n
		}, t, i, r)
	},
	ek: function(n, t, i, r) {
		this.jA(0, "DeleteFolder", n, t, i, r)
	},
	el: function(n, t, i, r) {
		this.jA(0, "DeleteFullSearchHistoryFromRest", n, t, i, r)
	},
	t: function(n, t, i, r) {
		this.jB("DeleteItem", n, t, i, r)
	},
	u: function(n, t, i, r, u) {
		this.jB("DeletePersona", {
			personaId: n,
			folderId: t
		}, i, r, u)
	},
	em: function(n, t, i, r) {
		this.jA(Boolean, "DeletePersonas", {
			request: n
		}, t, i, r)
	},
	bs: function(n, t, i, r) {
		this.jB("DeletePlace", {
			request: n
		}, t, i, r)
	},
	en: function(n, t, i, r) {
		this.jA(0, "DeleteSchedule", n, t, i, r)
	},
	eo: function(n, t, i, r) {
		this.jA(0, "DeleteSharingInvitation", n, t, i, r)
	},
	ep: function(n, t, i, r) {
		this.jA(0, "DeleteSharingPermission", n, t, i, r)
	},
	eq: function(n, t, i, r) {
		this.jA(0, "DeleteTaskFolder", {
			itemId: n
		}, t, i, r)
	},
	kf: function(n, t, i, r) {
		this.jA(0, "Deprovision", n, t, i, r)
	},
	er: function(n, t, i, r) {
		this.jA(0, "DisableApp", n, t, i, r)
	},
	es: function(n, t, i) {
		this.jA(0, "DisableBirthdayCalendar", {}, n, t, i)
	},
	et: function(n, t, i, r) {
		this.jA(0, "DisableExtension", n, t, i, r)
	},
	eu: function(n, t, i, r) {
		this.jA(0, "DisableUMCallAnsweringRule", n, t, i, r)
	},
	ev: function(n, t, i, r) {
		this.jA(0, "DisconnectPhoneCall", n, t, i, r)
	},
	ew: function(n, t, i, r) {
		this.jA(0, "DismissUserUnifiedGroupSuggestion", n, t, i, r)
	},
	bt: function(n, t, i, r) {
		this.jA(0, "EmptyFolder", n, t, i, r)
	},
	ex: function(n, t, i, r) {
		this.jA(0, "EnableApp", n, t, i, r)
	},
	ey: function(n, t, i) {
		this.jA(0, "EnableBirthdayCalendar", {}, n, t, i)
	},
	ez: function(n, t, i, r) {
		this.jA(0, "EnableUMCallAnsweringRule", n, t, i, r)
	},
	eA: function(n, t, i, r) {
		this.jA(0, "EndInstantSearchSession", {
			sessionId: n
		}, t, i, r)
	},
	eB: function(n, t, i, r) {
		this.jA(0, "EndSearchSession", n, t, i, r)
	},
	bu: function(n, t, i, r) {
		this.jA(0, "ExecuteEwsProxy", n, t, i, r)
	},
	eC: function(n, t, i, r) {
		this.jA(0, "ExecuteSearch", n, t, i, r)
	},
	eD: function(n, t, i, r) {
		this.jA(0, "FetchOwaUserSessions", {
			filterOnCurrentSession: r
		}, n, t, i)
	},
	eE: function(n, t, i) {
		this.jA(0, "FetchUserSubscription", {}, n, t, i)
	},
	bv: function(n, t, i, r) {
		this.jA(0, "FinalizeMeetingPoll", n, t, i, r)
	},
	eF: function(n, t, i, r) {
		this.jA(0, "FindBookingCustomers", n, t, i, r)
	},
	eG: function(n, t, i, r) {
		this.jA(0, "FindConnectedAccounts", n, t, i, r)
	},
	bw: function(n, t, i, r) {
		this.jA(0, "FindConversation", n, t, i, r)
	},
	bx: function(n, t, i, r) {
		this.jA(0, "FindFolder", n, t, i, r)
	},
	eH: function(n, t, i, r) {
		this.jA(0, "FindInsights", n, t, i, r)
	},
	e: function(n, t, i, r) {
		this.jA(0, "FindItem", n, t, i, r)
	},
	by: function(n, t, i, r) {
		this.jA(0, "FindMeetingTimeCandidates", n, t, i, r)
	},
	eI: function(n, t, i, r) {
		this.jA(0, "FindMembersInUnifiedGroup", n, t, i, r)
	},
	v: function(n, t, i, r) {
		this.jA(0, "FindPeople", n, t, i, r)
	},
	bz: function(n, t, i, r) {
		this.jA(Array, "FindPlaces", n, t, i, r)
	},
	eJ: function(n, t, i, r) {
		this.jA(0, "FindTags", n, t, i, r)
	},
	eK: function(n, t, i, r) {
		this.jA(0, "FindUnifiedGroups", n, t, i, r)
	},
	eL: function(n, t, i, r) {
		this.jA(0, "FindWeatherLocations", n, t, i, r)
	},
	bA: function(n, t, i, r) {
		this.jB("ForwardCalendarEvent", n, t, i, r)
	},
	eM: function(n, t, i, r) {
		this.jA(0, "GetAccessTokenforResource", n, t, i, r)
	},
	bB: function(n, t, i, r) {
		this.jA(0, "GetAccountInformation", n, t, i, r)
	},
	eN: function(n, t, i, r) {
		this.jA(0, "GetActiveRetentionPolicyTags", n, t, i, r)
	},
	bC: function(n, t, i, r) {
		this.jA(String, "GetAddIns", {
			addInType: n
		}, t, i, r)
	},
	eO: function(n, t, i) {
		this.jA(0, "GetAllAttachmentDataProviderCreators", {}, n, t, i)
	},
	bD: function(n, t, i, r) {
		this.jA(Array, "GetAllAttachmentDataProviders", n, t, i, r)
	},
	eP: function(n, t, i, r) {
		this.jA(0, "GetAllowedOptions", n, t, i, r)
	},
	eQ: function(n, t, i, r) {
		this.jA(0, "GetApp", n, t, i, r)
	},
	bE: function(n, t, i, r) {
		this.jA(0, "GetAttachment", n, t, i, r)
	},
	eR: function(n, t, i, r) {
		this.jA(0, "GetAttachmentDataProviderCreator", n, t, i, r)
	},
	bF: function(n, t, i) {
		this.jA(0, "GetAttachmentDataProviderGroups", {}, n, t, i)
	},
	bG: function(n, t, i, r) {
		this.jA(0, "GetAttachmentDataProviderItems", {
			request: n
		}, t, i, r)
	},
	bH: function(n, t, i) {
		this.jA(0, "GetAttachmentDataProviderRecentItems", {}, n, t, i)
	},
	bI: function(n, t, i) {
		this.jA(0, "GetAttachmentDataProviderUploadFolderProps", {}, n, t, i)
	},
	bJ: function(n, t, i) {
		this.jA(String, "GetAttachmentDownloadToken", {}, n, t, i)
	},
	eS: function(n, t, i, r, u, f, e) {
		this.jA(0, "GetAttachmentInfo", {
			attachmentId: n,
			isEdit: t,
			draftId: i,
			appId: e
		}, r, u, f)
	},
	eT: function(n, t, i, r) {
		this.jA(0, "GetAttachmentItems", n, t, i, r)
	},
	eU: function(n, t, i, r) {
		this.jA(0, "GetAttachmentPreviews", n, t, i, r)
	},
	bK: function(n, t, i, r) {
		this.jA(0, "GetAttachmentTextPreview", n, t, i, r)
	},
	eV: function(n, t, i, r) {
		this.jA(0, "GetAutoSuggestions", n, t, i, r)
	},
	eW: function(n, t, i, r) {
		this.jA(0, "GetAvailableRetentionPolicyTags", n, t, i, r)
	},
	eX: function(n, t, i, r) {
		this.jA(0, "GetBirthdayCalendarView", n, t, i, r)
	},
	bL: function(n, t, i, r) {
		this.jA(0, "GetBirthdayEvent", n, t, i, r)
	},
	eY: function(n, t, i, r) {
		this.jA(0, "GetBookingCalendarPublishing", n, t, i, r)
	},
	eZ: function(n, t, i, r) {
		this.jA(0, "GetBookingCustomQuestionsCommand", n, t, i, r)
	},
	fa: function(n, t, i, r) {
		this.jA(0, "GetBookingMailboxDiagnostics", n, t, i, r)
	},
	fb: function(n, t, i, r) {
		this.jA(0, "GetBookingMailboxes", n, t, i, r)
	},
	fc: function(n, t, i, r) {
		this.jA(0, "GetBookingService", n, t, i, r)
	},
	fd: function(n, t, i, r) {
		this.jA(0, "GetBookingServices", n, t, i, r)
	},
	fe: function(n, t, i, r) {
		this.jA(0, "GetBookingStaff", n, t, i, r)
	},
	ff: function(n, t, i, r) {
		this.jA(0, "GetBookingStatistics", n, t, i, r)
	},
	fg: function(n, t, i, r) {
		this.jA(0, "GetBookingSubscriptionInfo", n, t, i, r)
	},
	bM: function(n, t, i) {
		this.jA(0, "GetBposShellInfoNavBarData", {}, n, t, i)
	},
	fh: function(n, t, i, r) {
		this.jA(0, "GetBusinessInformation", n, t, i, r)
	},
	bN: function(n, t, i, r) {
		this.jA(0, "GetCalendarEvent", n, t, i, r)
	},
	fi: function(n, t, i, r) {
		this.jA(0, "GetCalendarFeeds", n, t, i, r)
	},
	fj: function(n, t, i, r) {
		this.jA(0, "GetCalendarFeedsLanguagesAndRegions", n, t, i, r)
	},
	w: function(n, t, i, r) {
		this.jA(0, "GetCalendarFolderConfiguration", {
			request: n
		}, t, i, r)
	},
	x: function(n, t, i) {
		this.jA(0, "GetCalendarFolders", {}, n, t, i)
	},
	fk: function(n, t, i) {
		this.jA(0, "GetCalendarNotification", {}, n, t, i)
	},
	bO: function(n, t, i) {
		this.jA(0, "GetCalendarProcessing", {}, n, t, i)
	},
	fl: function(n, t, i, r) {
		this.jA(0, "GetCalendarSharingPermissions", {
			request: n
		}, t, i, r)
	},
	y: function(n, t, i, r) {
		this.jA(0, "GetCalendarSharingRecipientInfo", {
			request: n
		}, t, i, r)
	},
	bP: function(n, t, i, r) {
		this.jA(0, "GetCalendarView", n, t, i, r)
	},
	fm: function(n, t, i, r) {
		this.jA(0, "GetCASMailbox2", n, t, i, r)
	},
	bQ: function(n, t, i, r, u) {
		this.jA(0, "GetCertsInfo", {
			certRawData: n,
			isSend: t
		}, i, r, u)
	},
	f: function(n, t, i, r) {
		this.jA(0, "GetClientAccessToken", n, t, i, r)
	},
	fn: function(n, t, i, r) {
		this.jA(0, "GetClutterState", n, t, i, r)
	},
	bR: function(n, t, i) {
		this.jA(0, "GetComplianceConfiguration", {}, n, t, i)
	},
	fo: function(n, t, i, r) {
		this.jA(0, "GetConnectedAccounts", n, t, i, r)
	},
	bS: function(n, t, i, r) {
		this.jA(0, "GetConnectSubscription", n, t, i, r)
	},
	fp: function(n, t, i, r) {
		this.jA(0, "GetConnectToSocialNetworksOAuthInfo", n, t, i, r)
	},
	z: function(n, t, i, r) {
		this.jA(0, "GetConsumerMailbox", n, t, i, r)
	},
	fq: function(n, t, i, r) {
		this.jA(0, "GetContentSubmissionRules", n, t, i, r)
	},
	bT: function(n, t, i, r) {
		this.jA(0, "GetConversationItems", n, t, i, r)
	},
	fr: function(n, t, i, r) {
		this.jA(0, "GetConversationItemsDiagnostics", n, t, i, r)
	},
	bU: function(n, t, i) {
		this.jA(Number, "GetDaysUntilPasswordExpiration", {}, n, t, i)
	},
	fs: function(n, t, i, r) {
		this.jA(0, "GetDlMembersForUnifiedGroup", n, t, i, r)
	},
	bV: function(n, t, i, r) {
		this.jA(0, "GetDlpPolicyTips", n, t, i, r)
	},
	bW: function(n, t, i, r) {
		this.jA(0, "GetEncryptionCerts", {
			request: n
		}, t, i, r)
	},
	bX: function(n, t, i, r) {
		this.jA(0, "GetExtensibilityContext", {
			request: n
		}, t, i, r)
	},
	A: function(n, t, i) {
		this.jA(0, "GetFavorites", {}, n, t, i)
	},
	ft: function(n, t, i, r) {
		this.jA(0, "GetFileItems", n, t, i, r)
	},
	fu: function(n, t, i) {
		this.jA(0, "GetFlightsOverrideData", {}, n, t, i)
	},
	bY: function(n, t, i) {
		this.jA(Array, "GetFlightsSettings", {}, n, t, i)
	},
	fv: function(n, t, i, r, u) {
		this.jA(0, "GetFlowConversation", {
			folderId: n,
			conversationCount: t
		}, i, r, u)
	},
	fw: function(n, t, i) {
		this.jA(0, "GetFocusedInboxConfiguration", {}, n, t, i)
	},
	g: function(n, t, i, r) {
		this.jA(0, "GetFolder", n, t, i, r)
	},
	fx: function(n, t, i, r) {
		this.jA(0, "GetFolderChangeDigest", n, t, i, r)
	},
	bZ: function(n, t, i) {
		this.jA(0, "GetFolderMruConfiguration", {}, n, t, i)
	},
	fy: function(n, t, i, r) {
		this.jA(0, "GetFullSearchHistoryFromRest", n, t, i, r)
	},
	fz: function(n, t, i, r, u, f, e, o) {
		this.jA(0, "GetGroup", {
			itemId: n,
			adObjectId: t,
			emailAddress: i,
			paging: r,
			resultSet: u
		}, f, e, o)
	},
	ca: function(n, t, i, r) {
		this.jA(0, "GetGroupInfo", {
			getGroupInfoRequest: n
		}, t, i, r)
	},
	fA: function(n, t, i, r) {
		this.jA(0, "GetHolidayCalendars", n, t, i, r)
	},
	fB: function(n, t, i, r) {
		this.jA(0, "GetHotmailSubscription", n, t, i, r)
	},
	fC: function(n, t, i, r) {
		this.jA(0, "GetImapSubscription", n, t, i, r)
	},
	fD: function(n, t, i, r) {
		this.jA(0, "GetInboxRule", n, t, i, r)
	},
	fE: function(n, t, i, r, u) {
		this.jA(0, "GetInlineExploreSpContent", {
			query: n,
			targetUrl: t
		}, i, r, u)
	},
	a: function(n, t, i, r) {
		this.jA(0, "GetItem", n, t, i, r)
	},
	cb: function(n, t, i, r) {
		this.jA(0, "GetLinkPreview", {
			getLinkPreviewRequest: n
		}, t, i, r)
	},
	fF: function(n, t, i) {
		this.jA(0, "GetMailboxAutoReplyConfiguration", {}, n, t, i)
	},
	fG: function(n, t, i, r) {
		this.jA(0, "GetMailboxByIdentity", n, t, i, r)
	},
	cc: function(n, t, i) {
		this.jA(0, "GetMailboxCalendarConfiguration", {}, n, t, i)
	},
	B: function(n, t, i) {
		this.jA(0, "GetMailboxJunkEmailConfiguration", {}, n, t, i)
	},
	C: function(n, t, i) {
		this.jA(0, "GetMailboxMessageConfiguration", {}, n, t, i)
	},
	fH: function(n, t, i, r) {
		this.jA(0, "GetMailboxPermission", n, t, i, r)
	},
	fI: function(n, t, i, r) {
		this.jA(0, "GetMailboxRegionalConfiguration", n, t, i, r)
	},
	cd: function(n, t, i, r) {
		this.jA(0, "GetMailTips", n, t, i, r)
	},
	fJ: function(n, t, i, r) {
		this.jA(0, "GetMeetingPoll", n, t, i, r)
	},
	fK: function(n, t, i) {
		this.jA(0, "GetMerchantStatus", {}, n, t, i)
	},
	fL: function(n, t, i) {
		this.jA(0, "GetMessageCategory", {}, n, t, i)
	},
	fM: function(n, t, i) {
		this.jA(0, "GetMessageClassification", {}, n, t, i)
	},
	ce: function(n, t, i, r) {
		this.jA(String, "GetMime", {
			itemId: n
		}, t, i, r)
	},
	fN: function(n, t, i, r) {
		this.jA(0, "GetMobileDeviceStatistics", n, t, i, r)
	},
	fO: function(n, t, i, r) {
		this.jA(0, "GetModernGroup", {
			request: n
		}, t, i, r)
	},
	fP: function(n, t, i) {
		this.jA(0, "GetModernGroupDomain", {}, n, t, i)
	},
	fQ: function(n, t, i) {
		this.jA(0, "GetModernGroups", {}, n, t, i)
	},
	fR: function(n, t, i, r) {
		this.jA(0, "GetModernGroupUnseenItems", {
			request: n
		}, t, i, r)
	},
	fS: function(n, t, i, r) {
		this.jA(0, "GetMrsConnectedAccounts", n, t, i, r)
	},
	cf: function(n, t, i, r) {
		this.jA(0, "GetNewAttachmentDataProviderCreationInfo", n, t, i, r)
	},
	fT: function(n, t, i, r) {
		this.jA(0, "GetNextMeetingWithPerson", n, t, i, r)
	},
	cg: function(n, t, i, r) {
		this.jA(0, "GetNotesForPersona", {
			getNotesForPersonaRequest: n
		}, t, i, r)
	},
	fU: function(n, t, i, r) {
		this.jA(0, "GetOAuth2AuthorizationEndpointInfo", n, t, i, r)
	},
	fV: function(n, t, i, r) {
		this.jA(0, "GetOAuth2RefreshTokenInfo", n, t, i, r)
	},
	fW: function(n, t, i) {
		this.jA(0, "GetOptionSummary", {}, n, t, i)
	},
	ch: function(n, t, i, r) {
		this.jA(0, "GetOrganizationHierarchyForPersona", {
			getOrganizationHierarchyForPersonaRequest: n
		}, t, i, r)
	},
	ci: function(n, t, i) {
		this.jA(0, "GetOtherMailboxConfiguration", {}, n, t, i)
	},
	fX: function(n, t, i, r) {
		this.jA(0, "GetOutlookDotComMigrationDiagnostics", n, t, i, r)
	},
	fY: function(n, t, i) {
		this.jA(Array, "GetOverridableFlights", {}, n, t, i)
	},
	cj: function(n, t, i) {
		this.jA(0, "GetOwaNonBootUserConfiguration", {}, n, t, i)
	},
	h: function(n, t, i) {
		this.jA(0, "GetOwaUserConfiguration", {}, n, t, i)
	},
	ck: function(n, t, i) {
		this.jA(0, "GetOwaUserOofSettings", {}, n, t, i)
	},
	cl: function(n, t, i, r) {
		this.jA(0, "GetParcelDeliveryStatus", n, t, i, r)
	},
	D: function(n, t, i) {
		this.jA(Array, "GetPeopleFilters", {}, n, t, i)
	},
	cm: function(n, t, i, r) {
		this.jA(0, "GetPeopleIKnowGraphCommand", {
			request: n
		}, t, i, r)
	},
	fZ: function(n, t, i, r) {
		this.jA(0, "GetPeopleUserMeetsWith", {
			request: n
		}, t, i, r)
	},
	ga: function(n, t, i, r) {
		this.jA(0, "GetPeopleWaitingOnUser", {
			request: n
		}, t, i, r)
	},
	cn: function(n, t, i, r) {
		this.jA(0, "GetPersona", n, t, i, r)
	},
	gb: function(n, t, i, r) {
		this.jA(0, "GetPersonalListsMapping", {
			request: n
		}, t, i, r)
	},
	gc: function(n, t, i, r) {
		this.jA(0, "GetPersonalSchedulingPage", n, t, i, r)
	},
	gd: function(n, t, i, r) {
		this.jA(0, "GetPersonaModernGroupMembership", {
			request: n
		}, t, i, r)
	},
	ge: function(n, t, i, r, u) {
		this.jA(0, "GetPersonaNotes", {
			personaId: n,
			maxBytesToFetch: t
		}, i, r, u)
	},
	gf: function(n, t, i, r) {
		this.jA(0, "GetPersonaOrganizationHierarchy", {
			galObjectGuid: n
		}, t, i, r)
	},
	co: function(n, t, i, r) {
		this.jA(Array, "GetPersonaSuggestions", {
			personaId: n
		}, t, i, r)
	},
	gg: function(n, t, i, r) {
		this.jA(0, "GetPopSubscription", n, t, i, r)
	},
	gh: function(n, t, i, r) {
		this.jA(Number, "GetPresence", {
			sipUris: n
		}, t, i, r)
	},
	E: function(n, t, i, r) {
		this.jA(0, "GetRegionalConfiguration", n, t, i, r)
	},
	F: function(n, t, i, r) {
		this.jA(0, "GetReminders", n, t, i, r)
	},
	cp: function(n, t, i, r) {
		this.jA(0, "GetRoomLists", n, t, i, r)
	},
	cq: function(n, t, i, r) {
		this.jA(Array, "GetRoomsInternal", {
			roomList: n
		}, t, i, r)
	},
	gi: function(n, t, i, r) {
		this.jA(0, "GetSchedule", n, t, i, r)
	},
	gj: function(n, t, i, r) {
		this.jA(0, "GetSchedulesView", n, t, i, r)
	},
	cr: function(n, t, i, r) {
		this.jA(0, "GetSearchSuggestions", n, t, i, r)
	},
	gk: function(n, t, i, r) {
		this.jA(0, "GetSharePointSiteDetails", {
			sharePointObjectUrl: n
		}, t, i, r)
	},
	gl: function(n, t, i, r) {
		this.jA(0, "GetSharePointTextFileContent", {
			request: n
		}, t, i, r)
	},
	cs: function(n, t, i, r) {
		this.jA(0, "GetSharingInformation", n, t, i, r)
	},
	ct: function(n, t, i, r) {
		this.jA(0, "GetSharingInvitations", n, t, i, r)
	},
	gm: function(n, t, i, r) {
		this.jA(0, "GetSharingPermissionInfo", n, t, i, r)
	},
	gn: function(n, t, i, r) {
		this.jA(0, "GetSharingPermissions", n, t, i, r)
	},
	go: function(n, t, i, r) {
		this.jA(0, "GetSocialActivityNotifications", {
			request: n
		}, t, i, r)
	},
	cu: function(n, t, i, r) {
		this.jA(0, "GetSocialActivityNotifications2", n, t, i, r)
	},
	gp: function(n, t, i, r) {
		this.jA(0, "GetStaffAvailability", n, t, i, r)
	},
	gq: function(n, t, i) {
		this.jA(0, "GetSubscription", {}, n, t, i)
	},
	gr: function(n, t, i, r) {
		this.jA(0, "GetSuggestedGroupsFromRecipients", n, t, i, r)
	},
	cv: function(n, t, i, r) {
		this.jA(0, "GetSuggestedUnifiedGroups", n, t, i, r)
	},
	gs: function(n, t, i, r) {
		this.jA(0, "GetSupportOfficeFaqs", n, t, i, r)
	},
	gt: function(n, t, i, r) {
		this.jA(0, "GetSweepRules", n, t, i, r)
	},
	gu: function(n, t, i, r) {
		this.jA(0, "GetSyncRequest", n, t, i, r)
	},
	gv: function(n, t, i) {
		this.jA(0, "GetTaskFolders", {}, n, t, i)
	},
	gw: function(n, t, i, r) {
		this.jA(0, "GetTextMessagingAccount", n, t, i, r)
	},
	G: function(n, t, i) {
		this.jA(0, "GetThemes", {}, n, t, i)
	},
	gx: function(n, t, i, r) {
		this.jA(0, "GetThreadedConversationItems", n, t, i, r)
	},
	gy: function(n, t, i, r) {
		this.jA(0, "GetTimeZone", {
			needTimeZoneList: n
		}, t, i, r)
	},
	gz: function(n, t, i, r) {
		this.jA(0, "GetTimeZoneOffsets", n, t, i, r)
	},
	cw: function(n, t, i, r) {
		this.jA(0, "GetUcwaUserConfiguration", {
			sipUri: n
		}, t, i, r)
	},
	gA: function(n, t, i, r) {
		this.jA(0, "GetUMCallAnsweringRule", n, t, i, r)
	},
	gB: function(n, t, i, r) {
		this.jA(0, "GetUMMailbox", n, t, i, r)
	},
	gC: function(n, t, i, r) {
		this.jA(0, "GetUMMailboxConfiguration", n, t, i, r)
	},
	gD: function(n, t, i, r) {
		this.jA(0, "GetUMPhoneSession", n, t, i, r)
	},
	cx: function(n, t, i, r) {
		this.jA(0, "GetUnifiedGroupDetails", n, t, i, r)
	},
	cy: function(n, t, i, r) {
		this.jA(0, "GetUnifiedGroupMembers", n, t, i, r)
	},
	cz: function(n, t, i, r) {
		this.jA(0, "GetUnifiedGroupsSettings", n, t, i, r)
	},
	cA: function(n, t, i, r) {
		this.jA(0, "GetUnifiedGroupUnseenCount", n, t, i, r)
	},
	gE: function(n, t, i) {
		this.jA(0, "GetUnseenLightningIds", {}, n, t, i)
	},
	gF: function(n, t, i, r) {
		this.jA(0, "GetUserAvailability", n, t, i, r)
	},
	i: function(n, t, i, r) {
		this.jA(0, "GetUserAvailabilityInternal", {
			request: n
		}, t, i, r)
	},
	cB: function(n, t, i, r) {
		this.jA(0, "GetUserUnifiedGroups", n, t, i, r)
	},
	gG: function(n, t, i) {
		this.jA(0, "GetUserVoiceData", {}, n, t, i)
	},
	cC: function(n, t, i, r, u, f, e) {
		this.jA(0, "GetWacAttachmentInfo", {
			attachmentId: n,
			isEdit: t,
			draftId: i,
			appId: e
		}, r, u, f)
	},
	gH: function(n, t, i, r) {
		this.jA(String, "GetWacIframeUrl", {
			attachmentId: n
		}, t, i, r)
	},
	gI: function(n, t, i, r) {
		this.jA(0, "GetWacInfo", {
			request: n
		}, t, i, r)
	},
	gJ: function(n, t, i, r) {
		this.jA(0, "GetWeatherForecast", n, t, i, r)
	},
	gK: function(n, t, i, r, u, f) {
		this.jA(0, "ImmersiveReaderProcessText", {
			itemId: n,
			sessionId: t,
			version: f
		}, i, r, u)
	},
	cD: function(n, t, i, r) {
		this.jA(0, "ImportCalendarEvent", n, t, i, r)
	},
	gL: function(n, t, i, r) {
		this.jA(0, "ImportContactList", n, t, i, r)
	},
	gM: function(n, t, i, r) {
		this.jA(0, "InstallExtension", n, t, i, r)
	},
	gN: function(n, t, i, r) {
		this.jA(Number, "InstantMessageSignIn", {
			signedInManually: n
		}, t, i, r)
	},
	gO: function(n, t, i, r) {
		this.jA(Number, "InstantMessageSignOut", {
			reserved: n
		}, t, i, r)
	},
	gP: function(n, t, i) {
		this.jA(0, "InvalidateOwaUserSessions", {}, n, t, i)
	},
	cE: function(n, t, i, r) {
		this.jA(0, "JoinPrivateUnifiedGroup", n, t, i, r)
	},
	cF: function(n, t, i, r) {
		this.jA(0, "LikeItem2", n, t, i, r)
	},
	gQ: function(n, t, i, r, u) {
		this.jA(0, "LinkPersona", {
			linkToPersonaId: n,
			personaIdToBeLinked: t
		}, i, r, u)
	},
	gR: function(n, t, i, r) {
		this.jA(0, "LinkPersonas", {
			request: n
		}, t, i, r)
	},
	cG: function(n, t, i, r) {
		this.jA(0, "LoadExtensionCustomProperties", {
			request: n
		}, t, i, r)
	},
	H: function(n, t, i, r) {
		this.jB("LogDatapoint", {
			datapoints: n
		}, t, i, r)
	},
	gS: function(n, t, i, r) {
		this.jA(0, "LogPushNotificationData", n, t, i, r)
	},
	gT: function(n, t, i, r) {
		this.jA(0, "LogSubstrateSearchEvents", n, t, i, r)
	},
	gU: function(n, t, i, r) {
		this.jA(0, "MarkAllItemsAsRead", n, t, i, r)
	},
	I: function(n, t, i, r) {
		this.jB("MarkAsJunk", n, t, i, r)
	},
	gV: function(n, t, i, r) {
		this.jA(0, "MarkSocialActivityNotificationsAsSeen2", n, t, i, r)
	},
	J: function(n, t, i, r) {
		this.jB("MaskAutoCompleteRecipient", n, t, i, r)
	},
	gW: function(n, t, i, r) {
		this.jA(0, "MeetNowInit", {
			request: n
		}, t, i, r)
	},
	gX: function(n, t, i, r) {
		this.jA(0, "ModernGroupMembershipRequestMessageDetails", {
			request: n
		}, t, i, r)
	},
	gY: function(n, t, i, r, u) {
		this.jA(0, "MoveContactFolder", {
			folderId: n,
			priority: t
		}, i, r, u)
	},
	gZ: function(n, t, i, r) {
		this.jA(0, "MoveFolder", n, t, i, r)
	},
	K: function(n, t, i, r) {
		this.jB("MoveItem", n, t, i, r)
	},
	ha: function(n, t, i, r) {
		this.jA(0, "NewApp", n, t, i, r)
	},
	hb: function(n, t, i, r) {
		this.jA(0, "NewBookingMailbox", n, t, i, r)
	},
	hc: function(n, t, i, r) {
		this.jA(0, "NewConnectSubscription", n, t, i, r)
	},
	hd: function(n, t, i, r) {
		this.jA(0, "NewImapSubscription", n, t, i, r)
	},
	he: function(n, t, i, r) {
		this.jA(0, "NewInboxRule", n, t, i, r)
	},
	hf: function(n, t, i, r) {
		this.jA(0, "NewPopSubscription", n, t, i, r)
	},
	hg: function(n, t, i, r) {
		this.jA(0, "NewSubscription", n, t, i, r)
	},
	hh: function(n, t, i, r) {
		this.jA(0, "NewSyncRequest", n, t, i, r)
	},
	hi: function(n, t, i, r) {
		this.jA(0, "NewUMCallAnsweringRule", n, t, i, r)
	},
	hj: function(n, t, i, r) {
		this.jA(Boolean, "NotifyAppWipe", {
			wipeReason: n
		}, t, i, r)
	},
	hk: function(n, t, i) {
		this.jA(0, "OneNoteGetNotebooks", {}, n, t, i)
	},
	hl: function(n, t, i, r) {
		this.jA(0, "OneNoteSaveItem", n, t, i, r)
	},
	hm: function(n, t, i, r) {
		this.jA(0, "PerformInstantSearch", {
			request: n
		}, t, i, r)
	},
	cH: function(n, t, i, r) {
		this.jB("PerformReminderAction", n, t, i, r)
	},
	hn: function(n, t, i, r) {
		this.jA(0, "PlayOnPhone", n, t, i, r)
	},
	cI: function(n, t, i, r) {
		this.jA(0, "PostGroupItem", n, t, i, r)
	},
	cJ: function(n, t, i, r) {
		this.jA(0, "PostModernGroupItem", n, t, i, r)
	},
	ho: function(n, t, i, r) {
		this.jA(0, "PostNewUserVoiceNpsRatingSurvey", n, t, i, r)
	},
	hp: function(n, t, i, r) {
		this.jA(0, "PostNewUserVoiceSuggestion", n, t, i, r)
	},
	cK: function(n, t, i, r) {
		this.jA(0, "PostUnifiedGroupItem", n, t, i, r)
	},
	hq: function(n, t, i, r) {
		this.jA(0, "Provision", n, t, i, r)
	},
	hr: function(n, t, i) {
		this.jA(0, "RefreshSession", {}, n, t, i)
	},
	cL: function(n, t, i, r) {
		this.jA(0, "RegisterConsent", n, t, i, r)
	},
	hs: function(n, t, i, r, u) {
		this.jA(0, "RejectPersonaLinkSuggestion", {
			personaId: n,
			suggestedPersonaId: t
		}, i, r, u)
	},
	ht: function(n, t, i, r) {
		this.jA(0, "RemoveActiveRetentionPolicyTags", n, t, i, r)
	},
	hu: function(n, t, i, r) {
		this.jA(0, "RemoveApp", n, t, i, r)
	},
	hv: function(n, t, i, r) {
		this.jA(0, "RemoveAttachmentDataProvider", n, t, i, r)
	},
	cM: function(n, t, i, r) {
		this.jA(0, "RemoveBirthdayEvent", n, t, i, r)
	},
	hw: function(n, t, i, r) {
		this.jA(0, "RemoveConnectSubscription", n, t, i, r)
	},
	hx: function(n, t, i, r) {
		this.jA(0, "RemoveContentSubmissionRules", n, t, i, r)
	},
	hy: function(n, t, i, r) {
		this.jA(0, "RemoveMobileDevice", n, t, i, r)
	},
	hz: function(n, t, i, r) {
		this.jA(Boolean, "RemoveSharedFolders", {
			primarySMTPAddress: n
		}, t, i, r)
	},
	hA: function(n, t, i, r) {
		this.jA(0, "RemoveSubscription", n, t, i, r)
	},
	hB: function(n, t, i, r) {
		this.jA(0, "RemoveSyncRequest", n, t, i, r)
	},
	cN: function(n, t, i, r) {
		this.jA(0, "RemoveTailoredExperienceEventsFromCalendar", n, t, i, r)
	},
	hC: function(n, t, i, r) {
		this.jA(0, "RemoveUMCallAnsweringRule", n, t, i, r)
	},
	hD: function(n, t, i, r) {
		this.jA(0, "RemoveUnifiedGroup", n, t, i, r)
	},
	hE: function(n, t, i, r, u) {
		this.jA(0, "RenameCalendar", {
			itemId: n,
			newCalendarName: t
		}, i, r, u)
	},
	hF: function(n, t, i, r, u) {
		this.jA(0, "RenameCalendarGroup", {
			groupId: n,
			newGroupName: t
		}, i, r, u)
	},
	hG: function(n, t, i, r, u) {
		this.jA(0, "RenameTaskFolder", {
			itemId: n,
			newTaskFolderName: t
		}, i, r, u)
	},
	hH: function(n, t, i, r) {
		this.jA(0, "ReplyToBotMessage", {
			replyToBotMessageRequest: n
		}, t, i, r)
	},
	hI: function(n, t, i, r) {
		this.jA(0, "ReportMessageToSafetyLibrary", n, t, i, r)
	},
	hJ: function(n, t, i, r) {
		this.jA(0, "RequestDeviceRegistrationChallenge", n, t, i, r)
	},
	cO: function(n, t, i) {
		this.jA(Number, "ResetPresence", {}, n, t, i)
	},
	L: function(n, t, i, r) {
		this.jB("RespondToCalendarEvent", n, t, i, r)
	},
	hK: function(n, t, i, r) {
		this.jA(0, "RespondToCoauthoringInvitation", n, t, i, r)
	},
	M: function(n, t, i, r) {
		this.jB("RespondToMeetingMessage", n, t, i, r)
	},
	cP: function(n, t, i, r) {
		this.jA(0, "RespondToMeetingPoll", n, t, i, r)
	},
	cQ: function(n, t, i, r) {
		this.jA(String, "SanitizeHtml", {
			input: n
		}, t, i, r)
	},
	cR: function(n, t, i, r) {
		this.jA(String, "SaveAttachmentsToCloud", {
			requestObject: n
		}, t, i, r)
	},
	cS: function(n, t, i, r) {
		this.jA(0, "SaveExtensionCustomProperties", {
			request: n
		}, t, i, r)
	},
	cT: function(n, t, i, r) {
		this.jA(0, "SaveExtensionSettings", {
			request: n
		}, t, i, r)
	},
	hL: function(n, t, i, r) {
		this.jA(0, "ScheduleContentSubmission", n, t, i, r)
	},
	cU: function(n, t, i, r) {
		this.jA(0, "SearchAttachmentDataProviderItems", {
			request: n
		}, t, i, r)
	},
	hM: function(n, t, i, r) {
		this.jA(0, "SearchLocalEvents", n, t, i, r)
	},
	hN: function(n, t, i, r) {
		this.jA(0, "SearchMailboxes", n, t, i, r)
	},
	N: function(n, t, i, r) {
		this.jA(0, "SendCalendarSharingInvite", {
			request: n
		}, t, i, r)
	},
	cV: function(n, t, i, r) {
		this.jA(Number, "SendChatMessage", {
			message: n
		}, t, i, r)
	},
	hO: function(n, t, i, r) {
		this.jA(0, "SendGroupsAppSmsInvite", n, t, i, r)
	},
	hP: function(n, t, i, r) {
		this.jA(0, "SendGroupsAppUpsellEmail", n, t, i, r)
	},
	cW: function(n, t, i, r) {
		this.jB("SendLinkClickedSignalToSP", {
			sendLinkClickedRequest: n
		}, t, i, r)
	},
	O: function(n, t, i, r) {
		this.jB("SendReadReceipt", {
			itemId: n
		}, t, i, r)
	},
	hQ: function(n, t, i, r) {
		this.jA(0, "SendScheduleSharingInvite", n, t, i, r)
	},
	hR: function(n, t, i, r) {
		this.jA(0, "SendTextMessagingVerificationCode", n, t, i, r)
	},
	cX: function(n, t, i, r) {
		this.jA(Boolean, "SetAttachmentPermissions", {
			request: n
		}, t, i, r)
	},
	cY: function(n, t, i, r) {
		this.jA(0, "SetAttachmentPermissionsV2", {
			request: n
		}, t, i, r)
	},
	hS: function(n, t, i, r) {
		this.jA(0, "SetBookingCalendarPublishing", n, t, i, r)
	},
	hT: function(n, t, i, r) {
		this.jA(0, "SetBookingMailboxSBGraphLinking", n, t, i, r)
	},
	hU: function(n, t, i, r) {
		this.jA(0, "SetBusinessInformation", n, t, i, r)
	},
	hV: function(n, t, i, r, u) {
		this.jA(0, "SetCalendarColor", {
			itemId: n,
			calendarColor: t
		}, i, r, u)
	},
	hW: function(n, t, i, r) {
		this.jA(0, "SetCalendarNotification", n, t, i, r)
	},
	cZ: function(n, t, i, r) {
		this.jA(0, "SetCalendarProcessing", n, t, i, r)
	},
	hX: function(n, t, i, r) {
		this.jA(0, "SetCalendarPublishing", {
			request: n
		}, t, i, r)
	},
	hY: function(n, t, i, r) {
		this.jA(0, "SetCalendarSharingPermissions", {
			request: n
		}, t, i, r)
	},
	hZ: function(n, t, i, r) {
		this.jA(0, "SetCASMailbox", n, t, i, r)
	},
	ia: function(n, t, i, r) {
		this.jA(0, "SetClutterState", n, t, i, r)
	},
	ib: function(n, t, i, r) {
		this.jA(0, "SetConnectSubscription", n, t, i, r)
	},
	ic: function(n, t, i, r) {
		this.jA(0, "SetConsumerMailbox", n, t, i, r)
	},
	id: function(n, t, i, r) {
		this.jA(0, "SetContentSubmissionRules", n, t, i, r)
	},
	ie: function(n, t, i, r) {
		this.jA(Boolean, "SetFlightsOverrideData", n, t, i, r)
	},
	ig: function(n, t, i, r) {
		this.jA(0, "SetFocusedInboxConfiguration", {
			request: n
		}, t, i, r)
	},
	ih: function(n, t, i, r) {
		this.jA(Boolean, "SetFolderMruConfiguration", {
			folderMruConfiguration: n
		}, t, i, r)
	},
	ii: function(n, t, i, r) {
		this.jA(0, "SetHolidaySubscriptions", n, t, i, r)
	},
	ij: function(n, t, i, r) {
		this.jA(0, "SetHotmailSubscription", n, t, i, r)
	},
	ik: function(n, t, i, r) {
		this.jA(0, "SetImapSubscription", n, t, i, r)
	},
	il: function(n, t, i, r) {
		this.jA(0, "SetInboxAndSweepRules", n, t, i, r)
	},
	im: function(n, t, i, r) {
		this.jA(0, "SetInboxRule", n, t, i, r)
	},
	io: function(n, t, i, r) {
		this.jA(Boolean, "SetLayoutSettings", {
			layoutSettings: n
		}, t, i, r)
	},
	da: function(n, t, i, r) {
		this.jA(0, "SetMailbox", n, t, i, r)
	},
	ip: function(n, t, i, r) {
		this.jA(0, "SetMailboxAutoReplyConfiguration", n, t, i, r)
	},
	P: function(n, t, i, r) {
		this.jA(0, "SetMailboxCalendarConfiguration", n, t, i, r)
	},
	iq: function(n, t, i, r) {
		this.jA(0, "SetMailboxJunkEmailConfiguration", n, t, i, r)
	},
	db: function(n, t, i, r) {
		this.jA(0, "SetMailboxMessageConfiguration", n, t, i, r)
	},
	ir: function(n, t, i, r) {
		this.jA(0, "SetMailboxRegionalConfiguration", n, t, i, r)
	},
	is: function(n, t, i, r, u) {
		this.jA(0, "SetModernGroupPinState", {
			smtpAddress: n,
			isPinned: t
		}, i, r, u)
	},
	it: function(n, t, i, r) {
		this.jA(Boolean, "SetOwaUserOofSettings", {
			userOofSettings: n
		}, t, i, r)
	},
	iu: function(n, t, i, r) {
		this.jA(0, "SetPersonalSchedulingPage", n, t, i, r)
	},
	iv: function(n, t, i, r) {
		this.jA(0, "SetPopSubscription", n, t, i, r)
	},
	dc: function(n, t, i, r) {
		this.jA(Number, "SetPresence", {
			presenceSetting: n
		}, t, i, r)
	},
	iw: function(n, t, i, r) {
		this.jA(0, "SetSweepRule", n, t, i, r)
	},
	ix: function(n, t, i, r) {
		this.jA(0, "SetSyncRequest", n, t, i, r)
	},
	iy: function(n, t, i, r) {
		this.jA(0, "SetTextMessagingAccount", n, t, i, r)
	},
	iz: function(n, t, i, r) {
		this.jA(Boolean, "SetTimeZone", {
			timezone: n
		}, t, i, r)
	},
	iA: function(n, t, i, r) {
		this.jA(0, "SetUMCallAnsweringRule", n, t, i, r)
	},
	iB: function(n, t, i, r) {
		this.jA(0, "SetUMMailbox", n, t, i, r)
	},
	iC: function(n, t, i, r) {
		this.jA(0, "SetUMMailboxConfiguration", n, t, i, r)
	},
	iD: function(n, t, i, r) {
		this.jA(0, "SetUMMailboxPIN", n, t, i, r)
	},
	dd: function(n, t, i, r) {
		this.jA(0, "SetUnifiedGroupFavoriteState", n, t, i, r)
	},
	de: function(n, t, i, r) {
		this.jA(0, "SetUnifiedGroupLastVisitedTime", n, t, i, r)
	},
	df: function(n, t, i, r) {
		this.jA(0, "SetUnifiedGroupMembershipState", n, t, i, r)
	},
	dg: function(n, t, i, r) {
		this.jA(0, "SetUnifiedGroupUserSubscribeState", n, t, i, r)
	},
	iE: function(n, t, i, r) {
		this.jA(0, "SetUser", n, t, i, r)
	},
	dh: function(n, t, i, r) {
		this.jA(0, "SetUserTheme", {
			request: n
		}, t, i, r)
	},
	di: function(n, t, i, r) {
		this.jA(0, "ShareTailoredExperienceEvent", n, t, i, r)
	},
	iF: function(n, t, i, r) {
		this.jA(0, "StartSearchSession", n, t, i, r)
	},
	iG: function(n, t, i, r) {
		this.jA(0, "StartUMPhoneSession", n, t, i, r)
	},
	iH: function(n, t, i, r) {
		this.jA(0, "StopUMPhoneSession", n, t, i, r)
	},
	iI: function(n, t, i, r) {
		this.jA(Number, "SubscribeForPresenceUpdates", {
			sipUris: n
		}, t, i, r)
	},
	dj: function(n, t, i, r) {
		this.jA(0, "SubscribeInternalCalendar", {
			request: n
		}, t, i, r)
	},
	Q: function(n, t, i, r) {
		this.jA(0, "SubscribeInternetCalendar", {
			request: n
		}, t, i, r)
	},
	iJ: function(n, t, i, r, u) {
		this.jA(Array, "SubscribeToGroupNotification", {
			request: n,
			subscriptionData: t
		}, i, r, u)
	},
	iK: function(n, t, i, r, u) {
		this.jA(Array, "SubscribeToGroupUnseenNotification", {
			request: n,
			subscriptionData: t
		}, i, r, u)
	},
	iL: function(n, t, i, r, u) {
		this.jA(Array, "SubscribeToNotification", {
			request: n,
			subscriptionData: t
		}, i, r, u)
	},
	iM: function(n, t, i, r) {
		this.jA(0, "SubscribeToPushNotification", n, t, i, r)
	},
	iN: function(n, t, i, r) {
		this.jA(0, "SubstrateSearchInit", n, t, i, r)
	},
	iO: function(n, t, i, r) {
		this.jA(0, "SyncCalendar", {
			request: n
		}, t, i, r)
	},
	iP: function(n, t, i, r) {
		this.jA(0, "SyncConversation", n, t, i, r)
	},
	iQ: function(n, t, i, r) {
		this.jA(0, "SyncFolderHierarchy", n, t, i, r)
	},
	iR: function(n, t, i, r) {
		this.jA(0, "SyncFolderItems", n, t, i, r)
	},
	dk: function(n, t, i, r) {
		this.jA(0, "SynchronizeWacAttachment", n, t, i, r)
	},
	iS: function(n, t, i, r) {
		this.jA(0, "SyncPeople", n, t, i, r)
	},
	iT: function(n, t, i, r) {
		this.jA(Boolean, "TerminateChatSession", {
			chatSessionId: n
		}, t, i, r)
	},
	iU: function(n, t, i, r) {
		this.jA(0, "UninstallExtension", n, t, i, r)
	},
	dl: function(n, t, i, r, u) {
		this.jA(0, "UnlinkPersona", {
			personaId: n,
			contactId: t
		}, i, r, u)
	},
	iV: function(n, t, i, r) {
		this.jA(Number, "UnsubscribeFromPresenceUpdates", {
			sipUri: n
		}, t, i, r)
	},
	iW: function(n, t, i, r) {
		this.jA(Boolean, "UnsubscribeToGroupNotification", {
			subscriptionData: n
		}, t, i, r)
	},
	iX: function(n, t, i, r) {
		this.jA(Boolean, "UnsubscribeToGroupUnseenNotification", {
			subscriptionData: n
		}, t, i, r)
	},
	dm: function(n, t, i, r) {
		this.jA(Boolean, "UnsubscribeToNotification", {
			subscriptionData: n
		}, t, i, r)
	},
	iY: function(n, t, i, r) {
		this.jA(0, "UnsubscribeToPushNotification", n, t, i, r)
	},
	iZ: function(n, t, i, r) {
		this.jA(0, "UpdateAndPostModernGroupItem", n, t, i, r)
	},
	dn: function(n, t, i, r) {
		this.jA(String, "UpdateAttachmentPermissions", {
			permissionsRequest: n
		}, t, i, r)
	},
	dp: function(n, t, i, r) {
		this.jA(0, "UpdateBirthdayEvent", n, t, i, r)
	},
	ja: function(n, t, i, r) {
		this.jA(0, "UpdateBookingCustomQuestion", n, t, i, r)
	},
	jb: function(n, t, i, r) {
		this.jA(0, "UpdateBookingService", n, t, i, r)
	},
	jc: function(n, t, i, r) {
		this.jA(0, "UpdateBookingServiceOrder", n, t, i, r)
	},
	jd: function(n, t, i, r) {
		this.jA(0, "UpdateBookingStaff", n, t, i, r)
	},
	R: function(n, t, i, r) {
		this.jB("UpdateCalendarEvent", n, t, i, r)
	},
	je: function(n, t, i, r) {
		this.jA(0, "UpdateCalendarSharingPermissions", n, t, i, r)
	},
	dq: function(n, t, i, r) {
		this.jA(0, "UpdateClientExtensionNotifications", n, t, i, r)
	},
	jf: function(n, t, i, r) {
		this.jA(Boolean, "UpdateClientTypeOptInState", {
			clientTypeOptInState: n
		}, t, i, r)
	},
	jg: function(n, t, i, r) {
		this.jA(0, "UpdateDelegateSharingPermission", n, t, i, r)
	},
	jh: function(n, t, i, r) {
		this.jA(0, "UpdateFavoriteFolder", {
			request: n
		}, t, i, r)
	},
	b: function(n, t, i, r) {
		this.jA(0, "UpdateFolder", n, t, i, r)
	},
	ji: function(n, t, i, r) {
		this.jA(0, "UpdateGlobalDelegateOptions", n, t, i, r)
	},
	c: function(n, t, i, r) {
		this.jA(0, "UpdateItem", n, t, i, r)
	},
	jj: function(n, t, i, r) {
		this.jA(Boolean, "UpdateLightning", n, t, i, r)
	},
	dr: function(n, t, i, r) {
		this.jA(0, "UpdateMasterCategoryList", {
			request: n
		}, t, i, r)
	},
	jk: function(n, t, i, r) {
		this.jA(0, "UpdateMeetingPoll", n, t, i, r)
	},
	jl: function(n, t, i, r) {
		this.jA(0, "UpdateModernGroup", {
			request: n
		}, t, i, r)
	},
	S: function(n, t, i, r) {
		this.jA(0, "UpdatePersona", {
			request: n
		}, t, i, r)
	},
	jm: function(n, t, i, r) {
		this.jA(Array, "UpdatePersonas", {
			request: n
		}, t, i, r)
	},
	jn: function(n, t, i, r) {
		this.jA(0, "UpdateSchedule", n, t, i, r)
	},
	jo: function(n, t, i, r) {
		this.jA(0, "UpdateSharingInvitation", n, t, i, r)
	},
	jp: function(n, t, i, r) {
		this.jA(0, "UpdateSharingPermissions", n, t, i, r)
	},
	ds: function(n, t, i, r) {
		this.jA(0, "UpdateUnifiedGroup", n, t, i, r)
	},
	T: function(n, t, i, r) {
		this.jB("UpdateUserConfiguration", n, t, i, r)
	},
	jq: function(n, t, i, r) {
		this.jA(0, "UpdateUserGroupsSetConfiguration", {
			request: n
		}, t, i, r)
	},
	jr: function(n, t, i, r) {
		this.jA(0, "UpgradeDistributionGroup", n, t, i, r)
	},
	js: function(n, t, i, r) {
		this.jA(String, "UploadFileToCloud", {
			requestObject: n
		}, t, i, r)
	},
	jt: function(n, t, i, r) {
		this.jA(0, "UploadPhoto", {
			request: n
		}, t, i, r)
	},
	ju: function(n, t, i, r) {
		this.jA(0, "ValidateAggregatedConfiguration", n, t, i, r)
	},
	jv: function(n, t, i, r) {
		this.jA(0, "ValidateModernGroupAlias", {
			request: n
		}, t, i, r)
	},
	jw: function(n, t, i, r) {
		this.jA(0, "ValidateUnifiedGroupAlias", n, t, i, r)
	},
	jx: function(n, t, i, r) {
		this.jA(0, "ValidateUnifiedGroupProperties", n, t, i, r)
	},
	jy: function(n, t, i, r) {
		this.jA(Number, "VerifyCert", {
			certRawData: n
		}, t, i, r)
	},
	dN: function(n, t, i, r) {
		this.jA(0, "CreateCalendarEvent", n, t, i, r)
	}
};
_g.cy = function() {
	_g.cy.initializeBase(this);
	this.__type = _g.cy._dataContractName
};
_g.cy._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["WhenOutlookFavoritesChanged"], null)
};
_g.db = function() {
	_g.db.initializeBase(this);
	this.__type = _g.db._dataContractName
};
_g.eJ = function() {
	_g.eJ.initializeBase(this);
	this.__type = _g.eJ._dataContractName
};
_g.cL = function() {
	_g.cL.initializeBase(this);
	this.__type = _g.cL._dataContractName
};
_g.o = function(n, t) {
	_g.o.initializeBase(this);
	this.__type = _g.o._dataContractName;
	this.Number = n;
	this.Type = t
};
_g.gr = function() {
	_g.gr.initializeBase(this);
	this.__type = _g.gr._dataContractName
};
_g.cp = function(n, t) {
	_g.cp.initializeBase(this);
	this.__type = _g.cp._dataContractName;
	this.Type = n;
	this.LocationSource = t
};
_g.dc = function() {
	_g.dc.initializeBase(this);
	this.__type = _g.dc._dataContractName
};
_g.dc._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["PostedTime"], null);
		_g.M._TZ(n, t, i, r)
	}
};
_g.gs = function() {
	_g.gs.initializeBase(this);
	this.__type = _g.gs._dataContractName
};
_g.gs._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.eK = function() {
	_g.eK.initializeBase(this);
	this.__type = _g.eK._dataContractName
};
_g.eK._TZ = function(n, t, i, r) {
	_g.gs._TZ(n, t, i, r)
};
_g.hp = function() {
	_g.hp.initializeBase(this);
	this.__type = _g.hp._dataContractName;
	this.ErrorCode = _errorCode
};
_g.jr = function() {
	_g.jr.initializeBase(this);
	this.__type = _g.jr._dataContractName
};
_g.hq = function() {
	_g.hq.initializeBase(this)
};
_g.d = function(n) {
	_g.d.initializeBase(this);
	this.__type = _g.d._dataContractName;
	this.FieldURI = n
};
_g.gt = function() {
	_g.gt.initializeBase(this);
	this.__type = _g.gt._dataContractName
};
_g.gt._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.js = function() {
	_g.js.initializeBase(this);
	this.__type = _g.js._dataContractName
};
_g.jt = function() {
	_g.jt.initializeBase(this);
	this.__type = _g.jt._dataContractName
};
_g.bn = function(n) {
	_g.bn.initializeBase(this);
	this.__type = _g.bn._dataContractName;
	this.OccurrenceId = n
};
_g.eL = function() {
	_g.eL.initializeBase(this);
	this.__type = _g.eL._dataContractName
};
_g.eL._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.kC = function() {
	_g.kC.initializeBase(this)
};
_g.eM = function() {
	_g.eM.initializeBase(this);
	this.__type = _g.eM._dataContractName
};
_g.eM._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["StartTime", "EndTime"], null)
};
_g.de = function() {
	_g.de.initializeBase(this);
	this.__type = _g.de._dataContractName
};
_g.de._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.dJ = function() {
	_g.dJ.initializeBase(this);
	this.__type = _g.dJ._dataContractName
};
_g.dJ._TZ = function(n, t, i, r) {
	_g.cb._TZ(n, t, i, r)
};
_g.bw = function() {
	_g.bw.initializeBase(this);
	this.__type = _g.bw._dataContractName
};
_g.bw._TZ = function(n, t, i, r) {
	_g.cb._TZ(n, t, i, r)
};
_g.bQ = function() {
	_g.bQ.initializeBase(this);
	this.__type = _g.bQ._dataContractName
};
_g.bQ._TZ = function(n, t, i, r) {
	_g.cb._TZ(n, t, i, r)
};
_g.gv = function() {
	_g.gv.initializeBase(this)
};
_g.gv._TZ = function(n, t, i, r) {
	_g.I._TZ(n, t, i, r)
};
_g.bo = function() {
	_g.bo.initializeBase(this);
	this.__type = _g.bo._dataContractName
};
_g.bo._TZ = function(n, t, i, r) {
	_g.gv._TZ(n, t, i, r)
};
_g.eN = function(n, t, i, r, u, f, e, o) {
	_g.eN.initializeBase(this);
	this.__type = _g.eN._dataContractName;
	this.DisplayName = n;
	this.RetentionId = t;
	this.RetentionPeriod = i;
	this.Type = r;
	this.RetentionAction = u;
	this.IsVisible = f;
	this.OptedInto = e;
	this.IsArchive = o
};
_g.bM = function(n) {
	_g.bM.initializeBase(this);
	this.__type = _g.bM._dataContractName;
	this.Value = n
};
_g.dK = function() {
	_g.dK.initializeBase(this);
	this.__type = _g.dK._dataContractName
};
_g.dK._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ContentExpiryDate"], null)
};
_g.eO = function() {
	_g.eO.initializeBase(this);
	this.__type = _g.eO._dataContractName
};
_g.kD = function() {
	_g.kD.initializeBase(this)
};
_g.dL = function() {
	_g.dL.initializeBase(this);
	this.__type = _g.dL._dataContractName
};
_g.jC = function() {
	_g.jC.initializeBase(this);
	this.__type = _g.jC._dataContractName
};
_g.jD = function() {
	_g.jD.initializeBase(this);
	this.__type = _g.jD._dataContractName;
	this.Id = _id;
	this.Mailbox = _mailbox;
	this.ParentId = _parentId
};
_g.bj = function(n, t) {
	_g.bj.initializeBase(this);
	this.__type = _g.bj._dataContractName;
	this.BasePoint = n;
	this.Condition = t
};
_g.dM = function() {
	_g.dM.initializeBase(this);
	this.__type = _g.dM._dataContractName
};
_g.kE = function() {
	_g.kE.initializeBase(this)
};
_g.kF = function() {
	_g.kF.initializeBase(this)
};
_g.dN = function() {
	_g.dN.initializeBase(this);
	this.__type = _g.dN._dataContractName
};
_g.jG = function() {
	_g.jG.initializeBase(this);
	this.__type = _g.jG._dataContractName
};
_g.R = function() {
	_g.R.initializeBase(this);
	this.__type = _g.R._dataContractName
};
_g.gz = function() {
	_g.gz.initializeBase(this);
	this.__type = _g.gz._dataContractName
};
_g.dO = function() {
	_g.dO.initializeBase(this);
	this.__type = _g.dO._dataContractName
};
_g.dO._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.cb = function() {
	_g.cb.initializeBase(this);
	this.__type = _g.cb._dataContractName
};
_g.cb._TZ = function(n, t, i, r) {
	_g.dO._TZ(n, t, i, r)
};
_g.bA = function(n) {
	_g.bA.initializeBase(this);
	this.__type = _g.bA._dataContractName;
	this.Order = n
};
_g.gB = function() {
	_g.gB.initializeBase(this);
	this.__type = _g.gB._dataContractName
};
_g.gB._TZ = function(n, t, i, r) {
	_g.eL._TZ(n, t, i, r)
};
_g.jL = function() {
	_g.jL.initializeBase(this);
	this.__type = _g.jL._dataContractName
};
_g.jM = function() {
	_g.jM.initializeBase(this);
	this.__type = _g.jM._dataContractName;
	this.SyncState = _syncState;
	this.IncludesLastFolderInRange = _includesLastFolderInRange;
	this.Changes = new _g.jL
};
_g.F = function(n) {
	_g.F.initializeBase(this);
	this.__type = _g.F._dataContractName;
	this.BaseFolderId = n
};
_g.bR = function() {
	_g.bR.initializeBase(this);
	this.__type = _g.bR._dataContractName
};
_g.bR._TZ = function(n, t, i, r) {
	if(t !== i && n) {
		r.a(!1, n, i, t, ["CompleteDate", "DueDate", "StartDate", "DoItTime"], null);
		_g.M._TZ(n, t, i, r)
	}
};
_g.dg = function() {
	_g.dg.initializeBase(this);
	this.__type = _g.dg._dataContractName
};
_g.dg._TZ = function(n, t, i, r) {
	_g.dF._TZ(n, t, i, r)
};
_g.hw = function() {
	_g.hw.initializeBase(this);
	this.__type = _g.hw._dataContractName
};
_g.kK = function() {
	_g.kK.initializeBase(this)
};
_g.eS = function(n, t) {
	_g.eS.initializeBase(this);
	this.__type = _g.eS._dataContractName;
	this.UnseenCount = n;
	this.LastVisitedTime = t
};
_g.eS._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastVisitedTime"], null)
};
_g.jY = function() {
	_g.jY.initializeBase(this)
};
_g.dT = function(n) {
	_g.dT.initializeBase(this);
	this.__type = _g.dT._dataContractName;
	this.DictionaryKey = n
};
_g.cA = function(n) {
	_g.cA.initializeBase(this);
	this.__type = _g.cA._dataContractName;
	this.Type = n;
	this.Value = new Array(0)
};
_g.eV = function() {
	_g.eV.initializeBase(this);
	this.__type = _g.eV._dataContractName
};
_g.dU = function() {
	_g.dU.initializeBase(this);
	this.__type = _g.dU._dataContractName
};
_g.dU._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastSurveyDate", "PeopleIKnowFirstUseDate", "PeopleIKnowLastUseDate", "ModernGroupsFirstUseDate", "ModernGroupsLastUseDate", "BuildGreenLightSurveyLastShownDate", "InferenceSurveyDate", "UserVoiceSatisfactionWidgetFirstUseDate", "IsFocusedInboxOnLastUpdateTime", "IsFocusedInboxOnAdminLastUpdateTime", "GroupSuggestionDismissalDate"], null)
};
_g.kb = function() {
	_g.kb.initializeBase(this);
	this.__type = _g.kb._dataContractName
};
_g.dh = function() {
	_g.dh.initializeBase(this);
	this.__type = _g.dh._dataContractName
};
_g.gM = function() {
	_g.gM.initializeBase(this);
	this.__type = _g.gM._dataContractName
};
_g.gM._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.dj = function() {
	_g.dj.initializeBase(this);
	this.__type = _g.dj._dataContractName
};
_g.hX = function(n) {
	_g.hX.initializeBase(this);
	this.Header = n
};
_g.kr = function() {
	_g.kr.initializeBase(this)
};
_g.cv = function(n, t, i) {
	_g.cv.initializeBase(this);
	this.__type = _g.cv._dataContractName;
	this.Id = n;
	this.SourceId = t;
	this.DisplayName = i
};
_g.bZ = function() {
	_g.bZ.initializeBase(this);
	this.__type = _g.bZ._dataContractName
};
_g.bZ._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["CreationTimeString", "LastModifiedTimeString", "LastContactedDate"], null)
};
_g.dP = function() {
	_g.dP.initializeBase(this);
	this.__type = _g.dP._dataContractName;
	this.Values = new Array(0);
	this.Attributions = new Array(0)
};
_g.hh = function() {
	_g.hh.initializeBase(this);
	this.__type = _g.hh._dataContractName;
	this.ConversationId = _conversationId
};
_g.hh._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["LastModifiedTime"], null)
};
_g.ho = function() {
	_g.ho.initializeBase(this);
	this.__type = _g.ho._dataContractName
};
_g.dI = function(n, t, i, r, u, f) {
	_g.dI.initializeBase(this);
	this.__type = _g.dI._dataContractName;
	this.Subject = n;
	this.ReminderTime = t;
	this.StartDate = i;
	this.EndDate = r;
	this.ItemId = u;
	this.UID = f
};
_g.dI._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ReminderTime", "StartDate", "EndDate"], null)
};
_g.ev = function() {
	_g.ev.initializeBase(this);
	this.__type = _g.ev._dataContractName;
	this.Body = new _g.fL
};
_g.ew = function() {
	_g.ew.initializeBase(this);
	this.__type = _g.ew._dataContractName;
	this.Body = new _g.fO
};
_g.ey = function() {
	_g.ey.initializeBase(this);
	this.__type = _g.ey._dataContractName;
	this.Body = new _g.fW
};
_g.eA = function() {
	_g.eA.initializeBase(this);
	this.__type = _g.eA._dataContractName;
	this.Body = new _g.gc
};
_g.ht = function() {
	_g.ht.initializeBase(this);
	this.__type = _g.ht._dataContractName
};
_g.eT = function() {
	_g.eT.initializeBase(this);
	this.__type = _g.eT._dataContractName;
	this.Body = new _g.gF
};
_g.eU = function() {
	_g.eU.initializeBase(this);
	this.__type = _g.eU._dataContractName
};
_g.ih = function() {
	_g.ih.initializeBase(this);
	this.__type = _g.ih._dataContractName;
	this.Body = new _g.ii
};
_g.ik = function() {
	_g.ik.initializeBase(this);
	this.__type = _g.ik._dataContractName;
	this.Body = new _g.il
};
_g.fQ = function() {
	_g.fQ.initializeBase(this);
	this.__type = _g.fQ._dataContractName
};
_g.fx = function() {
	_g.fx.initializeBase(this);
	this.__type = _g.fx._dataContractName;
	this.Body = new _g.fy
};
_g.is = function() {
	_g.is.initializeBase(this);
	this.__type = _g.is._dataContractName;
	this.Body = new _g.it
};
_g.fM = function() {
	_g.fM.initializeBase(this);
	this.__type = _g.fM._dataContractName
};
_g.fP = function() {
	_g.fP.initializeBase(this);
	this.__type = _g.fP._dataContractName
};
_g.iJ = function() {
	_g.iJ.initializeBase(this);
	this.__type = _g.iJ._dataContractName
};
_g.fX = function() {
	_g.fX.initializeBase(this);
	this.__type = _g.fX._dataContractName
};
_g.iK = function() {
	_g.iK.initializeBase(this);
	this.__type = _g.iK._dataContractName
};
_g.fY = function() {
	_g.fY.initializeBase(this);
	this.__type = _g.fY._dataContractName
};
_g.ga = function() {
	_g.ga.initializeBase(this);
	this.__type = _g.ga._dataContractName;
	this.Body = new _g.gb
};
_g.eP = function() {
	_g.eP.initializeBase(this);
	this.__type = _g.eP._dataContractName
};
_g.iP = function() {
	_g.iP.initializeBase(this);
	this.__type = _g.iP._dataContractName
};
_g.iI = function() {
	_g.iI.initializeBase(this);
	this.__type = _g.iI._dataContractName
};
_g.gq = function() {
	_g.gq.initializeBase(this);
	this.__type = _g.gq._dataContractName
};
_g.jK = function() {
	_g.jK.initializeBase(this);
	this.__type = _g.jK._dataContractName
};
_g.jh = function() {
	_g.jh.initializeBase(this);
	this.__type = _g.jh._dataContractName;
	this.Body = new _g.ji
};
_g.jR = function() {
	_g.jR.initializeBase(this);
	this.__type = _g.jR._dataContractName;
	this.Body = new _g.jS
};
_g.jy = function() {
	_g.jy.initializeBase(this);
	this.__type = _g.jy._dataContractName;
	this.Body = new _g.jz
};
_g.jA = function() {
	_g.jA.initializeBase(this);
	this.__type = _g.jA._dataContractName
};
_g.jU = function() {
	_g.jU.initializeBase(this);
	this.__type = _g.jU._dataContractName
};
_g.hL = function(n) {
	_g.hL.initializeBase(this, [n])
};
_g.ee = function(n) {
	_g.ee.initializeBase(this, [n]);
	this.__type = _g.ee._dataContractName;
	this.Body = new _g.fl
};
_g.hS = function() {
	_g.hS.initializeBase(this);
	this.__type = _g.hS._dataContractName;
	this.Body = new _g.hT
};
_g.fm = function(n) {
	_g.fm.initializeBase(this, [n]);
	this.__type = _g.fm._dataContractName;
	this.Body = new _g.fn
};
_g.hO = function() {
	_g.hO.initializeBase(this);
	this.__type = _g.hO._dataContractName;
	this.Body = new _g.hP
};
_g.dv = function(n) {
	_g.dv.initializeBase(this, [n]);
	this.__type = _g.dv._dataContractName;
	this.Body = new _g.cU
};
_g.ep = function(n, t) {
	_g.ep.initializeBase(this, [n]);
	this.__type = _g.ep._dataContractName;
	this.Body = t
};
_g.iu = function() {
	_g.iu.initializeBase(this);
	this.__type = _g.iu._dataContractName;
	this.Body = new _g.iv
};
_g.fE = function(n, t) {
	_g.fE.initializeBase(this, [n]);
	this.__type = _g.fE._dataContractName;
	this.Body = t
};
_g.iz = function() {
	_g.iz.initializeBase(this);
	this.__type = _g.iz._dataContractName;
	this.Body = new _g.iA
};
_g.jF = function(n) {
	_g.jF.initializeBase(this, [n])
};
_g.dR = function(n, t) {
	_g.dR.initializeBase(this, [n]);
	this.__type = _g.dR._dataContractName;
	this.Body = t
};
_g.jV = function(n) {
	_g.jV.initializeBase(this, [n])
};
_g.gH = function(n, t) {
	_g.gH.initializeBase(this, [n]);
	this.__type = _g.gH._dataContractName;
	this.Body = t
};
_g.jW = function() {
	_g.jW.initializeBase(this);
	this.__type = _g.jW._dataContractName;
	this.Body = new _g.jX
};
_g.io = function() {
	_g.io.initializeBase(this);
	this.__type = _g.io._dataContractName;
	this.Body = new _g.ip
};
_g.iG = function() {
	_g.iG.initializeBase(this);
	this.__type = _g.iG._dataContractName;
	this.AllowedOptions = new Array(0)
};
_g.gd = function() {
	_g.gd.initializeBase(this);
	this.__type = _g.gd._dataContractName;
	this.Body = new _g.gf
};
_g.ka = function() {
	_g.ka.initializeBase(this);
	this.__type = _g.ka._dataContractName
};
_g.bK = function(n, t) {
	_g.bK.initializeBase(this);
	this.__type = _g.bK._dataContractName;
	this.Action = n;
	this.ConversationId = t
};
_g.bK._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ConversationLastSyncTime", "ScheduleReturnTime"], null)
};
_g.gk = function() {
	_g.gk.initializeBase(this);
	this.__type = _g.gk._dataContractName
};
_g.gk._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ScheduleReturnTime"], null)
};
_g.bm = function(n) {
	_g.bm.initializeBase(this);
	this.__type = _g.bm._dataContractName;
	this.ItemId = n
};
_g.U = function(n) {
	_g.U.initializeBase(this, [n]);
	this.__type = _g.U._dataContractName
};
_g.cw = function(n) {
	_g.cw.initializeBase(this);
	this.__type = _g.cw._dataContractName;
	this.RequestServerVersion = n
};
_g.cU = function() {
	_g.cU.initializeBase(this);
	this.__type = _g.cU._dataContractName;
	this.Items = new Array(0)
};
_g.kt = function() {
	_g.kt.initializeBase(this)
};
_g.bf = function(n) {
	_g.bf.initializeBase(this);
	this.__type = _g.bf._dataContractName;
	this.Item = n
};
_g.dy = function(n, t) {
	_g.dy.initializeBase(this);
	this.__type = _g.dy._dataContractName;
	this.ItemShape = n;
	this.ParentFolderIds = new Array(0);
	this.Traversal = t
};
_g.cF = function(n) {
	_g.cF.initializeBase(this);
	this.__type = _g.cF._dataContractName;
	this.ConversationId = n
};
_g.fZ = function(n) {
	_g.fZ.initializeBase(this, [n])
};
_g.cJ = function() {
	_g.cJ.initializeBase(this);
	this.__type = _g.cJ._dataContractName
};
_g.gA = function() {
	_g.gA.initializeBase(this);
	this.__type = _g.gA._dataContractName
};
_g.et = function(n) {
	_g.et.initializeBase(this);
	this.__type = _g.et._dataContractName;
	this.ParentFolderId = n
};
_g.fB = function() {
	_g.fB.initializeBase(this);
	this.__type = _g.fB._dataContractName
};
_g.kB = function(n) {
	_g.kB.initializeBase(this);
	this.Path = n
};
_g.jQ = function(n) {
	_g.jQ.initializeBase(this, [n])
};
_g.fS = function() {
	_g.fS.initializeBase(this);
	this.__type = _g.fS._dataContractName
};
_g.jE = function() {
	_g.jE.initializeBase(this);
	this.__type = _g.jE._dataContractName
};
_g.gC = function() {
	_g.gC.initializeBase(this);
	this.__type = _g.gC._dataContractName
};
_g.t = function(n) {
	_g.t.initializeBase(this, [n]);
	this.__type = _g.t._dataContractName;
	this.Item = new _g.M
};
_g.bd = function(n) {
	_g.bd.initializeBase(this, [n]);
	this.__type = _g.bd._dataContractName
};
_g.gG = function() {
	_g.gG.initializeBase(this);
	this.__type = _g.gG._dataContractName
};
_g.cI = function(n) {
	_g.cI.initializeBase(this, [n]);
	this.__type = _g.cI._dataContractName
};
_g.fs = function(n) {
	_g.fs.initializeBase(this, [n]);
	this.__type = _g.fs._dataContractName
};
_g.fq = function(n) {
	_g.fq.initializeBase(this, [n]);
	this.__type = _g.fq._dataContractName
};
_g.jl = function() {
	_g.jl.initializeBase(this);
	this.__type = _g.jl._dataContractName
};
_g.iS = function() {
	_g.iS.initializeBase(this);
	this.__type = _g.iS._dataContractName
};
_g.ek = function(n) {
	_g.ek.initializeBase(this);
	this.__type = _g.ek._dataContractName;
	this.Body = n;
	this.Recipients = new Array(0)
};
_g.dd = function(n) {
	_g.dd.initializeBase(this);
	this.__type = _g.dd._dataContractName;
	this.RefinerCategory = n;
	this.RefinerDataEntryTypes = new Array(0)
};
_g.jx = function() {
	_g.jx.initializeBase(this);
	this.__type = _g.jx._dataContractName
};
_g.jB = function() {
	_g.jB.initializeBase(this);
	this.__type = _g.jB._dataContractName
};
_g.eB = function(n) {
	_g.eB.initializeBase(this, [n]);
	this.__type = _g.eB._dataContractName;
	this.Body = new _g.ge
};
_g.br = function(n) {
	_g.br.initializeBase(this, [n]);
	this.__type = _g.br._dataContractName
};
_g.gu = function() {
	_g.gu.initializeBase(this);
	this.__type = _g.gu._dataContractName;
	this.RefinerQueries = new Array(0)
};
_g.ei = function() {
	_g.ei.initializeBase(this);
	this.__type = _g.ei._dataContractName
};
_g.kG = function(n) {
	_g.kG.initializeBase(this, [n])
};
_g.fl = function() {
	_g.fl.initializeBase(this);
	this.__type = _g.fl._dataContractName
};
_g.fn = function() {
	_g.fn.initializeBase(this);
	this.__type = _g.fn._dataContractName
};
_g.hs = function(n, t) {
	_g.hs.initializeBase(this);
	this.__type = _g.hs._dataContractName;
	this.RefinementQuery = n;
	this.HitCount = t
};
_g.id = function() {
	_g.id.initializeBase(this);
	this.__type = _g.id._dataContractName
};
_g.hb = function(n) {
	_g.hb.initializeBase(this);
	this.__type = _g.hb._dataContractName;
	this.ToFolderId = n;
	this.FolderIds = new Array(0)
};
_g.hV = function() {
	_g.hV.initializeBase(this);
	this.__type = _g.hV._dataContractName
};
_g.fy = function() {
	_g.fy.initializeBase(this);
	this.__type = _g.fy._dataContractName
};
_g.hn = function(n) {
	_g.hn.initializeBase(this);
	this.Interval = n
};
_g.ez = function() {
	_g.ez.initializeBase(this);
	this.__type = _g.ez._dataContractName;
	this.Conversations = new Array(0)
};
_g.dH = function(n) {
	_g.dH.initializeBase(this);
	this.StartDate = n
};
_g.dH._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["StartDate"], null)
};
_g.hu = function(n) {
	_g.hu.initializeBase(this);
	this.__type = _g.hu._dataContractName;
	this.BaseShape = n
};
_g.kH = function() {
	_g.kH.initializeBase(this);
	this.ChangeType = _changeType
};
_g.dS = function(n) {
	_g.dS.initializeBase(this);
	this.__type = _g.dS._dataContractName;
	this.ItemChanges = new Array(0);
	this.ConflictResolution = n
};
_g.gF = function() {
	_g.gF.initializeBase(this);
	this.__type = _g.gF._dataContractName
};
_g.da = function() {
	_g.da.initializeBase(this);
	this.__type = _g.da._dataContractName
};
_g.jf = function() {
	_g.jf.initializeBase(this);
	this.__type = _g.jf._dataContractName;
	this.IsOwner = _isOwner;
	this.GroupPersona = new _g.bZ
};
_g.cM = function() {
	_g.cM.initializeBase(this);
	this.__type = _g.cM._dataContractName
};
_g.fo = function() {
	_g.fo.initializeBase(this);
	this.__type = _g.fo._dataContractName
};
_g.ie = function() {
	_g.ie.initializeBase(this);
	this.__type = _g.ie._dataContractName
};
_g.fF = function() {
	_g.fF.initializeBase(this);
	this.__type = _g.fF._dataContractName
};
_g.fG = function() {
	_g.fG.initializeBase(this);
	this.__type = _g.fG._dataContractName
};
_g.kc = function() {
	_g.kc.initializeBase(this);
	this.__type = _g.kc._dataContractName
};
_g.fL = function() {
	_g.fL.initializeBase(this);
	this.__type = _g.fL._dataContractName
};
_g.fO = function() {
	_g.fO.initializeBase(this);
	this.__type = _g.fO._dataContractName
};
_g.fW = function() {
	_g.fW.initializeBase(this);
	this.__type = _g.fW._dataContractName
};
_g.gc = function() {
	_g.gc.initializeBase(this);
	this.__type = _g.gc._dataContractName
};
_g.ii = function() {
	_g.ii.initializeBase(this);
	this.__type = _g.ii._dataContractName
};
_g.il = function() {
	_g.il.initializeBase(this);
	this.__type = _g.il._dataContractName
};
_g.it = function() {
	_g.it.initializeBase(this);
	this.__type = _g.it._dataContractName
};
_g.gb = function() {
	_g.gb.initializeBase(this);
	this.__type = _g.gb._dataContractName
};
_g.iM = function() {
	_g.iM.initializeBase(this);
	this.__type = _g.iM._dataContractName
};
_g.ji = function() {
	_g.ji.initializeBase(this);
	this.__type = _g.ji._dataContractName
};
_g.jS = function() {
	_g.jS.initializeBase(this);
	this.__type = _g.jS._dataContractName
};
_g.jz = function() {
	_g.jz.initializeBase(this);
	this.__type = _g.jz._dataContractName
};
_g.hP = function() {
	_g.hP.initializeBase(this);
	this.__type = _g.hP._dataContractName
};
_g.hT = function() {
	_g.hT.initializeBase(this);
	this.__type = _g.hT._dataContractName
};
_g.iv = function() {
	_g.iv.initializeBase(this);
	this.__type = _g.iv._dataContractName
};
_g.iA = function() {
	_g.iA.initializeBase(this);
	this.__type = _g.iA._dataContractName
};
_g.jX = function() {
	_g.jX.initializeBase(this);
	this.__type = _g.jX._dataContractName
};
_g.ip = function() {
	_g.ip.initializeBase(this);
	this.__type = _g.ip._dataContractName
};
_g.gf = function() {
	_g.gf.initializeBase(this);
	this.__type = _g.gf._dataContractName
};
_g.ge = function() {
	_g.ge.initializeBase(this);
	this.__type = _g.ge._dataContractName
};
_g.dQ = function() {
	_g.dQ.initializeBase(this);
	this.__type = _g.dQ._dataContractName
};
_g.cN = function() {
	_g.cN.initializeBase(this);
	this.__type = _g.cN._dataContractName
};
_g.fu = function(n) {
	_g.fu.initializeBase(this, [n]);
	this.__type = _g.fu._dataContractName
};
_g.ft = function(n, t) {
	_g.ft.initializeBase(this, [n]);
	this.__type = _g.ft._dataContractName;
	this.Body = t
};
_g.ig = function(n) {
	_g.ig.initializeBase(this, [n])
};
_g.fw = function(n) {
	_g.fw.initializeBase(this);
	this.__type = _g.fw._dataContractName;
	this.ParentFolderId = n;
	this.Folders = new Array(0)
};
_g.fv = function(n, t) {
	_g.fv.initializeBase(this, [n]);
	this.__type = _g.fv._dataContractName;
	this.Body = t
};
_g.ij = function(n) {
	_g.ij.initializeBase(this, [n])
};
_g.gL = function() {
	_g.gL.initializeBase(this);
	this.__type = _g.gL._dataContractName
};
_g.gL._TZ = function(n, t, i, r) {
	_g.bo._TZ(n, t, i, r)
};
_g.fD = function(n) {
	_g.fD.initializeBase(this);
	this.__type = _g.fD._dataContractName;
	this.FolderIds = new Array(0);
	this.DeleteType = n
};
_g.fC = function(n, t) {
	_g.fC.initializeBase(this, [n]);
	this.__type = _g.fC._dataContractName;
	this.Body = t
};
_g.ir = function(n) {
	_g.ir.initializeBase(this, [n])
};
_g.eq = function(n) {
	_g.eq.initializeBase(this);
	this.__type = _g.eq._dataContractName;
	this.ItemIds = new Array(0);
	this.DeleteType = n
};
_g.fJ = function() {
	_g.fJ.initializeBase(this);
	this.__type = _g.fJ._dataContractName;
	this.Folders = new Array(0)
};
_g.fK = function(n, t, i) {
	_g.fK.initializeBase(this);
	this.__type = _g.fK._dataContractName;
	this.FolderShape = n;
	this.Paging = t;
	this.ParentFolderIds = new Array(0);
	this.Traversal = i
};
_g.fI = function(n, t) {
	_g.fI.initializeBase(this, [n]);
	this.__type = _g.fI._dataContractName;
	this.Body = t
};
_g.iD = function(n) {
	_g.iD.initializeBase(this, [n])
};
_g.dx = function(n, t) {
	_g.dx.initializeBase(this, [n]);
	this.__type = _g.dx._dataContractName;
	this.Body = t
};
_g.bv = function(n) {
	_g.bv.initializeBase(this);
	this.__type = _g.bv._dataContractName;
	this.ItemShape = n;
	this.ItemIds = new Array(0)
};
_g.bu = function(n, t) {
	_g.bu.initializeBase(this, [n]);
	this.__type = _g.bu._dataContractName;
	this.Body = t
};
_g.iH = function(n) {
	_g.iH.initializeBase(this, [n])
};
_g.iL = function(n) {
	_g.iL.initializeBase(this, [n])
};
_g.fV = function(n) {
	_g.fV.initializeBase(this, [n]);
	this.__type = _g.fV._dataContractName;
	this.Body = new _g.ez
};
_g.fT = function() {
	_g.fT.initializeBase(this);
	this.__type = _g.fT._dataContractName
};
_g.hk = function(n) {
	_g.hk.initializeBase(this, [n])
};
_g.dA = function(n) {
	_g.dA.initializeBase(this);
	this.__type = _g.dA._dataContractName;
	this.FolderShape = n;
	this.FolderIds = new Array(0)
};
_g.dz = function(n, t) {
	_g.dz.initializeBase(this, [n]);
	this.__type = _g.dz._dataContractName;
	this.Body = t
};
_g.iN = function(n) {
	_g.iN.initializeBase(this, [n])
};
_g.iO = function(n) {
	_g.iO.initializeBase(this, [n])
};
_g.ex = function() {
	_g.ex.initializeBase(this);
	this.__type = _g.ex._dataContractName
};
_g.iQ = function(n) {
	_g.iQ.initializeBase(this, [n])
};
_g.hl = function(n) {
	_g.hl.initializeBase(this, [n])
};
_g.dG = function(n) {
	_g.dG.initializeBase(this, [n]);
	this.__type = _g.dG._dataContractName
};
_g.fH = function(n, t) {
	_g.fH.initializeBase(this, [n]);
	this.__type = _g.fH._dataContractName;
	this.Body = t
};
_g.gj = function(n, t) {
	_g.gj.initializeBase(this);
	this.__type = _g.gj._dataContractName;
	this.ItemIds = new Array(0);
	this.IsJunk = n;
	this.MoveItem = t
};
_g.gi = function(n, t) {
	_g.gi.initializeBase(this, [n]);
	this.__type = _g.gi._dataContractName;
	this.Body = t
};
_g.cx = function() {
	_g.cx.initializeBase(this);
	this.__type = _g.cx._dataContractName
};
_g.cx._TZ = function(n, t, i, r) {
	_g.dr._TZ(n, t, i, r)
};
_g.jd = function() {
	_g.jd.initializeBase(this);
	this.__type = _g.jd._dataContractName
};
_g.jd._TZ = function(n, t, i, r) {
	_g.dr._TZ(n, t, i, r)
};
_g.gp = function(n) {
	_g.gp.initializeBase(this, [n]);
	this.__type = _g.gp._dataContractName
};
_g.go = function(n, t) {
	_g.go.initializeBase(this, [n]);
	this.__type = _g.go._dataContractName;
	this.Body = t
};
_g.gn = function(n) {
	_g.gn.initializeBase(this, [n]);
	this.__type = _g.gn._dataContractName
};
_g.gm = function(n, t) {
	_g.gm.initializeBase(this, [n]);
	this.__type = _g.gm._dataContractName;
	this.Body = t
};
_g.jg = function(n) {
	_g.jg.initializeBase(this, [n])
};
_g.jm = function(n) {
	_g.jm.initializeBase(this, [n])
};
_g.ca = function(n, t) {
	_g.ca.initializeBase(this, [n]);
	this.__type = _g.ca._dataContractName;
	this.Folder = t
};
_g.cm = function(n) {
	_g.cm.initializeBase(this);
	this.__type = _g.cm._dataContractName;
	this.FolderId = n
};
_g.cc = function() {
	_g.cc.initializeBase(this);
	this.__type = _g.cc._dataContractName;
	this.FolderChanges = new Array(0)
};
_g.cr = function(n) {
	_g.cr.initializeBase(this, [n]);
	this.__type = _g.cr._dataContractName;
	this.Body = new _g.cc
};
_g.cO = function(n) {
	_g.cO.initializeBase(this, [n])
};
_g.gx = function(n, t, i) {
	_g.gx.initializeBase(this);
	this.__type = _g.gx._dataContractName;
	this.SearchId = n;
	this.ResultType = t;
	this.PageDirection = i
};
_g.gw = function(n, t) {
	_g.gw.initializeBase(this, [n]);
	this.__type = _g.gw._dataContractName;
	this.Body = t
};
_g.gJ = function(n, t) {
	_g.gJ.initializeBase(this, [n]);
	this.__type = _g.gJ._dataContractName;
	this.Name = t
};
_g.gy = function(n) {
	_g.gy.initializeBase(this);
	this.__type = _g.gy._dataContractName;
	this.UserConfigurationName = n
};
_g.gI = function(n) {
	_g.gI.initializeBase(this, [n]);
	this.__type = _g.gI._dataContractName
};
_g.eo = function(n) {
	_g.eo.initializeBase(this, [n]);
	this.__type = _g.eo._dataContractName
};
_g.jT = function(n) {
	_g.jT.initializeBase(this, [n])
};
_g.kI = function() {
	_g.kI.initializeBase(this, [_changeType])
};
_g.hQ = function() {
	_g.hQ.initializeBase(this);
	this.__type = _g.hQ._dataContractName
};
_g.hU = function() {
	_g.hU.initializeBase(this);
	this.__type = _g.hU._dataContractName
};
_g.iw = function() {
	_g.iw.initializeBase(this);
	this.__type = _g.iw._dataContractName
};
_g.fk = function(n, t) {
	_g.fk.initializeBase(this);
	this.__type = _g.fk._dataContractName;
	this.SourceFolderId = n;
	this.EmailAddresses = new Array(0);
	this.ActionType = t
};
_g.fk._TZ = function(n, t, i, r) {
	t !== i && n && r.a(!1, n, i, t, ["ClientLastSyncTime"], null)
};
_g.hN = function(n) {
	_g.hN.initializeBase(this, [n])
};
_g.fj = function(n, t) {
	_g.fj.initializeBase(this, [n]);
	this.__type = _g.fj._dataContractName;
	this.Body = t
};
_g.fA = function(n, t) {
	_g.fA.initializeBase(this);
	this.__type = _g.fA._dataContractName;
	this.EmailAddresses = new Array(0);
	this.ActionType = n;
	this.RuleName = t
};
_g.im = function(n) {
	_g.im.initializeBase(this, [n])
};
_g.fz = function(n, t) {
	_g.fz.initializeBase(this, [n]);
	this.__type = _g.fz._dataContractName;
	this.Body = t
};
_g.iq = function() {
	_g.iq.initializeBase(this);
	this.__type = _g.iq._dataContractName
};
_g.iF = function(n) {
	_g.iF.initializeBase(this, [n])
};
_g.fR = function(n) {
	_g.fR.initializeBase(this, [n]);
	this.__type = _g.fR._dataContractName
};
_g.hm = function(n) {
	_g.hm.initializeBase(this, [n])
};
_g.jZ = function(n) {
	_g.jZ.initializeBase(this, [n])
};
_g.gK = function() {
	_g.gK.initializeBase(this);
	this.__type = _g.gK._dataContractName
};
_g.kq = function(n) {
	_g.kq.initializeBase(this);
	this.ToFolderId = n;
	this.ItemIds = new Array(0)
};
_g.hx = function(n) {
	_g.hx.initializeBase(this);
	this.__type = _g.hx._dataContractName;
	this.UserConfiguration = n
};
_g.hR = function(n) {
	_g.hR.initializeBase(this, [n])
};
_g.kp = function() {
	_g.kp.initializeBase(this)
};
_g.X = function() {
	_g.X.initializeBase(this);
	this.__type = _g.X._dataContractName
};
_g.kv = function(n) {
	_g.kv.initializeBase(this, [n])
};
_g.Y = function() {
	_g.Y.initializeBase(this);
	this.__type = _g.Y._dataContractName
};
_g.kw = function() {
	_g.kw.initializeBase(this)
};
_g.jc = function() {
	_g.jc.initializeBase(this);
	this.__type = _g.jc._dataContractName
};
_g.hr = function() {
	_g.hr.initializeBase(this)
};
_g.hv = function() {
	_g.hv.initializeBase(this);
	this.__type = _g.hv._dataContractName;
	this.Updates = new Array(0)
};
_g.eQ = function() {
	_g.eQ.initializeBase(this);
	this.__type = _g.eQ._dataContractName
};
_g.eR = function() {
	_g.eR.initializeBase(this);
	this.__type = _g.eR._dataContractName
};
_g.fN = function() {
	_g.fN.initializeBase(this);
	this.__type = _g.fN._dataContractName
};
_g.dB = function() {
	_g.dB.initializeBase(this);
	this.__type = _g.dB._dataContractName
};
_g.jn = function() {
	_g.jn.initializeBase(this);
	this.__type = _g.jn._dataContractName
};
_g.hz = function() {
	_g.hz.initializeBase(this);
	this.__type = _g.hz._dataContractName
};
_g.kd = function() {
	_g.kd.initializeBase(this);
	this.__type = _g.kd._dataContractName
};
_g.hY = function() {
	_g.hY.initializeBase(this);
	this.__type = _g.hY._dataContractName
};
_g.cP = function(n, t, i) {
	this.hasActionHandler = undefined;
	this.actionHandler = undefined;
	this.methodName = n;
	this.parameters = t;
	this.actionContext = i
};
_g.kL = function() {};
_g.kL.prototype = {
	nonQueuedCall: 0,
	detectionFailed: -1,
	fromClientStore: -2,
	firstTimeActionSavedResults: 1,
	firstTimeActionDidNotSaveResults: 2,
	duplicatedActionReturnedSavedResults: 3,
	duplicatedActionWithoutSavedResults: 4
};
_g.kL.registerEnum("_g.kL", !1);
_g.dk = function() {};
_g.dk.registerInterface("_g.dk");
_g.hA = function(n) {
	this.map = n
};
_g.kN = function() {};
_g.kN.registerInterface("_g.kN");
_g.kO = function() {};
_g.kO.registerInterface("_g.kO");
_g.eW = function() {};
_g.eW.registerInterface("_g.eW");
_g.hB = function() {};
_g.hB.registerInterface("_g.hB");
_g.dW = function() {};
_g.dW.registerInterface("_g.dW");
_g.eX = function() {};
_g.eX.registerInterface("_g.eX");
_g.gO = function() {};
_g.gO.registerInterface("_g.gO");
_g.kP = function() {};
_g.kP.registerInterface("_g.kP");
_g.dV = function(n, t, i) {
	_g.dV.initializeBase(this, [1, "Action"]);
	this.e(n, t, i)
};
_g.dV.a = function(n, t, i, r) {
	if(n.request.methodName !== "LogDatapoint") {
		var e = n.id;
		!n.id && e && (n.id = e);
		if(_a.be.c()) {
			var u = _a.W.j(r);
			var o = _a.W.n(u);
			o && (n.checkpointValue = o);
			if(u) {
				n.resource = u;
				var f = u.startTime;
				n.startTime = Math.floor(f);
				n.nextHopProtocol = u.nextHopProtocol ? u.nextHopProtocol : "";
				u.responseEnd >= 0 && f >= 0 && (n.responseEndTimeStamp = Math.floor(n.requestInvokedTimeStamp - f + u.responseEnd));
				_a.W.k(u, n.request.methodName + "_" + n.id, n.requestInvokedTimeStamp - f)
			}
		}
		_a.y.b.a(new _g.dV(n, t, i))
	}
};
_g.dV.prototype = {
	e: function(n, t, i) {
		this.a.id = n.id;
		this.a.typ = n.actionType;
		this.a.mn = n.request.methodName;
		if(n.request.actionContext) {
			this.a.can = n.request.actionContext.actionName || "";
			this.a.ras = _ff.y.toString(n.request.actionContext.source) || ""
		}
		this.a.as = n.state;
		this.a.ac = n.attemptCount;
		this.a.sc = n.successCount;
		this.a.fc = n.failureCount;
		this.a.rc = n.rejectedCount;
		this.a.tc = n.timeoutCount;
		this.a.bc = n.abandonedCount;
		this.a.at = n.processingTime;
		this.a.be = n.backEndTime * 1e3;
		this.a.fe = n.frontEndTime;
		this.a.rql = n.requestLength;
		this.a.rsl = n.responseLength;
		this.a.edge = n.edgeRequest;
		this.a.fes = n.frontEndServer || "";
		this.a.bes = n.backEndServer || "";
		this.a.nhprt = n.nextHopProtocol;
		this.a.edgeRef = n.msEdgeRef || "";
		this.a.cpv = n.checkpointValue;
		this.a.cpst = n.startTime;
		n.responseBytes && !isNaN(n.responseBytes) && (this.a.rsb = n.responseBytes);
		this.a.ci = n.correlationId;
		this.a.ActId = n.activityId;
		this.a.cbt = n.callBackEndTime - n.callBackStartTime;
		n.resource && n.responseEndTimeStamp > 0 && (this.a.cbd = Math.floor(n.callBackStartTime - n.responseEndTimeStamp));
		if(n.response) {
			this.a.rsc = n.response.statusCode;
			this.a.rsk = n.response.responseKind;
			if(n.response.fault) {
				this.a.rsf = n.response.fault.FaultMessage;
				this.a.rst = _j.z.a(n.response.fault.IsTransient) ? "?" : n.response.fault.IsTransient
			}
			if(n.timestamps) {
				var r = this.d(n.timestamps);
				if(!_j.h.a(n.externalClientName) && n.externalTimestamps) {
					this.a.ecn = n.externalClientName;
					_j.h.b(n.externalCorrelationId) || (this.a.eci = n.externalCorrelationId);
					_j.h.b(n.externalServerName) || (this.a.esn = n.externalServerName);
					r += this.c(n.externalTimestamps)
				}
				this.a.tt = r
			}
		} else n.rejectedCount > 0 && (this.a.rsc = n.offlineRejectCode);
		this.a.cp = t;
		if(t) {
			var u = i || 0;
			this.a.ar = u
		}
	},
	d: function(n) {
		var i = "";
		var t = new Array(4);
		if(n)
			for(var r = 0; r < 4; r++) {
				var u = n[_g.Q.c[r]];
				u && (t[r] = new Date(u))
			}
		i += this.b(t, 0);
		i += this.b(t, 1);
		i += this.b(t, 3);
		i += this.b(t, 2);
		return i
	},
	c: function(n) {
		var r = "";
		var i = new Array(4);
		if(n)
			for(var t = 0; t < 4; t++) {
				var u = n[_g.Q.b[t]];
				u && (i[t] = new Date(u))
			}
		r += this.b(i, 4);
		r += this.b(i, 5);
		return r
	},
	b: function(n, t) {
		var r = -1;
		var i = -1;
		var u = "";
		var f = "";
		switch(t) {
			case 0:
				r = 0;
				i = 1;
				u = "DF";
				break;
			case 3:
				r = 3;
				i = 1;
				u = "DFE";
				break;
			case 2:
				r = 0;
				i = 2;
				u = "DFB";
				break;
			case 1:
				r = 2;
				i = 3;
				u = "DB";
				break;
			case 4:
				r = 0;
				i = 1;
				u = "DEP";
				break;
			case 5:
				r = 2;
				i = 3;
				u = "DEPACS";
				break
		}
		if(n[r] && n[i]) {
			var e = n[i].getTime() - n[r].getTime();
			f += u + "=" + e + ";"
		}
		return f
	}
};
_g.bB = function(n, t, i) {
	this.statusCode = t ? t.ErrorCode : 200;
	this.result = n;
	this.fault = t;
	this.responseKind = i;
	this.whenReceived = _a.d.f(_a.d.get_utcNow())
};
_g.bB.a = function(n, t) {
	return new _g.bB(n, null, t)
};
_g.bB.b = function(n, t) {
	return new _g.bB(null, n, t)
};
_g.bB.c = function(n, t, i) {
	var u = t === "True";
	var r = i === "True";
	switch(n) {
		case "null":
			return -1;
		case "True":
			return u ? 3 : 4;
		case "False":
			return r ? 1 : 2;
		default:
			return 0
	}
};
_g.bB.prototype = {
	result: null,
	fault: null,
	statusCode: 0,
	responseKind: 0,
	whenReceived: null
};
_g.J = function(n, t, i, r, u, f) {
	var e = _a.bv.a(n.bH.AdMarket, n.u(), r);
	_g.J.c = _a.bv.e(r.b.d().GDPRCountries, e);
	_g.J.e = u;
	_g.J.d = f;
	if(r.b.eI().Enabled && (r.b.d().Enabled || _a.bv.c(r, e, i.a(), t.bH.IsShadowMailbox))) {
		_g.J.h();
		window.__cmp = _g.J.g;
		window.addEventListener("message", _g.J.i, !1)
	}
};
_g.J.h = function() {
	if(!window.frames.__cmpLocator) {
		var n = document.createElement("iframe");
		n.style.display = "none";
		n.name = "__cmpLocator";
		document.body.appendChild(n)
	}
};
_g.J.i = function(n) {
	var t = n;
	if(t && t.origin && t.origin === "https://acdn.adnxs.com") {
		var i = null;
		var u = Object.getType(t.data) === String;
		if(u) try {
			i = JSON.parse(t.data)
		} catch(f) {} else i = t.data;
		if(i && i.__cmpCall) {
			var r = i.__cmpCall;
			_g.J.g(r.command, r.parameter, function(n, i) {
				r.returnValue = n;
				var f = {};
				f.__cmpReturn = r;
				t.source.postMessage(u ? JSON.stringify(f) : f, t.origin)
			})
		}
	}
};
_g.J.g = function(n, t, i) {
	switch(n) {
		case "getConsentData":
			_g.J.j(i);
			break;
		case "ping":
			_g.J.k(i);
			break
	}
};
_g.J.j = function(n) {
	var t = {};
	t.gdprApplies = _g.J.c;
	t.hasGlobalScope = !0;
	t.consentData = "";
	_g.J.c ? _g.J.f(function(i) {
		t.consentData = i;
		n(t, !0)
	}) : n(t, !0)
};
_g.J.k = function(n) {
	var t = {};
	t.gdprAppliesGlobally = !0;
	t.cmpLoaded = !0;
	n(t, !0)
};
_g.J.f = function(n) {
	if(_g.J.b) {
		n(_g.J.b);
		return
	}
	if(!_g.J.a) {
		_g.J.a = _g.J.d.e(_g.kf, "/v1.0/OutlookOptions/GdprAdsPrefs", _a.D.a());
		_g.J.e.a(_g.J.a)
	}
	_g.J.a.a(function(t) {
		_g.J.a.d && _g.J.a.d.options && _g.J.a.d.options[0] && (_g.J.b = _g.J.a.d.options[0].consentString);
		n(_g.J.b)
	});
	_g.J.a.b(function(t) {
		n(null)
	})
};
_g.kf = function() {};
_g.kf.prototype = {
	options: function() {
		return null
	}
};
_g.kM = function() {};
_g.kM.prototype = {
	consentString: function() {
		return null
	}
};
_g.bs = function(n, t) {
	this.g = Function.createDelegate(this, this.o);
	_g.bs.initializeBase(this);
	_a.c.a(n, "onlineProxy");
	_a.c.a(t, "eventAggregator");
	this.k = n;
	this.h = t
};
_g.bs.a = function(n) {
	return n >= 100 && n <= 599 && n !== 408 && n !== 449 && n !== 502 && n !== 503 && n !== 401 && n !== 440
};
_g.bs.c = function(n) {
	n.set_userContext(n);
	n.invoke()
};
_g.bs.prototype = {
	k: null,
	h: null,
	b: !1,
	a: !1,
	d: !1,
	j: 0,
	c: function(n) {
		if(this.a !== n) {
			this.a = n;
			this.h.a(_a.cS, new _a.cS(n));
			this.a
		}
		return n
	},
	e: function(n) {
		if(this.d !== n) {
			this.d = n;
			if(n) {
				Sys.Net.WebRequestManager.add_completedRequest(this.g);
				this.f()
			} else Sys.Net.WebRequestManager.remove_completedRequest(this.g)
		}
		return n
	},
	l: function(n) {
		if(this.b !== n) {
			this.b = n;
			this.by("DetectingConnectivity")
		}
		return n
	},
	m: function() {
		this.c(!1);
		this.i()
	},
	f: function() {
		this.a || this.i()
	},
	bz: function() {
		this.e(!1);
		this.c(!1);
		_j.S.prototype.bz.call(this)
	},
	i: function() {
		if(this.d && !this.b) {
			this.l(!0);
			var i = _a.d.get_utcNow();
			var t = _a.b.b(_g.bs.b, "OwaPing", !1, null);
			var n = this;
			this.k.kj(function(r) {
				n.j = _a.d.get_utcNow().e(i);
				var f = r.get_statusCode();
				var u = _g.bs.a(f);
				if(t) {
					t.m = n.n(f, u).toString();
					_a.b.a(t)
				}
				n.c(u);
				n.l(!1)
			})
		}
	},
	o: function(n, t) {
		var i = n;
		var r = i.get_webRequest();
		r.get_userContext() !== r && (_g.bs.a(i.get_statusCode()) ? this.c(!0) : i.get_statusCode() === 440 ? this.c(!1) : this.i())
	},
	n: function(n, t) {
		var i = new _a.l;
		i.a("sc", n);
		i.c("c", t);
		return i
	}
};
_g.gN = function() {};
_g.gN.prototype = {
	a: function(n, t) {
		return new _g.bs(n, t)
	}
};

function CoreWebServicesComponent() {}
CoreWebServicesComponent.$$cctor = function() {
	_a.t.a().a(CoreWebServicesComponent)
};
CoreWebServicesComponent.prototype = {
	b: function(n, t, i) {
		n.e(_g.kh).b(_a.eS).b(_g.eW).a();
		n.e(_g.bS).b(_a.eQ).a();
		if(!t.a()) {
			var o = this;
			n.b(_g.dX, function() {
				return new _g.dX(function() {
					return n.a(_g.E).bH.UserEmailAddress
				}, n.a(_a.e), n.a(_g.eW), n.d(_g.eX), n.a(_g.cB), n.a(_j.j), n.d(_j.t), n.a(_a.cn), n.d(_g.dW))
			}).a()
		}
		n.e(_g.gN).a();
		var s = this;
		n.b(_g.gQ, function() {
			return new _g.gQ(function(n, t) {
				t ? Sys.Net.WebRequestManager.add_completedRequest(n) : Sys.Net.WebRequestManager.remove_completedRequest(n)
			}, n.a(_j.j))
		}).a();
		var h = this;
		n.b(_g.fa, function() {
			return new _g.fa(_g.ClientVersionProvider.currentOWSVersion, n.a(_a.eQ), n.a(_a.eS), i)
		}).b(_g.gO).a();
		var e = this;
		n.b(_g.cB, function() {
			return new _g.cB(n.a(_a.A).h(), _g.ClientVersionProvider.currentOWSVersion)
		}).a();
		var r = this;
		n.b(_g.gR, function() {
			return new _g.gR
		}).a();
		var u = this;
		n.b(_g.cs, function() {
			return new _g.cs(n.a(_a.cL), n.a(_a.cn), n.d(_g.dW))
		}).a();
		var f = this;
		n.b(_g.J, function() {
			return new _g.J(n.a(_g.a), n.a(_g.E), i, n.a(_a.cb), n.a(_a.q), n.a(_g.cs))
		}).a()
	},
	a: function() {
		return [new _j.y(_g.gR, 0, -1), new _j.y(_g.gQ, 0, -1), new _j.y(_g.J, 0, -1)]
	}
};
_g.bT = function(n, t, i) {
	_g.bT.initializeBase(this, [n]);
	this.b = t;
	this.a = i
};
_g.bT.a = function(n) {
	var t = n.split("#");
	var i = null;
	if(t.length === 2) {
		var r = t[0];
		r === "SystemCategory" ? i = new _g.bT(n, "SystemCategory", _g.A.f(t[1]).toString()) : r === "UserCategory" ? i = new _g.bT(n, "UserCategory", t[1]) : r === "Hashtag".toLowerCase() && (i = new _g.bT(n, "Hashtag", "#" + t[1].toString()))
	}
	return i
};
_g.bT.prototype = {
	b: "All",
	a: null
};
_g.bb = function() {};
_g.l = function() {};
_g.l.b = function(n, t) {
	return !n != !t ? !1 : n ? n.Id === t.Id : !0
};
_g.l.d = function(n) {
	return _g.b.a.nameToId(n)
};
_g.l.a = function(n) {
	if(n && _g.N.isInstanceOfType(n)) return n.a;
	var t = _g.b.a.idToName(n);
	return t === _g.bb.a ? new _g.m(n.Id) : new _g.r(t)
};
_g.l.c = function(n) {
	return new _g.F(_g.l.a(n))
};
_g.l.f = function(n) {
	return n ? String.format("FolderId: Id= {0} ChangeKey= {1}", n.Id || "", n.ChangeKey || "") : ""
};
_g.l.e = function(n) {
	if(n.__type === _g.m._dataContractName) {
		var i = n;
		return new _g.m(i.Id)
	} else if(n.__type === _g.bJ._dataContractName) {
		var t = n;
		return new _g.bJ(t.Id)
	} else throw Error.invalidOperation("unpexpected type for baseFolderId: " + n.__type);
};
_g.ke = function() {};
_g.ke.a = function(n, t) {
	var u = 24856;
	var f = 24856;
	var i = n;
	var r = t;
	i && i.RetentionPeriod > 0 && (u = i.RetentionPeriod);
	r && r.RetentionPeriod > 0 && (f = r.RetentionPeriod);
	return u - f
};
_g.n = function() {};
_g.n.p = function() {
	if(!_g.n.f) {
		var i = "otmail.com;htmail.com;homail.com;hotail.com;hotmil.com;hotmal.com;hotmai.com;ohtmail.com;htomail.com;homtail.com;hotamil.com;hotmial.com;hotmali.com;ghotmail.com;hgotmail.com;yhotmail.com;hyotmail.com;uhotmail.com;huotmail.com;jhotmail.com;hjotmail.com;nhotmail.com;hnotmail.com;bhotmail.com;hbotmail.com;hiotmail.com;hoitmail.com;h9otmail.com;ho9tmail.com;h0otmail.com;ho0tmail.com;hpotmail.com;hoptmail.com;hlotmail.com;holtmail.com;hkotmail.com;hoktmail.com;hortmail.com;hotrmail.com;ho5tmail.com;hot5mail.com;ho6tmail.com;hot6mail.com;hoytmail.com;hotymail.com;hohtmail.com;hothmail.com;hogtmail.com;hotgmail.com;hoftmail.com;hotfmail.com;hotnmail.com;hotmnail.com;hotjmail.com;hotmjail.com;hotkmail.com;hotmkail.com;hotmqail.com;hotmaqil.com;hotmwail.com;hotmawil.com;hotmsail.com;hotmasil.com;hotmxail.com;hotmaxil.com;hotmzail.com;hotmazil.com;hotmauil.com;hotmaiul.com;hotma8il.com;hotmai8l.com;hotma9il.com;hotmai9l.com;hotmaoil.com;hotmaiol.com;hotmalil.com;hotmaill.com;hotmakil.com;hotmaikl.com;hotmajil.com;hotmaijl.com;hotmaikl.com;hotmailk.com;hotmaiol.com;hotmailo.com;hotmaipl.com;hotmailp.com;mail.com;gail.com;gmil.com;gmal.com;gmai.com;mgail.com;gamil.com;gmial.com;gmali.com;fgmail.com;gfmail.com;tgmail.com;gtmail.com;ygmail.com;gymail.com;hgmail.com;ghmail.com;bgmail.com;gbmail.com;vgmail.com;gvmail.com;gnmail.com;gmnail.com;gjmail.com;gmjail.com;gkmail.com;gmkail.com;gmqail.com;gmaqil.com;gmwail.com;gmawil.com;gmsail.com;gmasil.com;gmxail.com;gmaxil.com;gmzail.com;gmazil.com;gmauil.com;gmaiul.com;gma8il.com;gmai8l.com;gma9il.com;gmai9l.com;gmaoil.com;gmaiol.com;gmalil.com;gmaill.com;gmakil.com;gmaikl.com;gmajil.com;gmaijl.com;gmaikl.com;gmailk.com;gmaiol.com;gmailo.com;gmaipl.com;gmailp.com;ahoo.com;yhoo.com;yaoo.com;yaho.com;yaho.com;ayhoo.com;yhaoo.com;yaoho.com;tyahoo.com;ytahoo.com;6yahoo.com;y6ahoo.com;7yahoo.com;y7ahoo.com;uyahoo.com;yuahoo.com;jyahoo.com;yjahoo.com;hyahoo.com;yhahoo.com;gyahoo.com;ygahoo.com;yqahoo.com;yaqhoo.com;ywahoo.com;yawhoo.com;ysahoo.com;yashoo.com;yxahoo.com;yaxhoo.com;yzahoo.com;yazhoo.com;yaghoo.com;yahgoo.com;yayhoo.com;yahyoo.com;yauhoo.com;yahuoo.com;yajhoo.com;yahjoo.com;yanhoo.com;yahnoo.com;yabhoo.com;yahboo.com;yahioo.com;yahoio.com;yah9oo.com;yaho9o.com;yah0oo.com;yaho0o.com;yahpoo.com;yahopo.com;yahloo.com;yaholo.com;yahkoo.com;yahoko.com;yahoio.com;yahooi.com;yaho9o.com;yahoo9.com;yaho0o.com;yahoo0.com;yahopo.com;yahoop.com;yaholo.com;yahool.com;yahoko.com;yahook.com;utlook.com;otlook.com;oulook.com;outook.com;outlok.com;outlok.com;outloo.com;uotlook.com;otulook.com;oultook.com;outolok.com;outloko.com;ioutlook.com;oiutlook.com;9outlook.com;o9utlook.com;0outlook.com;o0utlook.com;poutlook.com;oputlook.com;loutlook.com;olutlook.com;koutlook.com;okutlook.com;oyutlook.com;ouytlook.com;o7utlook.com;ou7tlook.com;o8utlook.com;ou8tlook.com;oiutlook.com;ouitlook.com;okutlook.com;ouktlook.com;ojutlook.com;oujtlook.com;ohutlook.com;ouhtlook.com";
		var t = i.split(";");
		_g.n.f = {};
		for(var n = 0; n < t.length; n++) _g.n.f[t[n]] = null
	}
	return _g.n.f
};
_g.n.l = function(n) {
	return !!n && !!n.EmailAddress && n.EmailAddress.substr(n.EmailAddress.indexOf("@") + 1).toLowerCase() in _g.n.p()
};
_g.n.c = function(n) {
	return _j.h.a(n.RoutingType) || _g.n.d(n) ? n.OriginalDisplayName : _g.n.h(n) && _g.n.j(n) ? n.Name : n.EmailAddress
};
_g.n.m = function(n) {
	return _j.h.a(n.RoutingType) || _g.n.d(n) ? n.OriginalDisplayName : _g.n.h(n) && _g.n.j(n) ? n.ItemId.Id : n.EmailAddress
};
_g.n.d = function(n) {
	return !_j.h.b(n.RoutingType) && n.RoutingType.toUpperCase() === "EX"
};
_g.n.h = function(n) {
	return !_j.h.b(n.RoutingType) && n.RoutingType.toUpperCase() === "MAPIPDL"
};
_g.n.j = function(n) {
	return !_j.h.b(n.MailboxType) && n.MailboxType.toUpperCase() === "PRIVATEDL"
};
_g.n.e = function(n) {
	return _g.n.h(n) || _g.n.j(n)
};
_g.n.q = function(n) {
	for(var r = new _a.R, t, i = 0; i < n.b.length; i++) {
		t = n.c(i);
		t && r.a(t.EmailAddress)
	}
	return r
};
_g.n.g = function(n) {
	for(var i = new _j.l, t = 0; t < n.b(); t++) i.a(n.c(t));
	return i
};
_g.n.o = function(n) {
	return n ? _g.R.isInstanceOfType(n) || n.__type === _g.R._dataContractName || n.Mailbox !== undefined && _g.n.b(n.Mailbox) : !1
};
_g.n.b = function(n) {
	return n ? _g.g.isInstanceOfType(n) || n.__type === _g.g._dataContractName || n.RoutingType === "MAPIPDL" || n.EmailAddress !== undefined || n.MailboxType !== undefined : !1
};
_g.n.a = function(n, t) {
	if(!n || !t || Object.getType(t).getName() !== Object.getType(n).getName() && n.__type !== t.__type) return !1;
	var r = n;
	var i = t;
	if(_g.n.d(r) && _g.n.d(i)) return r.EmailAddress && i.EmailAddress ? _a.D.b(r.EmailAddress) === _a.D.b(i.EmailAddress) : !1;
	else {
		var f = _g.n.m(r);
		var u = _g.n.m(i);
		return _a.D.b(f) === _a.D.b(u)
	}
};
_g.n.n = function(n) {
	if(n) {
		var t;
		if(_g.n.o(n)) t = n.Mailbox;
		else if(_g.n.b(n)) t = n;
		else return "Invalid address type: " + Object.getType(n).getName();
		return t ? "Name=" + t.Name + "; Address=" + t.EmailAddress + "; RoutingType=" + t.RoutingType + "; MailboxType=" + t.MailboxType + "; Id=" + (t.ItemId ? t.ItemId.Id + ":" + t.ItemId.ChangeKey : "null") + "; SipUrl=" + t.SipUri + "; Submitted=" + t.Submitted + "; OriDisplayName=" + t.OriginalDisplayName + ";" : "null"
	} else return "null"
};
_g.n.k = function(n, t) {
	if(!n || !t) return !1;
	for(var i = 0; i < n.length; i++)
		if(t.EmailAddress === n[i].EmailAddress) return !0;
	return !1
};
_g.n.i = function(n, t) {
	var i = !!n && _g.n.j(n);
	if(i || n && n.EmailAddress) {
		t.val = i ? n.Name : n.EmailAddress;
		return !0
	} else {
		t.val = "";
		return !1
	}
};
_g.N = function(n, t) {
	_g.N.initializeBase(this, [n]);
	_a.c.c(n, "groupSmtpAddress");
	this.a = new _g.r("inbox");
	this.a.Mailbox = new _g.g;
	this.a.Mailbox.EmailAddress = n;
	this.a.Mailbox.MailboxType = "GroupMailbox";
	this.b = t
};
_g.N.prototype = {
	a: null,
	b: 0
};
_g.dl = function() {};
_g.dl.a = function(n) {
	return n ? n.__type === _g.o._dataContractName : !1
};
_g.B = function() {};
_g.B.a = function() {
	return "service.svc/s/GetFileAttachment?id={0}" + _a.w.f()
};
_g.B.m = function() {
	return "pdfprint.aspx?id={0}" + _a.w.f()
};
_g.B.j = function() {
	return "service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}" + _a.w.f()
};
_g.B.s = function() {
	return "service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}&permissionLevel={2}" + _a.w.f()
};
_g.B.k = function() {
	return "service.svc/s/GetFileAttachment?id={0}&UA=0" + _a.w.f()
};
_g.B.n = function() {
	return "service.svc/s/GetAllAttachmentsAsZip?id={0}" + _a.w.f()
};
_g.B.g = function() {
	return "service.svc/s/GetFileAttachment?id={0}&isImagePreview=False&asDataUri=True&UA=0" + _a.w.f()
};
_g.B.f = function() {
	return _a.g.b ? "service.svc/s/GetFileAttachment?id={0}&isImagePreview=True" + _a.w.f() : "service.svc/s/GetAttachmentThumbnail?id={0}&thumbnailType=2" + _a.w.f()
};
_g.B.i = function() {
	return "service.svc/s/ExportContactList"
};
_g.B.d = function() {
	return "service.svc/s/GetAttachmentThumbnail?id={0}" + _a.w.f()
};
_g.B.b = function() {
	return String.format(_g.B.a(), "{id}")
};
_g.B.h = function() {
	return "service.svc/CreateAttachmentFromForm"
};
_g.B.o = function() {
	return "service.svc/CreateAttachmentFromLocalFile"
};
_g.B.q = function() {
	return "service.svc/GetAccessTokenforDataProvider"
};
_g.B.l = function() {
	return "service.svc/UploadAndShareAttachmentFromForm"
};
_g.B.r = function() {
	return "service.svc/UploadPhotoFromForm"
};
_g.B.p = function() {
	return String.format(_g.B.a(), "{id}") + _g.B.e()
};
_g.B.e = function() {
	return String.format("&ManagementRole={0}&RequestServerVersion={1}", escape(_g.B.t()), "Exchange2013")
};
_g.B.t = function() {
	if(!_g.B.c) {
		var n = new _g.cY;
		n.UserRoles = ["MailboxSearch"];
		_g.B.c = JsonParser.serialize(n)
	}
	return _g.B.c
};
_g.B.u = function(n) {
	return(n ? "service.svc/s/GetFileAttachment?id={0}&UA=0" : "service.svc/s/GetFileAttachment?id={0}&isImagePreview=False&asDataUri=True&UA=0") + _a.w.f()
};
_g.bS = function() {};
_g.bS.prototype = {
	c: function(n) {
		return _g.bS.a[n]
	},
	d: function() {
		var i = new _j.q;
		var t = _g.bS.a;
		for(var n in t) {
			var r = {
				key: n,
				value: t[n]
			};
			i.c(r.key)
		}
		return i.e()
	}
};
_g.kg = function() {
	_g.kg.initializeBase(this)
};
_g.kg.prototype = {
	folderHierarchy: null
};
_g.k = function(n, t, i, r, u) {
	this.R = Function.createDelegate(this, this.Y);
	_g.k.initializeBase(this);
	_a.c.a(t, "onlineProxyFactory");
	_a.c.a(i, "connectionManagerFactory");
	_a.c.a(u, "eventAggregator");
	this.t = n;
	this.F = t.n(this.R);
	this.v = u;
	this.n = i.a(this.F, this.v);
	this.G = r
};
_g.k.i = function(n) {
	if(_g.k.a !== n) try {
		_g.k.a && _g.k.a.dispose()
	} finally {
		_g.k.a = n
	}
	return n
};
_g.k.h = function() {
	_g.k.d(function(n) {})
};
_g.k.d = function(n) {
	if(_g.k.a) n(_g.k.a.A());
	else if(_g.k.f) _g.k.c.addHandler("$", n);
	else if(_g.k.e) {
		_g.k.f = !0;
		_g.k.c = new Sys.EventHandlerList;
		_g.k.c.addHandler("$", n);
		_g.k.e(function(n) {
			_g.k.a = n;
			_g.k.f = !1;
			var t = _g.k.c.getHandler("$");
			_g.k.c = null;
			t(_g.k.a.A())
		})
	} else n(null)
};
_g.k.prototype = {
	G: null,
	v: null,
	t: null,
	n: null,
	S: null,
	F: null,
	h: function() {
		return this.t
	},
	m: function() {
		return this.n
	},
	A: function() {
		return this.F
	},
	b: function() {
		return this.F
	},
	i: function(n, t, i) {
		throw Error.invalidOperation("RemoveSendAction is only valid when offline is enabled.");
	},
	Y: function(n, t, i) {
		if(n.request.hasActionHandler) n.response.result ? this.G.b(n, this, t, i) : t();
		else {
			this.G.b(n, this, t, i);
			this.S && this.S(n)
		}
	},
	z: function(n, t, i) {},
	u: function(n, t, i) {},
	q: function(n) {
		return n
	},
	E: function(n, t, i, r, u) {
		var e = this,
			f = this;
		t(i, function(n) {}, function(t) {
			_j.e.c(_g.k.g, "ExecuteWithActionQueue action failed.  Action: {0}.  Exception: {1}", n, t.FaultMessage)
		});
		r(null)
	},
	D: function() {
		this.n.dispose()
	}
};
_g.kh = function() {
	this.f = {}
};
_g.kh.prototype = {
	e: function(n, t) {
		this.f[n.toLowerCase()] = t
	},
	c: function(n) {
		return this.f[n.toLowerCase()]
	},
	d: function() {
		var i = new _j.q;
		var t = this.f;
		for(var n in t) {
			var r = {
				key: n,
				value: t[n]
			};
			i.c(r.key)
		}
		return i.e()
	}
};
_g.bk = function() {};
_g.bk.a = function(n) {
	return _g.N.isInstanceOfType(n) ? !1 : _a.bK.g(n.Id)
};
_g.Q = function(n, t, i, r, u, f, e, o, s, h) {
	this.jz = {};
	this.jM = {};
	this.kc = new Sys.EventHandlerList;
	this.kb = _g.Q.g;
	_g.Q.initializeBase(this);
	_a.c.a(n, "processResponse");
	this.jT = n;
	this.jK = r;
	this.jO = u;
	this.jL = f;
	this.jQ = e;
	this.jD = s;
	this.jV = h;
	this.jz.SyncConversation = 12e4;
	this.jz.SyncFolderHierarchy = 12e4;
	this.jz.SyncFolderItems = 12e4;
	this.jz.GetItem = 12e4;
	this.jz.CreateItem = 18e4;
	this.jz.UpdateItem = 18e4;
	this.jz.CreateAttachment = 72e4;
	this.jz.CreateAttachmentFromLocalFile = 72e4;
	this.jz.CreateReferenceAttachmentFromLocalFile = 72e4;
	this.jz.GetAttachment = 72e4;
	this.jz.SearchMailboxes = 18e4;
	this.jz.CreateModernGroup = 18e4;
	this.jz.CreateUnifiedGroup = 18e4;
	this.jz.ImportContactList = 12e4;
	this.jz.UploadFileToCloud = 6e5;
	this.jW = i.a().lE().Enabled;
	this.jN = i.a().E().Enabled;
	this.jF = i.a().gm().Enabled ? i.a().gm().ActionsToProxy || new Array(0) : new Array(0);
	this.jP = i.a().fb().Enabled ? i.a().fb().ActionsToMeasure || new Array(0) : new Array(0);
	this.jX = i.a().lL().Enabled;
	var c = this;
	this.jH = new _j.J(function() {
		return i.a().eE().Enabled ? _a.bs.a() && t ? t() : null : _a.bs.b()
	});
	this.jM.InstantMessageSignIn = !0;
	this.jM.GetDlpPolicyTips = !0;
	_dh.a(o, this)
};
_g.Q.e = function(n) {
	return n ? _j.h.a(n.explicitLogonUser) ? _j.h.a(n.anchorMailbox) ? "" : n.anchorMailbox : n.explicitLogonUser : ""
};
_g.Q.h = function(n) {
	return n ? !_j.h.a(n.anchorMailbox) || !_j.h.a(n.explicitLogonUser) : !1
};
_g.Q.f = function(n, t) {
	_j.h.a(n) || (t = String.format("{0}:Edge-Header:{1}", t, n));
	return t
};
_g.Q.j = function() {
	_g.Q.d || (_g.Q.d = window.location.href.split("?")[0].split("#")[0]);
	return _g.Q.d
};
_g.Q.prototype = {
	jF: null,
	jP: null,
	jH: null,
	jK: null,
	jO: null,
	jL: null,
	jQ: null,
	jW: !1,
	jT: null,
	jJ: null,
	jI: null,
	jE: null,
	jN: !1,
	jD: null,
	jX: !1,
	jV: null,
	kj: function(n) {
		var t = _j.h.a(_a.g.m) ? "ping.owa" : _a.g.m;
		t = t.indexOf("?") === -1 ? t + "?" + "UA=0" : t + "&" + "UA=0";
		var i = new Sys.Net.WebRequest;
		i.set_url(_g.Q.a + t);
		i.set_timeout(6e4);
		i.add_completed(n);
		_g.bs.c(i)
	},
	jA: function(n, t, i, r, u, f) {
		var e = new _g.H(new _g.cP(t, i, r));
		var o = this;
		this.jR(e, function() {
			var n = e.response.fault;
			if(n) {
				var i = n;
				_j.h.b(e.activityId) && (i.ActivityId = e.activityId);
				var r = Error.create(t + n.FaultMessage, i);
				f(r)
			} else u(e, e.response.result)
		})
	},
	jB: function(n, t, i, r, u) {
		_a.c.a(r, "invokeSucceeded");
		_a.c.a(u, "invokeFailed");
		var f = new _g.H(new _g.cP(n, t, i));
		var e = this;
		this.jR(f, function() {
			e.kl(f)
		});
		r(f)
	},
	jR: function(n, t) {
		var r = _a.d.get_utcNow();
		var f = _g.H.d(n);
		n.beginTimeString = _a.d.p(r);
		_g.H.g(n);
		var u = n.request ? _g.Q.e(n.request.actionContext) : "";
		var i = _a.g.f().g(n.request.methodName, !1, u);
		this.jU("InvokingAction", n);
		this.jJ && this.jJ.a(n.request.parameters);
		this.jU("SendingAction", n);
		var e = this;
		this.jS(n, function() {
			_j.m.a().c(_a.a.cx, "TrackAction_" + n.request.methodName, function() {
				if(f) {
					var t = i ? i.n : 0;
					_g.dV.a(n, !0, t, i ? i.s : null)
				}
			});
			n.callBackStartTime = _a.L.b();
			t();
			n.callBackEndTime = _a.L.b();
			_g.H.c(n, r)
		}, i)
	},
	jS: function(n, t, i) {
		if(this.kb) {
			var u = n.request.methodName;
			var r = _g.Q.a + "service.svc" + "?action=" + u;
			_a.g.D(u) && (r += "&trace=1");
			var e = JsonParser.serialize(n.request, !0);
			n.responseCode = "ErrorConnectionFailed";
			this.jY(n, r, e, 0, "", "", "", "", "", "", "", "", t, i);
			return
		}
		if(n.request.hasActionHandler) this.kh(n, t, i);
		else {
			var f = this;
			this.kk(n, function() {
				f.ki(n, t, i)
			})
		}
	},
	kk: function(n, t) {
		if(null === n || null === n.request || null === n.request.actionContext) {
			t();
			return
		}
		this.jW && !this.jM[n.request.methodName] && (n.request.actionContext.useEmptyPost = !0);
		var i = n.request.actionContext;
		if(null !== this.jO && i.useEmptyPost && _g.Q.h(i)) {
			var r = this;
			this.jO.a(function(r) {
				var u = r.a(i);
				u || (n.request.actionContext.useEmptyPost = !1);
				t()
			})
		} else t()
	},
	ko: function(n, t, i, r) {
		if(_g.gP.isInstanceOfType(t)) {
			var f = t;
			n.attemptCount += f.b - 1;
			n.failureCount += f.e;
			n.timeoutCount += f.h;
			n.abandonedCount += f.d
		}
		if(t.get_responseAvailable()) {
			for(var o = 0; o < _g.Q.c.length; o++) {
				var w = _g.Q.c[o];
				var p = t.getResponseHeader(w);
				n.timestamps || (n.timestamps = {});
				p && (n.timestamps[w] = p)
			}
			var y;
			if(!_j.h.a(y = t.getResponseHeader("X-OWA-STO"))) {
				var d = this;
				_j.m.a().c(_a.a.cx, "RaiseEvent SessionTimeoutEvent", function() {
					d.jQ.a(_a.fh, new _a.fh(y))
				})
			}
			var b = t.getResponseHeader("X-EXT-ClientName");
			if(!_j.h.a(b)) {
				n.externalClientName = b;
				n.externalServerName = t.getResponseHeader("X-EXT-Server") || "";
				n.externalCorrelationId = t.getResponseHeader("X-EXT-CorrelationId") || "";
				for(var e = 0; e < _g.Q.b.length; e++) {
					var k = _g.Q.b[e];
					var v = t.getResponseHeader(k);
					n.externalTimestamps || (n.externalTimestamps = {});
					v && (n.externalTimestamps[k] = v)
				}
			}
			this.kn(n, t);
			t.get_webRequest() && t.get_webRequest().get_body() && (n.requestLength = t.get_webRequest().get_body().length);
			t.get_responseData() && (n.responseLength = t.get_responseData().length);
			var u = t.getResponseHeader("X-MSEdge-Ref");
			if(u) {
				n.edgeRequest = 1;
				n.msEdgeRef = u
			} else u = "";
			var s = t.getResponseHeader("X-FrontEnd-End");
			var a = t.getResponseHeader("X-FrontEnd-Begin");
			_j.h.a(s) || _j.h.a(a) || (n.frontEndTime = new Date(s) - new Date(a));
			var l = t.get_statusCode();
			if(l === 503) {
				var g = t.getResponseHeader("X-OWA-TransientErrorResponse");
				if(g) var nt = t.getResponseHeader("X-OWA-ERROR")
			}
			var c = t.getResponseHeader("X-FEServer");
			var h = t.getResponseHeader("X-BEServer");
			n.frontEndServer = c;
			n.backEndServer = h;
			if(r) {
				r.q = c;
				r.o = h
			}
			this.jY(n, t.get_webRequest().get_url(), t.get_webRequest().get_body(), l, t.get_statusText(), t.get_responseData(), t.getResponseHeader("Content-Type"), t.getResponseHeader("X-OWA-DuplicatedAction"), t.getResponseHeader("X-OWA-ReturnedSavedResult"), t.getResponseHeader("X-OWA-ResultSaved"), t.getResponseHeader("X-OWA-DiagnosticsInfo"), u, i, r)
		} else this.kp(n, t.get_timedOut(), i, r)
	},
	jY: function(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
		var w = n.request.methodName;
		var p = null;
		var y = null;
		var nt = !!e && e.startsWith("application/json");
		if(nt) {
			try {
				var b = JsonParser.deserialize(f);
				if(!Array.contains(this.jF, n.request.methodName) || b.Header || b.Body) p = b;
				else {
					var g = {};
					g.Body = b;
					g.Header = {};
					p = g
				}
			} catch(ut) {
				y = new _g.V(ut.message, r)
			}
			typeof p == "xml" && (y = new _g.V(String.format(_wss.i.G, w), r))
		}
		var it = r < 200 || r >= 300;
		if(it) {
			_no.a.c(r) && !_g.Q.h(n.request.actionContext) && _a.g.J();
			if(p) y = p.Body;
			else {
				var k = u ? String.format(_wss.i.W, w, u) : String.format(_wss.i.V, w, r);
				k = _g.Q.f(l, k);
				y = new _g.V(k, r)
			}
		} else {
			if(!nt) {
				var rt = 503;
				var d = e ? String.format(_wss.i.k, w, e) : String.format(_wss.i.a, w);
				d = _g.Q.f(l, d);
				y = new _g.V(d, rt)
			}
			_j.E.a(p)
		}
		var tt = _g.bB.c(o, s, h);
		y ? this.jC(n, y, tt, c, a, v) : this.ka(n, p, tt, c, a, v)
	},
	kp: function(n, t, i, r) {
		var u;
		var f = n.request.methodName;
		if(t) {
			n.timeoutCount++;
			u = new _g.V(String.format(_wss.i.j, f), 408)
		} else {
			n.abandonedCount++;
			u = new _g.V(String.format(_wss.i.A, f), 0)
		}
		this.jC(n, u, 0, "", i, r)
	},
	ka: function(n, t, i, r, u, f) {
		n.successCount++;
		n.response = _g.bB.a(t, i);
		this.kd(n, "", "", r, u, f)
	},
	kn: function(n, t) {
		if(n.request) {
			var r = _g.Q.e(n.request.actionContext);
			if(!_j.h.a(r)) {
				var i = t.getResponseHeader("X-OWA-Version");
				_j.h.a(i) || this.jK && this.jK.e(r, new _a.bj(i))
			}
		}
	},
	jC: function(n, t, i, r, u, f) {
		n.failureCount++;
		n.response = _g.bB.b(t, i);
		this.kd(n, t.FaultMessage, t.StackTrace, r, u, f)
	},
	kd: function(n, t, i, r, u, f) {
		n.state = 1;
		f && f.z(n.timestamps);
		var e = this.km(n, r);
		_a.g.f().f(f, n.response.statusCode, t, i, e[0], e[1], e[2], this.jN);
		this.jU("ResponseReceived", n);
		u();
		this.jN && _a.g.f().k(f, n.callBackEndTime - n.callBackStartTime)
	},
	km: function(n, t) {
		var r = new Array(3);
		if(t) {
			var i = t.split(";");
			var u = 0;
			var e = 0;
			var f = 0;
			if(i && i.length >= 3) {
				u = _j.h.b(i[0]) ? 0 : Number.parseInvariant(i[0]) / 1e3;
				e = _j.h.b(i[1]) ? 0 : Number.parseInvariant(i[1]) / 1e3;
				f = _j.h.b(i[2]) ? 0 : Number.parseInvariant(i[2]) / 1e3
			}
			r[0] = u.toFixed(3);
			r[1] = e.toFixed(3);
			r[2] = f.toFixed(3);
			n.backEndTime = u
		}
		return r
	},
	kh: function(n, t, i) {
		if(n.request.actionHandler) {
			var e = this,
				o = this;
			n.request.actionHandler(n.request.parameters, function(r) {
				e.ka(n, r, 0, "", t, i)
			}, function(r) {
				o.jC(n, r, 0, "", t, i)
			})
		} else {
			var f = "An online-only {0} action was found in the action queue without a corresponding handler in memory - this happens if the application restarted before the request had a chance to be handled.";
			var r = String.format(f, n.request.methodName);
			var u = new _g.V(r, 598);
			this.jC(n, u, 0, "", t, i)
		}
	},
	ki: function(n, t, i) {
		var f = n.request.methodName;
		var tt = n.request.parameters;
		var u = n.request.actionContext;
		var d = "";
		var k = null;
		var ut = _j.n.b(_a.a.cx, 2, "WebInvoke_" + f + "_" + n.correlationId);
		var r = new Sys.Net.WebRequest;
		var s = null;
		s = Array.contains(this.jF, f) ? this.jE.a() + "/messaging/" : this.jE && !_j.h.b(this.jE.b()) ? _j.h.c(this.jE.b(), f) : _g.Q.a + "service.svc";
		s += "?action=" + f;
		var l = s;
		_a.g.D(f) && (l += "&trace=1");
		var c = JsonParser.serialize(tt, !0);
		if(u && u.useEmptyPost) {
			var b = encodeURIComponent(c);
			if(b.length > 2048) r.set_body(c);
			else {
				l += "&EP=1";
				r.get_headers()["X-OWA-UrlPostData"] = b;
				r.set_httpVerb("POST");
				r.set_body(null)
			}
		} else r.set_body(c);
		r.set_url(l);
		r.get_headers().Action = f;
		r.get_headers()["Content-Type"] = "application/json; charset=utf-8";
		r.get_headers()[_a.w.c()] = _a.w.d();
		this.jL && (r.get_headers()["X-OWA-ClientBuildVersion"] = this.jL.a);
		var h = !1;
		if(u) {
			h = u.isAutomated;
			u.actionName && (r.get_headers()["X-OWA-ActionName"] = u.actionName);
			u.timeZone && (r.get_headers()["X-TimeZoneContext"] = u.timeZone);
			if(u.isDiscovery) {
				var nt = new _g.cY;
				nt.UserRoles = ["MailboxSearch"];
				r.get_headers()["X-OWA-ManagementRole"] = JsonParser.serialize(nt)
			}!_j.u.a(u.source) && u.source && (r.get_headers()["X-OWA-ActionSource"] = _ff.y.toString(u.source));
			_a.y.d() && (r.get_headers()["X-OWA-OfflineRejectCode"] = u.offlineRejectCode);
			if(u.anchorMailbox) r.get_headers()[this.jD.c()] = u.anchorMailbox;
			else if(_j.h.b(u.explicitLogonUser))
				if(_j.h.b(this.jH.e())) {
					var g = this.jD.b();
					_j.h.b(g) || (r.get_headers()[this.jD.a()] = g)
				} else r.get_headers()[this.jD.c()] = this.jH.e();
			else r.get_headers()[this.jD.c()] = u.explicitLogonUser;
			u.explicitLogonUser && (r.get_headers()["X-OWA-ExplicitLogonUser"] = u.explicitLogonUser);
			u.remoteUserIdentifier && (r.get_headers()["X-OWA-RemoteUserId"] = u.remoteUserIdentifier);
			u.publicFolderMailbox && (r.get_headers()["X-PublicFolderMailbox"] = u.publicFolderMailbox);
			u.selfIdentifier && (r.get_headers()["X-OWA-SelfId"] = u.selfIdentifier);
			if(u.owsVersion !== "Exchange2007") {
				var e = u.owsVersion;
				if(e && e.startsWith("V")) {
					e = e.substring(1, e.length);
					e = e.replace("_", ".");
					_j.h.b(e) || (r.get_headers()["X-EWS-TargetVersion"] = e)
				}
			}
			u.setServiceUnavailableOnTransientError && (r.get_headers()["X-OWA-ServiceUnavailableOnTransientError"] = u.setServiceUnavailableOnTransientError.toString());
			d = u.actionName
		}
		r.get_headers()["X-OWA-ActionName"] || (r.get_headers()["X-OWA-ActionName"] = f + "Action");
		if(!h && _a.bo.a) {
			var rt = new Date - _a.bo.a.a;
			rt > 6e4 && (h = !0)
		}
		h && r.set_url(r.get_url() + "&UA=0");
		this.jX && (r.get_headers()["X-UseJsonNetSerializer"] = "1");
		r.set_url(r.get_url() + ("&ID=" + n.id + "&AC=" + n.attemptCount));
		r.get_headers()["X-OWA-Attempt"] = n.attemptCount.toString();
		r.get_headers()["X-OWA-ActionId"] = n.id.toString();
		r.set_timeout(this.jz[f] || 6e4);
		if(this.jI) {
			var v = this.jI();
			if(v) {
				var w = v;
				for(var a in w) {
					var p = {
						key: a,
						value: w[a]
					};
					r.get_headers()[p.key] = p.value
				}
			}
		}
		var y = !0;
		u && (y = !u.preventRetry);
		_g.H.d(n) && y && r.set_executor(new _g.gP(_j.m.a()));
		var o = null;
		if(Array.contains(this.jP, f)) {
			o = new _a.bx(14, 1, !0);
			o.e(1, f);
			o.e(2, s)
		}
		var it = this;
		r.add_completed(function(r) {
			var u = new _a.cf(_a.a.cJ, "WebResponse_" + f);
			u.a = "Handling callback for " + _g.H.a(n);
			_a.bd.a(u, function() {
				_j.n.a(k);
				o && o.l();
				var u = r.getResponseHeader("Content-Length");
				n.activityId = r.getResponseHeader("request-id");
				n.responseBytes = parseInt(u);
				n.webrequestCompletedCount++;
				n.webrequestCompletedCount > 1;
				it.ko(n, r, t, i)
			})
		});
		if(i) {
			i.m = n.correlationId;
			i.s = _g.Q.j() + r.get_url()
		}
		r.get_headers()["X-OWA-CorrelationId"] = n.correlationId;
		r.get_headers()["client-request-id"] = n.correlationId;
		r.get_headers()["X-OWA-ClientBegin"] = n.beginTimeString;
		_a.p.bd(r);
		var ft = this;
		this.kg(f, r, function() {
			k = _j.n.b(_a.a.cx, 513, "WebRequest_" + f + "_" + d + "_" + n.id);
			r.invoke();
			n.requestInvokedTimeStamp = _a.L.b();
			_j.n.a(ut)
		})
	},
	kl: function(n) {
		var i = this,
			t = this;
		this.jT(n, function() {}, function(t) {
			_j.e.c(_g.Q.i, "Processing response from {0} failed: {1}", n.request.methodName, t.message)
		})
	},
	jU: function(n, t) {
		var i = this.kc.getHandler(n);
		i && i(t)
	},
	kg: function(n, t, i) {
		if(Array.contains(this.jF, n)) {
			var r = this;
			this.jV.a(function(n) {
				var u = n.b(window.location.origin);
				var r = u[0];
				var f = u[1];
				if(r) {
					t.get_headers().Authorization = "Bearer " + r;
					i()
				} else f.then(function(n) {
					if(n) {
						t.get_headers().Authorization = "Bearer " + n;
						i()
					}
				})
			})
		} else i()
	}
};
_g.dX = function(n, t, i, r, u, f, e, o, s) {
	this.g = n;
	this.b = t;
	this.c = i;
	this.e = r;
	this.d = u;
	this.f = f;
	this.h = e;
	this.a = o;
	this.i = s
};
_g.dX.prototype = {
	g: null,
	b: null,
	c: null,
	e: null,
	d: null,
	f: null,
	h: null,
	a: null,
	i: null,
	n: function(n) {
		return new _g.Q(n, this.g, this.b, this.c, this.e, this.d, this.f, this.h, this.a, this.i)
	}
};
_g.gP = function(n) {
	this.i = Function.createDelegate(this, this.m);
	_g.gP.initializeBase(this);
	this.g = n
};
_g.gP.prototype = {
	a: null,
	f: null,
	b: 0,
	e: 0,
	h: 0,
	d: 0,
	g: null,
	c: !1,
	j: 5e3,
	get_aborted: function() {
		return this.a ? this.a.get_aborted() : !1
	},
	get_responseAvailable: function() {
		return this.a ? this.a.get_responseAvailable() : !1
	},
	get_responseData: function() {
		return this.a ? this.a.get_responseData() : null
	},
	get_started: function() {
		return !!this.f
	},
	get_statusCode: function() {
		return this.a && this.a.get_responseAvailable() ? this.a.get_statusCode() : 0
	},
	get_statusText: function() {
		return this.a ? this.a.get_statusText() : null
	},
	get_timedOut: function() {
		return this.a ? this.a.get_timedOut() : !1
	},
	get_xml: function() {
		return this.a ? this.a.get_xml() : null
	},
	l: function() {
		this.c = !1;
		if(this.b < 2 && this.get_responseAvailable())
			if(_g.bs.a(this.get_statusCode()) || this.get_statusCode() === 503 || this.get_statusCode() === 504) {
				if(this.getResponseHeader("X-RetriableError") === "1") {
					this.c = !0;
					return !0
				}
			} else return !0;
		return !1
	},
	abort: function() {
		this.a && this.a.abort()
	},
	getAllResponseHeaders: function() {
		return this.a ? this.a.getAllResponseHeaders() : null
	},
	getResponseHeader: function(n) {
		return this.a ? this.a.getResponseHeader(n) : null
	},
	executeRequest: function() {
		this.b++;
		var t = this.get_webRequest();
		var n = new Sys.Net.WebRequest;
		n.set_body(t.get_body());
		n.set_httpVerb(t.get_httpVerb());
		n.set_timeout(t.get_timeout());
		n.set_url(t.get_url());
		n.set_userContext(t.get_userContext());
		var u = t.get_headers();
		for(var r in u) {
			var i = {
				key: r,
				value: u[r]
			};
			n.get_headers()[i.key] = i.value
		}
		n.get_headers()[_a.w.c()] = _a.w.d();
		n.get_headers()["X-OWA-Attempt"] = this.b.toString();
		n.add_completed(this.i);
		this.f = n;
		_g.bs.c(n);
		this.a = n.get_executor()
	},
	m: function(n) {
		this.a = n;
		if(this.l()) {
			this.e++;
			n.get_responseAvailable() || (n.get_timedOut() ? this.h++ : this.d++);
			if(this.c) {
				var t = this;
				this.g.a(_a.a.cx, "Retry on server error", function() {
					t.executeRequest()
				}, this.j)
			} else this.executeRequest()
		} else this.k()
	},
	k: function() {
		this.get_webRequest().completed(Sys.EventArgs.Empty)
	}
};
_g.hC = function(n, t, i, r, u, f, e, o) {
	this.p = Function.createDelegate(this, this.q);
	this.d = _g.hC.TResponse === Number || Type.isEnum(_g.hC.TResponse) ? 0 : _g.hC.TResponse === Boolean ? !1 : null;
	_g.hC.$$(this.$$gta["_g.hC"].TResponse).initializeBase(this);
	this.j = t;
	this.o = n;
	this.h = u;
	this.k = f;
	this.e = e;
	this.l = o;
	this.f = i;
	this.n = r
};
_g.hC.$$ = function(n) {
	var u = _g.__tc = _g.__tc || {};
	var i = "hC" + "$" + n.getName().replace(/\./g, "_");
	if(!u[i]) {
		var t = u[i] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_g.hC.apply(this, t)
		};
		var o = _a.dm;
		t.registerClass("_g.__tc." + i, o);
		var s = {
			"_g.hC": {
				TResponse: n
			},
			ctor: _g.hC
		};
		t.prototype.$$gta = s;
		var e = _g.hC.prototype;
		for(var f in e) {
			var r = {
				key: f,
				value: e[f]
			};
			"constructor" !== r.key && (t.prototype[r.key] = r.value)
		}
		t.b = function(t, i, r) {
			r.val = "";
			i.val = n === Number || Type.isEnum(n) ? 0 : n === Boolean ? !1 : null;
			try {
				i.val = JsonParser.deserialize(t);
				return !0
			} catch(u) {
				r.val = "Exception when deserializing response. Response Text: " + t + ". Exception: " + u.message;
				return !1
			}
		};
		t.a = "HTTP Status: {0}. Message: {1}. CorrelationId: {2}"
	}
	return u[i]
};
_g.hC.prototype = {
	e: null,
	j: null,
	o: null,
	h: null,
	k: null,
	l: 0,
	f: null,
	n: null,
	bb: function() {
		var n = new XMLHttpRequest;
		var t = this;
		n.onreadystatechange = function() {
			n.readyState === 4 && (n.status >= 200 && n.status < 300 ? t.s(n, t.e) : t.r(n, t.e))
		};
		var r = this;
		n.ontimeout = function() {
			r.X(Error.create("Timeout"))
		};
		n.open(this.j, this.o, !0);
		n.timeout = this.l;
		n.setRequestHeader(_a.w.c(), _a.w.d());
		n.setRequestHeader(this.f.a(), this.f.b());
		n.setRequestHeader("x-ms-appname", "owa-jsmvvm");
		_j.h.a(this.h) || n.setRequestHeader("Content-Type", this.h);
		_j.h.a(this.e) || n.setRequestHeader("client-request-id", this.e);
		var i = this;
		this.n.a(function(t) {
			t.a(window.location.origin).then(function(t) {
				t && n.setRequestHeader("Authorization", "Bearer " + t);
				n.send(i.k)
			}, i.p)
		});
		return 1
	},
	s: function(n, t) {
		var i;
		var r;
		var e, f, u;
		if(u = _g.hC.$$(this.$$gta["_g.hC"].TResponse).b(n.responseText, e = {
				val: r
			}, f = {
				val: i
			}), r = e.val, i = f.val, u) {
			this.d = r;
			this.X(null)
		} else {
			i = String.format(_g.hC.$$(this.$$gta["_g.hC"].TResponse).a, n.status, i, t);
			this.X(Error.create(i))
		}
	},
	r: function(n, t) {
		var i = String.format(_g.hC.$$(this.$$gta["_g.hC"].TResponse).a, n.status, n.responseText, t);
		this.X(Error.create(i))
	},
	q: function(n) {
		_j.e.a(_a.a.bc, String.format("[OutlookServiceAction] GetAccessTokenforResource failed with exception message: {0}", n.message));
		this.X(null)
	}
};
_g.cs = function(n, t, i) {
	this.b = n;
	this.a = t;
	this.c = i
};
_g.cs.prototype = {
	b: null,
	a: null,
	c: null,
	d: function(n, t, i, r) {
		return this.g(n, t, i, r, r.correlationId)
	},
	g: function(n, t, i, r, u) {
		return new(_g.hC.$$(n))(this.b.a() + i, "POST", this.a, this.c, "application/json", JsonParser.serialize(r), u, 2e4)
	},
	e: function(n, t, i) {
		return new(_g.hC.$$(n))(this.b.a() + t, "GET", this.a, this.c, null, null, i, 2e4)
	},
	f: function(n, t, i, r) {
		return new(_g.hC.$$(n))(this.b.a() + i, "PATCH", this.a, this.c, "application/json", JsonParser.serialize(r), r.correlationId, 2e4)
	}
};
_g.kQ = function() {};
_g.kQ.prototype = {
	correlationId: null
};
_g.gQ = function(n, t) {
	this.b = Function.createDelegate(this, this.d);
	_a.c.a(n, "subscriber");
	_a.c.a(t, "aggregator");
	this.a = t;
	this.c = n;
	n(this.b, !0);
	_a.g.g().a(this)
};
_g.gQ.prototype = {
	c: null,
	a: null,
	dispose: function() {
		this.a = null;
		this.c(this.b, !1);
		_a.g.g().b(this)
	},
	d: function(n, t) {
		var i = n;
		if(i.get_statusCode() === 500 || i.get_statusCode() === 412) {
			var r = i.getResponseHeader("X-OWA-ExtendedErrorCode");
			if(!_j.h.a(r)) {
				var e = i.getResponseHeader("X-OWA-ExtendedErrorMessage");
				var f = i.getResponseHeader("X-OWA-ExtendedErrorUser");
				var u = i.getResponseHeader("X-OWA-ExtendedErrorData");
				this.a.a(_a.cy, new _a.cy(Number.parseInvariant(r), e, f, u))
			}
		}
	}
};
_g.cB = function(n, t) {
	_a.c.c(n, "buildVersion");
	this.a = n;
	this.b = t
};
_g.cB.prototype = {
	a: null,
	b: "Exchange2007"
};
_g.OWSVersion = function(n) {
	this.a = n
};
_g.OWSVersion.create = function(n) {
	return new _g.OWSVersion(n)
};
_g.OWSVersion.prototype = {
	a: null,
	d: 0,
	e: 0,
	c: !1,
	b: function() {
		this.g();
		return this.d
	},
	f: function() {
		this.g();
		return this.e
	},
	supports: function(n) {
		return this.a === n.a ? !0 : this.h(n) > 0
	},
	h: function(n) {
		if(this.a === n.a) return 0;
		var t = n;
		return this.b() > t.b() ? 1 : this.b() < t.b() ? -1 : this.f() > t.f() ? 1 : -1
	},
	toString: function() {
		return this.a
	},
	g: function() {
		if(!this.c) {
			this.c = !0;
			var n = this.a.substr(1).split("_");
			this.d = Number.parseInvariant(n[0]);
			this.e = Number.parseInvariant(n[1])
		}
	}
};
_g.eY = function(n) {
	this.palActionNeeded = n
};
_g.eY.prototype = {
	palActionNeeded: !1
};
_g.ki = function(n, t, i) {
	this.successEventName = n;
	this.failureEventName = t;
	this.completedEventName = i
};
_g.ki.prototype = {
	windowId: null,
	successEventName: null,
	failureEventName: null,
	completedEventName: null
};
_g.bU = function() {};
_g.bU.a = function(n, t, i, r, u) {
	var f = new Array(5);
	f[0] = _j.h.b(n) ? "" : n.trim();
	f[1] = _j.h.b(t) ? "" : t.trim();
	f[2] = _j.h.b(i) ? "" : i.trim();
	f[3] = _j.h.b(r) ? "" : r.trim();
	f[4] = _j.h.b(u) ? "" : u.trim();
	return f.join("$#$")
};
_g.bU.c = function(n, t) {
	for(var u = new _g.cp(t, "None"), i = n.split("$#$"), r = 0; r < i.length; r++) i[r] = i[r] === "" ? null : i[r].trim();
	u.Street = i[0];
	u.City = i[1];
	u.State = i[2];
	u.PostalCode = i[3];
	u.Country = i[4];
	return u
};
_g.kR = function(n, t, i) {
	this.c = n;
	this.v = _g.H.a(this.c);
	this.e = t;
	this.f = i
};
_g.kR.prototype = {
	v: null,
	c: null,
	e: null,
	f: null,
	H: function() {
		return !0
	},
	w: function(n, t) {
		this.n(n, t)
	}
};
_g.dY = function(n) {
	_a.c.a(n, "ResponseProcessors.modelResponseProcessorResolver");
	this.a = n
};
_g.dY.prototype = {
	a: null,
	c: function(n, t, i) {
		!n;
		var f = _g.H.a(n);
		!n.response;
		var r = n.response;
		if(!_g.bs.a(r.statusCode)) {
			i(!1);
			return
		}
		if(r.statusCode === 500 && r.fault && !1 === r.fault.IsTransient) {
			i(!0);
			return
		}
		if(r.statusCode === 404) {
			n.attemptCount <= 3 ? i(!1) : i(!0);
			return
		}
		switch(r.responseKind) {
			case 0:
				i(!0);
				return;
			case -1:
				i(!1);
				return;
			case 3:
				i(!0);
				return;
			case 4:
				break;
			case 1:
				i(!0);
				return;
			case 2:
				break;
			default:
				throw Error.argumentOutOfRange("response.DuplicatedAction", r.responseKind);
		}
		var u = this;
		this.a.a(function(r) {
			r.a(n, t, function(n) {
				for(var r = !1, t = 0; t < n.length; t++) {
					var u = n[t];
					if(u.H()) r = !0;
					else break
				}
				i(r)
			})
		})
	},
	b: function(n, t, i, r) {
		var u = this;
		this.a.a(function(u) {
			u.a(n, t, function(t) {
				if(t.length > 0)
					for(var u = 0; u < t.length; u++) {
						var f = t[u];
						f.w(i, r)
					} else r(Error.create(String.format("Response processor for {0} not found", n.request.methodName)))
			})
		})
	}
};
_g.eZ = function() {};
_g.eZ.prototype = {
	a: function(n, t) {
		var r = n;
		var i = t;
		return r === i || r.Id === i.Id && r.ChangeKey === i.ChangeKey && r.RootItemId === i.RootItemId && r.RootItemChangeKey === i.RootItemChangeKey && r.InstanceIndex === i.InstanceIndex && r.RecurringMasterId === i.RecurringMasterId && r.OccurrenceId === i.OccurrenceId && (!r.__type || !i.__type || r.__type === i.__type)
	},
	b: function(n) {
		var t = n;
		return t.Id || t.RootItemId || t.RecurringMasterId || t.OccurrenceId
	}
};
_g.kj = function() {};
_g.kj.prototype = {
	a: function(n, t) {
		var r = n;
		var i = t;
		return r === i || r.Id === i.Id && r.RootItemId === i.RootItemId && r.InstanceIndex === i.InstanceIndex && r.RecurringMasterId === i.RecurringMasterId && r.OccurrenceId === i.OccurrenceId
	},
	b: function(n) {
		var t = n;
		return t.Id || t.RootItemId || t.RecurringMasterId || t.OccurrenceId
	}
};
_g.fa = function(n, t, i, r) {
	this.e = n;
	this.c = t;
	this.d = i;
	this.b = r
};
_g.fa.a = function(n, t, i, r, u) {
	var s = n();
	if(s.length > 0) {
		i.append(u);
		i.append(r);
		i.append(u);
		for(var o = s, l = o.length, f = 0; f < l; ++f) {
			var e = o[f];
			var c = t(e);
			var h = String.format("{0} : {1}", e, c.c());
			i.append(h);
			i.append(u)
		}
	}
};
_g.fa.prototype = {
	e: "Exchange2007",
	c: null,
	d: null,
	b: null,
	a: function(n) {
		var t = new Sys.StringBuilder;
		t.append("Chicago OWA Version: ");
		t.append(this.b.h());
		t.append(n);
		t.append("Utah Sever Version: ");
		t.append(this.b.d().d);
		t.append(n);
		t.append("Client OWS Version: ");
		t.append(this.e);
		t.append(n);
		var u = this.c,
			f = this.c;
		_g.fa.a(u.a || (u.a = Function.createDelegate(u, u.d)), f.b || (f.b = Function.createDelegate(f, f.c)), t, "Feature Versions: ", n);
		var i = this.d,
			r = this.d;
		_g.fa.a(i.a || (i.a = Function.createDelegate(i, i.d)), r.b || (r.b = Function.createDelegate(r, r.c)), t, "Mailbox Versions: ", n);
		return t.toString()
	}
};
_g.gR = function() {};
_g.gR.$$cctor = function() {
	_ff.e.f(_g.iE.a)
};
_g.hG = function() {};
_g.hG.registerInterface("_g.hG");
_g.hI = function() {};
_g.hI.registerInterface("_g.hI");
_g.kW = function() {};
_g.kW.registerInterface("_g.kW");
_g.kU = function() {};
_g.kU.registerInterface("_g.kU");
_g.hE = function() {};
_g.hE.registerInterface("_g.hE");
_g.fd = function() {};
_g.fd.registerInterface("_g.fd");
_g.hF = function() {};
_g.hF.registerInterface("_g.hF");
_g.cg = function() {};
_g.cg.registerInterface("_g.cg");
_g.hJ = function() {};
_g.hJ.prototype = {
	unknown: 0,
	email: 1,
	task: 2,
	meetingMessage: 3,
	contact: 4,
	calendarItem: 5,
	meetingRecurrenceException: 6,
	ndr: 7
};
_g.hJ.registerEnum("_g.hJ", !1);
_g.hH = function() {};
_g.hH.registerInterface("_g.hH");
_g.kT = function() {};
_g.kT.registerInterface("_g.kT");
_g.x = function() {};
_g.x.registerInterface("_g.x");
_g.kl = function() {};
_g.kl.prototype = {
	unsupported: 0,
	emailMessage: 1,
	appointment: 2,
	contact: 3,
	task: 4,
	postItem: 5,
	distributionList: 6
};
_g.kl.registerEnum("_g.kl", !1);
_g.kn = function() {};
_g.kn.prototype = {
	undefined: 0,
	plainTextBody: 1,
	rtfCompressedBody: 2,
	htmlBody: 3,
	clearSignedBody: 4
};
_g.kn.registerEnum("_g.kn", !1);
_g.fe = function() {};
_g.fe.registerInterface("_g.fe");
_g.la = function() {};
_g.la.prototype = {
	Ascending: 0,
	Descending: 1
};
_g.la.registerEnum("_g.la", !1);
_g.ResponseActions = function() {};
_g.ResponseActions.prototype = {
	none: 0,
	acceptItem: 1,
	tentativelyAcceptItem: 2,
	declineItem: 4,
	replyToItem: 8,
	replyAllToItem: 16,
	forwardItem: 32,
	cancelCalendarItem: 64,
	removeItem: 128,
	suppressReadReceipt: 256,
	postReplyItem: 512,
	acceptSharingInvitation: 1024,
	addItemToMyCalendar: 2048,
	proposeNewTime: 4096
};
_g.ResponseActions.registerEnum("_g.ResponseActions", !0);
_g.km = function() {};
_g.km.prototype = {
	open: 0,
	votingOptionMin: 1,
	votingOptionMax: 31,
	first: 100,
	replyToSender: 102,
	replyToAll: 103,
	forward: 104,
	replyToFolder: 108
};
_g.km.registerEnum("_g.km", !1);
_g.kV = function() {};
_g.kV.registerInterface("_g.kV");
_g.bH = function() {};
_g.bH.registerInterface("_g.bH");
_g.kk = function() {};
_g.kk.prototype = {
	conversationView: 1,
	dateView: 2,
	dateViewOnly: 3,
	itemGroupView: 4,
	bundledView: 5
};
_g.kk.registerEnum("_g.kk", !1);
_g.cf = function() {};
_g.cf.registerInterface("_g.cf");
_g.IReadingPaneOptions = function() {};
_g.IReadingPaneOptions.registerInterface("_g.IReadingPaneOptions");
_g.kY = function() {};
_g.kY.registerInterface("_g.kY");
_g.h = function() {};
_g.h.registerInterface("_g.h");
_g.kZ = function() {};
_g.kZ.registerInterface("_g.kZ");
_g.K = function() {
	this.cz = {};
	_g.K.initializeBase(this)
};
_g.K.a = function(n, t) {
	return n ? n.cb(t) : !t
};
_g.K.g = function(n, t, i, r) {
	return !t && r[n] !== undefined ? !0 : t !== i
};
_g.K.c = function(n, t, i, r) {
	if(!i[t]) {
		i[t] = n(r);
		return
	}
	i[t].k(r)
};
_g.K.d = function(n, t, i, r) {
	i[t] = _a.d.b(r)
};
_g.K.e = function(n) {
	return n.i()
};
_g.K.f = function(n) {
	return _a.d.f(n)
};
_g.K.prototype = {
	bH: null,
	gv: !1,
	fl: function(n) {
		if(this.bH && n && this.bH.ClientProperties && !n.ClientProperties) {
			var t = this.bH.ClientProperties;
			this.bH = n;
			this.bH.ClientProperties = t
		} else this.bH = n;
		return n
	},
	fj: function() {
		this.bH || (this.bH = new _ff.e);
		this.bH.ClientProperties || (this.bH.ClientProperties = new _ff.e);
		return this.bH.ClientProperties
	},
	iK: function() {
		if(!_g.K.b) {
			_g.K.b = {};
			_g.K.b.ClientProperties = 1;
			_g.K.b.__type = 1;
			_g.K.b._shape = 1
		}
		return _g.K.b
	},
	cb: function(n) {
		return n ? this === n ? !0 : Object.getType(n).getName() !== Object.getType(this).getName() ? !1 : _ff.e.b(this.bH, n.bH) : !1
	},
	fa: function(n) {
		throw Error.invalidOperation("Not valid to call SetValues on a Generated model, use the appropriate Update method instead " + Object.getType(this).getName());
	},
	fo: function() {
		throw Error.invalidOperation("Not valid to call GetValues on a Generated model, use the appropriate JSON property getter instead " + Object.getType(this).getName());
	},
	eI: function(n, t) {
		throw Error.invalidOperation("Not valid to call SetValue on a Generated model, use the appropriate property setter instead " + Object.getType(this).getName());
	},
	eK: function(n) {
		throw Error.invalidOperation("Not valid to call GetValue on a Generated model, use the appropriate property getter instead " + Object.getType(this).getName());
	},
	iL: function() {
		var n = _ff.e.a(this.bH);
		delete n.ClientProperties;
		return n
	},
	k: function(n) {
		this.fk(n);
		this.bJ(n);
		this.dP()
	},
	i: function() {
		return this.bH
	},
	fk: function(n) {},
	dP: function() {},
	bK: function(n, t) {
		if((this.hr > 0 || this.gv) && t !== this.bH) return !1;
		if(!n) {
			this.fl(t);
			return !0
		}
		var u = t._shape;
		var r = this.bH ? this.bH._shape : null;
		if(n && !u) throw Error.invalidOperation("Must set _shape member in JSON before calling Update for this Model because is enabled for 'shapes'");
		if(!this.bH || u === r || !r) {
			this.fl(t);
			return !0
		}
		var s = this.bH;
		var o = t;
		var e = s;
		for(var f in e) {
			var i = {
				key: f,
				value: e[f]
			};
			i.key in o || (o[i.key] = i.value)
		}
		u._shape = r;
		return !1
	},
	bS: function(n, t) {
		this.fI(t, this.cz[t], !0) && (this.cz[t] = _a.m.c(n, this.bH[t], n));
		return this.cz[t]
	},
	bP: function(n, t) {
		this.fI(t, this.cz[t], !0) && (this.cz[t] = new _a.k(this.bH[t]));
		return this.cz[t]
	},
	ca: function(n, t, i) {
		this.fI(i, this.cz[i], !0) && (this.cz[i] = new(_a.fT.$$(n, t))(this.bH[i]));
		return this.cz[i]
	},
	bW: function(n) {
		if(this.fI(n, this.cz[n], !1)) {
			var t = this.bH[n];
			if(_j.h.a(t)) return null;
			this.cz[n] = _a.d.b(this.bH[n])
		}
		return this.cz[n]
	},
	fI: function(n, t, i) {
		if(!t && this.bH[n] !== undefined) {
			i && (this.gv = !0);
			return !0
		}
		return !1
	},
	bQ: function(n, t) {
		return this.bH[n] === undefined ? t : this.bH[n]
	},
	bI: function(n, t) {
		if(this.bH[n] !== t) {
			this.bH[n] = t;
			this.eH(n)
		}
	},
	bO: function(n, t) {
		this.iM(n, t) && this.eH(n)
	},
	iM: function(n, t) {
		return this.gw(n, t, _g.K.e)
	},
	co: function(n, t) {
		this.hh(n, t) && this.eH(n)
	},
	hh: function(n, t) {
		return this.gw(n, t, _g.K.f)
	},
	bM: function(n, t) {
		this.hg(n, t, n);
		this.hg(this.bH, t, n)
	},
	hg: function(n, t, i) {
		var u = n;
		for(var f in u) {
			var r = {
				key: f,
				value: u[f]
			};
			Function.isInstanceOfType(r.value) || r.key in t || r.key in this.iK() || this.bI(r.key, i[r.key])
		}
	},
	eg: function(n, t, i) {
		return this.gx(n, t, i, _g.K.c)
	},
	bN: function(n, t, i, r) {
		this.hi(n, t, i, r, _g.K.c)
	},
	iN: function(n, t) {
		return this.gx(null, n, t, _g.K.d)
	},
	cg: function(n, t, i) {
		this.hi(null, n, t, i, _g.K.d)
	},
	hi: function(n, t, i, r, u) {
		for(var f = 0; f < t.length; ++f) {
			r && (r[t[f]] = 1);
			this.gx(n, t[f], i[t[f]], u) && this.eH(t[f])
		}
	},
	bL: function(n) {
		n.ClientProperties && this.by(n.ClientProperties)
	},
	bR: function() {
		this.k(this.bH)
	},
	gw: function(n, t, i) {
		var r = this.bH;
		if(_g.K.g(n, this.cz[n], t, r)) {
			if(t) {
				r[n] = i(t);
				this.cz[n] = t
			} else {
				delete r[n];
				this.cz[n] = null
			}
			return !0
		}
		return !1
	},
	gx: function(n, t, i, r) {
		var u = this.bH;
		if(!i) {
			if(!u[t]) return !1;
			i === undefined ? delete u[t] : u[t] = null;
			this.cz[t] = null;
			return !0
		}
		if(!this.wI(t) && (!this.cz[t] || _a.d.isInstanceOfType(this.cz[t]))) {
			u[t] = i;
			this.cz[t] = null;
			return !1
		}
		r(n, t, this.cz, i);
		u[t] = i;
		return !0
	}
};
_g.Attachment = function(n) {
	_g.Attachment.initializeBase(this);
	n || (n = new _g.bq);
	this.d(n);
	_a.s.a(this, "_Attachment")
};
_g.Attachment.$$cctor = function() {
	_a.m.a(_g.Attachment, _g.bq, _g.Attachment._C)
};
_g.Attachment.a = function(n) {
	return _a.m.c(_g.Attachment, n)
};
_g.Attachment._C = function(n) {
	return new _g.Attachment(n)
};
_g.Attachment.prototype = {
	t: null,
	o: !1,
	L: function() {
		!this.t && this.bH.DateTimeReceived && (this.t = _a.d.b(this.bH.DateTimeReceived));
		return this.t
	},
	N: function(n) {
		if(this.t !== n) {
			this.t = n;
			this.eH("DateTimeReceived")
		}
		return n
	},
	O: function(n) {
		if(this.bH.IsSmimeDecoded !== n) {
			this.bH.IsSmimeDecoded = n;
			this.eH("IsSmimeDecoded")
		}
		return n
	},
	z: !1,
	q: function(n) {
		if(this.bH.TemporaryId !== n) {
			this.bH.TemporaryId = n;
			this.eH("TemporaryId")
		}
		return n
	},
	u: !1,
	p: function() {
		var n = this.bH.AttachmentId || this.bH.TemporaryId;
		return !!n && !!n.Id && n.Id.startsWith("smime-")
	},
	M: function(n) {
		var t;
		t = this.bH.Name === "smime.p7m" || !!this.bH.Name && this.bH.Name.endsWith(".p7m") && !!this.bH.ContentType && (this.bH.ContentType.startsWith("application/x-pkcs7-mime") || this.bH.ContentType.startsWith("application/pkcs7-mime")) || _a.p.g() && n === "IPM.Note.SMIME.MultipartSigned";
		this.o = t
	},
	s: function() {
		throw Error.invalidOperation("This should be overridden in derived classes.");
	},
	v: function() {
		var n = this.w();
		n.ContentId = this.bH.ContentId;
		n.ContentLocation = this.bH.ContentLocation;
		n.ContentType = this.bH.ContentType;
		n.IsInline = this.a();
		n.Name = this.bH.Name;
		n.Size = this.b();
		n.AttachmentId = this.bH.AttachmentId;
		return n
	},
	w: function() {
		throw Error.invalidOperation("This should be overridden in derived classed.");
	},
	g: function(n) {
		this.bI("AttachmentId", n);
		return n
	},
	e: function(n) {
		this.bI("Name", n);
		return n
	},
	j: function(n) {
		this.bI("ContentType", n);
		return n
	},
	m: function(n) {
		this.bI("ContentId", n);
		return n
	},
	H: function(n) {
		this.bI("AttachmentOriginalUrl", n);
		return n
	},
	b: function() {
		return this.bH.Size || 0
	},
	f: function(n) {
		this.bI("Size", n);
		return n
	},
	n: function() {
		return this.bW("LastModifiedTime")
	},
	a: function() {
		return this.bH.IsInline ? !0 : !1
	},
	h: function(n) {
		this.bI("IsInline", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.x(n)
	},
	x: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["LastModifiedTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.y = function(n) {
	this.h = Function.createDelegate(this, this.m);
	_g.y.initializeBase(this);
	n || (n = new _g.s);
	this.d(n);
	_a.s.a(this, "_Body")
};
_g.y.$$cctor = function() {
	_a.m.a(_g.y, _g.s, _g.y._C)
};
_g.y._C = function(n) {
	return new _g.y(n)
};
_g.y.prototype = {
	g: !1,
	fr: function() {
		return this.g
	},
	fH: function() {
		this.g = !1
	},
	_Body: function() {
		this.J(this.h)
	},
	m: function(n, t) {
		this.g = !0
	},
	a: function() {
		return this.bQ("BodyType", "Text")
	},
	c: function(n) {
		this.bI("BodyType", n);
		return n
	},
	b: function(n) {
		this.bI("Value", n);
		return n
	},
	n: function(n) {
		this.bI("IsTruncated", n);
		return n
	},
	f: function() {
		return this.bH.DataUriCount || 0
	},
	l: function(n) {
		this.bI("DataUriCount", n);
		return n
	},
	e: function() {
		return this.bH.CustomDataUriCount || 0
	},
	j: function(n) {
		this.bI("CustomDataUriCount", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.o(n)
	},
	o: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["BodyFragmentInformation"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bF = function(n) {
	_g.bF.initializeBase(this);
	n || (n = new _g.cH);
	this.d(n);
	_a.s.a(this, "_Flag")
};
_g.bF.$$cctor = function() {
	_a.m.a(_g.bF, _g.cH, _g.bF._C)
};
_g.bF.a = function(n, t) {
	var i = new _g.bF;
	var r = _a.d.a();
	switch(n) {
		case "ClearFlag":
			i.f("NotFlagged");
			break;
		case "MarkComplete":
			i.f("Complete");
			i.l(r);
			break;
		case "Today":
			i.f("Flagged");
			i.h(r);
			i.g(i.c());
			break;
		case "Tomorrow":
			i.f("Flagged");
			i.h(r.c(1));
			i.g(i.c());
			break;
		case "ThisWeek":
			i.f("Flagged");
			i.n(t);
			break;
		case "NextWeek":
			i.f("Flagged");
			i.m(t);
			break;
		case "SpecificDate":
		case "DateAndReminder":
		case "NoDate":
			i.f("Flagged");
			break
	}
	return i
};
_g.bF.b = function(n, t) {
	var i;
	var u = _a.H.j(n, t.bH.WeekStartDay);
	var f = 7 - u;
	i = n.c(f);
	for(var r = 0; r < 7 && !_a.H.h(i, t.w().bH.WorkDays); ++r) i = i.c(1);
	return i
};
_g.bF._C = function(n) {
	return new _g.bF(n)
};
_g.bF.prototype = {
	j: function() {
		var n = new _g.cH;
		n.FlagStatus = this.a();
		n.StartDate = this.c() ? this.c().i() : null;
		n.DueDate = this.b() ? this.b().i() : null;
		n.CompleteDate = this.e() ? this.e().i() : null;
		return n
	},
	n: function(n) {
		var t;
		var i;
		var u = _a.d.a();
		var e = _a.H.j(u, n.bH.WeekStartDay);
		var r = 7 - e;
		var f = 2;
		0 < r && r <= 2 && (f = r - 1);
		t = u.c(f);
		while(u.a(t) < 0 && !_a.H.h(t, n.w().bH.WorkDays)) t = t.c(-1);
		i = u.c(r - 1);
		while(t.a(i) < 0 && !_a.H.h(i, n.w().bH.WorkDays)) i = i.c(-1);
		this.h(t);
		this.g(i)
	},
	m: function(n) {
		var i = _g.bF.b(_a.d.a(), n);
		var r = 7 - _a.H.j(i, n.bH.WeekStartDay);
		r === 7 && (r = 6);
		for(var t = i.c(r); i.a(t) < 0 && !_a.H.h(t, n.w().bH.WorkDays);) t = t.c(-1);
		this.h(i);
		this.g(t)
	},
	a: function() {
		return this.bQ("FlagStatus", "NotFlagged")
	},
	f: function(n) {
		this.bI("FlagStatus", n);
		return n
	},
	c: function() {
		return this.bW("StartDate")
	},
	h: function(n) {
		this.co("StartDate", n);
		return n
	},
	b: function() {
		return this.bW("DueDate")
	},
	g: function(n) {
		this.co("DueDate", n);
		return n
	},
	e: function() {
		return this.bW("CompleteDate")
	},
	l: function(n) {
		this.co("CompleteDate", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.o(n)
	},
	o: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["StartDate", "DueDate", "CompleteDate"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ce = function(n) {
	_g.ce.initializeBase(this);
	n || (n = new _g.cX);
	this.d(n);
	_a.s.a(this, "_HighlightTerm")
};
_g.ce.$$cctor = function() {
	_a.m.a(_g.ce, _g.cX, _g.ce._C)
};
_g.ce.a = function(n, t) {
	var u = 0;
	var f = 0;
	var i = n;
	var r = t;
	i && i.bH.Value && (u = i.bH.Value.length);
	r && r.bH.Value && (f = r.bH.Value.length);
	return f - u
};
_g.ce._C = function(n) {
	return new _g.ce(n)
};
_g.ce.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bG = function() {};
_g.f = function(n) {
	this.cq = new _a.k;
	this.u = this.o;
	this.C = this.cb;
	this.V = this.S;
	this.s = this.G;
	_g.f.initializeBase(this);
	n || (n = new _g.M);
	this.d(n);
	_a.s.a(this, "_Item")
};
_g.f.$$cctor = function() {
	_a.m.b(_g.f, _g.M, _g.f._C, "Item:#Exchange")
};
_g.f.E = function() {
	if(!_g.f.b) {
		_g.f.b = {};
		_g.f.b[_g.ResponseActions.toString(0)] = null;
		_g.f.b[_g.ResponseActions.toString(1)] = new _g.bh(new _g.cS);
		_g.f.b[_g.ResponseActions.toString(2)] = new _g.bh(new _g.dg);
		_g.f.b[_g.ResponseActions.toString(4)] = new _g.bh(new _g.cV);
		_g.f.b[_g.ResponseActions.toString(8)] = new _g.bh(new _g.bQ);
		_g.f.b[_g.ResponseActions.toString(16)] = new _g.bh(new _g.bw);
		_g.f.b[_g.ResponseActions.toString(32)] = new _g.bh(new _g.bL);
		_g.f.b[_g.ResponseActions.toString(64)] = new _g.bh(new _g.ej);
		_g.f.b[_g.ResponseActions.toString(128)] = new _g.bh(new _g.de);
		_g.f.b[_g.ResponseActions.toString(256)] = new _g.bh(new _g.gB);
		_g.f.b[_g.ResponseActions.toString(512)] = new _g.bh(new _g.eK);
		_g.f.b[_g.ResponseActions.toString(1024)] = new _g.bh(new _g.fh);
		_g.f.b[_g.ResponseActions.toString(2048)] = new _g.bh(new _g.fi);
		_g.f.b[_g.ResponseActions.toString(4096)] = new _g.bh(new _g.gt)
	}
	return _g.f.b
};
_g.f.a = function(n) {
	if(_g.f.A(n.ItemClass, !1)) return new _g.ci(n);
	else if(_g.f.v(n.ItemClass) || _g.f.w(n.ItemClass) || _g.f.J(n.ItemClass)) return _a.m.c(_g.i, n, _g.i);
	return _a.m.c(_g.f, n, _g.f)
};
_g.f.j = function(n, t) {
	if(!n && !t) return !1;
	if(!n || !t || n.b() !== t.b()) return !0;
	for(var i = 0; i < n.b(); i++) {
		if(!String.isInstanceOfType(n.a(i)) || !String.isInstanceOfType(t.a(i))) return !0;
		var u = n.a(i);
		var r = t.a(i);
		if(u !== r) return !0
	}
	return !1
};
_g.f.o = function(n) {
	var t = null;
	var i = n.ItemClass;
	i || (i = "");
	if(_g.f.v(i)) {
		t = new _g.bY;
		t.Sender = new _g.R;
		t.Sender.Mailbox = new _g.g;
		t.Sender.Mailbox.Name = n.Sender;
		t.From = t.Sender
	} else if(_g.f.w(i)) {
		t = new _g.co;
		t.Sender = new _g.R;
		t.Sender.Mailbox = new _g.g;
		t.Sender.Mailbox.Name = n.Sender;
		t.From = t.Sender
	} else if(_g.f.x(i)) {
		t = new _g.dc;
		t.Sender = new _g.R;
		t.Sender.Mailbox = new _g.g;
		t.Sender.Mailbox.Name = n.Sender;
		t.From = t.Sender
	} else if(_g.f.l(i)) t = new _g.z;
	else if(_g.f.t(i)) t = new _g.du;
	else if(_g.f.z(i)) t = new _g.bR;
	else if(_g.f.u(i)) t = new _g.dw;
	else {
		t = new _g.I;
		if(n.Sender) {
			t.Sender = new _g.R;
			t.Sender.Mailbox = new _g.g;
			t.Sender.Mailbox.Name = n.Sender;
			t.From = t.Sender
		}
	}
	t.ItemId = n.Id;
	t.ItemClass = i;
	t.DateTimeSent = n.SentTime;
	t.DateTimeReceived = n.ReceivedTime;
	t.HasAttachments = n.HasAttachment;
	t.Importance = n.Importance;
	t.Preview = n.Preview;
	t.Subject = n.Subject;
	t.Size = n.Size;
	return _g.f.a(t)
};
_g.f.I = function(n) {
	return n === "IPM.CoOrganizer.Request"
};
_g.f.x = function(n) {
	return n.startsWith("IPM.Post") ? !0 : !1
};
_g.f.r = function(n) {
	return n.bH.ItemClass === "IPM.Sharing"
};
_g.f.H = function(n) {
	return _g.f.I(n.bH.ItemClass)
};
_g.f.f = function(n) {
	return n.bH.ItemClass === "IPM.GroupMailbox.JoinRequest"
};
_g.f.h = function(n) {
	return n.bH.ItemClass === "IPM.GroupMailbox.AddMemberRequest"
};
_g.f.s = function(n) {
	return _j.h.a(n) ? !1 : n.startsWith("IPM.Note.ConnectorMessage")
};
_g.f.q = function(n) {
	return n === "IPM.Note.ConnectorMessage.Bot"
};
_g.f.k = function(n) {
	var t = _g.b.a;
	switch(n) {
		case 2:
			return t.nameToId("calendar");
		case 3:
		case 6:
			return t.nameToId("contacts");
		case 1:
		case 5:
			return t.nameToId("inbox");
		case 4:
			return t.nameToId("tasks");
		default:
			return t.nameToId("inbox")
	}
};
_g.f.F = function(n) {
	return _g.f.z(n) ? 4 : _g.f.x(n) ? 5 : _g.f.l(n) ? 2 : _g.f.t(n) ? 3 : _g.f.u(n) ? 6 : 1
};
_g.f.A = function(n, t) {
	if(_g.a.a().c().bH.IsUMEnabled || t) switch(n) {
		case "IPM.Note.Microsoft.Missed.Voice":
		case "IPM.Note.Microsoft.Fax.CA":
			return !0;
		default:
			return _g.f.B(n)
	} else return !1
};
_g.f.B = function(n) {
	switch(n) {
		case "IPM.Note.Microsoft.Voicemail.UM.CA":
		case "IPM.Note.Microsoft.Voicemail.UM":
		case "IPM.Note.Microsoft.Voicemail":
			return !0;
		default:
			return _g.f.m(n)
	}
};
_g.f.G = function(n) {
	return n && n.toLowerCase().startsWith("ipm.note.microsoft.approval.request") ? !0 : !1
};
_g.f.m = function(n) {
	switch(n) {
		case "IPM.Note.rpmsg.Microsoft.Voicemail.UM.CA":
		case "IPM.Note.rpmsg.Microsoft.Voicemail.UM":
			return !0;
		default:
			return !1
	}
};
_g.f.p = function(n) {
	return n && n.toLowerCase().startsWith("IPM.Note.Reminder.Event.Booking".toLowerCase()) ? !0 : !1
};
_g.f.y = function(n) {
	return n && n.toLowerCase().startsWith("IPM.Note.Reminder.Event.2".toLowerCase()) ? !0 : !1
};
_g.f.d = function(n) {
	var t = n.ej();
	if(0 === t) {
		var i = _g.bx.isInstanceOfType(n) ? n.f() : n.X();
		t = i && i.a() === "Text" ? 1 : 3
	}
	return t
};
_g.f.g = function(n) {
	n = n.o();
	return _a.d.h(n, _g.f.c) || n.a(_g.f.i) >= 0 && n.a(_g.f.D) <= 0
};
_g.f.e = function(n) {
	var i = n;
	if(n.gd) {
		var t = _a.m.m(n.bH.__type);
		t && Object.getType(n) !== t && (i = _a.m.c(_g.f, n.iL(), _g.f))
	}
	return i
};
_g.f.l = function(n) {
	return !!n && n.startsWith("IPM.Appointment")
};
_g.f.v = function(n) {
	return !!n && n.startsWith(_g.f.n)
};
_g.f.w = function(n) {
	return !!n && n.startsWith("IPM.Schedule.Meeting.Resp")
};
_g.f.J = function(n) {
	return !!n && n.startsWith("IPM.Schedule.Meeting.Canceled")
};
_g.f.t = function(n) {
	return n.startsWith("IPM.Contact")
};
_g.f.z = function(n) {
	return n.startsWith("IPM.Task")
};
_g.f.u = function(n) {
	return n.startsWith("IPM.DistList")
};
_g.f.C = function(n, t) {
	var i = n;
	i.hj()
};
_g.f._C = function(n) {
	return new _g.f(n)
};
_g.f.prototype = {
	dh: !1,
	cP: null,
	fz: null,
	dH: 0,
	fy: !1,
	fU: function(n) {
		this.cP !== n && (this.cP = n);
		return n
	},
	eF: function() {
		return this.bi() ? this.bi().f : null
	},
	fs: function() {
		return this.bZ().DocumentId
	},
	hD: function(n) {
		if(this.bZ().DocumentId !== n) {
			this.bZ().DocumentId = n;
			this.eH("DocumentId")
		}
		return n
	},
	df: function() {
		return this.bZ().NormalizedSubject || null
	},
	hM: function(n) {
		if(this.bZ().NormalizedSubject !== n) {
			this.bZ().NormalizedSubject = n;
			this.eH("NormalizedSubject")
		}
		return n
	},
	hl: function() {
		return this.bH.MentionedMe || this.bH.AtAllMention
	},
	p: function() {
		return this.bH.ItemId.Id
	},
	bU: function() {
		return this.bZ().ItemCategory
	},
	en: function(n) {
		this.bZ().ItemCategory = n;
		return n
	},
	ei: function() {
		return this.bZ().IsClassified ? !0 : !1
	},
	fV: function(n) {
		if(this.bZ().IsClassified !== n) {
			this.bZ().IsClassified = n;
			this.eH("IsClassified")
		}
		return n
	},
	fq: function() {
		return this.bZ().ClassificationGuid || null
	},
	fT: function(n) {
		if(this.bZ().ClassificationGuid !== n) {
			this.bZ().ClassificationGuid = n;
			this.eH("ClassificationGuid")
		}
		return n
	},
	dS: function() {
		return this.bZ().DlpSenderOverride
	},
	hC: function(n) {
		if(this.dS() !== n) {
			this.bZ().DlpSenderOverride = n;
			this.eH("DlpSenderOverride")
		}
		return n
	},
	dI: function() {
		return this.bZ().DlpFalsePositive
	},
	hB: function(n) {
		if(this.dI() !== n) {
			this.bZ().DlpFalsePositive = n;
			this.eH("DlpFalsePositive")
		}
		return n
	},
	eh: function() {
		return this.bZ().DlpDetectedClassification
	},
	hA: function(n) {
		if(this.eh() !== n) {
			this.bZ().DlpDetectedClassification = n;
			this.eH("DlpDetectedClassification")
		}
		return n
	},
	fn: function() {
		return this.bZ().Classification || null
	},
	fQ: function(n) {
		if(this.bZ().Classification !== n) {
			this.bZ().Classification = n;
			this.eH("Classification")
		}
		return n
	},
	fp: function() {
		return this.bZ().ClassificationDescription || null
	},
	fR: function(n) {
		if(this.bZ().ClassificationDescription !== n) {
			this.bZ().ClassificationDescription = n;
			this.eH("ClassificationDescription")
		}
		return n
	},
	iS: function() {
		return this.bZ().ClassificationKeep ? !0 : !1
	},
	gF: function(n) {
		if(this.bZ().ClassificationKeep !== n) {
			this.bZ().ClassificationKeep = n;
			this.eH("ClassificationKeep")
		}
		return n
	},
	iW: function() {
		return !!this.bT() && this.bT().b() > 0 || this.iX()
	},
	iX: function() {
		if(!this.cE()) return !1;
		for(var t = this.cE().e(), n = 0; n < t.length; n++) {
			var i = _g.A.d(t[n]);
			if(i) return !0
		}
		return !1
	},
	jb: function() {
		return this.bZ().MessageBccMe ? !0 : !1
	},
	hL: function(n) {
		if(this.bZ().MessageBccMe !== n) {
			this.bZ().MessageBccMe = n;
			this.eH("MessageBccMe")
		}
		return n
	},
	jd: function() {
		return this.bZ().SharingInstanceGuid ? this.bZ().SharingInstanceGuid : null
	},
	hQ: function(n) {
		if(this.bZ().SharingInstanceGuid !== n) {
			this.bZ().SharingInstanceGuid = n;
			this.eH("SharingInstanceGuid")
		}
		return n
	},
	ej: function() {
		return this.bZ().NativeBodyInfo === undefined ? 0 : this.bZ().NativeBodyInfo
	},
	gK: function(n) {
		if(this.bZ().NativeBodyInfo !== n) {
			this.bZ().NativeBodyInfo = n;
			this.eH("NativeBodyInfo")
		}
		return n
	},
	fv: function() {
		return this.bZ().IsEmbeddedAttachmentItem
	},
	gJ: function(n) {
		this.bZ().IsEmbeddedAttachmentItem = n;
		return n
	},
	w: function() {
		return this.fy
	},
	hI: function(n) {
		this.fy = n;
		this.eH("IsPinned");
		return n
	},
	iZ: function() {
		return !!this.dK() && _g.f.g(this.dK())
	},
	gB: !1,
	bZ: function() {
		return this.fj()
	},
	o: function() {
		return this.bH.ItemId.Id
	},
	r: function() {
		return this.cr()
	},
	bd: function() {
		return this.dK()
	},
	be: function() {
		return this.bH.DateTimeReceived
	},
	M: function() {
		return this.bX() ? this.bX().a() : "NotFlagged"
	},
	bf: function() {
		return 1
	},
	j: function() {
		return !this.cJ()
	},
	W: function() {
		return this.bH.ItemId
	},
	bD: function() {
		return this.df() || this.bH.Subject || ""
	},
	bB: function() {
		return this.bH.Preview || ""
	},
	fx: function(n) {
		return !!this.cE() && this.cE().j(n)
	},
	_Item: function() {
		_g.f.l(this.bH.ItemClass) ? this.en(2) : this.en(0);
		_j.u.a(this.bH.Importance) && (this.bH.Importance = "Normal");
		this.apcl("ExtendedProperty", _g.f.C);
		this.hj();
		this.gA()
	},
	bE: function() {
		return _g.f.k(this.bU())
	},
	U: function() {
		return this.fz
	},
	bF: function(n) {
		this.fz = n;
		return n
	},
	bh: function(n) {
		this.dH = n;
		this.eH("ExtractedActionState");
		return n
	},
	dj: function() {
		return !1
	},
	cJ: function() {
		return !0
	},
	hp: function() {
		return null
	},
	hq: function() {
		return 0
	},
	iV: function() {
		return _g.b.a.idToName(this.bH.ParentFolderId) === "sentitems" ? this.cI() : this.cr()
	},
	iU: function() {
		return this.bH.DateTimeReceived
	},
	eB: function() {
		return !!this.bY()
	},
	ja: function() {
		if(this.bV()) {
			var n = _g.c.a(this.bV().e(), _g.c.bw());
			if(n) return n.e()
		}
		return null
	},
	fJ: function() {
		return this.eD(_g.c.q(), !1)
	},
	hx: function(n) {
		this.eN(_g.c.q(), "EntityExtraction/Highlights", n);
		return n
	},
	ey: function() {
		return this.eD(_g.c.bh(), !1)
	},
	hy: function(n) {
		this.eN(_g.c.bh(), "EntityExtraction/Highlights_Delayed", n);
		return n
	},
	fL: function() {
		return this.eD(_g.c.bj(), !1)
	},
	jj: function(n) {
		this.eN(_g.c.bj(), "EntityExtraction/HighlightsTypes", n);
		return n
	},
	fK: function() {
		return this.eD(_g.c.bi(), !1)
	},
	jh: function(n) {
		this.eN(_g.c.bi(), "EntityExtraction/HighlightsTypes_Delayed", n);
		return n
	},
	eC: function() {
		return this.eD(_g.c.bp(), !1)
	},
	jA: function(n) {
		this.eN(_g.c.bp(), "EntityExtraction/SmartReplyForEmail", n);
		return n
	},
	gz: function() {
		return this.eD(_g.c.bo(), !1)
	},
	jy: function(n) {
		this.eN(_g.c.bo(), "EntityExtraction/ReplyWithQueryCoverage", n);
		return n
	},
	cb: function(n) {
		if(_j.E.a(n) || !_g.f.isInstanceOfType(n)) return !1;
		if(!this.bH.ItemId || !n.bH.ItemId) throw Error.invalidOperation("ItemModel not in a valid state.");
		return _ff.e.b(this.bH.ItemId, n.bH.ItemId)
	},
	N: function(n) {
		return this.cb(n) && this.bH.InstanceKey === n.bH.InstanceKey
	},
	cX: function(n) {
		return this.hs(n) >= 0
	},
	dD: function(n) {
		if(!this.cX(n)) {
			var t = _g.f.E()[_g.ResponseActions.toString(n)];
			this.dT() || this.gM(new(_a.fT.$$(_g.bh, _g.bo)));
			this.dT().c(t);
			this.eH("ResponseObjects")
		}
	},
	jg: function(n) {
		if(this.cX(n)) {
			var t = this.hs(n);
			this.dT().o(t);
			this.eH("ResponseObjects")
		}
	},
	du: function(n) {
		this.hk(n);
		this.db(n.ParentFolderId);
		this.hz(n.ConversationId);
		this.cg(["DateTimeReceived", "DateTimeCreated", "DateTimeSent", "LastModifiedTime"], n, null);
		var t = n.ReceivedOrRenewTime || n.DateTimeReceived;
		if(this.iN("ReceivedOrRenewTime", t)) {
			this.eH("ReceivedOrRenewTime");
			this.hV()
		}
		this.gI(n.IsDraft);
		this.hR(n.Size);
		this.hH(n.IsClutter);
		this.hN(n.Preview);
		this.fO() < n.TailoredXpEntitiesChangeNumber && this.hT(n.TailoredXpEntitiesChangeNumber);
		var r = this;
		this.bN(function(n) {
			return new _g.bp(n)
		}, ["PolicyTag", "ArchiveTag"], n, null);
		this.jm(n.DisplayTo);
		n = this.hv(n);
		var i = this;
		this.bN(function(n) {
			return new(_a.fT.$$(_g.be, _g.T))(n)
		}, ["ExtendedProperty"], n, null);
		this.hF(n.IconIndex)
	},
	ea: function(n, t) {
		switch(n) {
			case "Flag":
				var f = this;
				this.eg(function(n) {
					return new _g.bF(n)
				}, "Flag", t);
				this.eH("Flag");
				break;
			case "Categories":
				var e = this;
				this.eg(function(n) {
					return new _a.k(n)
				}, "Categories", t);
				this.eH("Categories");
				break;
			case "SystemCategories":
				var o = this;
				this.eg(function(n) {
					return new _a.k(n)
				}, "SystemCategories", t);
				this.eH("SystemCategories");
				break;
			case "PolicyTag":
				var i = this;
				this.eg(function(n) {
					return new _g.bp(n)
				}, "PolicyTag", t);
				this.eH("PolicyTag");
				break;
			case "ArchiveTag":
				var r = this;
				this.eg(function(n) {
					return new _g.bp(n)
				}, "ArchiveTag", t);
				this.eH("ArchiveTag");
				break;
			case "PredictedActionReasons":
				var u = this;
				this.eg(function(n) {
					return new _a.k(n)
				}, "PredictedActionReasons", t);
				this.eH("PredictedActionReasons");
				break;
			default:
				break
		}
	},
	dV: function(n) {
		this.cc(n.ItemId);
		this.fW(n.ItemClass);
		this.db(n.ParentFolderId);
		this.cg(["LastModifiedTime", "DateTimeReceived"], n, null);
		var u = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["Categories"], n, null);
		var f = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["SystemCategories"], n, null);
		var r = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["Hashtags"], n, null);
		var t = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["PredictedActionReasons"], n, null);
		var i = this;
		this.bN(function(n) {
			return new _g.bF(n)
		}, ["Flag"], n, null);
		this.hR(n.Size);
		this.hH(n.IsClutter);
		this.hF(n.IconIndex);
		n = this.hv(n)
	},
	dW: function(n) {
		this.hk(n)
	},
	hj: function() {
		if(this.bV())
			for(var n = 0, i = this.bV().b(); n < i; n++) {
				var t = this.bV().a(n);
				this.eo(t)
			}
	},
	by: function(n) {
		var t = n;
		this.hM(t.NormalizedSubject);
		this.fV(t.IsClassified);
		this.fT(t.ClassificationGuid);
		this.fQ(t.Classification);
		this.fR(t.ClassificationDescription);
		this.gF(t.ClassificationKeep);
		this.hL(t.MessageBccMe);
		this.hQ(t.SharingInstanceGuid);
		this.gK(t.NativeBodyInfo);
		this.hD(t.DocumentId)
	},
	eo: function(n) {
		if(n) {
			var i = n.a();
			var u = i.bH.PropertyTag;
			var r = i.c();
			var o = i.bH.PropertyName;
			var e = i.bH.PropertySetId;
			var f = i.a();
			i.dispose();
			var t = n.bH.Value === undefined ? "" : n.bH.Value;
			u === "0x3fd9" ? this.hN(t) : u === "0xe1d" ? this.hM(t) : u === _g.c.bm().PropertyTag ? this.gK(_j.u.b(_g.kn, t)) : u === "0x6815" ? this.hD(Number.parseInvariant(t)) : "Common" === f ? r === _g.c.S().PropertyId ? this.fV(Boolean.parse(t)) : r === _g.c.O().PropertyId ? this.fT(t) : r === _g.c.M().PropertyId ? this.fQ(t) : r === _g.c.N().PropertyId ? this.fR(t) : r === _g.c.bz().PropertyId && this.gF(Boolean.parse(t)) : "Sharing" === f ? r === _g.c.w().PropertyId && this.hQ(t) : e && "41F28F13-83F4-4114-A584-EEDB5A6B0BFF" === e.toUpperCase() && o === _g.c.bG().PropertyName && this.hL(Boolean.parse(t))
		}
	},
	jf: function(n) {
		var t = this;
		this.eg(function(n) {
			return new(_a.fT.$$(_g.be, _g.T))(n)
		}, "ExtendedProperty", n) && this.eH("ExtendedProperty")
	},
	eJ: function() {
		this.rpcl("ExtendedProperty", _g.f.C);
		_a.gd.prototype.eJ.call(this)
	},
	fk: function(n) {
		var t = n;
		!t.PredictedActionReasons && this.fN() && (t.PredictedActionReasons = this.fN().e());
		t.ReceivedOrRenewTime || (t.ReceivedOrRenewTime = t.DateTimeReceived);
		_g.K.prototype.fk.call(this, n)
	},
	dP: function() {
		this.hV();
		this.gA();
		_g.K.prototype.dP.call(this)
	},
	hs: function(n) {
		if(this.dT())
			for(var t = 0; t < this.dT().b(); t++)
				if(this.dT().a(t).B().__type.toLowerCase() === (_g.ResponseActions.toString(n) + ":#Exchange").toLowerCase()) return t;
		return -1
	},
	hk: function(n) {
		this.cc(n.ItemId);
		this.dX(n.InstanceKey);
		this.cW(n.Subject);
		this.em(n.Importance);
		this.dZ(n.Sensitivity);
		this.el(n.HasAttachments);
		this.fW(n.ItemClass);
		var r = this;
		this.bN(function(n) {
			return new _g.bF(n)
		}, ["Flag"], n, null);
		var u = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["Categories"], n, null);
		var t = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["SystemCategories"], n, null);
		var i = this;
		this.bN(function(n) {
			return new _a.k(n)
		}, ["PredictedActionReasons"], n, null)
	},
	hV: function() {
		this.hI(this.iZ())
	},
	eD: function(n, t) {
		if(this.bV()) {
			var i = _g.c.a(this.bV().e(), n);
			if(i) return t ? i.e() : i.bH.Value
		}
		return null
	},
	iO: function(n) {
		for(var i = n, u = i.length, t = 0; t < u; ++t) {
			var r = i[t];
			if(this.ht(r)) return !0
		}
		return !1
	},
	iP: function(n) {
		for(var i = n, u = i.length, t = 0; t < u; ++t) {
			var r = i[t];
			if(this.hu(r)) return !0
		}
		return !1
	},
	hv: function(n) {
		if(n && n.ExtendedProperty) {
			var o = this.bH.ExtendedProperty;
			var t = n.ExtendedProperty;
			if(o && t) {
				var e = this.iO(t);
				var u = this.iP(t);
				if(!e || !u)
					for(var f = o, s = f.length, r = 0; r < s; ++r) {
						var i = f[r];
						if(this.ht(i) && !e) {
							t = t.concat(i);
							n.ExtendedProperty = t
						}
						if(this.hu(i) && !u) {
							t = t.concat(i);
							n.ExtendedProperty = t
						}
					}
			}
		}
		return n
	},
	ht: function(n) {
		return !!n.ExtendedFieldURI && n.ExtendedFieldURI.PropertyName === "ExplicitMessageCard" && n.ExtendedFieldURI.DistinguishedPropertySetId === "Common" && n.ExtendedFieldURI.PropertyType === "String"
	},
	hu: function(n) {
		return !!n.ExtendedFieldURI && n.ExtendedFieldURI.PropertyName === "ShowContextualSuggestion" && n.ExtendedFieldURI.DistinguishedPropertySetId === "Common" && n.ExtendedFieldURI.PropertyType === "Boolean"
	},
	iQ: function(n) {
		var t = new _g.be;
		var i = _g.c.b(n, "Common", "String");
		t.c(new _g.bV(i));
		return t
	},
	eN: function(n, t, i) {
		if(this.bV()) {
			var u = _g.c.a(this.bV().e(), n);
			if(u) u.b(i);
			else {
				var r = this.iQ(t);
				r.b(i);
				this.bV().c(r)
			}
		}
	},
	fY: null,
	fX: null,
	bC: function() {
		this.bA() && !this.bZ().SmimeType && (this.bZ().SmimeType = this.cZ() ? 11 : -1);
		return this.bZ().SmimeType
	},
	jB: function(n) {
		if(this.bZ().SmimeType !== n) {
			this.bZ().SmimeType = n;
			this.eH("SmimeType")
		}
		return n
	},
	cR: function() {
		return this.bZ().IsSmimeDecoded || !1
	},
	cS: function() {
		!this.fY && this.bZ().SmimeNormalizedBody && (this.fY = new _g.y(this.bZ().SmimeNormalizedBody));
		return this.fY
	},
	dq: function() {
		!this.fX && this.bZ().SmimeAttachments && (this.fX = new(_a.fT.$$(_g.Attachment, _g.bq))(this.bZ().SmimeAttachments));
		return this.fX
	},
	cF: function() {
		return this.bZ().SmimeSignature
	},
	jc: function() {
		return this.bZ().RawDate
	},
	bA: function() {
		return _a.p.s(this.bH.ItemClass)
	},
	hn: function() {
		return _a.p.K(this.bH.ItemClass)
	},
	cZ: function() {
		return _a.p.G(this.bH.ItemClass)
	},
	gy: function() {
		return _a.p.s(this.bH.ItemClass) && !this.eA() && !_a.p.g()
	},
	eA: function() {
		return this.bi() && this.bi().b() > 0 ? this.bi().a(0).o : !1
	},
	je: function() {
		return this.cF().ServerVerificationResult
	},
	hm: function() {
		return this.cF() ? this.cF().IsHashMatched && this.cF().IsCertValidToServer : !1
	},
	gA: function() {
		this.bA() && this.bi() && this.bi().b() === 1 && this.bi().a(0).M(this.bH.ItemClass)
	},
	ju: function(n) {
		this.bI("MimeContent", n);
		return n
	},
	jF: function() {
		return this.bH.ItemId
	},
	cc: function(n) {
		this.bI("ItemId", n);
		return n
	},
	jG: function() {
		return this.bH.ParentFolderId
	},
	db: function(n) {
		this.bI("ParentFolderId", n);
		return n
	},
	fW: function(n) {
		this.bI("ItemClass", n);
		return n
	},
	jH: function() {
		return this.bH.Subject
	},
	cW: function(n) {
		this.bI("Subject", n);
		return n
	},
	cp: function() {
		return this.bQ("Sensitivity", "Normal")
	},
	dZ: function(n) {
		this.bI("Sensitivity", n);
		return n
	},
	X: function() {
		return this.bS(_g.y, "Body")
	},
	da: function(n) {
		this.bO("Body", n);
		return n
	},
	bi: function() {
		return this.ca(_g.Attachment, _g.bq, "Attachments")
	},
	bp: function(n) {
		this.bO("Attachments", n);
		return n
	},
	cr: function() {
		return this.bW("DateTimeReceived")
	},
	hR: function(n) {
		this.bI("Size", n);
		return n
	},
	bT: function() {
		return this.bP(String, "Categories")
	},
	di: function(n) {
		this.bO("Categories", n);
		return n
	},
	cx: function() {
		return this.bP(String, "Hashtags")
	},
	jr: function(n) {
		this.bO("Hashtags", n);
		return n
	},
	bg: function() {
		return this.bQ("Importance", "Low")
	},
	em: function(n) {
		this.bI("Importance", n);
		return n
	},
	hG: function(n) {
		this.bI("InReplyTo", n);
		return n
	},
	hJ: function(n) {
		this.bI("IsSubmitted", n);
		return n
	},
	gI: function(n) {
		this.bI("IsDraft", n);
		return n
	},
	jt: function(n) {
		this.bI("IsFromMe", n);
		return n
	},
	js: function(n) {
		this.bO("InternetMessageHeaders", n);
		return n
	},
	cI: function() {
		return this.bW("DateTimeSent")
	},
	jl: function(n) {
		this.co("DateTimeSent", n);
		return n
	},
	dR: function() {
		return this.bW("DateTimeCreated")
	},
	dT: function() {
		return this.ca(_g.bh, _g.bo, "ResponseObjects")
	},
	gM: function(n) {
		this.bO("ResponseObjects", n);
		return n
	},
	fw: function() {
		return this.bW("ReminderDueBy")
	},
	jx: function(n) {
		this.co("ReminderDueBy", n);
		return n
	},
	dY: function(n) {
		this.bI("ReminderIsSet", n);
		return n
	},
	hP: function(n) {
		this.bI("ReminderMinutesBeforeStart", n);
		return n
	},
	jm: function(n) {
		this.bI("DisplayTo", n);
		return n
	},
	bz: function() {
		return this.bH.HasAttachments
	},
	el: function(n) {
		this.bI("HasAttachments", n);
		return n
	},
	bV: function() {
		return this.ca(_g.be, _g.T, "ExtendedProperty")
	},
	gG: function(n) {
		this.bO("ExtendedProperty", n);
		return n
	},
	jo: function(n) {
		this.bI("EffectiveRights", n);
		return n
	},
	S: function() {
		return this.bW("LastModifiedTime")
	},
	hz: function(n) {
		this.bI("ConversationId", n);
		return n
	},
	cf: function() {
		return this.bS(_g.y, "UniqueBody")
	},
	bX: function() {
		return this.bS(_g.bF, "Flag")
	},
	hE: function(n) {
		this.bO("Flag", n);
		return n
	},
	G: function() {
		return this.bH.InstanceKey
	},
	dX: function(n) {
		this.bI("InstanceKey", n);
		return n
	},
	cj: function() {
		return this.bS(_g.y, "NormalizedBody")
	},
	jq: function(n) {
		this.bI("EntityExtractionResult", n);
		return n
	},
	cs: function() {
		return this.bS(_g.bp, "PolicyTag")
	},
	gL: function(n) {
		this.bO("PolicyTag", n);
		return n
	},
	cC: function() {
		return this.bS(_g.bp, "ArchiveTag")
	},
	gD: function(n) {
		this.bO("ArchiveTag", n);
		return n
	},
	dU: function() {
		return this.bW("RetentionDate")
	},
	hN: function(n) {
		this.bI("Preview", n);
		return n
	},
	bY: function() {
		return this.bS(_g.ct, "RightsManagementLicenseData")
	},
	jz: function(n) {
		this.bO("RightsManagementLicenseData", n);
		return n
	},
	fN: function() {
		return this.bP(_g.jq, "PredictedActionReasons")
	},
	hH: function(n) {
		this.bI("IsClutter", n);
		return n
	},
	fA: function(n) {
		this.bI("BlockStatus", n);
		return n
	},
	gH: function(n) {
		this.bI("HasBlockedImages", n);
		return n
	},
	fP: function() {
		return this.bS(_g.y, "TextBody")
	},
	jE: function(n) {
		this.bO("TextBody", n);
		return n
	},
	iT: function() {
		return this.bH.ContainsOnlyMandatoryProperties ? !0 : !1
	},
	iY: function() {
		return this.bQ("IconIndex", "PostItem")
	},
	hF: function(n) {
		this.bI("IconIndex", n);
		return n
	},
	ft: function() {
		return this.bP(_g.hp, "ErrorProperties")
	},
	ez: function() {
		return this.bS(_g.p, "Conversation")
	},
	jk: function(n) {
		this.bO("Conversation", n);
		return n
	},
	dK: function() {
		return this.bW("ReceivedOrRenewTime")
	},
	jw: function(n) {
		this.co("ReceivedOrRenewTime", n);
		return n
	},
	cE: function() {
		return this.bP(Number, "SystemCategories")
	},
	hS: function(n) {
		this.bO("SystemCategories", n);
		return n
	},
	cl: function() {
		return this.bH.EntityNamesMap || 0
	},
	jp: function(n) {
		this.bI("EntityDocument", n);
		return n
	},
	dJ: function() {
		return this.bP(String, "PendingSocialActivityTagIds")
	},
	jv: function(n) {
		this.bO("PendingSocialActivityTagIds", n);
		return n
	},
	cD: function() {
		return this.bP(_g.cx, "MentionsEx")
	},
	hK: function(n) {
		this.bO("MentionsEx", n);
		return n
	},
	cQ: function() {
		return this.bP(_g.ed, "AppliedHashtags")
	},
	gC: function(n) {
		this.bO("AppliedHashtags", n);
		return n
	},
	dQ: function() {
		return this.bP(_g.hz, "Apps")
	},
	hw: function(n) {
		this.bO("Apps", n);
		return n
	},
	jD: function(n) {
		this.bI("TailoredXpEntities", n);
		return n
	},
	gE: function(n) {
		this.bI("AtAllMention", n);
		return n
	},
	fO: function() {
		return this.bH.TailoredXpEntitiesChangeNumber || 0
	},
	hT: function(n) {
		this.bI("TailoredXpEntitiesChangeNumber", n);
		return n
	},
	jC: function(n) {
		this.bI("SortOrderSource", n);
		return n
	},
	fM: function() {
		return this.bP(_g.er, "DocLinks")
	},
	jn: function(n) {
		this.bO("DocLinks", n);
		return n
	},
	iR: function() {
		return this.bH.CanDelete ? !0 : !1
	},
	ho: function() {
		return this.bW("LastSmartResponseTime")
	},
	dt: function() {
		return this.bP(String, "QuotedTextList")
	},
	hO: function(n) {
		this.bO("QuotedTextList", n);
		return n
	},
	ek: function() {
		return this.bP(String, "UserHighlightData")
	},
	hU: function(n) {
		this.bO("UserHighlightData", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.eQ(n)
	},
	eQ: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var w = this;
			this.bN(function(n) {
				return new _g.y(n)
			}, ["Body", "UniqueBody", "NormalizedBody", "TextBody", "FirstBody"], n, t);
			var b = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.Attachment, _g.bq))(n)
			}, ["Attachments"], n, t);
			var p = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["Categories", "Hashtags", "Actiontags", "PendingSocialActivityTagIds", "QuotedTextList", "UserHighlightData"], n, t);
			var v = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["InternetMessageHeaders"], n, t);
			var y = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.bh, _g.bo))(n)
			}, ["ResponseObjects"], n, t);
			var nt = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.be, _g.T))(n)
			}, ["ExtendedProperty"], n, t);
			var tt = this;
			this.bN(function(n) {
				return new _g.bF(n)
			}, ["Flag"], n, t);
			var g = this;
			this.bN(function(n) {
				return new _g.bp(n)
			}, ["PolicyTag", "ArchiveTag"], n, t);
			var k = this;
			this.bN(function(n) {
				return new _g.ct(n)
			}, ["RightsManagementLicenseData"], n, t);
			var d = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["PredictedActionReasons"], n, t);
			var a = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ErrorProperties"], n, t);
			var f = this;
			this.bN(function(n) {
				return new _g.p(n)
			}, ["Conversation"], n, t);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["SystemCategories"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _g.ea(n)
			}, ["Thread"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["Mentions"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["MentionsEx"], n, t);
			var c = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["AppliedHashtags"], n, t);
			var l = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["Likes"], n, t);
			var h = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["Apps"], n, t);
			var o = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["DocLinks"], n, t);
			var s = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["MessageOutlookServerId"], n, t);
			this.cg(["DateTimeReceived", "DateTimeSent", "DateTimeCreated", "ReminderDueBy", "ReminderNextTime", "LastModifiedTime", "RetentionDate", "ReceivedOrRenewTime", "RenewTime", "ReturnTime", "LastSmartResponseTime", "ExtractedCardAndActionsLastUpdatedTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.kX = function() {
	this.ItemCategory = undefined;
	this.NormalizedSubject = undefined;
	this.IsClassified = undefined;
	this.ClassificationGuid = undefined;
	this.Classification = undefined;
	this.ClassificationDescription = undefined;
	this.ClassificationKeep = undefined;
	this.MessageBccMe = undefined;
	this.SharingInstanceGuid = undefined;
	this.NativeBodyInfo = undefined;
	this.DocumentId = undefined;
	this.DlpSenderOverride = undefined;
	this.DlpFalsePositive = undefined;
	this.DlpDetectedClassification = undefined;
	this.SmimeType = undefined;
	this.IsSmimeDecoded = undefined;
	this.SmimeNormalizedBody = undefined;
	this.SmimeAttachments = undefined;
	this.SmimeSignature = undefined;
	this.RawDate = undefined;
	this.IsEmbeddedAttachmentItem = undefined;
	_g.kX.initializeBase(this)
};
_g.D = function(n) {
	_g.D.initializeBase(this, [n || new _g.dC]);
	this.bR();
	_a.s.a(this, "_ItemIdAttachment")
};
_g.D.$$cctor = function() {
	_a.m.b(_g.D, _g.dC, _g.D._C, "ItemIdAttachment:#Exchange")
};
_g.D.a = function(n) {
	var t = new _g.D;
	t.c(n.bH.ItemId);
	t.e(n.df() || n.bH.Subject || _wss.i.M);
	t.h(!1);
	t.l(!0);
	t.f(n.bH.Size);
	return t
};
_g.D._C = function(n) {
	return new _g.D(n)
};
_g.D.prototype = {
	y: function(n) {
		if(this.bH.ParentItemId !== n) {
			this.bH.ParentItemId = n;
			this.eH("ParentItemId")
		}
		return n
	},
	l: function(n) {
		if(this.bH.IsAttachmentItemAttachment !== n) {
			this.bH.IsAttachmentItemAttachment = n;
			this.eH("IsAttachmentItemAttachment")
		}
		return n
	},
	r: function(n) {
		if(this.bH.MimeContent !== n) {
			this.bH.MimeContent = n;
			this.eH("MimeContent")
		}
		return n
	},
	by: function(n) {
		var t = n;
		this.y(t.ParentItemId);
		this.l(t.IsAttachmentItemAttachment);
		this.r(t.MimeContent)
	},
	s: function() {
		return new _g.D(_ff.e.a(this.bH))
	},
	w: function() {
		var n = new _g.dC;
		n.Name = this.bH.Name;
		if(this.bH.ItemId) {
			n.ItemId = this.bH.ItemId;
			return n
		}
		if(this.bH.AttachmentIdToAttach) {
			n.AttachmentIdToAttach = this.bH.AttachmentIdToAttach;
			return n
		}
		if(this.bH.MimeContent) {
			n.MimeContent = this.bH.MimeContent;
			this.r(null);
			return n
		}
		throw Error.argument("At least one of item id or attachment id needs to be defined.");
	},
	c: function(n) {
		this.bI("ItemId", n);
		return n
	},
	A: function(n) {
		this.bI("AttachmentIdToAttach", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.C(n)
	},
	C: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.Attachment.prototype.x.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bp = function(n) {
	_g.bp.initializeBase(this);
	n || (n = new _g.bM);
	this.d(n);
	_a.s.a(this, "_RetentionTag")
};
_g.bp.$$cctor = function() {
	_a.m.a(_g.bp, _g.bM, _g.bp._C)
};
_g.bp._C = function(n) {
	return new _g.bp(n)
};
_g.bp.prototype = {
	a: function() {
		return this.e() ? this.bH.Value : null
	},
	cb: function(n) {
		return !n || Object.getType(n).getName() !== Object.getType(this).getName() ? !1 : this.bH.Value === n.bH.Value
	},
	e: function() {
		return this.bH.IsExplicit ? !0 : !1
	},
	b: function(n) {
		this.bI("IsExplicit", n);
		return n
	},
	c: function(n) {
		this.bI("Value", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.f(n)
	},
	f: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ct = function(n) {
	_g.ct.initializeBase(this);
	n || (n = new _g.dK);
	this.d(n);
	_a.s.a(this, "_RightsManagementLicenseData")
};
_g.ct.$$cctor = function() {
	_a.m.a(_g.ct, _g.dK, _g.ct._C)
};
_g.ct._C = function(n) {
	return new _g.ct(n)
};
_g.ct.prototype = {
	a: function() {
		return this.bH.RightsManagedMessageDecryptionStatus || 0
	},
	r: function(n) {
		this.bI("RightsManagedMessageDecryptionStatus", n);
		return n
	},
	s: function(n) {
		this.bI("RmsTemplateId", n);
		return n
	},
	t: function(n) {
		this.bI("TemplateName", n);
		return n
	},
	j: function(n) {
		this.bI("TemplateDescription", n);
		return n
	},
	l: function() {
		return this.bH.EditAllowed ? !0 : !1
	},
	n: function() {
		return this.bH.ReplyAllowed ? !0 : !1
	},
	e: function() {
		return this.bH.ReplyAllAllowed ? !0 : !1
	},
	f: function() {
		return this.bH.ForwardAllowed ? !0 : !1
	},
	v: function() {
		return this.bH.ModifyRecipientsAllowed ? !0 : !1
	},
	h: function() {
		return this.bH.ExtractAllowed ? !0 : !1
	},
	c: function() {
		return this.bH.PrintAllowed ? !0 : !1
	},
	m: function() {
		return this.bH.ExportAllowed ? !0 : !1
	},
	w: function() {
		return this.bH.ProgrammaticAccessAllowed ? !0 : !1
	},
	b: function() {
		return this.bH.IsOwner ? !0 : !1
	},
	q: function(n) {
		this.bI("IsOwner", n);
		return n
	},
	p: function(n) {
		this.bI("ContentOwner", n);
		return n
	},
	u: function() {
		return this.bW("ContentExpiryDate")
	},
	g: function() {
		return this.bQ("BodyType", "Text")
	},
	o: function(n) {
		this.bI("BodyType", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.x(n)
	},
	x: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["ContentExpiryDate"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.c = function() {};
_g.c.T = function() {
	if(!_g.c.u) {
		_g.c.u = new _g.O;
		_g.c.u.PropertyTag = "0x5d02";
		_g.c.u.PropertyType = "String"
	}
	return _g.c.u
};
_g.c.v = function() {
	_g.c.U || (_g.c.U = new _g.d("InstanceKey"));
	return _g.c.U
};
_g.c.bA = function() {
	_g.c.E || (_g.c.E = new _g.d("DateTimeReceived"));
	return _g.c.E
};
_g.c.bD = function() {
	_g.c.K || (_g.c.K = new _g.d("FolderDisplayName"));
	return _g.c.K
};
_g.c.S = function() {
	if(!_g.c.j) {
		_g.c.j = new _g.O;
		_g.c.j.PropertyId = 34229;
		_g.c.j.DistinguishedPropertySetId = "Common";
		_g.c.j.PropertyType = "Boolean"
	}
	return _g.c.j
};
_g.c.O = function() {
	if(!_g.c.g) {
		_g.c.g = new _g.O;
		_g.c.g.PropertyId = 34232;
		_g.c.g.DistinguishedPropertySetId = "Common";
		_g.c.g.PropertyType = "String"
	}
	return _g.c.g
};
_g.c.M = function() {
	if(!_g.c.e) {
		_g.c.e = new _g.O;
		_g.c.e.PropertyId = 34230;
		_g.c.e.DistinguishedPropertySetId = "Common";
		_g.c.e.PropertyType = "String"
	}
	return _g.c.e
};
_g.c.N = function() {
	if(!_g.c.f) {
		_g.c.f = new _g.O;
		_g.c.f.PropertyId = 34231;
		_g.c.f.DistinguishedPropertySetId = "Common";
		_g.c.f.PropertyType = "String"
	}
	return _g.c.f
};
_g.c.bz = function() {
	if(!_g.c.h) {
		_g.c.h = new _g.O;
		_g.c.h.PropertyId = 34234;
		_g.c.h.DistinguishedPropertySetId = "Common";
		_g.c.h.PropertyType = "Boolean"
	}
	return _g.c.h
};
_g.c.w = function() {
	if(!_g.c.l) {
		_g.c.l = new _g.O;
		_g.c.l.PropertyId = 35356;
		_g.c.l.DistinguishedPropertySetId = "Sharing";
		_g.c.l.PropertyType = "CLSID"
	}
	return _g.c.l
};
_g.c.bv = function() {
	_g.c.W || (_g.c.W = new _g.d("IsRead"));
	return _g.c.W
};
_g.c.bC = function() {
	_g.c.I || (_g.c.I = new _g.d("Flag"));
	return _g.c.I
};
_g.c.bG = function() {
	if(!_g.c.k) {
		_g.c.k = new _g.O;
		_g.c.k.PropertyName = "MessageBccMe";
		_g.c.k.PropertySetId = "41F28F13-83F4-4114-A584-EEDB5A6B0BFF";
		_g.c.k.PropertyType = "Boolean"
	}
	return _g.c.k
};
_g.c.bx = function() {
	if(!_g.c.t) {
		_g.c.t = new _g.O;
		_g.c.t.PropertyTag = "0xe1d";
		_g.c.t.PropertyType = "String"
	}
	return _g.c.t
};
_g.c.bu = function() {
	_g.c.L || (_g.c.L = new _g.d("FolderPolicyTag"));
	return _g.c.L
};
_g.c.bt = function() {
	_g.c.J || (_g.c.J = new _g.d("FolderArchiveTag"));
	return _g.c.J
};
_g.c.bn = function() {
	_g.c.bc || (_g.c.bc = new _g.d("PermissionSet"));
	return _g.c.bc
};
_g.c.bl = function() {
	_g.c.Y || (_g.c.Y = new _g.d("ItemPolicyTag"));
	return _g.c.Y
};
_g.c.bk = function() {
	_g.c.X || (_g.c.X = new _g.d("ItemArchiveTag"));
	return _g.c.X
};
_g.c.bF = function() {
	_g.c.ba || (_g.c.ba = new _g.d("EnhancedLocation"));
	return _g.c.ba
};
_g.c.br = function() {
	_g.c.C || (_g.c.C = new _g.d("Categories"));
	return _g.c.C
};
_g.c.by = function() {
	if(!_g.c.n) {
		_g.c.n = new _g.O;
		_g.c.n.PropertyName = "SuggestionData";
		_g.c.n.PropertySetId = "542CEFF2-DCE1-4F81-B643-77F4E3792AE9";
		_g.c.n.PropertyType = "String"
	}
	return _g.c.n
};
_g.c.i = function() {
	_g.c.x || (_g.c.x = _g.c.b("AppendOnSend", "Common", "String"));
	return _g.c.x
};
_g.c.bI = function() {
	_g.c.bf || (_g.c.bf = new _g.d("SystemCategories"));
	return _g.c.bf
};
_g.c.bm = function() {
	if(!_g.c.s) {
		_g.c.s = new _g.O;
		_g.c.s.PropertyTag = "0x1016";
		_g.c.s.PropertyType = "Integer"
	}
	return _g.c.s
};
_g.c.bE = function() {
	if(!_g.c.r) {
		_g.c.r = new _g.O;
		_g.c.r.PropertyTag = "0x1082";
		_g.c.r.PropertyType = "SystemTime"
	}
	return _g.c.r
};
_g.c.bB = function() {
	if(!_g.c.p) {
		_g.c.p = new _g.O;
		_g.c.p.PropertyTag = "0x6815";
		_g.c.p.PropertyType = "Integer"
	}
	return _g.c.p
};
_g.c.R = function() {
	_g.c.H || (_g.c.H = _g.c.b("X-Ms-Exchange-Organization-Dlp-SenderOverrideJustification", "InternetHeaders", "String"));
	return _g.c.H
};
_g.c.Q = function() {
	_g.c.G || (_g.c.G = _g.c.b("X-Ms-Exchange-Organization-Dlp-FalsePositive", "InternetHeaders", "String"));
	return _g.c.G
};
_g.c.P = function() {
	_g.c.F || (_g.c.F = _g.c.b("X-Ms-Exchange-Organization-Dlp-DetectedClassifications", "InternetHeaders", "String"));
	return _g.c.F
};
_g.c.bq = function() {
	if(!_g.c.o) {
		_g.c.o = new _g.O;
		_g.c.o.PropertyTag = "0x35FF";
		_g.c.o.PropertyType = "Binary"
	}
	return _g.c.o
};
_g.c.d = function() {
	_g.c.V || (_g.c.V = _g.c.b("X-MS-Exchange-Organization-Ome-IsRequested", "InternetHeaders", "String"));
	return _g.c.V
};
_g.c.c = function() {
	_g.c.bb || (_g.c.bb = _g.c.b("X-MS-Exchange-Organization-Ome-TimeExpiration", "InternetHeaders", "String"));
	return _g.c.bb
};
_g.c.bw = function() {
	_g.c.Z || (_g.c.Z = _g.c.b("LinkPreviewMetadata", "Common", "StringArray"));
	return _g.c.Z
};
_g.c.bJ = function() {
	_g.c.bg || (_g.c.bg = _g.c.b("UserHighlightData", "Common", "StringArray"));
	return _g.c.bg
};
_g.c.q = function() {
	_g.c.y || (_g.c.y = _g.c.b("EntityExtraction/Highlights", "Common", "String"));
	return _g.c.y
};
_g.c.bh = function() {
	_g.c.z || (_g.c.z = _g.c.b("EntityExtraction/Highlights_Delayed", "Common", "String"));
	return _g.c.z
};
_g.c.bj = function() {
	_g.c.B || (_g.c.B = _g.c.b("EntityExtraction/HighlightsTypes", "Common", "String"));
	return _g.c.B
};
_g.c.bi = function() {
	_g.c.A || (_g.c.A = _g.c.b("EntityExtraction/HighlightsTypes_Delayed", "Common", "String"));
	return _g.c.A
};
_g.c.bp = function() {
	_g.c.be || (_g.c.be = _g.c.b("EntityExtraction/SmartReplyForEmail", "Common", "String"));
	return _g.c.be
};
_g.c.bo = function() {
	_g.c.bd || (_g.c.bd = _g.c.b("EntityExtraction/ReplyWithQueryCoverage", "Common", "String"));
	return _g.c.bd
};
_g.c.bs = function() {
	_g.c.D || (_g.c.D = _g.c.b("ConnectorSenderGuid", "Common", "CLSID"));
	return _g.c.D
};
_g.c.bH = function() {
	if(!_g.c.m) {
		_g.c.m = new _g.O;
		_g.c.m.PropertyName = "SourceWellKnownFolderType";
		_g.c.m.PropertySetId = "9137A2FD-2FA5-4409-91AA-2C3EE697350A";
		_g.c.m.PropertyType = "Integer"
	}
	return _g.c.m
};
_g.c.a = function(n, t) {
	if(!n || !n.length) return null;
	for(var r = new _j.q, u = 0; u < n.length; u++) {
		var f = n[u];
		var i = f.a().bH;
		i.PropertySetId === t.PropertySetId && i.PropertyTag === t.PropertyTag && i.PropertyId === t.PropertyId && i.PropertyName === t.PropertyName && i.DistinguishedPropertySetId === t.DistinguishedPropertySetId && r.c(f)
	}
	if(r.d.length === 1) return r.d[0];
	else if(r.d.length > 1) throw Error.invalidOperation("Multiple elements with the same URI found in extended properties.");
	else return null
};
_g.c.b = function(n, t, i) {
	var r = new _g.O;
	r.PropertyName = n;
	r.DistinguishedPropertySetId = t;
	r.PropertyType = i;
	return r
};
_g.j = function(n) {
	this.C = this.cb;
	_g.j.initializeBase(this);
	n || (n = new _g.ha);
	this.d(n);
	_a.s.a(this, "_Folder")
};
_g.j.$$cctor = function() {
	_a.m.a(_g.j, _g.ha, _g.j._C)
};
_g.j.a = function(n) {
	var t = new _g.u;
	t.j(_g.b.a.nameToId(n));
	t.R(n);
	return t
};
_g.j.c = function(n) {
	var i = "";
	if(!_g.j.isInstanceOfType(n) || !n) return i;
	var t = n;
	i = t.b ? t.a() !== "msgfolderroot" && (t.bH.ParentFolderId || t.bH.DisplayName !== t.q) ? String.format(_wss.i.F, t.bH.DisplayName, t.q) : t.q : !_j.h.a(t.w) && _g.a.a().c().bH.IsShadowMailbox ? t.w : t.bH.DisplayName;
	return i
};
_g.j.g = function(n) {
	if(n.a() === undefined) return "CF";
	switch(n.a()) {
		case "inbox":
			return "IN";
		case "sentitems":
			return "SI";
		case "deleteditems":
			return "DI";
		case "drafts":
			return "DR";
		case "conversationhistory":
			return "CH";
		case "journal":
			return "JO";
		case "junkemail":
			return "JU";
		case "clutter":
			return "CL";
		case "msgfolderroot":
			return "RT";
		case "none":
			return "CF"
	}
	return n.a()
};
_g.j.b = function(n) {
	return _g.j.l(n) || _g.j.d(n)
};
_g.j.l = function(n) {
	if(_g.bT.isInstanceOfType(n)) {
		var t = n.b;
		return t === "SystemCategory" || t === "UserCategory"
	}
	return !1
};
_g.j.d = function(n) {
	return _g.bT.isInstanceOfType(n) && n.b === "Hashtag"
};
_g.j.f = function(n) {
	return !!n && _g.u.isInstanceOfType(n) && n.c() && (!n.bH.FolderClass || n.bH.FolderClass.toLowerCase() === "IPF.Note".toLowerCase())
};
_g.j.i = function(n) {
	return !!n && _g.dp.isInstanceOfType(n) && n.c()
};
_g.j.e = function(n) {
	return !n || !n.bH.FolderId ? !1 : _g.j.i(n) ? !0 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.o() === "All"
};
_g.j.j = function(n) {
	return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "PublishingAuthor" || n.e.a() === "Custom" && n.e.bH.CanCreateSubFolders
};
_g.j.k = function(n) {
	return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.o() === "All"
};
_g.j.h = function(n) {
	return !n || !n.bH.FolderId ? !1 : !n.b || !n.e || n.e.a() === "Owner" || n.e.a() === "PublishingEditor" || n.e.a() === "Editor" || n.e.a() === "Custom" && n.e.b() === "All"
};
_g.j._C = function(n) {
	return new _g.j(n)
};
_g.j.prototype = {
	m: !1,
	b: !1,
	q: null,
	P: !0,
	e: null,
	g: null,
	r: !1,
	n: 0,
	w: null,
	z: 0,
	W: function(n) {
		this.apcl("DisplayName", n)
	},
	X: function(n) {
		this.apcl("TotalCount", n)
	},
	x: function(n) {
		this.m = n;
		this.eH("IsFavoriteFolder");
		return n
	},
	D: !1,
	u: null,
	O: function() {
		return this.bH.FolderId && _g.a.a().a().bH.ArchiveFolderId ? this.bH.FolderId.Id === _g.a.a().a().bH.ArchiveFolderId : !1
	},
	y: function(n) {
		this.P = n;
		this.eH("DefaultCollapsed");
		return n
	},
	H: function(n) {
		this.g = n;
		this.eH("SubFolders");
		return n
	},
	ba: function(n) {
		this.r = n;
		this.eH("IsHidden");
		return n
	},
	S: function(n) {
		if(n !== this.z) {
			this.z = n;
			this.eH("SyncMode")
		}
		return n
	},
	Z: function(n) {
		if(this.n !== n) {
			this.n = n;
			this.eH("FolderSize")
		}
		return n
	},
	bc: function(n) {
		if(this.w !== n) {
			this.w = n;
			this.eH("RemoteFolderDisplayName")
		}
		return n
	},
	a: function() {
		return this.bH.DistinguishedFolderId
	},
	p: function() {
		return this.bH.FolderId.Id
	},
	c: function() {
		return !!this.bH.FolderId && _g.bk.a(this.bH.FolderId)
	},
	v: 0,
	cb: function(n) {
		return !n || !_g.j.isInstanceOfType(n) ? !1 : this.bH.FolderId ? _g.l.b(this.bH.FolderId, n.bH.FolderId) : this === n
	},
	dP: function() {
		if(this.N()) {
			this.bH.DistinguishedFolderId && this.bH.FolderId && !_g.b.a.nameToId(this.a()) && _g.a.a().K(this.a(), this.bH.FolderId);
			for(var r = 0, f = this.N().b(); r < f; r++) {
				var n = this.N().a(r);
				var t = n.a();
				var i = t.bH.PropertyTag;
				var u = t.bH.PropertyName;
				i === "0x10f4" && this.ba(n.bH.Value === "true");
				i === "0xe08" && this.Z(n.bH.Value);
				i === "0x7018" && this.bc(n.bH.Value);
				u === _g.c.bH().PropertyName && (this.v = Number.parseInvariant(n.bH.Value));
				t.dispose();
				n.dispose()
			}
		}
	},
	j: function(n) {
		this.bI("FolderId", n);
		return n
	},
	t: function(n) {
		this.bI("ParentFolderId", n);
		return n
	},
	f: function(n) {
		this.bI("DisplayName", n);
		return n
	},
	l: function(n) {
		this.bI("TotalCount", n);
		return n
	},
	s: function(n) {
		this.bI("ChildFolderCount", n);
		return n
	},
	N: function() {
		return this.ca(_g.be, _g.T, "ExtendedProperty")
	},
	K: function(n) {
		this.bI("EffectiveRights", n);
		return n
	},
	R: function(n) {
		this.bI("DistinguishedFolderId", n);
		return n
	},
	G: function() {
		return this.bS(_g.bp, "PolicyTag")
	},
	bb: function(n) {
		this.bO("PolicyTag", n);
		return n
	},
	E: function() {
		return this.bS(_g.bp, "ArchiveTag")
	},
	Y: function(n) {
		this.bO("ArchiveTag", n);
		return n
	},
	Q: function() {
		return this.bP(String, "ReplicaList")
	},
	bd: function(n) {
		this.bO("ReplicaList", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.L(n)
	},
	L: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var u = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.be, _g.T))(n)
			}, ["ExtendedProperty"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _g.bp(n)
			}, ["PolicyTag", "ArchiveTag"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ReplicaList"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.p = function(n) {
	this.u = this.o;
	this.C = this.cb;
	this.s = this.G;
	_g.p.initializeBase(this);
	n || (n = new _g.en);
	this.d(n);
	_a.s.a(this, "_Conversation")
};
_g.p.$$cctor = function() {
	_a.m.a(_g.p, _g.en, _g.p._C)
};
_g.p.a = function(n) {
	if(!n.length) return new Array(0);
	for(var e = 0, u = 0; u < n.length; u++) e += n[u].a().b();
	for(var f = new Array(e), o = 0, t = 0; t < n.length; t++)
		for(var i = 0; i < n[t].a().b(); i++) {
			var r;
			f[o] = (r = new _g.f, r.cc(n[t].a().a(i)), r);
			o++
		}
	return f
};
_g.p._C = function(n) {
	return new _g.p(n)
};
_g.p.prototype = {
	T: !1,
	O: !1,
	H: 0,
	L: !1,
	X: null,
	D: !1,
	x: !1,
	P: null,
	y: null,
	t: 0,
	p: function() {
		return this.bH.ConversationId.Id
	},
	bA: function() {
		this.T || this.E();
		return this.O
	},
	bC: function() {
		this.T || this.E();
		return this.H
	},
	bi: function() {
		return this.a().b()
	},
	bb: function() {
		return this.bH.GlobalMentionedMe || this.bH.GlobalAtAllMention
	},
	ba: !1,
	o: function() {
		return this.bH.ConversationId.Id
	},
	r: function() {
		return this.h()
	},
	bd: function() {
		return this.m()
	},
	be: function() {
		return this.bH.LastDeliveryTime
	},
	j: function() {
		return this.bH.UnreadCount > 0
	},
	bD: function() {
		return this.bH.ConversationTopic || ""
	},
	bB: function() {
		return this.bH.Preview || ""
	},
	W: function() {
		return this.a().b() ? this.a().a(0) : null
	},
	_Conversation: function() {
		if(_a.p.a && this.f()) {
			var t = this;
			this.f().J(function() {
				t.E()
			});
			var n = this;
			this.f().p(function() {
				n.E()
			})
		}
	},
	cb: function(n) {
		if(!n || !_g.p.isInstanceOfType(n)) return !1;
		if(!this.bH.ConversationId || !n.bH.ConversationId) throw Error.invalidOperation("Conversation not in a valid state.");
		return _ff.e.b(this.bH.ConversationId, n.bH.ConversationId)
	},
	N: function(n) {
		return this.cb(n) && this.bH.InstanceKey === n.bH.InstanceKey
	},
	bE: function() {
		if(!this.f()) return _g.f.k(1);
		for(var r = this.f().b(), t = 1, n = 0; n < r; n++) {
			var u = this.f().a(n);
			var i = _g.f.F(u);
			if(!n) {
				t = i;
				continue
			}
			if(t !== i) return null
		}
		return _g.f.k(t)
	},
	S: function() {
		return this.b() && this.b().bH.From && this.b().bH.From.Mailbox ? this.b().bH.From.Mailbox.Name : ""
	},
	bn: function() {
		return this.b() && this.b().cr() ? this.b().cr() : null
	},
	w: function() {
		return this.D
	},
	bl: function(n) {
		this.D = n;
		this.eH("IsPinned");
		return n
	},
	bo: function() {
		return !!this.m() && _g.f.g(this.m())
	},
	bT: function() {
		return !!this.l() && this.l().b() > 0 || this.bU()
	},
	bU: function() {
		if(!this.q()) return !1;
		for(var t = this.q().e(), n = 0; n < t.length; n++) {
			var i = _g.A.d(t[n]);
			if(i) return !0
		}
		return !1
	},
	bw: function(n) {
		if(this.P !== n) {
			this.P = n;
			this.eH("QueuedDraftId")
		}
		return n
	},
	K: !1,
	I: null,
	U: function() {
		return this.I
	},
	bF: function(n) {
		this.I = n;
		return n
	},
	bh: function(n) {
		this.t = n;
		this.eH("ExtractedActionState");
		return n
	},
	bq: function(n) {
		if(n) {
			var t = this;
			return this.a().s(function(t) {
				return t.Id === n.bH.ItemId.Id
			})
		} else return this.a().b()
	},
	bX: function(n) {
		return this.c().b() === 1 && !!this.q() && this.q().j(n)
	},
	fk: function(n) {
		var t = n;
		!t.FolderId && this.bH.FolderId && (t.FolderId = this.bH.FolderId);
		t.LastDeliveryOrRenewTime || (t.LastDeliveryOrRenewTime = t.LastDeliveryTime);
		_g.K.prototype.fk.call(this, n)
	},
	dP: function() {
		this.bl(this.bo());
		_g.K.prototype.dP.call(this)
	},
	eJ: function() {
		if(_a.p.a && this.f()) {
			var t = this;
			this.f().F(function() {
				t.E()
			});
			var n = this;
			this.f().q(function() {
				n.E()
			})
		}
		_a.gd.prototype.eJ.call(this)
	},
	E: function() {
		this.O = !1;
		this.H = 0;
		if(this.f()) {
			var n = this;
			this.f().n(function(t) {
				var i = t;
				if(_a.p.K(i)) {
					n.O = !0;
					n.H = -1
				} else if(_a.p.G(i)) {
					n.O = !0;
					n.H || (n.H = 11)
				}
			})
		}
		this.T = !0;
		this.eH("IsSmimeClass");
		this.eH("SmimeType")
	},
	Q: function(n) {
		this.bI("FolderId", n);
		return n
	},
	bY: function(n) {
		this.bI("ConversationId", n);
		return n
	},
	bZ: function(n) {
		this.bI("ConversationTopic", n);
		return n
	},
	v: function() {
		return this.bP(String, "UniqueRecipients")
	},
	g: function() {
		return this.bP(String, "UniqueSenders")
	},
	by: function(n) {
		this.bO("UniqueSenders", n);
		return n
	},
	h: function() {
		return this.bW("LastDeliveryTime")
	},
	bu: function(n) {
		this.co("LastDeliveryTime", n);
		return n
	},
	l: function() {
		return this.bP(String, "Categories")
	},
	Y: function(n) {
		this.bO("Categories", n);
		return n
	},
	M: function() {
		return this.bQ("FlagStatus", "NotFlagged")
	},
	bj: function(n) {
		this.bI("FlagStatus", n);
		return n
	},
	bz: function() {
		return this.bH.HasAttachments
	},
	bm: function(n) {
		this.bI("MessageCount", n);
		return n
	},
	bf: function() {
		return this.bH.GlobalMessageCount
	},
	A: function(n) {
		this.bI("GlobalMessageCount", n);
		return n
	},
	n: function(n) {
		this.bI("UnreadCount", n);
		return n
	},
	R: function(n) {
		this.bI("GlobalUnreadCount", n);
		return n
	},
	f: function() {
		return this.bP(String, "ItemClasses")
	},
	bg: function() {
		return this.bQ("Importance", "Low")
	},
	a: function() {
		return this.bP(_g.fr, "ItemIds")
	},
	cc: function(n) {
		this.bO("ItemIds", n);
		return n
	},
	c: function() {
		return this.bP(_g.fr, "GlobalItemIds")
	},
	bk: function(n) {
		this.bO("GlobalItemIds", n);
		return n
	},
	V: function() {
		return this.bW("LastModifiedTime")
	},
	G: function() {
		return this.bH.InstanceKey
	},
	bt: function(n) {
		this.bI("InstanceKey", n);
		return n
	},
	bv: function(n) {
		this.bI("Preview", n);
		return n
	},
	bp: function() {
		return this.bQ("MailboxScope", "PrimaryOnly")
	},
	bV: function() {
		return this.bQ("IconIndex", "PostItem")
	},
	e: function() {
		return this.bP(_g.fr, "DraftItemIds")
	},
	br: function(n) {
		this.bO("DraftItemIds", n);
		return n
	},
	bc: function() {
		return this.bH.GlobalLikeCount || 0
	},
	bs: function(n) {
		this.bI("GlobalLikeCount", n);
		return n
	},
	m: function() {
		return this.bW("LastDeliveryOrRenewTime")
	},
	cd: function(n) {
		this.co("LastDeliveryOrRenewTime", n);
		return n
	},
	q: function() {
		return this.bP(Number, "SystemCategories")
	},
	Z: function(n) {
		this.bO("SystemCategories", n);
		return n
	},
	b: function() {
		return this.bS(_g.i, "InitialPost")
	},
	z: function() {
		return this.ca(_g.i, _g.I, "RecentReplys")
	},
	bx: function(n) {
		this.bO("RecentReplys", n);
		return n
	},
	bG: function() {
		return this.bH.AvailableFeaturesFlag || 0
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.ce(n)
	},
	ce: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var o = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["UniqueRecipients", "GlobalUniqueRecipients", "UniqueUnreadSenders", "GlobalUniqueUnreadSenders", "UniqueSenders", "GlobalUniqueSenders", "Categories", "GlobalCategories", "ItemClasses", "GlobalItemClasses", "GlobalItemChangeKeys", "MailboxGuids", "Hashtags", "CouponExpiryDates"], n, t);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ItemIds", "GlobalItemIds", "DraftItemIds"], n, t);
			var h = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["GlobalItemReadFlags"], n, t);
			var s = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["GlobalRichContent"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["SystemCategories", "GlobalSystemCategories", "CouponRanks"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _g.i(n)
			}, ["InitialPost"], n, t);
			var f = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.i, _g.I))(n)
			}, ["RecentReplys"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ConversationThreadIds", "GlobalConversationThreadIds"], n, t);
			this.cg(["LastDeliveryTime", "GlobalLastDeliveryTime", "LastModifiedTime", "LastDeliveryOrRenewTime", "GlobalLastDeliveryOrRenewTime", "ReturnTime", "LastSentTime", "LastAttachmentsProcessedTime", "GlobalLastAttachmentsProcessedTime", "ExtractedCardAndActionsLastUpdatedTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.fc = function() {};
_g.fc.a = function(n) {
	return String.format("conversationID= {0} \n itemCount= {1}", n.p(), n.bi().toString())
};
_g.fc.b = function(n) {
	for(var r = new Sys.StringBuilder, t = 0; t < n.x.length; t++) {
		var i = n.x[t];
		var u = i ? i.bH.InternetMessageId : "null";
		r.append(String.format(" [{0}] InternetMessageId = {1}\n", t, u))
	}
	return r.toString()
};
_g.fc.c = function(n) {
	for(var r = new Sys.StringBuilder, t = 0; t < n.length; t++) {
		var i = n[t];
		var u = i ? i.InternetMessageId : "null";
		r.append(String.format(" [{0}] InternetMessageId = {1}\n", t, u))
	}
	return r.toString()
};
_g.i = function(n) {
	this.cU = Function.createDelegate(this, this.ep);
	this.bv = null;
	_g.i.resolveInheritance();
	this.l = this.cI;
	_g.i.initializeBase(this, [n || new _g.I]);
	this.bR();
	_a.s.a(this, "_EmailMessage")
};
_g.i.$$cctor = function() {
	_a.m.b(_g.i, _g.I, _g.i._C, "Message:#Exchange")
};
_g.i._C = function(n) {
	return new _g.i(n)
};
_g.i.prototype = {
	dn: !1,
	dp: !1,
	cn: !1,
	bw: !1,
	_EmailMessage: function() {
		this.en(1);
		this.apcl("IsRead", this.cU)
	},
	ep: function(n, t) {
		this.eH("IsReadValue")
	},
	dj: function() {
		return !0
	},
	cJ: function() {
		return this.bH.IsRead ? !0 : !1
	},
	hp: function() {
		return this.bH.MessageSafety
	},
	hq: function() {
		return this.ef()
	},
	bG: function() {
		return this.ct().LastVerbExecuted
	},
	dl: function(n) {
		if(this.ct().LastVerbExecuted !== n) {
			this.ct().LastVerbExecuted = n;
			this.eH("LastVerbExecuted")
		}
		return n
	},
	cd: function() {
		return this.ct().LastVerbExecutionTime
	},
	dm: function(n) {
		try {
			n && n.b(9);
			if(this.ct().LastVerbExecutionTime !== n) {
				this.ct().LastVerbExecutionTime = n;
				this.eH("LastVerbExecutionTime")
			}
		} catch(t) {
			_j.e.c(_a.a.U, "Attempting to set LastVerbExecutionTime with object that doesn't contain method CultureFormat.  Value type: {0}, StackTrace: {1}", Object.getTypeName(n), t.stack);
			this.ct().LastVerbExecutionTime = null
		}
		return n
	},
	es: function(n) {
		if(this.dn !== n) {
			this.dn = n;
			this.eH("SmimeEncryptMessage")
		}
		return n
	},
	et: function(n) {
		if(this.dp !== n) {
			this.dp = n;
			this.eH("SmimeSignMessage")
		}
		return n
	},
	dz: function(n) {
		if(this.cn !== n) {
			this.cn = n;
			this.eH("HasTruncatedRecipients")
		}
		return n
	},
	cV: !1,
	g: function() {
		return this.bH.From && this.bH.From.Mailbox ? this.bH.From.Mailbox.Name : null
	},
	dg: function(n) {
		if(this.bw !== n) {
			this.bw = n;
			this.eH("IsQueuedForSubmission")
		}
		return n
	},
	ct: function() {
		return this.fj()
	},
	dP: function() {
		_g.f.prototype.dP.call(this);
		this.cM()
	},
	eJ: function() {
		this.rpcl("IsRead", this.cU);
		_g.f.prototype.eJ.call(this)
	},
	ea: function(n, t) {
		switch(n) {
			case "IsRead":
				this.h(t);
				break;
			default:
				_g.f.prototype.ea.call(this, n, t);
				break
		}
	},
	dc: function(n) {
		this.cw(new _a.k(n.ToRecipients));
		this.cv(new _a.k(n.CcRecipients));
		this.cA(new _a.k(n.BccRecipients));
		this.cM()
	},
	by: function(n) {
		_g.f.prototype.by.call(this, n);
		var t = n;
		this.dl(t.LastVerbExecuted);
		this.dm(t.LastVerbExecutionTime)
	},
	dV: function(n) {
		_g.f.prototype.dV.call(this, n);
		var t = n;
		this.dd(t.InternetMessageId);
		this.h(t.IsRead);
		this.eq(new _a.k(t.Likers));
		this.cL(t.LikeCount);
		this.jf(n.ExtendedProperty)
	},
	du: function(n) {
		_g.f.prototype.du.call(this, n);
		this.h(n.IsRead);
		this.dk(n.IsReadReceiptRequested);
		this.de(n.IsDeliveryReceiptRequested)
	},
	dW: function(n) {
		_g.f.prototype.dW.call(this, n);
		this.h(n.IsRead)
	},
	cY: function(n) {
		this.bH.InternetMessageId || this.dd("<" + +new Date + "." + Math.floor(Math.random() * 1e5) + n + ">")
	},
	eo: function(n) {
		if(n) {
			_g.f.prototype.eo.call(this, n);
			var r = n.a();
			var i = r.bH.PropertyTag;
			r.dispose();
			var t = n.bH.Value === undefined ? "" : n.bH.Value;
			i === "0x1081" ? this.dl(_j.u.b(_g.km, t)) : i === "0x1082" && this.dm(_a.d.b(t))
		}
	},
	dw: function() {
		if(!this.bV()) return !1;
		var n = _g.c.a(this.bV().e(), _g.c.d());
		return !!n && n.bH.Value.toUpperCase() === "TRUE"
	},
	ck: function() {
		if(!this.bV()) return null;
		var i = _g.c.a(this.bV().e(), _g.c.c());
		if(i) {
			var t = i.bH.Value;
			var n = _a.d.b(t);
			n || _j.e.c(_a.a.U, "Attempt to get OME expiration time but value in extended property cannot be parsed into a datetime object.  Value: {0}", t);
			return n
		} else return null
	},
	cM: function() {
		var t = !1;
		var n = this.bH;
		n.RecipientCounts && (n.ToRecipients && n.RecipientCounts.ToRecipientsCount > n.ToRecipients.length || n.CcRecipients && n.RecipientCounts.CcRecipientsCount > n.CcRecipients.length || n.BccRecipients && n.RecipientCounts.BccRecipientsCount > n.BccRecipients.length) && (t = !0);
		this.dz(t)
	},
	e: function() {
		return this.bH.Sender
	},
	er: function(n) {
		this.bI("Sender", n);
		return n
	},
	q: function() {
		return this.bP(_g.g, "ToRecipients")
	},
	cw: function(n) {
		this.bO("ToRecipients", n);
		return n
	},
	A: function() {
		return this.bP(_g.g, "CcRecipients")
	},
	cv: function(n) {
		this.bO("CcRecipients", n);
		return n
	},
	E: function() {
		return this.bP(_g.g, "BccRecipients")
	},
	cA: function(n) {
		this.bO("BccRecipients", n);
		return n
	},
	dk: function(n) {
		this.bI("IsReadReceiptRequested", n);
		return n
	},
	de: function(n) {
		this.bI("IsDeliveryReceiptRequested", n);
		return n
	},
	b: function() {
		return this.bH.From
	},
	cK: function(n) {
		this.bI("From", n);
		return n
	},
	m: function() {
		return this.bH.InternetMessageId
	},
	dd: function(n) {
		this.bI("InternetMessageId", n);
		return n
	},
	a: function() {
		return this.bH.IsRead
	},
	h: function(n) {
		this.bI("IsRead", n);
		return n
	},
	K: function() {
		return this.bH.IsResponseRequested
	},
	dx: function() {
		return this.bP(_g.g, "ReplyTo")
	},
	H: function() {
		return this.bS(_g.dZ, "ApprovalRequestData")
	},
	cm: function() {
		return this.bS(_g.ec, "ReminderMessageData")
	},
	cu: function() {
		return this.bH.LikeCount || 0
	},
	cL: function(n) {
		this.bI("LikeCount", n);
		return n
	},
	ce: function() {
		return this.bP(_g.g, "Likers")
	},
	eq: function(n) {
		this.bO("Likers", n);
		return n
	},
	ee: function() {
		return this.bQ("MessageResponseType", 0)
	},
	ef: function() {
		return this.bQ("TrustedSourceType", 0)
	},
	dy: function() {
		return this.bP(_g.e, "TailoredXpCalendarEventIds")
	},
	eu: function(n) {
		this.bO("TailoredXpCalendarEventIds", n);
		return n
	},
	cH: function() {
		return this.bQ("Charm", "None")
	},
	ev: function(n) {
		this.bI("TailoredXpEntitiesStatus", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.cN(n)
	},
	cN: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.f.prototype.eQ.call(this, n);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ToRecipients", "CcRecipients", "BccRecipients", "ReplyTo", "Likers"], n, t);
			var o = this;
			this.bN(function(n) {
				return new _g.dZ(n)
			}, ["ApprovalRequestData"], n, t);
			var s = this;
			this.bN(function(n) {
				return new _g.ec(n)
			}, ["ReminderMessageData"], n, t);
			var f = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.dq, _g.cK))(n)
			}, ["ModernReminders"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["MailboxGuids", "CouponExpiryDates"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["TailoredXpCalendarEventIds"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["CouponRanks"], n, t);
			this.cg(["LastActionTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cd = function(n) {
	_g.cd.initializeBase(this);
	n || (n = new _g.ck);
	this.d(n);
	_a.s.a(this, "_ConversationNodeModel")
};
_g.cd.$$cctor = function() {
	_a.m.a(_g.cd, _g.ck, _g.cd._C)
};
_g.cd._C = function(n) {
	return new _g.cd(n)
};
_g.cd.prototype = {
	f: null,
	b: function() {
		this.f || (this.f = new _j.l);
		return this.f
	},
	n: function(n) {
		this.bI("InternetMessageId", n);
		return n
	},
	q: function(n) {
		this.bI("ParentInternetMessageId", n);
		return n
	},
	a: function() {
		return this.ca(_g.f, _g.M, "Items")
	},
	c: function() {
		return this.bP(_g.g, "NewParticipants")
	},
	h: function(n) {
		this.bO("NewParticipants", n);
		return n
	},
	m: function(n) {
		this.bI("InReplyToItem", n);
		return n
	},
	p: function(n) {
		this.bI("IsRootNode", n);
		return n
	},
	s: function(n) {
		this.bO("ForwardMessages", n);
		return n
	},
	j: function() {
		return this.bH.IsQuotedTextChanged ? !0 : !1
	},
	o: function(n) {
		this.bI("IsQuotedTextChanged", n);
		return n
	},
	e: function() {
		return this.bP(String, "QuotedTextList")
	},
	r: function(n) {
		this.bO("QuotedTextList", n);
		return n
	},
	g: function() {
		return this.bH.HasQuotedText ? !0 : !1
	},
	l: function(n) {
		this.bI("HasQuotedText", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.t(n)
	},
	t: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var u = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.f, _g.M))(n)
			}, ["Items"], n, t);
			var f = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["NewParticipants"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ForwardMessages"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["QuotedTextList"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.kS = function() {
	this.LastVerbExecuted = undefined;
	this.LastVerbExecutionTime = undefined;
	_g.kS.initializeBase(this)
};
_g.v = function(n) {
	_g.v.initializeBase(this, [n || new _g.cL]);
	this.bR();
	_a.s.a(this, "_MailFolderPermission")
};
_g.v.$$cctor = function() {
	_a.m.a(_g.v, _g.cL, _g.v._C)
};
_g.v.f = function() {
	_g.v.b || _g.v.d();
	return _g.v.b
};
_g.v.e = function() {
	_g.v.a || _g.v.d();
	return _g.v.a
};
_g.v.g = function() {
	_g.v.c || _g.v.d();
	return _g.v.c
};
_g.v.d = function() {
	_g.v.b = {};
	_g.v.a = new _a.R;
	var n = new _g.v;
	n.g("None");
	n.h(!1);
	n.j(!1);
	n.l("None");
	n.e("None");
	n.c(!1);
	n.m(!1);
	n.f(!1);
	n.n("None");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	_g.v.c = n;
	n = new _g.v;
	n.g("Contributor");
	n.h(!0);
	n.j(!1);
	n.l("None");
	n.e("None");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("None");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("Reviewer");
	n.h(!1);
	n.j(!1);
	n.l("None");
	n.e("None");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("NoneditingAuthor");
	n.h(!0);
	n.j(!1);
	n.l("Owned");
	n.e("None");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("Author");
	n.h(!0);
	n.j(!1);
	n.l("Owned");
	n.e("Owned");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("PublishingAuthor");
	n.h(!0);
	n.j(!0);
	n.l("Owned");
	n.e("Owned");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("Editor");
	n.h(!0);
	n.j(!1);
	n.l("All");
	n.e("All");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("PublishingEditor");
	n.h(!0);
	n.j(!0);
	n.l("All");
	n.e("All");
	n.c(!1);
	n.m(!1);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	n = new _g.v;
	n.g("Owner");
	n.h(!0);
	n.j(!0);
	n.l("All");
	n.e("All");
	n.c(!0);
	n.m(!0);
	n.f(!0);
	n.n("FullDetails");
	_g.v.b[n.a()] = n;
	_g.v.a.a(n);
	var t = n;
	n = _g.v.c.p();
	n.f(!0);
	_g.v.a.a(n);
	n = _g.v.c.p();
	n.c(!0);
	_g.v.a.a(n);
	n = _g.v.c.p();
	n.c(!0);
	n.f(!0);
	_g.v.a.a(n);
	n = t.p();
	n.c(!1);
	_g.v.a.a(n)
};
_g.v._C = function(n) {
	return new _g.v(n)
};
_g.v.prototype = {
	p: function() {
		var n = new _g.v;
		return this.u(n)
	},
	u: function(n) {
		n.g(this.a());
		n.h(this.bH.CanCreateItems);
		n.j(this.bH.CanCreateSubFolders);
		n.c(this.q());
		n.f(this.bH.IsFolderVisible);
		n.m(this.bH.IsFolderOwner);
		n.e(this.b());
		n.l(this.o());
		n.n(this.r());
		return n
	},
	x: function(n) {
		return this.bH.CanCreateItems === n.bH.CanCreateItems && this.bH.CanCreateSubFolders === n.bH.CanCreateSubFolders && this.q() === n.q() && this.bH.IsFolderVisible === n.bH.IsFolderVisible && this.bH.IsFolderOwner === n.bH.IsFolderOwner && this.b() === n.b() && this.o() === n.o() && this.r() === n.r()
	},
	y: function(n) {
		var t = this.bH.UserId;
		return !t || !n ? !1 : _j.u.a(t.DistinguishedUser) || _j.u.a(n.DistinguishedUser) ? t.PrimarySmtpAddress === n.PrimarySmtpAddress : t.DistinguishedUser === n.DistinguishedUser ? this.bH.UserId.DistinguishedUser === "None" ? t.PrimarySmtpAddress === n.PrimarySmtpAddress : !0 : !1
	},
	w: function() {
		for(var n = 0; n < _g.v.e().b.length; n++) {
			var t = _g.v.e().c(n);
			if(this.x(t)) return t.a()
		}
		return "Custom"
	},
	v: function() {
		if(this.a() !== "Custom") {
			var n = _g.v.f()[this.a()];
			n.u(this)
		}
	},
	r: function() {
		return this.bQ("ReadItems", "None")
	},
	n: function(n) {
		this.bI("ReadItems", n);
		return n
	},
	a: function() {
		return this.bQ("PermissionLevel", "None")
	},
	g: function(n) {
		this.bI("PermissionLevel", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.z(n)
	},
	z: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.gS.prototype.t.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.dq = function(n) {
	_g.dq.initializeBase(this);
	n || (n = new _g.cK);
	this.d(n);
	_a.s.a(this, "_ModernReminderModel")
};
_g.dq.$$cctor = function() {
	_a.m.a(_g.dq, _g.cK, _g.dq._C)
};
_g.dq._C = function(n) {
	return new _g.dq(n)
};
_g.dq.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["ReferenceTime", "CustomReminderTime", "DueDate"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bl = function(n) {
	this.c = Function.createDelegate(this, this.f);
	_g.bl.resolveInheritance();
	this.l = this.cI;
	_g.bl.initializeBase(this, [n || new _g.dc]);
	this.bR();
	_a.s.a(this, "_PostItem")
};
_g.bl.$$cctor = function() {
	_a.m.b(_g.bl, _g.dc, _g.bl._C, "PostItem:#Exchange")
};
_g.bl._C = function(n) {
	return new _g.bl(n)
};
_g.bl.prototype = {
	_PostItem: function() {
		this.en(5);
		this.apcl("IsRead", this.c)
	},
	g: function() {
		return this.bH.From && this.bH.From.Mailbox ? this.bH.From.Mailbox.Name : null
	},
	f: function(n, t) {
		this.eH("IsReadValue")
	},
	dj: function() {
		return !0
	},
	cJ: function() {
		return this.bH.IsRead ? !0 : !1
	},
	dV: function(n) {
		_g.f.prototype.dV.call(this, n);
		this.q(n.InternetMessageId);
		this.h(n.IsRead)
	},
	du: function(n) {
		_g.f.prototype.du.call(this, n);
		this.h(n.IsRead)
	},
	dW: function(n) {
		_g.f.prototype.dW.call(this, n);
		this.h(n.IsRead)
	},
	b: function() {
		return this.bH.From
	},
	n: function(n) {
		this.bI("From", n);
		return n
	},
	m: function() {
		return this.bH.InternetMessageId
	},
	q: function(n) {
		this.bI("InternetMessageId", n);
		return n
	},
	a: function() {
		return this.bH.IsRead
	},
	h: function(n) {
		this.bI("IsRead", n);
		return n
	},
	e: function() {
		return this.bH.Sender
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.t(n)
	},
	t: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.f.prototype.eQ.call(this, n);
			this.cg(["PostedTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cE = function(n) {
	this.h = Function.createDelegate(this, this.o);
	_g.cE.initializeBase(this);
	n || (n = new _g.eS);
	this.d(n);
	_a.s.a(this, "_UnseenData")
};
_g.cE.$$cctor = function() {
	_a.m.a(_g.cE, _g.eS, _g.cE._C)
};
_g.cE.a = function() {
	var n = new _g.cE;
	n.apcl("UnseenCount", n.h);
	n.j();
	return n
};
_g.cE._C = function(n) {
	return new _g.cE(n)
};
_g.cE.prototype = {
	b: 0,
	c: !1,
	l: function(n) {
		this.b = Math.max(0, n);
		this.eH("UnseenOrUnreadCount");
		return n
	},
	g: function() {
		return this.c ? this.b : this.bH.UnseenCount
	},
	j: function() {
		this.m(0);
		this.e(_a.d.get_utcNow())
	},
	p: function(n) {
		this.c = !0;
		this.l(n);
		this.a() || this.e(_a.d.g)
	},
	f: function(n) {
		this.c && this.l(n)
	},
	o: function(n, t) {
		this.eH("UnseenOrUnreadCount")
	},
	m: function(n) {
		this.bI("UnseenCount", n);
		return n
	},
	a: function() {
		return this.bW("LastVisitedTime")
	},
	e: function(n) {
		this.co("LastVisitedTime", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.n(n)
	},
	n: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["LastVisitedTime"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["SeenConversations"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.w = function(n) {
	_g.w.initializeBase(this);
	n || (n = new _g.eG);
	this.d(n);
	_a.s.a(this, "_UserModernGroup")
};
_g.w.$$cctor = function() {
	_a.m.a(_g.w, _g.eG, _g.w._C)
};
_g.w.b = function(n) {
	return new _g.N(n.bH.SmtpAddress, n.f())
};
_g.w.f = function(n) {
	var t = new _g.u;
	t.f(n.bH.DisplayName);
	t.j(_g.w.b(n));
	return t
};
_g.w.d = function(n) {
	var t = new _g.g;
	t.Name = n.bH.DisplayName;
	t.EmailAddress = n.bH.SmtpAddress;
	t.RoutingType = "SMTP";
	t.MailboxType = n.m ? "RecommendedGroup" : "GroupMailbox";
	return t
};
_g.w.a = function(n, t, i, r, u, f) {
	var e = new _g.w;
	e.c(n);
	e.g(t);
	e.b = r;
	e.n(1);
	!!i !== i || (e.isMember = i);
	u && e.s(u);
	f && e.t(f);
	return e
};
_g.w.g = function(n) {
	var t = new _g.w(n);
	t.e = 1;
	return t
};
_g.w.c = function(n) {
	var t = new _g.w;
	t.c(n);
	t.g(n);
	t.n(0);
	return t
};
_g.w.e = function(n) {
	return n ? n.toLowerCase() : ""
};
_g.w._C = function(n) {
	return new _g.w(n)
};
_g.w.prototype = {
	position: 0,
	unseenData: null,
	isMember: !1,
	e: 0,
	b: 0,
	m: !1,
	p: !1,
	j: null,
	a: function() {
		return _g.w.e(this.bH.SmtpAddress)
	},
	n: function(n) {
		if(this.e === n) return n;
		this.e = n;
		this.eH("ObjectStatus");
		return n
	},
	o: function() {
		return this.j ? this.j : this.unseenData ? this.unseenData.a() : _a.d.get_utcNow()
	},
	q: function(n) {
		this.r(n.bH);
		this.b = n.b;
		n.e === 1 && this.n(1)
	},
	g: function(n) {
		this.bI("SmtpAddress", n);
		return n
	},
	c: function(n) {
		this.bI("DisplayName", n);
		return n
	},
	h: function() {
		return this.bH.IsPinned ? !0 : !1
	},
	l: function(n) {
		this.bI("IsPinned", n);
		return n
	},
	f: function() {
		return this.bQ("GroupObjectType", 0)
	},
	s: function(n) {
		this.bI("ExternalDirectoryObjectId", n);
		return n
	},
	t: function(n) {
		this.bI("MailboxGuid", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.r(n)
	},
	r: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.lb = function() {
	this.NeedsUpdate = undefined;
	_g.lb.initializeBase(this)
};
_g.ci = function(n) {
	_g.ci.initializeBase(this, [n])
};
_g.ci.prototype = {
	v: function() {
		return this.c().VoiceMessageAttachmentOrder
	},
	n: function(n) {
		if(this.c().VoiceMessageAttachmentOrder !== n) {
			this.c().VoiceMessageAttachmentOrder = n;
			this.eH("VoiceMessageAttachmentOrder")
		}
		return n
	},
	x: function() {
		return this.c().VoiceMessageDuration
	},
	t: function(n) {
		if(this.c().VoiceMessageDuration !== n) {
			this.c().VoiceMessageDuration = n;
			this.eH("VoiceMessageDuration")
		}
		return n
	},
	f: function(n) {
		if(this.c().PstnCallbackTelephoneNumber !== n) {
			this.c().PstnCallbackTelephoneNumber = n;
			this.eH("PstnCallbackTelephoneNumber")
		}
		return n
	},
	c: function() {
		return this.fj()
	},
	by: function(n) {
		_g.i.prototype.by.call(this, n);
		var t = n;
		this.n(t.VoiceMessageAttachmentOrder);
		this.t(t.VoiceMessageDuration);
		this.f(t.PstnCallbackTelephoneNumber)
	},
	eo: function(n) {
		if(n) {
			_g.i.prototype.eo.call(this, n);
			var t = n.a();
			var r = t.bH.PropertyTag;
			var u = t.bH.PropertyName;
			var f = t.a();
			t.dispose();
			var i = n.bH.Value === undefined ? "" : n.bH.Value;
			r === "0x6805" ? this.n(i) : r === "0x6801" ? this.t(Number.parseInvariant(i)) : u === "PstnCallbackTelephoneNumber" && f === "UnifiedMessaging" && this.f(i)
		}
	}
};
_g.lc = function() {
	this.VoiceMessageAttachmentOrder = undefined;
	this.VoiceMessageDuration = undefined;
	this.PstnCallbackTelephoneNumber = undefined;
	_g.lc.initializeBase(this)
};
_g.bg = function(n) {
	_g.bg.initializeBase(this);
	n || (n = new _g.bC);
	this.d(n);
	_a.s.a(this, "_Category")
};
_g.bg.$$cctor = function() {
	_a.m.a(_g.bg, _g.bC, _g.bg._C)
};
_g.bg.a = function(n) {
	var t = new _g.bC;
	t.Color = n.bH.Color;
	t.Name = n.bH.Name;
	var i = new _g.bg(t);
	i.a = n.a;
	return i
};
_g.bg.c = function(n, t) {
	var i = new _g.bC;
	i.Color = -1;
	i.Name = t;
	var r = new _g.bg(i);
	r.a = n;
	return r
};
_g.bg.b = function(n, t) {
	var i = new _g.bC;
	i.Color = t;
	i.Name = n;
	return new _g.bg(i)
};
_g.bg._C = function(n) {
	return new _g.bg(n)
};
_g.bg.prototype = {
	a: 0,
	b: function() {
		return !!this.a
	},
	e: function(n) {
		this.bI("Name", n);
		return n
	},
	c: function(n) {
		this.bI("Color", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.f(n)
	},
	f: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.b = function() {};
_g.C = function() {};
_g.C.h = function(n) {
	_g.C.f = n ? "ConversationLastModifiedTime" : "ConversationLastDeliveryTime";
	_g.C.c = n ? "ItemLastModifiedTime" : "DateTimeReceived"
};
_g.C.d = function(n, t) {
	var u = !1;
	var f = !1;
	var i = _g.bb.a;
	if(n) {
		u = _g.bk.a(n);
		i = _g.b.a.idToName(n);
		f = _g.j.b(n)
	}
	var r = _g.C.k(i, n, t, u, f);
	r.c = n;
	return r
};
_g.C.m = function(n) {
	var t = new _g.C;
	try {
		t.c = _g.C.r(n.FolderId);
		t.b = _g.C.b(n.View, 1, 4, "View");
		t.i = _g.C.b(n.Width, 0, Number.MAX_VALUE, "Width");
		t.g = _g.C.b(n.SortOrder, 0, 1, "SortOrder");
		t.f = _g.C.b(n.SortColumn, 1, 12, "SortColumn");
		t.e = _g.C.b(n.ReadingPanePosition, 0, 3, "ReadingPanePosition");
		t.h = _g.C.q(n.IsExpanded);
		t.j = _g.C.b(n.SearchScope, 0, 3, "SearchScope")
	} catch(i) {
		return null
	}
	return t
};
_g.C.l = function(n) {
	var t = {};
	t.FolderId = n.c;
	t.View = n.a();
	t.Width = n.i;
	t.SortOrder = n.g;
	t.SortColumn = n.f;
	t.ReadingPanePosition = n.e;
	t.IsExpanded = n.h;
	t.SearchScope = n.j;
	return t
};
_g.C.a = function(n, t) {
	switch(_g.C.j(n)) {
		case "drafts":
			return _g.a.a().E ? "ItemLastModifiedTime" : "DateTimeCreated";
		case "outbox":
			return "DateTimeCreated";
		case "sentitems":
			return "DateTimeSent";
		case "deleteditems":
		case "recoverableitemsdeletions":
			return _g.C.c;
		default:
			return t
	}
};
_g.C.i = function(n, t) {
	return _g.C.j(n) === "deleteditems" ? _g.C.f : t
};
_g.C.j = function(n) {
	return _g.r.isInstanceOfType(n) ? n.Id : _g.b.a.idToName(n)
};
_g.C.k = function(n, t, i, r, u) {
	var f = new _g.C;
	f.b = _g.C.n(n, t, i || r);
	f.i = 375;
	if(n === "todosearch") {
		f.g = 0;
		f.f = 11
	} else {
		f.g = 1;
		f.f = 1
	}
	f.e = 3;
	f.h = !1;
	f.j = _g.C.o(n, i, u);
	return f
};
_g.C.n = function(n, t, i) {
	return i ? 3 : n === "drafts" || n === "junkemail" || n === "outbox" || n === "notes" ? 3 : n === "deleteditems" || n === "recoverableitemsdeletions" ? 2 : _g.C.p(t) ? 4 : 1
};
_g.C.p = function(n) {
	return _g.C.e && Array.contains(_g.C.g, n.Id)
};
_g.C.o = function(n, t, i) {
	if(i) return 2;
	else if(n === "inbox" && !t) return 0;
	return 2
};
_g.C.q = function(n) {
	if(!Boolean.isInstanceOfType(n)) throw Error.argumentType("value", Object.getType(n), Boolean, "");
	return n
};
_g.C.b = function(n, t, i, r) {
	_g.C.s(n, r);
	var u = n;
	_a.c.e(u, t, i, r);
	return n
};
_g.C.s = function(n, t) {
	if(!Number.isInstanceOfType(n)) throw Error.argument(t, "is not a number ");
	return n
};
_g.C.r = function(n) {
	if(!n) throw Error.argumentNull("FolderId", "is null or undefined ");
	return n
};
_g.C.prototype = {
	c: null,
	b: 0,
	i: 0,
	g: 0,
	f: 0,
	e: 0,
	h: !1,
	j: 0,
	d: !1,
	a: function() {
		return this.b === 3 || this.b === 4 || this.b === 5 ? this.b : _g.a.a().E ? _g.a.a().b().u().b ? 1 : 2 : this.b
	},
	k: function(n) {
		if(n === 3 || n === 4 || n === 5) {
			this.b = n;
			this.d = !0;
			return n
		}
		if(_g.a.a().E) {
			var t = _g.a.a().b();
			t.u().d(n === 1);
			t.Z(_g.a.a().b().x);
			if(this.b === 4) {
				this.b = n;
				this.d = !0
			}
			return n
		}
		if(this.b !== n) {
			this.b = n;
			this.d = !0
		}
		return n
	},
	n: function(n) {
		if(this.g !== n) {
			this.g = n;
			this.d = !0
		}
		return n
	},
	m: function(n) {
		if(this.f !== n) {
			this.f = n;
			this.d = !0
		}
		return n
	},
	l: function(n) {
		if(this.e !== n) {
			this.e = n;
			this.d = !0
		}
		return n
	},
	p: function(n) {
		if(this.h !== n) {
			this.h = n;
			this.d = !0
		}
		return n
	},
	q: function(n) {
		if(this.j !== n) {
			this.j = n;
			this.d = !0
		}
		return n
	},
	o: function() {
		return this.d
	}
};
_g.eb = function(n) {
	_g.eb.initializeBase(this, [n || new _g.eR]);
	this.bR();
	_a.s.a(this, "_GroupsSets")
};
_g.eb.$$cctor = function() {
	_a.m.a(_g.eb, _g.eR, _g.eb._C)
};
_g.eb._C = function(n) {
	return new _g.eb(n)
};
_g.eb.prototype = {
	b: function() {
		var i = !1;
		if(this.a())
			for(var t = 0; t < this.a().b(); t++) {
				var n = this.a().a(t);
				if(n && n.Groups && n.Groups.length > 0) {
					i = !0;
					break
				}
			}
		return i
	},
	a: function() {
		return this.bP(_g.eQ, "UnifiedGroupsSets")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.c(n)
	},
	c: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.ld.prototype.C.call(this, n);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["UnifiedGroupsSets"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.hD = function() {
	this.a = -1
};
_g.hD.a = function(n) {
	var t = new _g.hD;
	try {
		var i = JsonParser.deserialize(n);
		t.a = Number.isInstanceOfType(i.Width) ? i.Width : -1;
		Boolean.isInstanceOfType(i.IsConversationView) ? t.d(i.IsConversationView) : t.d(!0)
	} catch(r) {
		t.d(!0)
	}
	return t
};
_g.hD.prototype = {
	b: !1,
	c: !1,
	f: function(n) {
		if(this.a !== n) {
			this.a = n;
			this.c = !0
		}
		return n
	},
	d: function(n) {
		if(this.b !== n) {
			this.b = n;
			this.c = !0
		}
		return n
	},
	e: function() {
		var n = {};
		n.Width = this.a;
		n.IsConversationView = this.b;
		return n
	}
};
_g.bc = function(n) {
	this.f = Function.createDelegate(this, this.g);
	_g.bc.initializeBase(this);
	n || (n = new _g.eE);
	this.d(n);
	_a.s.a(this, "_MasterCategoryList")
};
_g.bc.$$cctor = function() {
	_a.m.a(_g.bc, _g.eE, _g.bc._C)
};
_g.bc.a = function(n, t, i, r) {
	t && (r || i);
	var f = !!n && n.b() > 0;
	var o = null;
	var e = !1;
	if(t) t && f && (o = new _a.k);
	else {
		var u = new _a.k;
		f && u.g(n.e());
		if(f && i && u.j(i)) {
			u.l(i);
			e = !0
		}
		if(r && !u.j(r)) {
			u.r(0, r);
			e = !0
		}
		e && (o = u)
	}
	return o
};
_g.bc.b = function(n, t, i, r) {
	t && (r || i);
	var f = !!n && n.b() > 0;
	var o = null;
	var e = !1;
	if(t) t && f && (o = new _a.k);
	else {
		var u = new _a.k;
		f && u.g(n.e());
		if(f && i && u.j(i)) {
			u.l(i);
			e = !0
		}
		if(r && !u.j(r)) {
			u.r(0, r);
			e = !0
		}
		e && (o = u)
	}
	return o
};
_g.bc._C = function(n) {
	return new _g.bc(n)
};
_g.bc.prototype = {
	e: function(n) {
		var t = [];
		n && n.length > 0 && Array.addRange(t, n);
		Array.addRange(t, this.a().f.d());
		t.sort(this.f);
		return t
	},
	c: function(n) {
		for(var i, t = 0; t < this.a().f.b(); t++) {
			i = this.a().f.c(t);
			if(i.bH.Name === n) return i
		}
		return null
	},
	g: function(n, t) {
		var r = n.bH.Name.toLowerCase();
		var i = t.bH.Name.toLowerCase();
		return r.localeCompare(i)
	},
	a: function() {
		return this.ca(_g.bg, _g.bC, "MasterList")
	},
	b: function(n) {
		this.bO("MasterList", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.h(n)
	},
	h: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var i = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.bg, _g.bC))(n)
			}, ["MasterList", "DefaultList"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bO = function(n) {
	_g.bO.resolveInheritance();
	this.r = this.J;
	_g.bO.initializeBase(this, [n || new _g.eO]);
	this.bR();
	_a.s.a(this, "_SafetyUserOptions")
};
_g.bO.$$cctor = function() {
	_a.m.a(_g.bO, _g.eO, _g.bO._C)
};
_g.bO.b = function() {
	if(!_g.bO.a) {
		var n = {};
		n.ReportToExternalSender = "Boolean";
		n.BlockContentFromUnknownSenders = "Boolean";
		n.TrustedListsOnly = "Boolean";
		_g.bO.a = n
	}
	return _g.bO.a
};
_g.bO._C = function(n) {
	return new _g.bO(n)
};
_g.bO.prototype = {
	f: null,
	a: !1,
	b: null,
	e: function(n) {
		if(this.a !== n) {
			this.a = n;
			this.eH("TrustedListsOnly")
		}
		return n
	},
	j: function(n) {
		this.b !== n && (this.b = n);
		return n
	},
	g: function() {
		return this.f
	},
	t: function() {
		return this.bH
	},
	s: function() {
		return "Safety.UserOptions"
	},
	_SafetyUserOptions: function() {
		this.f = new _g.fg(this, _g.bO.b())
	},
	c: function(n) {
		this.bI("ReportToExternalSender", n);
		return n
	},
	h: function(n) {
		this.bI("BlockContentFromUnknownSenders", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.l(n)
	},
	l: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.ld.prototype.C.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.E = function(n) {
	_g.E.initializeBase(this);
	n || (n = new _g.dN);
	this.d(n);
	_a.s.a(this, "_SessionSettings")
};
_g.E.$$cctor = function() {
	_a.m.a(_g.E, _g.dN, _g.E._C)
};
_g.E._C = function(n) {
	return new _g.E(n)
};
_g.E.prototype = {
	c: !1,
	f: function() {
		var n = this.bH.UserEmailAddress;
		if(n) {
			var t = n.indexOf("@");
			if(t > -1) return n.substr(t, n.length - t)
		}
		return null
	},
	b: function() {
		return this.bP(String, "UserProxyAddresses")
	},
	h: function(n) {
		this.bO("UserProxyAddresses", n);
		return n
	},
	a: function() {
		return this.bP(String, "NotManagedEmailAddresses")
	},
	g: function(n) {
		this.bO("NotManagedEmailAddresses", n);
		return n
	},
	l: function(n) {
		this.bI("DefaultFromAddress", n);
		return n
	},
	n: function(n) {
		this.bI("UserCulture", n);
		return n
	},
	m: function(n) {
		this.bI("IsUserCultureRightToLeft", n);
		return n
	},
	e: function() {
		return this.bP(_g.hg, "ConnectedAccountInfos")
	},
	j: function(n) {
		this.bO("ConnectedAccountInfos", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.o(n)
	},
	o: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var u = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["UserProxyAddresses", "NotManagedEmailAddresses", "DefaultFolderNames"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["DefaultFolderIds"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ConnectedAccountInfos"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ff = function(n, t) {
	this.a = n;
	this.b = t
};
_g.ff.b = function(n) {
	return _g.ff.a(n) ? new _g.ff(n.c().bH.SharePointTitle, n.c().bH.SharePointUrl) : null
};
_g.ff.a = function(n) {
	return !!n.c().bH.SharePointTitle && !!n.c().bH.SharePointUrl
};
_g.ff.prototype = {
	a: null,
	b: null
};

function SmimeControlSettings() {}
SmimeControlSettings.prototype = {
	CodePage: 0,
	CertificateSubjects: null,
	Culture: null,
	AttachmentSizeLimit: 0,
	OwaVersion: null,
	Strings: null,
	AllowUserChoiceOfSigningCertificate: !1,
	IncludeCertificateChainWithoutRootCertificate: !1,
	IncludeCertificateChainAndRootCertificate: !1,
	EncryptTemporaryBuffers: !1,
	SignedEmailCertificateInclusion: !1,
	IncludeSmimeCapabilitiesInMessage: !1,
	CopyRecipientHeaders: !1,
	OnlyUseSmartCard: !1,
	UseKeyIdentifier: !1,
	EncryptionAlgorithms: null,
	SigningAlgorithms: null,
	DiagnosticDumpsEnabled: !1,
	OwaControlVersion: null,
	a: function(n) {
		this.AllowUserChoiceOfSigningCertificate = n.AllowUserChoiceOfSigningCertificate;
		this.IncludeCertificateChainWithoutRootCertificate = n.IncludeCertificateChainWithoutRootCertificate;
		this.IncludeCertificateChainAndRootCertificate = n.IncludeCertificateChainAndRootCertificate;
		this.EncryptTemporaryBuffers = n.EncryptTemporaryBuffers;
		this.SignedEmailCertificateInclusion = n.SignedEmailCertificateInclusion;
		this.IncludeSmimeCapabilitiesInMessage = n.IncludeSMIMECapabilitiesInMessage;
		this.CopyRecipientHeaders = n.CopyRecipientHeaders;
		this.OnlyUseSmartCard = n.OnlyUseSmartCard;
		this.UseKeyIdentifier = n.UseKeyIdentifier;
		this.EncryptionAlgorithms = n.EncryptionAlgorithms;
		this.SigningAlgorithms = n.SigningAlgorithms
	}
};

function SmimeStrings() {
	this.PickCertDialogTitle = _wss.i.I;
	this.PickCertToEncrypt = _wss.i.P;
	this.PickCertToSign = _wss.i.C;
	this.PickCertToEncryptNotFound = _wss.i.E;
	this.PickCertToSignNotFound = _wss.i.D;
	this.PickEncryptCertToSign = _wss.i.J;
	this.ChooseAttachmentDialogTitle = _wss.i.c;
	this.SaveAttachmentDialogTitle = _wss.i.Q;
	this.TooLargeToBeAttached = _wss.i.K;
	this.ImageFilesFilter = _wss.i.Y;
	this.ExternalImageWarning = _wss.i.U;
	this.ExternalImageAltText = _wss.i.g
}
_g.A = function() {};
_g.A.e = function() {
	_g.A.a || _g.A.k();
	return _g.A.a
};
_g.A.m = function() {
	_g.A.b || _g.A.k();
	return _g.A.b
};
_g.A.n = function() {
	for(var i = new Array(_g.A.i), r = 0, n = 0; n < 100; n++) {
		var t = _g.A.e()[n];
		t && (i[r++] = _g.bg.c(n, t))
	}
	return i
};
_g.A.d = function(n) {
	var t = _g.A.e()[n];
	return t ? t : null
};
_g.A.g = function(n) {
	var t = _g.A.d(n);
	t || (t = _g.A.c[n]);
	return t ? t : null
};
_g.A.f = function(n) {
	for(var t = 0; t < 100; t++)
		if(_g.A.e()[t] === n || _g.A.c[t] === n) return t;
	return -1
};
_g.A.k = function() {
	_g.A.i = _g.A.h.length;
	_g.A.a = new Array(100);
	_g.A.a[15] = _wss.i.h;
	_g.A.a[53] = _wss.i.f;
	_g.A.a[55] = _wss.i.B;
	_g.A.a[63] = _wss.i.H;
	_g.A.a[69] = _wss.i.d;
	_g.A.a[77] = _wss.i.Z;
	_g.A.a[81] = _wss.i.L;
	_g.A.a[83] = _wss.i.T;
	_g.A.a[85] = _wss.i.N;
	_g.A.l = _g.A.j.length;
	_g.A.c = new Array(100);
	_g.A.c[5] = _wss.i.e;
	_g.A.b = [];
	Array.addRange(_g.A.b, _g.A.j);
	Array.addRange(_g.A.b, _g.A.h)
};
_g.a = function(n) {
	this.L = {};
	this.P = {};
	this.N = undefined;
	this.w = this.u;
	_g.a.initializeBase(this);
	n || (n = new _g.cy);
	this.d(n);
	_a.s.a(this, "_UserConfiguration")
};
_g.a.$$cctor = function() {
	_a.m.a(_g.a, _g.cy, _g.a._C)
};
_g.a.a = function() {
	if(!_g.a.b) {
		_g.a.b = new _g.a(_g.a.c());
		_g.a.b.Q = !0
	}
	return _g.a.b
};
_g.a.c = function() {
	var i = new _g.cy;
	var n = new _g.dU;
	n.TimeZone = null;
	n.WeekStartDay = 0;
	n.HourIncrement = 0;
	n.FirstWeekOfYear = 0;
	n.SpellingDictionaryLanguage = 0;
	n.MarkAsReadDelaytime = 0;
	n.NavigationBarWidth = 0;
	n.NavigationBarWidthRatio = "1.0";
	n.ShowUpNext = !0;
	n.MailFolderPaneExpanded = !1;
	n.IsFavoritesFolderTreeCollapsed = !1;
	n.IsMailRootFolderTreeCollapsed = !1;
	n.IsHashtagTreeCollapsed = !1;
	n.IsGroupsTreeCollapsed = !1;
	n.GroupSuggestionDismissalCount = 0;
	n.GroupSuggestionDismissalDate = null;
	n.TasksSearchScope = 0;
	n.UseDataCenterCustomTheme = 0;
	n.CheckForForgottenAttachments = !0;
	n.WorkingHours = new _g.dj;
	n.WorkingHours.WorkDays = 0;
	n.WorkingHours.WorkHoursEndTimeInMinutes = 0;
	n.WorkingHours.WorkHoursStartTimeInMinutes = 0;
	n.DefaultReminderTimeInMinutes = 15;
	n.TimeZone = "Pacific Standard Time";
	n.ShowInferenceUiElements = !1;
	n.ActiveSurvey = 0;
	n.CompletedSurveys = 0;
	n.DismissedSurveys = 0;
	n.LastSurveyDate = null;
	n.IsInferenceSurveyComplete = !1;
	n.InferenceSurveyDate = null;
	n.ModernGroupsFirstUseDate = null;
	n.ModernGroupsLastUseDate = null;
	n.ModernGroupsUseCount = 0;
	n.DontShowSurveys = !1;
	n.HasShownClutterBarIntroductionMouse = !1;
	n.HasShownClutterDeleteAllIntroductionMouse = !1;
	n.HasShownClutterBarIntroductionTNarrow = !1;
	n.HasShownClutterDeleteAllIntroductionTNarrow = !1;
	n.HasShownClutterBarIntroductionTWide = !1;
	n.HasShownClutterDeleteAllIntroductionTWide = !1;
	n.ShowReadingPaneOnFirstLoad = !1;
	n.NavigationPaneViewOption = 0;
	n.ReportJunkSelected = !1;
	n.CheckForReportJunkDialog = !1;
	n.HasShownIntroductionForModernGroups = !1;
	n.LearnabilityTypesShown = 0;
	n.CalendarSearchUseCount = 0;
	n.FrequentlyUsedFolders = null;
	n.BuildGreenLightSurveyLastShownDate = null;
	n.ArchiveFolderId = null;
	n.MruEmojis = null;
	n.WeatherEnabled = 0;
	n.WeatherUnit = 0;
	n.WeatherLocations = new Array(0);
	n.IsFocusedInboxCapable = !1;
	n.IsFocusedInboxEnabled = !1;
	n.IsFocusedInboxOnAdminLastUpdateTime = null;
	n.IsFocusedInboxOnLastUpdateTime = null;
	i.UserOptions = n;
	var r = new _g.dN;
	r.UserCulture = null;
	r.IsPublicComputerSession = !0;
	i.SessionSettings = r;
	var e = new _g.gr;
	i.PolicySettings = e;
	var t = new _g.db;
	t.CalendarViewTypeNarrow = 1;
	t.CalendarViewTypeWide = 4;
	t.CalendarViewTypeDesktop = 4;
	t.CalendarSidePanelIsExpanded = !0;
	t.CalendarAgendaViewIsExpandedMouse = !0;
	t.CalendarAgendaViewIsExpandedTWide = !0;
	t.SchedulingViewType = 1;
	t.SearchHistory = new Array(0);
	t.BookingCalendarViewType = 1;
	t.SelectedBookingSubModule = 1;
	t.BookingSidePanelIsExpanded = !0;
	t.BookingsTilesDismissed = 0;
	t.BookingsTilesVisited = 0;
	t.EdgePromotionRejectedLast = !1;
	t.PinnedComposeAddin = null;
	t.PinnedReadAddin = null;
	i.ViewStateConfiguration = t;
	var f = new _g.dM;
	i.SegmentationSettings = f;
	var u = new _g.ds;
	i.ApplicationSettings = u;
	i.MaxRecipientsPerMessage = 2e3;
	i.PublicComputersDetectionEnabled = !1;
	return i
};
_g.a._C = function(n) {
	return new _g.a(n)
};
_g.a.prototype = {
	M: null,
	Q: !1,
	S: !1,
	O: function() {
		if(this.N === undefined) {
			var t = !1;
			var i;
			if(this.G() && this.G().b() > 0)
				for(var n = 0; n < this.G().b(); n++) {
					i = this.G().a(n);
					if(!i.IsArchive) {
						t = !0;
						break
					}
				}
			this.N = t
		}
		return this.N
	},
	o: function() {
		return this.a().bH.TimeFormat
	},
	r: function() {
		return this.a().bH.DateFormat
	},
	m: function() {
		return this.a().bH.TimeZone
	},
	H: null,
	q: function() {
		return this.H
	},
	x: function(n) {
		this.H = n;
		return n
	},
	u: function() {
		return this.c().bH.UserCulture
	},
	z: function() {
		return this.a().bH.WeekStartDay
	},
	y: function() {
		return this.a().cf()
	},
	v: function() {
		var n = this.o();
		return !!n && n.indexOf("H") > -1
	},
	t: function() {
		if(!this.M) {
			this.M = new _a.eu;
			var t = this.a().bH.MailboxTimeZoneOffset;
			var n = t;
			n = n || new Array(0);
			this.M.h(n)
		}
		return this.M
	},
	T: function() {
		return this.e() && this.c() ? this.e().bH.InstantMessage && (this.E || !_j.h.b(this.c().bH.UserSipUri)) : !1
	},
	U: function() {
		return this.c().bH.IsPublicLogon || this.bH.PublicComputersDetectionEnabled && this.c().bH.IsPublicComputerSession
	},
	g: function() {
		return this.c().bH.IsUserCultureRightToLeft
	},
	E: !1,
	j: function() {
		return this.E
	},
	R: function() {
		for(var u = this.c().bH, i = this.c().bH.DefaultFolderNames, f = u.DefaultFolderIds, e = i ? i.length : 0, t = 0; t < e; t++) {
			var n = f[t];
			if(n) {
				n.__type = _g.m._dataContractName;
				var r = i[t].toLowerCase();
				this.L[r] = n;
				this.P[n.Id] = r
			}
		}
	},
	K: function(n, t) {
		t.__type = _g.m._dataContractName;
		if(!(n in this.L)) {
			this.L[n] = t;
			this.P[t.Id] = n
		}
	},
	nameToId: function(n) {
		return this.L[n] || null
	},
	idToName: function(n) {
		return n ? this.P[n.Id] || _g.bb.a : _g.bb.a
	},
	doesIdEqualName: function(n, t) {
		var i = this.idToName(n);
		return i === t
	},
	a: function() {
		return this.bS(_g.Z, "UserOptions")
	},
	c: function() {
		return this.bS(_g.E, "SessionSettings")
	},
	e: function() {
		return this.bS(_g.bI, "SegmentationSettings")
	},
	f: function() {
		return this.bH.AttachmentPolicy
	},
	l: function() {
		return this.bH.PolicySettings
	},
	n: function() {
		return this.bS(_g.dm, "ApplicationSettings")
	},
	b: function() {
		return this.bS(_g.by, "ViewStateConfiguration")
	},
	h: function() {
		return this.bS(_g.bc, "MasterCategoryList")
	},
	V: function(n) {
		this.bI("SmimeAdminSettings", n);
		return n
	},
	p: function() {
		return this.bS(_g.bO, "SafetyUserOptions")
	},
	I: function() {
		return this.bS(_g.eb, "GroupsSets")
	},
	G: function() {
		return this.bP(_g.eN, "RetentionPolicyTags")
	},
	s: function() {
		return this.bH.RecoverDeletedItemsEnabled
	},
	A: function() {
		return this.bH.HexCID
	},
	D: function() {
		return this.bH.IsConsumerChild
	},
	C: function() {
		return this.bH.AdMarket
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.W(n)
	},
	W: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var h = this;
			this.bN(function(n) {
				return new _g.Z(n)
			}, ["UserOptions"], n, t);
			var s = this;
			this.bN(function(n) {
				return new _g.E(n)
			}, ["SessionSettings"], n, t);
			var c = this;
			this.bN(function(n) {
				return new _g.bI(n)
			}, ["SegmentationSettings"], n, t);
			var a = this;
			this.bN(function(n) {
				return new _g.dm(n)
			}, ["ApplicationSettings"], n, t);
			var l = this;
			this.bN(function(n) {
				return new _g.by(n)
			}, ["ViewStateConfiguration"], n, t);
			var o = this;
			this.bN(function(n) {
				return new _g.bc(n)
			}, ["MasterCategoryList"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _g.bO(n)
			}, ["SafetyUserOptions"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _g.eb(n)
			}, ["GroupsSets"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["RetentionPolicyTags"], n, t);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["FlightConfiguration"], n, t);
			var f = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["OutlookFavorites"], n, t);
			this.cg(["WhenOutlookFavoritesChanged"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.fg = function(n, t) {
	this.f = Function.createDelegate(this, this.i);
	this.c = {};
	this.d = n;
	this.d.r(this.f);
	this.e = t
};
_g.fg.prototype = {
	d: null,
	e: null,
	b: function() {
		return this.d.s()
	},
	g: function() {
		this.c = {}
	},
	a: function() {
		var r = _ff.i.a(this.c);
		if(!r) return null;
		var u = new Array(r);
		var i = 0;
		var n = this.c;
		for(var t in n) {
			var f = {
				key: t,
				value: n[t]
			};
			u[i] = this.h(f);
			i++
		}
		return u
	},
	i: function(n, t) {
		if(t in this.e) {
			var i = this.e[t];
			var u = new _g.cA(i);
			var r = this.d.t()[t];
			u.Value = i === "Boolean" ? [r ? r.toString() : "false"] : i === "Integer32" || i === "Integer64" || i === "UnsignedInteger32" || i === "UnsignedInteger64" || i === "Byte" ? [Number.isInstanceOfType(r) ? r.toString() : null] : i !== "StringArray" ? [r ? r.toString() : null] : r;
			this.c[t] = u
		}
	},
	h: function(n) {
		var t = new _g.dT(new _g.cA("String"));
		t.DictionaryKey.Value = [n.key];
		t.DictionaryValue = n.value;
		return t
	}
};
_g.Z = function(n) {
	_g.Z.resolveInheritance();
	this.r = this.J;
	_g.Z.initializeBase(this, [n || new _g.dU]);
	this.bR();
	_a.s.a(this, "_UserOptions")
};
_g.Z.$$cctor = function() {
	_a.m.a(_g.Z, _g.dU, _g.Z._C)
};
_g.Z.b = function() {
	if(!_g.Z.a) {
		var n = {};
		n.SendAsMruAddresses = "StringArray";
		n.CheckForForgottenAttachments = "Boolean";
		n.NewEnabledPonts = "Integer32";
		n.NavigationBarWidth = "Integer32";
		n.NavigationBarWidthRatio = "String";
		n.MailFolderPaneExpanded = "Boolean";
		n.IsMailRootFolderTreeCollapsed = "Boolean";
		n.IsFavoritesFolderTreeCollapsed = "Boolean";
		n.IsHashtagTreeCollapsed = "Boolean";
		n.IsGroupsTreeCollapsed = "Boolean";
		n.GroupSuggestionDismissalCount = "Integer32";
		n.GroupSuggestionDismissalDate = "String";
		n.FormatBarState = "Integer32";
		n.MruFonts = "StringArray";
		n.AutoAddSignatureOnMobile = "Boolean";
		n.SignatureTextOnMobile = "String";
		n.UseDesktopSignature = "Boolean";
		n.IsOptimizedForAccessibility = "Boolean";
		n.ShowInferenceUiElements = "Boolean";
		n.ClutterTimeWindow = "Integer32";
		n.ShowUpNext = "Boolean";
		n.NumberOfEmailsWouldGoToClutter = "Integer32";
		n.ClutterTimeWindowUnit = "Integer32";
		n.HasEverClassifiedAsClutter = "Boolean";
		n.KeyboardShortcutsMode = "Integer32";
		n.ActiveSurvey = "Integer32";
		n.CompletedSurveys = "Integer32";
		n.DismissedSurveys = "Integer32";
		n.LastSurveyDate = "String";
		n.DontShowSurveys = "Boolean";
		n.InferenceSurveyDate = "String";
		n.IsInferenceSurveyComplete = "Boolean";
		n.HasShownClutterBarIntroductionMouse = "Boolean";
		n.HasShownClutterDeleteAllIntroductionMouse = "Boolean";
		n.HasShownClutterReadyIntroductionMouse = "Boolean";
		n.HasShownClutterBarIntroductionTNarrow = "Boolean";
		n.HasShownClutterDeleteAllIntroductionTNarrow = "Boolean";
		n.HasShownClutterReadyIntroductionTNarrow = "Boolean";
		n.HasShownClutterBarIntroductionTWide = "Boolean";
		n.HasShownClutterDeleteAllIntroductionTWide = "Boolean";
		n.HasShownClutterReadyIntroductionTWide = "Boolean";
		n.ShowReadingPaneOnFirstLoad = "Boolean";
		n.NavigationPaneViewOption = "Integer32";
		n.SmimeEncrypt = "Boolean";
		n.SmimeSign = "Boolean";
		n.ManuallyPickCertificate = "Boolean";
		n.SigningCertificateSubject = "String";
		n.SigningCertificateId = "String";
		n.ReportJunkSelected = "Boolean";
		n.CheckForReportJunkDialog = "Boolean";
		n.HasShownIntroductionForModernGroups = "Boolean";
		n.LearnabilityTypesShown = "Integer32";
		n.ModernGroupsFirstUseDate = "String";
		n.ModernGroupsLastUseDate = "String";
		n.ModernGroupsUseCount = "Integer32";
		n.CalendarSearchUseCount = "Integer32";
		n.FrequentlyUsedFolders = "StringArray";
		n.FavoriteFolders = "StringArray";
		n.BuildGreenLightSurveyLastShownDate = "String";
		n.ArchiveFolderId = "String";
		n.MruEmojis = "StringArray";
		n.WeatherEnabled = "Integer32";
		n.WeatherUnit = "Integer32";
		n.WeatherLocationBookmark = "Integer32";
		n.WeatherLocations = "StringArray";
		n.IsReplyAllTheDefaultResponse = "Boolean";
		n.IsZenSubscribed = "Boolean";
		n.HideUserVoiceSatisfactionWidget = "Boolean";
		n.UserVoiceSatisfactionWidgetFirstUseDate = "String";
		n.MailSendUndoInterval = "Integer32";
		n.ExtensibilityMinibarOn = "Boolean";
		n.IsFocusedInboxCapable = "Boolean";
		n.IsFocusedInboxEnabled = "Boolean";
		n.IsFocusedInboxOnAdminOverride = "Boolean";
		n.IsFocusedInboxOnLastUpdateTime = "String";
		n.IsFocusedInboxOnAdminLastUpdateTime = "String";
		n.IsFocusedInboxFeatureSupported = "Boolean";
		n.FocusedInboxServerOverride = "Boolean";
		_g.Z.a = n
	}
	return _g.Z.a
};
_g.Z._C = function(n) {
	return new _g.Z(n)
};
_g.Z.prototype = {
	u: null,
	h: function() {
		return this.u
	},
	s: function() {
		return "OWA.UserOptions"
	},
	t: function() {
		return this.bH
	},
	b: function() {
		return this.q() !== "AlwaysSend"
	},
	X: function() {
		return this.I() === 1 || this.I() === 4
	},
	y: function(n, t) {
		return n && this.bH.DefaultMeetingDuration >= 0 ? this.bH.DefaultMeetingDuration * 6e4 : t
	},
	dg: function(n) {
		this.bI("IsFocusedInboxOnLastUpdateTime", n)
	},
	_UserOptions: function() {
		this.u = new _g.fg(this, _g.Z.b())
	},
	cd: function(n) {
		this.bI("WeekStartDay", n);
		return n
	},
	bu: function(n) {
		this.bI("HourIncrement", n);
		return n
	},
	bC: function(n) {
		this.bI("ShowWeekNumbers", n);
		return n
	},
	cf: function() {
		return this.bQ("FirstWeekOfYear", 0)
	},
	ba: function(n) {
		this.bI("FirstWeekOfYear", n);
		return n
	},
	P: function() {
		return this.bQ("WeatherEnabled", 0)
	},
	bY: function(n) {
		this.bI("WeatherEnabled", n);
		return n
	},
	bn: function() {
		return this.bQ("WeatherUnit", 0)
	},
	cc: function(n) {
		this.bI("WeatherUnit", n);
		return n
	},
	D: function() {
		return this.bP(_g.dh, "WeatherLocations")
	},
	bZ: function(n) {
		this.bO("WeatherLocations", n);
		return n
	},
	bi: function(n) {
		this.bI("WeatherLocationBookmark", n);
		return n
	},
	H: function() {
		return this.bQ("LocalEventsEnabled", 0)
	},
	be: function(n) {
		this.bI("LocalEventsEnabled", n);
		return n
	},
	bx: function(n) {
		this.bI("LocalEventsLocation", n);
		return n
	},
	bs: function(n) {
		this.bI("EnableReminders", n);
		return n
	},
	cA: function(n) {
		this.bI("EnableReminderSound", n);
		return n
	},
	A: function() {
		return this.bQ("NewItemNotify", 0)
	},
	S: function(n) {
		this.bI("NewItemNotify", n);
		return n
	},
	bT: function(n) {
		this.bI("SmimeEncrypt", n);
		return n
	},
	bU: function(n) {
		this.bI("SmimeSign", n);
		return n
	},
	cj: function(n) {
		this.bI("AlwaysShowBcc", n);
		return n
	},
	ck: function(n) {
		this.bI("AlwaysShowFrom", n);
		return n
	},
	m: function() {
		return this.bQ("ComposeMarkup", "Html")
	},
	ct: function(n) {
		this.bI("ComposeMarkup", n);
		return n
	},
	cr: function(n) {
		this.bI("ComposeFontName", n);
		return n
	},
	cs: function(n) {
		this.bI("ComposeFontSize", n);
		return n
	},
	cp: function(n) {
		this.bI("ComposeFontColor", n);
		return n
	},
	ce: function() {
		return this.bQ("ComposeFontFlags", 0)
	},
	cq: function(n) {
		this.bI("ComposeFontFlags", n);
		return n
	},
	bp: function(n) {
		this.bI("AutoAddSignature", n);
		return n
	},
	cn: function(n) {
		this.bI("AutoAddSignatureOnReply", n);
		return n
	},
	bE: function(n) {
		this.bI("SignatureText", n);
		return n
	},
	bD: function(n) {
		this.bI("SignatureHtml", n);
		return n
	},
	cm: function(n) {
		this.bI("AutoAddSignatureOnMobile", n);
		return n
	},
	dd: function(n) {
		this.bI("SignatureTextOnMobile", n);
		return n
	},
	de: function(n) {
		this.bI("UseDesktopSignature", n);
		return n
	},
	f: function() {
		return this.bQ("PreviewMarkAsRead", "Delayed")
	},
	U: function(n) {
		this.bI("PreviewMarkAsRead", n);
		return n
	},
	L: function() {
		return this.bQ("EmailComposeMode", "Inline")
	},
	cx: function(n) {
		this.bI("EmailComposeMode", n);
		return n
	},
	W: function() {
		return this.bP(String, "SendAsMruAddresses")
	},
	bA: function(n) {
		this.bO("SendAsMruAddresses", n);
		return n
	},
	bq: function(n) {
		this.bI("CheckForForgottenAttachments", n);
		return n
	},
	e: function() {
		return this.bH.MarkAsReadDelaytime
	},
	bz: function(n) {
		this.bI("MarkAsReadDelaytime", n);
		return n
	},
	p: function() {
		return this.bQ("NextSelection", "Previous")
	},
	T: function(n) {
		this.bI("NextSelection", n);
		return n
	},
	q: function() {
		return this.bQ("ReadReceipt", "DoNotAutomaticallySend")
	},
	da: function(n) {
		this.bI("ReadReceipt", n);
		return n
	},
	cy: function(n) {
		this.bI("EmptyDeletedItemsOnLogoff", n);
		return n
	},
	cW: function(n) {
		this.bI("NavigationBarWidth", n);
		return n
	},
	cX: function(n) {
		this.bI("NavigationBarWidthRatio", n);
		return n
	},
	cU: function(n) {
		this.bI("MailFolderPaneExpanded", n);
		return n
	},
	cQ: function(n) {
		this.bI("IsFavoritesFolderTreeCollapsed", n);
		return n
	},
	cR: function(n) {
		this.bI("IsHashtagTreeCollapsed", n);
		return n
	},
	Q: function(n) {
		this.bI("IsGroupsTreeCollapsed", n);
		return n
	},
	dc: function(n) {
		this.bI("ShowReadingPaneOnFirstLoad", n);
		return n
	},
	I: function() {
		return this.bQ("NavigationPaneViewOption", 0)
	},
	cY: function(n) {
		this.bI("NavigationPaneViewOption", n);
		return n
	},
	cS: function(n) {
		this.bI("IsMailRootFolderTreeCollapsed", n);
		return n
	},
	bm: function() {
		return this.bP(String, "MruEmojis")
	},
	cV: function(n) {
		this.bO("MruEmojis", n);
		return n
	},
	bV: function(n) {
		this.bI("ThemeStorageId", n);
		return n
	},
	bv: function(n) {
		this.bI("IsOptimizedForAccessibility", n);
		return n
	},
	v: function() {
		return this.bQ("NewEnabledPonts", 0)
	},
	x: function(n) {
		this.bI("NewEnabledPonts", n);
		return n
	},
	by: function(n) {
		this.bI("ManuallyPickCertificate", n);
		return n
	},
	bG: function(n) {
		this.bI("SigningCertificateSubject", n);
		return n
	},
	bF: function(n) {
		this.bI("SigningCertificateId", n);
		return n
	},
	n: function() {
		return this.bQ("ConversationSortOrder", "Chronological")
	},
	br: function(n) {
		this.bI("ConversationSortOrder", n);
		return n
	},
	o: function() {
		return this.bH.HideDeletedItems
	},
	bt: function(n) {
		this.bI("HideDeletedItems", n);
		return n
	},
	db: function(n) {
		this.bI("SendAddressDefault", n);
		return n
	},
	w: function() {
		return this.bS(_g.cu, "WorkingHours")
	},
	cv: function(n) {
		this.bI("DefaultReminderTimeInMinutes", n);
		return n
	},
	N: function() {
		return this.bQ("KeyboardShortcutsMode", 0)
	},
	bw: function(n) {
		this.bI("KeyboardShortcutsMode", n);
		return n
	},
	a: function() {
		return this.bH.ShowInferenceUiElements
	},
	bB: function(n) {
		this.bI("ShowInferenceUiElements", n);
		return n
	},
	cG: function(n) {
		this.bI("HasShownClutterBarIntroductionMouse", n);
		return n
	},
	cJ: function(n) {
		this.bI("HasShownClutterDeleteAllIntroductionMouse", n);
		return n
	},
	cM: function(n) {
		this.bI("HasShownClutterReadyIntroductionMouse", n);
		return n
	},
	cH: function(n) {
		this.bI("HasShownClutterBarIntroductionTNarrow", n);
		return n
	},
	cK: function(n) {
		this.bI("HasShownClutterDeleteAllIntroductionTNarrow", n);
		return n
	},
	cN: function(n) {
		this.bI("HasShownClutterReadyIntroductionTNarrow", n);
		return n
	},
	cI: function(n) {
		this.bI("HasShownClutterBarIntroductionTWide", n);
		return n
	},
	cL: function(n) {
		this.bI("HasShownClutterDeleteAllIntroductionTWide", n);
		return n
	},
	cO: function(n) {
		this.bI("HasShownClutterReadyIntroductionTWide", n);
		return n
	},
	z: function() {
		return this.bQ("LearnabilityTypesShown", 0)
	},
	G: function(n) {
		this.bI("LearnabilityTypesShown", n);
		return n
	},
	bh: function(n) {
		this.bI("ShowSenderOnTopInListView", n);
		return n
	},
	bg: function(n) {
		this.bI("ShowPreviewTextInListView", n);
		return n
	},
	V: function(n) {
		this.bI("ShowUpNext", n);
		return n
	},
	cD: function(n) {
		this.bI("GlobalReadingPanePosition", n);
		return n
	},
	g: function() {
		return this.bH.ReportJunkSelected
	},
	l: function(n) {
		this.bI("ReportJunkSelected", n);
		return n
	},
	c: function() {
		return this.bH.CheckForReportJunkDialog
	},
	j: function(n) {
		this.bI("CheckForReportJunkDialog", n);
		return n
	},
	bc: function(n) {
		this.bI("IsInferenceSurveyComplete", n);
		return n
	},
	K: function(n) {
		this.bI("ActiveSurvey", n);
		return n
	},
	Y: function(n) {
		this.bI("CompletedSurveys", n);
		return n
	},
	cw: function(n) {
		this.bI("DismissedSurveys", n);
		return n
	},
	O: function() {
		return this.bW("LastSurveyDate")
	},
	R: function(n) {
		this.co("LastSurveyDate", n);
		return n
	},
	Z: function(n) {
		this.bI("DontShowSurveys", n);
		return n
	},
	bb: function(n) {
		this.co("InferenceSurveyDate", n);
		return n
	},
	bk: function() {
		return this.bP(String, "FrequentlyUsedFolders")
	},
	cC: function(n) {
		this.bO("FrequentlyUsedFolders", n);
		return n
	},
	M: function() {
		return this.bP(String, "FavoriteFolders")
	},
	cB: function(n) {
		this.bO("FavoriteFolders", n);
		return n
	},
	cl: function(n) {
		this.bI("ArchiveFolderId", n);
		return n
	},
	bX: function(n) {
		this.bI("UseBrightCalendarColorThemeInOwa", n);
		return n
	},
	bd: function(n) {
		this.bI("IsReplyAllTheDefaultResponse", n);
		return n
	},
	cT: function(n) {
		this.bI("LinkPreviewEnabled", n);
		return n
	},
	cP: function(n) {
		this.bI("HideUserVoiceSatisfactionWidget", n);
		return n
	},
	ci: function() {
		return this.bW("UserVoiceSatisfactionWidgetFirstUseDate")
	},
	df: function(n) {
		this.co("UserVoiceSatisfactionWidgetFirstUseDate", n);
		return n
	},
	bf: function(n) {
		this.bI("MailSendUndoInterval", n);
		return n
	},
	cu: function(n) {
		this.bI("DefaultMeetingDuration", n);
		return n
	},
	E: function(n) {
		this.bI("IsFocusedInboxEnabled", n);
		return n
	},
	cE: function(n) {
		this.bI("GroupSuggestionDismissalCount", n);
		return n
	},
	bl: function() {
		return this.bW("GroupSuggestionDismissalDate")
	},
	cF: function(n) {
		this.co("GroupSuggestionDismissalDate", n);
		return n
	},
	ch: function() {
		return this.bP(_g.hf, "UserProfileV2")
	},
	cZ: function(n) {
		this.bI("PreferAccessibleContent", n);
		return n
	},
	bj: function() {
		return this.bQ("ClientTypeOptInState", 0)
	},
	bo: function(n) {
		this.bI("AgendaPaneEnabled", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.dh(n)
	},
	dh: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.ld.prototype.C.call(this, n);
			var f = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["WeatherLocations"], n, t);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["SendAsMruAddresses", "MruFonts", "MruEmojis", "FrequentlyUsedFolders", "FavoriteFolders", "FavoriteNodes", "QuickNotes", "FavoriteTimezonesForDisplay"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _g.cu(n)
			}, ["WorkingHours"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["MailboxTimeZoneOffset"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["UserProfileV2"], n, t);
			this.cg(["LastSurveyDate", "PeopleIKnowFirstUseDate", "PeopleIKnowLastUseDate", "ModernGroupsFirstUseDate", "ModernGroupsLastUseDate", "BuildGreenLightSurveyLastShownDate", "InferenceSurveyDate", "UserVoiceSatisfactionWidgetFirstUseDate", "IsFocusedInboxOnLastUpdateTime", "IsFocusedInboxOnAdminLastUpdateTime", "GroupSuggestionDismissalDate"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.by = function(n) {
	this.j = {};
	_g.by.resolveInheritance();
	this.r = this.J;
	_g.by.initializeBase(this, [n || new _g.db]);
	this.bR();
	_a.s.a(this, "_ViewStateConfiguration")
};
_g.by.$$cctor = function() {
	_a.m.a(_g.by, _g.db, _g.by._C)
};
_g.by.b = function() {
	if(!_g.by.a) {
		var n = {};
		n.CalendarSidePanelIsExpanded = "Boolean";
		n.CalendarViewTypeDesktop = "Integer32";
		n.CalendarViewTypeNarrow = "Integer32";
		n.CalendarViewTypeWide = "Integer32";
		n.SchedulingViewType = "Integer32";
		n.SchedulingLastUsedRoomListName = "String";
		n.SchedulingLastUsedRoomListEmailAddress = "String";
		n.CalendarSidePanelMonthPickerCount = "Integer32";
		n.SearchHistory = "StringArray";
		n.FolderViewState = "StringArray";
		n.PeopleHubDisplayOption = "Integer32";
		n.PeopleHubSortOption = "Integer32";
		n.SelectedCalendarsDesktop = "StringArray";
		n.SelectedCalendarsTWide = "StringArray";
		n.SelectedCalendarsTNarrow = "StringArray";
		n.AttachmentsFilePickerViewTypeForMouse = "Integer32";
		n.AttachmentsFilePickerViewTypeForTouch = "Integer32";
		n.AttachmentsFilePickerHideBanner = "Boolean";
		n.AttachmentsFilePickerHideAddBox = "Boolean";
		n.AttachmentsFilePickerHideAddDropbox = "Boolean";
		n.AttachmentsFilePickerHideAddOneDriveConsumer = "Boolean";
		n.AttachmentsFilePickerHideAddGDrive = "Boolean";
		n.AttachOrShareLocalFiles = "Integer32";
		n.AttachOrShareCloudFiles = "Integer32";
		n.AttachOrShareGroupsFiles = "Integer32";
		n.BookmarkedWeatherLocations = "StringArray";
		n.CurrentWeatherLocationBookmarkIndex = "Integer32";
		n.TemperatureUnit = "Integer32";
		n.GlobalFolderViewState = "String";
		n.CalendarAgendaViewIsExpandedMouse = "Boolean";
		n.CalendarAgendaViewIsExpandedTWide = "Boolean";
		n.DefaultSystemCategoriesSetForFolderPane = "StringArray";
		n.SystemCategoriesToShowAsFilter = "StringArray";
		n.SystemCategoriesToShowInFolderPane = "StringArray";
		n.UserCategoriesToShowAsFilter = "StringArray";
		n.UserCategoriesToShowInFolderPane = "StringArray";
		n.ShowCategoryColumnOnMessageItems = "Boolean";
		n.MailLeftSwipeAction = "Integer32";
		n.MailRightSwipeAction = "Integer32";
		n.MailTriageOnHoverActions = "StringArray";
		n.FocusedViewWatermark = "String";
		n.FocusedInboxBitFlags = "Integer32";
		n.ClutterViewWatermark = "String";
		n.SelectedBookingMailbox = "String";
		n.SelectedBookingMailboxDisplayName = "String";
		n.SelectedBookingSubModule = "Integer32";
		n.BookingCalendarViewType = "Integer32";
		n.BookingSidePanelIsExpanded = "Integer32";
		n.BookingsTilesVisited = "Integer32";
		n.BookingsTilesDismissed = "Integer32";
		n.PeopleHubViewOptions = "String";
		n.BundleEntries = "StringArray";
		n.EdgePromotionRejectedLast = "Boolean";
		n.PinnedComposeAddin = "String";
		n.PinnedReadAddin = "String";
		_g.by.a = n
	}
	return _g.by.a
};
_g.by._C = function(n) {
	return new _g.by(n)
};
_g.by.prototype = {
	D: !1,
	E: !1,
	x: null,
	L: null,
	c: function() {
		return this.L
	},
	t: function() {
		return this.bH
	},
	s: function() {
		return "OWA.ViewStateConfiguration"
	},
	l: function(n) {
		if(n.o()) {
			this.j[n.c.Id] || (this.j[n.c.Id] = n);
			this.ce();
			n.d = !1;
			this.eH("FolderSettingsChanged")
		}
	},
	o: function(n) {
		this.apcl("FolderSettingsChanged", n)
	},
	v: function(n) {
		this.rpcl("FolderSettingsChanged", n)
	},
	z: function(n) {
		this.apcl("GlobalFolderSettingsChanged", n)
	},
	G: function(n) {
		this.rpcl("GlobalFolderSettingsChanged", n)
	},
	g: function(n, t, i) {
		this.be();
		var r = this.j[n.Id] || _g.C.d(n, t);
		if(i) {
			r.n(1);
			r.m(1)
		}
		return r
	},
	u: function() {
		if(!this.E) {
			this.x = _g.hD.a(this.bH.GlobalFolderViewState);
			this.E = !0
		}
		return this.x
	},
	Z: function(n) {
		if(n.c) {
			this.bA(JsonParser.serialize(n.e()));
			n.c = !1;
			this.eH("GlobalFolderSettingsChanged")
		}
	},
	_ViewStateConfiguration: function() {
		this.L = new _g.fg(this, _g.by.b())
	},
	M: function() {
		this.eH("FolderSettingsChanged")
	},
	ba: function() {
		this.eH("GlobalFolderSettingsChanged")
	},
	ce: function() {
		var i = [];
		var t = this.j;
		for(var n in t) {
			var u = {
				key: n,
				value: t[n]
			};
			var r = _g.C.l(u.value);
			Array.add(i, JsonParser.serialize(r))
		}
		this.bz(new _a.k(i))
	},
	be: function() {
		if(!this.D) {
			this.j = {};
			if(this.A()) {
				for(var i = this.A().b(), t = 0; t < i; t++) try {
					var n = _g.C.m(JsonParser.deserialize(this.A().a(t)));
					n && !_g.j.b(n.c) && (this.j[n.c.Id] = n)
				} catch(r) {}
				this.D = !0
			}
		}
	},
	bu: function(n) {
		this.bI("CalendarViewTypeNarrow", n);
		return n
	},
	bv: function(n) {
		this.bI("CalendarViewTypeWide", n);
		return n
	},
	bt: function(n) {
		this.bI("CalendarViewTypeDesktop", n);
		return n
	},
	br: function(n) {
		this.bI("CalendarSidePanelIsExpanded", n);
		return n
	},
	bs: function(n) {
		this.bI("CalendarSidePanelMonthPickerCount", n);
		return n
	},
	bb: function() {
		return this.bP(String, "SelectedCalendarsDesktop")
	},
	bV: function(n) {
		this.bO("SelectedCalendarsDesktop", n);
		return n
	},
	bd: function() {
		return this.bP(String, "SelectedCalendarsTWide")
	},
	bY: function(n) {
		this.bO("SelectedCalendarsTWide", n);
		return n
	},
	bc: function() {
		return this.bP(String, "SelectedCalendarsTNarrow")
	},
	bX: function(n) {
		this.bO("SelectedCalendarsTNarrow", n);
		return n
	},
	A: function() {
		return this.bP(String, "FolderViewState")
	},
	bz: function(n) {
		this.bO("FolderViewState", n);
		return n
	},
	bA: function(n) {
		this.bI("GlobalFolderViewState", n);
		return n
	},
	bT: function(n) {
		this.bI("SchedulingViewType", n);
		return n
	},
	b: function() {
		return this.bH.SchedulingLastUsedRoomListName
	},
	f: function(n) {
		this.bI("SchedulingLastUsedRoomListName", n);
		return n
	},
	a: function() {
		return this.bH.SchedulingLastUsedRoomListEmailAddress
	},
	e: function(n) {
		this.bI("SchedulingLastUsedRoomListEmailAddress", n);
		return n
	},
	w: function() {
		return this.bP(String, "SearchHistory")
	},
	K: function(n) {
		this.bO("SearchHistory", n);
		return n
	},
	T: function(n) {
		this.bI("PeopleHubDisplayOption", n);
		return n
	},
	U: function(n) {
		this.bI("PeopleHubSortOption", n);
		return n
	},
	bk: function(n) {
		this.bI("AttachmentsFilePickerViewTypeForMouse", n);
		return n
	},
	bl: function(n) {
		this.bI("AttachmentsFilePickerViewTypeForTouch", n);
		return n
	},
	bf: function(n) {
		this.bI("AttachmentsFilePickerHideAddBox", n);
		return n
	},
	bg: function(n) {
		this.bI("AttachmentsFilePickerHideAddDropbox", n);
		return n
	},
	bh: function(n) {
		this.bI("AttachmentsFilePickerHideAddFacebook", n);
		return n
	},
	bj: function(n) {
		this.bI("AttachmentsFilePickerHideAddOneDriveConsumer", n);
		return n
	},
	bi: function(n) {
		this.bI("AttachmentsFilePickerHideAddGDrive", n);
		return n
	},
	H: function(n) {
		this.bI("AttachOrShareLocalFiles", n);
		return n
	},
	Q: function(n) {
		this.bI("AttachOrShareCloudFiles", n);
		return n
	},
	R: function(n) {
		this.bI("AttachOrShareGroupsFiles", n);
		return n
	},
	bp: function(n) {
		this.bI("CalendarAgendaViewIsExpandedMouse", n);
		return n
	},
	bq: function(n) {
		this.bI("CalendarAgendaViewIsExpandedTWide", n);
		return n
	},
	q: function() {
		return this.bP(String, "SystemCategoriesToShowInFolderPane")
	},
	cd: function(n) {
		this.bO("SystemCategoriesToShowInFolderPane", n);
		return n
	},
	p: function() {
		return this.bP(String, "SystemCategoriesToShowAsFilter")
	},
	cc: function(n) {
		this.bO("SystemCategoriesToShowAsFilter", n);
		return n
	},
	n: function() {
		return this.bP(String, "UserCategoriesToShowInFolderPane")
	},
	Y: function(n) {
		this.bO("UserCategoriesToShowInFolderPane", n);
		return n
	},
	m: function() {
		return this.bP(String, "UserCategoriesToShowAsFilter")
	},
	X: function(n) {
		this.bO("UserCategoriesToShowAsFilter", n);
		return n
	},
	bZ: function(n) {
		this.bI("ShowCategoryColumnOnMessageItems", n);
		return n
	},
	I: function(n) {
		this.bI("FocusedInboxBitFlags", n);
		return n
	},
	O: function() {
		return this.bQ("MailLeftSwipeAction", 0)
	},
	bB: function(n) {
		this.bI("MailLeftSwipeAction", n);
		return n
	},
	P: function() {
		return this.bQ("MailRightSwipeAction", 0)
	},
	bC: function(n) {
		this.bI("MailRightSwipeAction", n);
		return n
	},
	h: function() {
		return this.bP(_g.iZ, "MailTriageOnHoverActions")
	},
	bD: function(n) {
		this.bO("MailTriageOnHoverActions", n);
		return n
	},
	bw: function(n) {
		this.bI("ClutterViewWatermark", n);
		return n
	},
	by: function(n) {
		this.bI("FocusedViewWatermark", n);
		return n
	},
	V: function(n) {
		this.bI("SelectedBookingMailbox", n);
		return n
	},
	bU: function(n) {
		this.bI("SelectedBookingSubModule", n);
		return n
	},
	bm: function(n) {
		this.bI("BookingCalendarViewType", n);
		return n
	},
	W: function(n) {
		this.bI("SelectedBookingMailboxDisplayName", n);
		return n
	},
	bo: function(n) {
		this.bI("BookingsTilesVisited", n);
		return n
	},
	bn: function(n) {
		this.bI("BookingsTilesDismissed", n);
		return n
	},
	bE: function(n) {
		this.bI("PeopleHubViewOptions", n);
		return n
	},
	N: function() {
		return this.bP(String, "BundleEntries")
	},
	S: function(n) {
		this.bO("BundleEntries", n);
		return n
	},
	bx: function(n) {
		this.bI("EdgePromotionRejectedLast", n);
		return n
	},
	bF: function(n) {
		this.bI("PinnedComposeAddin", n);
		return n
	},
	bG: function(n) {
		this.bI("PinnedReadAddin", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.y(n)
	},
	y: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.ld.prototype.C.call(this, n);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["BookmarkedWeatherLocations", "SelectedCalendarsDesktop", "SelectedCalendarsTWide", "SelectedCalendarsTNarrow", "FolderViewState", "SavedSearches", "SearchHistory", "SystemCategoriesToShowInFolderPane", "SystemCategoriesToShowAsFilter", "DefaultSystemCategoriesSetForFolderPane", "UserCategoriesToShowInFolderPane", "UserCategoriesToShowAsFilter", "BundleEntries"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["MailTriageOnHoverActions"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.dZ = function(n) {
	_g.dZ.initializeBase(this);
	n || (n = new _g.ef);
	this.d(n);
	_a.s.a(this, "_ApprovalRequestData")
};
_g.dZ.$$cctor = function() {
	_a.m.a(_g.dZ, _g.ef, _g.dZ._C)
};
_g.dZ._C = function(n) {
	return new _g.dZ(n)
};
_g.dZ.prototype = {
	c: function() {
		return this.bH.IsUndecidedApprovalRequest ? !0 : !1
	},
	a: function() {
		return this.bH.ApprovalDecision || 0
	},
	b: function() {
		return this.bW("ApprovalDecisionTime")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.e(n)
	},
	e: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["ApprovalDecisionTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gS = function(n) {
	_g.gS.initializeBase(this);
	n || (n = new _g.hd);
	this.d(n);
	_a.s.a(this, "_BaseFolderPermission")
};
_g.gS.$$cctor = function() {
	_a.m.a(_g.gS, _g.hd, _g.gS._C)
};
_g.gS._C = function(n) {
	return new _g.gS(n)
};
_g.gS.prototype = {
	s: function(n) {
		this.bI("UserId", n);
		return n
	},
	h: function(n) {
		this.bI("CanCreateItems", n);
		return n
	},
	j: function(n) {
		this.bI("CanCreateSubFolders", n);
		return n
	},
	m: function(n) {
		this.bI("IsFolderOwner", n);
		return n
	},
	f: function(n) {
		this.bI("IsFolderVisible", n);
		return n
	},
	q: function() {
		return this.bH.IsFolderContact ? !0 : !1
	},
	c: function(n) {
		this.bI("IsFolderContact", n);
		return n
	},
	b: function() {
		return this.bQ("EditItems", "None")
	},
	e: function(n) {
		this.bI("EditItems", n);
		return n
	},
	o: function() {
		return this.bQ("DeleteItems", "None")
	},
	l: function(n) {
		this.bI("DeleteItems", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.t(n)
	},
	t: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gT = function(n) {
	_g.gT.initializeBase(this);
	n || (n = new _g.hc);
	this.d(n);
	_a.s.a(this, "_BaseFolderPermissionSet")
};
_g.gT.$$cctor = function() {
	_a.m.a(_g.gT, _g.hc, _g.gT._C)
};
_g.gT._C = function(n) {
	return new _g.gT(n)
};
_g.gT.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.b(n)
	},
	b: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gU = function(n) {
	_g.gU.initializeBase(this);
	n || (n = new _g.eh);
	this.d(n);
	_a.s.a(this, "_BingNativeAdsDataModel")
};
_g.gU.$$cctor = function() {
	_a.m.a(_g.gU, _g.eh, _g.gU._C)
};
_g.gU._C = function(n) {
	return new _g.gU(n)
};
_g.gU.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.fb = function(n) {
	_g.fb.initializeBase(this);
	n || (n = new _g.cZ);
	this.d(n);
	_a.s.a(this, "_BposNavBarData")
};
_g.fb.$$cctor = function() {
	_a.m.a(_g.fb, _g.cZ, _g.fb._C)
};
_g.fb._C = function(n) {
	return new _g.fb(n)
};
_g.fb.prototype = {
	a: function() {
		return this.bS(_g.W, "AboutMeLink")
	},
	h: function() {
		return this.bS(_g.W, "AdminLink")
	},
	j: function() {
		return this.bS(_g.bN, "AppsImage")
	},
	c: function() {
		return this.ca(_g.W, _g.bE, "AppsLinks")
	},
	l: function() {
		return this.bS(_g.W, "CommunityLink")
	},
	m: function() {
		return this.ca(_g.W, _g.bE, "CurrentWorkloadHelpSubLinks")
	},
	n: function() {
		return this.bS(_g.W, "CurrentWorkloadSettingsLink")
	},
	o: function() {
		return this.ca(_g.W, _g.bE, "CurrentWorkloadSettingsSubLinks")
	},
	p: function() {
		return this.ca(_g.W, _g.bE, "CurrentWorkloadUserSubLinks")
	},
	q: function() {
		return this.bS(_g.bN, "DownArrowImage")
	},
	r: function() {
		return this.bS(_g.bN, "DownWhiteArrowImage")
	},
	s: function() {
		return this.bS(_g.W, "FeedbackLink")
	},
	t: function() {
		return this.bS(_g.bN, "HelpImage")
	},
	e: function() {
		return this.bS(_g.W, "HelpLink")
	},
	u: function() {
		return this.bS(_g.W, "LegalLink")
	},
	v: function() {
		return this.bS(_g.bN, "LogoThemeableImage")
	},
	w: function() {
		return this.bS(_g.W, "O365SettingsLink")
	},
	x: function() {
		return this.bS(_g.W, "PartnerLink")
	},
	f: function() {
		return this.bS(_g.W, "PrivacyLink")
	},
	y: function() {
		return this.bS(_g.bN, "SettingsImage")
	},
	g: function() {
		return this.bS(_g.W, "SignOutLink")
	},
	z: function() {
		return this.bS(_g.bN, "UpArrowImage")
	},
	b: function() {
		return this.ca(_g.W, _g.bE, "WorkloadLinks")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.A(n)
	},
	A: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var u = this;
			this.bN(function(n) {
				return new _g.W(n)
			}, ["AboutMeLink", "AdminLink", "CommunityLink", "CurrentWorkloadSettingsLink", "FeedbackLink", "FooterICPLink", "HelpLink", "LegalLink", "O365SettingsLink", "PartnerLink", "PrivacyLink", "SignOutLink", "TenantBackgroundImageUrl", "TenantLogoNavigationUrl", "TenantLogoUrl"], n, t);
			var f = this;
			this.bN(function(n) {
				return new _g.bN(n)
			}, ["AppsImage", "DownArrowImage", "DownWhiteArrowImage", "FooterLogoImage", "HelpImage", "LogoImage", "LogoThemeableImage", "NotificationsBellIconImage", "NotificationsHighIconImage", "NotificationsLowIconImage", "NotificationsMediumIconImage", "SettingsImage", "UpArrowImage"], n, t);
			var i = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.W, _g.bE))(n)
			}, ["AppsLinks", "CurrentWorkloadHelpSubLinks", "CurrentWorkloadSettingsSubLinks", "CurrentWorkloadUserSubLinks", "WorkloadLinks"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ThemeColors"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.dn = function(n) {
	_g.dn.initializeBase(this);
	n || (n = new _g.eH);
	this.d(n);
	_a.s.a(this, "_BposNavBarImageClipInfo")
};
_g.dn.$$cctor = function() {
	_a.m.a(_g.dn, _g.eH, _g.dn._C)
};
_g.dn._C = function(n) {
	return new _g.dn(n)
};
_g.dn.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bN = function(n) {
	_g.bN.initializeBase(this);
	n || (n = new _g.eI);
	this.d(n);
	_a.s.a(this, "_BposNavBarImageData")
};
_g.bN.$$cctor = function() {
	_a.m.a(_g.bN, _g.eI, _g.bN._C)
};
_g.bN._C = function(n) {
	return new _g.bN(n)
};
_g.bN.prototype = {
	a: function() {
		return this.bS(_g.dn, "ClipInfo")
	},
	b: function() {
		return this.bS(_g.dn, "HoverClipInfo")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.c(n)
	},
	c: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var i = this;
			this.bN(function(n) {
				return new _g.dn(n)
			}, ["ClipInfo", "HoverClipInfo", "PressedClipInfo"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.W = function(n) {
	_g.W.initializeBase(this);
	n || (n = new _g.bE);
	this.d(n);
	_a.s.a(this, "_BposNavBarLinkData")
};
_g.W.$$cctor = function() {
	_a.m.a(_g.W, _g.bE, _g.W._C)
};
_g.W._C = function(n) {
	return new _g.W(n)
};
_g.W.prototype = {
	b: function(n) {
		this.bI("Id", n);
		return n
	},
	a: function() {
		return this.ca(_g.W, _g.bE, "SubLinks")
	},
	c: function(n) {
		this.bI("Text", n);
		return n
	},
	e: function(n) {
		this.bI("Url", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.f(n)
	},
	f: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var i = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.W, _g.bE))(n)
			}, ["SubLinks"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.dp = function(n) {
	_g.dp.initializeBase(this, [n || new _g.el]);
	this.bR();
	_a.s.a(this, "_ContactsFolder")
};
_g.dp.$$cctor = function() {
	_a.m.b(_g.dp, _g.el, _g.dp._C, "ContactsFolder:#Exchange")
};
_g.dp._C = function(n) {
	return new _g.dp(n)
};
_g.dp.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.h(n)
	},
	h: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.j.prototype.L.call(this, n);
			var i = this;
			this.bN(function(n) {
				return new _g.cR(n)
			}, ["PermissionSet"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ea = function(n) {
	_g.ea.initializeBase(this);
	n || (n = new _g.em);
	this.d(n);
	_a.s.a(this, "_ConversationThread")
};
_g.ea.$$cctor = function() {
	_a.m.a(_g.ea, _g.em, _g.ea._C)
};
_g.ea._C = function(n) {
	return new _g.ea(n)
};
_g.ea.prototype = {
	o: function(n) {
		this.bI("ThreadId", n);
		return n
	},
	a: function() {
		return this.ca(_g.cd, _g.ck, "ConversationNodes")
	},
	h: function(n) {
		this.bO("ConversationNodes", n);
		return n
	},
	e: function() {
		return this.bP(_g.g, "ToRecipients")
	},
	p: function(n) {
		this.bO("ToRecipients", n);
		return n
	},
	c: function() {
		return this.bP(_g.g, "CcRecipients")
	},
	g: function(n) {
		this.bO("CcRecipients", n);
		return n
	},
	m: function(n) {
		this.co("LastDeliveryTime", n);
		return n
	},
	q: function(n) {
		this.bO("UniqueSenders", n);
		return n
	},
	n: function(n) {
		this.bI("Preview", n);
		return n
	},
	j: function(n) {
		this.bI("GlobalHasAttachments", n);
		return n
	},
	l: function(n) {
		this.bI("GlobalHasIrm", n);
		return n
	},
	b: function(n) {
		this.bI("GlobalImportance", n);
		return n
	},
	r: function(n) {
		this.bI("UnreadCount", n);
		return n
	},
	f: function(n) {
		this.bI("BackwardMessage", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.s(n)
	},
	s: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var f = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.cd, _g.ck))(n)
			}, ["ConversationNodes"], n, t);
			var e = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["ToRecipients", "CcRecipients", "UniqueSenders"], n, t);
			var u = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["GlobalItemIds", "DraftItemIds"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["GlobalRichContent"], n, t);
			var r = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["GlobalItemClasses"], n, t);
			this.cg(["LastDeliveryTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.be = function(n) {
	_g.be.initializeBase(this);
	n || (n = new _g.T);
	this.d(n);
	_a.s.a(this, "_ExtendedPropertyModel")
};
_g.be.$$cctor = function() {
	_a.m.a(_g.be, _g.T, _g.be._C)
};
_g.be._C = function(n) {
	return new _g.be(n)
};
_g.be.prototype = {
	a: function() {
		return this.bS(_g.bV, "ExtendedFieldURI")
	},
	c: function(n) {
		this.bO("ExtendedFieldURI", n);
		return n
	},
	b: function(n) {
		this.bI("Value", n);
		return n
	},
	e: function() {
		return this.bP(String, "Values")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.f(n)
	},
	f: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var r = this;
			this.bN(function(n) {
				return new _g.bV(n)
			}, ["ExtendedFieldURI"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["Values"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bV = function(n) {
	_g.bV.initializeBase(this, [n || new _g.O]);
	this.bR();
	_a.s.a(this, "_ExtendedPropertyUriModel")
};
_g.bV.$$cctor = function() {
	_a.m.a(_g.bV, _g.O, _g.bV._C)
};
_g.bV._C = function(n) {
	return new _g.bV(n)
};
_g.bV.prototype = {
	a: function() {
		return this.bQ("DistinguishedPropertySetId", "Meeting")
	},
	e: function(n) {
		this.bI("DistinguishedPropertySetId", n);
		return n
	},
	f: function(n) {
		this.bI("PropertyName", n);
		return n
	},
	c: function() {
		return this.bH.PropertyId || 0
	},
	b: function() {
		return this.bQ("PropertyType", "ApplicationTime")
	},
	g: function(n) {
		this.bI("PropertyType", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.j(n)
	},
	j: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.gV.prototype.h.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cQ = function(n) {
	_g.cQ.initializeBase(this, [n || new _g.bL]);
	this.bR();
	_a.s.a(this, "_ForwardItem")
};
_g.cQ.$$cctor = function() {
	_a.m.b(_g.cQ, _g.bL, _g.cQ._C, "ForwardItem:#Exchange")
};
_g.cQ._C = function(n) {
	return new _g.cQ(n)
};
_g.cQ.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.y(n)
	},
	y: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.bx.prototype.c.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ch = function(n) {
	_g.ch.initializeBase(this);
	n || (n = new _g.dE);
	this.d(n);
	_a.s.a(this, "_MailboxStatistics")
};
_g.ch.$$cctor = function() {
	_a.m.a(_g.ch, _g.dE, _g.ch._C)
};
_g.ch._C = function(n) {
	return new _g.ch(n)
};
_g.ch.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.u = function(n) {
	_g.u.initializeBase(this, [n || new _g.bD]);
	this.bR();
	_a.s.a(this, "_MailFolder")
};
_g.u.$$cctor = function() {
	_a.m.b(_g.u, _g.bD, _g.u._C, "Folder:#Exchange")
};
_g.u._C = function(n) {
	return new _g.u(n)
};
_g.u.prototype = {
	A: function() {
		return this.bS(_g.cR, "PermissionSet")
	},
	h: function(n) {
		this.bI("UnreadCount", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.o(n)
	},
	o: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.j.prototype.L.call(this, n);
			var i = this;
			this.bN(function(n) {
				return new _g.cR(n)
			}, ["PermissionSet"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cR = function(n) {
	_g.cR.initializeBase(this, [n || new _g.eJ]);
	this.bR();
	_a.s.a(this, "_MailFolderPermissionSet")
};
_g.cR.$$cctor = function() {
	_a.m.a(_g.cR, _g.eJ, _g.cR._C)
};
_g.cR._C = function(n) {
	return new _g.cR(n)
};
_g.cR.prototype = {
	a: function() {
		return this.ca(_g.v, _g.cL, "Permissions")
	},
	c: function(n) {
		this.bO("Permissions", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.e(n)
	},
	e: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.gT.prototype.b.call(this, n);
			var r = this;
			this.bN(function(n) {
				return new(_a.fT.$$(_g.v, _g.cL))(n)
			}, ["Permissions"], n, t);
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["UnknownEntries"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gV = function(n) {
	_g.gV.initializeBase(this);
	n || (n = new _g.hq);
	this.d(n);
	_a.s.a(this, "_PropertyPathModel")
};
_g.gV.$$cctor = function() {
	_a.m.a(_g.gV, _g.hq, _g.gV._C)
};
_g.gV._C = function(n) {
	return new _g.gV(n)
};
_g.gV.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.h(n)
	},
	h: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ec = function(n) {
	_g.ec.initializeBase(this);
	n || (n = new _g.eM);
	this.d(n);
	_a.s.a(this, "_ReminderMessageData")
};
_g.ec.$$cctor = function() {
	_a.m.a(_g.ec, _g.eM, _g.ec._C)
};
_g.ec._C = function(n) {
	return new _g.ec(n)
};
_g.ec.prototype = {
	b: function() {
		return this.bW("StartTime")
	},
	a: function() {
		return this.bW("EndTime")
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.c(n)
	},
	c: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.cg(["StartTime", "EndTime"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gW = function(n) {
	_g.gW.initializeBase(this, [n || new _g.dJ]);
	this.bR();
	_a.s.a(this, "_ReparentItem")
};
_g.gW.$$cctor = function() {
	_a.m.b(_g.gW, _g.dJ, _g.gW._C, "ReparentItem:#Exchange")
};
_g.gW._C = function(n) {
	return new _g.gW(n)
};
_g.gW.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.y(n)
	},
	y: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.bx.prototype.c.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cC = function(n) {
	_g.cC.initializeBase(this, [n || new _g.bw]);
	this.bR();
	_a.s.a(this, "_ReplyAllToItem")
};
_g.cC.$$cctor = function() {
	_a.m.b(_g.cC, _g.bw, _g.cC._C, "ReplyAllToItem:#Exchange")
};
_g.cC._C = function(n) {
	return new _g.cC(n)
};
_g.cC.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.y(n)
	},
	y: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.bx.prototype.c.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cD = function(n) {
	_g.cD.initializeBase(this, [n || new _g.bQ]);
	this.bR();
	_a.s.a(this, "_ReplyToItem")
};
_g.cD.$$cctor = function() {
	_a.m.b(_g.cD, _g.bQ, _g.cD._C, "ReplyToItem:#Exchange")
};
_g.cD._C = function(n) {
	return new _g.cD(n)
};
_g.cD.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.y(n)
	},
	y: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.bx.prototype.c.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bh = function(n) {
	_g.bh.initializeBase(this, [n || new _g.bo]);
	this.bR();
	_a.s.a(this, "_ResponseObject")
};
_g.bh.$$cctor = function() {
	_a.m.a(_g.bh, _g.bo, _g.bh._C)
};
_g.bh._C = function(n) {
	return new _g.bh(n)
};
_g.bh.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.n(n)
	},
	n: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.gX.prototype.v.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gX = function(n) {
	_g.gX.initializeBase(this, [n || new _g.gv]);
	this.bR();
	_a.s.a(this, "_ResponseObjectCore")
};
_g.gX.$$cctor = function() {
	_a.m.a(_g.gX, _g.gv, _g.gX._C)
};
_g.gX._C = function(n) {
	return new _g.gX(n)
};
_g.gX.prototype = {
	z: function(n) {
		this.bI("ReferenceItemId", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.v(n)
	},
	v: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.i.prototype.cN.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bW = function(n) {
	_g.bW.initializeBase(this, [n || new _g.dL]);
	this.bR();
	_a.s.a(this, "_SearchFolder")
};
_g.bW.$$cctor = function() {
	_a.m.b(_g.bW, _g.dL, _g.bW._C, "SearchFolder:#Exchange")
};
_g.bW._C = function(n) {
	return new _g.bW(n)
};
_g.bW.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.I(n)
	},
	I: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.u.prototype.o.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bI = function(n) {
	_g.bI.initializeBase(this);
	n || (n = new _g.dM);
	this.d(n);
	_a.s.a(this, "_SegmentationSettings")
};
_g.bI.$$cctor = function() {
	_a.m.a(_g.bI, _g.dM, _g.bI._C)
};
_g.bI._C = function(n) {
	return new _g.bI(n)
};
_g.bI.prototype = {
	a: function(n) {
		this.bI("PredictedActions", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.b(n)
	},
	b: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.gY = function(n) {
	_g.gY.initializeBase(this, [n || new _g.dO]);
	this.bR();
	_a.s.a(this, "_SmartResponseBase")
};
_g.gY.$$cctor = function() {
	_a.m.a(_g.gY, _g.dO, _g.gY._C)
};
_g.gY._C = function(n) {
	return new _g.gY(n)
};
_g.gY.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.x(n)
	},
	x: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.bh.prototype.n.call(this, n);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.bx = function(n) {
	_g.bx.initializeBase(this, [n || new _g.cb]);
	this.bR();
	_a.s.a(this, "_SmartResponseItem")
};
_g.bx.$$cctor = function() {
	_a.m.a(_g.bx, _g.cb, _g.bx._C)
};
_g.bx._C = function(n) {
	return new _g.bx(n)
};
_g.bx.prototype = {
	f: function() {
		return this.bS(_g.y, "NewBodyContent")
	},
	D: function(n) {
		this.bO("NewBodyContent", n);
		return n
	},
	t: function() {
		return this.bH.ReferenceItemDocumentId || 0
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.c(n)
	},
	c: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			_g.gY.prototype.x.call(this, n);
			var i = this;
			this.bN(function(n) {
				return new _g.y(n)
			}, ["NewBodyContent"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.ld = function(n) {
	_g.ld.initializeBase(this);
	n || (n = new _g.jY);
	this.d(n);
	_a.s.a(this, "_UserConfigurationBase")
};
_g.ld.prototype = {
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.C(n)
	},
	C: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.cu = function(n) {
	_g.cu.initializeBase(this);
	n || (n = new _g.dj);
	this.d(n);
	_a.s.a(this, "_WorkingHoursModel")
};
_g.cu.$$cctor = function() {
	_a.m.a(_g.cu, _g.dj, _g.cu._C)
};
_g.cu._C = function(n) {
	return new _g.cu(n)
};
_g.cu.prototype = {
	e: function(n) {
		this.bI("WorkHoursStartTimeInMinutes", n);
		return n
	},
	c: function(n) {
		this.bI("WorkHoursEndTimeInMinutes", n);
		return n
	},
	b: function(n) {
		this.bI("WorkDays", n);
		return n
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.a(n)
	},
	a: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			this.bM(n, t);
			this.bL(n)
		}
	}
};
_g.dm = function(n) {
	_g.dm.initializeBase(this);
	n || (n = new _g.ds);
	this.d(n);
	_a.s.a(this, "_ApplicationSettings")
};
_g.dm.$$cctor = function() {
	_a.m.a(_g.dm, _g.ds, _g.dm._C)
};
_g.dm._C = function(n) {
	return new _g.dm(n)
};
_g.dm.prototype = {
	e: function() {
		return this.bQ("DefaultTraceLevel", 0)
	},
	c: function() {
		return this.bQ("DefaultPerfTraceLevel", 0)
	},
	b: function() {
		return this.bQ("DefaultJsMvvmPerfTraceLevel", 0)
	},
	f: function() {
		return this.bP(String, "TraceInfoComponents")
	},
	h: function() {
		return this.bP(String, "TraceVerboseComponents")
	},
	g: function() {
		return this.bP(String, "TracePerfComponents")
	},
	j: function() {
		return this.bP(String, "TraceWarningComponents")
	},
	l: function(n) {
		this.bI("DownloadUrlBase", n);
		return n
	},
	a: function() {
		return this.bQ("FilterWebBeaconsAndHtmlForms", 0)
	},
	B: function() {
		return this.bH
	},
	d: function(n) {
		this.bJ(n);
		return n
	},
	bJ: function(n) {
		this.m(n)
	},
	m: function(n) {
		if(!this.bK(!1, n)) {
			var t = {};
			var i = this;
			this.bN(function(n) {
				return new _a.k(n)
			}, ["TraceInfoComponents", "TraceVerboseComponents", "TracePerfComponents", "TraceWarningComponents"], n, t);
			this.bM(n, t);
			this.bL(n)
		}
	}
};
var IMeetingMessageModel = function() {};
IMeetingMessageModel.registerInterface("IMeetingMessageModel");
var IMeetingRequestMessageModel = function() {};
IMeetingRequestMessageModel.registerInterface("IMeetingRequestMessageModel");
_g.hK.registerClass("_g.hK", null, 0);
_g.H.registerClass("_g.H");
_g.gZ.registerClass("_g.gZ", _g.hK, 0, 0);
_g.kE.registerClass("_g.kE", _ff.e, 0);
_g.en.registerClass("_g.en", _g.kE, 0, 0);
_g.hi.registerClass("_g.hi", _g.hK, 0, 0);
_g.cq.registerClass("_g.cq", _ff.e, 0);
_g.kF.registerClass("_g.kF", _ff.e, 0);
_g.fr.registerClass("_g.fr", _g.kF, 0, 0);
_g.e.registerClass("_g.e", _g.fr, 0, 0, 0);
_g.cz.registerClass("_g.cz", _ff.e);
_g.hj.registerClass("_g.hj", _g.hK, 0, 0);
_g.iy.registerClass("_g.iy", _g.hK, 0, 0);
_g.M.registerClass("_g.M", _g.kE, 0, 0);
_g.z.registerClass("_g.z", _g.M, 0, 0, 0);
_g.bX.registerClass("_g.bX", _g.hK, 0, 0);
_g.bt.registerClass("_g.bt", _g.hK, 0, 0);
_g.kz.registerClass("_g.kz", _no.k);
_g.kz.prototype.toString = _no.k.prototype.toString;
_g.fU.registerClass("_g.fU", _g.hK, 0, 0);
_g.bz.registerClass("_g.bz", _g.hK, 0, 0);
_g.V.registerClass("_g.V", _ff.e, 0);
_g.kp.registerClass("_g.kp", _ff.e, 0);
_g.eC.registerClass("_g.eC", _g.kp, 0, 0);
_g.iW.registerClass("_g.iW", _g.hK, 0, 0);
_g.jb.registerClass("_g.jb", _g.hK, 0, 0);
_g.bq.registerClass("_g.bq", _ff.e, 0);
_g.dC.registerClass("_g.dC", _g.bq, 0, 0);
_g.di.registerClass("_g.di", _ff.e, 0);
_g.dt.registerClass("_g.dt", _g.kF, 0, 0);
_g.cj.registerClass("_g.cj", _ff.e, 0);
_g.jj.registerClass("_g.jj", _g.hK, 0, 0);
_g.bP.registerClass("_g.bP", _g.cq);
_g.jw.registerClass("_g.jw", _no.k);
_g.jw.prototype.toString = _no.k.prototype.toString;
_g.jY.registerClass("_g.jY", _ff.e, 0);
_g.P.registerClass("_g.P", _g.jY, 0, 0);
_g.jH.registerClass("_g.jH", _g.hK, 0, 0);
_g.jI.registerClass("_g.jI", _g.hK, 0, 0);
_g.jJ.registerClass("_g.jJ", _g.hK, 0, 0);
_g.S.registerClass("_g.S", _ff.e, 0);
_g.cl.registerClass("_g.cl", _g.cq);
_g.jO.registerClass("_g.jO", _g.hK, 0, 0);
_g.jP.registerClass("_g.jP", _g.hK, 0, 0);
_g.gE.registerClass("_g.gE", _g.hK, 0, 0);
_g.dr.registerClass("_g.dr", _ff.e, 0);
_g.I.registerClass("_g.I", _g.M, 0, 0, 0);
_g.gv.registerClass("_g.gv", _g.I, 0, 0, 0, 0);
_g.bo.registerClass("_g.bo", _g.gv, 0, 0, 0, 0, 0);
_g.gM.registerClass("_g.gM", _g.bo, 0, 0, 0, 0, 0, 0);
_g.dF.registerClass("_g.dF", _g.gM, 0, 0, 0, 0, 0, 0, 0);
_g.cS.registerClass("_g.cS", _g.dF, 0, 0, 0, 0, 0, 0, 0, 0);
_g.eL.registerClass("_g.eL", _g.bo, 0, 0, 0, 0, 0, 0);
_g.fh.registerClass("_g.fh", _g.eL, 0, 0, 0, 0, 0, 0, 0);
_g.fi.registerClass("_g.fi", _g.bo, 0, 0, 0, 0, 0, 0);
_g.bJ.registerClass("_g.bJ", _g.dt, 0, 0, 0);
_g.ds.registerClass("_g.ds", _ff.e, 0);
_g.ed.registerClass("_g.ed", _g.dr, 0, 0);
_g.hM.registerClass("_g.hM", _ff.e);
_g.ef.registerClass("_g.ef", _ff.e, 0);
_g.bi.registerClass("_g.bi", _g.fr, 0, 0, 0);
_g.fp.registerClass("_g.fp", _ff.e, 0);
_g.hW.registerClass("_g.hW", _ff.e);
_g.ha.registerClass("_g.ha", _g.kE, 0, 0);
_g.ko.registerClass("_g.ko", _ff.e, 0);
_g.eg.registerClass("_g.eg", _ff.e, 0);
_g.hc.registerClass("_g.hc", _ff.e, 0);
_g.hd.registerClass("_g.hd", _ff.e, 0);
_g.ks.registerClass("_g.ks", _ff.e, 0);
_g.eh.registerClass("_g.eh", _ff.e, 0);
_g.s.registerClass("_g.s", _ff.e, 0);
_g.hf.registerClass("_g.hf", _ff.e, 0);
_g.kC.registerClass("_g.kC", _ff.e, 0);
_g.hZ.registerClass("_g.hZ", _g.kC, 0, 0);
_g.ib.registerClass("_g.ib", _ff.e);
_g.dO.registerClass("_g.dO", _g.bo, 0, 0, 0, 0, 0, 0);
_g.cb.registerClass("_g.cb", _g.dO, 0, 0, 0, 0, 0, 0, 0);
_g.ej.registerClass("_g.ej", _g.cb, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bC.registerClass("_g.bC", _ff.e, 0);
_g.ClientVersionProvider.registerClass("_g.ClientVersionProvider");
_g.hg.registerClass("_g.hg", _ff.e, 0);
_g.du.registerClass("_g.du", _g.M, 0, 0, 0);
_g.el.registerClass("_g.el", _g.ha, 0, 0, 0);
_g.ck.registerClass("_g.ck", _ff.e, 0);
_g.em.registerClass("_g.em", _ff.e, 0);
_g.ku.registerClass("_g.ku", _g.ks);
_g.cV.registerClass("_g.cV", _g.dF, 0, 0, 0, 0, 0, 0, 0, 0);
_g.r.registerClass("_g.r", _g.dt, 0, 0, 0);
_g.dw.registerClass("_g.dw", _g.M, 0, 0, 0);
_g.er.registerClass("_g.er", _ff.e, 0);
_g.cG.registerClass("_g.cG", _ff.e, 0);
_g.g.registerClass("_g.g", _ff.e, 0);
_g.iB.registerClass("_g.iB", _ff.e, 0);
_g.T.registerClass("_g.T", _ff.e, 0);
_g.hq.registerClass("_g.hq", _ff.e, 0);
_g.O.registerClass("_g.O", _g.hq, 0, 0);
_g.es.registerClass("_g.es", _g.ko, 0, 0);
_g.gz.registerClass("_g.gz", _ff.e, 0);
_g.eu.registerClass("_g.eu", _g.gz, 0, 0);
_g.cH.registerClass("_g.cH", _ff.e, 0);
_g.m.registerClass("_g.m", _g.dt, 0, 0, 0);
_g.bD.registerClass("_g.bD", _g.ha, 0, 0, 0);
_g.bL.registerClass("_g.bL", _g.cb, 0, 0, 0, 0, 0, 0, 0, 0);
_g.cX.registerClass("_g.cX", _ff.e, 0);
_g.L.registerClass("_g.L", _g.eg, 0, 0);
_g.gg.registerClass("_g.gg", _g.kC, 0, 0);
_g.iT.registerClass("_g.iT", _ff.e, 0);
_g.kD.registerClass("_g.kD", _ff.e, 0);
_g.kK.registerClass("_g.kK", _g.kD, 0, 0);
_g.ba.registerClass("_g.ba", _g.kK, 0, 0, 0);
_g.dD.registerClass("_g.dD", _g.gz, 0, 0);
_g.gh.registerClass("_g.gh", _ff.e);
_g.eD.registerClass("_g.eD", _ff.e, 0);
_g.iV.registerClass("_g.iV", _g.dr, 0, 0);
_g.iU.registerClass("_g.iU", _g.dr, 0, 0);
_g.dE.registerClass("_g.dE", _ff.e, 0);
_g.ja.registerClass("_g.ja", _ff.e);
_g.cY.registerClass("_g.cY", _ff.e, 0);
_g.eE.registerClass("_g.eE", _ff.e, 0);
_g.cn.registerClass("_g.cn", _g.I, 0, 0, 0, 0);
_g.bY.registerClass("_g.bY", _g.cn, 0, 0, 0, 0, 0);
_g.co.registerClass("_g.co", _g.cn, 0, 0, 0, 0, 0);
_g.je.registerClass("_g.je", _ff.e, 0);
_g.eF.registerClass("_g.eF", _ff.e, 0);
_g.gl.registerClass("_g.gl", _ff.e, 0);
_g.eG.registerClass("_g.eG", _ff.e, 0);
_g.cK.registerClass("_g.cK", _ff.e, 0);
_g.cZ.registerClass("_g.cZ", _ff.e, 0);
_g.eH.registerClass("_g.eH", _ff.e, 0);
_g.eI.registerClass("_g.eI", _ff.e, 0);
_g.bE.registerClass("_g.bE", _ff.e, 0);
_g.jk.registerClass("_g.jk", _ff.e);
_g.jo.registerClass("_g.jo", _ff.e);
_g.jp.registerClass("_g.jp", _ff.e, 0);
_g.kA.registerClass("_g.kA", null, _g.kx);
_g.cy.registerClass("_g.cy", _ff.e, 0);
_g.db.registerClass("_g.db", _g.jY, 0, 0);
_g.eJ.registerClass("_g.eJ", _g.hc, 0, 0);
_g.cL.registerClass("_g.cL", _g.hd, 0, 0);
_g.o.registerClass("_g.o", _ff.e, 0);
_g.gr.registerClass("_g.gr", _ff.e, 0);
_g.cp.registerClass("_g.cp", _ff.e, 0);
_g.dc.registerClass("_g.dc", _g.M, 0, 0, 0);
_g.gs.registerClass("_g.gs", _g.bo, 0, 0, 0, 0, 0, 0);
_g.eK.registerClass("_g.eK", _g.gs, 0, 0, 0, 0, 0, 0, 0);
_g.hp.registerClass("_g.hp", _ff.e, 0);
_g.jr.registerClass("_g.jr", _ff.e, 0);
_g.d.registerClass("_g.d", _g.hq, 0, 0);
_g.gt.registerClass("_g.gt", _g.bo, 0, 0, 0, 0, 0, 0);
_g.js.registerClass("_g.js", _ff.e);
_g.jt.registerClass("_g.jt", _ff.e);
_g.bn.registerClass("_g.bn", _g.fr, 0, 0, 0);
_g.eM.registerClass("_g.eM", _ff.e, 0);
_g.de.registerClass("_g.de", _g.bo, 0, 0, 0, 0, 0, 0);
_g.dJ.registerClass("_g.dJ", _g.cb, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bw.registerClass("_g.bw", _g.cb, 0, 0, 0, 0, 0, 0, 0, 0);
_g.bQ.registerClass("_g.bQ", _g.cb, 0, 0, 0, 0, 0, 0, 0, 0);
_g.eN.registerClass("_g.eN", _ff.e, 0);
_g.bM.registerClass("_g.bM", _ff.e, 0);
_g.dK.registerClass("_g.dK", _ff.e, 0);
_g.eO.registerClass("_g.eO", _g.jY, 0, 0);
_g.dL.registerClass("_g.dL", _g.bD, 0, 0, 0, 0);
_g.jC.registerClass("_g.jC", _ff.e);
_g.jD.registerClass("_g.jD", _ff.e);
_g.bj.registerClass("_g.bj", _g.eg, 0, 0);
_g.dM.registerClass("_g.dM", _ff.e, 0);
_g.dN.registerClass("_g.dN", _ff.e, 0);
_g.jG.registerClass("_g.jG", _ff.e);
_g.R.registerClass("_g.R", _ff.e, 0);
_g.bA.registerClass("_g.bA", _ff.e, 0);
_g.gB.registerClass("_g.gB", _g.eL, 0, 0, 0, 0, 0, 0, 0);
_g.jL.registerClass("_g.jL", _ff.e);
_g.jM.registerClass("_g.jM", _g.gz, 0, 0);
_g.F.registerClass("_g.F", _ff.e, 0);
_g.bR.registerClass("_g.bR", _g.M, 0, 0, 0);
_g.dg.registerClass("_g.dg", _g.dF, 0, 0, 0, 0, 0, 0, 0, 0);
_g.hw.registerClass("_g.hw", _ff.e, 0);
_g.eS.registerClass("_g.eS", _ff.e, 0);
_g.dT.registerClass("_g.dT", _ff.e, 0);
_g.cA.registerClass("_g.cA", _ff.e, 0);
_g.eV.registerClass("_g.eV", _ff.e, 0);
_g.dU.registerClass("_g.dU", _g.jY, 0, 0);
_g.kb.registerClass("_g.kb", _ff.e, 0);
_g.dh.registerClass("_g.dh", _ff.e, 0);
_g.dj.registerClass("_g.dj", _ff.e, 0);
_g.hX.registerClass("_g.hX", _ff.e, 0);
_g.kr.registerClass("_g.kr", _ff.e, 0);
_g.cv.registerClass("_g.cv", _ff.e, 0);
_g.bZ.registerClass("_g.bZ", _g.kE, 0, 0);
_g.dP.registerClass("_g.dP", _ff.e, 0);
_g.hh.registerClass("_g.hh", _ff.e, 0);
_g.ho.registerClass("_g.ho", _ff.e, 0);
_g.dI.registerClass("_g.dI", _ff.e, 0);
_g.ev.registerClass("_g.ev", _g.ko, 0, 0);
_g.ew.registerClass("_g.ew", _g.ko, 0, 0);
_g.ey.registerClass("_g.ey", _g.ko, 0, 0);
_g.eA.registerClass("_g.eA", _g.ko, 0, 0);
_g.ht.registerClass("_g.ht", _g.kr, 0, 0);
_g.eT.registerClass("_g.eT", _g.ko, 0, 0);
_g.eU.registerClass("_g.eU", _g.dD, 0, 0, 0);
_g.ih.registerClass("_g.ih", _g.ko, 0, 0);
_g.ik.registerClass("_g.ik", _g.ko);
_g.fQ.registerClass("_g.fQ", _g.gz, 0, 0);
_g.fx.registerClass("_g.fx", _g.ko, 0, 0);
_g.is.registerClass("_g.is", _g.ko, 0, 0);
_g.fM.registerClass("_g.fM", _g.gz, 0, 0);
_g.fP.registerClass("_g.fP", _g.gz, 0, 0);
_g.iJ.registerClass("_g.iJ", _ff.e);
_g.fX.registerClass("_g.fX", _g.gz, 0, 0);
_g.iK.registerClass("_g.iK", _ff.e);
_g.fY.registerClass("_g.fY", _ff.e, 0);
_g.ga.registerClass("_g.ga", _g.ko, 0, 0);
_g.eP.registerClass("_g.eP", _ff.e, 0);
_g.iP.registerClass("_g.iP", _ff.e, 0);
_g.ei.registerClass("_g.ei", _ff.e, 0);
_g.iI.registerClass("_g.iI", _g.ei, 0, 0);
_g.gq.registerClass("_g.gq", _ff.e, 0);
_g.jK.registerClass("_g.jK", _ff.e);
_g.jh.registerClass("_g.jh", _g.ko, 0, 0);
_g.jR.registerClass("_g.jR", _g.ko);
_g.jy.registerClass("_g.jy", _g.ko);
_g.jA.registerClass("_g.jA", _g.gz);
_g.jc.registerClass("_g.jc", _g.gz);
_g.jU.registerClass("_g.jU", _g.jc);
_g.hL.registerClass("_g.hL", _g.hK, 0, 0);
_g.ee.registerClass("_g.ee", _g.hX, 0, 0);
_g.hS.registerClass("_g.hS", _g.ko);
_g.fm.registerClass("_g.fm", _g.hX, 0, 0);
_g.hO.registerClass("_g.hO", _g.ko);
_g.dv.registerClass("_g.dv", _g.hX, 0, 0);
_g.ep.registerClass("_g.ep", _g.hX, 0, 0);
_g.iu.registerClass("_g.iu", _g.ko);
_g.fE.registerClass("_g.fE", _g.hX, 0, 0);
_g.iz.registerClass("_g.iz", _g.ko);
_g.jF.registerClass("_g.jF", _g.hK, 0, 0);
_g.dR.registerClass("_g.dR", _g.hX, 0, 0);
_g.jV.registerClass("_g.jV", _g.hK, 0, 0);
_g.gH.registerClass("_g.gH", _g.hX, 0, 0);
_g.jW.registerClass("_g.jW", _g.ko);
_g.io.registerClass("_g.io", _g.ko);
_g.iG.registerClass("_g.iG", _g.ko, 0, 0);
_g.gd.registerClass("_g.gd", _g.ko, 0, 0);
_g.ka.registerClass("_g.ka", _ff.e);
_g.bK.registerClass("_g.bK", _ff.e, 0);
_g.gk.registerClass("_g.gk", _ff.e, 0);
_g.hv.registerClass("_g.hv", _ff.e, 0);
_g.bm.registerClass("_g.bm", _g.hv, 0, 0);
_g.hu.registerClass("_g.hu", _ff.e, 0);
_g.U.registerClass("_g.U", _g.hu, 0, 0);
_g.cw.registerClass("_g.cw", _ff.e, 0);
_g.kt.registerClass("_g.kt", _g.kr);
_g.cU.registerClass("_g.cU", _g.kt);
_g.bf.registerClass("_g.bf", _ff.e, 0);
_g.dy.registerClass("_g.dy", _g.kr, 0, 0);
_g.cF.registerClass("_g.cF", _ff.e, 0);
_g.fZ.registerClass("_g.fZ", _g.hK, 0, 0);
_g.cJ.registerClass("_g.cJ", _ff.e, 0);
_g.gA.registerClass("_g.gA", _ff.e, 0);
_g.et.registerClass("_g.et", _g.kr, 0, 0);
_g.fB.registerClass("_g.fB", _ff.e);
_g.kB.registerClass("_g.kB", _ff.e, 0);
_g.jQ.registerClass("_g.jQ", _g.hK, 0, 0);
_g.fS.registerClass("_g.fS", _g.ei, 0, 0);
_g.jE.registerClass("_g.jE", _ff.e);
_g.gC.registerClass("_g.gC", _ff.e, 0);
_g.kG.registerClass("_g.kG", _g.kB, 0, 0);
_g.t.registerClass("_g.t", _g.kG, 0, 0, 0);
_g.kv.registerClass("_g.kv", _g.kB, 0, 0);
_g.bd.registerClass("_g.bd", _g.kv, 0, 0, 0);
_g.gG.registerClass("_g.gG", _g.kr, 0, 0);
_g.cI.registerClass("_g.cI", _g.hu, 0, 0);
_g.fs.registerClass("_g.fs", _g.hu);
_g.fq.registerClass("_g.fq", _g.U, 0, 0, 0);
_g.jl.registerClass("_g.jl", _ff.e, 0);
_g.iS.registerClass("_g.iS", _g.jl, 0, 0);
_g.ek.registerClass("_g.ek", _ff.e, 0);
_g.dd.registerClass("_g.dd", _ff.e, 0);
_g.jx.registerClass("_g.jx", _g.jl, 0, 0);
_g.jB.registerClass("_g.jB", _g.jl);
_g.eB.registerClass("_g.eB", _g.hX, 0, 0);
_g.br.registerClass("_g.br", _g.kB, 0, 0);
_g.gu.registerClass("_g.gu", _ff.e, 0);
_g.fl.registerClass("_g.fl", _ff.e);
_g.fn.registerClass("_g.fn", _g.kr);
_g.hs.registerClass("_g.hs", _ff.e, 0);
_g.hV.registerClass("_g.hV", _g.jl, 0, 0);
_g.id.registerClass("_g.id", _g.hV, 0, 0, 0);
_g.hb.registerClass("_g.hb", _g.kr);
_g.fy.registerClass("_g.fy", _g.ku);
_g.hr.registerClass("_g.hr", _ff.e, 0);
_g.hn.registerClass("_g.hn", _g.hr, 0, 0);
_g.ez.registerClass("_g.ez", _g.kr);
_g.dH.registerClass("_g.dH", _ff.e, 0);
_g.kH.registerClass("_g.kH", _ff.e);
_g.dS.registerClass("_g.dS", _g.kr);
_g.gF.registerClass("_g.gF", _g.ks);
_g.da.registerClass("_g.da", _ff.e, 0);
_g.jf.registerClass("_g.jf", _g.ko);
_g.cM.registerClass("_g.cM", _ff.e, 0);
_g.fo.registerClass("_g.fo", _ff.e, 0);
_g.ie.registerClass("_g.ie", _g.id, 0, 0, 0, 0);
_g.fF.registerClass("_g.fF", _ff.e, 0);
_g.fG.registerClass("_g.fG", _ff.e, 0);
_g.kc.registerClass("_g.kc", _ff.e);
_g.fL.registerClass("_g.fL", _g.ks);
_g.fO.registerClass("_g.fO", _g.ks);
_g.fW.registerClass("_g.fW", _g.ks);
_g.gc.registerClass("_g.gc", _g.ks);
_g.ii.registerClass("_g.ii", _g.ks);
_g.il.registerClass("_g.il", _g.ks);
_g.it.registerClass("_g.it", _g.ks);
_g.gb.registerClass("_g.gb", _g.ks);
_g.iM.registerClass("_g.iM", _ff.e);
_g.ji.registerClass("_g.ji", _g.ks);
_g.jS.registerClass("_g.jS", _g.ks);
_g.jz.registerClass("_g.jz", _g.ks);
_g.hP.registerClass("_g.hP", _g.ks);
_g.hT.registerClass("_g.hT", _g.ks);
_g.iv.registerClass("_g.iv", _g.ks);
_g.iA.registerClass("_g.iA", _g.ks);
_g.jX.registerClass("_g.jX", _g.ks);
_g.ip.registerClass("_g.ip", _g.ks);
_g.gf.registerClass("_g.gf", _g.gz, 0, 0);
_g.ge.registerClass("_g.ge", _g.kr);
_g.dQ.registerClass("_g.dQ", _ff.e, 0);
_g.cN.registerClass("_g.cN", _ff.e, 0);
_g.kq.registerClass("_g.kq", _g.kr);
_g.fu.registerClass("_g.fu", _g.kq);
_g.ft.registerClass("_g.ft", _g.hX, 0, 0);
_g.ig.registerClass("_g.ig", _g.hK, 0, 0);
_g.fw.registerClass("_g.fw", _g.kr);
_g.fv.registerClass("_g.fv", _g.hX, 0, 0);
_g.ij.registerClass("_g.ij", _g.hK, 0, 0);
_g.gL.registerClass("_g.gL", _g.bo, 0, 0, 0, 0, 0, 0);
_g.fD.registerClass("_g.fD", _g.kr);
_g.fC.registerClass("_g.fC", _g.hX, 0, 0);
_g.ir.registerClass("_g.ir", _g.hK, 0, 0);
_g.eq.registerClass("_g.eq", _g.kr);
_g.kw.registerClass("_g.kw", _ff.e, 0);
_g.fJ.registerClass("_g.fJ", _g.kw);
_g.fK.registerClass("_g.fK", _g.kr);
_g.fI.registerClass("_g.fI", _g.hX, 0, 0);
_g.iD.registerClass("_g.iD", _g.hK, 0, 0);
_g.dx.registerClass("_g.dx", _g.hX, 0, 0);
_g.bv.registerClass("_g.bv", _g.ht);
_g.bu.registerClass("_g.bu", _g.hX, 0, 0);
_g.iH.registerClass("_g.iH", _g.hK, 0, 0);
_g.iL.registerClass("_g.iL", _g.hK, 0, 0);
_g.fV.registerClass("_g.fV", _g.hX, 0, 0);
_g.fT.registerClass("_g.fT", _ff.e, 0);
_g.hk.registerClass("_g.hk", _g.hK, 0, 0);
_g.dA.registerClass("_g.dA", _g.kr);
_g.dz.registerClass("_g.dz", _g.hX, 0, 0);
_g.iN.registerClass("_g.iN", _g.hK, 0, 0);
_g.iO.registerClass("_g.iO", _g.hK, 0, 0);
_g.ex.registerClass("_g.ex", _ff.e, 0);
_g.iQ.registerClass("_g.iQ", _g.hK, 0, 0);
_g.hl.registerClass("_g.hl", _g.hK, 0, 0);
_g.dG.registerClass("_g.dG", _g.hX, 0, 0);
_g.fH.registerClass("_g.fH", _g.hX, 0, 0);
_g.gj.registerClass("_g.gj", _g.kr);
_g.gi.registerClass("_g.gi", _g.hX, 0, 0);
_g.cx.registerClass("_g.cx", _g.dr, 0, 0);
_g.jd.registerClass("_g.jd", _g.dr, 0, 0);
_g.gp.registerClass("_g.gp", _g.kq);
_g.go.registerClass("_g.go", _g.hX, 0, 0);
_g.gn.registerClass("_g.gn", _g.hb);
_g.gm.registerClass("_g.gm", _g.hX, 0, 0);
_g.jg.registerClass("_g.jg", _g.hK, 0, 0);
_g.jm.registerClass("_g.jm", _g.hK, 0, 0);
_g.ca.registerClass("_g.ca", _g.kG, 0, 0, 0);
_g.cm.registerClass("_g.cm", _g.hv, 0, 0);
_g.cc.registerClass("_g.cc", _g.kr);
_g.cr.registerClass("_g.cr", _g.hX, 0, 0);
_g.cO.registerClass("_g.cO", _g.hK, 0, 0);
_g.gx.registerClass("_g.gx", _g.kr);
_g.gw.registerClass("_g.gw", _g.hX, 0, 0);
_g.gJ.registerClass("_g.gJ", _g.F);
_g.gy.registerClass("_g.gy", _ff.e);
_g.hx.registerClass("_g.hx", _g.kr);
_g.gI.registerClass("_g.gI", _g.hx);
_g.eo.registerClass("_g.eo", _g.kv, 0, 0, 0);
_g.jT.registerClass("_g.jT", _g.hK, 0, 0);
_g.kI.registerClass("_g.kI", _g.kH);
_g.hQ.registerClass("_g.hQ", _g.gz);
_g.hU.registerClass("_g.hU", _g.gz);
_g.iw.registerClass("_g.iw", _g.gz);
_g.fk.registerClass("_g.fk", _g.kr, 0, 0);
_g.hN.registerClass("_g.hN", _g.hK, 0, 0);
_g.fj.registerClass("_g.fj", _g.hX, 0, 0);
_g.fA.registerClass("_g.fA", _g.kr);
_g.im.registerClass("_g.im", _g.hK, 0, 0);
_g.fz.registerClass("_g.fz", _g.hX, 0, 0);
_g.iq.registerClass("_g.iq", _g.gz);
_g.iF.registerClass("_g.iF", _g.hK, 0, 0);
_g.fR.registerClass("_g.fR", _g.hX, 0, 0);
_g.hm.registerClass("_g.hm", _g.hK, 0, 0);
_g.jZ.registerClass("_g.jZ", _g.hK, 0, 0);
_g.gK.registerClass("_g.gK", _ff.e, 0);
_g.hR.registerClass("_g.hR", _g.hK, 0, 0);
_g.X.registerClass("_g.X", _ff.e, 0);
_g.Y.registerClass("_g.Y", _ff.e);
_g.eQ.registerClass("_g.eQ", _ff.e, 0);
_g.eR.registerClass("_g.eR", _g.jY, 0, 0);
_g.fN.registerClass("_g.fN", _g.kw, 0, 0);
_g.dB.registerClass("_g.dB", _g.kK, 0, 0, 0);
_g.jn.registerClass("_g.jn", _ff.e);
_g.hz.registerClass("_g.hz", _ff.e, 0);
_g.kd.registerClass("_g.kd", _ff.e);
_g.hY.registerClass("_g.hY", _ff.e, 0);
_g.cP.registerClass("_g.cP");
_g.hA.registerClass("_g.hA");
_g.dV.registerClass("_g.dV", _a.br);
_g.bB.registerClass("_g.bB");
_g.J.registerClass("_g.J");
_g.kf.registerClass("_g.kf");
_g.kM.registerClass("_g.kM");
_g.bs.registerClass("_g.bs", _j.S);
_g.gN.registerClass("_g.gN");
CoreWebServicesComponent.registerClass("CoreWebServicesComponent", null, _a.kg, _j.ce);
_g.bT.registerClass("_g.bT", _g.m);
_g.N.registerClass("_g.N", _g.m);
_g.bS.registerClass("_g.bS", null, _a.eQ);
_g.kg.registerClass("_g.kg", _no.k);
_g.kg.prototype.toString = _no.k.prototype.toString;
_g.k.registerClass("_g.k", _j.bZ, _g.kO, Sys.IDisposable);
_g.kh.registerClass("_g.kh", null, _a.eS, _g.eW);
_g.Q.registerClass("_g.Q", _g.kA);
_g.dX.registerClass("_g.dX");
_g.gP.registerClass("_g.gP", Sys.Net.WebRequestExecutor);
_g.cs.registerClass("_g.cs");
_g.kQ.registerClass("_g.kQ");
_g.gQ.registerClass("_g.gQ", null, Sys.IDisposable);
_g.cB.registerClass("_g.cB");
_g.OWSVersion.registerClass("_g.OWSVersion");
_g.eY.registerClass("_g.eY");
_g.ki.registerClass("_g.ki");
_g.kR.registerClass("_g.kR");
_g.fa.registerClass("_g.fa", null, _g.gO);
_g.gR.registerClass("_g.gR");
_g.K.registerClass("_g.K", _a.co, _a.cF);
_g.Attachment.registerClass("_g.Attachment", _g.K, _j.bs, Sys.IDisposable, _a.kt, _a.cF);
_g.y.registerClass("_g.y", _g.K, _a.kt, _a.cF);
_g.bF.registerClass("_g.bF", _g.K, _a.kt, _a.cF);
_g.ce.registerClass("_g.ce", _g.K, _a.kt, _a.cF);
_g.f.registerClass("_g.f", _g.K, _a.eh, _j.L, _ff.u, _g.kU, _g.hI, _g.hG, _a.kt, _a.cF);
_g.kX.registerClass("_g.kX", _ff.e);
_g.D.registerClass("_g.D", _g.Attachment, _g.kU, _a.kt, _a.cF);
_g.bp.registerClass("_g.bp", _g.K, _a.kt, _a.cF);
_g.ct.registerClass("_g.ct", _g.K, _a.kt, _a.cF);
_g.j.registerClass("_g.j", _g.K, _a.eh, _j.L, _a.kt, _a.cF);
_g.p.registerClass("_g.p", _g.K, _a.eh, _j.L, _ff.u, _g.hI, _g.hG, _a.kt, _a.cF);
_g.fc.registerClass("_g.fc");
_g.i.registerClass("_g.i", _g.f, _g.x, _g.kU, _a.kt, _a.cF);
_g.cd.registerClass("_g.cd", _g.K, _a.kt, _a.cF);
_g.kS.registerClass("_g.kS", _g.kX);
_g.gS.registerClass("_g.gS", _g.K, _a.kt, _a.cF);
_g.v.registerClass("_g.v", _g.gS, _a.kt, _a.cF);
_g.dq.registerClass("_g.dq", _g.K, _a.kt, _a.cF);
_g.bl.registerClass("_g.bl", _g.f, _g.x, _a.kt, _a.cF);
_g.cE.registerClass("_g.cE", _g.K, _a.kt, _a.cF);
_g.w.registerClass("_g.w", _g.K, _a.kt, _a.cF);
_g.lb.registerClass("_g.lb", _g.kX);
_g.ci.registerClass("_g.ci", _g.i, _g.kU);
_g.lc.registerClass("_g.lc", _g.kS);
_g.bg.registerClass("_g.bg", _g.K, _a.kt, _a.cF);
_g.C.registerClass("_g.C");
_g.ld.registerClass("_g.ld", _g.K, _a.kt, _a.cF);
_g.eb.registerClass("_g.eb", _g.ld, _a.kt, _a.cF);
_g.bc.registerClass("_g.bc", _g.K, _a.kt, _a.cF);
_g.bO.registerClass("_g.bO", _g.ld, _g.kY, _a.kt, _a.cF);
_g.E.registerClass("_g.E", _g.K, _a.kt, _a.cF);
_g.ff.registerClass("_g.ff");
SmimeControlSettings.registerClass("SmimeControlSettings");
SmimeStrings.registerClass("SmimeStrings");
_g.a.registerClass("_g.a", _g.K, _g.cf, _g.h, _a.jx, _ff.b, _a.kt, _a.cF);
_g.fg.registerClass("_g.fg");
_g.Z.registerClass("_g.Z", _g.ld, _g.kY, _g.IReadingPaneOptions, _a.kt, _a.cF);
_g.by.registerClass("_g.by", _g.ld, _g.kY, _g.kZ, _a.kt, _a.cF);
_g.dZ.registerClass("_g.dZ", _g.K, _a.kt, _a.cF);
_g.gT.registerClass("_g.gT", _g.K, _a.kt, _a.cF);
_g.gU.registerClass("_g.gU", _g.K, _a.kt, _a.cF);
_g.fb.registerClass("_g.fb", _g.K, _a.kt, _a.cF);
_g.dn.registerClass("_g.dn", _g.K, _a.kt, _a.cF);
_g.bN.registerClass("_g.bN", _g.K, _a.kt, _a.cF);
_g.W.registerClass("_g.W", _g.K, _a.kt, _a.cF);
_g.dp.registerClass("_g.dp", _g.j, _a.kt, _a.cF);
_g.ea.registerClass("_g.ea", _g.K, _a.kt, _a.cF);
_g.be.registerClass("_g.be", _g.K, _a.kt, _a.cF);
_g.gV.registerClass("_g.gV", _g.K, _a.kt, _a.cF);
_g.bV.registerClass("_g.bV", _g.gV, _a.kt, _a.cF);
_g.gX.registerClass("_g.gX", _g.i, _a.kt, _a.cF);
_g.bh.registerClass("_g.bh", _g.gX, _a.kt, _a.cF);
_g.gY.registerClass("_g.gY", _g.bh, _a.kt, _a.cF);
_g.bx.registerClass("_g.bx", _g.gY, _a.kt, _a.cF);
_g.cQ.registerClass("_g.cQ", _g.bx, _a.kt, _a.cF);
_g.ch.registerClass("_g.ch", _g.K, _a.kt, _a.cF);
_g.u.registerClass("_g.u", _g.j, _a.kt, _a.cF);
_g.cR.registerClass("_g.cR", _g.gT, _a.kt, _a.cF);
_g.ec.registerClass("_g.ec", _g.K, _a.kt, _a.cF);
_g.gW.registerClass("_g.gW", _g.bx, _a.kt, _a.cF);
_g.cC.registerClass("_g.cC", _g.bx, _a.kt, _a.cF);
_g.cD.registerClass("_g.cD", _g.bx, _a.kt, _a.cF);
_g.bW.registerClass("_g.bW", _g.u, _a.kt, _a.cF);
_g.bI.registerClass("_g.bI", _g.K, _a.kt, _a.cF);
_g.cu.registerClass("_g.cu", _g.K, _a.kt, _a.cF);
_g.dm.registerClass("_g.dm", _g.K, _a.kt, _a.cF);
_g.H.dataContractName = "ActionRecord:#Exchange";
_g.H.b = 0;
_g.en._dataContractName = "Conversation:#Exchange";
_g.cq._dataContractName = "SuggestionType:#Exchange";
_g.e._dataContractName = "ItemId:#Exchange";
_g.cz._dataContractName = "QueryStringType:#Exchange";
_g.z._dataContractName = "CalendarItem:#Exchange";
_g.bX.a = "Descending";
_g.bX.c = new _g.d("ConversationLastDeliveryTime").FieldURI;
_g.bt.a = "Descending";
_g.V._dataContractName = "JsonFaultBody:#Exchange";
_g.eC._dataContractName = "LinkPreview:#Exchange";
_g.bq._dataContractName = "AttachmentType:#Exchange";
_g.dC._dataContractName = "ItemIdAttachment:#Exchange";
_g.di._dataContractName = "Notification:#Exchange";
_g.cj._dataContractName = "ComplianceConfiguration:#Exchange";
_g.P.a = null;
_g.P._dataContractName = "SmimeAdminSettingsType:#Exchange";
_g.S._dataContractName = "SubscriptionParameters:#Exchange";
_g.cS._dataContractName = "AcceptItem:#Exchange";
_g.fh._dataContractName = "AcceptSharingInvitation:#Exchange";
_g.fi._dataContractName = "AddItemToMyCalendar:#Exchange";
_g.bJ._dataContractName = "AddressListId:#Exchange";
_g.ds._dataContractName = "ApplicationSettingsType:#Exchange";
_g.ed._dataContractName = "AppliedHashtagWrapper:#Exchange";
_g.hM._dataContractName = "AppliedHashtagsPreviewWrapper:#Exchange";
_g.ef._dataContractName = "ApprovalRequestDataType:#Exchange";
_g.bi._dataContractName = "AttachmentId:#Exchange";
_g.fp._dataContractName = "AttachmentPolicyType:#Exchange";
_g.hW._dataContractName = "ContentPreview:#Exchange";
_g.eh._dataContractName = "BingNativeAdsData:#Exchange";
_g.s._dataContractName = "BodyContentType:#Exchange";
_g.hf._dataContractName = "BootUserProfile:#Exchange";
_g.hZ._dataContractName = "BreadcrumbAdapterType:#Exchange";
_g.ib._dataContractName = "CalendarDataProvider:#Exchange";
_g.ej._dataContractName = "CancelCalendarItem:#Exchange";
_g.bC._dataContractName = "CategoryType:#Exchange";
_g.ClientVersionProvider.currentOWSVersion = "V2018_01_18";
_g.hg._dataContractName = "ConnectedAccountInfo:#Exchange";
_g.du._dataContractName = "Contact:#Exchange";
_g.el._dataContractName = "ContactsFolder:#Exchange";
_g.ck._dataContractName = "ConversationNode:#Exchange";
_g.em._dataContractName = "ConversationThread:#Exchange";
_g.cV._dataContractName = "DeclineItem:#Exchange";
_g.r._dataContractName = "DistinguishedFolderId:#Exchange";
_g.dw._dataContractName = "DistributionList:#Exchange";
_g.er._dataContractName = "DocLink:#Exchange";
_g.cG._dataContractName = "EffectiveRightsType:#Exchange";
_g.g._dataContractName = "EmailAddress:#Exchange";
_g.iB._dataContractName = "EntityExtractionResultType:#Exchange";
_g.T._dataContractName = "ExtendedPropertyType:#Exchange";
_g.O._dataContractName = "ExtendedPropertyUri:#Exchange";
_g.es._dataContractName = "FindConversationJsonResponse:#Exchange";
_g.eu._dataContractName = "FindConversationResponseMessage:#Exchange";
_g.cH._dataContractName = "FlagType:#Exchange";
_g.m._dataContractName = "FolderId:#Exchange";
_g.bD._dataContractName = "Folder:#Exchange";
_g.bL._dataContractName = "ForwardItem:#Exchange";
_g.cX._dataContractName = "Term:#Exchange";
_g.L._dataContractName = "IndexedPageView:#Exchange";
_g.gg._dataContractName = "InReplyToAdapterType:#Exchange";
_g.iT._dataContractName = "InternetHeaderType:#Exchange";
_g.ba._dataContractName = "IsEqualTo:#Exchange";
_g.dD._dataContractName = "ItemInfoResponseMessage:#Exchange";
_g.M._dataContractName = "Item:#Exchange";
_g.gh._dataContractName = "JsonFaultResponse:#Exchange";
_g.eD._dataContractName = "LocalEventsLocationType:#Exchange";
_g.iV._dataContractName = "LikeWrapper:#Exchange";
_g.iU._dataContractName = "LikesPreviewWrapper:#Exchange";
_g.dE._dataContractName = "MailboxStatisticsItem:#Exchange";
_g.ja._dataContractName = "ManagedFolderInformationType:#Exchange";
_g.cY._dataContractName = "ManagementRoleType:#Exchange";
_g.eE._dataContractName = "MasterCategoryListType:#Exchange";
_g.cn._dataContractName = "MeetingMessage:#Exchange";
_g.dF._dataContractName = "MeetingRegistrationResponseObjectType:#Exchange";
_g.bY._dataContractName = "MeetingRequestMessageType:#Exchange";
_g.co._dataContractName = "MeetingResponseMessageType:#Exchange";
_g.je._dataContractName = "MessageSafetyType:#Exchange";
_g.I._dataContractName = "Message:#Exchange";
_g.eF._dataContractName = "MimeContentType:#Exchange";
_g.gl._dataContractName = "MobileDevicePolicySettingsType:#Exchange";
_g.eG._dataContractName = "ModernGroupType:#Exchange";
_g.cK._dataContractName = "ModernReminderType:#Exchange";
_g.cZ._dataContractName = "NavBarData:#Exchange";
_g.eH._dataContractName = "NavBarImageClipInfo:#Exchange";
_g.eI._dataContractName = "NavBarImageData:#Exchange";
_g.bE._dataContractName = "NavBarLinkData:#Exchange";
_g.jk._dataContractName = "NavBarUnclusteredImageData:#Exchange";
_g.jo._dataContractName = "OutlookFavorites:#Exchange";
_g.jp._dataContractName = "OutlookFavoriteType:#Exchange";
_g.cy._dataContractName = "OwaUserConfiguration:#Exchange";
_g.db._dataContractName = "OwaViewStateConfiguration:#Exchange";
_g.eJ._dataContractName = "Permissions:#Exchange";
_g.cL._dataContractName = "Permission:#Exchange";
_g.o._dataContractName = "PhoneNumberType:#Exchange";
_g.gr._dataContractName = "PolicySettingsType:#Exchange";
_g.cp._dataContractName = "PersonaPostalAddress:#Exchange";
_g.dc._dataContractName = "PostItem:#Exchange";
_g.gs._dataContractName = "PostReplyItemBaseType:#Exchange";
_g.eK._dataContractName = "PostReplyItem:#Exchange";
_g.hp._dataContractName = "PropertyErrorType:#Exchange";
_g.jr._dataContractName = "PropertyExistenceType:#Exchange";
_g.d._dataContractName = "PropertyUri:#Exchange";
_g.gt._dataContractName = "ProposeNewTime:#Exchange";
_g.js._dataContractName = "ReactOptinSettings:#Exchange";
_g.jt._dataContractName = "RecipientCountsType:#Exchange";
_g.bn._dataContractName = "RecurringMasterItemId:#Exchange";
_g.eL._dataContractName = "ReferenceItemResponseType:#Exchange";
_g.eM._dataContractName = "ReminderMessageDataType:#Exchange";
_g.de._dataContractName = "RemoveItem:#Exchange";
_g.dJ._dataContractName = "ReparentItem:#Exchange";
_g.bw._dataContractName = "ReplyAllToItem:#Exchange";
_g.bQ._dataContractName = "ReplyToItem:#Exchange";
_g.bo._dataContractName = "ResponseObjectType:#Exchange";
_g.eN._dataContractName = "RetentionPolicyTag:#Exchange";
_g.bM._dataContractName = "RetentionTagType:#Exchange";
_g.dK._dataContractName = "RightsManagementLicenseDataType:#Exchange";
_g.eO._dataContractName = "SafetyUserOptionsType:#Exchange";
_g.dL._dataContractName = "SearchFolder:#Exchange";
_g.jC._dataContractName = "SearchParametersType:#Exchange";
_g.jD._dataContractName = "SearchPreviewItem:#Exchange";
_g.bj._dataContractName = "SeekToConditionPageView:#Exchange";
_g.dM._dataContractName = "SegmentationSettingsType:#Exchange";
_g.dN._dataContractName = "SessionSettingsType:#Exchange";
_g.jG._dataContractName = "ShellDimensions:#Exchange";
_g.R._dataContractName = "SingleRecipientType:#Exchange";
_g.gz._dataContractName = "SingleResponseMessage:#Exchange";
_g.dO._dataContractName = "SmartResponseBaseType:#Exchange";
_g.cb._dataContractName = "SmartResponseType:#Exchange";
_g.bA._dataContractName = "SortResults:#Exchange";
_g.gB._dataContractName = "SuppressReadReceipt:#Exchange";
_g.jL._dataContractName = "SyncFolderHierarchyChangesType:#Exchange";
_g.jM._dataContractName = "SyncFolderHierarchyResponseMessage:#Exchange";
_g.F._dataContractName = "TargetFolderId:#Exchange";
_g.bR._dataContractName = "Task:#Exchange";
_g.dg._dataContractName = "TentativelyAcceptItem:#Exchange";
_g.hw._dataContractName = "TimeZoneOffsetsType:#Exchange";
_g.eS._dataContractName = "UnseenData:#Exchange";
_g.dT._dataContractName = "UserConfigurationDictionaryEntry:#Exchange";
_g.cA._dataContractName = "UserConfigurationDictionaryObject:#Exchange";
_g.eV._dataContractName = "UserId:#Exchange";
_g.dU._dataContractName = "UserOptionsType:#Exchange";
_g.kb._dataContractName = "VotingInformationType:#Exchange";
_g.dh._dataContractName = "WeatherLocationType:#Exchange";
_g.gM._dataContractName = "WellKnownResponseObjectType:#Exchange";
_g.dj._dataContractName = "WorkingHoursType:#Exchange";
_g.cv._dataContractName = "AttributionType:#Exchange";
_g.bZ._dataContractName = "PersonaType:#Exchange";
_g.dP._dataContractName = "StringArrayAttributedValue:#Exchange";
_g.hh._dataContractName = "Conversation:#Exchange";
_g.ho._dataContractName = "PeopleFilter:#Exchange";
_g.dI._dataContractName = "Reminder:#Exchange";
_g.ev._dataContractName = "FindFolderJsonResponse:#Exchange";
_g.ew._dataContractName = "FindItemJsonResponse:#Exchange";
_g.ey._dataContractName = "GetConversationItemsJsonResponse:#Exchange";
_g.eA._dataContractName = "GetItemJsonResponse:#Exchange";
_g.ht._dataContractName = "RemoteServiceRequest:#Exchange";
_g.eT._dataContractName = "UpdateItemJsonResponse:#Exchange";
_g.eU._dataContractName = "UpdateItemResponseMessage:#Exchange";
_g.ih._dataContractName = "CopyItemJsonResponse:#Exchange";
_g.ik._dataContractName = "CreateFolderJsonResponse:#Exchange";
_g.fQ._dataContractName = "FolderInfoResponseMessage:#Exchange";
_g.fx._dataContractName = "CreateItemJsonResponse:#Exchange";
_g.is._dataContractName = "DeleteFolderJsonResponse:#Exchange";
_g.fM._dataContractName = "FindFolderResponseMessage:#Exchange";
_g.fP._dataContractName = "FindItemResponseMessage:#Exchange";
_g.iJ._dataContractName = "GetCertsInfoResponse:#Exchange";
_g.fX._dataContractName = "GetConversationItemsResponseMessage:#Exchange";
_g.iK._dataContractName = "GetCertsResponse:#Exchange";
_g.fY._dataContractName = "GetFavoritesResponse:#Exchange";
_g.ga._dataContractName = "GetFolderJsonResponse:#Exchange";
_g.eP._dataContractName = "TargetFolderMruConfiguration:#Exchange";
_g.iP._dataContractName = "GetLinkPreviewResponse:#Exchange";
_g.iI._dataContractName = "GetCalendarFolderConfigurationResponse:#Exchange";
_g.gq._dataContractName = "OwaOtherMailboxConfiguration:#Exchange";
_g.jK._dataContractName = "SubscriptionResponseData:#Exchange";
_g.jh._dataContractName = "MoveFolderJsonResponse:#Exchange";
_g.jR._dataContractName = "UpdateFolderJsonResponse:#Exchange";
_g.jy._dataContractName = "SearchMailboxesJsonResponse:#Exchange";
_g.jA._dataContractName = "SearchMailboxesResponseMessage:#Exchange";
_g.jU._dataContractName = "UpdateMasterCategoryListResponse:#Exchange";
_g.ee._dataContractName = "ApplyConversationActionJsonRequest:#Exchange";
_g.hS._dataContractName = "ApplyMessageActionJsonResponse:#Exchange";
_g.fm._dataContractName = "ApplyMessageActionJsonRequest:#Exchange";
_g.hO._dataContractName = "ApplyConversationActionJsonResponse:#Exchange";
_g.dv._dataContractName = "CreateItemJsonRequest:#Exchange";
_g.ep._dataContractName = "DeleteItemJsonRequest:#Exchange";
_g.iu._dataContractName = "DeleteItemJsonResponse:#Exchange";
_g.fE._dataContractName = "EmptyFolderJsonRequest:#Exchange";
_g.iz._dataContractName = "EmptyFolderJsonResponse:#Exchange";
_g.dR._dataContractName = "UpdateItemJsonRequest:#Exchange";
_g.gH._dataContractName = "UpdateUserConfigurationJsonRequest:#Exchange";
_g.jW._dataContractName = "UpdateUserConfigurationJsonResponse:#Exchange";
_g.io._dataContractName = "CreateSweepRuleForSenderJsonResponse:#Exchange";
_g.iG._dataContractName = "GetAllowedOptionsResponse:#Exchange";
_g.gd._dataContractName = "GetRemindersJsonResponse:#Exchange";
_g.ka._dataContractName = "ValidateAggregatedConfigurationResponse:#Exchange";
_g.bK._dataContractName = "ConversationAction:#Exchange";
_g.gk._dataContractName = "MessageAction:#Exchange";
_g.bm._dataContractName = "ItemChange:#Exchange";
_g.U._dataContractName = "ItemResponseShape:#Exchange";
_g.cw._dataContractName = "JsonRequestHeaders:#Exchange";
_g.cU._dataContractName = "CreateItemRequest:#Exchange";
_g.bf._dataContractName = "RestrictionType:#Exchange";
_g.dy._dataContractName = "FindItemRequest:#Exchange";
_g.cF._dataContractName = "ConversationRequestType:#Exchange";
_g.cJ._dataContractName = "GetLinkPreviewRequest:#Exchange";
_g.gA._dataContractName = "SubscriptionData:#Exchange";
_g.et._dataContractName = "FindConversationRequest:#Exchange";
_g.fB._dataContractName = "Datapoint:#Exchange";
_g.fS._dataContractName = "GetCalendarFoldersResponse:#Exchange";
_g.jE._dataContractName = "SendLinkClickedSignalToSPRequest:#Exchange";
_g.gC._dataContractName = "TargetFolderMRUEntry:#Exchange";
_g.t._dataContractName = "SetItemField:#Exchange";
_g.bd._dataContractName = "DeleteItemField:#Exchange";
_g.gG._dataContractName = "UpdateMasterCategoryListRequest:#Exchange";
_g.cI._dataContractName = "FolderResponseShape:#Exchange";
_g.fs._dataContractName = "ConversationResponseShape:#Exchange";
_g.fq._dataContractName = "AttachmentResponseShapeType:#Exchange";
_g.jl._dataContractName = "NotificationPayloadBase:#Exchange";
_g.iS._dataContractName = "HierarchyNotificationPayload:#Exchange";
_g.ek._dataContractName = "ChatMessage:#Exchange";
_g.dd._dataContractName = "RefinerDataType:#Exchange";
_g.jx._dataContractName = "RowNotificationPayload:#Exchange";
_g.jB._dataContractName = "SearchNotificationPayload:#Exchange";
_g.eB._dataContractName = "GetRemindersJsonRequest:#Exchange";
_g.br._dataContractName = "PersonaPropertyUpdate:#Exchange";
_g.gu._dataContractName = "RefinementFilterType:#Exchange";
_g.ei._dataContractName = "CalendarActionResponse:#Exchange";
_g.fl._dataContractName = "ApplyConversationActionRequest:#Exchange";
_g.fn._dataContractName = "ApplyMessageActionRequest:#Exchange";
_g.hs._dataContractName = "RefinerDataEntryType:#Exchange";
_g.id._dataContractName = "ConvertAttachmentTypeNotificationPayload:#Exchange";
_g.hb._dataContractName = "BaseMoveCopyFolderRequest:#Exchange";
_g.hV._dataContractName = "AttachmentNotificationPayload:#Exchange";
_g.fy._dataContractName = "CreateItemResponse:#Exchange";
_g.ez._dataContractName = "GetConversationItemsRequest:#Exchange";
_g.hu._dataContractName = "ResponseShape:#Exchange";
_g.dS._dataContractName = "UpdateItemRequest:#Exchange";
_g.gF._dataContractName = "UpdateItemResponse:#Exchange";
_g.da._dataContractName = "OwaFlightOverrideData:#Exchange";
_g.jf._dataContractName = "ModernGroupMembershipRequestMessageDetailsResponse:#Exchange";
_g.cM._dataContractName = "PhotoPreview:#Exchange";
_g.fo._dataContractName = "AttachmentDataProviderPermissions:#Exchange";
_g.ie._dataContractName = "ConvertLocalToRefAttachmentNotificationPayload:#Exchange";
_g.fF._dataContractName = "ExtensibilityContext:#Exchange";
_g.fG._dataContractName = "Extension:#Exchange";
_g.kc._dataContractName = "VotingOptionDataType:#Exchange";
_g.fL._dataContractName = "FindFolderResponse:#Exchange";
_g.fO._dataContractName = "FindItemResponse:#Exchange";
_g.fW._dataContractName = "GetConversationItemsResponse:#Exchange";
_g.gc._dataContractName = "GetItemResponse:#Exchange";
_g.ii._dataContractName = "CopyItemResponse:#Exchange";
_g.il._dataContractName = "CreateFolderResponse:#Exchange";
_g.it._dataContractName = "DeleteFolderResponse:#Exchange";
_g.gb._dataContractName = "GetFolderResponse:#Exchange";
_g.iM._dataContractName = "GetFolderChangeDigestResponse:#Exchange";
_g.ji._dataContractName = "MoveFolderResponse:#Exchange";
_g.jS._dataContractName = "UpdateFolderResponse:#Exchange";
_g.jz._dataContractName = "SearchMailboxesResponse:#Exchange";
_g.hP._dataContractName = "ApplyConversationActionResponse:#Exchange";
_g.hT._dataContractName = "ApplyMessageActionResponse:#Exchange";
_g.iv._dataContractName = "DeleteItemResponse:#Exchange";
_g.iA._dataContractName = "EmptyFolderResponse:#Exchange";
_g.jX._dataContractName = "UpdateUserConfigurationResponse:#Exchange";
_g.ip._dataContractName = "CreateSweepRuleForSenderResponse:#Exchange";
_g.gf._dataContractName = "GetRemindersResponse:#Exchange";
_g.ge._dataContractName = "GetRemindersRequest:#Exchange";
_g.dQ._dataContractName = "TimeZoneContext:#Exchange";
_g.cN._dataContractName = "TimeZoneDefinitionType:#Exchange";
_g.fu._dataContractName = "CopyItemRequest:#Exchange";
_g.ft._dataContractName = "CopyItemJsonRequest:#Exchange";
_g.fw._dataContractName = "CreateFolderRequest:#Exchange";
_g.fv._dataContractName = "CreateFolderJsonRequest:#Exchange";
_g.gL._dataContractName = "VotingResponseItem:#Exchange";
_g.fD._dataContractName = "DeleteFolderRequest:#Exchange";
_g.fC._dataContractName = "DeleteFolderJsonRequest:#Exchange";
_g.eq._dataContractName = "DeleteItemRequest:#Exchange";
_g.fJ._dataContractName = "FindFolderParentWrapper:#Exchange";
_g.fK._dataContractName = "FindFolderRequest:#Exchange";
_g.fI._dataContractName = "FindFolderJsonRequest:#Exchange";
_g.dx._dataContractName = "FindItemJsonRequest:#Exchange";
_g.bv._dataContractName = "GetItemRequest:#Exchange";
_g.bu._dataContractName = "GetItemJsonRequest:#Exchange";
_g.fV._dataContractName = "GetConversationItemsJsonRequest:#Exchange";
_g.fT._dataContractName = "GetCertsRequest:#Exchange";
_g.dA._dataContractName = "GetFolderRequest:#Exchange";
_g.dz._dataContractName = "GetFolderJsonRequest:#Exchange";
_g.ex._dataContractName = "GetCalendarFolderConfigurationRequest:#Exchange";
_g.dG._dataContractName = "NotificationSubscribeJsonRequest:#Exchange";
_g.fH._dataContractName = "FindConversationJsonRequest:#Exchange";
_g.gj._dataContractName = "MarkAsJunkRequest:#Exchange";
_g.gi._dataContractName = "MarkAsJunkJsonRequest:#Exchange";
_g.cx._dataContractName = "MentionActionWrapper:#Exchange";
_g.jd._dataContractName = "MentionsPreviewWrapper:#Exchange";
_g.gp._dataContractName = "MoveItemRequest:#Exchange";
_g.go._dataContractName = "MoveItemJsonRequest:#Exchange";
_g.gn._dataContractName = "MoveFolderRequest:#Exchange";
_g.gm._dataContractName = "MoveFolderJsonRequest:#Exchange";
_g.ca._dataContractName = "SetFolderField:#Exchange";
_g.cm._dataContractName = "FolderChange:#Exchange";
_g.cc._dataContractName = "UpdateFolderRequest:#Exchange";
_g.cr._dataContractName = "UpdateFolderJsonRequest:#Exchange";
_g.gx._dataContractName = "SearchMailboxesRequest:#Exchange";
_g.gw._dataContractName = "SearchMailboxesJsonRequest:#Exchange";
_g.gJ._dataContractName = "UserConfigurationNameType:#Exchange";
_g.gy._dataContractName = "ServiceUserConfiguration:#Exchange";
_g.gI._dataContractName = "UpdateUserConfigurationOwaRequest:#Exchange";
_g.eo._dataContractName = "DeleteFolderField:#Exchange";
_g.hQ._dataContractName = "ApplyConversationActionResponseMessage:#Exchange";
_g.hU._dataContractName = "ApplyMessageActionResponseMessage:#Exchange";
_g.iw._dataContractName = "DeleteItemResponseMessage:#Exchange";
_g.fk._dataContractName = "ApplyBulkItemActionRequest:#Exchange";
_g.fj._dataContractName = "ApplyBulkItemActionJsonRequest:#Exchange";
_g.fA._dataContractName = "CreateSweepRuleForSenderRequest:#Exchange";
_g.fz._dataContractName = "CreateSweepRuleForSenderJsonRequest:#Exchange";
_g.iq._dataContractName = "CreateSweepRuleForSenderResponseMessage:#Exchange";
_g.fR._dataContractName = "GetAllowedOptionsRequest:#Exchange";
_g.gK._dataContractName = "ValidateAggregatedConfigurationRequest:#Exchange";
_g.hx._dataContractName = "UpdateUserConfigurationRequest:#Exchange";
_g.X._dataContractName = "Constant:#Exchange";
_g.Y._dataContractName = "FieldURIOrConstantType:#Exchange";
_g.jc._dataContractName = "MasterCategoryListActionResponse:#Exchange";
_g.hv._dataContractName = "StoreObjectChangeBase:#Exchange";
_g.eQ._dataContractName = "UnifiedGroupsSet:#Exchange";
_g.eR._dataContractName = "UnifiedGroupsSetsType:#Exchange";
_g.fN._dataContractName = "FindItemParentWrapper:#Exchange";
_g.dB._dataContractName = "IsLessThanOrEqualTo:#Exchange";
_g.jn._dataContractName = "OtherMailboxConfigEntry:#Exchange";
_g.hz._dataContractName = "App:#Exchange";
_g.kd._dataContractName = "WordInformation:#Exchange";
_g.hY._dataContractName = "BodyFragmentType:#Exchange";
_g.J.d = null;
_g.J.e = null;
_g.J.a = null;
_g.J.b = null;
_g.J.c = !1;
_g.bs.b = _a.a.ez;
CoreWebServicesComponent.$$cctor();
_g.bb.a = null;
_g.n.f = null;
_g.B.c = null;
_g.bS.b = new _a.bj("15.01.0603.000");
_g.bS.c = new _a.bj("15.01.0536.000");
_g.bS.d = new _a.bj("15.01.0423.000");
_g.bS.a = {
	DummyFeatureOne: new _a.bj("15.00.0707.000"),
	DummyFeatureTwo: new _a.bj("15.00.0765.000"),
	DraftsForGroupAttachments: new _a.bj("15.00.0878.000"),
	MemberSearchInUnifiedGroup: new _a.bj("15.00.0934.000"),
	AttachmentUploadCancellation: new _a.bj("15.00.1019.000"),
	AttachmentShowGroups: new _a.bj("15.00.1029.000"),
	AttachmentGetOneDriveUploadFolderName: new _a.bj("15.00.1039.000"),
	SlicedAttachments: new _a.bj("15.01.0016.000"),
	UseEmptyPost: new _a.bj("15.01.0036.000"),
	SaveAttachmentsToCloud: new _a.bj("15.01.0081.001"),
	AttachmentGetOneDriveUploadFolderProps: new _a.bj("15.01.0178.000"),
	PersonaEffectiveRights: new _a.bj("15.01.0190.000"),
	OwaPublicFolderFavorites: new _a.bj("15.01.0207.000"),
	ClassicSlicedAttachments: new _a.bj("15.01.0207.000"),
	EntityNamesMapServerChanges: new _a.bj("15.01.0254.000"),
	OwaPublicFolderXRF: new _a.bj("15.01.0330.000"),
	ExtractionSourceIdChanges: new _a.bj("15.01.0342.000"),
	TailoredXpEntitiesChanges: new _a.bj("15.01.0377.000"),
	SetAttachmentPermsV2: _g.bS.d,
	SyncDelivery: new _a.bj("15.01.0477.000"),
	TieredNotification: new _a.bj("15.01.0466.000"),
	OwaLocationWellMultipleLocations: _g.bS.b,
	ModernGroupsSendAs: new _a.bj("15.01.0645.000"),
	UnifiedGroupOwnerApproveMembers: new _a.bj("15.01.0709.000"),
	GetFileItemsCrossCacheServer: new _a.bj("15.01.0858.000"),
	PoundPercentInSharePointFileName: new _a.bj("15.01.0917.000"),
	ModernGroupsRetentionPolicyMenu: new _a.bj("15.01.0929.000"),
	ModernGroupsConversationReadUnread: new _a.bj("15.01.0991.000"),
	NewestAddedMemberTypeError: new _a.bj("15.01.1356.000")
};
_g.k.g = _a.a.eZ;
_g.k.a = null;
_g.k.f = !1;
_g.k.c = null;
_g.k.e = null;
_g.k.b = null;
_g.Q.c = ["X-FrontEnd-Begin", "X-FrontEnd-End", "X-BackEnd-Begin", "X-BackEnd-End", "X-FrontEnd-Handler-Begin"];
_g.Q.b = ["X-EXT-ProxyBegin", "X-EXT-ProxyEnd", "X-EXT-ACSBegin", "X-EXT-ACSEnd"];
_g.Q.a = "";
_g.Q.g = !1;
_g.Q.i = _a.a.cx;
_g.Q.d = null;
_g.bU.b = _g.bU.a("", "", "", "", "");
_g.dY.a = _a.a.fu;
_g.gR.$$cctor();
_g.K.b = null;
_g.Attachment.$$cctor();
_g.y.$$cctor();
_g.bF.$$cctor();
_g.ce.$$cctor();
_g.bG.a = "IsRead";
_g.f.c = new _a.d(4500, 8, 1, 0, 0, 0, 0, 0);
_g.f.i = _g.f.c.c(-1);
_g.f.D = _g.f.c.c(1);
_g.f.n = "IPM.Schedule.Meeting.Request";
_g.f.b = null;
_g.f.$$cctor();
_g.D.$$cctor();
_g.bp.$$cctor();
_g.ct.$$cctor();
_g.c.u = null;
_g.c.U = null;
_g.c.E = null;
_g.c.K = null;
_g.c.o = null;
_g.c.W = null;
_g.c.I = null;
_g.c.t = null;
_g.c.j = null;
_g.c.g = null;
_g.c.e = null;
_g.c.f = null;
_g.c.h = null;
_g.c.l = null;
_g.c.k = null;
_g.c.L = null;
_g.c.J = null;
_g.c.bc = null;
_g.c.Y = null;
_g.c.X = null;
_g.c.ba = null;
_g.c.C = null;
_g.c.bf = null;
_g.c.n = null;
_g.c.x = null;
_g.c.s = null;
_g.c.r = null;
_g.c.p = null;
_g.c.H = null;
_g.c.G = null;
_g.c.F = null;
_g.c.V = null;
_g.c.bb = null;
_g.c.Z = null;
_g.c.bg = null;
_g.c.y = null;
_g.c.z = null;
_g.c.B = null;
_g.c.A = null;
_g.c.be = null;
_g.c.bd = null;
_g.c.D = null;
_g.c.m = null;
_g.j.$$cctor();
_g.p.$$cctor();
_g.i.$$cctor();
_g.cd.$$cctor();
_g.v.b = null;
_g.v.a = null;
_g.v.c = null;
_g.v.$$cctor();
_g.dq.$$cctor();
_g.bl.$$cctor();
_g.cE.$$cctor();
_g.w.$$cctor();
_g.bg.$$cctor();
_g.b.a = null;
_g.C.c = "DateTimeReceived";
_g.C.f = "ConversationLastDeliveryTime";
_g.C.g = ["hashtag#Newsletters", "hashtag#Promotions", "hashtag#Packages", "hashtag#Travel", "hashtag#Receipts"];
_g.C.e = !1;
_g.eb.$$cctor();
_g.bc.$$cctor();
_g.bO.a = null;
_g.bO.$$cctor();
_g.E.$$cctor();
_g.A.a = null;
_g.A.c = null;
_g.A.i = 0;
_g.A.l = 0;
_g.A.h = [81, 63, 77, 15, 53, 69, 83, 55, 85];
_g.A.j = [5];
_g.A.b = null;
_g.a.b = null;
_g.a.$$cctor();
_g.Z.a = null;
_g.Z.$$cctor();
_g.by.a = null;
_g.by.$$cctor();
_g.dZ.$$cctor();
_g.gS.$$cctor();
_g.gT.$$cctor();
_g.gU.$$cctor();
_g.fb.$$cctor();
_g.dn.$$cctor();
_g.bN.$$cctor();
_g.W.$$cctor();
_g.dp.$$cctor();
_g.ea.$$cctor();
_g.be.$$cctor();
_g.bV.$$cctor();
_g.cQ.$$cctor();
_g.ch.$$cctor();
_g.u.$$cctor();
_g.cR.$$cctor();
_g.gV.$$cctor();
_g.ec.$$cctor();
_g.gW.$$cctor();
_g.cC.$$cctor();
_g.cD.$$cctor();
_g.bh.$$cctor();
_g.gX.$$cctor();
_g.bW.$$cctor();
_g.bI.$$cctor();
_g.gY.$$cctor();
_g.bx.$$cctor();
_g.cu.$$cctor();
_g.dm.$$cctor();
var IDialogViewModel = function() {};
IDialogViewModel.registerInterface("IDialogViewModel");
Type.registerNamespace("_bc");
var IBposUrlProvider = function() {};
IBposUrlProvider.registerInterface("IBposUrlProvider");
_bc.w = function() {};
_bc.w.registerInterface("_bc.w");
_bc.a = function() {};
_bc.a.registerInterface("_bc.a");
_bc.bR = function() {};
_bc.bR.registerInterface("_bc.bR");
_bc.M = function() {};
_bc.M.prototype = {
	noneSet: -1,
	errorCategoryNameAlreadyExists: 30,
	errorStaffAlreadyExists: 31,
	errorCategoryNameHasInvalidCharacters: 35,
	errorCannotCreatePublicFolderMeetings: 36,
	errorMessageCanNotBeSaved: 40,
	errorTaskCanNotBeSaved: 41,
	errorQuotaExceededTaskCanNotBeSaved: 42,
	errorQuotaExceededMessageCanNotBeSaved: 43,
	errorCalendarEventCanNotBeCreated: 44,
	errorMessageCanNotBeSent: 45,
	errorQuotaExceededMessageCanNotBeSent: 46,
	errorSubmissionQuotaExceededMessageCanNotBeSent: 47,
	errorIrmTooManyRecipients: 48,
	errorIRMandSMIMEonSameMessage: 49,
	errorDisconnectedCanNotBeSaved: 50,
	errorDisconnectedTaskCanNotBeSaved: 51,
	errorDisconnectedCanNotBeSent: 55,
	errorMessageCanNotBeSavedPermanent: 57,
	errorMessageCanNotBeSentPermanent: 58,
	errorItemNoLongerExistToSave: 60,
	errorItemNoLongerExistToSend: 62,
	errorTaskNoLongerExistToSave: 63,
	errorInvalidRecipientsMailCanNotBeSend: 65,
	errorInvalidSenderMailCanNotBeSend: 66,
	errorInvalidRecipientsMeetingCanNotExecuteOperation: 67,
	errorInvalidPollResource: 68,
	errorNoRecipentsMailCanNotBeSend: 70,
	errorInvalidCustomerAddress: 71,
	errorBookingStaffDownloadFailed: 72,
	errorBookingServicesDownloadFailed: 73,
	errorNoPollOptionSelectedCanNotBeFinalized: 74,
	errorAttachmentInProgressMailCanNotBeSend: 75,
	errorPollWithOneOptionCannotBeSaved: 76,
	errorInvalidPollRecipient: 77,
	errorPollWithOneAttendeeCannotBeSaved: 78,
	errorPollWithMoreThanMaxAllowedInstancesCannotBeSaved: 79,
	errorNoPermissionToSendAs: 80,
	errorNoMeetingOnFamilyCalendar: 81,
	errorKioskFailedRequest: 82,
	errorItemDoesNotExist: 83,
	errorCantPopout: 84,
	errorCantPopoutWithDetails: 85,
	errorCantNavigateAway: 86,
	errorCantNavigateAwayWithDetails: 87,
	errorRequestTimedOut: 88,
	errorServiceUnavailable: 89,
	errorAccountSuspend: 90,
	errorExceededMaxRecipientLimit: 91,
	errorExceededMessageLimit: 92,
	errorMessageBlocked: 93,
	errorMessageSubmissionBlocked: 94,
	errorNoMeetingAllowedOnCalendar: 95,
	errorFilesListRefreshingFailed: 96,
	errorInvalidRecipientsMailCanNotBeSendInvalidRecipientsList: 97,
	errorAccountSuspendShowTierUpgrade: 98,
	errorExceededMaxRecipientLimitShowTierUpgrade: 99,
	errorExceededMessageLimitShowTierUpgrade: 100,
	errorExceededHourlyMessageLimit: 101,
	errorMessageTimeout: 102,
	errorMessageThrottled: 103,
	errorMessageTransientError: 104,
	errorFilesListViewPartialError: 105,
	errorTrapOnSendWaitingExtensibilityContext: 106,
	errorTrapOnSendApplicationBlockingSend: 107,
	errorInvalidPriceValue: 108,
	errorInvalidBookingFeeValue: 109,
	errorInvalidBookingTaxValue: 110,
	errorInvalidTotalBookingFeeValue: 111,
	errorBookingConsentTextNeeded: 112,
	lastErrorMessage: 499,
	policyTipMessage: 500,
	lastPolicyTipMessage: 550,
	warningDraftVisibleToAllSiteMailboxMembers: 596,
	warningMailTipMailBoxFull: 597,
	warningMailTipNoPermissionToSend: 598,
	warningMailTipModeratedMessage: 599,
	warningFilesCanNotBeAttached: 600,
	warningFilesCannotBeAttachedCheckPolicy: 601,
	warningFilesWithNamesCannotBeAttachedCheckPolicy: 602,
	warningFilesCanNotBeAttachedGenericError: 610,
	warningFilesCanNotBeAttachedGroupSharePointNotProvisioned: 611,
	warningFilesCanNotBeAttachedGroupGenericError: 612,
	warningSeveralFilesCanNotBeAttachedGenericError: 620,
	warningSeveralFilesCanNotBeAttachedGroupSharePointNotProvisioned: 621,
	warningFilesCanNotBeAttachedGenericErrorNoRetry: 630,
	warningSeveralFilesCanNotBeAttachedGenericErrorNoRetry: 640,
	warningEmptyFilesCanNotBeAttached: 650,
	warningLargeReferenceFileCanNotBeAttached: 655,
	warningAttachmentsCanNotBeDeleted: 660,
	warningAttachmentsCanNotBeDownloaded: 661,
	warningConvertingAttachmentExceedsMaxMessageSize: 662,
	warningConvertLocalToRefAttachmentInProgress: 663,
	warningConvertRefToLocalAttachmentInProgress: 664,
	warningNoPermissionToShareButAccessRequest: 665,
	warningSeveralAttachmentsCanNotBeDeleted: 670,
	warningSeveralAttachmentsCanNotBeDownloaded: 671,
	warningCannotUploadToGroupsFiles: 672,
	warningDragAndDropFromDesktopIsNotSupported: 680,
	warningUnsupportedInlineAttachmentType: 690,
	warningNoPermissionToPerformAction: 700,
	firstSmimeWarningMessagge: 701,
	warningSmimeConversationViewNotSupportedWithClickHere: 703,
	warningSmimeConversationViewNotSupportedSortByDateNeeded: 704,
	warningSmimeConversationViewSignatureNotVerifiedWithClickHere: 706,
	firstSmimeWarningMessaggeWhenEnabled: 710,
	warningSmimeUnknownErrorOccured: 711,
	warningSmimeCannotDecrypt: 713,
	warningSmimeCannotVerify: 714,
	warningSmimeCannotEncrypt: 716,
	warningSmimeCannotSign: 717,
	warningSmimeCannotFetchDataPackage: 725,
	warningSmimePluginNotSupported: 726,
	warningSmimePluginNotInstalledOnEncryptedMessage: 727,
	warningSmimePluginOutOfDate: 728,
	warningSmimeCannotGetCerts: 729,
	warningSmimeQuotedBodyIsNotComplete: 730,
	warningSmimePluginNotInstalledOnSignedMessage: 732,
	warningSmimePluginNotSupportedOnSignedMessage: 733,
	warningSmimePluginNotInstalledOnReplyToSignedMessage: 734,
	warningSmimePluginNotSupportedOnReplyToSignedMessage: 735,
	warningSmimePluginNotInstalledOnForwardOfSignedMessage: 736,
	warningSmimePluginNotSupportedOnForwardOfSignedMessage: 737,
	warningSmimePluginNotInstalledOnCompose: 738,
	warningSmimeNotSupportedForAccount: 739,
	warningSmimeNoCertsFound: 741,
	warningSmimeBccForkedSendFailed: 742,
	warningSmimeCannotVerifyChoosenCertificate: 743,
	warningSmimeChoosenCertificateIsInvalid: 744,
	warningSmimeChoosenCertificateIsRevoked: 745,
	warningSmimeChoosenCertificateIsUntrusted: 746,
	warningSmimePluginOutOfDateReplyForward: 747,
	warningSmimePluginOutOfDateCantOpenMessage: 748,
	warningSmimePluginOutOfDateSigned: 749,
	warningSmimeNotSupportedWithFromRecipientWell: 750,
	warningSmimeDataPackageTooLarge: 752,
	warningSmimeCannotParseMimeContent: 753,
	warningSmimeCannotBuildMimeContent: 754,
	warningSmimeCannotAcquireCspContext: 755,
	warningSmimeCannotEncodeSigningTime: 756,
	warningSmimeCannotOpenMsgToEncode: 757,
	warningSmimeCannotOpenMsgToDecode: 758,
	warningSmimeCannotProcessMessage: 759,
	warningSmimeCannotGetMessageParam: 760,
	warningSmimeCannotGetCertContextProperty: 761,
	warningSmimeCannotGetSigningTimes: 762,
	warningSmimeCannotGetCertsInMessage: 763,
	warningSmimeCannotAddSignerToMessage: 764,
	warningSmimeCannotAddCertsToMessage: 765,
	warningSmimeCannotOpenCertStore: 766,
	warningSmimeCannotGetSubjectCertFromStore: 767,
	warningSmimeUserCanceledSelectingCert: 768,
	warningSmimeCannotAccessSmartcard: 769,
	warningSmimeCannotParseEncryptionAlgorithms: 770,
	warningSmimeCannotParseSigningAlgorithms: 771,
	warningSmimeCannotEncodeSmimeCapabilities: 772,
	warningSmimeControlFailedToConnectToExtensionBackground: 781,
	warningSmimeDomainRejectedError: 782,
	lastSmimeWarningMessagge: 799,
	warningMaxRecipientsExceed: 800,
	warningSubmittedMessageNotSent: 801,
	warningMessageSubmitted: 802,
	warningEventNotUpToDateVersion: 900,
	warningLinkAndActiveContentDisabled: 950,
	warningNoMeetingsPollsOnSecondaryCalendar: 974,
	warningNoResponseTrackingForMeetingOnSecondaryCalendar: 975,
	warningCannotEditPublicFolderMeetings: 976,
	warningBookingStaffMissing: 977,
	warningFeedbackSendError: 978,
	warningFeedbackScreenshotError: 979,
	warningPollNotCreated: 980,
	warningFeedbackUvAttachmentFileSizeError: 981,
	warningFeedbackSameAttachmentFileError: 982,
	lastWarningMessage: 1e3,
	infoDraftSavedAt: 1001,
	infoDraftWillBeSentWithDelay: 1002,
	infoDraftReparentSuccess: 1003,
	infoDraftReparentFailure: 1004,
	lastDraftMessage: 1005,
	infoEventOccursInThePast: 1100,
	infoMeetingHasBeenCanceled: 1200,
	infoMeetingAttendeeDoNotForward: 1210,
	infoDoesNotRequireResponseAttendee: 1300,
	infoDoesNotRequireResponseOrganizer: 1400,
	infoViewAttendeesPivotForResponseTracking: 1500,
	infoMeetingRequestAcceptedOn: 1600,
	infoMeetingRequestDelegateAcceptedOn: 1700,
	infoMeetingRequestTentativelyAcceptedOn: 1800,
	infoMeetingRequestDelegateTentativelyAcceptedOn: 1900,
	infoMeetingRequestDeclinedOn: 2e3,
	infoMeetingRequestDelegateDeclinedOn: 2100,
	infoRecurrenceOccursInThePast: 2200,
	infoReadingPaneResponded: 2300,
	lastCalendarReadingInfoMessage: 3e3,
	delegateReceviedPrincipalMeetingMessage: 3010,
	infoIrmProtectedMessageIsAttached: 3050,
	infoCancelingSeries: 3100,
	infoForwardingSeries: 3105,
	infoAcceptingSeries: 3110,
	infoTentativelyAcceptingSeries: 3115,
	infoDecliningSeries: 3120,
	infoCancelingOccurrence: 3200,
	infoForwardingOccurrence: 3205,
	infoAcceptingOccurrence: 3210,
	infoTentativelyAcceptingOccurrence: 3215,
	infoDecliningOccurrence: 3220,
	infoTailoredFeedback: 3230,
	infoDelegateAccepted: 3250,
	infoDelegateTentativelyAccepted: 3255,
	infoDelegateDeclined: 3260,
	infoRetrievingMessage: 3400,
	infoUpgradeMessage: 3440,
	infoFailureToShowOriginalMessage: 3450,
	infoMessageMovedToDraft: 3480,
	infoPleaseTreatAsPersonal: 3500,
	infoPleaseTreatAsConfidential: 3600,
	infoPleaseTreatAsPrivate: 3700,
	infoMessageClassification: 3800,
	infoMailTipLargeAudience: 3900,
	infoMailtipCustomText: 4e3,
	infoMailtipAutomaticReply: 4100,
	infoAttachmentNotSafe: 4200,
	infoMailTipExternalRecipients: 4300,
	infoMailtipReplyAllToBCC: 4400,
	infoMailtipUserAutoAddedToCC: 4450,
	infoMailtipAccessibilityChecker: 4460,
	infoIrmProtected: 4499,
	infoConversationOwner: 4500,
	infoOnlyIrmOwnerCanChangeFromField: 4525,
	infoIrmOpenMessageInItemView: 4550,
	infoItemPartLoadFailureMessage: 4575,
	infoComposeEventOccursInThePast: 4600,
	infoComposeSkypeMeetingDetails: 4625,
	infoEditingOccurrenceOfSeries: 4700,
	infoViewingOccurrenceOfSeries: 4710,
	infoEditingMasterOfSeries: 4800,
	infoViewingMasterOfSeries: 4810,
	infoMeetingRequestOutOfDateDeleted: 5e3,
	infoPleaseRespondToApprovalRequest: 5200,
	infoRespondToVote: 5210,
	infoOnlineMeeting: 5400,
	infoDoesNotRequireResponseForInformationalUpdate: 5800,
	infoMeetingAcceptedByDelegate: 5900,
	infoMeetingTentativelyAcceptedByDelegate: 6e3,
	infoMeetingDeclinedByDelegate: 6100,
	infoComposeRecurrenceOccursInThePast: 6200,
	infoComposePollOccursInThePast: 6210,
	infoComposePollSomeOptionsInPast: 6220,
	infoFinalizePollOccursInPast: 6230,
	infoReceivedByDelegate: 6300,
	infoRequestSentToDelegate: 6400,
	infoDelegateNotRespond: 6500,
	infoMeetingAttendeeResponse: 6700,
	infoAttendeeHasProposedNewTime: 6701,
	infoMultipleAttendeesHaveProposedNewTime: 6702,
	infoMessageNotSent: 6800,
	infoAcceptedOnBehalf: 7100,
	infoTentativelyAcceptedOnBehalf: 7200,
	infoDeclinedOnBehalf: 7300,
	infoSuggestedLinks: 7400,
	infoContentUnblock: 7700,
	infoContentUnblockedTemporarily: 7725,
	infoContentUnblockAlways: 7750,
	infoFlaggedOrComplete: 7800,
	infoReadReceiptRequested: 8e3,
	infoReadReceiptSent: 8100,
	infoHighImportance: 8200,
	infoLowImportance: 8300,
	infoVotingRequestDecided: 8310,
	infoVotingRequestResponded: 8320,
	infoVotingResponse: 8330,
	infoReplyOnDate: 8400,
	infoForwardOnDate: 8500,
	infoItemWillExpire: 8600,
	retentionPolicyDetails: 8610,
	infoAddressHidden: 8700,
	infoConflictAtThisTime: 8800,
	infoMarkedAsPersonal: 8900,
	infoMarkedAsConfidential: 8901,
	infoMarkedAsPrivate: 8902,
	infoPredictedItemReasons: 9300,
	infoPredictedConversationRespond: 9310,
	infoPredictedConversationFollowUp: 9311,
	infoPredictedConversationDelete: 9312,
	infoSendAgain: 9400,
	sendAgainOpenOriginalMessageError: 9500,
	offlineDiscoveryInfo: 9600,
	infoTaskAssigned: 10010,
	infoTaskDueToday: 10020,
	infoTaskDueYesterday: 10030,
	infoTaskDueTomorrow: 10040,
	infoTaskDueInDays: 10050,
	infoTaskOverDue: 10060,
	infoTaskOverDueInDays: 10070,
	infoTaskCompleted: 10080,
	draftPrefix: 10090,
	policyTipsPrefix: 10091,
	errorPrefix: 10092,
	infoOfflineItemNotSynced: 10100,
	infoShareFileInsteadOfAttachSingle: 10200,
	infoShareFileInsteadOfAttachMultiple: 10201,
	infoLargeFileSuggestSharingSingle: 10202,
	infoLargeFileSuggestSharingMultiple: 10203,
	infoPlainTextShareFromCloudNotSupported: 10204,
	infoCannotAttachFolder: 10205,
	infoOmeWillEncrypt: 10206,
	infoOmeDidEncrypt: 10207,
	infoPeopleRecommendations: 10208,
	likersList: 10209,
	infoCouldNotRetrieveDL: 10210,
	infoDLExpansionTooLarge: 10211,
	infoOmeWillExpire: 10212,
	infoOmeOriginalMessageWillExpire: 10213,
	infoOmeWillTimeExpireEncrypt: 10214,
	infoOmeDidTimeExpireEncrypt: 10215,
	infoCannotUpsell: 10216,
	infoNotificationsWillBeSentToBookingCustomer: 10300,
	infoAddOriginalAttachment: 10301,
	infoAtAllMentionTip: 10302,
	infoStaffNameAndSmtpRequired: 10303,
	infoBusinessNameRequired: 10304,
	infoServiceNameRequired: 10305,
	infoConversationLocked: 10306,
	infoGroupCreateSuggestionTip: 10307,
	infoUserMuted: 10308,
	infoBusinessTypeRequired: 10309,
	infoGuestsDisabledGroupWithGuests: 10310,
	infoScheduleSuccessfullySaved: 10311,
	infoScheduleFailedSave: 10312,
	infoScheduleFailedLoad: 10313,
	infoScheduleFailedDelete: 10314,
	infoSetPermissionsNotSupportedWithReferenceAttachments: 10315,
	infoSaveServiceAfterQuestionsOk: 10316,
	lastInfoMessage: 11e3,
	safetyMessageTrustedSender: 11001,
	safetyMessageSpamFighterTrusted: 11002,
	safetyMessageSafeSenderListed: 11003,
	safetyMessageSenderInContactsList: 11004,
	safetyMessageSafeSenderByOrg: 11005,
	safetyMessageMovedToJunkByOrgRule: 11006,
	safetyMessageMovedToJunkByASFRule: 11007,
	safetyMessageMovedFromJunkByUserRule: 11008,
	safetyMessageMovedToJunkByUserRule: 11009,
	safetyMessageMovedToJunkByClientAction: 11010,
	safetyMessageMovedToJunkByUserAction: 11011,
	safetyMessageMovedToJunkByBlockedSenders: 11012,
	safetyMessageMovedToJunkByService: 11013,
	safetyMessageJunkFilteringDisabled: 11014,
	safetyMessageContentDisabled: 11015,
	safetyMessagePartialContentDisabled: 11016,
	safetyMessageExclusiveModeEnabledForConsumer: 11017,
	safetyMessageExclusiveModeEnabledForEnterprise: 11018,
	safetyMessagePhishDetected: 11019,
	safetyMessagePhishPasswordDetected: 11020,
	safetyMessageSenderFailedAuth: 11021,
	safetyMessageMovedToJunkByUserRuleNoRetention: 11022,
	safetyMessageMovedToJunkByUserActionNoRetention: 11023,
	safetyMessageMovedToJunkByOrgRuleNoRetention: 11024,
	safetyMessageMovedToJunkByClientActionNoRetention: 11025,
	safetyMessageMovedToJunkByASFRuleNoRetention: 11026,
	safetyMessageMovedToJunkByBlockedSendersNoRetention: 11027,
	safetyMessageMovedToJunkByServiceNoRetention: 11028,
	safetyMessageConsumerPhishDetected: 11029,
	infoCannotAttachFilesNoExtension: 11030,
	infoCannotAttachGoogleFileTypes: 11031,
	infoCannotAttachOneNoteNotebook: 11032,
	lastSafetyMessage: 11300,
	extensibilityInfoBar: 12e3,
	attachmentSharingTipsInfoBar: 13e3,
	sharingTipsNoPermissionToShare: 13001,
	sharingTipsNoPermissionToShareExternally: 13002,
	sharingTipsNoPermissionsToShareWithBigDL: 13003,
	sharingTipsCannotShareCSLWithExternalUsers: 13004,
	sharingTipsLinkNotPermissioned: 13005,
	sharingTipsWarningWithoutFilename: 13006,
	lastSharingTipsMessage: 13300,
	connectorActionCardMessage: 13301,
	filesActionStatus: 13302,
	messageListAdDisclaimer: 13305,
	warningAttachmentsSizeTooLargeRecentAttachments: 13306,
	infoAgendaMailFeedback: 13320,
	warningConditionalAccess: 14e3
};
_bc.M.registerEnum("_bc.M", !1);
_bc.bm = function() {};
_bc.bm.registerInterface("_bc.bm");
_bc.y = function() {};
_bc.y.registerInterface("_bc.y");
_bc.bT = function() {};
_bc.bT.registerInterface("_bc.bT");
_bc.s = function() {};
_bc.s.registerInterface("_bc.s");
_bc.bd = function() {};
_bc.bd.registerInterface("_bc.bd");
_bc.j = function() {};
_bc.j.registerInterface("_bc.j");
var IMailComposeLauncher = function() {};
IMailComposeLauncher.registerInterface("IMailComposeLauncher");
_bc.N = function() {};
_bc.N.prototype = {
	defaultSize: 0,
	size30x30: 1,
	size32x32: 2,
	size40x40: 3,
	size48x48: 4,
	size50x50: 5,
	size64x64: 6,
	size70x70: 7,
	size96x96: 8,
	size100x100: 9,
	size25x25: 10,
	size20x20: 11,
	size90x90: 12,
	size160x160: 13,
	size80x80: 14,
	size28x28: 15
};
_bc.N.registerEnum("_bc.N", !1);
_bc.bn = function() {};
_bc.bn.prototype = {
	none: 0,
	presenceImage: 1,
	displayPicture: 2,
	basicDetails: 4,
	listDetails: 8,
	mapPicture: 16
};
_bc.bn.registerEnum("_bc.bn", !1);
_bc.bU = function() {};
_bc.bU.prototype = {
	displayName: 0,
	emailAddress: 1,
	companyName: 2,
	phoneNumber: 3,
	businessPhone: 4,
	mobilePhone: 5,
	homePhone: 6,
	postalAddress: 7,
	displayNameFirstLast: 8,
	displayNameLastFirst: 9,
	fileAs: 10,
	office: 11,
	imAddress: 12,
	presenceText: 13,
	fullDisplayNameFirstLast: 14,
	fullDisplayNameLastFirst: 15,
	fullYomiName: 16,
	title: 17
};
_bc.bU.registerEnum("_bc.bU", !1);
_bc.l = function() {};
_bc.l.registerInterface("_bc.l");
_bc.f = function() {};
_bc.f.registerInterface("_bc.f");
_bc.p = function() {};
_bc.p.registerInterface("_bc.p");
var IComposeCardContext = function() {};
IComposeCardContext.registerInterface("IComposeCardContext");
_bc.bQ = function() {};
_bc.bQ.registerInterface("_bc.bQ");
_bc.q = function() {};
_bc.q.registerInterface("_bc.q");
var IModernGroupMembershipPivotViewModel = function() {};
IModernGroupMembershipPivotViewModel.registerInterface("IModernGroupMembershipPivotViewModel");
_bc.bS = function() {};
_bc.bS.registerInterface("_bc.bS");
_bc.bV = function() {};
_bc.bV.prototype = {
	Prefix: 0,
	Exact: 1
};
_bc.bV.registerEnum("_bc.bV", !1);
_bc.be = function() {};
_bc.be.registerInterface("_bc.be");
_bc.z = function() {};
_bc.z.registerInterface("_bc.z");
_bc.n = function() {
	this.bn = Function.createDelegate(this, this.G);
	_bc.n.initializeBase(this);
	this.v(new _j.l);
	this.B(new _j.g(this.bn, _a.a.N, this.r))
};
_bc.n.prototype = {
	y: null,
	q: null,
	K: null,
	by: !0,
	p: null,
	x: null,
	H: !1,
	r: !1,
	z: null,
	R: null,
	bo: null,
	bp: null,
	ck: function(n) {
		this.apcl("IsShown", n)
	},
	e: function() {
		return this.y
	},
	s: function(n) {
		if(this.y !== n) {
			this.y = n;
			this.eH("Title")
		}
		return n
	},
	a: function() {
		return this.q
	},
	B: function(n) {
		if(this.q !== n) {
			this.q = n;
			this.eH("CloseCommand")
		}
		return n
	},
	bq: function(n) {
		if(this.K !== n) {
			this.K = n;
			this.eH("ConfirmCommand")
		}
		return n
	},
	C: function(n) {
		if(this.by !== n) {
			this.by = n;
			this.eH("IsModal")
		}
		return n
	},
	c: function() {
		return this.p
	},
	v: function(n) {
		if(this.p !== n) {
			this.p = n;
			this.eH("FooterButtons")
		}
		return n
	},
	b: function() {
		return this.x
	},
	t: function(n) {
		if(this.x !== n) {
			this.x = n;
			this.eH("ContentDataContext")
		}
		return n
	},
	A: function(n) {
		if(this.H !== n) {
			this.H = n;
			this.eH("IsBusy")
		}
		return n
	},
	d: function() {
		return this.r
	},
	f: function(n) {
		if(this.r !== n) {
			this.q.c(this.r = n);
			this.eH("IsShown")
		}
		return n
	},
	D: function(n) {
		if(this.z !== n) {
			this.z = n;
			this.eH("ParentProjectionWindow")
		}
		return n
	},
	E: function(n) {
		if(this.R !== n) {
			this.R = n;
			this.eH("ContentTemplateID")
		}
		return n
	},
	cl: function(n) {
		if(this.bo !== n) {
			this.bo = n;
			this.eH("LinkText")
		}
		return n
	},
	cm: function(n) {
		if(this.bp !== n) {
			this.bp = n;
			this.eH("LinkUrl")
		}
		return n
	},
	g: function() {
		this.f(!0)
	},
	G: function() {
		this.f(!1)
	},
	eJ: function() {
		var i;
		_a.h.a(i = {
			val: this.q
		}), this.q = i.val;
		var t;
		_a.h.a(t = {
			val: this.K
		}), this.K = t.val;
		var n;
		_a.h.a(n = {
			val: this.p
		}), this.p = n.val;
		_a.gd.prototype.eJ.call(this)
	}
};
_bc.b = function() {
	_bc.b.initializeBase(this);
	this.t(this);
	this.I = this.q;
	this.V(new _j.l)
};
_bc.b.b = function(n, t, i, r, u) {
	switch(n) {
		case 0:
			r.val = _bcs.D.D;
			u.val = null;
			break;
		case 1:
		case 3:
			r.val = _bcs.D.D;
			u.val = _bcs.D.A;
			break;
		case 2:
			r.val = _bcs.D.C;
			u.val = _bcs.D.J;
			break;
		default:
			throw Error.argumentOutOfRange("type", n, "Unknown MessageBoxType");
	}
	t && r.val && (r.val = t);
	i && u.val && (u.val = i)
};
_bc.b.prototype = {
	j: null,
	u: null,
	I: null,
	n: !1,
	m: !1,
	o: null,
	V: function(n) {
		if(this.j !== n) {
			this.j = n;
			this.eH("MessageList")
		}
		return n
	},
	Q: function(n) {
		if(this.n !== n) {
			this.n = n;
			this.eH("ShowDoNotShowAgainCheckbox")
		}
		return n
	},
	P: function(n) {
		if(this.o !== n) {
			this.o = n;
			this.eH("DoNotShowAgainCheckboxText")
		}
		return n
	},
	L: function(n) {
		if(this.m !== n) {
			this.m = n;
			this.eH("DoNotShowAgainChecked")
		}
		return n
	},
	h: function(n, t, i, r, u, f, e, o) {
		if(_j.h.a(t) && _j.h.a(e)) throw Error.argumentNull("Message box's title and message cannot both be null");
		this.i(n, [t], i, r, u, f, e, o, null, null, null)
	},
	i: function(n, t, i, r, u, f, e, o, s, h, c) {
		if((!t || !t.length) && _j.h.a(e)) throw Error.argumentNull("Message box's title and message cannot both be null");
		if(this.r) {
			var p = this.j.d().join(" / ");
			_j.e.c(_a.a.T, "Cannot show two MessageBoxes at once. Current messages: {0}", p);
			throw Error.invalidOperation("Cannot show another message when the message box is shown. Current messages:" + p);
		}
		this.j.g();
		this.j.j(t);
		this.s(e);
		var a;
		var l;
		var y, v;
		_bc.b.b(n, u, f, y = {
			val: a
		}, v = {
			val: l
		}), a = y.val, l = v.val;
		this.W(i);
		this.v(new _j.l);
		a && this.p.a(new _ff.d(this.u, a, null, n !== 3, !1));
		l && (n === 3 ? this.p.t(0, new _ff.d(this.q, l, null, !0, !1)) : this.p.a(new _ff.d(this.q, l, null, !1, !1)));
		this.L(!1);
		!!r !== r ? this.Q(!1) : this.Q(r);
		s ? this.P(s) : this.P(_bcs.D.B);
		h && this.cl(h);
		c && this.cm(c);
		this.D(o);
		this.f(!0)
	},
	W: function(n) {
		this.u = null;
		if(n) {
			var i = this;
			this.u = new _j.g(function() {
				n(!0, i.m);
				i.f(!1)
			}, _bc.b.a);
			var t = this;
			this.B(new _j.g(function() {
				n(!1, t.m);
				t.f(!1)
			}, _bc.b.a))
		} else {
			this.u = this.I;
			this.B(this.I)
		}
	}
};
_bc.d = function(n, t) {
	this.d = -1;
	this.c = -1;
	this.b = n;
	this.a = t
};
_bc.d.a = function() {
	return new _bc.d(800, 600)
};
_bc.d.b = function() {
	return new _bc.d(1024, 700)
};
_bc.d.c = function() {
	var n = window.document.body;
	return new _bc.d(_j.k.h(n), _j.k.g(n))
};
_bc.d.d = function() {
	return new _bc.d(800, 600)
};
_bc.d.e = function() {
	return new _bc.d(350, 425)
};
_bc.d.f = function() {
	return new _bc.d(650, 600)
};
_bc.d.prototype = {
	b: 0,
	a: 0
};
_bc.e = function() {};
_bc.e.b = function() {
	return _a.v.b() in _a.F.a ? _bc.e.d : _bc.e.c
};
_bc.e.g = function() {
	return _a.v.b() in _a.F.a ? _bc.e.e : _bc.e.f
};
_bc.bo = function(n, t, i) {
	this.a = n;
	this.b = t;
	this.c = i
};
_bc.bo.prototype = {
	a: null,
	b: !1,
	c: !1
};
_bc.bf = function() {};
_bc.bf.registerInterface("_bc.bf");
_bc.bg = function() {};
_bc.bg.registerInterface("_bc.bg");
_bc.bh = function() {};
_bc.bh.registerInterface("_bc.bh");
_bc.Q = function() {};
_bc.Q.registerInterface("_bc.Q");
_bc.R = function() {};
_bc.R.registerInterface("_bc.R");
_bc.S = function() {};
_bc.S.registerInterface("_bc.S");
_bc.t = function() {};
_bc.t.registerInterface("_bc.t");
_bc.bq = function() {};
_bc.bq.registerInterface("_bc.bq");
_bc.u = function() {};
_bc.u.registerInterface("_bc.u");
_bc.br = function() {};
_bc.br.registerInterface("_bc.br");
_bc.T = function() {};
_bc.T.registerInterface("_bc.T");
_bc.bs = function() {};
_bc.bs.registerInterface("_bc.bs");
_bc.bt = function() {};
_bc.bt.registerInterface("_bc.bt");
_bc.E = function() {};
_bc.E.registerInterface("_bc.E");
_bc.bu = function() {};
_bc.bu.registerInterface("_bc.bu");
_bc.bv = function() {};
_bc.bv.registerInterface("_bc.bv");
_bc.bw = function() {};
_bc.bw.registerInterface("_bc.bw");
_bc.bx = function() {};
_bc.bx.registerInterface("_bc.bx");
_bc.F = function() {};
_bc.F.registerInterface("_bc.F");
_bc.by = function() {};
_bc.by.registerInterface("_bc.by");
_bc.bz = function() {};
_bc.bz.registerInterface("_bc.bz");
_bc.bA = function() {};
_bc.bA.registerInterface("_bc.bA");
_bc.bC = function() {};
_bc.bC.registerInterface("_bc.bC");
_bc.bB = function() {};
_bc.bB.registerInterface("_bc.bB");
_bc.G = function() {};
_bc.G.registerInterface("_bc.G");
_bc.A = function() {};
_bc.A.registerInterface("_bc.A");
_bc.bD = function() {};
_bc.bD.registerInterface("_bc.bD");
_bc.bi = function() {};
_bc.bi.registerInterface("_bc.bi");
_bc.bE = function() {};
_bc.bE.registerInterface("_bc.bE");
_bc.X = function() {};
_bc.X.registerInterface("_bc.X");
_bc.H = function() {};
_bc.H.registerInterface("_bc.H");
_bc.bG = function() {};
_bc.Y = function() {};
_bc.Y.registerInterface("_bc.Y");
_bc.bj = function() {};
_bc.bj.registerInterface("_bc.bj");
_bc.bL = function() {};
_bc.bL.registerInterface("_bc.bL");
_bc.Z = function() {};
_bc.Z.registerInterface("_bc.Z");
_bc.I = function() {};
_bc.I.registerInterface("_bc.I");
_bc.bM = function() {};
_bc.bM.registerInterface("_bc.bM");
_bc.bN = function() {};
_bc.bN.registerInterface("_bc.bN");
_bc.bp = function() {};
_bc.bp.registerInterface("_bc.bp");
_bc.o = function() {};
_bc.o.registerInterface("_bc.o");
_bc.bH = function() {};
_bc.bH.registerInterface("_bc.bH");
_bc.bJ = function() {};
_bc.bI = function() {};
_bc.bI.registerInterface("_bc.bI");
_bc.bK = function() {};
_bc.bK.registerInterface("_bc.bK");
_bc.ba = function() {};
_bc.ba.prototype = {
	None: 0,
	MeetingCreationNotSupported: 1,
	RecurringCreationNotSupported: 2,
	DelegateMeetingResponseNotSupported: 3,
	RecurringMeetingResponseWithMissingRecurringItemNotSupported: 4,
	MeetingDeletionNotSupported: 5,
	MeetingUpdateNotSupported: 6,
	RecurringMasterUpdateNotSupported: 7,
	RecurrencePatternUpdateNotSupported: 8,
	MeetingAttendeesUpdateNotSupported: 9,
	SecondaryCalendarItemCreationNotSupported: 10,
	CalendarItemOutsideSyncWindow: 11,
	OnlyRegularItemIdSupported: 12,
	RemoveItemWithMissingAssociatedItem: 13,
	ItemIdNotSupported: 14,
	ResponseTypeNotSupported: 15,
	TruncatedBody: 16,
	MailBoxTypeNotSupported: 17,
	OnlySyncedFoldersSupported: 18,
	FolderNotFullySynchronized: 19,
	ItemViewNotSupported: 20
};
_bc.ba.registerEnum("_bc.ba", !1);
_bc.U = function() {};
_bc.U.registerInterface("_bc.U");
_bc.V = function() {};
_bc.V.registerInterface("_bc.V");
_bc.C = function() {};
_bc.C.prototype = {
	owaUserConfig: 1,
	findFolders: 2,
	findConversation: 3,
	findMailFolderItem: 4,
	getConversationItems: 5,
	getMailFolderItem: 6,
	owaVersion: 7,
	state: 8,
	allowServerSideSessionData: 9
};
_bc.C.registerEnum("_bc.C", !1);
var IPageDataPayloadLocalStorage = function() {};
IPageDataPayloadLocalStorage.registerInterface("IPageDataPayloadLocalStorage");
_bc.J = function() {};
_bc.J.prototype = {
	cleared: 1,
	fresh: 2,
	stale: 3
};
_bc.J.registerEnum("_bc.J", !1);
_bc.B = function() {};
_bc.B.registerInterface("_bc.B");
_bc.bF = function() {};
_bc.bF.registerInterface("_bc.bF");
_bc.W = function() {};
_bc.W.registerInterface("_bc.W");

function AddressbookOperation() {
	this.Type = 0
}

function AddressbookPersona() {}

function AttachmentInfoRecord(n, t, i, r, u, f, e, o) {
	this.AttachmentId = n;
	this.DataID = t;
	this.Size = i;
	this.LastAccessedDateTime = r;
	this.MessageID = u;
	this.AttachmentType = f;
	this.MessageReceivedDateTime = e;
	this.Synced = o;
	this.RetryCount = 0
}
_bc.bb = function() {};
_bc.bb.prototype = {
	createItem: 0,
	updateItem: 1
};
_bc.bb.registerEnum("_bc.bb", !1);
_bc.bO = function() {};
_bc.bO.prototype = {
	MessageItem: 1,
	ConversationItem: 2
};
_bc.bO.registerEnum("_bc.bO", !1);
_bc.h = function() {
	this.a = _a.d.get_utcNow().i() + ":" + Math.random();
	this.b = new _g.e("CLID:" + this.a);
	this.b.ChangeKey = "CLCK:" + this.a;
	this.c = (+new Date).toString()
};
_bc.h.b = function(n) {
	return n.startsWith("CLATCH:")
};
_bc.h.a = function(n) {
	var i = n.Id;
	var t = n.ChangeKey;
	return !!i && !!t && i.startsWith("CLID:") && t.startsWith("CLCK:")
};
_bc.h.prototype = {
	b: null,
	c: null,
	a: null,
	d: function() {
		return new _g.bi("CLATCH:" + this.a)
	}
};
_bc.m = function(n, t) {
	this.rejectErrorCode = undefined;
	this.originalException = undefined;
	this.__type = _bc.m.dataContractName;
	this.rejectErrorCode = n;
	this.originalException = t
};
_bc.bk = function() {
	_bc.bk.initializeBase(this, [1, "PageDataPayload"])
};
_bc.bk.prototype = {
	c: function(n) {
		this.a.fcpb = n;
		return n
	},
	d: function(n) {
		this.a.fipb = n;
		return n
	},
	g: function(n) {
		this.a.gmfi = n;
		return n
	},
	i: function(n) {
		this.a.sssdrt = n;
		return n
	},
	m: function(n) {
		this.a.sssdrnt = n;
		return n
	},
	b: function(n) {
		this.a.sssdrrk = n;
		return n
	},
	f: function(n) {
		this.a.sssdrsck = n;
		return n
	},
	e: function(n) {
		this.a.sssdrrsk = n;
		return n
	},
	h: function(n) {
		this.a.lvark = n;
		return n
	}
};
_bc.i = function(n) {
	_bc.i.initializeBase(this);
	_a.c.a(n, "folderId");
	this.FolderId = n
};
_bc.i.prototype = {
	FolderId: null
};

function InlineImageRecord() {}
InlineImageRecord.prototype = {
	Blob: null,
	Id: null
};

function MessageSyncStateContext(n, t, i, r, u) {
	_a.c.c(t, "oldestReceivedTime");
	_a.c.b(u, "totalCount");
	this.MoreItemsOnServer = n;
	this.OldestReceivedTime = t;
	this.SyncMinimum = i;
	this.SyncMaximum = r;
	this.TotalCount = u
}
MessageSyncStateContext.prototype = {
	MoreItemsOnServer: !1,
	OldestReceivedTime: null,
	SyncMinimum: 0,
	SyncMaximum: 0,
	TotalCount: 0
};
_bc.OutboxItemContext = function() {};
_bc.OutboxItemContext.b = function(n, t) {
	_a.c.a(n, "itemId");
	_a.c.d(!_bc.OutboxItemContext.c(n), "itemId must be passed to ConvertItemIdToOutboxItemId");
	var i = new _g.e("Outbox:" + n.Id);
	i.ChangeKey = n.ChangeKey;
	return i
};
_bc.OutboxItemContext.a = function(n, t) {
	_a.c.a(n, "outboxItemId");
	var i;
	i = _bc.OutboxItemContext.c(n) ? new _g.e(n.Id.substr(7)) : new _g.e(n.Id);
	i.ChangeKey = n.ChangeKey;
	return i
};
_bc.OutboxItemContext.c = function(n) {
	return n.Id.startsWith("Outbox:")
};
_bc.OutboxItemContext.prototype = {
	ActionId: 0,
	SendAction: 0,
	ParentConversationNodeId: null,
	ComplianceId: null,
	LastResponseCode: "NoError",
	LastResponse: null,
	LastResponseDateTime: null,
	ResendCount: 0,
	IsSending: !1
};

function PartialPersonaRecord(n, t) {
	_a.c.a(n, "persona");
	_a.c.a(t, "folderId");
	this.Persona = n;
	this.FolderId = t
}
PartialPersonaRecord.prototype = {
	Persona: null,
	FolderId: null
};

function SettingRecord() {}
SettingRecord.prototype = {
	Id: null,
	Value: null
};

function TombstonedItemRecord(n, t, i) {
	_a.c.c(n, "id");
	this.Id = n;
	this.TombstoneType = t;
	this.Data = i
}
TombstonedItemRecord.a = function(n, t, i) {
	return new TombstonedItemRecord(n, t, i)
};
TombstonedItemRecord.prototype = {
	Id: null,
	TombstoneType: 0,
	Data: null
};
var ICalendarAnimationContext = function() {};
ICalendarAnimationContext.registerInterface("ICalendarAnimationContext");
var ICalendarScenarioContext = function() {};
ICalendarScenarioContext.registerInterface("ICalendarScenarioContext");
var ICalendarScenarioContextManager = function() {};
ICalendarScenarioContextManager.registerInterface("ICalendarScenarioContextManager");
_bc.r = function() {};
_bc.r.registerInterface("_bc.r");
_bc.k = function() {};
_bc.k.registerInterface("_bc.k");
_bc.P = function() {};
_bc.P.registerInterface("_bc.P");
var IExtensibilityCommandingBarItemsManager = function() {};
IExtensibilityCommandingBarItemsManager.registerInterface("IExtensibilityCommandingBarItemsManager");
_bc.D = function() {};
_bc.D.registerInterface("_bc.D");

function BootCommonComponent() {}
BootCommonComponent.$$cctor = function() {
	_a.t.a().a(BootCommonComponent)
};
BootCommonComponent.prototype = {
	b: function(n, t, i) {
		var r = this;
		n.b(_bc.O, function() {
			return new _bc.O(n.a(_a.A))
		}).b(_ff.a).a()
	},
	a: function() {
		return []
	}
};
_bc.O = function(n) {
	this.b = n.a()
};
_bc.O.prototype = {
	b: 0,
	a: function() {
		return this.b
	}
};
_bc.c = function() {};
_bc.c.prototype = {
	Unknown: 0,
	Person: 1,
	DistributionList: 2,
	Room: 3,
	Place: 4,
	ModernGroup: 5,
	Birthday: 6,
	CalendarPublicFolder: 7,
	Booking: 8,
	AtAllBroadcast: 9,
	ImplicitGroup: 10,
	ExplicitGroup: 11
};
_bc.c.registerEnum("_bc.c", !1);
_bc.bl = function() {};
_bc.bl.prototype = {
	readOnly: 0,
	edit: 1,
	create: 2,
	add: 3
};
_bc.bl.registerEnum("_bc.bl", !1);
var IPresenceObserverFactory = function() {};
IPresenceObserverFactory.registerInterface("IPresenceObserverFactory");
var IPresenceObserver = function() {};
IPresenceObserver.registerInterface("IPresenceObserver");
_bc.v = function() {};
_bc.v.registerInterface("_bc.v");
_bc.x = function() {};
_bc.x.prototype = {
	unknown: 0,
	oneOff: 1,
	partial: 2,
	complete: 3
};
_bc.x.registerEnum("_bc.x", !1);
_bc.bP = function() {};
_bc.bP.prototype = {
	Inline: 0,
	ExclusivePopUp: 1,
	StackedPopUp: 2,
	PopOut: 3
};
_bc.bP.registerEnum("_bc.bP", !1);
_bc.bc = function(n) {
	this.c = n
};
_bc.bc.prototype = {
	b: null,
	a: null,
	c: null
};
_bc.g = function() {
	this.l = !1;
	this.d = !1;
	this.e = !1;
	this.g = !1;
	this.c = !1;
	this.k = !1;
	this.i = !1;
	this.m = !1;
	this.j = !1;
	this.h = !1;
	this.a = 8;
	this.n = !1;
	this.f = !1
};
_bc.g.a = function() {
	var n = new _bc.g;
	n.l = !0;
	n.d = !0;
	n.g = !0;
	n.c = !0;
	n.k = !0;
	n.m = !0;
	n.i = !0;
	n.e = !0;
	n.o = !0;
	n.h = !1;
	n.a = 0;
	return n
};
_bc.g.b = function() {
	var n = new _bc.g;
	n.l = !0;
	n.e = !0;
	n.d = !0;
	n.g = !0;
	n.c = !0;
	n.k = !0;
	n.i = !0;
	n.m = !0;
	n.j = !0;
	n.h = !0;
	n.a = 1;
	return n
};
_bc.g.prototype = {
	m: !1,
	j: !1,
	d: !1,
	e: !1,
	g: !1,
	l: !1,
	c: !1,
	i: !1,
	k: !1,
	o: !1,
	p: !1,
	a: 0,
	q: !0,
	h: !1,
	n: !1,
	b: !1,
	f: !1
};
_bc.K = function() {};
_bc.K.registerInterface("_bc.K");
_bc.L = function() {};
_bc.L.registerInterface("_bc.L");
_bc.n.registerClass("_bc.n", _a.bw, IDialogViewModel, _a.kT, _j.bs, Sys.IDisposable);
_bc.b.registerClass("_bc.b", _bc.n);
_bc.bo.registerClass("_bc.bo");
AddressbookOperation.registerClass("AddressbookOperation");
AddressbookPersona.registerClass("AddressbookPersona");
AttachmentInfoRecord.registerClass("AttachmentInfoRecord");
_bc.m.registerClass("_bc.m");
_bc.bk.registerClass("_bc.bk", _a.br);
_bc.i.registerClass("_bc.i", _a.cq);
InlineImageRecord.registerClass("InlineImageRecord");
MessageSyncStateContext.registerClass("MessageSyncStateContext");
_bc.OutboxItemContext.registerClass("_bc.OutboxItemContext");
PartialPersonaRecord.registerClass("PartialPersonaRecord");
SettingRecord.registerClass("SettingRecord");
TombstonedItemRecord.registerClass("TombstonedItemRecord");
BootCommonComponent.registerClass("BootCommonComponent", null, _a.kg, _j.ce);
_bc.O.registerClass("_bc.O", null, _ff.a);
_bc.bc.registerClass("_bc.bc");
_bc.g.registerClass("_bc.g");
_bc.b.a = _a.a.N;
_bc.e.a = 5;
_bc.e.c = [8, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.d = [9, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.f = [14, 8, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.e.e = [15, 9, 0, 2, 1, 3, 4, 6, 5, 12];
_bc.m.dataContractName = "OfflineErrorInfo:#Exchange";
BootCommonComponent.$$cctor();
Type.registerNamespace("_h");
_h.cO = function(n, t, i, r, u) {
	if(u.f()) {
		var f = this;
		t.b(_j.bl, function() {
			i.d(_a.a.ed, "Validate", function() {
				var t = new _h.eR;
				n.a(t)
			})
		})
	}
};
_h.cJ = function(n, t, i, r, u, f, e, o, s, h) {
	_h.b.w = n === "Mouse" ? 2097152 : 51200;
	_h.b.x = n === "Mouse" ? 20 : 0;
	_h.b.k = "rps_" + _ff.p.a(1, 65535).toString(16);
	var c = _a.w.b(window.location.href);
	this.c = s.k();
	if(n === "Mouse") {
		var w = "maxRecipients";
		var v = c[w];
		v && (_h.b.x = _a.bN.b(v.toString()))
	}
	var b = "DisableScopedStyles";
	var k = c[b];
	k && (_h.b.k = null);
	var p = !u.a() || f.a().fW().Enabled;
	if(n === "Mouse" && p) {
		var a = c.disableSuperSort;
		if(!a || a !== "true") {
			_h.b.b = _h.b.E;
			_h.b.e = _h.b.T
		}
	}
	_g.C.h(f.a().gI().Enabled);
	var l = this;
	_g.k.e = function(f) {
		var c = u.c(function(n) {
			f(n);
			l.d(u, e, o)
		}, t, t.g(), o, n, i, r, s ? s.D() : null, h, s.g() !== "SharedHoverCard");
		c && l.a(e, o, !1)
	};
	_h.j.d = f;
	h && (_h.j.h = h.c());
	var y = this;
	o.a(_a.a.N, "NotifyWhenBootstrapCompletes", function() {
		y.a(e, o, !0)
	}, 15e3);
	_g.k.h()
};
_h.cJ.prototype = {
	b: !1,
	c: 0,
	d: function(n, t, i) {
		if(n.b()) {
			var r = this;
			t.b(_h.bS, function() {
				r.a(t, i, !1)
			})
		} else this.a(t, i, !1)
	},
	a: function(n, t, i) {
		if(this.c >= 90) {
			var r = this;
			t.c(_a.a.N, "NotifyBootstrapCompleted", function() {
				if(!r.b) {
					i && _j.e.b(_a.a.N, "the offline bootstrapper did not fire its initialized event within the timeout of {0}ms", 15e3);
					r.b = !0;
					n.d(_j.bl, new _j.bl)
				}
			})
		}
	}
};
_h.cN = function(n, t) {
	_h.j.l(n);
	_h.j.m(t)
};
var IAddFavoriteFolderAction = function() {};
IAddFavoriteFolderAction.registerInterface("IAddFavoriteFolderAction");
var IEmptyFolderAction = function() {};
IEmptyFolderAction.registerInterface("IEmptyFolderAction");
var IEmptyPivotAction = function() {};
IEmptyPivotAction.registerInterface("IEmptyPivotAction");
var IMarkAllItemsAsReadAction = function() {};
IMarkAllItemsAsReadAction.registerInterface("IMarkAllItemsAsReadAction");
var IMarkAsJunkAction = function() {};
IMarkAsJunkAction.registerInterface("IMarkAsJunkAction");
var IMarkItemAsClutterAction = function() {};
IMarkItemAsClutterAction.registerInterface("IMarkItemAsClutterAction");
var IMoveFavoriteFolderAction = function() {};
IMoveFavoriteFolderAction.registerInterface("IMoveFavoriteFolderAction");
_h.cc = function() {};
_h.cc.registerInterface("_h.cc");
var IPinConversationAction = function() {};
IPinConversationAction.registerInterface("IPinConversationAction");
var IPinItemAction = function() {};
IPinItemAction.registerInterface("IPinItemAction");
var IRemoveFavoriteFolderAction = function() {};
IRemoveFavoriteFolderAction.registerInterface("IRemoveFavoriteFolderAction");
var IRenameFavoriteFolderAction = function() {};
IRenameFavoriteFolderAction.registerInterface("IRenameFavoriteFolderAction");
_h.dE = function() {};
_h.dE.registerInterface("_h.dE");
var IRestoreConversationAction = function() {};
IRestoreConversationAction.registerInterface("IRestoreConversationAction");
var IRestoreMessagesAction = function() {};
IRestoreMessagesAction.registerInterface("IRestoreMessagesAction");
var IUpdateFavoriteFolderAction = function() {};
IUpdateFavoriteFolderAction.registerInterface("IUpdateFavoriteFolderAction");
_h.bz = function() {};
_h.bz.registerInterface("_h.bz");
_h.bQ = function() {};
_h.bQ.registerInterface("_h.bQ");
_h.fM = function() {};
_h.fM.prototype = {
	None: -1,
	Folder: 0,
	ItemPartUniqueBody: 1,
	EditableItems: 2,
	ItemNormalizedBody: 3,
	MailCompose: 4,
	ItemPartNormalizedBody: 5,
	MailListItem: 6,
	MessageDetails: 7,
	ItemAttachment: 8,
	ConversationListView: 9,
	ConversationSentItemsListView: 10,
	ConversationUberListView: 11,
	TaskListItem: 12,
	FullCalendarItem: 13,
	MailComposeNormalizedBody: 14,
	QuickComposeItemPart: 15,
	GroupConversationListView: 16,
	GroupConversationFeedView: 17,
	InferenceConversationListView: 18,
	InferenceConversationUberListView: 19,
	DiscoveryItem: 20,
	FullBookingItem: 21,
	PartialCalendarItem: 22,
	PartialBookingItem: 23,
	ItemPart: 24,
	ModernItemPart: 25
};
_h.fM.registerEnum("_h.fM", !1);
_h.T = function() {};
_h.T.registerInterface("_h.T");
_h.U = function() {};
_h.U.registerInterface("_h.U");
_h.cD = function() {};
_h.cD.prototype = {
	SendToNone: 0,
	SendOnlyToAll: 1,
	SendOnlyToChanged: 2,
	SendToAllAndSaveCopy: 3,
	SendToChangedAndSaveCopy: 4
};
_h.cD.registerEnum("_h.cD", !1);
_h.fq = function() {};
_h.fq.registerInterface("_h.fq");
_h.fr = function() {};
_h.fr.registerInterface("_h.fr");
_h.fc = function() {};
_h.fc.prototype = {
	NoneSet: -1,
	Red: 0,
	Orange: 1,
	Brown: 2,
	Yellow: 3,
	Green: 4,
	Teal: 5,
	Olive: 6,
	Blue: 7,
	Purple: 8,
	Cranberry: 9,
	Steel: 10,
	DarkSteel: 11,
	Gray: 12,
	DarkGray: 13,
	Black: 14,
	DarkRed: 15,
	DarkOrange: 16,
	DarkBrown: 17,
	DarkYellow: 18,
	DarkGreen: 19,
	DarkTeal: 20,
	DarkOlive: 21,
	DarkBlue: 22,
	DarkPurple: 23,
	DarkCranberry: 24,
	MaxColor: 25
};
_h.fc.registerEnum("_h.fc", !1);
_h.fj = function() {};
_h.fj.prototype = {
	MailListView: 0,
	ReadingPane: 1
};
_h.fj.registerEnum("_h.fj", !1);
_h.C = function() {};
_h.C.prototype = {
	All: 0,
	Subject: 1,
	Body: 2,
	Attachment: 3,
	From: 4,
	To: 5,
	Cc: 6,
	Bcc: 7,
	AllRecipients: 8
};
_h.C.registerEnum("_h.C", !1);
_h.fu = function() {};
_h.fu.registerInterface("_h.fu");
_h.fy = function() {};
_h.db = function() {};
_h.db.registerInterface("_h.db");
_h.y = function() {};
_h.y.prototype = {
	None: 0,
	NoResults: 1,
	SearchError: 2,
	OfflineSearchError: 3,
	OfflinePivotsError: 4,
	OfflineSortByError: 5,
	OfflineTasksError: 6,
	OfflineTurnOnConversation: 7,
	OfflineTurnOffConversation: 8,
	OfflineNotSyncedFolder: 9,
	OfflineUnsupportedFolder: 10,
	KioskFailedRequest: 11,
	SearchNoResults: 12,
	Searching: 13,
	SearchComplete: 14,
	AccessDenied: 15,
	ListViewLoading: 16,
	ListViewNoItemSelected: 17,
	ReadingPaneLoadFailed: 18,
	DumpsterViewNoItemSelected: 19,
	DumpsterViewItemSelected: 20
};
_h.y.registerEnum("_h.y", !1);
_h.bR = function() {};
_h.bR.prototype = {
	SaveOnly: 0,
	SendAndSaveCopy: 1
};
_h.bR.registerEnum("_h.bR", !1);
_h.dt = function() {};
_h.dt.prototype = {
	AllOccurrences: 0,
	SpecifiedOccurrenceOnly: 1
};
_h.dt.registerEnum("_h.dt", !1);
_h.bx = function() {};
_h.bx.prototype = {
	SendToNone: 0,
	SendOnlyToAll: 1,
	SendToAllAndSaveCopy: 2
};
_h.bx.registerEnum("_h.bx", !1);
_h.fz = function() {};
_h.fz.registerInterface("_h.fz");
_h.fd = function() {};
_h.fd.prototype = {
	unknown: 0,
	Disabled: 1,
	AttemptingSignIn: 2,
	SignedIn: 3,
	AttemptingSignOut: 4,
	SignedOut: 5,
	Error: 6
};
_h.fd.registerEnum("_h.fd", !1);
_h.ed = function() {};
_h.ed.prototype = {
	notConnected: 0,
	connecting: 1,
	incoming: 2,
	connected: 3,
	terminated: 4
};
_h.ed.registerEnum("_h.ed", !1);
_h.bg = function() {};
_h.bg.registerInterface("_h.bg");
_h.cd = function() {};
_h.cd.registerInterface("_h.cd");
_h.fl = function() {};
_h.fl.registerInterface("_h.fl");
_h.P = function() {};
_h.P.registerInterface("_h.P");
_h.dD = function() {};
_h.dD.registerInterface("_h.dD");
_h.cw = function() {};
_h.cw.registerInterface("_h.cw");
_h.ft = function() {};
_h.dF = function() {};
_h.dF.registerInterface("_h.dF");
_h.ev = function() {};
_h.cu = function() {};
_h.cu.registerInterface("_h.cu");
_h.cv = function() {};
_h.cv.registerInterface("_h.cv");
_h.bj = function() {};
_h.bj.registerInterface("_h.bj");
_h.fs = function() {};
_h.fs.registerInterface("_h.fs");
_h.Y = function() {};
_h.Y.registerInterface("_h.Y");
_h.es = function() {};
_h.es.registerInterface("_h.es");
_h.dC = function() {};
_h.dC.registerInterface("_h.dC");
_h.fw = function() {};
_h.fw.registerInterface("_h.fw");
_h.fv = function() {};
_h.fv.registerInterface("_h.fv");
_h.dG = function() {};
_h.dG.registerInterface("_h.dG");
_h.dA = function() {};
_h.dA.registerInterface("_h.dA");
_h.bf = function() {};
_h.bf.prototype = {
	undefined: -1,
	commandingBar: 0,
	conversationListView: 1,
	mailListView: 2,
	itemReadingPane: 3,
	conversationReadingPane: 4,
	mailBaseListView: 5,
	upNext: 6,
	leftNavigationPane: 7,
	hashtagWell: 8,
	editor: 9,
	readingPane: 10,
	popout: 11,
	expandedConversation: 12,
	itemReadingPaneFullScreen: 13,
	conversationReadingPaneFullScreen: 14,
	searchBox: 15,
	hashtagBody: 16,
	hashtagModernFolder: 17,
	hashtagFolder: 18,
	moduleSwitcher: 19,
	itemGroupListView: 20,
	bundledMailListView: 21,
	deletedItemsFolder: 22,
	otherFolder: 23,
	dumpsterFolder: 24
};
_h.bf.registerEnum("_h.bf", !1);
_h.cZ = function() {};
_h.cZ.registerInterface("_h.cZ");
_h.da = function() {};
_h.da.registerInterface("_h.da");
var IQuickComposeContextModelScope = function() {};
IQuickComposeContextModelScope.registerInterface("IQuickComposeContextModelScope");
_h.fA = function() {};
_h.fA.registerInterface("_h.fA");
_h.fk = function() {};
_h.fk.registerInterface("_h.fk");
_h.fm = function() {};
_h.fm.registerInterface("_h.fm");
_h.fn = function() {};
_h.fn.registerInterface("_h.fn");
_h.fo = function() {};
_h.fo.registerInterface("_h.fo");
_h.fp = function() {};
_h.fp.registerInterface("_h.fp");
_h.br = function() {};
_h.br.prototype = {
	none: 0,
	userEntered: 1,
	owaClientSuggested: 2,
	history: 3,
	other: 4,
	zeroInput: 5
};
_h.br.registerEnum("_h.br", !1);
_h.fx = function() {};
_h.fx.registerInterface("_h.fx");
_h.u = function() {};
_h.u.c = function(n, t, i, r) {
	r.val = null;
	if(!_h.a.k || _j.E.a(t) || _j.h.a(i) || !_j.h.a(n) || _h.u.e(t)) return !1;
	r.val = _a.bK.c(t.Id);
	return !_j.h.a(r.val) && r.val !== i ? !0 : !1
};
_h.u.b = function(n, t, i, r) {
	r.val = null;
	if(!_h.a.k || null === t || null === i || !_j.h.a(n) || _h.a.P(t)) return !1;
	if(_h.l.k(t)) {
		r.val = i.bH.ArchiveMailboxGuid;
		return !0
	} else {
		r.val = _a.bK.c(t.Id);
		if(!_j.h.a(r.val) && r.val !== i.bH.MailboxGuid) return !0
	}
	return !1
};
_h.u.a = function(n, t) {
	return !_j.h.a(n) && !_j.h.a(t) ? String.format(_h.u.d, n, t) : null
};
_h.u.e = function(n) {
	var t = _h.d.a().a(n.Id);
	return !!t && _h.a.P(t.cP)
};
_h.bw = function() {
	_h.bw.initializeBase(this)
};
_h.bw.prototype = {
	D: !1,
	bc: !1,
	t: !1,
	p: null,
	N: null,
	q: null,
	n: null,
	s: function() {
		return this.eK(_h.bw.b)
	},
	l: function(n) {
		this.eI(_h.bw.b, n);
		return n
	},
	e: function() {
		return this.eK(_h.bw.a)
	},
	f: function(n) {
		this.eI(_h.bw.a, this.bo(n));
		return n
	},
	K: function(n) {
		var i = this.bl();
		var t = this.bg();
		t.shouldPrecedeOfflineSyncActions = this.h();
		n.k(i, t, this.k, this.j)
	},
	bg: function() {
		this.p && !this.s();
		var n = new _g.gZ(this.L);
		n.owsVersion = "V2_1";
		n.instanceKeysToRemoveFromPendingOperations = this.p;
		n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.s().Id;
		n.isActionGlobal = this.t;
		n.explicitLogonUser = this.R;
		this.N && (n.actionName = this.N);
		return n
	},
	bl: function() {
		var t = new _g.ee(this.M());
		t.Body.ConversationActions = new Array(this.e().length);
		t.Body.ReturnMovedItemIds = this.bc;
		var i;
		i = this.s() ? _g.l.a(this.s()) : new _g.r("inbox");
		for(var u = new _g.F(i), n = 0; n < this.e().length; n++) {
			var f = this.e()[n];
			var r = this.u(f);
			this.D || this.t || (r.ContextFolderId = u);
			t.Body.ConversationActions[n] = r
		}
		return t
	},
	bo: function(n) {
		if(!n) return null;
		for(var u = {}, r = [], t = 0; t < n.length; t++) {
			var i = n[t];
			if(!(i.bH.ConversationId.Id in u)) {
				Array.add(r, i);
				u[i.bH.ConversationId.Id] = 1
			}
		}
		return r
	}
};
_h.du = function(n) {
	_h.du.$$(this.$$gta["_h.du"].TResult, this.$$gta["_h.du"].TResponseMessage).initializeBase(this, [n])
};
_h.du.$$ = function(n, t) {
	var f = _h.__tc = _h.__tc || {};
	var i = "du" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
	if(!f[i]) {
		var r = f[i] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_h.du.apply(this, t)
		};
		var c = _h.fK;
		r.registerClass("_h.__tc." + i, c, _h.dE);
		var s = {
			"_h.du": {
				TResult: n,
				TResponseMessage: t
			},
			ctor: _h.du
		};
		var l = c.prototype.$$gta;
		for(var a in l) {
			var h = {
				key: a,
				value: l[a]
			};
			s[h.key] = h.value
		}
		r.prototype.$$gta = s;
		var e = _h.du.prototype;
		for(var o in e) {
			var u = {
				key: o,
				value: e[o]
			};
			"constructor" !== u.key && (r.prototype[u.key] = u.value)
		}
		r.a = _a.a.dM
	}
	return f[i]
};
_h.du.prototype = {
	n: function() {
		return this.Q ? this.Q.responseCode : "NoError"
	},
	cH: function() {
		return new _g.H(null)
	},
	cI: function(n, t) {
		return new(_h.dP.$$(_g.hK, _g.hX, this.$$gta["_h.du"].TResult, this.$$gta["_h.du"].TResponseMessage))(n, t, _h.du.$$(this.$$gta["_h.du"].TResult, this.$$gta["_h.du"].TResponseMessage).a)
	},
	cx: function(n, t) {
		if(t.h.length === 1) {
			var i = t.h[0];
			if(i.ResponseClass !== "Success" && this.cL(i.ResponseCode)) {
				n.responseCode = i.ResponseCode;
				var r = n;
				r.MessageXml = i.MessageXml;
				return Error.create(i.MessageText, r)
			}
		}
		return null
	},
	cU: function(n, t, i) {
		var r = this.Q || this.cH();
		r.response = _g.bB.a(n, 0);
		r.state = 1;
		var u = this.cI(r, _g.k.a);
		var f = this;
		u.w(function() {
			var n = f.cx(r, u);
			if(n) i(n);
			else {
				f.cK(u.h);
				t()
			}
		}, i)
	},
	cL: function(n) {
		return !0
	},
	cK: function(n) {
		for(var t = 0; t < n.length; t++) {
			var i = n[t];
			this.cJ(i)
		}
	}
};
_h.dv = function(n) {
	_h.dv.initializeBase(this);
	this.e = n
};
_h.dv.prototype = {
	e: !1,
	K: function(n) {
		n.dF(this.e, null, this.I, this.H)
	},
	cU: function(n, t, i) {
		t()
	}
};
_h.bC = function() {
	_h.bC.initializeBase(this)
};
_h.bC.prototype = {
	h: function() {
		return !0
	},
	o: function() {
		return this.eK(_h.bC.a)
	},
	r: function(n) {
		this.eI(_h.bC.a, n);
		return n
	},
	S: function() {
		var n = _h.a.a(this.o());
		_h.O.b(_h.a.a(this.o()))
	},
	u: function(n) {
		var t = new _g.bK("Copy", new _g.e(n.bH.ConversationId.Id));
		t.DestinationFolderId = new _g.F(_g.l.a(this.o()));
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		return t
	}
};
_h.bD = function(n, t, i) {
	_h.bD.initializeBase(this);
	this.f = n;
	this.e = t;
	this.h = i
};
_h.bD.prototype = {
	f: null,
	e: null,
	h: null,
	j: "NoError",
	n: function() {
		return this.j
	},
	K: function(n) {
		var i = new _g.fu(new _g.F(_g.l.a(this.e)));
		i.ItemIds = this.k();
		var t = new _g.ig(this.L);
		if(_g.N.isInstanceOfType(this.e)) {
			var u = this.e;
			if(u.a.Mailbox.EmailAddress) {
				i.RemoteExecute = !0;
				t.actionName = "GroupMailbox";
				t.anchorMailbox = u.a.Mailbox.EmailAddress;
				t.explicitLogonUser = u.a.Mailbox.EmailAddress
			}
		} else if(_h.a.k && _h.a.n) {
			(_h.l.a(this.e) !== _h.l.a(this.f[0].cP) || _h.a.E(this.e) !== _h.a.E(this.f[0].cP)) && (i.RemoteExecute = !0);
			var r = null;
			var e, f;
			(f = _h.u.b(t.explicitLogonUser, this.e, _g.a.a().c(), e = {
				val: r
			}), r = e.val, f) && (t.anchorMailbox = _h.u.a(r, _g.a.a().c().bH.OrganizationDomain))
		}
		var o = new _g.ft(this.M(), i);
		n.dG(o, t, this.I, this.H)
	},
	S: function() {
		var t = _h.a.a(this.e);
		_h.a.j(t) && _h.O.b(t);
		if(_g.N.isInstanceOfType(this.e)) {
			var i = this.e;
			if(i.a.Mailbox.EmailAddress) {
				var n = _g.w.e(i.a.Mailbox.EmailAddress);
				var f = this;
				this.bn(function() {
					f.h.a(_a.cE, new _a.cE(1, n))
				});
				var u = this;
				this.c(function() {
					u.h.a(_a.cE, new _a.cE(2, n))
				});
				var r = this;
				this.b(function() {
					r.h.a(_a.cE, new _a.cE(3, n))
				})
			}
		}
	},
	cU: function(n, t, i) {
		if(!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length < 1) {
			i(Error.create("CopyItemAction failed."));
			return
		}
		if(n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
			i(Error.create(String.format("CopyItemAction failed with response code {0}.", n.Body.ResponseMessages.Items[0].ResponseCode)));
			return
		}
		t()
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.j = this.N.Body.ResponseMessages.Items[0].ResponseCode)
	},
	k: function() {
		for(var t = new Array(this.f.length), n = 0; n < this.f.length; n++) t[n] = new _g.e(this.f[n].bH.ItemId.Id);
		return t
	}
};
_h.be = function() {
	_h.be.initializeBase(this);
	this.l = "IPF.Note"
};
_h.be.prototype = {
	f: null,
	e: null,
	l: null,
	h: function() {
		return this.eK(_h.be.b)
	},
	k: function(n) {
		this.eI(_h.be.b, n);
		return n
	},
	o: function() {
		return this.eK(_h.be.a)
	},
	j: function(n) {
		this.eI(_h.be.a, n);
		return n
	},
	S: function() {
		var n = new _g.u;
		n.f(this.o());
		n.t(this.e.bH.FolderId);
		this.f = n;
		this.h().bx.a(this.f);
		var t = this;
		_h.c.a(this.e, "ChildFolderCount", this.e.bH.ChildFolderCount, (this.e.bH.ChildFolderCount || 0) + 1, function(n, t) {
			n.s(t)
		})
	},
	K: function(n) {
		var f = new _g.fw(_g.l.c(this.e.bH.FolderId));
		var r = new _g.bD;
		r.DisplayName = this.o();
		r.FolderClass = this.l;
		f.Folders[0] = r;
		var o = new _g.fv(this.M(), f);
		var i = new _g.ij(this.L);
		var t;
		var u, e;
		(e = _h.u.b(i.explicitLogonUser, _g.l.a(this.e.bH.FolderId), _g.a.a().c(), u = {
			val: t
		}), t = u.val, e) && (i.anchorMailbox = _h.u.a(t, _g.a.a().c().bH.OrganizationDomain));
		n.dR(o, i, this.I, this.H)
	},
	cJ: function(n) {
		this.h().bG(this.f, n.Folders[0].FolderId)
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		if(this.h().bx) {
			this.h().bx.p(this.f, !0);
			var n = this;
			_h.c.a(this.e, "ChildFolderCount", this.e.bH.ChildFolderCount, this.e.bH.ChildFolderCount - 1, function(n, t) {
				n.s(t)
			})
		}
	}
};
_h.fh = function(n) {
	_h.fh.initializeBase(this);
	this.co = n;
	this.bu = !0;
	this.bH = "None";
	var t = _g.a.a().bH.PolicySettings;
	this.cd = t.OutboundCharset;
	this.cg = t.UseGB18030;
	this.ch = t.UseISO885915
};
_h.fh.prototype = {
	co: 0,
	bk: null,
	bu: !1,
	br: null,
	bH: "Folder",
	bs: null,
	cd: "AlwaysUTF8",
	bG: null,
	bi: null,
	cf: null,
	bW: null,
	bJ: !1,
	cg: !1,
	ch: !1,
	bD: null,
	e: function() {
		return this.bi
	},
	l: function(n) {
		this.bi = n;
		return n
	},
	p: function(n) {
		this.bu = n;
		return n
	},
	q: function(n) {
		this.bs = n;
		return n
	},
	o: function(n) {
		this.bG = n;
		return n
	},
	M: function() {
		return this.W("V2015_10_15")
	},
	K: function(n) {
		var u = this.bp();
		var t = this.bj();
		this.bi && !t.actionName && (t.actionName = this.bi);
		if(u.Body.SavedItemFolderId) {
			var r = u.Body.SavedItemFolderId.BaseFolderId;
			!t.explicitLogonUser && r && (_g.bk.a(r) || _g.dt.a(r, new _g.r("internalsubmission"))) && (t.explicitLogonUser = r.Id === "internalsubmission" ? _h.p.b(null) : _h.p.b(r.Id))
		} else {
			var e = _h.p.h(null);
			e && (t.publicFolderMailbox = e)
		}
		for(var o = u.Body.Items, s = o.length, f = 0; f < s; ++f) {
			var i = o[f];
			if(_a.p.s(i.ItemClass)) {
				i.Body = undefined;
				i.NormalizedBody = undefined;
				i.UniqueBody = undefined;
				i.TextBody = undefined
			}
		}
		n.p(u, t, this.I, this.H)
	},
	bj: function() {
		var n = new _g.hi(this.L);
		n.clientStoreItem = this.co;
		n.isQueued = this.bu;
		n.clientStoreBodyValue = this.bD;
		n.viewModelContextId = this.ba;
		this.bk && this.bu && (n.parentFolderId = new _g.m(this.bk.Id));
		return n
	},
	bp: function() {
		var n = new _g.cU;
		n.Items = this.bo();
		n.ClientSupportsIrm = !0;
		this.br && (n.ItemShape = this.br);
		this.bH !== "None" && (n.ShapeName = this.bH);
		this.bs && (n.SavedItemFolderId = this.bs);
		_j.h.a(this.bG) || (n.ComplianceId = this.bG);
		_j.h.a(this.cf) || (n.TimeFormat = this.cf);
		_j.u.a(this.cd) || (n.OutboundCharset = this.cd);
		this.cg && (n.UseGB18030 = this.cg);
		this.ch && (n.UseISO885915 = this.ch);
		_j.h.a(this.bW) || (n.SubjectPrefix = this.bW + " ");
		this.bJ && (n.IsNonDraft = !0);
		var t = new _g.dv(this.M());
		t.Body = n;
		return t
	}
};
_h.bE = function() {
	_h.bE.initializeBase(this);
	this.H = !0
};
_h.bE.prototype = {
	r: "MoveToDeletedItems",
	I: 0,
	H: !1,
	h: function() {
		return !0
	},
	o: function(n) {
		n.L(this.e(), this.r, this.I, this.q, this.n)
	},
	be: function() {
		this.p || (this.p = _h.c.f(this.e(), this.s()));
		_h.c.d(this.e())
	},
	S: function() {
		this.N = "DeleteConversationAction";
		this.be()
	},
	u: function(n) {
		var t = new _g.bK("Delete", new _g.e(n.bH.ConversationId.Id));
		t.DeleteType = this.r;
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		t.SuppressReadReceipts = this.H;
		return t
	}
};
_h.bn = function() {
	_h.bn.initializeBase(this)
};
_h.bn.c = function(n, t) {
	n.s(t)
};
_h.bn.prototype = {
	h: 0,
	f: "none",
	j: "NoError",
	e: function() {
		return this.eK(_h.bn.a)
	},
	o: function(n) {
		this.eI(_h.bn.a, n);
		return n
	},
	k: function() {
		return this.eK(_h.bn.b)
	},
	p: function(n) {
		this.eI(_h.bn.b, n);
		return n
	},
	n: function() {
		return this.j
	},
	S: function() {
		var t = _h.l.a(this.e().bH.FolderId);
		this.f = t ? "archivedeleteditems" : "deleteditems";
		if(_g.b.a.idToName(this.e().bH.FolderId) === "deleteditems" || _h.a.h(this.e()) || _g.b.a.idToName(this.e().bH.FolderId) === "archivedeleteditems" || _h.a.F(this.e())) {
			this.h = "SoftDelete";
			this.k().bx.p(this.e(), !0);
			var n = this.k().f(this.e().bH.ParentFolderId);
			n && _h.c.a(n, "ChildFolderCount", n.bH.ChildFolderCount, n.bH.ChildFolderCount - 1, _h.bn.c)
		} else {
			this.h = "MoveToDeletedItems";
			_h.a.J(this.e(), _g.b.a.nameToId(this.f))
		}
		_h.O.f(this.e())
	},
	K: function(n) {
		var f = new _g.fD(this.h);
		f.FolderIds = [_g.l.a(this.e().bH.FolderId)];
		var e = new _g.fC(this.M(), f);
		var t = new _g.ir(this.L);
		var i = null;
		var r, u;
		(u = _h.u.b(t.explicitLogonUser, _g.l.a(this.e().bH.FolderId), _g.a.a().c(), r = {
			val: i
		}), i = r.val, u) && (t.anchorMailbox = _h.u.a(i, _g.a.a().c().bH.OrganizationDomain));
		n.ek(e, t, this.I, this.H)
	},
	cU: function(n, t, i) {
		if(!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length !== 1) {
			i(Error.create("DeleteFolderAction failed."));
			return
		}
		if(n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
			i(Error.create(String.format("DeleteFolderAction failed with response code {0}.", n.Body.ResponseMessages.Items[0].ResponseCode)));
			return
		}
		t()
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.j = this.N.Body.ResponseMessages.Items[0].ResponseCode);
		this.l(this.e().bH.FolderId);
		this.l(_g.b.a.nameToId(this.f))
	},
	l: function(n) {
		var t = _h.a.f(n);
		t && t.O()
	}
};
_h.N = function(n, t, i, r) {
	_h.N.initializeBase(this);
	this.be = r;
	this.q = n;
	this.u = t;
	this.bi = i;
	this.r = !0;
	this.l = new _g.hj(this.L)
};
_h.N.b = function(n) {
	return _h.G.a(n, !0)
};
_h.N.a = function(n, t, i) {
	return new _h.N(_h.N.b(n), t, i, n)
};
_h.N.prototype = {
	bi: 0,
	q: null,
	u: "MoveToDeletedItems",
	bg: 0,
	N: 0,
	bc: !1,
	t: 0,
	r: !1,
	D: !1,
	l: null,
	be: null,
	h: function() {
		return !0
	},
	o: function(n) {
		this.be ? n.M(this.be, this.u, this.t, this.f, this.p) : n.N(this.q, this.u, this.t, this.f, this.p)
	},
	bo: function() {
		this.bc || this.n || (this.n = _h.c.E(this.q, this.e));
		this.bj()
	},
	S: function() {
		this.bo()
	},
	bj: function() {
		_h.c.e(this.q)
	},
	bk: function() {
		this.l.folderToReloadOnError = this.e ? _g.l.c(this.e) : null;
		this.l.clientStoreItem = this.bi;
		this.n && !this.e;
		this.l.instanceKeysToRemoveFromPendingOperations = this.n;
		this.e && (this.l.folderIdForInstanceKeysToRemoveFromPendingOperations = this.e.Id);
		return this.l
	},
	K: function(n) {
		this.l = this.bk();
		this.l.shouldPrecedeOfflineSyncActions = this.h();
		var t = new _g.eq(this.u);
		t.ItemIds = this.bl();
		t.SuppressReadReceipts = this.r;
		t.ReturnMovedItemIds = this.D;
		_j.u.a(this.bg) || (t.SendMeetingCancellations = _h.bx.toString(this.bg));
		_j.u.a(this.N) || (t.AffectedTaskOccurrences = _h.dt.toString(this.N));
		var r = new _g.ep(this.M(), t);
		if(!this.l.explicitLogonUser && r.Body.ItemIds.length > 0 && _a.bK.a(r.Body.ItemIds[0].Id)) this.l.explicitLogonUser = this.e ? _h.p.b(this.e.Id) : _h.p.b(null);
		else {
			var i = null;
			var f, u;
			(u = _h.u.c(this.l.explicitLogonUser, this.q[0], _g.a.a().c().bH.MailboxGuid, f = {
				val: i
			}), i = f.val, u) && (this.l.anchorMailbox = _h.u.a(i, _g.a.a().c().bH.OrganizationDomain))
		}
		n.t(r, this.l, this.k, this.j)
	},
	V: function() {
		this.e && _h.c.i(_h.E, this.e)
	},
	bl: function() {
		for(var t = new Array(this.q.length), n = 0; n < this.q.length; n++) t[n] = _g.e.a(this.q[n], !0);
		return t
	}
};
_h.bG = function() {
	this.e = new Array(0);
	this.f = new Array(0);
	_h.bG.initializeBase(this)
};
_h.bG.a = function(n) {
	if(n && n.length) {
		for(var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = n[t];
		return i
	} else return null
};
_h.bG.b = function() {
	var n = new _g.L("Beginning");
	n.Offset = 0;
	n.MaxEntriesReturned = _h.b.W();
	return n
};
_h.bG.prototype = {
	h: null,
	j: "Shallow",
	l: null,
	o: null,
	k: null,
	p: function() {
		return _h.b.J()
	},
	q: function() {
		return "Folder"
	},
	bm: function() {
		if(!PageDataPayload.findFolders) return !1;
		var t = PageDataPayload.findFolders;
		PageDataPayload.findFolders = null;
		if(!t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items.length || !t.Body.ResponseMessages.Items[0]) return !1;
		var i = t.Body.ResponseMessages.Items[0];
		var n = i.RootFolder;
		if(i.ResponseClass !== "Success" || !n || !n.Folders || !n.Folders.length || !n.ParentFolder) {
			_j.e.c(_a.a.v, "PageDataPayload.FindFolders data is invalid and cannot be used. json: {0}", JsonParser.serialize(t));
			return !1
		}
		this.f[0] = n.Folders;
		this.e[0] = n.ParentFolder;
		return !0
	},
	K: function(n) {
		var t = new _g.fK(this.p(), null, this.j);
		t.ShapeName = this.q();
		t.ParentFolderIds = this.h;
		t.ReturnParentFolder = !0;
		t.Paging = this.l ? this.l : _h.bG.b();
		t.RequiredFolders = _h.bG.a(this.o);
		this.k && (t.FoldersToMoveToTop = _h.bG.a(this.k));
		var e = new _g.fI(this.M(), t);
		var i = new _g.iD(this.L);
		i.explicitLogonUser = this.R;
		var r = null;
		if(_j.h.a(i.explicitLogonUser) && _h.l.l(this.h[0], _g.a.a().c())) i.explicitLogonUser = this.h[0].Mailbox.EmailAddress;
		else {
			var u, f;
			(f = _h.u.b(i.explicitLogonUser, this.h[0], _g.a.a().c(), u = {
				val: r
			}), r = u.val, f) && (i.anchorMailbox = _h.u.a(r, _g.a.a().c().bH.OrganizationDomain))
		}
		n.bx(e, i, this.I, this.H)
	},
	cJ: function(n) {
		if(!n || !n.RootFolder) {
			Array.add(this.f, null);
			Array.add(this.e, null);
			return
		}
		var t = this.f.length;
		Array.add(this.f, n.RootFolder.Folders);
		Array.add(this.e, n.RootFolder.ParentFolder);
		!this.f[t] || !this.f[t].length;
		this.e[t] || _j.e.c(_a.a.v, "Parent folder is null after processing the response message. Response message json: {0}", JsonParser.serialize(n))
	}
};
_h.cb = function(n, t, i) {
	_h.cb.initializeBase(this);
	_a.c.b(t, "conversations");
	this.f(t);
	this.l(i);
	this.H = n;
	this.r = _g.bF.a(this.H, _g.a.a().a())
};
_h.cb.a = function(n, t) {
	for(var u = [], f = 0; f < n.length; f++)
		for(var e = n[f], o = e.a().b(), r = 0; r < o; r++) {
			var i = _h.d.a().a(e.a().a(r).Id);
			if(i) {
				r || t === "ClearFlag" || t === "MarkComplete" || Array.add(u, i);
				i.bX() && t === "MarkComplete" && i.bX().a() === "Flagged" && Array.add(u, i);
				i.bX() && t === "ClearFlag" && i.bX().a() !== "NotFlagged" && Array.add(u, i)
			}
		}
	return u
};
_h.cb.b = function(n, t) {
	for(var i = 0; i < n.length; i++) _h.c.a(n[i], "FlagStatus", n[i].M(), t.a(), function(n, t) {
		n.bj(t)
	})
};
_h.cb.prototype = {
	H: "None",
	r: null,
	h: function() {
		return !0
	},
	o: function(n) {
		this.e().length > 0 && n.R(this.e(), this.H, this.q, this.n)
	},
	S: function() {
		_h.cb.b(this.e(), this.r);
		var n = _h.cb.a(this.e(), this.H);
		var i = this,
			t = this;
		_h.c.c(_g.f, _g.bF, n, "Flag", function(n) {
			return n.bX()
		}, this.r, function(n, t) {
			n.hE(t)
		})
	},
	u: function(n) {
		var t = new _g.bK("Flag", new _g.e(n.bH.ConversationId.Id));
		t.Flag = this.r.j();
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		return t
	}
};
_h.bs = function(n, t) {
	_h.bs.initializeBase(this, [2]);
	this.bj = n;
	this.be = t;
	this.j = _g.bF.a(n, _g.a.a().a());
	this.r = "FlagItem"
};
_h.bs.a = function(n, t) {
	for(var u = n, f = u.length, i = 0; i < f; ++i) {
		var r = u[i];
		_h.c.a(r, "Flag", r.bX(), t, function(n, t) {
			n.hE(t)
		})
	}
};
_h.bs.prototype = {
	j: null,
	bj: "None",
	be: null,
	k: null,
	o: function(n) {
		if(this.l.length > 0) {
			var t = _h.G.b(this.l);
			n.S(this.l, this.bj, this.k, this.p)
		}
	},
	S: function() {
		_a.dm.prototype.S.call(this);
		_h.bs.a(this.l, this.j)
	},
	t: function() {
		this.be && (this.D = _g.l.c(this.be));
		var i = new _g.t(_g.c.bC());
		i.Item = new _g.I;
		i.Item.Flag = this.j.j();
		for(var u = [i], t = new Array(this.l.length), n = 0; n < this.l.length; n++) {
			var r = new _g.e(this.l[n].bH.ItemId.Id);
			r.ChangeKey = this.l[n].bH.ItemId.ChangeKey;
			t[n] = new _g.bm;
			t[n].ItemId = r;
			t[n].Updates = u
		}
		return t
	},
	bi: function() {
		_h.cI.prototype.bi.call(this);
		this.u.flag = new _g.cH;
		this.u.flag.FlagStatus = this.j.a();
		this.u.flag.StartDate = this.j.c() ? _a.d.d(this.j.c()) : null;
		this.u.flag.DueDate = this.j.b() ? _a.d.d(this.j.b()) : null;
		this.u.flag.CompleteDate = this.j.e() ? _a.d.d(this.j.e()) : null
	}
};
_h.dw = function() {
	_h.dw.initializeBase(this)
};
_h.dw.prototype = {
	e: null,
	K: function(n) {
		var t = new _g.iH(this.L);
		n.bM(t, this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			var r = new _g.fb(n);
			this.e = r;
			t()
		} catch(u) {
			i(u)
		}
	}
};
_h.cs = function(n, t) {
	_h.cs.initializeBase(this);
	this.e = n;
	this.f = t
};
_h.cs.prototype = {
	e: null,
	f: null,
	h: function() {
		_a.g.a.a(this);
		this.e.IsLoadingFromServer = !0
	},
	K: function(n) {
		var t = new _g.iL(this.L);
		n.bR(t, this.I, this.H)
	},
	cU: function(n, t, i) {
		this.e.PopulateFromServerData(n);
		t();
		this.f.a(_a.cl, _h.cs.a)
	},
	bc: function(n) {
		this.e.IsLoadingFromServer = !1;
		_h.fK.prototype.bc.call(this, n)
	}
};
_h.ej = function() {
	_h.ej.initializeBase(this)
};
_h.ej.prototype = {
	e: null,
	K: function(n) {
		var t = new _g.hk(this.L);
		n.A(t, this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			this.f(n)
		} catch(r) {
			i(r);
			return
		}
		t()
	},
	f: function(n) {
		if(n.Favorites.length > 0) {
			this.e = new Array(n.Favorites.length);
			for(var t = 0; t < n.Favorites.length; t++) this.e[t] = n.Favorites[t].FolderId
		}
	}
};
_h.bo = function(n, t) {
	this.e = new Array(0);
	_h.bo.initializeBase(this);
	this.j = new _g.fZ(this.L);
	this.j.actionName = n;
	this.j.isAutomated = t
};
_h.bo.prototype = {
	f: null,
	h: null,
	j: null,
	k: !1,
	l: function() {
		var n;
		if(this.k) {
			n = new _g.cI("IdOnly");
			n.AdditionalProperties = [new _g.d("ReplicaList")]
		} else n = _h.b.J();
		return n
	},
	o: function() {
		return "Folder"
	},
	cK: function(n) {
		for(var r = 0; r < n.length; r++) {
			var u = n[r];
			this.cJ(u)
		}
		if(this.h) {
			this.h.i(this.e, null);
			for(var i = 0; i < this.f.length; i++) {
				var t = this.h.x[i];
				if(t)
					if(t.a() === "msgfolderroot") {
						t.f(_g.a.a().c().bH.UserDisplayName);
						t.y(!1)
					} else if(t.a() === "archivemsgfolderroot") {
					t.f(_g.a.a().c().bH.ArchiveDisplayName);
					t.y(!0)
				}
			}
		}
	},
	cJ: function(n) {
		if(n.Folders)
			for(var t = 0; t < n.Folders.length; t++) Array.add(this.e, n.Folders[t])
	},
	K: function(n) {
		var r = new _g.dA(this.l());
		r.ShapeName = this.o();
		for(var t = 0; t < this.f.length; t++) r.FolderIds[t] = this.f[t];
		var e = new _g.dz(this.M(), r);
		this.j.explicitLogonUser = this.R;
		if(!this.j.explicitLogonUser && this.f.length > 0 && (_g.bk.a(this.f[0]) || _g.dt.a(this.f[0], new _g.r("publicfoldersroot")))) this.j.explicitLogonUser = this.k ? _g.a.a().c().bH.DefaultPublicFolderMailbox : _h.p.b(null);
		else {
			var i;
			var u, f;
			(f = _h.u.b(this.j.explicitLogonUser, this.f[0], _g.a.a().c(), u = {
				val: i
			}), i = u.val, f) && (this.j.anchorMailbox = _h.u.a(i, _g.a.a().c().bH.OrganizationDomain))
		}
		n.g(e, this.j, this.I, this.H)
	},
	M: function() {
		return this.k ? this.W("Exchange2015") : _h.ck.prototype.M.call(this)
	}
};
_h.ek = function() {
	_h.ek.initializeBase(this)
};
_h.ek.prototype = {
	e: null,
	K: function(n) {
		var t = new _g.iN(this.L);
		n.bZ(t, this.I, this.H)
	},
	cU: function(n, t, i) {
		this.e = n;
		t()
	}
};
_h.dy = function() {
	_h.dy.initializeBase(this);
	this.f = new _g.fZ(this.L);
	this.f.actionName = "GetFolderPermissionSetAction";
	this.f.isAutomated = !1
};
_h.dy.prototype = {
	h: null,
	e: null,
	f: null,
	cK: function(n) {
		for(var t = 0; t < n.length; t++) {
			var i = n[t];
			this.cJ(i)
		}
	},
	cJ: function(n) {
		if(n.Folders && n.Folders.length > 0) {
			var t = new _g.u(n.Folders[0]);
			this.e = t.A()
		}
	},
	K: function(n) {
		var f = new _g.cI("IdOnly");
		f.AdditionalProperties = [_g.c.bn(), _g.c.bD()];
		var u = new _g.dA(f);
		u.FolderIds = [_g.l.a(this.h.bH.FolderId)];
		var t = null;
		var i, r;
		(r = _h.u.b(this.f.explicitLogonUser, _g.l.a(this.h.bH.FolderId), _g.a.a().c(), i = {
			val: t
		}), t = i.val, r) && (this.f.anchorMailbox = _h.u.a(t, _g.a.a().c().bH.OrganizationDomain));
		var e = new _g.dz(this.M(), u);
		n.g(e, this.f, this.I, this.H)
	}
};
_h.el = function(n) {
	_h.el.initializeBase(this);
	this.e = n
};
_h.el.prototype = {
	e: null,
	f: null,
	K: function(n) {
		var t = new _g.ex;
		t.FolderId = this.h();
		n.w(t, null, this.I, this.H)
	},
	h: function() {
		var n = new _g.r("calendar");
		n.Mailbox = new _g.g;
		n.Mailbox.EmailAddress = this.e;
		return n
	},
	cU: function(n, t, i) {
		if(!n.WasSuccessful) {
			i(Error.create(n.ErrorCode + ""));
			return
		}
		try {
			n.MasterList && (this.f = new _g.bc(n.MasterList))
		} catch(r) {
			i(r);
			return
		}
		t()
	}
};
_h.cW = function(n, t) {
	_h.cW.initializeBase(this, [n, [t], _h.b.d(), "MailCompose", 2, !1, null, null]);
	this.l = "GetMessageForCompose"
};
_h.cW.prototype = {
	e: null,
	f: !1,
	cJ: function(n) {
		if(this.f) throw Error.invalidOperation("Expected only one response message.");
		this.f = !0;
		var t = _g.f.a(n.Items[0]);
		this.e = t
	}
};
_h.em = function() {
	_h.em.initializeBase(this)
};
_h.em.prototype = {
	e: null,
	K: function(n) {
		n.ci(new _g.iQ(this.L), this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			this.e = n;
			t()
		} catch(r) {
			i(r)
		}
	}
};
_h.ct = function() {
	_h.ct.initializeBase(this)
};
_h.ct.prototype = {
	e: null,
	bm: function() {
		if(PageDataPayload.owaUserConfig) {
			this.e = PageDataPayload.owaUserConfig;
			_a.g.j || (PageDataPayload.owaUserConfig = null);
			return !0
		}
		return !1
	},
	K: function(n) {
		var t = new _g.hl(this.L);
		n.h(t, this.I, this.H)
	},
	cU: function(n, t, i) {
		this.e = n;
		t()
	}
};
_h.en = function(n, t, i) {
	_h.en.initializeBase(this);
	this.f = n;
	this.j();
	this.e = new _g.jH(this.L);
	this.e.explicitLogonUser = t;
	this.e.remoteUserIdentifier = t;
	this.e.selfIdentifier = i
};
_h.en.prototype = {
	f: null,
	e: null,
	K: function(n) {
		n.iJ(new _g.dG(this.M()), this.f, this.e, this.I, this.H)
	},
	j: function() {
		for(var i = this.f, r = i.length, n = 0; n < r; ++n) {
			var t = i[n];
			_a.c.c(t.SubscriptionId, "subscriptionId");
			_a.c.a(t.Parameters, "subscription parameters")
		}
	}
};
_h.eo = function(n, t, i) {
	_h.eo.initializeBase(this);
	this.f = n;
	this.e = new _g.jO(this.L);
	this.e.explicitLogonUser = t;
	this.e.remoteUserIdentifier = t;
	this.e.selfIdentifier = i
};
_h.eo.prototype = {
	f: null,
	e: null,
	K: function(n) {
		n.iW([this.f], this.e, this.I, this.H)
	}
};
_h.eq = function(n, t, i) {
	_h.eq.initializeBase(this);
	this.f = n;
	this.j();
	this.e = new _g.jI(this.L);
	this.e.explicitLogonUser = t;
	this.e.remoteUserIdentifier = t;
	this.e.selfIdentifier = i
};
_h.eq.prototype = {
	f: null,
	e: null,
	K: function(n) {
		n.iK(new _g.dG(this.M()), this.f, this.e, this.I, this.H)
	},
	j: function() {
		for(var i = this.f, r = i.length, n = 0; n < r; ++n) {
			var t = i[n];
			_a.c.c(t.SubscriptionId, "subscriptionId");
			_a.c.a(t.Parameters, "subscription parameters")
		}
	}
};
_h.er = function(n, t, i) {
	_h.er.initializeBase(this);
	this.f = n;
	this.e = new _g.jP(this.L);
	this.e.explicitLogonUser = t;
	this.e.remoteUserIdentifier = t;
	this.e.selfIdentifier = i
};
_h.er.prototype = {
	f: null,
	e: null,
	K: function(n) {
		n.iX([this.f], this.e, this.I, this.H)
	}
};
_h.cX = function(n, t, i) {
	_h.cX.initializeBase(this);
	this.f(n);
	this.l(t);
	this.r = i
};
_h.cX.prototype = {
	r: !1,
	h: function() {
		return !0
	},
	o: function(n) {
		n.X(this.e(), this.r)
	},
	S: function() {
		this.p || !this.s() || _g.b.a.doesIdEqualName(this.s(), "deleteditems") || (this.p = _h.c.f(this.e(), this.s()));
		_h.c.d(this.e())
	},
	u: function(n) {
		var t = new _g.bK("AlwaysDelete", new _g.e(n.bH.ConversationId.Id));
		t.EnableAlwaysDelete = this.r;
		return t
	}
};
_h.cY = function(n, t, i) {
	_h.cY.initializeBase(this);
	this.l = n;
	this.f = t;
	this.p = i;
	this.e = new _j.q;
	for(var r = 0; r < this.l.length; r++) {
		var u = this.l[r].bH.ConversationId;
		this.e.g(u) || this.e.c(u)
	}
};
_h.cY.prototype = {
	p: !1,
	l: null,
	e: null,
	f: null,
	n: null,
	h: function() {
		return !0
	},
	o: function(n) {
		n.Y(this.l, this.p)
	},
	S: function() {
		this.n || !this.f || _g.b.a.doesIdEqualName(this.f, "deleteditems") || (this.n = _h.c.f(this.l, this.f));
		_h.c.d(this.l);
		_h.c.e(this.e.i())
	},
	K: function(n) {
		var r = new _g.ee(this.M());
		r.Body.ConversationActions = new Array(this.e.d.length);
		for(var t = 0; t < this.e.d.length; t++) {
			var i = new _g.bK("AlwaysDelete", new _g.e(this.e.d[t].Id));
			i.EnableAlwaysDelete = this.p;
			i.ContextFolderId = new _g.F(_g.l.a(this.f));
			r.Body.ConversationActions[t] = i
		}
		n.k(r, this.q(), this.k, this.j)
	},
	q: function() {
		this.n && !this.f;
		var n = new _g.gZ(this.L);
		n.instanceKeysToRemoveFromPendingOperations = this.n;
		n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.f.Id;
		n.shouldPrecedeOfflineSyncActions = this.h();
		return n
	}
};
_h.et = function(n, t) {
	_h.et.initializeBase(this);
	_a.c.a(t, "datapoints");
	this.f = n;
	this.e = t
};
_h.et.prototype = {
	e: null,
	f: null,
	h: function() {
		return !1
	},
	K: function(n) {
		if(this.e.length) {
			var t = new _g.iW(this.L);
			if(this.f) {
				t.explicitLogonUser = this.f;
				t.actionName = "ModernGroup"
			}
			t.shouldPrecedeOfflineSyncActions = this.h();
			n.H(this.e, t, this.k, this.j)
		}
	}
};
_h.cy = function() {
	_h.cy.initializeBase(this)
};
_h.cy.prototype = {
	r: !1,
	H: !1,
	I: !1,
	h: function() {
		return !0
	},
	o: function(n) {
		if(this.H && this.e().length > 0) {
			var t = this.e();
			n.bc(this.r, t, this.s(), this.n)
		}
	},
	S: function() {
		this.bh();
		for(var u = this.e(), e = u.length, n = 0; n < e; ++n) {
			var f = u[n];
			if(this.t)
				for(var i = _h.g.a().d(_h.E), t = 0; t < i.length; t++) {
					var r = i[t].l(f.bH.ConversationId.Id);
					r && this.be(r)
				} else this.be(f)
		}
	},
	be: function(n) {
		var i = 0;
		var t = 0;
		if(this.r) {
			t = this.t ? 0 : Math.max(n.bH.GlobalUnreadCount - n.bH.UnreadCount, 0);
			i = 0
		} else if(n.a()) {
			t = this.t ? n.bH.GlobalMessageCount : Math.max(n.bH.GlobalUnreadCount + (n.a().b() - n.bH.UnreadCount), 0);
			i = n.a().b()
		}
		var u = this;
		_h.c.a(n, "UnreadCount", n.bH.UnreadCount, i, function(n, t) {
			n.n(t)
		});
		var r = this;
		_h.c.a(n, "GlobalUnreadCount", n.bH.GlobalUnreadCount, t, function(n, t) {
			n.R(t)
		})
	},
	u: function(n) {
		var t = new _g.bK("SetReadState", new _g.e(n.bH.ConversationId.Id));
		t.IsRead = this.r;
		t.SuppressReadReceipts = _g.a.a().a().q() !== "AlwaysSend";
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		return t
	},
	bh: function() {
		this.N = this.I ? this.r ? "ModernGroupMarkAsReadConversationAction_IsRead_True" : "ModernGroupMarkAsReadConversationAction_IsRead_False" : this.r ? "MarkAsReadConversationAction_IsRead_True" : "MarkAsReadConversationAction_IsRead_False"
	}
};
_h.cf = function(n, t, i, r, u) {
	_h.cf.initializeBase(this);
	this.f(n);
	this.bh(t);
	this.l(i);
	this.p = r;
	this.I = u
};
_h.cf.prototype = {
	r: !1,
	I: 0,
	bh: function(n) {
		this.r = n;
		this.be(this.r ? _g.b.a.nameToId("clutter") : _g.b.a.nameToId("inbox"));
		return n
	},
	o: function(n) {
		n.bb(this.e(), this.I, this.r)
	},
	bg: function() {
		var n = this.e().length === 1 ? "Single_" : "Multi_";
		n += this.I + "_";
		n += this.r ? "MarkConversationAsClutter" : "MarkConversationAsNotClutter";
		this.N = n;
		return _h.bw.prototype.bg.call(this)
	}
};
_h.H = function(n, t, i, r, u, f) {
	_h.H.initializeBase(this, [2]);
	_a.c.j(n, "messagesToMarkRead");
	this.q(n);
	this.k = t;
	this.j = i;
	this.be = r;
	this.bj = f;
	(u || _g.a.a().a().q() !== "AlwaysSend") && (this.bP = !0);
	this.r = "MarkMessageRead"
};
_h.H.c = function() {
	if(!_h.H.a) {
		var n = new _g.t(_g.c.bv());
		n.Item = new _g.I;
		n.Item.IsRead = !0;
		_h.H.a = [n]
	}
	return _h.H.a
};
_h.H.d = function() {
	if(!_h.H.b) {
		var n = new _g.t(_g.c.bv());
		n.Item = new _g.I;
		n.Item.IsRead = !1;
		_h.H.b = [n]
	}
	return _h.H.b
};
_h.H.prototype = {
	k: !1,
	be: !1,
	j: null,
	bj: !1,
	o: function(n) {
		if(this.l.length > 0) {
			var t = _h.G.b(this.l);
			n.be(this.k, this.l, this.j, this.p, this.be, this.bj)
		}
	},
	S: function() {
		_a.dm.prototype.S.call(this);
		var t = this,
			n = this;
		_h.c.c(_g.x, Boolean, this.l, "IsRead", function(n) {
			return n.a()
		}, this.k, function(n, t) {
			n.h(t)
		})
	},
	t: function() {
		this.j && (this.D = new _g.F(_g.l.a(this.j)));
		for(var r = this.k ? _h.H.c() : _h.H.d(), t = new Array(this.l.length), n = 0; n < this.l.length; n++) {
			var i = new _g.e(this.l[n].bH.ItemId.Id);
			i.ChangeKey = this.l[n].bH.ItemId.ChangeKey;
			t[n] = new _g.bm;
			t[n].ItemId = i;
			t[n].Updates = r
		}
		return t
	}
};
_h.ba = function() {
	_h.ba.initializeBase(this)
};
_h.ba.prototype = {
	h: function() {
		return !0
	},
	H: function() {
		return this.eK(_h.ba.a)
	},
	be: function(n) {
		this.eI(_h.ba.a, n);
		return n
	},
	o: function(n) {
		this.e().length > 0 && n.v(this.e(), this.H(), this.q, this.n)
	},
	S: function() {
		for(var n = _h.a.a(this.H()), r = 0, i = 0, t = 0; t < this.e().length; t++) {
			r += this.e()[t].bH.MessageCount;
			i += this.e()[t].bH.UnreadCount
		}
		var f = this;
		_h.c.a(n, "UnreadCount", n.bH.UnreadCount, n.bH.UnreadCount + i, function(n, t) {
			n.h(t)
		});
		var u = this;
		_h.c.a(n, "TotalCount", n.bH.TotalCount, n.bH.TotalCount + r, function(n, t) {
			n.l(t)
		});
		this.p || (this.p = _h.c.f(this.e(), this.s()));
		_h.c.d(this.e());
		_h.cf.isInstanceOfType(this) || _h.O.b(_h.a.a(this.H()))
	},
	u: function(n) {
		var t = new _g.bK("Move", new _g.e(n.bH.ConversationId.Id));
		t.DestinationFolderId = new _g.F(_g.l.a(this.H()));
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		return t
	}
};
_h.dd = function() {
	_h.dd.initializeBase(this)
};
_h.dd.prototype = {
	e: null,
	f: null,
	h: "NoError",
	n: function() {
		return this.h
	},
	S: function() {
		_h.a.J(this.e, this.f)
	},
	K: function(n) {
		var t = new _g.gn(_g.l.c(this.f));
		t.FolderIds = [_g.l.a(this.e.bH.FolderId)];
		var r = new _g.gm(this.M(), t);
		var i = new _g.jg(this.L);
		n.gZ(r, i, this.I, this.H)
	},
	cU: function(n, t, i) {
		if(!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items || n.Body.ResponseMessages.Items.length !== 1 || n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
			i(Error.create("MoveFolderAction failed"));
			return
		}
		t()
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.N && this.N.Body && this.N.Body.ResponseMessages && this.N.Body.ResponseMessages.Items && this.N.Body.ResponseMessages.Items.length > 0 && (this.h = this.N.Body.ResponseMessages.Items[0].ResponseCode);
		this.j(this.e.bH.FolderId);
		this.j(this.f)
	},
	j: function(n) {
		var t = _h.a.f(n);
		t && t.O()
	}
};
_h.bb = function(n, t, i) {
	_h.bb.initializeBase(this);
	this.l = _h.cI.a(n);
	this.D = i;
	this.r = t
};
_h.bb.prototype = {
	l: null,
	D: 0,
	r: null,
	q: null,
	s: !1,
	h: function() {
		return !0
	},
	o: function(n) {
		n.v(this.l, this.r, this.f, this.p)
	},
	S: function() {
		this.n || (this.n = _h.c.f(this.l, this.e));
		_h.c.d(this.l);
		if(!this.s) {
			var n = _h.a.a(this.r);
			_h.a.j(n) && _h.O.b(n)
		}
	},
	H: function() {
		var n = new _g.jj(this.L);
		n.clientStoreItem = this.D;
		n.folderToReloadOnError = this.e ? _g.l.c(this.e) : null;
		n.instanceKeysToRemoveFromPendingOperations = this.n;
		this.e && (n.folderIdForInstanceKeysToRemoveFromPendingOperations = this.e.Id);
		n.actionName = this.q ? this.q : "MoveItem";
		return n
	},
	K: function(n) {
		var i = this.H();
		i.shouldPrecedeOfflineSyncActions = this.h();
		var t = new _g.gp(new _g.F(new _g.m(this.r.Id)));
		t.ItemIds = this.I();
		var r = new _g.go(this.M(), t);
		n.K(r, i, this.k, this.j)
	},
	V: function() {
		this.e || _h.c.i(_h.t, this.e)
	},
	I: function() {
		for(var t = new Array(this.l.length), n = 0; n < this.l.length; n++) t[n] = new _g.e(this.l[n].bH.ItemId.Id);
		return t
	}
};
_h.dJ = function() {
	this.h = this.$$gta["_h.dJ"].TResponse === Number || Type.isEnum(this.$$gta["_h.dJ"].TResponse) ? 0 : this.$$gta["_h.dJ"].TResponse === Boolean ? !1 : null;
	_h.dJ.$$(this.$$gta["_h.dJ"].TResponse).initializeBase(this)
};
_h.dJ.$$ = function(n) {
	var u = _h.__tc = _h.__tc || {};
	var t = "dJ" + "$" + n.getName().replace(/\./g, "_");
	if(!u[t]) {
		var r = u[t] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_h.dJ.apply(this, t)
		};
		var h = _h.fK;
		r.registerClass("_h.__tc." + t, h);
		var o = {
			"_h.dJ": {
				TResponse: n
			},
			ctor: _h.dJ
		};
		var c = h.prototype.$$gta;
		for(var l in c) {
			var s = {
				key: l,
				value: c[l]
			};
			o[s.key] = s.value
		}
		r.prototype.$$gta = o;
		var f = _h.dJ.prototype;
		for(var e in f) {
			var i = {
				key: e,
				value: f[e]
			};
			"constructor" !== i.key && (r.prototype[i.key] = i.value)
		}
	}
	return u[t]
};
_h.dJ.prototype = {
	cU: function(n, t, i) {
		this.h = n;
		t()
	}
};
_h.ew = function(n) {
	_h.ew.initializeBase(this);
	this.e = n;
	this.j();
	this.f = new _g.jJ(this.L)
};
_h.ew.prototype = {
	e: null,
	f: null,
	K: function(n) {
		n.iL(new _g.dG(this.M()), this.e, this.f, this.I, this.H)
	},
	j: function() {
		for(var i = this.e, r = i.length, n = 0; n < r; ++n) {
			var t = i[n];
			_a.c.c(t.SubscriptionId, "subscriptionId");
			_a.c.a(t.Parameters, "subscription parameters")
		}
	}
};
_h.ex = function(n) {
	_h.ex.initializeBase(this);
	this.f = n;
	this.e = new _g.jQ(this.L)
};
_h.ex.prototype = {
	f: null,
	e: null,
	K: function(n) {
		n.dm([this.f], this.e, this.I, this.H)
	}
};
_h.ey = function(n) {
	_h.ey.initializeBase(this);
	this.e = n
};
_h.ey.prototype = {
	e: 0,
	K: function(n) {
		var t = new _g.jm(this.L);
		n.hj(this.e, t, this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			if(!n) {
				i(Error.create("NotifyAppWipe failed on server."));
				return
			}
			t()
		} catch(r) {
			i(r)
		}
	}
};
_h.bh = function() {};
_h.bh.a = function(n, t, i) {
	t.val = 0;
	i.val = null;
	var u = n[_h.bh.e];
	if(!u || u !== _bc.m.dataContractName) return !1;
	var e = n[_h.bh.d];
	_j.u.a(e) || (t.val = e);
	var f = n[_h.bh.c];
	var r = f[_h.bh.b];
	r = r ? r : "";
	i.val = Error.create(r, f);
	return !0
};
_h.PDPInit = function() {};
_h.PDPInit.$$cctor = function() {
	window.PageDataPayload || (window.PageDataPayload = {})
};
_h.q = function(n, t) {
	this.a = n;
	this.b = t
};
_h.q.prototype = {
	a: "FolderId",
	b: "Ascending",
	e: function() {
		return this.d() || this.a === "DateTimeSent" || this.a === "DateTimeCreated" || this.a === "ItemLastModifiedTime" || this.a === "ConversationLastModifiedTime"
	},
	d: function() {
		return this.a === "DateTimeReceived" || this.a === "ConversationLastDeliveryTime" || this.c()
	},
	c: function() {
		return this.a === "ReceivedOrRenewTime" || this.a === "ConversationLastDeliveryOrRenewTime"
	},
	f: function() {
		return this.a === "ItemLastModifiedTime" || this.a === "ConversationLastModifiedTime"
	},
	C: function(n) {
		return n ? _h.q.isInstanceOfType(n) ? this.a === n.a && this.b === n.b : !1 : !1
	}
};
_h.dO = function() {
	_h.dO.initializeBase(this)
};
_h.dO.prototype = {
	e: null,
	f: null,
	h: null,
	S: function() {
		this.h = this.e.bH.DisplayName;
		var n = this;
		_h.c.a(this.e, "DisplayName", this.h, this.f, function(n, t) {
			n.f(t)
		})
	},
	K: function(n) {
		var e = new _g.bD;
		e.DisplayName = this.f;
		var h = new _g.ca(new _g.d("FolderDisplayName"), e);
		var o = new _g.cm(_g.l.a(this.e.bH.FolderId));
		o.Updates = [h];
		var s = new _g.cc;
		s.FolderChanges = [o];
		var f = new _g.cr(this.M());
		f.Body = s;
		var i = new _g.cO(this.L);
		var t = null;
		var r, u;
		(u = _h.u.b(i.explicitLogonUser, _g.l.a(this.e.bH.FolderId), _g.a.a().c(), r = {
			val: t
		}), t = r.val, u) && (i.anchorMailbox = _h.u.a(t, _g.a.a().c().bH.OrganizationDomain));
		n.b(f, i, this.I, this.H)
	},
	cJ: function(n) {},
	V: function() {
		_a.dm.prototype.V.call(this);
		var n = _h.a.f(this.e.bH.FolderId);
		n && n.O()
	}
};
_h.eG = function(n, t, i) {
	_h.eG.initializeBase(this);
	_j.s.e(n, "conversations");
	this.f(n);
	this.r = t;
	this.l(i);
	this.N = "SetConversationInferenceClassification"
};
_h.eG.prototype = {
	r: "Focused",
	h: function() {
		return !0
	},
	o: function(n) {
		this.e().length > 0 && n.bv(this.e(), this.r, this.s())
	},
	S: function() {
		_a.dm.prototype.S.call(this);
		this.p || (this.p = _h.c.f(this.e(), this.s()));
		_h.c.d(this.e())
	},
	u: function(n) {
		var t = new _g.bK("SetInferenceClassificationState", new _g.e(n.bH.ConversationId.Id));
		t.InferenceClassification = this.r;
		t.ConversationLastSyncTime = n.V() ? n.V().i() : null;
		return t
	}
};
_h.eH = function() {
	_h.eH.initializeBase(this)
};
_h.eH.prototype = {
	e: null,
	K: function(n) {
		var t = new _g.eP;
		t.FolderMruEntries = this.e;
		n.ih(t, null, this.I, this.H)
	},
	cU: function(n, t, i) {
		t()
	}
};
_h.dR = function(n, t, i) {
	_h.dR.initializeBase(this, [2]);
	_j.s.e(n, "items");
	this.q(n);
	this.be = t;
	this.j = i;
	this.r = "SetItemInferenceClassification"
};
_h.dR.prototype = {
	be: "Focused",
	j: null,
	k: null,
	o: function(n) {
		if(this.l.length > 0) {
			var t = _h.G.b(this.l);
			n.bw(t, this.be, this.j)
		}
	},
	S: function() {
		_a.dm.prototype.S.call(this);
		_h.c.d(this.l)
	},
	t: function() {
		this.j && (this.D = _g.l.c(this.j));
		var t = new _g.t(new _g.d("InferenceClassification"));
		t.Item = new _g.M;
		t.Item.InferenceClassification = this.be;
		for(var e = [t], f = new Array(this.l.length), n = 0; n < this.l.length; n++) {
			var u = this.l[n].bH.ItemId;
			var r = new _g.e(u.Id);
			r.ChangeKey = u.ChangeKey;
			var i = new _g.bm;
			i.ItemId = r;
			i.Updates = e;
			f[n] = i
		}
		return f
	},
	bi: function() {
		_h.cI.prototype.bi.call(this);
		this.k || (this.u.instanceKeysToRemoveFromPendingOperations = _h.c.f(this.l, this.j));
		this.u.folderIdForInstanceKeysToRemoveFromPendingOperations = this.j.Id
	}
};
_h.cE = function() {
	_h.cE.initializeBase(this)
};
_h.cE.prototype = {
	o: 0,
	r: null,
	H: null,
	h: function() {
		return !1
	},
	I: function() {
		if(!this.H) {
			this.H = [];
			if(this.e())
				for(var t = 0; t < this.e().length; t++)
					for(var r = this.e()[t], n = 0; n < r.a().b(); n++) {
						var u = r.a().a(n);
						var i = _h.d.a().a(u.Id);
						i && Array.add(this.H, i)
					}
		}
		return this.H
	},
	S: function() {
		this.be(this.r)
	},
	u: function(n) {
		var t = new _g.bK("SetRetentionPolicy", new _g.e(n.bH.ConversationId.Id));
		t.RetentionPolicyType = this.o;
		this.r && (t.RetentionPolicyTagId = this.r);
		return t
	},
	be: function(n) {
		var t = new _g.bp;
		if(n) {
			t.c(n);
			t.b(!0)
		} else {
			t.c(null);
			t.b(!1)
		}
		var r = this,
			i = this;
		_h.c.c(_g.f, _g.bp, this.I(), this.o === 1 ? "ArchiveTag" : "PolicyTag", function(n) {
			return r.o === 1 ? n.cC() : n.cs()
		}, t, function(n, t) {
			i.o === 1 ? n.gD(t) : n.gL(t)
		})
	}
};
_h.f = function(n, t) {
	_h.f.initializeBase(this);
	this.e = n;
	this.f = t
};
_h.f.a = function(n, t) {
	var r = n.a();
	if(r) {
		var i = new _h.f(r, n.b());
		t.a(i);
		n.g();
		return i
	}
	return null
};
_h.f.b = function(n, t) {
	if(n.a()) {
		_h.f.c && _h.f.c !== n && _h.f.a(_h.f.c, t);
		_h.f.c = n;
		_h.f.d = _j.m.a().b(_h.f.d);
		_h.f.d = _j.m.a().a(_a.a.fX, "CommitChangesThrottled", function() {
			_h.f.a(n, t);
			_h.f.c = null
		}, 2e3)
	}
};
_h.f.prototype = {
	f: null,
	h: function() {
		return !1
	},
	e: null,
	K: function(n) {
		var u = _g.b.a.nameToId("root");
		var f = new _g.gJ(_g.l.a(u), this.f);
		var t = new _g.gy(f);
		t.Dictionary = this.e;
		var e = new _g.gI(t);
		var r = new _g.gH(this.M(), e);
		var i = new _g.jV(this.L);
		i.shouldPrecedeOfflineSyncActions = this.h();
		n.T(r, i, this.k, this.j)
	}
};
_h.dX = function() {
	_h.dX.initializeBase(this)
};
_h.dX.prototype = {
	e: null,
	f: null,
	j: null,
	h: !1,
	S: function() {
		this.j = this.h ? this.e.E() ? this.e.E().bH.Value : null : this.e.G() ? this.e.G().bH.Value : null;
		this.k(this.f)
	},
	K: function(n) {
		var r = new _g.cm(_g.l.a(this.e.bH.FolderId));
		r.Updates = [this.l()];
		var i = new _g.cc;
		i.FolderChanges = [r];
		var t = new _g.cr(this.M());
		t.Body = i;
		var u = new _g.cO(this.L);
		n.b(t, u, this.I, this.H)
	},
	cJ: function(n) {},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.k(this.j)
	},
	l: function() {
		var t = new _g.bD;
		var n;
		if(this.h)
			if(this.f) {
				var r = new _g.bM(this.f);
				r.IsExplicit = !0;
				t.ArchiveTag = r;
				n = new _g.ca(_g.c.bt(), t)
			} else n = new _g.eo(_g.c.bt());
		else if(this.f) {
			var i = new _g.bM(this.f);
			i.IsExplicit = !0;
			t.PolicyTag = i;
			n = new _g.ca(_g.c.bu(), t)
		} else n = new _g.eo(_g.c.bu());
		return n
	},
	k: function(n) {
		var t = new _g.bp;
		if(this.h) {
			if(n) {
				t.c(n);
				t.b(!0)
			} else {
				t.c(null);
				t.b(!1)
			}
			var r = this;
			_h.c.a(this.e, "ArchiveTag", this.e.E(), t, function(n, t) {
				n.Y(t)
			})
		} else {
			if(n) {
				t.c(n);
				t.b(!0)
			} else {
				t.c(null);
				t.b(!1)
			}
			var i = this;
			_h.c.a(this.e, "PolicyTag", this.e.G(), t, function(n, t) {
				n.bb(t)
			})
		}
	}
};
_h.cI = function(n) {
	_h.cI.initializeBase(this);
	this.bH = n;
	var t = _g.a.a().bH.PolicySettings;
	this.bt = t.OutboundCharset;
	this.bv = t.UseGB18030;
	this.bw = t.UseISO885915
};
_h.cI.a = function(n) {
	if(!n) return null;
	for(var u = {}, r = [], t = 0; t < n.length; t++) {
		var i = n[t];
		if(!(i.bH.ItemId.Id in u)) {
			Array.add(r, i);
			u[i.bH.ItemId.Id] = 1
		}
	}
	return r
};
_h.cI.b = function(n) {
	if(!n) return null;
	for(var u = {}, r = [], t = 0; t < n.length; t++) {
		var i = n[t];
		if(!(i.Id in u)) {
			Array.add(r, i);
			u[i.Id] = 1
		}
	}
	return r
};
_h.cI.prototype = {
	l: null,
	bG: null,
	bH: 0,
	bo: "AlwaysOverwrite",
	s: 0,
	bN: 0,
	bp: null,
	D: null,
	bu: null,
	u: null,
	bt: "AlwaysUTF8",
	bv: !1,
	bw: !1,
	bg: null,
	bP: !1,
	r: null,
	bM: !1,
	bs: null,
	q: function(n) {
		this.l = _h.cI.a(n);
		return n
	},
	f: function(n) {
		this.bo = n;
		return n
	},
	h: function(n) {
		this.s = n;
		return n
	},
	e: function(n) {
		this.bg = n;
		return n
	},
	p: null,
	M: function() {
		return this.W("Exchange2015")
	},
	bi: function() {},
	K: function(n) {
		var i = this.bJ();
		var t = new _g.gE(this.L);
		this.u = t;
		t.folderToReloadOnError = this.D;
		t.clientStoreItem = this.bH;
		t.clientStoreBodyValue = this.bG;
		t.isTextBodyValue = this.bM;
		this.bu && (t.outboxFolderId = new _g.m(this.bu.Id));
		if(!t.explicitLogonUser && i.Body.ItemChanges.length > 0 && _a.bK.a(i.Body.ItemChanges[0].ItemId.Id)) {
			var u = null;
			i.Body.SavedItemFolderId && (u = i.Body.SavedItemFolderId.BaseFolderId);
			t.explicitLogonUser = u ? _h.p.b(u.Id) : _h.p.b(null)
		} else {
			var r = null;
			var e, f;
			(f = _h.u.c(t.explicitLogonUser, i.Body.ItemChanges[0].ItemId, _g.a.a().c().bH.MailboxGuid, e = {
				val: r
			}), r = e.val, f) && (t.anchorMailbox = _h.u.a(r, _g.a.a().c().bH.OrganizationDomain))
		}
		this.bi();
		this.r && !this.u.actionName && (this.u.actionName = this.r);
		n.c(i, this.u, this.I, this.H)
	},
	cJ: function(n) {},
	bJ: function() {
		var n = new _g.dS(this.bo);
		n.ClientSupportsIrm = !0;
		n.ItemChanges = this.t();
		_j.u.a(this.bN) || (n.SendCalendarInvitationsOrCancellations = _h.cD.toString(this.bN));
		_j.u.a(this.s) || (n.MessageDisposition = _h.bR.toString(this.s));
		this.bp && (n.SavedItemFolderId = this.bp);
		_j.h.a(this.bg) || (n.ComplianceId = this.bg);
		n.SuppressReadReceipts = this.bP;
		this.bs && (n.ComposeOperation = this.bs);
		_j.u.a(this.bt) || (n.OutboundCharset = this.bt);
		this.bv && (n.UseGB18030 = this.bv);
		this.bw && (n.UseISO885915 = this.bw);
		return new _g.dR(this.M(), n)
	}
};
_h.bV = function(n, t, i, r) {
	_h.bV.initializeBase(this);
	this.j = r;
	n && n.length > 0 && (this.f = n);
	t && t.length > 0 && (this.k = t);
	i && i.length > 0 && (this.h = i)
};
_h.bV.prototype = {
	f: null,
	k: null,
	h: null,
	j: null,
	e: null,
	l: function() {
		var n = new _g.gG;
		n.AddCategoryList = this.f;
		n.ChangeCategoryColorList = this.h;
		n.RemoveCategoryList = this.k;
		return n
	},
	K: function(n) {
		var i = this.l();
		var t = new _g.jT(this.L);
		t.explicitLogonUser = this.j;
		n.dr(i, t, this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			this.n(n)
		} catch(r) {
			i(r);
			return
		}
		t()
	},
	n: function(n) {
		this.e = new(_a.fT.$$(_g.bg, _g.bC))(n.MasterList)
	}
};
_h.ck = function(n) {
	this.cy = Function.createDelegate(this, this.cR);
	_h.ck.initializeBase(this, [n]);
	this.Z = _h.ck.a
};
_h.ck.prototype = {
	Q: null,
	d: function() {
		return this.Q
	},
	R: null,
	E: function() {
		return this.R
	},
	cY: function(n) {
		this.R = n;
		return n
	},
	Z: "Exchange2007",
	O: function() {
		var n = this.cO();
		return n ? n : _a.dm.prototype.cv.call(this)
	},
	P: function() {
		return this.Q ? this.Q.correlationId : null
	},
	M: function() {
		return this.W(this.Z)
	},
	Y: function() {
		return _g.a.a().a().bH.TimeZone
	},
	W: function(n) {
		var t = new _g.cw(n);
		t.TimeZoneContext = new _g.dQ;
		t.TimeZoneContext.TimeZoneDefinition = new _g.cN;
		t.TimeZoneContext.TimeZoneDefinition.Id = this.Y();
		return t
	},
	bb: function() {
		if(this.bm()) return 0;
		else {
			_g.k.d(this.cy);
			return 1
		}
	},
	bm: function() {
		return !1
	},
	cR: function(n) {
		this.K(_a.fM.isInstanceOfType(this) ? _g.k.a.b() : n)
	},
	cO: function() {
		if(this.Q) {
			if(this.Q.responseCode !== "NoError") return this.Q.responseCode;
			else if(this.Q.response) return this.Q.response.statusCode !== 200 && this.Q.response.statusCode !== 500 ? "HTTP_" + this.Q.response.statusCode : this.cQ()
		} else return null;
		return null
	},
	cQ: function() {
		if(this.Q.response.fault) {
			if(this.Q.response.fault.ResponseCode && this.Q.response.fault.ResponseCode !== "NoError") return this.Q.response.fault.ResponseCode;
			else if(this.Q.response.fault.ExceptionName) return this.Q.response.fault.ExceptionName
		} else return null;
		return null
	}
};
_h.fJ = function(n) {
	this.e = n
};
_h.fJ.prototype = {
	e: null
};
_h.fK = function(n) {
	this.cA = Function.createDelegate(this, this.cT);
	this.cz = Function.createDelegate(this, this.cS);
	this.H = Function.createDelegate(this, this.bc);
	this.I = Function.createDelegate(this, this.bh);
	_h.fK.initializeBase(this, [n])
};
_h.fK.prototype = {
	N: null,
	bh: function(n, t) {
		this.Q = n;
		this.N = t;
		this.cU(this.N, this.cz, this.H)
	},
	bc: function(n) {
		this.z() !== 3 && this.X(n)
	},
	cT: function(n, t) {
		this.Q = n;
		this.bc(t)
	},
	cS: function() {
		this.z() !== 3 && this.X(null)
	}
};
_h.fL = function() {
	this.j = Function.createDelegate(this, this.bp);
	this.k = Function.createDelegate(this, this.bq);
	_h.fL.initializeBase(this)
};
_h.fL.prototype = {
	bq: function(n) {
		this.Q = n;
		this.X(null)
	},
	bp: function(n) {
		this.X(n)
	}
};
_h.b = function() {};
_h.b.J = function() {
	_h.b.C || (_h.b.C = new _g.cI("IdOnly"));
	return _h.b.C
};
_h.b.N = function() {
	if(!_h.b.o) {
		_h.b.o = new _g.cI("IdOnly");
		_h.b.o.AdditionalProperties = [new _g.d("UnreadCount"), new _g.d("TotalCount")]
	}
	return _h.b.o
};
_h.b.f = function() {
	_h.b.D || (_h.b.D = new _g.U("IdOnly"));
	return _h.b.D
};
_h.b.P = function() {
	_h.b.B || (_h.b.B = new _g.fs("IdOnly"));
	return _h.b.B
};
_h.b.W = function() {
	_h.b.q === -1 && (_h.b.q = _j.u.a(_g.a.a().n().bH.FindFolderCountLimit) ? 5e3 : _g.a.a().n().bH.FindFolderCountLimit);
	return _h.b.q
};
_h.b.r = function() {
	if(!_h.b.t) {
		_h.b.t = _ff.e.a(_h.b.g());
		_h.b.t.MaximumRecipientsToReturn = 0
	}
	return _h.b.t
};
_h.b.g = function() {
	if(!_h.b.i) {
		_h.b.i = _h.b.F();
		_h.b.i.MaximumBodySize = _h.b.w;
		_h.b.i.MaximumRecipientsToReturn = _h.b.x;
		_h.b.i.CssScopeClassName = _h.b.k
	}
	return _h.b.i
};
_h.b.a = function() {
	if(!_h.b.j) {
		_h.b.j = _h.b.F();
		_h.b.j.MaximumBodySize = _h.b.w;
		_h.b.j.MaximumRecipientsToReturn = _h.b.x;
		_h.b.j.CssScopeClassName = _h.b.k
	}
	return _h.b.j
};
_h.b.K = function() {
	if(!_h.b.u) {
		_h.b.u = _ff.e.a(_h.b.a());
		_h.b.u.MaximumRecipientsToReturn = 0
	}
	return _h.b.u
};
_h.b.R = function(n) {
	if(!_h.b.c) {
		_h.b.c = _h.b.F();
		_h.b.c.BodyType = n ? "Best" : "Text";
		_h.b.c.UniqueBodyType = "HTML";
		_h.b.c.NormalizedBodyType = "HTML";
		_h.b.c.MaximumBodySize = _h.b.w;
		_h.b.c.MaximumRecipientsToReturn = 0
	}
	return _h.b.c
};
_h.b.d = function() {
	if(!_h.b.m) {
		_h.b.m = _h.b.G();
		_h.b.m.BodyType = "HTML";
		_h.b.m.InlineImageUrlTemplate = _g.B.b()
	}
	return _h.b.m
};
_h.b.l = function() {
	if(!_h.b.v) {
		_h.b.v = _h.b.G();
		_h.b.v.BodyType = "Text"
	}
	return _h.b.v
};
_h.b.L = function() {
	if(!_h.b.n) {
		_h.b.n = _h.b.G();
		_h.b.n.NormalizedBodyType = "HTML";
		_h.b.n.InlineImageUrlTemplate = _g.B.b()
	}
	return _h.b.n
};
_h.b.Y = function() {
	var n = new _g.fq("IdOnly");
	_h.b.M(n);
	n.BodyType = "HTML";
	return n
};
_h.b.V = function() {
	if(!_h.b.p) {
		_h.b.p = new _g.U("IdOnly");
		_h.b.p.AdditionalProperties = [new _g.d("EntityExtractionResult")]
	}
	return _h.b.p
};
_h.b.I = function() {
	_h.b.z || (_h.b.z = _h.b.H(!0, !1));
	return _h.b.z
};
_h.b.X = function() {
	_h.b.y || (_h.b.y = _h.b.H(!0, !0));
	return _h.b.y
};
_h.b.O = function() {
	_h.b.A || (_h.b.A = _h.b.H(!1, !0));
	return _h.b.A
};
_h.b.S = function(n) {
	return _h.l.c(n) ? new _h.q("ConversationLastDeliveryTime", "Descending") : new _h.q(_h.b.b, "Descending")
};
_h.b.h = function(n) {
	var t = null;
	if(n) {
		for(var i = 0; i < _h.b.s.length; ++i) {
			var r = _h.b.s[i];
			if(r.a === n) {
				t = r.b;
				break
			}
		}
		if(!t) {
			t = _ff.e.a(n);
			t.InlineImageUrlTemplate = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7";
			t.InlineImageUrlOnLoadTemplate = "InlineImageLoader.GetLoader().Load(this)";
			t.InlineImageCustomDataTemplate = "{id}";
			if(_h.b.s.length < 8) {
				var u = new _h.b.U(n, t);
				Array.add(_h.b.s, u)
			}
		}
	}
	return t
};
_h.b.F = function() {
	var n = new _g.U("IdOnly");
	_h.b.M(n);
	return n
};
_h.b.Q = function(n, t) {
	return _g.b.a.doesIdEqualName(n, "sentitems") ? t && t.a === "ConversationUniqueSenders" ? "ConversationUberListView" : "ConversationSentItemsListView" : t && t.a === "ConversationUniqueRecipients" ? "ConversationUberListView" : "ConversationListView"
};
_h.b.G = function() {
	var n = new _g.U("IdOnly");
	n.ClientSupportsIrm = !0;
	n.FilterHtmlContent = !0;
	n.FilterInlineSafetyTips = !1;
	n.ShouldUseNarrowGapForPTagHtmlToTextConversion = !0;
	return n
};
_h.b.M = function(n) {
	if(_g.a.a().n().a() === 2) {
		n.FilterHtmlContent = !1;
		n.BlockExternalImagesIfSenderUntrusted = !1
	} else {
		n.FilterHtmlContent = !0;
		n.BlockExternalImagesIfSenderUntrusted = !0
	}
	_g.a.a().p() && (n.BlockContentFromUnknownSenders = _g.a.a().p().bH.BlockContentFromUnknownSenders);
	n.AddBlankTargetToLinks = !0;
	n.ClientSupportsIrm = !0;
	n.InlineImageUrlTemplate = _g.B.b();
	n.FilterInlineSafetyTips = !0;
	n.MaximumBodySize = 0;
	return n
};
_h.b.H = function(n, t) {
	var i = new _g.U("IdOnly");
	_h.b.M(i);
	i.CssScopeClassName = _h.b.k;
	if(n) {
		i.BodyType = "HTML";
		t && (i.AdditionalProperties = [new _g.d("TextBody")])
	} else t && (i.BodyType = "Text");
	return i
};
_h.b.U = function(n, t) {
	this.a = n;
	this.b = t
};
_h.b.U.prototype = {
	a: null,
	b: null
};
_h.m = function(n, t) {
	this.a = n;
	this.b = t
};
_h.m.e = function(n, t) {
	if(!n && t) return new _h.m(t.a, t.b);
	if(n && !t) return new _h.m(n.a, n.b);
	var r = n.a.a(t.a) < 0 ? n.a : t.a;
	var i = n.b.a(t.b) > 0 ? n.b : t.b;
	return new _h.m(r, i)
};
_h.m.b = function(n, t) {
	return n ? n.g(t) : !t
};
_h.m.d = function(n, t) {
	if(!n) throw Error.argumentNull("a");
	if(!t) throw Error.argumentNull("b");
	var r;
	var i;
	if(n.a.a(t.a) < 0) {
		r = n.f();
		i = t.f()
	} else {
		r = t.f();
		i = n.f()
	}
	return r.b.a(i.a) < 0
};
_h.m.a = function(n, t) {
	_a.c.a(n, "a");
	_a.c.a(t, "b");
	return n.a.a(t.a) < 0 ? n.b.a(t.a) > 0 : t.b.a(n.a) > 0
};
_h.m.c = function(n) {
	return n === 6 || n === 3
};
_h.m.prototype = {
	a: null,
	b: null,
	e: function(n) {
		_a.c.a(n, "item");
		return n.a().a(this.b) < 0 && (n.b().a(this.a) > 0 || !n.a().a(this.a))
	},
	i: function(n) {
		return n.b().a(this.a) <= 0 && n.a().a(this.a) ? -1 : n.a().a(this.b) >= 0 ? 1 : 0
	},
	f: function() {
		var t = this.a.u();
		var n = this.b.u();
		return new _h.m(t, n)
	},
	d: function(n, t) {
		if(!n) throw Error.argumentNull("otherRange");
		return t ? this.a.a(n.a) <= 0 && this.b.a(n.b) >= 0 : this.a.a(n.a) < 0 && this.b.a(n.b) > 0
	},
	g: function(n) {
		return n ? !this.a.a(n.a) && !this.b.a(n.b) : !1
	},
	h: function(n, t) {
		if(!n) throw Error.argumentNull("start");
		if(!t) throw Error.argumentNull("end");
		return n.k(this.a) >= 0 && n.k(this.b) <= 0 || t.k(this.b) <= 0 && t.k(this.a) >= 0 || n.k(this.a) < 0 && t.k(this.b) > 0 ? !0 : !1
	},
	c: function(n, t, i) {
		if(!n) throw Error.argumentNull("dateToTest");
		var r;
		r = t ? this.a.a(n) <= 0 : this.a.a(n) < 0;
		return i ? r && this.b.a(n) >= 0 : r && this.b.a(n) > 0
	},
	toString: function() {
		return this.a + "-" + this.b
	}
};
_h.bu = function() {};
_h.bu.a = function(n, t) {
	if(!(n.toString() in _h.bu.b)) {
		_a.y.a.a(new _h.bu.c(n, t));
		_h.bu.b[n.toString()] = !0
	}
};
_h.bu.c = function(n, t) {
	_h.bu.c.initializeBase(this, [16, n.toString()]);
	this.a.s = _h.bu.c.a();
	t && (this.a.f = t.Id)
};
_h.bu.c.a = function() {
	return Math.floor(_a.b.y() / 1e3)
};
_h.dl = function(n) {
	this.a = n
};
_h.dl.prototype = {
	a: null
};
_h.ch = function() {};
_h.eh = function() {
	_h.eh.initializeBase(this)
};
_h.eh.prototype = {
	p: function() {
		return _h.b.N()
	},
	q: function() {
		return null
	}
};
_h.dx = function(n, t) {
	_h.dx.initializeBase(this, [n, t])
};
_h.dx.prototype = {
	l: function() {
		return _h.b.N()
	},
	o: function() {
		return null
	}
};
_h.bp = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
	_h.bp.initializeBase(this);
	this.f = n;
	this.d = t;
	this.i = i;
	this.h = s;
	this.e = h;
	this.p = c;
	this.k = l;
	this.a = a;
	this.l = v;
	this.m = y;
	this.q = r;
	this.r = u;
	this.o = f;
	this.n = e;
	this.s = o;
	this.j = p;
	this.g = w
};
_h.bp.prototype = {
	f: null,
	d: null,
	i: null,
	h: null,
	e: null,
	p: null,
	k: null,
	a: null,
	l: null,
	m: null,
	o: null,
	n: null,
	q: null,
	r: null,
	s: null,
	b: null,
	c: null,
	j: null,
	g: null
};
_h.e = function() {
	this.b = _h.e.d
};
_h.e.b = function(n, t, i) {
	i.val = n && t ? t.c(n) : null;
	return i.val && i.val.bH.Color !== -1 ? !0 : !1
};
_h.e.prototype = {
	b: null,
	c: function(n, t) {
		var i = _h.e.a;
		n !== -1 && (i = this.b[n][t]);
		return i
	},
	e: function(n, t, i, r) {
		_j.k.a(n, t, this.c(i, r))
	},
	d: function(n, t, i, r) {
		_j.k.a(n, t, this.a(i, r))
	},
	a: function(n, t) {
		return this.b[n.bH.Color][t]
	}
};
_h.r = function() {
	this.o = Function.createDelegate(this, this.t);
	this.p = Function.createDelegate(this, this.v);
	_h.r.initializeBase(this);
	this.w();
	this.h = {}
};
_h.r.a = function() {
	_h.r.d || (_h.r.d = new _h.r);
	return _h.r.d
};
_h.r.c = function() {
	_h.r.f || (_h.r.f = new _h.eD);
	return _h.r.f
};
_h.r.j = function(n) {
	var t = null;
	if(n in _h.r.e) t = _h.r.e[n];
	else {
		t = new _h.r;
		_h.r.e[n] = t
	}
	return t
};
_h.r.i = function() {
	var i = window.maxConnectionsPerServer;
	var n = 0;
	i && (n = i);
	if(n > 0) n = Math.max(1, n - 2);
	else {
		var t = _a.n.a();
		n = t.M ? 4 : t.a() ? 5 : 6;
		n = n - 2
	}
	return n
};
_h.r.h = function() {
	return +new Date
};
_h.r.prototype = {
	a: null,
	c: null,
	b: null,
	h: null,
	n: null,
	l: !1,
	j: !1,
	e: null,
	s: function(n) {
		var t = this.j && !n;
		this.j = n;
		t && this.g(0);
		return n
	},
	w: function() {
		this.a = [];
		this.c = {};
		this.b = {};
		this.e = {}
	},
	u: function() {
		var n = [];
		var u = this.c;
		for(var f in u) {
			var e = {
				key: f,
				value: u[f]
			};
			var i = e.value;
			if(i && i.length > 0) {
				var r = i[0];
				r.f() && (n[n.length] = r)
			}
		}
		for(var t = 0; t < n.length; t++) this.m(n[t], !0, !1);
		this.g(0)
	},
	i: function(n) {
		if(!n) {
			_j.e.c(_h.r.b, "AddToControlsQueue: queueableControl is null");
			return
		}
		if(_j.h.a(n.d())) {
			_j.e.c(_h.r.b, "AddToControlsQueue: queueableControl.TaskKey is empty");
			return
		}
		var i = n.d();
		if(n.e() && i in this.h) {
			n.b(!1);
			return
		}
		var t = this.f(i);
		if(!t) {
			t = [];
			this.c[i] = t;
			this.a[this.a.length] = i
		}
		t[t.length] = n;
		n.a(t.length - 1);
		this.g(0)
	},
	m: function(n, t, i) {
		if(!n) {
			_j.e.c(_h.r.b, "RemoveFromControlsQueue: queueableControl is null");
			return
		}
		var u = n.d();
		var f = n.g();
		if(_j.h.a(u)) {
			_j.e.c(_h.r.b, "RemoveFromControlsQueue: queueableControl.TaskKey is empty");
			return
		}
		n.a(-1);
		var r = this.f(u);
		if(r) {
			if(r.length === 1 || t) {
				delete this.c[u];
				Array.remove(this.a, u);
				for(var o = 0; o < r.length; o++) {
					var h = r[o];
					h && h.a(-1)
				}
				Array.clear(r)
			} else if(f >= 0 && f < r.length) {
				Array.removeAt(r, f);
				for(var e = f; e < r.length; e++) {
					var s = r[e];
					s && s.a(e)
				}
			} else _j.e.c(_h.r.b, "RemoveFromControlsQueue: index={0} of queueableControl with key {1} is out of range. Index has to be between 0 and {2}", f, u, r.length - 1);
			r.length > 0 && !Array.contains(this.a, u) && (this.a[this.a.length] = u)
		}
		this.r(u, i)
	},
	d: function(n, t) {
		if(_j.h.a(n)) {
			_j.e.c(_h.r.b, "OnTaskCompleted: key is empty");
			return
		}
		var r = this.f(n);
		var i = r && r.length > 0 ? r[0] : null;
		t && i && i.e() && _ff.i.a(this.h) < 500 && (this.h[n] = 1);
		if(r) {
			for(var u = 0; u < r.length; u++) {
				i = r[u];
				t && !i.i() && i.b(!1);
				i.a(-1)
			}
			delete this.c[n]
		}
		Array.remove(this.a, n);
		this.r(n, !0)
	},
	x: function() {
		if(!this.l) {
			var n = new _g.S;
			n.NotificationType = "RowNotification";
			n.FolderId = _g.b.a.nameToId("root").Id;
			var t = new _h.K(n);
			t.n(_h.r.b, "OnUserPhoto", this.p, 1);
			this.l = !0
		}
	},
	q: function(n) {
		n in this.e || (this.e[n] = _h.r.h());
		return this.e[n]
	},
	k: function(n) {
		this.e[n] = _h.r.h()
	},
	g: function(n) {
		if(!this.j) {
			var u = _ff.i.a(this.b);
			if(!(u >= _h.r.g) && !(this.a.length <= n)) {
				var i = this.a[n];
				if(!(i in this.b)) {
					var r = this.f(i);
					if(r && r.length > 0) {
						var t = r[0];
						if(t.c() > 0 && t.c() < _h.r.g && u >= t.c()) {
							this.g(n + 1);
							return
						}
						Array.removeAt(this.a, n);
						this.b[i] = +new Date;
						this.n || (this.n = _j.m.a().e(_h.r.b, "ControlTasksQueue", this.o, 3e4));
						t.b(!0)
					}
				}
			}
		}
	},
	r: function(n, t) {
		if(n in this.b) {
			delete this.b[n];
			t && this.g(0)
		}
	},
	f: function(n) {
		var t = null;
		n in this.c && (t = this.c[n]);
		return t
	},
	t: function() {
		if(_ff.i.a(this.b)) {
			var f = +new Date;
			var u = this.b;
			for(var i in u) {
				var t = {
					key: i,
					value: u[i]
				};
				var e = t.value;
				if(f - e >= 3e4) {
					var n = this.f(t.key);
					var r = n && n.length > 0 ? n[0] : null;
					var o = r ? r.h() : "";
					this.d(t.key, !1)
				}
			}
		}
	},
	v: function(n) {
		if(n.EventType === "RowAdded") {
			var i = n;
			var r = i;
			var t = r.Item;
			if(t && (t.ItemClass === "IPM.UserPhoto" || t.ItemClass === "IPM.UserPhoto.DeletedNotification")) {
				this.k(_g.a.a().c().bH.UserEmailAddress);
				this.by("SelfPictureCanary")
			}
		}
	}
};
_h.bF = function(n) {
	this.c = n
};
_h.bF.prototype = {
	c: null,
	e: null,
	h: 0,
	f: null,
	i: 0,
	g: 0,
	a: function() {
		return this.c.name
	},
	b: function() {
		return this.c.size
	},
	d: function() {
		return this.c.type
	}
};
_h.co = function(n) {
	this.c = n
};
_h.co.prototype = {
	c: null,
	a: function() {
		return this.c.length
	},
	b: function(n) {
		return new _h.bF(this.c.item(n))
	}
};
_h.cg = function(n) {
	this.c = n
};
_h.cg.prototype = {
	c: null,
	a: function() {
		return this.c.length
	},
	b: function(n) {
		return this.c[n]
	}
};
_h.cp = function(n) {
	this.e = n
};
_h.cp.prototype = {
	e: null,
	c: function() {
		return this.e
	},
	b: function(n) {
		return n.ItemId.Id
	},
	d: function(n) {
		return n.InstanceKey
	}
};
_h.G = function() {};
_h.G.b = function(n) {
	for(var i = new Array(n.length), t = 0; t < n.length; t++) i[t] = n[t].bH.ItemId;
	return i
};
_h.G.a = function(n, t) {
	for(var r = new Array(0), i = 0; i < n.length; i++) _g.f.isInstanceOfType(n[i]) ? r.push(n[i].bH.ItemId) : _g.p.isInstanceOfType(n[i]) ? Array.addRange(r, t ? n[i].a().e() : n[i].c().e()) : _g.fe.isInstanceOfType(n[i]) && n[i].a().n(function(n) {
		r.push(n.bH.ItemId)
	});
	return r
};
_h.G.c = function(n) {
	return n ? n.Id + ":" + n.ChangeKey : "null"
};
_h.eD = function() {
	this.a = new Sys.EventHandlerList
};
_h.eD.prototype = {
	a: null,
	d: function(n, t, i) {
		this.a.addHandler(this.b(n, t), i)
	},
	e: function(n, t, i) {
		this.a.removeHandler(this.b(n, t), i)
	},
	c: function(n, t) {
		var i = this.a.getHandler(this.b(n, t));
		i(this, new Sys.EventArgs)
	},
	b: function(n, t) {
		if(!n || !n.a() || _j.h.a(n.a().EmailAddress) || !t) throw Error.argumentNull("Persona must not be null, should carry an email address and event name should always be present");
		return String.format("{0}:{1}", n.a().EmailAddress, t)
	}
};
_h.di = function(n, t, i, r) {
	_h.di.initializeBase(this);
	this.i = n;
	this.m = t;
	this.j = i;
	this.j && (this.l = !0);
	this.k = r;
	this.f = !0;
	this.g = 50
};
_h.di.prototype = {
	i: null,
	j: !1,
	m: null,
	k: !1,
	f: !1,
	l: !1,
	g: 0,
	h: null,
	e: 0,
	p: function() {
		return this.e === 4 || this.e === 3
	},
	s: function(n) {
		if(this.e === 1) {
			this.e = 3;
			return n
		}
		if(this.e === 2) {
			this.e = 4;
			return n
		}
		return n
	},
	a: function() {
		return this.e === 7
	},
	d: function() {
		return this.e === 5
	},
	c: function() {
		return this.e === 5
	},
	t: function() {
		if(this.e === 2) {
			this.e = 5;
			return
		}
	},
	q: function() {
		this.e = this.g !== 250 ? 1 : 6
	},
	n: function() {
		if(this.e === 6) {
			this.e = 7;
			return
		}
		if(this.e === 1) {
			this.e = 2;
			return
		}
		if(this.e === 3) {
			this.e = 4;
			return
		}!this.f && this.e === 7
	},
	b: function() {
		return this.j ? this.e === 1 || this.e === 6 : this.e === 1 || this.e === 2 || this.e === 6
	},
	u: function(n) {
		var t = this;
		_j.m.a().a(_a.a.B, "StartSearchCompleteNotificationTimer", function() {
			if(!t.p()) {
				t.t();
				n()
			}
		}, 2e4)
	},
	o: function() {
		this.g = 250;
		this.l = !0
	},
	r: function() {
		return this.j ? this.e === 2 : this.e === 4
	}
};
_h.cj = function() {
	_h.cj.initializeBase(this, [_h.cj.a])
};
_h.cj.a = function(n, t) {
	_a.c.b(n, "object1");
	_a.c.b(t, "object2");
	var r = n;
	var i = t;
	return r.b().a(i.b())
};
_h.cj.prototype = {
	C: function(n) {
		this.g();
		for(var t = 0; t < n.length; t++) {
			var i = new _h.w;
			i.fa(n[t]);
			this.a(i)
		}
	}
};
_h.w = function() {
	_h.w.initializeBase(this)
};
_h.w.prototype = {
	j: function() {
		return this.eK(_h.w.j)
	},
	t: function(n) {
		this.eI(_h.w.j, n);
		return n
	},
	g: function() {
		return this.eK(_h.w.c)
	},
	n: function(n) {
		this.eI(_h.w.c, n);
		return n
	},
	h: function() {
		return this.eK(_h.w.d)
	},
	o: function(n) {
		this.eI(_h.w.d, n);
		return n
	},
	b: function() {
		return this.eK(_h.w.h)
	},
	k: function(n) {
		this.eI(_h.w.h, n);
		return n
	},
	a: function() {
		return this.eK(_h.w.i)
	},
	s: function(n) {
		this.eI(_h.w.i, n);
		return n
	},
	f: function() {
		return this.eK(_h.w.a)
	},
	l: function(n) {
		this.eI(_h.w.a, n);
		return n
	},
	c: function() {
		return this.eK(_h.w.b)
	},
	m: function(n) {
		this.eI(_h.w.b, n);
		return n
	},
	d: function() {
		return this.eK(_h.w.e)
	},
	p: function(n) {
		this.eI(_h.w.e, n);
		return n
	},
	e: function() {
		return this.eK(_h.w.f)
	},
	q: function(n) {
		this.eI(_h.w.f, n);
		return n
	},
	i: function() {
		return this.eK(_h.w.g)
	},
	r: function(n) {
		this.eI(_h.w.g, n);
		return n
	},
	C: function(n) {
		return !n || !_h.w.isInstanceOfType(n) ? !1 : this === n || _ff.e.b(this.c(), n.c())
	}
};
_h.eP = function(n, t) {
	this.l = Function.createDelegate(this, this.p);
	this.n = -1;
	_a.c.b(n, "actionSubmitter");
	_a.c.b(t, "action");
	this.m = n;
	this.j = t;
	this.k = String.format("{0}_{1}", t.w(), t.x())
};
_h.eP.prototype = {
	m: null,
	j: null,
	k: null,
	o: !1,
	d: function() {
		return this.k
	},
	g: function() {
		return this.n
	},
	a: function(n) {
		this.n = n;
		return n
	},
	i: function() {
		return this.o
	},
	f: function() {
		return !1
	},
	e: function() {
		return !1
	},
	c: function() {
		return 1
	},
	h: function() {
		return _a.ew.toString(this.j.z())
	},
	b: function(n) {
		n && this.j.a(this.l);
		this.m.c(this.j);
		this.o = !0
	},
	p: function(n) {
		_h.r.a().d(this.k, !0);
		this.j.m(this.l)
	}
};
_h.dn = function(n) {
	_a.c.b(n, "actionSubmitter");
	this.b = n
};
_h.dn.prototype = {
	b: null,
	a: function(n) {
		_h.r.a().i(new _h.eP(this, n))
	},
	c: function(n) {
		this.b.a(n)
	}
};
_h.dh = function(n, t) {
	this.a = n;
	this.c(t)
};
_h.dh.prototype = {
	a: null,
	b: null,
	c: function(n) {
		this.d(n);
		this.b = n;
		return n
	},
	d: function(n) {
		this.a.c.isInstanceOfType(n) || Type.isEnum(this.a.c) && Number.isInstanceOfType(n) || Error.argumentType("value", Object.getType(n), this.a.c, "Property value is not the right type")
	}
};
_h.eu = function() {
	_h.eu.initializeBase(this, [1, "Core.Models.Sync.MailSyncReachedLimit"])
};
_h.eQ = function() {
	_h.eQ.initializeBase(this, [1, "Core.Models.General.UserRefresh"])
};
_h.cQ = function(n) {
	this.a = n
};
_h.cQ.prototype = {
	a: 0
};
_h.cm = function(n, t) {
	this.a = n;
	this.b = t
};
_h.cm.prototype = {
	a: null,
	b: null
};
_h.bm = function(n, t) {
	_a.c.e(n, 6, 14, "syncModuleType");
	this.a = n;
	this.b = t
};
_h.bm.prototype = {
	a: 0,
	b: !1
};
_h.cT = function() {};
_h.cq = function(n) {
	this.a = n
};
_h.cq.prototype = {
	a: !1
};
_h.by = function() {};
_h.bP = function(n) {
	this.a = n
};
_h.bP.prototype = {
	a: null
};
_h.df = function(n, t) {
	this.b = n;
	this.a = t
};
_h.df.prototype = {
	b: null,
	a: null
};
_h.bS = function() {};
_h.bU = function(n) {
	this.a = n
};
_h.bU.prototype = {
	a: 0
};
_h.bA = function(n) {
	this.a = n
};
_h.bA.prototype = {
	a: null
};
_h.bv = function() {};
_h.bk = function(n) {
	this.a = n
};
_h.bk.prototype = {
	a: null
};
_h.J = function() {};
_h.J.h = function(n, t) {
	var i = new _g.be;
	i.c(new _g.bV);
	i.a().e(_h.J.a);
	i.a().g("String");
	i.a().f("cecp-" + n);
	i.b(t);
	return i
};
_h.J.g = function() {
	var n = new _g.be;
	n.c(new _g.bV);
	n.a().e(_h.J.a);
	n.a().g("String");
	n.a().f("cecp-propertyNames");
	return n
};
_h.J.d = function(n, t) {
	var u = t.split(";");
	if(u.length) {
		var i = _h.J.j(n);
		if(!i) {
			i = _h.J.g();
			n.a(i)
		}
		for(var r = 0; r < u.length; r++) {
			var f = u[r];
			_j.h.a(f) || _h.J.f(i, f)
		}
	}
};
_h.J.b = function(n) {
	return !!n && !!n.a() && n.a().a() === _h.J.a && !!n.a().bH.PropertyName && n.a().bH.PropertyName.startsWith("cecp-")
};
_h.J.c = function(n, t) {
	t.val = null;
	if(_h.J.b(n)) {
		t.val = _h.J.i(n);
		return !0
	}
	return !1
};
_h.J.k = function(n) {
	return _h.J.b(n) && n.a().bH.PropertyName === "cecp-propertyNames"
};
_h.J.e = function(n, t) {
	var i = "cecp-" + t;
	return _h.J.b(n) && n.a().bH.PropertyName === i
};
_h.J.i = function(n) {
	var t = new _g.T;
	t.ExtendedFieldURI = new _g.O;
	t.ExtendedFieldURI.DistinguishedPropertySetId = n.a().a();
	t.ExtendedFieldURI.PropertyType = n.a().b();
	t.ExtendedFieldURI.PropertyName = n.a().bH.PropertyName;
	t.Value = n.bH.Value;
	return t
};
_h.J.f = function(n, t) {
	t.endsWith(";") || (t += ";");
	if(_j.h.a(n.bH.Value)) n.b(t);
	else {
		if(-1 !== n.bH.Value.indexOf(t)) return;
		n.bH.Value.length + t.length < 16e3 && n.b(n.bH.Value + t);
		return
	}
};
_h.J.j = function(n) {
	for(var t = 0; t < n.b(); t++) {
		var i = n.c(t);
		if(_h.J.k(i)) return i
	}
	return null
};
_h.l = function() {};
_h.l.i = function() {
	_h.l.e || (_h.l.e = new _h.cr(_g.j.a("msgfolderroot")));
	return _h.l.e
};
_h.l.h = function() {
	_h.l.d || (_h.l.d = new _h.cr(_g.j.a("archivemsgfolderroot")));
	return _h.l.d
};
_h.l.j = function(n) {
	var t = _h.l.g(n, _h.l.i());
	!t && _g.a.a().c().c && (t = _h.l.g(n, _h.l.h()));
	return t
};
_h.l.b = function(n) {
	var t = _h.l.f(_h.l.i());
	return !!t && !!t.f(n)
};
_h.l.a = function(n) {
	var t = !1;
	if(_g.a.a().c() && _g.a.a().c().c && n)
		if(_g.b.a.doesIdEqualName(n, "archivemsgfolderroot")) t = !0;
		else {
			var i = _h.l.f(_h.l.h());
			if(i) {
				var r = i.f(n);
				t = !!r
			}
		}
	return t
};
_h.l.c = function(n) {
	if(!n) return !0;
	var t = _g.b.a.idToName(n);
	if(t === "inbox") return !1;
	else if(!_h.l.b(n)) return !0;
	switch(t) {
		case "drafts":
		case "deleteditems":
		case "sentitems":
		case "junkemail":
		case "clutter":
			return !0;
		default:
			return !1
	}
};
_h.l.m = function(n) {
	return _h.l.b(n) && !_g.b.a.doesIdEqualName(n, "inbox") || _g.j.b(n)
};
_h.l.g = function(n, t) {
	for(var u = null, f = _h.l.f(t), e = f.bx.x.length, i = 0; i < e; i++) {
		var r = f.bx.x[i];
		if(n.Id === r.bH.FolderId.Id) {
			u = r;
			break
		}
	}
	return u
};
_h.l.f = function(n) {
	return _h.c.b(n, _h.g.a(), function(n) {
		return new _h.a(n)
	})
};
_h.l.k = function(n) {
	if(n.__type !== _g.r._dataContractName) return !1;
	switch(n.Id) {
		case "archivedeleteditems":
		case "archiveinbox":
		case "archivemsgfolderroot":
		case "archiverecoverableitemsdeletions":
		case "archiverecoverableitemspurges":
		case "archiverecoverableitemsroot":
		case "archiverecoverableitemsversions":
		case "archiverecoverableitemsdiscoveryholds":
		case "archiveroot":
			return !0;
		default:
			return !1
	}
};
_h.l.l = function(n, t) {
	return n.__type === _g.r._dataContractName && n.Mailbox && t && n.Mailbox.EmailAddress !== t.bH.UserEmailAddress ? !0 : !1
};
_h.bt = function() {
	_h.bt.initializeBase(this)
};
_h.bt.a = function(n, t) {
	var i = null;
	n && (i = n.g);
	(t.__type === _g.bD._dataContractName || t.__type === _g.dL._dataContractName) && (n = _a.m.e(_g.j, n, t));
	n.H(i);
	return n
};
_h.bt.prototype = {
	i: function(n, t) {
		if(n)
			for(var r, i = 0; i < n.length; i++)
				if(n[i]) {
					var u = i < this.x.length;
					r = u ? this.x[i] : null;
					r = _h.bt.a(r, n[i]);
					r && !u && this.a(r)
				}
	}
};
_h.i = function(n, t) {
	this.E = Function.createDelegate(this, this.W);
	this.C = -1;
	this.D = -1;
	_h.i.initializeBase(this);
	this.k = {};
	this.x("<div></div>");
	this.d(0);
	this.g = _a.d.a();
	this.o(-1);
	this.R(!1);
	var f = this;
	var r = function(n, t) {
		f.eH(_h.i.u)
	};
	this.apcl(_h.i.n, r);
	this.apcl(_h.i.o, r);
	if(n) this.apcl("IsRemoteProxyReadyForServerMessages", this.E);
	else {
		var i = this;
		this.apcl(_h.i.m, function(n, t) {
			i.n(_a.d.a());
			i.x(i.l() + i.eK(_h.i.v))
		});
		var u = this;
		this.apcl(_h.i.l, function(n, t) {
			u.ba(u.eK(_h.i.f))
		})
	}
	t && this.fa(t)
};
_h.i.$$cctor = function() {
	_h.i.a.b(new _a.bC(_h.j));
	_a.m.d(_h.i, _g.ek, function(n) {
		return new _h.i(!1, n)
	})
};
_h.i.prototype = {
	k: null,
	g: null,
	h: null,
	i: null,
	j: null,
	B: null,
	r: null,
	w: null,
	z: null,
	v: !1,
	f: "",
	u: !1,
	c: function() {
		return this.eK(_h.i.k)
	},
	N: function(n) {
		this.eI(_h.i.k, n);
		return n
	},
	p: function() {
		return this.I()
	},
	I: function() {
		return this.c().Id
	},
	O: function(n) {
		this.h = n;
		this.eH(_h.i.n);
		if(!this.h) return n;
		this.y(this.h.bH.ConversationTopic);
		this.Q(this.h.bH.Preview);
		return n
	},
	P: function(n) {
		this.i = n;
		this.eH(_h.i.o);
		if(!this.i) return n;
		this.y(this.i.bH.Subject);
		this.Q(this.i.bH.Preview);
		return n
	},
	A: function(n) {
		var t = new _a.dk(this, _h.i.m, null, n);
		this.dB(1, t)
	},
	bg: function(n) {
		var t = new _a.dk(this, _h.i.l, null, n);
		this.dB(1, t)
	},
	S: function() {
		return this.eK(_h.i.f)
	},
	ba: function(n) {
		this.eI(_h.i.f, n);
		return n
	},
	H: function() {
		return this.eK(_h.i.d)
	},
	d: function(n) {
		var t = this;
		_h.c.a(this, _h.i.d.a, this.H(), n, function(i, r) {
			t.eI(_h.i.d, n)
		});
		return n
	},
	a: function() {
		var n = this.eK(_h.i.a);
		if(!n) {
			n = new _j.l;
			_h.c.I(this, n, _h.i.a.a);
			_h.c.t(this, [new _h.dh(_h.i.a, n)])
		}
		return n
	},
	m: function() {
		var n = this.eK(_h.i.c);
		return n || ""
	},
	y: function(n) {
		if(n) {
			var t = this;
			_h.c.a(this, _h.i.c.a, this.m(), n, function(n, i) {
				t.eI(_h.i.c, i)
			})
		}
		return n
	},
	T: function() {
		var n = this.eK(_h.i.h);
		return n ? n : ""
	},
	Q: function(n) {
		if(n) {
			var t = this;
			_h.c.a(this, _h.i.h.a, this.T(), n, function(n, i) {
				t.eI(_h.i.h, i)
			})
		}
		return n
	},
	l: function() {
		return this.eK(_h.i.j)
	},
	x: function(n) {
		this.eI(_h.i.j, n);
		return n
	},
	t: function() {
		return this.eK(_h.i.b)
	},
	e: function(n) {
		if(this.s()) return n;
		_j.h.b(n) && (n = _h.i.b.d);
		var t = this;
		_h.c.a(this, _h.i.b.a, this.t(), n, function(n, i) {
			t.eI(_h.i.b, i)
		});
		return n
	},
	n: function(n) {
		this.g = n;
		this.eH("LastUpdateTime");
		return n
	},
	b: function() {
		return this.eK(_h.i.g)
	},
	o: function(n) {
		var t = this;
		_h.c.a(this, _h.i.g.a, this.b(), n, function(n, i) {
			t.eI(_h.i.g, i)
		});
		return n
	},
	s: function() {
		return this.eK(_h.i.e)
	},
	R: function(n) {
		var t = this;
		_h.c.a(this, _h.i.e.a, this.s(), n, function(n, i) {
			t.eI(_h.i.e, i)
		});
		return n
	},
	Z: function(n) {
		this.v = n;
		this.eH("IsRemoteProxyReadyForServerMessages");
		return n
	},
	bf: function(n) {
		n = _ff.g.a(n);
		this.e(_j.h.c(_bms.E.BG, n))
	},
	ea: function(n, t) {
		var i = new _a.f(n, Object, _h.i);
		t !== this.eK(i) && this.eI(i, t)
	},
	toString: function() {
		var n = this.b().toString();
		if(this.a().x.length > 0) {
			n = n + " (";
			var t = this;
			this.a().o(function(t) {
				var i = t;
				n = n + ", " + i.c()
			});
			n = n + ")"
		}
		return n
	},
	V: function() {
		var t = [];
		var n = this;
		this.a().o(function(i) {
			var u = i;
			var r = n.U(u);
			if(!r) {
				var f = String.format(_bms.E.X, u.c());
				n.q(f);
				return
			}
			Array.add(t, r)
		});
		return t
	},
	bb: function(n, t) {
		this.k[n.i()] = t
	},
	L: function(n, t) {
		var u = _a.d.a();
		var i = u.b(18);
		var f = String.format(_bms.E.L, n, i, t);
		n = _ff.g.a(n);
		t = _ff.g.a(t);
		var r = String.format(_h.i.r, n, i, t);
		this.n(_a.d.a());
		this.u = !0;
		if(this.v) {
			this.A(r);
			this.bg(f)
		} else this.f += r
	},
	bc: function(n) {
		var t = _a.d.a();
		var r = t.b(18);
		n = _ff.g.a(n);
		var i = this.l() + String.format(_h.i.t, _bms.E.c, r, n);
		this.x(i);
		this.n(t)
	},
	X: function(n, t, i) {
		var r = this.K(n);
		var f = this;
		var u = this.a().l(function(n) {
			var t = n;
			return t.i() === r
		});
		if(u === this.a().x.length) {
			t || (t = _h.j.i(i, r));
			this.a().a(t);
			this.M(i, "joined", _bms.E.m)
		}
	},
	Y: function(n, t) {
		if(this.a().x.length !== 1) {
			var r = this.K(n);
			var u = this;
			var i = this.a().l(function(n) {
				var t = n;
				return t.i() === r
			});
			if(i !== this.a().x.length) {
				this.a().n(i);
				this.M(t, "left", _bms.E.f)
			}
		}
	},
	bd: function(n) {
		if(!n) {
			this.e(_bms.E.B);
			return
		}
		this.t() === _bms.E.B && this.e(null)
	},
	be: function() {
		this.e(_bms.E.q);
		this.R(!0)
	},
	q: function(n) {
		this.G(_h.i.q, n)
	},
	U: function(n) {
		var t = this.k[n.i()];
		t || (t = n.i());
		return t
	},
	M: function(n, t, i) {
		n = _ff.g.a(n);
		var r = String.format(i, n);
		this.G(_h.i.s, r)
	},
	G: function(n, t) {
		var i = String.format(n, t);
		this.A(i);
		this.n(_a.d.a())
	},
	W: function(n, t) {
		for(var r = new Array(_h.i.i.length), i = 0; i < r.length; i++) r[i] = new _h.dh(_h.i.i[i], this.eK(_h.i.i[i]));
		_h.c.t(this, r);
		_j.h.a(this.f) || this.A(this.f);
		this.f = ""
	},
	K: function(n) {
		_a.c.c(n, "imAddress");
		var t = n.toLowerCase();
		t.startsWith(_h.i.p) || (t = _h.i.p + t);
		return t
	}
};
_h.Z = function() {
	this.a = {};
	this.b = new Date
};
_h.Z.a = function() {
	_h.Z.b || (_h.Z.b = new _h.Z);
	return _h.Z.b
};
_h.Z.e = function(n, t) {
	var r = n;
	var i = t;
	return r.a.getTime() - i.a.getTime()
};
_h.Z.c = function(n) {
	var r = 0;
	if(n) {
		var i = n;
		for(var t in i) {
			var f = {
				key: t,
				value: i[t]
			};
			var u = f.value;
			r += _ff.i.a(u)
		}
	}
	return r
};
_h.Z.prototype = {
	b: null,
	c: function(n, t) {
		this.g();
		var i = null;
		if(t in this.a) i = this.a[t];
		else {
			i = {};
			this.a[t] = i
		}
		i[n.recipientAddress] = new _h.Z.d(n, t)
	},
	e: function(n, t) {
		if(!(t in this.a)) return !1;
		var i = this.a[t];
		return n in i && !i[n].d()
	},
	f: function(n, t) {
		if(this.e(n, t)) {
			var i = this.a[t];
			return i[n].b
		}
		return null
	},
	d: function() {
		var f = new Date;
		var s = f.getTime() - this.b.getTime();
		if(!(s < 12e5)) {
			var e = this.a;
			for(var o in e) {
				var u = {
					key: o,
					value: e[o]
				};
				var n = u.value;
				var i = n;
				for(var r in i) {
					var t = {
						key: r,
						value: i[r]
					};
					t.value.d() && delete n[t.key]
				}
				_ff.i.a(n) || delete this.a[u.key]
			}
			this.b = f
		}
	},
	g: function() {
		_h.Z.c(this.a) > 300 && this.d();
		if(_h.Z.c(this.a) > 300) {
			var t = [];
			var o = this.a;
			for(var e in o) {
				var l = {
					key: e,
					value: o[e]
				};
				var h = l.value;
				for(var s in h) {
					var c = {
						key: s,
						value: h[s]
					};
					Array.add(t, c.value)
				}
			}
			t.sort(_h.Z.e);
			for(var n = 0; n < 50; n++) {
				var r = t[n];
				var a = this.a[r.c];
				delete a[r.b.recipientAddress]
			}
			var f = this.a;
			for(var u in f) {
				var i = {
					key: u,
					value: f[u]
				};
				_ff.i.a(i.value) || delete this.a[i.key]
			}
		}
	}
};
_h.Z.d = function(n, t) {
	this.a = new Date;
	this.b = n;
	this.c = t
};
_h.Z.d.prototype = {
	a: null,
	b: null,
	c: null,
	d: function() {
		var t = new Date;
		var n = t.getTime() - this.a.getTime();
		return n >= 72e5
	}
};
_h.bi = function(n) {
	this.a = n
};
_h.bi.a = function(n, t, i) {
	return new _h.bi(_h.bi.e(n, t, i))
};
_h.bi.b = function(n, t) {
	return new _h.bi(_h.bi.d(n, t))
};
_h.bi.e = function(n, t, i) {
	var r = new _j.q;
	var u = _h.V.c(n.bH.ItemClass, n.iY());
	u !== -1 && r.c(u);
	i && n.iW() && r.c(0);
	(n.bg() === "Low" || n.bg() === "High") && r.c(1);
	n.bH.HasAttachments && r.c(2);
	n.hl() && r.c(34);
	_g.i.isInstanceOfType(n) && n.cu() > 0 && r.c(33);
	t && r.c(35);
	_g.i.isInstanceOfType(n) && n.cH() !== "None" ? r.c(36) : u === 13 && r.c(37);
	return r
};
_h.bi.d = function(n, t) {
	var i = new _j.q;
	var r = _h.bi.c(n);
	r !== -1 && i.c(r);
	!_j.z.a(n.bA()) && n.bA() && i.c(32);
	t && n.bT() && i.c(0);
	(n.bg() === "Low" || n.bg() === "High") && i.c(1);
	n.bH.HasAttachments && i.c(2);
	n.bb() && i.c(34);
	n.bc() > 0 && i.c(33);
	n.bH.Charm !== "None" ? i.c(36) : r === 13 && i.c(37);
	return i
};
_h.bi.c = function(n) {
	var i = n.f();
	var t = n.bV();
	var f = n.bH.HasIrm;
	t === "MailReplied" && f ? t = "MailIrmReplied" : t === "MailForwarded" && f ? t = "MailIrmForwarded" : f && (t = "MailIrm");
	var u = !0;
	if(i) {
		if(i.b() === 1) return _h.V.c(i.a(0), t);
		else
			for(var r = 0; r < i.b(); r++)
				if(!_h.bi.f(i.a(r))) {
					u = !1;
					break
				}
	} else u = !1;
	if(u) return 13;
	else switch(t) {
		case "MailReplied":
			return 3;
		case "MailIrmReplied":
			return 6;
		case "MailForwarded":
			return 4;
		case "MailIrmForwarded":
			return 7;
		case "MailIrm":
			return 5
	}
	return -1
};
_h.bi.f = function(n) {
	return n.toLowerCase().indexOf("ipm.schedule.meeting") !== -1
};
_h.bi.prototype = {
	a: null,
	c: function(n) {
		for(var i = Math.min(this.a.d.length, n), r = new Array(i), t = 0; t < i; t++) r[t] = this.a.d[t];
		return r
	},
	b: function() {
		return this.a.d.length > 0 && this.a.d[0] && this.a.d[0] !== 1 && this.a.d[0] !== 2 ? this.a.d[0] : -1
	},
	d: function() {
		for(var n = 0; n < this.a.d.length; n++)
			if(this.a.d[n] === 5 || this.a.d[n] === 7 || this.a.d[n] === 6 || this.a.d[n] === 11) return this.a.d[n];
		return -1
	}
};
_h.V = function() {};
_h.V.c = function(n, t) {
	_j.u.a(t) && (t = "Default");
	if(_j.h.a(n)) return -1;
	n = n.toLowerCase();
	var i = _h.V.d(n, t);
	i === -1 && (i = _h.V.d(n, "Default"));
	i === -1 && (i = _h.V.e(n, t));
	i === -1 && (i = _h.V.e(n, "Default"));
	return i
};
_h.V.d = function(n, t) {
	return _h.V.b(_h.V.f, n, t)
};
_h.V.e = function(n, t) {
	var i = _h.V.b(_h.V.a, n, t);
	if(i === -1) {
		var f = _h.V.a;
		for(var e in f) {
			var o = {
				key: e,
				value: f[e]
			};
			var r = o.key;
			if(n.startsWith(r)) {
				var u = _h.V.a[r];
				t in u && (i = u[t]);
				break
			}
		}
	}
	return i
};
_h.V.b = function(n, t, i) {
	var r = null;
	if(t in n) {
		r = n[t];
		if(i in r) return r[i]
	}
	return -1
};
_h.ep = function(n, t, i) {
	_a.c.a(n, "host cannot be null");
	_a.c.a(t, "userIdentifier cannot be null");
	this.d = n;
	this.e = t;
	this.f = i
};
_h.ep.prototype = {
	d: null,
	e: null,
	f: !1,
	a: function() {
		return this.d
	},
	b: function(n) {
		return this.f ? new _h.eq(n, this.d, this.e) : new _h.en(n, this.d, this.e)
	},
	c: function(n) {
		return this.f ? new _h.er(n, this.d, this.e) : new _h.eo(n, this.d, this.e)
	},
	toString: function() {
		return this.d
	}
};
_h.K = function(n, t, i, r) {
	if(!n) throw Error.argumentNull("parameters");
	if(_j.u.a(n.NotificationType)) throw Error.argumentNull("NotificationType should be set on the parameters list");
	this.l = n;
	this.B = t || _a.g.a;
	this.y = i || _h.bJ.b(this.B);
	this.u = r || _h.ci.a;
	this.m = this.C()
};
_h.K.prototype = {
	y: null,
	m: null,
	u: null,
	o: !1,
	l: null,
	x: "",
	B: null,
	q: null,
	t: null,
	j: function() {
		return this.o
	},
	i: function() {
		return this.x
	},
	J: function(n) {
		this.q || (this.q = new Sys.EventHandlerList);
		this.q.addHandler("Subscribed", n)
	},
	O: function(n) {
		this.q.removeHandler("Subscribed", n)
	},
	a: function() {
		return this.m
	},
	d: function() {
		return this.l.NotificationType
	},
	b: function() {
		return this.l.FolderId
	},
	c: function() {
		return this.u
	},
	e: function() {
		if(!this.t) {
			this.t = new _g.gA;
			this.t.SubscriptionId = this.m;
			this.t.Parameters = this.l
		}
		return this.t
	},
	k: function() {
		return !this.l || this.l.NotificationType !== "SearchNotification" && this.l.NotificationType !== "InstantSearchNotification" && this.l.NotificationType !== "UploadFileToCloudNotificationPayload"
	},
	n: function(n, t, i, r) {
		if(!i) throw Error.argumentNull("callback");
		_a.g.e().q(this.m) ? this.o = !0 : this.P();
		_a.g.e().a(this.m, n, t, i, r);
		return this.m
	},
	v: function(n) {
		_a.g.e().q(this.m) && (n ? _a.g.e().b(this.m, n) : _a.g.e().t(this.m));
		if(!_a.g.e().p(this.m) && this.k()) {
			_a.g.b || this.y.a(this);
			this.o = !1
		}
	},
	p: function() {
		this.v(null)
	},
	f: function() {
		this.K()
	},
	K: function() {
		this.k() ? _a.g.b ? this.h(null, !1) : this.y.b(this) : this.o = !0
	},
	g: function(n, t) {
		this.L(n, t, !0)
	},
	h: function(n, t) {
		this.o = !0;
		this.x = "";
		_a.g.e().s(this.m);
		if(this.q) {
			var i = this.q.getHandler("Subscribed");
			i && i(this, new Sys.EventArgs)
		}
	},
	P: function() {
		this.K();
		_a.g.e().r(this)
	},
	L: function(n, t, i) {
		this.o = !1;
		this.x = t;
		i && _a.g.e().n(this.m)
	},
	C: function() {
		var n = "";
		n += this.l.NotificationType;
		this.l.FolderId && (n += this.l.FolderId);
		if(!_j.z.a(this.l.IsConversation)) {
			n += "_" + this.l.IsConversation;
			this.l.IsConversation && this.l.ConversationShapeName && (n += "_" + this.l.ConversationShapeName)
		}
		this.l.MailboxId && (n += "_" + this.l.MailboxId);
		this.l.CallId && (n += "_" + this.l.CallId);
		if(this.l.SortBy && this.l.SortBy.length > 0)
			for(var t = 0; t < this.l.SortBy.length; t++) n += "_" + this.l.SortBy[t].Path.FieldURI + "_" + this.l.SortBy[t].Order;
		_j.u.a(this.l.Filter) || (n += "_" + this.l.Filter);
		this.l.FromFilter && (n += "_" + this.l.FromFilter);
		_j.u.a(this.l.FocusedViewFilter) || this.l.FocusedViewFilter === -1 || (n += "_" + this.l.FocusedViewFilter);
		_j.u.a(this.l.CategoryFilter) || (n += "_" + _j.h.e(this.l.CategoryFilter));
		_h.ci.isInstanceOfType(this.u) || this.l.NotificationType === "SearchNotification" || (n += "_" + this.u.a());
		_j.h.a(this.l.subscriptionIdSuffix) || (n += "_" + this.l.subscriptionIdSuffix);
		return n
	}
};
_h.bJ = function(n) {
	this.l = Function.createDelegate(this, this.x);
	this.k = Function.createDelegate(this, this.w);
	this.j = Function.createDelegate(this, this.u);
	this.f = new _j.q;
	this.d = _a.G.a();
	this.c = _a.G.a();
	_a.c.a(n, "actionSubmitter");
	this.h = n
};
_h.bJ.b = function(n) {
	_h.bJ.a || (_h.bJ.a = new _h.bJ(n));
	return _h.bJ.a
};
_h.bJ.prototype = {
	p: 100,
	h: null,
	i: null,
	g: !1,
	e: null,
	b: function(n) {
		this.f.g(n.c()) || this.f.c(n.c());
		this.d.a(n.a(), n);
		this.n()
	},
	a: function(n) {
		if(this.d.b[n.a()]) this.d.e(n.a());
		else {
			var t = n.e();
			var i = this.s(t, n.c());
			this.o(i, t)
		}
	},
	t: function() {
		_j.m.a().a(_a.a.E, "NotificationSubscriptionSubmissionProxy.Submit", this.j, this.p)
	},
	u: function() {
		if(this.d.f() <= 0) {
			this.g = !1;
			return
		}
		var n = this.v();
		var t = this.r(n, this.e);
		t.b(this.k);
		t.c(this.l);
		this.o(t, n && n.length > 0 ? n[0] : null)
	},
	r: function(n, t) {
		return t.b(n)
	},
	s: function(n, t) {
		return t.c(n)
	},
	n: function() {
		if(!this.g) {
			this.g = !0;
			this.t()
		}
	},
	w: function(n) {
		var t = this;
		this.c.d(function(t, i) {
			i.g(n, "unknown")
		});
		this.m()
	},
	x: function(n) {
		var i = n.h;
		if(this.c.f() !== i.length) {
			for(var e = _a.G.a(), o = "", s = i, a = s.length, r = 0; r < a; ++r) {
				var c = s[r];
				e.a(c.SubscriptionId, !0)
			}
			var v = this;
			this.c.d(function(n, t) {
				e.c(n) || (o += n + "|")
			});
			var l = String.format("Missing response for subscriptions, Expected: {0}, Actual: {1}, Missing {2}", this.c.f(), i.length, o);
			_a.c.d(this.c.f() === i.length, l)
		}
		for(var f = i, h = f.length, u = 0; u < h; ++u) {
			var t = f[u];
			t.SuccessfullyCreated ? this.c.b[t.SubscriptionId].h(n, t.SubscriptionExists) : this.c.b[t.SubscriptionId].g(n, t.ErrorInfo)
		}
		this.m()
	},
	m: function() {
		this.g = !1;
		this.c = _a.G.a();
		this.e = null;
		this.n()
	},
	v: function() {
		for(var n = new Array(0); n.length <= 0;) {
			this.e = this.q();
			if(!this.e) return null;
			var t = this;
			this.d.d(function(i, r) {
				if(t.e === r.c()) {
					_a.c.d(!!r.e(), String.format("Subscription data for subscription with id {0} is null", r.a()));
					Array.add(n, r.e());
					t.c.a(r.a(), r)
				}
			})
		}
		var i = this;
		this.c.d(function(n, t) {
			i.d.e(t.a())
		});
		return n
	},
	q: function() {
		if(this.f.a() <= 0) return null;
		var n = this.f.e()[0];
		this.f.j(0);
		return n
	},
	o: function(n, t) {
		t && t.Parameters && t.Parameters.NotificationType === "UnseenItemNotification" ? this.i.a(n) : this.h.a(n)
	}
};
_h.ci = function() {};
_h.ci.prototype = {
	a: function() {
		return "PrimaryMailbox"
	},
	b: function(n) {
		return new _h.ew(n)
	},
	c: function(n) {
		return new _h.ex(n)
	},
	toString: function() {
		return "PrimaryMailbox"
	}
};
_h.bT = function(n, t, i, r, u, f) {
	this.M = Function.createDelegate(this, this.U);
	this.D = Function.createDelegate(this, this.Q);
	this.F = Function.createDelegate(this, this.V);
	this.E = Function.createDelegate(this, this.S);
	_h.bT.initializeBase(this, [n, t, i, new _h.ep(r, u, n.NotificationType === "UnseenItemNotification")]);
	this.H = f
};
_h.bT.prototype = {
	H: !1,
	r: null,
	z: !1,
	s: !1,
	w: !1,
	A: 0,
	k: function() {
		return !0
	},
	n: function(n, t, i, r) {
		_a.g.c().b(_a.ck, this.E);
		_a.g.c().b(_a.cv, this.F);
		this.A++;
		var u = _h.K.prototype.n.call(this, n, t, i, r);
		if(!this.s) {
			_a.g.e().a(u, n, t, this.D, r);
			this.s = !0
		}
		return u
	},
	v: function(n) {
		if(this.s && this.R(this.l.NotificationType)) {
			this.G();
			_a.g.e().b(this.m, this.D);
			this.s = !1;
			this.z = !1
		}
		_a.g.c().c(_a.ck, this.E);
		_a.g.c().c(_a.cv, this.F);
		this.w = !1;
		_h.K.prototype.v.call(this, n);
		this.A--
	},
	g: function(n, t) {
		this.L(n, t, !this.H);
		this.I()
	},
	h: function(n, t) {
		this.z && !t && this.T(this.m);
		this.I();
		this.z = !0;
		_h.K.prototype.h.call(this, n, t)
	},
	I: function() {
		this.G();
		this.N()
	},
	T: function(n) {
		_a.g.e().o(this.m, this.l.FolderId, "SubscriptionNotExistsOnServer", !1)
	},
	C: function() {
		var n = _h.K.prototype.C.call(this);
		this.l.NotificationType === "RowNotification" && (n += "_" + this.u.e);
		return n
	},
	R: function(n) {
		return this.l.NotificationType === "SearchNotification" ? this.A === 1 : _a.g.e().p(this.m) === 2
	},
	Q: function(n) {
		this.I()
	},
	S: function(n) {
		if(this.r) {
			this.G();
			this.w = !0
		}
	},
	V: function(n) {
		this.w && !n.a && this.N()
	},
	G: function() {
		if(this.r) {
			_j.m.a().b(this.r);
			this.r = null
		}
	},
	N: function() {
		this.w = !1;
		this.r = _j.m.a().a(_a.a.E, "RemoteNotificationsSubscriptionsTimer", this.M, 3e5)
	},
	U: function() {
		this.r = null;
		this.f()
	}
};
_h.ec = function(n, t, i, r) {
	this.P = new Sys.EventHandlerList;
	_h.ec.initializeBase(this, [n.u(), t, r]);
	_a.c.d(!n.c(), "The app is PAL enabled");
	this.Q = i
};
_h.ec.prototype = {
	Q: !1,
	z: function(n) {
		this.P.addHandler("UserEnabledOffline", n)
	},
	c: function() {
		var n = this.K.b("userEnabledOffline") || "";
		return !this.g() && !_j.h.a(n)
	},
	g: function() {
		return this.K.b("userEnabledOffline") === "false".toLowerCase()
	},
	f: function() {
		return this.W() <= 1e4
	},
	h: function(n) {
		n ? this.K.a("OfflineSessionInUseKey", this.U().toString()) : this.K.c("OfflineSessionInUseKey");
		return n
	},
	W: function() {
		if(this.c()) {
			var n = this.K.b("OfflineSessionInUseKey");
			if(n) {
				var i = Number.parseInvariant(n);
				return this.U() - i
			}
		}
		return 2147483647
	},
	E: function() {
		var n = this.K.b("userEnabledOffline");
		_j.h.b(n) && (n = "");
		return n
	},
	D: function() {
		var n = this.K.b("userOfflineDisplayName");
		_j.h.b(n) && (n = this.E());
		return n
	},
	d: function() {
		return this.c() && this.K.b("showOfflineSignoutWarning") !== "false"
	},
	y: function(n) {
		this.K.a("showOfflineSignoutWarning", n.toString());
		return n
	},
	J: function(n, t) {
		this.K.a("userEnabledOffline", n);
		this.K.a("userOfflineDisplayName", t);
		this.T(!0)
	},
	s: function() {
		this.o();
		this.K.a("userEnabledOffline", "false".toLowerCase());
		this.T(!1)
	},
	i: function(n, t) {
		return this.f() && !t ? !1 : !this.L || _a.bs.a() ? !1 : this.c() ? n !== "NoComputers" : this.X(n)
	},
	A: function(n) {
		return n === "NoComputers" && this.c() && this.L
	},
	o: function() {
		this.K.c("userEnabledOffline");
		this.K.c("userOfflineDisplayName");
		this.K.c("showOfflineSignoutWarning");
		this.K.c("OfflineSessionInUseKey");
		this.K.c("LastSuccessfullEmailCleanup");
		this.K.c("PageDataPayload.AllowServerSideSessionData");
		_h.bq.prototype.o.call(this)
	},
	X: function(n) {
		var t = !1;
		switch(n) {
			case "AllComputers":
				t = !0;
				break;
			case "PrivateComputersOnly":
				t = this.Q;
				break;
			default:
				break
		}
		return t
	},
	T: function(n) {
		var t = this.P.getHandler("UserEnabledOffline");
		t && t(n)
	}
};
_h.dL = function(n, t, i, r) {
	this.E = Function.createDelegate(this, this.bd);
	this.o = Function.createDelegate(this, this.be);
	_h.dL.initializeBase(this);
	_a.c.a(n, "eventAggregator");
	_a.c.a(t, "syncManager");
	_a.c.a(i, "connectionManager");
	_a.c.a(r, "moduleTypes");
	this.b = n;
	this.f = t;
	this.e = i;
	this.j = r;
	this.bf()
};
_h.dL.prototype = {
	b: null,
	f: null,
	e: null,
	j: null,
	p: !1,
	K: function(n) {
		if(this.p !== n) {
			this.p = n;
			this.b.a(_h.bA, new _h.bA(this))
		}
		return n
	},
	D: function() {
		this.bg()
	},
	bf: function() {
		for(var n = 0; n < this.j.length; n++) this.f.c(this.j[n], this.o);
		this.f.c(20, this.o);
		this.b.b(_a.cS, this.E)
	},
	bg: function() {
		for(var n = 0; n < this.j.length; n++) this.f.g(this.j[n], this.o);
		this.f.g(20, this.o);
		this.b.c(_a.cS, this.E)
	},
	be: function(n) {
		if(_j.h.a(n.f)) switch(n.a) {
			case 0:
				this.H(n);
				break;
			case 3:
			case 6:
			case 4:
				this.G(n);
				break;
			case 5:
				n.c !== 20 ? _j.e.c(_h.dL.a, "SyncCompleted event should not be raised for module: {0}", n.h) : this.J(n);
				break
		}
	},
	bd: function(n) {
		this.F()
	}
};
_h.s = function(n, t, i, r, u, f, e, o) {
	this.u = Function.createDelegate(this, this.E);
	this.o = Function.createDelegate(this, this.B);
	this.t = Function.createDelegate(this, this.C);
	_a.c.b(e, "nativeBridge");
	this.e = t;
	this.d = i;
	this.d.e(this.t);
	this.g = n;
	this.r = r;
	this.n = u;
	this.q = f;
	this.m = e;
	this.j = o;
	this.g.b(_h.bN, this.o)
};
_h.s.b = function(n) {
	if(_h.s.a !== n) {
		_h.s.a && _h.s.a.dispose();
		_h.s.a = n
	}
	return n
};
_h.s.prototype = {
	q: !1,
	m: null,
	h: null,
	e: null,
	l: !1,
	g: null,
	d: null,
	r: null,
	s: null,
	n: null,
	j: null,
	k: function(n) {
		if(this.i() || this.d.d()) n();
		else {
			this.h || (this.h = new Sys.EventHandlerList);
			this.h.addHandler("i", n)
		}
	},
	i: function() {
		!this.l && this.a() && this.d.a(null);
		return this.l || !this.a()
	},
	f: function() {
		return this.d.d() ? this.d.b().a() : !1
	},
	x: function() {
		return this.d.d() ? this.d.b().h() : null
	},
	v: function() {
		return this.d.d() ? this.d.b().f() : 0
	},
	b: function() {
		return this.d.d() ? this.d.b().e() : !1
	},
	w: function() {
		return this.d.d() ? this.d.b().g() : !1
	},
	a: function() {
		return this.e.a()
	},
	p: function() {
		return this.d.d() ? this.d.b().c() : null
	},
	A: function() {
		return this.d.d() ? this.d.b().d() : null
	},
	dispose: function() {
		if(this.d) {
			this.d.d() && this.d.b().dispose();
			this.d = null
		}
		this.g.c(_h.bN, this.o)
	},
	D: function(n, t, i, r, u, f, e) {
		var o = this;
		this.d.a(function(s) {
			s.k(n, t, i, r, u, o.n, o.j, f, e)
		})
	},
	z: function(n, t) {
		var i = this;
		this.d.a(function(i) {
			i.m(n, t)
		})
	},
	c: function(n, t, i, r, u, f, e, o, s, h) {
		var l = 1;
		var p = this.e.a();
		var y = this.e.f();
		if(this.q) {
			l = 2;
			var v = this;
			var b = function() {
				v.r.a(function(t) {
					n(t.a(f, e, v.g, v.j))
				})
			};
			if(_g.k.b) b();
			else {
				var k = null;
				var d = this;
				var w = function() {
					b();
					d.g.c(_a.ep, k)
				};
				k = w;
				this.g.b(_a.ep, w)
			}
		} else if(i || !p || y) {
			l = 1;
			var nt = String.format("isForWebPart:{0},IsOfflineEnabled:{1},IsOfflineSessionInUse:{2}", i, p, y);
			var c = new _g.k(null, f, e, new _g.dY(this.j), this.g);
			c.b().jI = o;
			c.b().jE = s;
			c.n.e(h);
			n(c);
			if(this.e.g()) {
				var g = this;
				this.d.a(function(n) {
					n.l(function() {}, function(n) {})
				})
			}
			y && r.a(_a.a.bx, "InitializeMailboxDataContext", this.u, 1e4)
		} else {
			l = 0;
			var a = this;
			this.k(function() {
				a.d.b().j(n, t, r, u, f, e, a.n, a.j)
			})
		}
		return l
	},
	y: function(n, t, i) {
		if(this.a()) {
			var r = this;
			this.k(function() {
				r.d.b().b().a(n, t, i)
			})
		}
	},
	C: function() {
		this.l = !0;
		if(this.h) {
			this.h.getHandler("i")();
			this.h = null
		}
	},
	E: function() {
		this.e.f() || (this.s ? this.s(window.location, this.m).a("OfflineSessionNoLongerInUse") : new _a.cQ(window.location, this.m).a("OfflineSessionNoLongerInUse"))
	},
	B: function(n) {
		this.e.x(_a.d.get_utcNow().h())
	}
};
_h.ez = function(n) {
	this.a = n
};
_h.ez.prototype = {
	a: null,
	b: function(n) {
		return n && this.a.idToName(n) !== "outbox" && _h.k.n(n) ? !0 : !1
	}
};
_h.bq = function(n, t, i) {
	_a.c.b(t, "localStorageAdapter");
	var u = !!i && i.g() === "SharedHoverCard";
	var r = new _a.I(_a.w.b(window.location.href, u));
	this.S = r.a.offline === "disabled";
	this.L = n && !_a.bs.a();
	this.K = t
};
_h.bq.a = function(n, t) {
	var i = _a.bm.a();
	return n.c() ? new _h.eC(n, i, t) : new _h.ec(n, i, _a.g.C, t)
};
_h.bq.prototype = {
	L: !1,
	K: null,
	S: !1,
	M: null,
	z: function(n) {},
	a: function() {
		return this.L && this.c() && !this.S
	},
	v: function() {
		return this.K.b("showOfflineMoveMailItemsWarning") !== "false".toLowerCase()
	},
	l: function(n) {
		this.K.a("showOfflineMoveMailItemsWarning", n.toString().toLowerCase());
		return n
	},
	b: function() {
		if(this.K.b("UsePostALT1SyncOrderKey") === "true") return !0;
		else {
			this.H(!1);
			return !1
		}
	},
	r: function(n) {
		this.K.a("UsePostALT1SyncOrderKey", n.toString().toLowerCase());
		n || this.H(!1);
		return n
	},
	B: function() {
		return this.K.b("AppStatusShowConnecting") === "true".toLowerCase()
	},
	G: function(n) {
		this.K.a("AppStatusShowConnecting", n.toString().toLowerCase());
		return n
	},
	k: function() {
		return this.K.b("AppCacheCached") === "true".toLowerCase()
	},
	e: function(n) {
		this.K.a("AppCacheCached", n.toString().toLowerCase());
		n || this.H(!1);
		return n
	},
	C: function() {
		return this.K.b("HasShownAppALT1DoneText") === "true".toLowerCase()
	},
	H: function(n) {
		this.K.a("HasShownAppALT1DoneText", n.toString().toLowerCase());
		return n
	},
	u: function() {
		return this.N("AppOnResumeUtcMSKey")
	},
	x: function(n) {
		this.O("AppOnResumeUtcMSKey", n);
		return n
	},
	t: function() {
		return this.N("AppOnInactiveUtcMSKey")
	},
	w: function(n) {
		this.O("AppOnInactiveUtcMSKey", n);
		return n
	},
	n: function() {
		return this.N("PeriodicEmailCleanupTimer")
	},
	q: function(n) {
		this.O("PeriodicEmailCleanupTimer", n);
		return n
	},
	m: function() {
		return this.N("PeriodicCalendarReconcileTimer")
	},
	p: function(n) {
		this.O("PeriodicCalendarReconcileTimer", n);
		return n
	},
	R: function() {
		if(!this.M) {
			var n = this.K.b("SyncTimeDictionaryKey");
			this.M = n ? _a.G.b(JsonParser.deserialize(n)) : _a.G.a()
		}
		return this.M
	},
	F: function(n) {
		var t = parseInt(this.R().b[n]);
		return isFinite(t) && t > 0 ? t : 0
	},
	I: function(n, t) {
		this.R().a(n, t);
		this.K.a("SyncTimeDictionaryKey", this.R().h())
	},
	j: function() {
		this.M = null;
		this.V()
	},
	o: function() {
		this.K.c("showOfflineMoveMailItemsWarning");
		this.K.c("PeriodicCalendarReconcileTimer");
		this.K.c("PeriodicEmailCleanupTimer");
		this.K.c("MaxSyncModuleType");
		this.K.c("AppStatusShowConnecting");
		this.K.c("AppCacheCached");
		this.K.c("HasShownAppALT1DoneText");
		this.K.c("AppOnResumeUtcMSKey");
		this.K.c("AppOnInactiveUtcMSKey");
		this.K.c("SyncFolders.UserSelected");
		this.K.c("SyncFolders.Mail.AutoSelected");
		this.K.c("SyncFolders.Mail.UserSelected");
		this.V()
	},
	U: function() {
		return _a.d.get_utcNow().h()
	},
	V: function() {
		this.K.c("UsePostALT1SyncOrderKey");
		this.K.c("SyncTimeDictionaryKey")
	},
	O: function(n, t) {
		if(!isFinite(t) || t <= 0) throw Error.argument(n, "invalid value");
		this.K.a(n, t.toString())
	},
	N: function(n) {
		var i = this.K.b(n) || "";
		var t = parseInt(i);
		return isFinite(t) && t > 0 ? t : 0
	}
};
_h.eC = function(n, t, i) {
	_h.eC.initializeBase(this, [n.u(), t, i]);
	_a.c.d(n.c(), "The app is not PAL enabled")
};
_h.eC.prototype = {
	c: function() {
		return !0
	},
	d: function() {
		return !1
	},
	y: function(n) {
		return n
	},
	D: function() {
		return ""
	},
	E: function() {
		return ""
	},
	f: function() {
		return !1
	},
	h: function(n) {
		return n
	},
	g: function() {
		return !1
	},
	J: function(n, t) {},
	s: function() {},
	i: function(n, t) {
		return !1
	},
	A: function(n) {
		return !1
	}
};
_h.j = function(n, t, i) {
	_h.j.initializeBase(this);
	t && this.fa(t);
	this.fp = !1;
	this.fN = i;
	!!n === n && n || this.bK()
};
_h.j.$$cctor = function() {
	_a.m.d(_h.j, _g.bZ, function(n) {
		return new _h.j(!1, n, null)
	})
};
_h.j.m = function(n) {
	if(!_h.j.e) {
		if(!n) {
			_h.j.c = null;
			_h.j.e = !1;
			Array.clear(_h.j.f);
			return
		}
		n.a(function(n) {
			_h.j.c = n.a();
			Array.forEach(_h.j.f, function(n) {
				n.bK()
			});
			Array.clear(_h.j.f)
		})
	}
};
_h.j.l = function(n) {
	_h.j.e = n !== "Mouse"
};
_h.j.a = function(n, t) {
	if(!n) throw Error.argumentNull("email address");
	var i = new _h.j(t, null, null);
	i.cJ(n);
	i.fQ([n]);
	i.cI(n.Name);
	n.SipUri && i.fA(n.SipUri);
	switch(n.MailboxType) {
		case "PublicDL":
		case "PrivateDL":
		case "PublicFolder":
			i.bo(2);
			break;
		case "GroupMailbox":
		case "RecommendedGroup":
			i.bo(5);
			break;
		case "SchedulingMailbox":
			i.bo(8);
			break;
		default:
			i.bo(1);
			break
	}
	return i
};
_h.j.g = function() {
	return new _g.e("CLPID:" + _a.d.get_utcNow().i() + ":" + Math.random())
};
_h.j.b = function(n, t, i) {
	if(_j.h.b(t)) throw Error.argumentNull("paramId");
	_j.h.b(i) || (i = encodeURIComponent(i));
	var r = String.format("{0}={1}", t, i);
	_j.h.a(n) || (r = String.format("{0}&{1}", n, r));
	return r
};
_h.j.i = function(n, t) {
	if(_j.h.a(n)) throw Error.argumentNull("displayName");
	if(_j.h.a(t)) throw Error.argumentNull("imAddress");
	var i;
	return i = new _h.j(!1, null, null), i.cI(n), i.fA(t), i.bo(1), i
};
_h.j.k = function(n, t) {
	var i = n > t ? n : t;
	return i < 21 ? "UserTileSmall" : i < 180 ? "UserTileMedium,UserTileStatic,UserTileSmall" : i < 96 ? "UserTileStatic,UserTileSmall" : "Win8Static,UserTileMedium,UserTileStatic,UserTileSmall"
};
_h.j.prototype = {
	dv: null,
	fz: null,
	fN: null,
	fO: null,
	dQ: null,
	fL: null,
	dI: null,
	fy: !1,
	fx: null,
	gx: 0,
	gj: null,
	gk: null,
	fG: null,
	gy: null,
	gz: null,
	fI: null,
	fJ: null,
	fP: 0,
	dz: null,
	dL: null,
	fk: !1,
	gq: !1,
	gi: !1,
	gp: !1,
	fU: null,
	fK: null,
	d: function() {
		return this.fw()
	},
	cW: function(n) {
		this.fT(n);
		return n
	},
	c: function() {
		return this.gl()
	},
	cI: function(n) {
		this.gR(n);
		return n
	},
	dm: function() {
		return this.dR()
	},
	hh: function() {
		return this.hk()
	},
	dn: function() {
		return this.dS()
	},
	hs: function(n) {
		this.fR(n);
		return n
	},
	hi: function() {
		return this.hl()
	},
	hj: function() {
		return this.hn()
	},
	b: function() {
		return this.hm()
	},
	bo: function(n) {
		this.fD(n);
		return n
	},
	i: function() {
		return this.gm()
	},
	fA: function(n) {
		this.gu(n);
		return n
	},
	cU: function() {
		return this.gL()
	},
	a: function() {
		return this.ft()
	},
	cJ: function(n) {
		this.fB(n);
		return n
	},
	e: function() {
		return this.fv()
	},
	fQ: function(n) {
		this.fC(n);
		return n
	},
	fp: !1,
	cH: function() {
		return this.dI ? this.dI.a() : 0
	},
	bJ: function() {
		return this.dI
	},
	gQ: function(n) {
		if(this.dI !== n) {
			this.dI = n;
			this.eH("PresenceObserver")
		}
		return n
	},
	m: function() {
		return _j.h.b(this.dL) ? this.fF(96, 96) : this.dL
	},
	dp: function() {
		return this.fy
	},
	cV: function(n) {
		this.fy = n;
		return n
	},
	W: function() {
		if(!this.gq) {
			this.fk = !1;
			var t = _g.a.a().c();
			if(t && !_j.h.b(t.bH.UserEmailAddress))
				if(this.a() && !_j.h.b(this.a().EmailAddress) && this.a().EmailAddress.toLowerCase() === t.bH.UserEmailAddress.toLowerCase()) this.fk = !0;
				else if(this.e())
				for(var n = 0; n < this.e().length; n++) _j.h.b(this.e()[n].EmailAddress) || this.e()[n].EmailAddress.toLowerCase() !== t.bH.UserEmailAddress.toLowerCase() || (this.fk = !0);
			this.gq = !0
		}
		return this.fk
	},
	cG: function() {
		return this.b() === 5 || this.b() === 8
	},
	o: function() {
		return null === this.dQ ? !1 : "Guest" === this.dQ.MailboxType || !_j.z.a(this.dQ.IsDomainInOrganization) && !this.dQ.IsDomainInOrganization
	},
	dH: null,
	j: function() {
		return this.dH
	},
	cX: function(n) {
		this.dH = n;
		return n
	},
	B: function() {
		return this.l() ? this.dH.c : null
	},
	A: function() {
		this.hq() && !this.fz && (this.fz = this.dv ? this.dv.b() : null);
		return this.fz
	},
	dt: function(n) {
		this.fz = n;
		return n
	},
	l: function() {
		return !!this.dH
	},
	k: function() {
		return this.dv ? this.dv.a() || null : null
	},
	gP: function(n) {
		this.dv.c(n);
		return n
	},
	dD: function() {
		this.fK || (this.fK = new _h.j.j);
		return this.fK
	},
	gK: function() {
		if(!this.gp) {
			this.gi = !this.fp && this.ho() && !_g.a.a().c().bH.PeopleConnectionsExist && !!this.a() && !_j.h.b(this.a().EmailAddress) && _a.J.a(this.a().EmailAddress.trim().toLowerCase());
			this.gp = !0
		}
		return this.gi
	},
	gS: function() {
		this.d() && this.d().Id || this.cW(_h.j.g())
	},
	ds: function(n) {
		if(!n) return null;
		var t = _ff.e.a(n, !0, !0);
		var i = _a.D.b(t.Name);
		if(!t.Name || _a.D.b(t.EmailAddress) === i || _a.D.b(this.c()) === i || _a.D.b(this.dn()) === i) {
			var r = this.c();
			_a.v.b() in _a.F.a && (r = this.dn());
			t.Name = r
		}
		this.i() && (t.SipUri = this.i());
		return t
	},
	C: function(n) {
		return n ? _bc.v.isInstanceOfType(n) ? !this.d() || !n.d() ? !1 : _ff.e.b(this.d(), n.d()) && _ff.e.b(this.a(), n.a()) : !1 : !1
	},
	dq: function() {
		var n = null;
		if(this.a()) {
			var t = this.a().EmailAddress;
			(_g.n.d(this.a()) || _j.h.a(this.a().RoutingType)) && !_j.h.a(this.a().OriginalDisplayName) && (t = this.a().OriginalDisplayName);
			_j.h.b(t) || (n = _h.j.b(n, "email", t.toLowerCase()))
		}!this.d() || _j.h.b(this.d().Id) || this.d().Id.startsWith("CLPID:") || (n = _h.j.b(n, "personId", this.d().Id));
		if(n) {
			n = _h.j.b(n, "UA", "0");
			this.gK() && (n = _h.j.b(n, "fallbackToClearImage", "true"))
		}
		this.a() && this.dL && (n = _h.j.b(n, "name", this.a().Name));
		return n
	},
	bK: function() {
		this.fq = !0;
		if(!_h.j.e) {
			if(!_h.j.c) {
				Array.add(_h.j.f, this);
				return
			}
			var n = this;
			_h.j.c.b(function() {
				_h.j.c.e() && !n.eZ && n.gQ(_h.j.c.e().a(n.i()))
			})
		}
	},
	du: function() {
		this.fq = !1;
		this.gQ(null)
	},
	dr: function(n) {
		return this.C(n)
	},
	fa: function(n) {
		var t = n;
		this.fO = t.PersonaId;
		this.fG = t.DisplayName;
		this.fI = t.DisplayNameFirstLast;
		this.fJ = t.DisplayNameLastFirst;
		this.fP = t.PersonaTypeString;
		this.fx = t.ImAddress;
		this.fB(t.EmailAddress);
		this.fL = t.EmailAddresses;
		this.gx = t.UnreadCount;
		this.eH("PropertiesChanged")
	},
	fq: !1,
	hq: function() {
		return !!this.fN && this.l() && !!this.dH.a && this.fN.a(this.dH.a, "PersonaEffectiveRights")
	},
	hg: function(n, t) {
		var i = _h.j.k(n, t);
		this.fU || (this.fU = _g.a.a().bH.HexCID);
		this.dz = String.format("https://cid-{0}.users.storage.live.com/users/0x{0}/myprofile/expressionprofile/profilephoto:{1}/MeControlMediumUserTile?ck=1&ex=24&fofoff=1", this.fU, i);
		return this.dz
	},
	hn: function() {
		var n = this.gn() || "";
		var i = this.go() || "";
		var t = n !== "" ? " " : "";
		return _a.v.b() in _a.F.a ? i + t + n : n + t + i
	},
	fj: function(n) {
		return _j.h.a(n) ? "" : n + " "
	},
	gJ: function(n) {
		var t = "";
		t = n ? this.fj(this.fs()) + this.fj(this.dR()) + this.fj(this.fM()) : this.fj(this.dS()) + this.fj(this.fM()) + this.fj(this.fs());
		return t.trim()
	},
	hp: function() {
		return !!_h.j.d && _h.j.d.a().c().Enabled
	},
	ho: function() {
		return !!_h.j.d && _h.j.d.a().iM().Enabled
	},
	eJ: function() {
		this.du();
		var n;
		_a.h.a(n = {
			val: this.dv
		}), this.dv = n.val;
		_a.gd.prototype.eJ.call(this)
	},
	ft: function() {
		return this.dQ
	},
	fB: function(n) {
		if(this.dD().c()) {
			this.dD().a(n.EmailAddress) && (n.EmailAddress = _g.a.a().c().a().a(0));
			this.dD().a(n.Name) && (n.Name = _g.a.a().c().a().a(0))
		}
		this.dQ = n
	},
	fv: function() {
		return this.dD().d(this.fL)
	},
	fC: function(n) {
		this.fL = n
	},
	hm: function() {
		var n = this.gM();
		return n !== 5 || this.hp() ? n : 1
	},
	gM: function() {
		return this.fP
	},
	fD: function(n) {
		this.fP = n
	},
	gl: function() {
		return this.dD().b(this.fG)
	},
	dR: function() {
		return this.dD().b(this.fI)
	},
	hk: function() {
		if(_j.h.a(this.dR())) return this.dR();
		else {
			var n = this.gJ(!0);
			return this.dD().b(n)
		}
	},
	dS: function() {
		return this.dD().b(this.fJ)
	},
	hl: function() {
		if(_j.h.a(this.dS())) return this.dS();
		else {
			var n = this.gJ(!1);
			return this.dD().b(n)
		}
	},
	gr: function(n) {
		this.fI = n
	},
	fR: function(n) {
		this.fJ = n
	},
	gR: function(n) {
		this.fG = n
	},
	gm: function() {
		return this.fx
	},
	gu: function(n) {
		if(this.fx !== n) {
			var t = this.fq;
			t && this.du();
			this.fx = n;
			t && this.bK();
			this.eH("ImAddress")
		}
	},
	gL: function() {
		return this.gx
	},
	fs: function() {
		return this.gj
	},
	gs: function(n) {
		this.gj = n
	},
	fM: function() {
		return this.gk
	},
	gt: function(n) {
		this.gk = n
	},
	gn: function() {
		return this.gy
	},
	gv: function(n) {
		this.gy = n
	},
	go: function() {
		return this.gz
	},
	gw: function(n) {
		this.gz = n
	},
	fw: function() {
		return this.fO
	},
	fT: function(n) {
		this.fO = n
	},
	fF: function(n, t) {
		if(this.fy && this.fk) return this.hg(n, t);
		var r = String.format("HR{0}x{1}", n, t);
		if(_j.h.b(this.dz)) {
			this.dz = "no url";
			var i = this.dq();
			if(!_j.h.a(i)) {
				this.dz = _j.h.b(_h.j.h) ? this.gK() ? "service.svc/s/GetUserPhoto" : "service.svc/s/GetPersonaPhoto" : _h.j.h;
				this.dz += "?" + i
			}
		}
		return _a.g.D("GetPersonaPhoto") ? this.dz === "no url" ? null : this.dz + "&size=" + r + "&trace=1" : this.dz === "no url" ? null : this.dz + "&size=" + r
	}
};
_h.j.j = function() {};
_h.j.j.prototype = {
	c: function() {
		return !!_g.a.a().c().a() && _g.a.a().c().a().b() > 0
	},
	a: function(n) {
		if(_g.a.a().E && this.c()) {
			var t = _j.h.c("outlook_{0}", _g.a.a().bH.HexCID.toLowerCase());
			return !!n && !_j.h.d(n) && n.toLowerCase().startsWith(t)
		}
		return !1
	},
	b: function(n) {
		return this.a(n) ? _g.a.a().c().a().a(0) : n
	},
	d: function(n) {
		var r = n;
		var e = _g.a.a().c().a();
		if(r && _g.a.a().E && this.c())
			for(var u = r, f = u.length, i = 0; i < f; ++i) {
				var t = u[i];
				if(t) {
					this.a(t.EmailAddress) && (t.EmailAddress = _g.a.a().c().a().a(0));
					this.a(t.Name) && (t.Name = _g.a.a().c().a().a(0))
				}
			}
		return r
	}
};
_h.L = function() {
	this.c = new Sys.EventHandlerList
};
_h.L.prototype = {
	a: function(n, t) {
		_a.Y.b && this.c.addHandler(n, t)
	},
	d: function(n) {
		return _a.Y.b ? this.c.getHandler(n) : null
	},
	b: function(n, t) {
		_a.Y.b && this.c.removeHandler(n, t)
	}
};
_h.Q = function() {};
_h.Q.a = function(n, t, i, r, u, f, e, o) {
	_h.Q.b(n, t, i, r, u, f, e, o, function(t, i) {
		n.r(t, i)
	}, function(t, i) {
		n.s(t, i)
	}, function(t, i, r) {
		n.v(t, i, r)
	}, function(t, i) {
		n.t(t, i)
	}, function(t) {
		n.j(t)
	})
};
_h.Q.c = function(n, t, i, r, u, f, e, o, s) {
	_h.Q.b(n, t, i, r, u, f, e, o, function(t, i) {
		var u = "MergeRowsWithContext_RemoveRange_" + i;
		var r = _j.n.b(_a.a.de, 2, u);
		n.I(t, i, s);
		_j.n.a(r)
	}, function(t, i) {
		var u = "MergeRowsWithContext_InsertRange_" + i.length;
		var r = _j.n.b(_a.a.de, 2, u);
		n.O(t, i, s);
		_j.n.a(r)
	}, function(t, i, r) {
		n.D(t, i, r, s)
	}, function(t, i) {
		n.C(t, i, s)
	}, function(t) {
		var r = "MergeRowsWithContext_AddRange_" + t.length;
		var i = _j.n.b(_a.a.de, 2, r);
		n.H(t, s);
		_j.n.a(i)
	})
};
_h.Q.b = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
	o || (o = _a.a.T);
	u || (u = _h.Q.d);
	for(var ut = t ? t.length : 0, ft = {}, tt = 0; tt < ut; tt++) ft[r(t[tt])] = tt;
	var et = {};
	if(e)
		for(var it = 0; it < n.b(); it++) et[i(n.c(it))] = it;
	for(var y = [], k = -1, p = 0, nt = !1, w = -1, v = 0, b = 0; b < ut && v < n.b();) {
		var ot = n.c(v);
		var st = i(ot);
		var d = t[b];
		var rt = r(d);
		var ct = rt === st;
		if(ct || nt) {
			if(p > 0 && f) {
				s(k, p);
				v -= p;
				w -= p;
				k = -1;
				p = 0
			}
			if(y.length > 0) {
				h(v, y);
				v += y.length;
				w += y.length;
				Array.clear(y)
			}
			if(nt) {
				c(w, b, n.c(w));
				nt = !1
			} else n.q(v, u(ot, d));
			v++;
			b++;
			continue
		}
		if(!f && e && !(rt in et)) {
			Array.add(y, u(null, d));
			b++;
			continue
		}
		if(!(st in ft)) {
			if(!f && e) {
				h(v, y);
				v += y.length;
				v++;
				Array.clear(y)
			} else {
				k < 0 && (k = v);
				p++;
				v++
			}
			continue
		}
		w = -1;
		for(var g = 0; g < n.b(); ++g)
			if(i(n.c(g)) === rt) {
				w = g;
				break
			}
		if(w === -1) {
			Array.add(y, u(null, d));
			b++;
			continue
		}
		n.q(w, u(n.c(w), d));
		nt = !0
	}
	for(; b < ut; b++) {
		var ht = t[b];
		Array.add(y, u(null, ht))
	}
	if(y.length > 0)
		if(e && !v) h(0, y);
		else {
			a(y);
			v += y.length
		}
	if(f) {
		p += n.b() - v;
		k < 0 && (k = v);
		k >= 0 && p > 0 && s(k, p)
	}
};
_h.Q.d = function(n, t) {
	return t
};
_h.O = function() {};
_h.O.e = function(n) {
	if(n) {
		var r = _h.a.g();
		if(!(r.x.length > 0)) {
			if(!n.length) {
				var u = _h.a.b("msgfolderroot");
				var f = u.bw(10);
				r.s(0, f);
				return
			}
			for(var i = 0; i < n.length; i++) {
				var t = _h.a.a(new _g.m(n[i].EwsFolderIdEntry));
				!t || _h.a.h(t) || t.r || r.a(t)
			}
		}
	}
};
_h.O.b = function(n) {
	_h.a.g().p(n, !0);
	var t = _h.a.g();
	t.t(0, n);
	t.x.length > 10 && t.n(t.x.length - 1);
	_h.O.a && _j.m.a().b(_h.O.a);
	_h.O.c && (_h.O.a = _j.m.a().a(_a.a.v, "DelayMruUpdate", function() {
		_h.O.d(t)
	}, 3e4))
};
_h.O.f = function(n) {
	_h.a.g().p(n, !0);
	_h.O.c && (_h.O.a = _j.m.a().a(_a.a.v, "DelayMruUpdate", function() {
		_h.O.d(_h.a.g())
	}, 3e4))
};
_h.O.d = function(n) {
	var i = new _g.eP;
	i.FolderMruEntries = new Array(n.x.length);
	for(var t = 0; t < n.x.length; t++) {
		i.FolderMruEntries[t] = new _g.gC;
		i.FolderMruEntries[t].EwsFolderIdEntry = n.x[t].bH.FolderId.Id
	}
	var r = new _h.eH;
	r.e = i.FolderMruEntries;
	_a.g.a.a(r)
};
_h.eA = function() {};
_h.eA.prototype = {
	a: function(n, t) {
		return !n && !t ? !0 : !n || !t ? !1 : this.c(n, t)
	},
	b: function(n) {
		return JsonParser.serialize(n)
	},
	c: function(n, t) {
		_a.c.b(n, "userConfiguration_x");
		_a.c.b(t, "userConfiguration_y");
		return !n.UserOptions && !t.UserOptions && !n.SessionSettings && !t.SessionSettings ? !0 : !n.UserOptions || !t.UserOptions || !n.SessionSettings || !t.SessionSettings ? !1 : _a.D.b(n.UserOptions.TimeZone) !== _a.D.b(t.UserOptions.TimeZone) ? !1 : n.UserOptions.HideDeletedItems !== t.UserOptions.HideDeletedItems || n.UserOptions.ConversationSortOrder !== t.UserOptions.ConversationSortOrder || n.SegmentationSettings.PredictedActions !== t.SegmentationSettings.PredictedActions ? !1 : !0
	}
};
_h.bM = function() {
	_h.bM.initializeBase(this)
};
_h.bM.prototype = {
	e: 0,
	n: 0,
	o: 0,
	f: null,
	p: null,
	l: null,
	q: null,
	K: function(n) {
		var t = new _g.fk(this.f, this.e);
		t.EmailAddresses = this.l;
		t.DestinationFolderId = this.p;
		t.CountType = this.n;
		t.KeepNCount = this.o;
		t.ItemPropertyToUpdate = this.q;
		var r = new _g.hN(this.L);
		var i = new _g.fj(this.M(), t);
		n.ba(i, r, this.k, this.j)
	},
	h: function() {
		return !0
	}
};
_h.ei = function(n) {
	_h.ei.initializeBase(this, [n])
};
_h.ei.prototype = {
	K: function(n) {
		var t = new _g.iF(this.L);
		n.eP(new _g.fR(this.M()), t, this.I, this.H)
	},
	cU: function(n, t, i) {
		t()
	}
};
_h.dz = function(n, t) {
	_h.dz.initializeBase(this);
	this.l = t;
	this.k = new _h.cj;
	this.o = n
};
_h.dz.prototype = {
	k: null,
	h: null,
	e: null,
	j: 0,
	f: 0,
	o: !1,
	l: null,
	p: function(n) {
		if(n < 0 || n > 200) throw Error.argumentOutOfRange("MaxItems", n, "Invalid value");
		this.j = n ? n : 200;
		return n
	},
	K: function(n) {
		var i = this.q();
		var t = new _g.hm(this.L);
		n.F(i, t, this.I, this.H)
	},
	cU: function(n, t, i) {
		try {
			var r = n.Body.Reminders;
			this.k.C(r);
			t()
		} catch(u) {
			i(u)
		}
	},
	q: function() {
		var n = new _g.eB(this.M());
		this.h && (n.Body.BeginTime = _a.d.d(this.h));
		this.e && (n.Body.EndTime = _a.d.d(this.e));
		_j.C.a(this.j) || this.j === 200 || (n.Body.MaxItems = this.j);
		!_j.u.a(this.f) && this.f && (n.Body.ReminderType = this.f);
		this.o && this.l.bH.Tasks ? this.l.bH.Calendar || (n.Body.ReminderGroupType = 1) : n.Body.ReminderGroupType = 0;
		return n
	}
};
_h.eF = function() {
	_h.eF.initializeBase(this)
};
_h.eF.prototype = {
	e: null,
	K: function(n) {
		var t = new _g.T;
		t.ExtendedFieldURI = _g.c.bq();
		t.Value = this.e;
		var u = new _g.bD;
		u.ExtendedProperty = [t];
		var o = new _g.ca(_g.c.bq(), u);
		var i = new _g.cm(_g.l.a(_g.b.a.nameToId("inbox")));
		i.Updates = [o];
		var r = new _g.cc;
		r.FolderChanges = [i];
		var f = new _g.cr(this.M());
		f.Body = r;
		var e = new _g.cO(this.L);
		n.b(f, e, this.I, this.H)
	},
	cJ: function(n) {
		n.ResponseClass !== "Success" && _j.e.c(_a.a.C, "SetArchiveFolderAction failed with error code {0}", n.ResponseCode)
	}
};
_h.eR = function() {
	_h.eR.initializeBase(this)
};
_h.eR.prototype = {
	K: function(n) {
		var t = new _g.jZ(this.L);
		n.ju(new _g.gK, t, this.I, this.H)
	},
	cU: function(n, t, i) {
		t()
	}
};
_h.bN = function() {};
_h.cn = function(n) {
	this.a = n
};
_h.cn.prototype = {
	a: !1
};
_h.R = function() {};
_h.dj = function() {};
_h.cA = function(n, t) {
	_a.c.d(_bc.i.isInstanceOfType(t), "The context type should match the module.");
	this.b = n;
	this.a = t
};
_h.cA.prototype = {
	b: 0,
	a: null
};
_h.dk = function(n) {
	this.a = n
};
_h.dk.prototype = {
	a: null
};
_h.h = function() {};
_h.h.a = function(n, t, i, r, u) {
	u || (u = new _a.l);
	i === -1 || u.d("al") || u.a("al", i);
	r && !u.d("as") && u.a("as", r);
	_a.b.c(n, t, u.toString(), 0)
};
_h.h.c = function(n, t) {
	n.b("ual", _h.bf.toString(t))
};
_h.h.b = function(n) {
	var r = null;
	var t = null;
	if(_j.m.a().i) {
		r = _j.m.a().i;
		var i = r.b();
		t = i && i.length > 0 ? i[i.length - 1] : _h.bf.toString(-1)
	} else t = _h.bf.toString(-1);
	n.b("uas", t);
	return n
};
_h.h.l = function(n, t) {
	_h.h.g("s", n, t)
};
_h.h.f = function(n, t) {
	_h.h.g("d", n, t)
};
_h.h.k = function(n, t) {
	_a.b.c(_a.a.dj, n, t, 0)
};
_h.h.j = function(n, t) {
	var i = [0, 0, 0, 0, 0, 0];
	if(_g.u.isInstanceOfType(n)) {
		n.D && (i[0] = 1);
		n.b && (i[1] = 1);
		n.m && (i[2] = 1);
		n.O() && (i[3] = 1);
		n.c() && (i[4] = 1);
		_g.bW.isInstanceOfType(n) && (i[5] = 1)
	}
	return i.join(",")
};
_h.h.g = function(n, t, i) {
	i.b(n, _h.h.j(t, i))
};
_h.h.h = function(n, t) {
	return n ? t ? 12 : 1 : 2
};
_h.h.d = function(n) {
	switch(n) {
		case 2:
		case 3:
			return 2;
		case 1:
			return 1;
		case 4:
			return 20;
		case 5:
			return 21;
		default:
			_j.e.b(_a.a.cS, "Folder view {0} is not supported in GetActionLocationForListview", n.toString());
			return 2
	}
};
_h.h.e = function(n, t) {
	return t ? n ? 14 : 13 : n ? 4 : 3
};
_h.h.i = function(n, t) {
	switch(n) {
		case 2:
		case 3:
			return t ? 13 : 2;
		case 1:
			return t ? 14 : 1;
		case 4:
			return t ? 13 : 20;
		case 5:
			return 21;
		default:
			_j.e.b(_a.a.cS, "Folder view {0} is not supported in GetActionLocationForListviewOrReadingPaneFullScreen", n.toString());
			return t ? 13 : 2
	}
};
_h.X = function(n, t) {
	_h.X.initializeBase(this, [n]);
	this.c = t
};
_h.X.prototype = {
	c: null,
	b: function() {
		return this.a + "_" + this.c
	},
	C: function(n) {
		return n && _h.X.isInstanceOfType(n) ? n.a === this.a && n.c === this.c : !1
	}
};
_h.W = function(n) {
	this.a = n
};
_h.W.prototype = {
	a: "All",
	b: function() {
		return this.a
	},
	C: function(n) {
		return n && _h.W.isInstanceOfType(n) ? n.a === this.a : !1
	}
};
_h.eB = function() {};
_h.eB.prototype = {
	d: function() {
		return PageDataPayload.findFolders
	},
	i: function(n) {
		PageDataPayload.findFolders = n;
		return n
	},
	c: function() {
		return PageDataPayload.findConversation
	},
	a: function(n) {
		PageDataPayload.findConversation = n;
		return n
	},
	e: function() {
		return PageDataPayload.findMailFolderItem
	},
	b: function(n) {
		PageDataPayload.findMailFolderItem = n;
		return n
	},
	f: function() {
		return PageDataPayload.getConversationItems
	},
	j: function(n) {
		PageDataPayload.getConversationItems = n;
		return n
	},
	g: function() {
		return PageDataPayload.getMailFolderItem
	},
	k: function(n) {
		PageDataPayload.getMailFolderItem = n;
		return n
	},
	h: function() {
		return PageDataPayload.owaUserConfig
	},
	l: function(n) {
		PageDataPayload.owaUserConfig = n;
		return n
	}
};
_h.dM = function(n) {
	this.e = n
};
_h.dM.prototype = {
	e: null,
	a: function(n) {
		return this.e.b(this.f(n))
	},
	b: function(n, t) {
		this.e.a(this.f(n), t)
	},
	c: function(n) {
		this.e.c(this.f(n))
	},
	d: function() {
		this.e.c("PageDataPayload.OwaVersion");
		this.e.c("PageDataPayload.State");
		this.e.c("PageDataPayload.FindConversation");
		this.e.c("PageDataPayload.FindMailFolderItem");
		this.e.c("PageDataPayload.GetConversationItems");
		this.e.c("PageDataPayload.GetMailFolderItem");
		this.e.c("PageDataPayload.FindFolders");
		this.e.c("PageDataPayload.OwaUserConfig")
	},
	f: function(n) {
		switch(n) {
			case 3:
				return "PageDataPayload.FindConversation";
			case 4:
				return "PageDataPayload.FindMailFolderItem";
			case 5:
				return "PageDataPayload.GetConversationItems";
			case 6:
				return "PageDataPayload.GetMailFolderItem";
			case 2:
				return "PageDataPayload.FindFolders";
			case 1:
				return "PageDataPayload.OwaUserConfig";
			case 7:
				return "PageDataPayload.OwaVersion";
			case 8:
				return "PageDataPayload.State";
			case 9:
				return "PageDataPayload.AllowServerSideSessionData";
			default:
				throw Error.notImplemented(String.format("Unsupported page data payload variable {0}", n));
		}
	}
};
_h.dN = function(n, t, i, r, u, f) {
	_a.c.a(n, "pageDataPayloadAdapter");
	_a.c.a(t, "localStorageAdapter");
	_a.c.a(i, "generator");
	_a.c.a(r, "lazyPersisterFactory");
	_a.c.a(u, "datapointTracker");
	this.i = n;
	this.j = t;
	this.v = i;
	this.w = r;
	this.t = u;
	this.h = new _bc.bk;
	this.u = f
};
_h.dN.prototype = {
	i: null,
	j: null,
	t: null,
	h: null,
	v: null,
	w: null,
	l: 1,
	r: !1,
	x: !1,
	B: 1048576,
	s: !1,
	m: null,
	n: null,
	q: null,
	k: 0,
	u: null,
	b: function() {
		return this.l !== 2
	},
	e: function(n) {
		this.x = n;
		return n
	},
	A: function() {
		return _g.b.a.nameToId("inbox")
	},
	a: function() {
		this.j.d()
	},
	c: function(n, t) {
		_a.c.c(n, "currentOwaVersion");
		this.k = t;
		var u = this.j.a(7);
		if(_j.h.a(u) || u !== n) {
			this.a();
			this.j.b(7, n)
		}
		var r = this.j.a(8);
		var f = _j.h.a(r) ? 1 : _j.u.b(_bc.J, r);
		this.y(f);
		var i = this.j.a(9);
		this.r = _j.h.a(i) ? !0 : Boolean.parse(i)
	},
	g: function(n, t, i) {
		this.F(n);
		this.H(t);
		this.G(n, t);
		this.E(i)
	},
	f: function() {
		var n;
		var v = _a.d.get_utcNow().h();
		var h, s;
		this.i.l((s = this.o(_g.cy, 1, this.i.h(), h = {
			val: n
		}), n = h.val, s));
		this.h.a.ouc = n;
		var c, a;
		this.i.a((a = this.o(_g.es, 3, this.i.c(), c = {
			val: n
		}), n = c.val, a));
		this.h.a.fc = n;
		var l, o;
		this.i.b((o = this.o(_g.ew, 4, this.i.e(), l = {
			val: n
		}), n = l.val, o));
		this.h.a.fi = n;
		var r, i;
		this.i.i(this.k === "Mouse" ? (i = this.o(_g.ev, 2, this.i.d(), r = {
			val: n
		}), n = r.val, i) : null);
		this.h.a.ff = this.k === "Mouse" ? n : 2;
		var t, e;
		this.i.j(this.k !== "TouchNarrow" ? (e = this.o(_g.ey, 5, this.i.f(), t = {
			val: n
		}), n = t.val, e) : null);
		this.h.a.gci = this.k !== "TouchNarrow" ? n : 2;
		var f, u;
		this.i.k(this.k !== "TouchNarrow" ? (u = this.o(_g.eA, 6, this.i.g(), f = {
			val: n
		}), n = f.val, u) : null);
		this.h.g(this.k !== "TouchNarrow" ? n : 2);
		this.h.a.lt = _a.d.get_utcNow().h() - v;
		this.h.a.st = this.l
	},
	d: function(n, t) {
		var u = _j.n.b(_a.a.dh, 2, "PersistServerSideSessionData");
		try {
			_a.j.C = _a.j.a();
			this.h.c(2);
			this.h.d(2);
			if(!t) {
				this.h.b(2);
				_a.j.c = 4;
				return
			}
			if(this.x) {
				this.h.h(1);
				_a.j.c = 5;
				return
			}
			if(!this.r) {
				this.h.b(1);
				_a.j.c = 6;
				return
			}
			if(t.status !== 200) {
				this.h.b(3);
				this.h.f(t.status);
				this.h.e(t.readyState);
				_a.j.c = 7;
				return
			}
			if(_j.h.a(t.responseText)) {
				this.h.b(4);
				this.h.f(t.status);
				this.h.e(t.readyState);
				_a.j.c = 8;
				return
			}
			if(!n.a().c()) {
				this.h.b(5);
				_a.j.c = 9;
				return
			}
			this.h.i(window.owaSDReceivedTime);
			var r = _j.n.b(_a.a.dh, 517, "LazyPersistSSSDDelay");
			var i = this;
			this.w.a(function(u) {
				_j.n.a(r);
				var f = u.a(i.i, n, i.A(), i.h, t, i.u);
				f && f.a()
			})
		} catch(f) {
			this.h.a.err = f.toString();
			_a.j.c = 10
		} finally {
			this.t.a(this.h);
			window.owaSD = null;
			_j.n.a(u)
		}
	},
	y: function(n) {
		this.l = n;
		this.j.b(8, _bc.J.toString(this.l))
	},
	p: function(n, t) {
		if(t) {
			var i = JsonParser.serialize(t);
			if(i.length < this.B) try {
				this.j.b(n, i)
			} catch(r) {
				this.j.c(n)
			} else this.j.c(n)
		} else this.j.c(n)
	},
	z: function() {
		if(this.l !== 2 && !this.s) {
			this.s = !0;
			this.m && (this.n = this.m.c("PageDataPayloadManager Generating", "PDPGEN"));
			var t = _g.a.a().b().g(this.A(), !1, !1);
			var i = t.a() !== 1;
			var n = this;
			this.v.a(function(t) {
				t.b(i, n.k, 25, function() {
					n.s = !1;
					n.y(2);
					n.p(1, t.a(1));
					n.p(2, t.a(2));
					n.p(3, t.a(3));
					n.p(4, t.a(4));
					n.p(5, t.a(5));
					n.p(6, t.a(6));
					if(n.n) {
						n.n();
						n.n = null
					}
				})
			})
		}
	},
	F: function(n) {
		var t = this;
		n.b(_a.dI, function(n) {
			(n.a === 7 || n.a === 6 || n.a === 4) && t.y(3)
		})
	},
	H: function(n) {
		var t = this;
		n.c(20, function(n) {
			if(n.a === 5) {
				t.z();
				if(t.q) {
					t.q();
					t.q = null
				}
			}
		})
	},
	G: function(n, t) {
		var i = this;
		n.b(_a.ck, function(n) {
			i.m = n.a;
			i.z();
			t.j() && (i.q = i.m.c("PageDataPayloadManager SyncInProgress", "PDPSYNC"))
		});
		var r = this;
		n.b(_a.cv, function() {
			r.m = null;
			r.n = null;
			r.q = null
		})
	},
	E: function(n) {
		this.C(n.c() || !n.a());
		var t = this;
		n.i(function() {
			t.C(n.c() || !n.a())
		})
	},
	o: function(n, t, i, r) {
		var u = i;
		if(u && this.r) r.val = 0;
		else {
			u = this.l !== 2 ? null : this.D(t);
			r.val = u ? 1 : 2
		}
		return u
	},
	C: function(n) {
		this.j.b(9, n.toString());
		n || (this.r = n)
	},
	D: function(n) {
		var t = this.j.a(n);
		return t ? JsonParser.deserialize(t) : null
	}
};
_h.cC = function(n, t, i) {
	this.c = n;
	this.a = t;
	this.b = i
};
_h.cC.prototype = {
	c: 0,
	a: null,
	b: null
};
_h.cU = function(n, t) {
	_g.b.a = n;
	n.R();
	n.c().bH.HasArchive && _g.b.a.nameToId("archivemsgfolderroot") && (n.c().c = !0);
	t.d(_a.eg, new _a.eg)
};
_h.dg = function(n, t, i, r) {
	if(i.a()) {
		t.c(n.a, r);
		t.f()
	}
};
_h.cH = function() {};
_h.cH.a = function(n, t, i) {
	var r;
	if(n === "TaskDueDate") {
		r = new Array(1);
		r[0] = new _g.bA(t);
		r[0].Path = new _g.d(n)
	} else {
		var u = "TaskDueDate";
		r = new Array(2);
		r[0] = new _g.bA(t);
		r[0].Path = new _g.d(n);
		r[1] = new _g.bA("Ascending");
		r[1].Path = new _g.d(u)
	}
	return r
};
_h.bY = function() {
	_h.bY.initializeBase(this)
};
_h.bY.prototype = {
	e: null,
	o: 0,
	j: 0,
	h: 0,
	l: 0,
	f: null,
	n: null,
	k: null,
	p: null,
	K: function(n) {
		var e = null;
		var t = new _g.fA(this.h, e);
		t.EmailAddresses = this.f;
		t.SourceFolderId = this.n;
		t.DestinationFolderId = this.k;
		t.CountType = this.j;
		t.KeepNCount = this.l;
		t.ItemPropertyToUpdate = this.p;
		t.Provider = this.o;
		if(this.e) t.RuleNames = this.e;
		else {
			for(var r = new Array(0), i = 0; i < this.f.length; i++) Array.add(r, "");
			t.RuleNames = r
		}
		var f = new _g.im(200);
		var u = new _g.fz(this.M(), t);
		n.br(u, f, this.I, this.H)
	},
	cU: function(n, t, i) {
		if(!n) {
			i(Error.create("Failed to create a sweep rule"));
			return
		}
		if(!n.Body.ResponseMessages || !n.Body.ResponseMessages.Items) {
			i(Error.create("Failed to create a sweep rule"));
			return
		}
		if(n.Body.ResponseMessages.Items[0].ResponseCode !== "NoError") {
			i(Error.create(String.format("Failed to create a sweep rule with response code {0}", n.Body.ResponseMessages.Items[0].ResponseCode)));
			return
		}
		if(!n.Body.ResponseMessages.Items[0].RuleSucceeded) {
			i(Error.create("Failed to create a sweep rule"));
			return
		}
		t()
	}
};
_h.eS = function() {};
_h.eS.registerInterface("_h.eS");
_h.cl = function() {};
_h.cl.registerInterface("_h.cl");
_h.eT = function() {
	_h.eT.initializeBase(this)
};
_h.eT.prototype = {
	e: null,
	n: null,
	f: null,
	p: null
};
_h.eU = function(n, t, i, r, u) {
	this.a = n;
	this.n = t;
	this.m = 1;
	_h.A.a().e() || this.n.a(_a.bl, new _a.bl(1, i, r, u, null, null, null))
};
_h.eU.prototype = {
	a: null,
	n: null,
	o: null,
	m: 0,
	l: null,
	c: function() {
		return this.a
	},
	f: function() {
		return this.m === 3 || this.m === 4
	},
	b: function(n) {
		return n ? this.p(n) : !1
	},
	g: function() {
		if(this.m === 2) {
			this.n.a(_a.bl, new _a.bl(2, "", "", "", null, null, null));
			this.q();
			this.m = 4
		} else if(this.m === 6) {
			this.j();
			return !0
		} else {
			this.n.a(_a.bl, new _a.bl(2, "", "", "", null, null, null));
			this.m = 3
		}
		return !1
	},
	i: function(n) {
		this.r(n);
		if(this.m === 3) {
			this.q();
			this.m = 4
		} else this.m = 2
	},
	h: function() {
		this.m === 3 ? this.j() : this.m = 6
	},
	j: function() {
		this.n.a(_a.bl, new _a.bl(4, "", "", "", null, null, null))
	},
	k: function() {
		this.s();
		this.m = 5;
		this.n.a(_a.bl, new _a.bl(3, "", "", "", null, null, null))
	},
	e: function(n) {
		return this.a.d() ? this.a.d().correlationId === n : !1
	},
	d: function(n) {
		return this.o && this.o.Q ? this.o.Q.correlationId === n : !1
	}
};
_h.cK = function(n, t, i, r, u) {
	_h.cK.initializeBase(this, [n, t, i, r, u])
};
_h.cK.prototype = {
	toString: function() {
		var n = this.a.q.length;
		return n === 1 ? _bms.E.V : String.format(_bms.E.BD, n)
	},
	t: function(n) {
		for(var t = 0; t < n.length; t++) this.l[t] = n[t].MovedItemId
	},
	p: function(n) {
		for(var t = 0; t < n.length; t++) {
			var i = n[t].MovedItemId;
			if(!i) return !1
		}
		return !0
	}
};
_h.cL = function(n, t, i, r, u) {
	_h.cL.initializeBase(this, [n, t, i, r, u])
};
_h.cL.prototype = {
	toString: function() {
		if(_h.bE.isInstanceOfType(this.a)) {
			var t = this.a.e().length;
			return t === 1 ? _bms.E.V : String.format(_bms.E.Q, t)
		} else if(_h.ba.isInstanceOfType(this.a)) {
			var n = this.a.e().length;
			return n === 1 ? _bms.E.j : String.format(_bms.E.s, n)
		} else return ""
	},
	q: function() {
		var i = this.a;
		_h.D.a().a(_a.a.cI, i.s().Id, i.p, !0);
		for(var r = new Array(this.l.length), t = 0; t < this.l.length; t++) {
			var u = new _g.f;
			u.cc(this.l[t]);
			r[t] = u
		}
		var n = new _h.bb(r, i.q, 2);
		n.q = "UndoAction";
		n.s = !0;
		this.o = n;
		_a.g.a.a(n)
	},
	r: function(n) {
		for(var r = new _j.q, i = 0; i < n.length; i++)
			for(var u = n[i].MovedItemIds, t = 0; t < u.length; t++) r.c(u[t]);
		this.l = r.i()
	},
	s: function() {
		var n = this.a;
		_h.c.i(_h.E, n.q)
	},
	p: function(n) {
		for(var t = 0; t < n.length; t++) {
			var i = n[t].MovedItemIds;
			if(!i) return !1
		}
		return !0
	}
};
_h.cM = function(n, t, i, r, u) {
	_h.cM.initializeBase(this, [n, t, i, r, u])
};
_h.cM.prototype = {
	toString: function() {
		var n = this.a.l.length;
		return n === 1 ? _bms.E.j : String.format(_bms.E.BB, n)
	},
	t: function(n) {
		for(var t = 0; t < n.length; t++) this.l[t] = n[t].Items[0].ItemId
	},
	p: function(n) {
		for(var i = 0; i < n.length; i++) {
			var t = n[i];
			if(!t.Items || !t.Items.length || !t.Items[0] || !t.Items[0].ItemId) return !1
		}
		return !0
	}
};
_h.dq = function(n, t, i, r, u) {
	_h.dq.initializeBase(this, [n, t, i, r, u])
};
_h.dq.prototype = {
	q: function() {
		var i = this.a;
		_h.D.a().a(_a.a.cI, i.f.Id, i.n, !0);
		for(var r = new Array(this.l.length), t = 0; t < this.l.length; t++) {
			var u = new _g.f;
			u.cc(this.l[t]);
			r[t] = u
		}
		var n = new _h.bb(r, i.f, 2);
		n.q = "UndoAction";
		n.s = !0;
		this.o = n;
		_a.g.a.a(n)
	},
	r: function(n) {
		this.l || (this.l = new Array(n.length));
		this.t(n)
	},
	s: function() {
		var n = this.a;
		_h.c.i(_h.I, n.f)
	}
};
_h.ea = function() {};
_h.ea.prototype = {
	none: 0,
	calendarItemModel: 1,
	bookingItemModel: 2
};
_h.ea.registerEnum("_h.ea", !1);
_h.eW = function() {};
_h.eW.registerInterface("_h.eW");
_h.eX = function() {};
_h.eX.registerInterface("_h.eX");
_h.eY = function() {};
_h.eY.registerInterface("_h.eY");
_h.eZ = function() {};
_h.eZ.registerInterface("_h.eZ");
_h.fb = function() {};
_h.fb.registerInterface("_h.fb");
_h.fa = function() {};
_h.fa.registerInterface("_h.fa");
_h.bl = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
	this.bD = Function.createDelegate(this, this.bH);
	this.h = this.n;
	_h.bl.initializeBase(this, [l]);
	_h.x.i(u);
	this.t = n;
	this.q = t;
	this.bk = u;
	this.bt = a;
	this.bq = i || _h.b.f();
	this.bu = r;
	this.r = new _g.bt(l);
	this.r.isAutomated = f;
	this.r.itemReceivedTime = h;
	this.bx = v;
	this.bo = p;
	this.bl = e ? e : "All";
	this.bi = c;
	this.u = o;
	this.bp = y;
	this.Z = "Exchange2016";
	this.br = new _j.J(this.bD);
	this.bj = s;
	this.q && this.q.q()
};
_h.bl.prototype = {
	q: null,
	bi: null,
	s: null,
	D: null,
	bv: 0,
	bG: 0,
	t: null,
	bq: null,
	be: null,
	bu: "Folder",
	r: null,
	bl: "All",
	u: null,
	bt: null,
	bs: "NoError",
	br: null,
	bk: null,
	bp: null,
	bj: !1,
	bg: null,
	bx: 0,
	k: function() {
		return this.D
	},
	f: function() {
		return this.s
	},
	j: function() {
		return this.bv
	},
	bo: !1,
	p: function(n) {
		this.bo = n;
		return n
	},
	bw: !1,
	l: function() {
		return this.bw
	},
	e: function() {
		return this.bk
	},
	n: function() {
		return this.bs
	},
	o: function() {
		return this.be
	},
	bC: function() {
		return _h.x.f(this.u.a, this.u.b, this.t)
	},
	K: function(n) {
		var u = new _g.dx(this.M(), this.br.e());
		this.q && !this.bj && (this.bg = _a.b.b(_a.a.B, "MailItemSearchAction", !0, null));
		var t = null;
		var r, i;
		(i = _h.u.b(this.r.explicitLogonUser, _g.l.a(this.t), _g.a.a().c(), r = {
			val: t
		}), t = r.val, i) && (this.r.anchorMailbox = _h.u.a(t, _g.a.a().c().bH.OrganizationDomain));
		n.e(u, this.r, this.I, this.H)
	},
	cJ: function(n) {
		this.bs = n.ResponseCode;
		if(n.RootFolder) {
			this.bp ? this.s = n.RootFolder.Groups : n.RootFolder.Items && (this.s = n.RootFolder.Items);
			this.bv = n.RootFolder.TotalItemsInView;
			this.bG = n.RootFolder.IndexedPagingOffset;
			this.be = n.SearchFolderId;
			this.bw = n.IsSearchInProgress
		} else {
			this.s = new Array(0);
			this.bv = 0
		}
		if(this.q && !this.bj) {
			this.q.n();
			var u = this.Q ? this.Q.correlationId : "";
			if(this.bg) {
				this.bg.o = u;
				_a.b.a(this.bg);
				this.bg = null
			}
			var r = _a.o.c("MailSearchBeforeRendering");
			if(r) {
				r.o = u;
				_a.o.a("MailSearchBeforeRendering")
			}
		}
		var t = n.HighlightTerms;
		if(t) {
			this.D = new Array(t.length);
			for(var i = 0; i < t.length; i++) this.D[i] = new _g.ce(t[i]);
			this.D.sort(_g.ce.a)
		}
		this.D = this.D || new Array(0)
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.q && this.q.n();
		this.bs = this.Q ? this.Q.responseCode : "ErrorInternalServerError"
	},
	bm: function() {
		var t = !1;
		if(PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(this.t, "inbox")) {
			var n = !1;
			var i = _h.bq.a(_a.n.a(), null);
			i.a() ? _g.bt.d(this.br.e()) && (n = !0) : n = !0;
			if(n && !0) {
				this.cJ(PageDataPayload.findMailFolderItem.Body.ResponseMessages.Items[0]);
				t = !!this.s
			}
			PageDataPayload.findMailFolderItem = null;
			PageDataPayload.findMailFolderItemRequest = null
		}
		return t
	},
	bH: function() {
		var n = new _g.dy(this.bq, "Shallow");
		n.ParentFolderIds = [_g.l.a(this.t)];
		n.ItemShape = this.bq;
		n.Paging = this.bk;
		n.ViewFilter = this.bl;
		n.IsWarmUpSearch = this.bj;
		n.FocusedViewFilter = this.bx;
		n.Grouping = this.bp;
		this.bu !== "None" && (n.ShapeName = this.bu);
		this.be && (n.SearchFolderId = _g.l.a(this.be));
		this.u && (n.SortOrder = this.bC());
		this.bt && (n.Restriction = this.bt);
		if(this.bi) {
			n.CategoryFilter = this.bi;
			n.AcceptPartialResults = this.bo
		}
		if(this.q) {
			n.QueryString = new _g.cz(this.q.i);
			n.QueryString.ReturnHighlightTerms = !0;
			n.QueryString.ReturnDeletedItems = !0;
			n.QueryString.ResetCache = this.q.f;
			n.QueryString.MaxResultsCount = this.q.g;
			n.QueryString.WaitForSearchComplete = this.q.l;
			n.Traversal = this.q.k ? "SoftDeleted" : "Shallow";
			n.RefinerRestriction = this.q.m;
			this.q.h && (n.SearchFolderIdentity = this.q.h);
			this.r.actionName = "Search_FindItem"
		} else this.r.actionName = _g.b.a.idToName(this.t) === "fromfavoritesenders" ? "Browse_FromFavoriteSenders" : "Browse";
		this.bi && _g.b.a.idToName(this.t) === "msgfolderroot" && (n.Traversal = "SoftDeleted");
		!this.r.explicitLogonUser && _g.bk.a(this.t) && (this.r.explicitLogonUser = _h.p.b(this.t.Id));
		this.r.actionName += "_" + this.bl;
		return n
	}
};
_h.bc = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
	this.j = [];
	_h.bc.initializeBase(this, [n]);
	_a.c.a(t, "conversations");
	_a.c.g(i, 0, "maxItemsToReturn");
	for(var b = t, d = b.length, w = 0; w < d; ++w) {
		var p = b[w];
		if(!p.ConversationId || !p.ConversationId.Id || !p.ConversationId.Id.length) {
			_j.e.c(_a.a.C, "Id is empty.");
			break
		}
	}
	this.p = t;
	this.u = i;
	this.q = s;
	this.h = f;
	this.o = "PrimaryOnly";
	this.f = l;
	this.e = a;
	var k = f === 1 || f === 2;
	this.k = k ? _h.b.h(r || _h.b.r()) : _h.b.h(r || _h.b.g());
	this.k.ExcludeBindForInlineAttachments = y;
	this.s = u;
	!!h !== h || (this.k.SeparateQuotedTextFromBody = h);
	!!c !== c || (this.k.CalculateOnlyFirstBody = c);
	this.t = _j.u.a(e) ? f === 2 ? _h.bc.b("ChronologicalNewestOnBottom") : _h.bc.b(_g.a.a().a().n()) : e;
	!!o !== o || (this.r = o)
};
_h.bc.a = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
	var g = new _g.e(t);
	g.ChangeKey = i;
	var nt = l === 1 || l === 2;
	_j.u.a(h) && (h = _g.a.a().a().n());
	var d = new _g.cF(g);
	d.SyncState = o || "";
	var k = new _h.bc(n, [d], r, f, e, l, _h.bc.b(h), c, a, w, p, v, y, b, s);
	k.l = {};
	u && (k.l[t] = u.h());
	return k
};
_h.bc.b = function(n) {
	return n === "ChronologicalNewestOnBottom" ? "DateOrderAscending" : "DateOrderDescending"
};
_h.bc.prototype = {
	u: 0,
	q: null,
	p: null,
	k: null,
	s: "Folder",
	r: !1,
	h: 0,
	l: null,
	o: 0,
	t: "TreeOrderAscending",
	f: null,
	e: null,
	D: !1,
	M: function() {
		if(this.bj()) return this.W("V2017_08_18");
		else if(this.bl()) return this.W("V2017_04_26");
		else if(this.be()) return this.W("V2016_11_10");
		else if(this.bk()) return this.W("V2016_07_13");
		else if(!this.bg()) return this.W("V2016_06_24");
		this.D = !0;
		return _h.ck.prototype.M.call(this)
	},
	bg: function() {
		return this.h === 1 || this.h === 2
	},
	bk: function() {
		return !!this.f && this.f.a().r().Enabled && !!this.e && this.e.d().b("15.01.0589.000")
	},
	be: function() {
		return !!this.f && this.f.a().Z().Enabled && !!this.e && this.e.d().b("15.01.0736.000")
	},
	bl: function() {
		return !!this.e && this.e.d().b("15.01.1085.000")
	},
	bj: function() {
		return !!this.f && this.f.o()
	},
	K: function(n) {
		var t = new _g.ez;
		t.Conversations = this.p;
		t.ItemShape = this.k;
		t.ShapeName = this.s !== "None" ? this.s : null;
		t.SortOrder = this.t;
		t.MaxItemsToReturn = this.u;
		t.FoldersToIgnore = this.bo();
		this.h === 2 && (t.ReturnSubmittedItems = !0);
		var r = "V2_75";
		var e = this.bg();
		if(e) {
			t.ReturnModernConversationItems = !0;
			r = "V2_77"
		}
		this.be() && (r = "V2016_11_03");
		(this.o === "ArchiveOnly" || this.o === "All") && (t.MailboxScope = this.o);
		var u = new _g.fV(this.M());
		u.Body = t;
		var i = "";
		this.h === 1 ? i = "ModernMail" : this.h === 2 && (i = "ModernGroup");
		var f = _g.fU.a(this.L, this.l, this.r, this.t, this.r, this.q, i);
		this.D && (f.owsVersion = r);
		n.bT(u, f, this.I, this.H)
	},
	cJ: function(n) {
		n.ResponseClass !== "Success";
		Array.add(this.j, n)
	},
	bm: function() {
		if(!PageDataPayload.getConversationItems || !_j.h.a(this.q)) return !1;
		var t = PageDataPayload.getConversationItems;
		PageDataPayload.getConversationItems = null;
		if(!t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items.length || !t.Body.ResponseMessages.Items[0] || !this.l) return !1;
		var r = t.Body.ResponseMessages.Items[0];
		var n = r.Conversation;
		if(r.ResponseClass !== "Success" || !n) return !1;
		for(var c = n.ConversationId.Id, e = this.p, l = e.length, i = 0; i < l; ++i) {
			var a = e[i];
			var f = a.ConversationId.Id;
			if(f === c) {
				var u = !1;
				var h = this.l[f];
				var s = _j.h.a(n.LastModifiedTime) ? _a.d.g : _a.d.b(n.LastModifiedTime);
				var o = s.h();
				if(!(h > o) && !this.bi(n)) {
					this.cJ(r);
					u = !0
				}
				return u
			}
		}
		return !1
	},
	bi: function(n) {
		if(n.ConversationNodes)
			for(var e = n.ConversationNodes, l = e.length, t = 0; t < l; ++t) {
				var o = e[t];
				if(o.Items)
					for(var s = o.Items, a = s.length, i = 0; i < a; ++i) {
						var u = s[i];
						if(u.Attachments)
							for(var f = u.Attachments, c = f.length, r = 0; r < c; ++r) {
								var h = f[r];
								if(!h.IsInline) return !0
							}
					}
			}
		return !1
	},
	bo: function() {
		var t = null;
		var i = this.h === 2;
		var n = _g.b.a.nameToId("outbox");
		!i && n && (t = [n]);
		return t
	}
};
_h.bZ = function(n, t, i, r, u, f, e, o) {
	_h.bZ.initializeBase(this, [n]);
	this.j = t;
	this.D = o;
	this.h = i || _h.b.f();
	this.r = r;
	this.be = f;
	this.q = e;
	if(this.be) {
		this.s = new _g.cY;
		this.s.UserRoles = ["MailboxSearch"];
		this.h.InlineImageUrlTemplate = _g.B.p()
	} else this.h = _h.b.h(this.h);
	this.k = new _g.bz(n);
	this.k.clientStoreItem = u;
	this.t = new _j.q
};
_h.bZ.prototype = {
	q: null,
	j: null,
	D: null,
	h: null,
	r: "Folder",
	s: null,
	k: null,
	l: null,
	be: !1,
	t: null,
	M: function() {
		return this.W("Exchange2015")
	},
	bg: function() {
		return this.t.d.length > 0 ? _h.d.a().a(this.t.d[0]) : null
	},
	K: function(n) {
		var t = new _g.bv(this.h);
		this.r !== "None" && (t.ShapeName = this.r);
		t.ItemIds = new Array(this.j.length);
		for(var i = 0; i < this.j.length; i++) t.ItemIds[i] = _g.e.a(this.j[i]);
		t.InternetMessageId = this.D;
		var e = new _g.bu(this.M(), t);
		this.s && (e.Header.ManagementRole = this.s);
		this.l && (this.k.actionName = this.l);
		if(!this.k.explicitLogonUser && this.j.length > 0 && _a.bK.a(this.j[0].Id)) this.k.explicitLogonUser = _h.p.b(null);
		else {
			var r = null;
			var f, u;
			(u = _h.u.c(this.k.explicitLogonUser, this.j[0], _g.a.a().c().bH.MailboxGuid, f = {
				val: r
			}), r = f.val, u) && (this.k.anchorMailbox = _h.u.a(r, _g.a.a().c().bH.OrganizationDomain))
		}
		n.a(e, this.k, this.I, this.H)
	},
	cJ: function(n) {
		_j.e.a(_a.a.C, "GetItemAction: ProcessResponseMessage");
		var i = n.Items[0];
		var t = _h.d.a().a(i.ItemId.Id);
		if(t) {
			_j.e.a(_a.a.C, "GetItemAction: Item found in cache");
			t.k(i);
			_h.c.g(t)
		} else {
			_j.e.a(_a.a.C, "GetItemAction: Item not found in cache");
			t = _g.f.a(i);
			_h.d.a().b(t.bH.ItemId.Id, t)
		}
		if(t) {
			_j.e.a(_a.a.C, "GetItemAction: Add ItemId to returnedIds");
			this.t.c(t.bH.ItemId.Id)
		}
	}
};
_h.M = function(n, t, i, r, u, f, e, o) {
	_h.M.initializeBase(this, [n, t, i, r, u, f, e, o]);
	this.k.requireNormalizedBody = !0;
	this.l = "GetMailItem";
	for(var c = t, l = c.length, s = 0; s < l; ++s) {
		var h = c[s];
		if(!h || !h.Id || !h.Id.length) {
			_j.e.c(_a.a.C, "GetMailItem itemId.Id is null.");
			break
		}
	}
};
_h.M.prototype = {
	e: !0,
	M: function() {
		if(this.q) {
			if(this.q.o()) return this.W("V2017_08_18");
			if(this.q.a().Z().Enabled) return this.W("V2016_11_10");
			if(this.q.a().r().Enabled) return this.W("V2016_07_13")
		}
		return this.W("V2016_06_24")
	},
	cJ: function(n) {
		var i = n.Items[0];
		var t = _h.d.a().a(i.ItemId.Id);
		if(t) {
			if(!i.UniqueBody && t.cf()) {
				i.UniqueBody = new _g.s(t.cf().a(), t.cf().bH.Value);
				i.UniqueBody.IsTruncated = t.cf().bH.IsTruncated
			}
			this.e && !i.ErrorProperties && t.ft() && (i.ErrorProperties = t.ft().e());
			!i.QuotedTextList && t.dt() && (i.QuotedTextList = t.dt().e())
		}
		_h.bZ.prototype.cJ.call(this, n)
	},
	bm: function() {
		if(!PageDataPayload.getMailFolderItem) return !1;
		var t = PageDataPayload.getMailFolderItem;
		PageDataPayload.getMailFolderItem = null;
		if(!t.Body || !t.Body.ResponseMessages || !t.Body.ResponseMessages.Items || !t.Body.ResponseMessages.Items[0]) return !1;
		var n = t.Body.ResponseMessages.Items[0];
		if(n.ResponseClass !== "Success" || !n.Items || !n.Items[0]) return !1;
		for(var f = n.Items[0].ItemId.Id, u = this.j, o = u.length, i = 0; i < o; ++i) {
			var e = u[i];
			if(e.Id === f) {
				var r = !1;
				PageDataPayload.getMailFolderItem = null;
				if(!this.f(n.Items[0])) {
					this.cJ(n);
					r = !0
				}
				return r
			}
		}
		return !1
	},
	f: function(n) {
		if(n.Attachments)
			for(var i = n.Attachments, u = i.length, t = 0; t < u; ++t) {
				var r = i[t];
				if(!r.IsInline) return !0
			}
		return !1
	}
};
_h.eb = function(n, t, i, r, u, f, e) {
	_h.eb.initializeBase(this, [n, t, i, r, u, f, e, null])
};
_h.eb.prototype = {
	cJ: function(n) {}
};
_h.cP = function(n) {
	_h.cP.initializeBase(this);
	this.f = n
};
_h.cP.prototype = {
	f: null,
	e: null,
	h: null,
	K: function(n) {
		var r = new _g.bv(_h.b.f());
		r.ShapeName = "MessageDetails";
		r.ItemIds = [new _g.e(this.f.Id)];
		var t = new _g.bz(this.L);
		t.clientStoreItem = 0;
		var i = null;
		var f, u;
		(u = _h.u.c(t.explicitLogonUser, this.f, _g.a.a().c().bH.MailboxGuid, f = {
			val: i
		}), i = f.val, u) && (t.anchorMailbox = _h.u.a(i, _g.a.a().c().bH.OrganizationDomain));
		var e = new _g.bu(this.M(), r);
		n.a(e, t, this.I, this.H)
	},
	cJ: function(n) {
		var t = n.Items[0];
		this.h = t.ItemId.Id;
		t.ExtendedProperty && (this.e = t.ExtendedProperty[0].Value)
	}
};
_h.ca = function(n, t, i, r, u, f, e, o, s, h, c, l) {
	this.bC = Function.createDelegate(this, this.bG);
	this.h = this.n;
	_h.ca.initializeBase(this, [s]);
	_h.x.i(i);
	this.bg = n;
	this.q = t;
	this.bp = i;
	this.r = new _g.bX(s);
	this.r.isAutomated = r;
	this.r.itemLastDeliveryTime = e;
	this.bj = u ? u : "All";
	this.bi = o;
	this.bv = c;
	this.t = f;
	this.bl = h;
	this.bk = l;
	this.Z = "V2016_02_03";
	this.bq = new _j.J(this.bC);
	this.q && this.q.q()
};
_h.ca.prototype = {
	bl: null,
	bi: null,
	D: null,
	bg: null,
	u: null,
	q: null,
	bj: "All",
	bv: 0,
	t: null,
	bx: 0,
	bD: 0,
	br: "NoError",
	s: null,
	r: null,
	bq: null,
	bp: null,
	be: null,
	k: function() {
		return this.u
	},
	j: function() {
		return this.bx
	},
	bk: !1,
	p: function(n) {
		this.bk = n;
		return n
	},
	e: function() {
		return this.bp
	},
	f: function() {
		return this.D
	},
	n: function() {
		return this.br
	},
	o: function() {
		return this.s
	},
	bu: !1,
	l: function() {
		return this.bu
	},
	bm: function() {
		var r = !1;
		if(PageDataPayload.findConversation && _g.b.a.doesIdEqualName(this.bg, "inbox")) {
			var n = !1;
			var f = _h.bq.a(_a.n.a(), null);
			if(f.a()) {
				var t;
				var i, u;
				(u = _g.bX.b(this.bq.e(), this.r, i = {
					val: t
				}), t = i.val, u) && (n = !0)
			} else n = !0;
			if(n && !0) {
				this.cJ(PageDataPayload.findConversation.Body);
				r = !!this.D
			}
			PageDataPayload.findConversation = null;
			PageDataPayload.findConversationRequest = null
		}
		return r
	},
	K: function(n) {
		var t = new _g.fH(this.M(), this.bq.e());
		this.q && (this.be = _a.b.b(_a.a.B, "MailConversationSearchActionTime", !0, null));
		n.bw(t, this.r, this.I, this.H)
	},
	cJ: function(n) {
		if(this.q) {
			var i = this.Q ? this.Q.correlationId : "";
			if(this.be) {
				this.be.o = i;
				_a.b.a(this.be);
				this.be = null
			}
			var t = _a.o.c("MailSearchBeforeRendering");
			if(t) {
				t.o = i;
				_a.o.a("MailSearchBeforeRendering")
			}
		}
		this.br = n.ResponseCode;
		this.bH(n.Conversations, n.HighlightTerms, n.TotalConversationsInView, n.IndexedOffset, n.SearchFolderId, n.IsSearchInProgress)
	},
	V: function() {
		_a.dm.prototype.V.call(this);
		this.q && this.q.n();
		this.br = this.Q ? this.Q.responseCode : "ErrorInternalServerError"
	},
	bG: function() {
		var n = new _g.et(_g.l.c(this.bg));
		n.ConversationShape = _h.b.P();
		n.ShapeName = this.bw();
		n.Paging = this.bp;
		n.ViewFilter = this.bj;
		n.FocusedViewFilter = this.bv;
		this.bl && (n.ConversationIdFilter = this.bl);
		this.s && (n.SearchFolderId = _g.l.a(this.s));
		this.t && (n.SortOrder = _h.x.e(this.t.a, this.t.b));
		if(this.bi) {
			n.CategoryFilter = this.bi;
			n.AcceptPartialResults = this.bk
		}
		if(this.q) {
			n.QueryString = new _g.cz(this.q.i);
			n.QueryString.ReturnHighlightTerms = !0;
			n.QueryString.ReturnDeletedItems = !0;
			n.QueryString.ResetCache = this.q.f;
			n.QueryString.MaxResultsCount = this.q.g;
			n.QueryString.WaitForSearchComplete = this.q.l;
			n.Traversal = this.q.k ? "Deep" : "Shallow";
			n.RefinerRestriction = this.q.m;
			this.q.h && (n.SearchFolderIdentity = this.q.h);
			this.t.a === "ConversationLastDeliveryTime" && this.t.b === "Descending" && (n.QueryString.OptimizedSearch = !0);
			this.r.actionName = this.bo(!0)
		} else this.r.actionName = this.bo(!1);
		this.bi && _g.b.a.idToName(this.bg) === "msgfolderroot" && (n.Traversal = "Deep");
		this.r.actionName += "_" + this.bj;
		return n
	},
	bH: function(n, t, i, r, u, f) {
		this.D = n ? n : new Array(0);
		if(t) {
			this.u = new Array(t.length);
			for(var e = 0; e < t.length; e++) this.u[e] = new _g.ce(t[e]);
			this.u.sort(_g.ce.a)
		}
		this.u = this.u || new Array(0);
		this.bx = i;
		this.bD = r;
		this.s = u;
		this.bu = f;
		this.q && this.q.n()
	},
	bw: function() {
		return this.q ? "ConversationUberListView" : _h.b.Q(this.bg, this.t)
	},
	bo: function(n) {
		return n ? "Search_FindConversation" : "Browse"
	}
};
_h.bL = function(n, t, i, r) {
	_h.bL.initializeBase(this);
	this.j = n;
	this.f = t;
	this.l = i;
	this.k = r
};
_h.bL.prototype = {
	k: 0,
	j: null,
	f: null,
	l: "Ascending",
	h: null,
	e: null,
	K: function(n) {
		var t = new _g.gx(this.j, "PreviewOnly", "Next");
		_j.h.a(this.f) || "allmailboxes" === this.f || (t.MailboxId = this.f);
		t.PageSize = this.k;
		var i = new _g.bA(this.l);
		i.Path = _h.bL.a;
		t.SortBy = i;
		n.hN(new _g.gw(this.M(), t), null, this.I, this.H)
	},
	cJ: function(n) {
		this.h = n.SearchMailboxesResult.ItemCount ? n.SearchMailboxesResult.Items : [];
		this.e = [new _g.dE("allmailboxes", _bms.E.Z, n.SearchMailboxesResult.ItemCount, n.SearchMailboxesResult.Size)];
		var i = n.SearchMailboxesResult.MailboxStats;
		if(i)
			if(i.length <= 500) {
				var r;
				this.e = (r = this.e).concat.apply(r, i)
			} else {
				var u = this.e[0];
				this.e = new Array(501);
				this.e[0] = u;
				for(var t = 0; t < 500; t++) this.e[t + 1] = i[t]
			}
	}
};
_h.dr = function() {};
_h.dr.registerInterface("_h.dr");
_h.fe = function() {};
_h.cR = function() {};
_h.cR.registerInterface("_h.cR");
_h.ff = function() {};
_h.bB = function() {};
_h.bB.registerInterface("_h.bB");
_h.bd = function() {};
_h.bd.prototype = {
	none: 0,
	connnectorMessage: 1,
	explicitMessageCard: 2,
	cardHighlight: 5,
	adaptiveCard: 6,
	listViewExtractedAction: 7
};
_h.bd.registerEnum("_h.bd", !1);
_h.fg = function() {};
_h.v = function() {};
_h.v.d = function() {
	if(!_h.v.a) {
		_h.v.a = new _g.O;
		_h.v.a.PropertyName = "ExplicitMessageCard";
		_h.v.a.DistinguishedPropertySetId = "Common";
		_h.v.a.PropertyType = "String"
	}
	return _h.v.a
};
_h.v.e = function() {
	if(!_h.v.c) {
		_h.v.c = new _g.O;
		_h.v.c.PropertyName = "ShowContextualSuggestion";
		_h.v.c.DistinguishedPropertySetId = "Common";
		_h.v.c.PropertyType = "Boolean"
	}
	return _h.v.c
};
_h.v.j = function() {
	if(!_h.v.b) {
		_h.v.b = new _g.O;
		_h.v.b.PropertyName = "IOpenTypedFacet.Com.Microsoft.Graph.MessageCard";
		_h.v.b.PropertySetId = "{E550B918-9859-47B9-8095-97E4E72F1926}";
		_h.v.b.PropertyType = "String"
	}
	return _h.v.b
};
_h.v.m = function(n, t, i) {
	if(n && t && i)
		for(var r = 0; r < t.length; r++)
			if(t[r].toLowerCase() === i.toLowerCase()) return !0;
	return !1
};
_h.v.f = function(n, t, i) {
	var r = 0;
	if(!n) return r;
	var u = i ? _h.v.h(i) : null;
	_h.v.n(n, t) ? r = 1 : _h.v.k(n, t) ? r = 5 : _h.v.o(n, t) && (r = 2);
	return r
};
_h.v.g = function(n) {
	if(n && n.bV()) {
		var t = _g.c.a(n.bV().e(), _h.v.j());
		if(t) return t.bH.Value
	}
	return null
};
_h.v.h = function(n) {
	if(_j.h.a(n)) return null;
	var t = n.split("@");
	return !t || t.length !== 2 ? null : t[1].toLowerCase()
};
_h.v.i = function(n, t) {
	if(n && n.a().cp().Enabled && t && t.ExtendedProperty)
		for(var f = t.ExtendedProperty, e = f.length, r = 0; r < e; ++r) {
			var u = f[r];
			var i = u.ExtendedFieldURI;
			if(i && i.PropertyName === _h.v.d().PropertyName && i.PropertyType === _h.v.d().PropertyType && i.DistinguishedPropertySetId === _h.v.d().DistinguishedPropertySetId) return u.Value.toLowerCase() === "true"
		}
	return !1
};
_h.v.l = function(n) {
	if(n && n.bV()) {
		var t = _g.c.a(n.bV().e(), _h.v.d());
		if(t) return t.bH.Value.toLowerCase() === "true"
	}
	return !1
};
_h.v.k = function(n, t) {
	if(!n || !t) return !1;
	if(n.a().hv().Enabled && t && t.bV()) {
		var i = _g.c.a(t.bV().e(), _h.v.e());
		if(i) return i.bH.Value.toLowerCase() === "true"
	}
	return !1
};
_h.v.n = function(n, t) {
	return n && t ? n.a().ev().Enabled && _g.f.s(t.bH.ItemClass) : !1
};
_h.v.o = function(n, t) {
	return n && t ? n.a().cp().Enabled && _h.v.l(t) : !1
};
_h.fi = function() {};
_h.fi.registerInterface("_h.fi");
_h.bO = function() {};
_h.bO.registerInterface("_h.bO");
_h.eg = function(n, t) {
	this.l = Function.createDelegate(this, this.s);
	_h.eg.initializeBase(this);
	this.g = {};
	t.b(_a.cU, this.l);
	this.h = {};
	this.h.MruTableCacheByTableType_Default = n;
	this.i = []
};
_h.eg.prototype = {
	g: null,
	i: null,
	h: null,
	b: function(n) {
		this.bB("OnMruTableRemoved", n)
	},
	e: function(n) {
		n.K() ? this.k(!0) : n.dispose();
		return !this.n(n)
	},
	f: function(n) {
		var t = this.d(n);
		if(t) {
			this.q(n, t);
			this.bK("OnMruTableRemoved", t, null)
		}
	},
	d: function(n) {
		for(var r = this.j(n), t = 0; t < r.length; t++) {
			var i = r[t];
			if(i.c().a() === n.a()) return i
		}
		return null
	},
	j: function(n) {
		var t = this.p(Object.getType(n));
		return this.m(t)
	},
	a: function(n) {
		n && this.r(n, this.j(n.c()))
	},
	c: function(n, t) {
		Array.add(this.i, n);
		this.h[n.getName()] = t
	},
	s: function(n) {
		this.k(!1)
	},
	t: function(n, t, i) {
		var r = 2147483647;
		i && (r = n.length - t);
		for(var u = n.length - 1; n.length > 0 && r > 0;) {
			var f = n[u];
			this.f(f.c());
			u--;
			r--
		}
	},
	r: function(n, t) {
		if(n && n.K()) {
			var i = Array.indexOf(t, n);
			i >= 0 && Array.removeAt(t, i);
			Array.insert(t, 0, n);
			i < 0 && this.k(!0)
		}
	},
	n: function(n) {
		var t = this.j(n.c());
		return Array.contains(t, n)
	},
	q: function(n, t) {
		Array.remove(this.j(n), t)
	},
	m: function(n) {
		var t = this.g[n];
		if(!t) {
			t = [];
			this.g[n] = t
		}
		return t
	},
	k: function(n) {
		var r = this.g;
		for(var i in r) {
			var t = {
				key: i,
				value: r[i]
			};
			var u = this.m(t.key);
			this.t(u, this.o(t.key), n)
		}
	},
	p: function(n) {
		for(var t = 0; t < this.i.length; t++) {
			var i = this.i[t];
			if(n.implementsInterface(i)) return i.getName()
		}
		return "MruTableCacheByTableType_Default"
	},
	o: function(n) {
		return this.h[n]
	}
};
_h.ee = function(n, t) {
	this.e = n;
	this.c = t || n;
	this.a = 0;
	this.b = 0
};
_h.ee.prototype = {
	e: null,
	c: null,
	a: 0,
	b: 0,
	d: 0,
	f: function(n) {
		n ? this.a++ : this.b++;
		this.g()
	},
	g: function() {
		var n = this.a + this.b;
		this.d = n ? this.a / n : 0
	}
};
_h.c = function() {};
_h.c.t = function(n, t) {
	for(var i = 0; i < t.length; i++) {
		var r = n.eK(t[i].a);
		n.eI(t[i].a, t[i].b);
		n.dB(1, new _a.dk(n, t[i].a.a, r, t[i].b))
	}
};
_h.c.a = function(n, t, i, r, u) {
	var f = new _a.dk(n, t, i, r);
	u(n, r);
	n.dB(1, f)
};
_h.c.c = function(n, t, i, r, u, f, e) {
	for(var h = new _a.dk(null, null, null, null), o = 0; o < i.length; o++) {
		var s = u(i[o]);
		_h.c.a(i[o], r, s, f, e)
	}
};
_h.c.I = function(n, t, i) {
	t.e(function(r, u) {
		n.dB(1, new _a.dk(n, i, null, t))
	})
};
_h.c.g = function(n) {
	n.dB(4, new _a.jh)
};
_h.c.D = function(n) {
	n.dB(2, new _a.eE);
	_h.c.r(n)
};
_h.c.d = function(n, t) {
	var r = new _a.eE;
	!!t !== t || (r.a = t);
	for(var i = 0; i < n.length; i++) {
		n[i].dB(2, r);
		_h.c.r(n[i])
	}
};
_h.c.e = function(n, t) {
	var u = new _a.eE;
	!!t !== t || (u.a = t);
	for(var i = 0; i < n.length; i++) {
		var r = _h.d.a().a(n[i].Id);
		if(r) {
			var f = r;
			f.dB(2, u);
			_h.c.r(r)
		}
	}
};
_h.c.r = function(n) {
	if(_g.i.isInstanceOfType(n) && n.bH.IsDraft && n.bH.ConversationId)
		for(var h = n.bH.ConversationId, e = _h.g.a().d(_h.E), u = 0; u < e.length; u++) {
			var t = e[u].l(h.Id);
			if(t)
				for(var s = t.c().b(), r = s - 1; r >= 0; r--)
					if(t.c().a(r).Id === n.bH.ItemId.Id && t.e()) {
						var f = t.c().t();
						f.o(r);
						_h.c.a(t, "GlobalItemIds", t.c(), f, function(n, t) {
							n.bk(t)
						});
						var i = t.e();
						var o = i.s(function(t) {
							return t.Id === n.bH.ItemId.Id
						});
						if(o < i.b()) {
							i.o(o);
							_h.c.a(t, "DraftItemIds", i, i, function(n, t) {})
						}
					}
		}
};
_h.c.p = function(n, t, i, r, u) {
	var f = _h.d.a().a(t.bH.ConversationId.Id);
	f || (f = u.a(n, t.bH.ConversationId));
	_h.c.K(f, t, n, r);
	_h.c.u(t.bH.ConversationId, i, f);
	return f
};
_h.c.x = function(n, t) {
	if(t) {
		var r = _h.g.a().a(t);
		if(r)
			for(var i = 0; i < r.length; i++) {
				var u = r[i];
				_h.F.isInstanceOfType(u) ? r[i].R(n) : _h.cx.isInstanceOfType(u) && r[i].l(n)
			}
	}
};
_h.c.b = function(n, t, i) {
	t = t || _h.g.a();
	var r = t.g(n);
	if(!r) {
		r = i(n);
		t.f(r)
	}
	return r
};
_h.c.j = function(n, t, i) {
	var u = _h.g.a();
	var e = u.j(n);
	var r = u.g(n);
	i.val = !1;
	if(r) {
		i.val = !0;
		e && u.i(r)
	} else {
		var f = null;
		_h.bI.isInstanceOfType(n) && (f = n.d());
		_h.c.q(_h.E, n.b(), f);
		r = t(n);
		u.f(r);
		PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(n.b(), "inbox") && (i.val = !0)
	}
	return r
};
_h.c.w = function(n, t, i) {
	var u = _h.g.a();
	var e = u.j(n);
	var r = u.g(n);
	i.val = !1;
	if(r) {
		i.val = !0;
		e && u.i(r)
	} else {
		var f = null;
		f = n.c();
		_h.c.q(_h.E, n.b(), f);
		r = t(n);
		u.f(r);
		PageDataPayload.findMailFolderItem && _g.b.a.doesIdEqualName(n.b(), "inbox") && (i.val = !0)
	}
	return r
};
_h.c.m = function(n, t, i, r) {
	var f = _h.g.a();
	var e = f.j(n);
	var u = f.g(n);
	r.val = !1;
	if(u) {
		r.val = !0;
		e && f.i(u)
	} else {
		_h.c.q(_h.F, n.b(), n.d());
		u = i(n, t);
		f.f(u);
		PageDataPayload.findConversation && _g.b.a.doesIdEqualName(n.b(), "inbox") && (r.val = !0)
	}
	return u
};
_h.c.v = function(n, t, i, r, u) {
	var e = _h.g.a();
	var f = e.g(n);
	if(f) u.val = !0;
	else {
		f = r(n, t, i);
		e.f(f);
		u.val = !1
	}
	return f
};
_h.c.F = function(n, t, i) {
	var u = _h.g.a();
	var r = u.g(n);
	if(!r) {
		_h.c.J(n.b());
		r = i(n, t);
		u.f(r)
	}
	return r
};
_h.c.i = function(n, t) {
	var r = _h.g.a().a(t);
	if(r)
		for(var i = 0; i < r.length; i++) n.isInstanceOfType(r[i]) && r[i].O()
};
_h.c.f = function(n, t) {
	return _h.c.H(n, t, function(n, t) {
		return n.f(t)
	})
};
_h.c.E = function(n, t) {
	if(!t || !t.Id || !n || !n.length) return null;
	var r = _h.g.a().a(t);
	if(r)
		for(var i = 0; i < r.length; i++)
			if(_h.I.isInstanceOfType(r[i])) return r[i].X(n);
	return null
};
_h.c.k = function(n, t) {
	if(n && n.Id) {
		var r = _h.g.a().d(_h.I);
		if(r)
			for(var i = 0; i < r.length; i++) r[i].bd(n.Id, t);
		_h.c.e([n])
	}
};
_h.c.h = function(n, t) {
	if(n && n.Id) {
		var r = _h.g.a().d(_h.I);
		if(r)
			for(var i = 0; i < r.length; i++) r[i].V(n.Id, t)
	}
};
_h.c.z = function(n) {
	if(n && n.Id) {
		var i = _h.g.a().a(_g.b.a.nameToId("drafts"));
		if(i)
			for(var t = 0; t < i.length; t++) {
				var r = i[t];
				_h.F.isInstanceOfType(r) && r.l(n, !1)
			}
	}
};
_h.c.A = function(n, t) {
	n.dg(t);
	var s = _h.d.a().a(n.bH.ItemId.Id);
	if(s) {
		var o = s;
		_h.c.a(o, "IsQueuedForSubmission", o.bw, t, function(n, t) {
			n.dg(t)
		})
	} else _h.d.a().b(n.bH.ItemId.Id, n);
	for(var h = _h.g.a().d(_h.F), f = 0; f < h.length; f++) {
		var i = h[f].P(n.bH.ItemId.Id);
		if(i && _g.i.isInstanceOfType(i)) {
			var c = i;
			_h.c.a(c, "IsQueuedForSubmission", c.bw, t, function(n, t) {
				n.dg(t)
			})
		}
	}
	var l = n.bH.ConversationId;
	if(l)
		for(var e = _h.g.a().d(_h.E), r = 0; r < e.length; r++) {
			var u = e[r].l(l.Id);
			u && _h.c.a(u, "QueuedDraftId", u.P, n.bH.ItemId, function(n, t) {
				n.bw(t)
			})
		}
};
_h.c.B = function(n, t, i) {
	var u = _h.d.a().a(n.ConversationId.Id);
	u.m(n, t);
	if(i) {
		var f = u.k(n.InternetMessageId);
		var r = new _g.gg;
		r.From = i.bH.From;
		r.InternetMessageId = i.bH.InternetMessageId;
		r.Preview = i.bH.Preview;
		f.m(r)
	}
};
_h.c.y = function(n) {
	var t = _h.d.a().a(n.ConversationId.Id);
	return t ? t.u(n) : _g.f.a(n)
};
_h.c.n = function(n, t) {
	var i = _h.d.a().a(n.Id);
	if(i) {
		var r = i.k(t);
		i.a().p(r, !0)
	}
};
_h.c.s = function(n, t, i) {
	var r = _h.c.l[t];
	if(!r) {
		r = new _h.ee(t, i);
		_h.c.l[t] = r
	}
	r.f(n)
};
_h.c.o = function() {
	var i = new _j.l;
	var t = _h.c.l;
	for(var n in t) {
		var r = {
			key: n,
			value: t[n]
		};
		i.a(r.value)
	}
	return i
};
_h.c.u = function(n, t, i) {
	var u = _h.g.a().a(t);
	if(u)
		for(var r = 0; r < u.length; r++) {
			var f = u[r];
			_h.E.isInstanceOfType(f) && u[r].S(n, i)
		}
};
_h.c.K = function(n, t, i, r) {
	r ? n.i(t, i, function() {
		r(n)
	}) || r(n) : n.i(t, i, null)
};
_h.c.J = function(n) {
	var r = _h.g.a();
	var t = r.a(n);
	if(t && t.length > 0)
		for(var i = 0; i < t.length; i++) _h.I.isInstanceOfType(t[i]) && r.m(t[i])
};
_h.c.q = function(n, t, i) {
	var e = _h.g.a();
	var u = e.a(t);
	if(u)
		for(var r = 0; r < u.length; r++) {
			var o = u[r];
			if(_h.I.isInstanceOfType(o)) {
				var f = o;
				n.isInstanceOfType(f) && f.W() === i && e.p(f)
			}
		}
};
_h.c.H = function(n, t, i) {
	if(!t || !t.Id || !n || !n.length) return null;
	var u = _h.g.a().a(t);
	if(u)
		for(var e = n[0], f = 0; f < u.length; f++) {
			var r = u[f];
			if(_h.E.isInstanceOfType(r) && _g.p.isInstanceOfType(e) || _h.F.isInstanceOfType(r) && _g.f.isInstanceOfType(e) || _h.cx.isInstanceOfType(r) && _g.fe.isInstanceOfType(e)) return i(r, n)
		}
	return null
};
_h.c.G = function(n) {
	_h.d.a().e(n.Id)
};
_h.c.C = function(n) {
	_h.d.a().c(n.Id)
};
_h.cS = function(n) {
	this.d = Function.createDelegate(this, this.h);
	this.c = new Sys.EventHandlerList;
	this.e = n
};
_h.cS.prototype = {
	e: null,
	b: function(n, t, i) {
		this.c.addHandler(n + "." + _a.cR.toString(t), i)
	},
	a: function(n, t, i) {
		this.c.removeHandler(n + "." + _a.cR.toString(t), i)
	},
	f: function(n) {
		n.add_onCacheOperation(this.d)
	},
	g: function(n) {
		n.remove_onCacheOperation(this.d)
	},
	h: function(n, t) {
		var u = this.e(n);
		var f = u + "." + _a.cR.toString(t.d);
		var i = this.c.getHandler(f);
		if(i) {
			var r = i;
			r(n, t)
		}
	}
};
_h.d = function() {
	this.h = !_a.g.i;
	this.g = {};
	var n = this;
	this.f = new _h.cS(function(n) {
		return n.bH.ItemId.Id
	})
};
_h.d.a = function() {
	_h.d.b || (_h.d.b = new _h.d);
	return _h.d.b
};
_h.d.prototype = {
	g: null,
	f: null,
	h: !1,
	a: function(n) {
		return n in this.g ? this.g[n].a : null
	},
	d: function(n) {
		return n in this.g
	},
	c: function(n) {
		var t = this.g[n];
		if(t && !(t.b = t.b - 1)) {
			delete this.g[n];
			if(_h.bO.isInstanceOfType(t.a)) {
				_g.f.isInstanceOfType(t.a) && this.f.g(t.a);
				t.a.z()
			}
		}
	},
	e: function(n) {
		var t = this.g[n];
		t && (t.b = t.b + 1);
		return !!t
	},
	b: function(n, t) {
		if(!this.h) return !1;
		if(this.d(n)) throw Error.invalidOperation("ItemModel already in cache");
		if(!t) throw Error.argumentNull("item");
		if(!n) throw Error.argumentNull("itemId");
		var i = new _h.ef;
		i.a = t;
		i.b = 1;
		i.c = n;
		_g.f.isInstanceOfType(t) && this.f.f(t);
		this.g[n] = i;
		_h.bO.isInstanceOfType(t) && t.Q();
		return !0
	}
};
_h.ef = function() {};
_h.ef.prototype = {
	b: 0,
	c: null,
	a: null
};
_h.g = function(n, t, i, r) {
	this.n = Function.createDelegate(this, this.q);
	this.l = !_a.g.i;
	this.e = n;
	this.c = t;
	this.h = i;
	this.k = r;
	this.h.b(this.n)
};
_h.g.c = function(n, t) {
	var i = new _h.eg(5, t);
	n && n.s() && i.c(IGroupConversationTableQuery, 3);
	var u = new _h.d;
	var r = [];
	_h.g.b = new _h.g(u, r, i, t)
};
_h.g.a = function() {
	_h.g.b || _h.g.c(null, _a.g.c());
	return _h.g.b
};
_h.g.prototype = {
	h: null,
	c: null,
	e: null,
	k: null,
	l: !1,
	a: function(n) {
		for(var r = [], t = 0; t < this.c.length; t++) {
			var i = this.c[t];
			_g.dt.a(i.c().b(), n) && Array.add(r, i)
		}
		return r
	},
	o: function(n) {
		for(var r = [], t = 0; t < this.c.length; t++) {
			var i = this.c[t];
			_g.dt.a(i.g(), n) && Array.add(r, i)
		}
		return r
	},
	g: function(n) {
		var t = this.e.a(n.a());
		t || (t = this.r(n));
		this.h.a(t);
		return t
	},
	j: function(n) {
		return this.e.d(n.a())
	},
	i: function(n) {
		var t = this.e.e(n.c().a());
		t && this.h.a(n);
		return t
	},
	f: function(n) {
		if(!this.l) return !1;
		_a.c.a(n, "table");
		this.e.b(n.c().a(), n);
		Array.contains(this.c, n) || Array.add(this.c, n);
		this.h.a(n);
		this.k.a(_h.dl, new _h.dl(n));
		return !0
	},
	m: function(n) {
		this.b(n);
		this.p(n)
	},
	p: function(n) {
		this.h.f(n.c())
	},
	b: function(n) {
		if(this.e.d(n.c().a())) {
			this.e.c(n.c().a());
			this.e.d(n.c().a()) || this.h.e(n) && Array.remove(this.c, n)
		}
	},
	d: function(n) {
		for(var r = [], t = 0; t < this.c.length; t++) {
			var i = this.c[t];
			i && n.isInstanceOfType(i) && Array.add(r, i)
		}
		return r
	},
	r: function(n) {
		var t = this.h.d(n);
		t && this.f(t);
		return t
	},
	q: function(n) {
		if(!this.e.d(n.c().a())) {
			Array.remove(this.c, n);
			n.dispose()
		}
	}
};
var IGroupConversationTableQuery = function() {};
IGroupConversationTableQuery.registerInterface("IGroupConversationTableQuery");
var IConversationItemParts = function() {};
IConversationItemParts.registerInterface("IConversationItemParts");
var IConversationItemPartsFactory = function() {};
IConversationItemPartsFactory.registerInterface("IConversationItemPartsFactory");
_h.E = function() {};
_h.E.registerInterface("_h.E");
_h.dc = function() {};
_h.dc.registerInterface("_h.dc");
_h.bH = function() {};
_h.bH.registerInterface("_h.bH");
_h.cx = function() {};
_h.cx.registerInterface("_h.cx");
_h.fB = function() {};
_h.fB.registerInterface("_h.fB");
_h.F = function() {};
_h.F.registerInterface("_h.F");
_h.bI = function() {};
_h.bI.registerInterface("_h.bI");
_h.I = function() {};
_h.I.registerInterface("_h.I");
var IModernConversationItemPartsFactory = function() {};
IModernConversationItemPartsFactory.registerInterface("IModernConversationItemPartsFactory");
var IOutstandingComposeContext = function() {};
IOutstandingComposeContext.registerInterface("IOutstandingComposeContext");
_h.fC = function() {};
_h.fC.registerInterface("_h.fC");
var IThreadedConversationItemPartsFactory = function() {};
IThreadedConversationItemPartsFactory.registerInterface("IThreadedConversationItemPartsFactory");
_h.dH = function(n, t, i) {
	_h.dH.initializeBase(this, [n, t]);
	this.r = i;
	this.P(15, 10, 10, 5)
};
_h.dH.prototype = {
	r: null,
	C: function() {
		return _a.a.S
	},
	H: function(n, t) {
		return this.r.a(this.p, n)
	},
	s: function(n) {
		return n.bH.ConversationId
	},
	L: function(n, t, i) {
		n.d() ? i && i() : n.w(t, i);
		return !0
	}
};
_h.dI = function(n) {
	this.e = n
};
_h.dI.prototype = {
	e: null,
	c: function() {
		return this.e
	},
	b: function(n) {
		return n.ConversationId.Id
	},
	d: function(n) {
		return n.InstanceKey
	}
};
_h.x = function() {};
_h.x.b = function() {
	_h.x.c || (_h.x.c = new _h.cS(function(n) {
		return n.bH.ConversationId.Id
	}));
	return _h.x.c
};
_h.x.a = function(n, t) {
	var i = new _g.L("Beginning");
	i.Offset = n;
	i.MaxEntriesReturned = t;
	return i
};
_h.x.i = function(n) {
	n ? _g.L.isInstanceOfType(n) && n.Offset < 0 && _j.e.c(_a.a.dw, "Negative page offset is invalid for a Find request.") : _j.e.c(_a.a.dw, "PageView for a Find request cannot be null")
};
_h.x.d = function() {
	return +new Date + ":" + Math.random()
};
_h.x.f = function(n, t, i) {
	var r;
	if(n === "DateTimeReceived" || n === "DateTimeSent" || n === "DateTimeCreated" || n === "ItemLastModifiedTime" || n === "ConversationLastModifiedTime") {
		r = new Array(1);
		r[0] = new _g.bA(t);
		r[0].Path = _h.x.g(n)
	} else {
		var f = n === "ReceivedOrRenewTime" ? t : "Descending";
		var u = "DateTimeReceived";
		i && (u = _g.C.a(i, "DateTimeReceived"));
		r = new Array(2);
		r[0] = new _g.bA(t);
		r[0].Path = _h.x.g(n);
		r[1] = new _g.bA(f);
		r[1].Path = new _g.d(u)
	}
	return r
};
_h.x.e = function(n, t) {
	var i;
	if(n === "ConversationLastDeliveryTime") {
		i = new Array(1);
		i[0] = new _g.bA(t);
		i[0].Path = new _g.d(n)
	} else {
		var r = n === "ConversationLastDeliveryOrRenewTime" ? t : "Descending";
		i = new Array(2);
		i[0] = new _g.bA(t);
		i[0].Path = new _g.d(n);
		i[1] = new _g.bA(r);
		i[1].Path = new _g.d("ConversationLastDeliveryTime")
	}
	return i
};
_h.x.h = function(n) {
	return n === "Subject" || n === "ConversationTopic"
};
_h.x.g = function(n) {
	if(n === "Flag") {
		var i = new _g.O;
		i.PropertyTag = "0x1090";
		i.PropertyType = "Integer";
		return i
	} else if(n === "From") {
		var t = new _g.O;
		t.PropertyTag = "0x0042";
		t.PropertyType = "String";
		return t
	} else return new _g.d(n)
};
_h.ce = function() {};
_h.ce.b = function(n) {
	var i = "";
	var t = _g.x.isInstanceOfType(n) ? n : null;
	t && t.b() && t.b().Mailbox && t.b().Mailbox.Name && (i = t.b().Mailbox.Name);
	return i
};
_h.ce.c = function(n) {
	return n && n.dj() ? !n.a() : !1
};
_h.ce.a = function(n) {
	var t = n.bH.ParentFolderId ? _g.b.a.idToName(n.bH.ParentFolderId) : "none";
	switch(t) {
		case "sentitems":
			return n.cI();
		case "drafts":
			return _g.a.a().E ? n.S() : n.dR();
		case "outbox":
			return n.dR();
		case "deleteditems":
		case "recoverableitemsdeletions":
			return _g.C.c === "ItemLastModifiedTime" ? n.S() : n.cr();
		default:
			return n.cr()
	}
};
_h.cz = function() {};
_h.fN = function() {};
_h.fN.prototype = {
	none: 0,
	supportsPickerV2: 1,
	supportsCalendarFavorites: 2,
	supportsPeopleFavorites: 4
};
_h.fN.registerEnum("_h.fN", !0);
_h.bW = function() {};
_h.bW.registerInterface("_h.bW");
_h.dY = function() {};
_h.dY.registerInterface("_h.dY");
_h.dZ = function() {};
_h.dZ.registerInterface("_h.dZ");
_h.cV = function(n) {
	this.d = n
};
_h.cV.prototype = {
	d: null,
	c: function() {
		return this.d
	},
	b: function(n) {
		return n.FolderId.Id
	}
};
_h.a = function(n, t) {
	this.Y = Function.createDelegate(this, this.bJ);
	this.X = Function.createDelegate(this, this.bb);
	this.A = {};
	this.q = new _j.q;
	this.D = new _j.q;
	_h.a.initializeBase(this, [n, t || _a.g.i ? [] : [new _h.eI], null]);
	this.l = {};
	t || _a.g.i || _a.g.e().a("FolderHierarchyNotification", this.bD(), "FolderTable:FolderHierarchy", this.X, 0)
};
_h.a.d = function() {
	var n = _h.d.a().a(_h.a.C);
	if(!n) {
		n = new _j.l;
		_h.d.a().b(_h.a.C, n)
	}
	return n
};
_h.a.g = function() {
	var n = _h.d.a().a(_h.a.D);
	if(!n) {
		n = new _j.l;
		_h.d.a().b(_h.a.D, n)
	}
	return n
};
_h.a.e = function() {
	var n = _h.d.a().a(_h.a.K);
	if(!n) {
		n = new _j.l;
		_h.d.a().b(_h.a.K, n)
	}
	return n
};
_h.a.i = function() {
	var t = _g.a.a().a().bH.ArchiveFolderId;
	if(t) {
		var i = _h.a.b("msgfolderroot");
		var n = i.f(new _g.m(t));
		if(n && !_h.a.h(n)) return n
	}
	return null
};
_h.a.bq = function(n) {
	if(n) {
		var t = n;
		if(t.bH.FolderId && _g.a.a().a().bH.ArchiveFolderId !== t.bH.FolderId.Id) {
			_g.a.a().a().cl(t.bH.FolderId.Id);
			var i = new _h.eF;
			i.e = _a.bK.j(t.bH.FolderId.Id);
			i.b(function() {});
			_a.g.a.a(i)
		}
	}
	return n
};
_h.a.b = function(n) {
	var t = _h.a.bf(n);
	return t ? n === "publicfoldersroot" ? _h.c.b(t, _h.g.a(), function(n) {
		return new _h.p(n)
	}) : _h.c.b(t, _h.g.a(), function(n) {
		return new _h.a(n)
	}) : null
};
_h.a.O = function(n, t, i) {
	if(!n) return null;
	i || (t = t.toLocaleLowerCase());
	for(var u = 0, f = n.b(); u < f; u++) {
		var r = n.c(u);
		if(!i && r.bH.DisplayName.toLocaleLowerCase() === t || r.bH.DisplayName === t) return r
	}
	return null
};
_h.a.a = function(n) {
	if(!n) return null;
	for(var t, r = 0; r < _h.a.s.length; r++) {
		var u = _h.a.s[r];
		if(_g.b.a.nameToId(u)) {
			t = _h.a.b(u).f(n);
			if(t) return t
		}
	}
	for(var i = 0; i < _h.a.e().x.length; i++) {
		var f = _h.S.a(_h.a.e().x[i]);
		t = f.f(n);
		if(t) return t
	}
	return null
};
_h.a.f = function(n) {
	for(var i, t = 0; t < _h.a.s.length; t++)
		if(_g.b.a.nameToId(_h.a.s[t])) {
			var f = _h.a.b(_h.a.s[t]);
			i = f.f(n);
			if(i) return f
		}
	for(var r = 0; r < _h.a.e().x.length; r++) {
		var u = _h.S.a(_h.a.e().x[r]);
		i = u.f(n);
		if(i) return u
	}
	return null
};
_h.a.bg = function() {
	for(var t = _g.a.a().a().M(), i = t ? t.b() : 0, r = new Array(i), n = 0; n < i; n++) r[n] = new _g.m(t.a(n));
	return r
};
_h.a.z = function(n) {
	var t = new _h.ej;
	t.a(_h.a.bm);
	n && t.a(n);
	_a.g.a.a(t)
};
_h.a.ba = function() {
	if(_h.a.br()) {
		_g.a.a().a().cB(new _a.k);
		for(var n = 0, i = _h.a.d().x.length; n < i; n++) {
			var t = _h.a.d().x[n].bH.FolderId;
			_g.bk.a(t) || _g.a.a().a().M().c(t.Id)
		}
		_h.f.a(_g.a.a().a().u, _a.g.a)
	}
};
_h.a.W = function(n) {
	if(n) {
		_h.Q.a(_h.a.d(), _h.a.bh(n), _h.a.M, _h.a.M, _h.a.bk, !0);
		_h.p.m(n)
	}
};
_h.a.w = function(n) {
	for(var t = 0; t < _h.a.d().x.length; t++)
		if(_g.l.b(n, _h.a.d().x[t].bH.FolderId)) return t;
	return -1
};
_h.a.u = function(n, t) {
	t >= 0 && t < _h.a.d().x.length ? _h.a.d().t(t, n) : _h.a.d().a(n)
};
_h.a.Y = function(n) {
	for(var t = 0; t < _h.a.d().x.length; t++)
		if(n.cb(_h.a.d().x[t])) {
			_h.a.d().p(_h.a.d().x[t], !0);
			return t
		}
	return -1
};
_h.a.bl = function(n, t, i) {
	var u = _h.a.d().m(n);
	if(u >= 0) {
		var r = _h.a.w(t);
		if(r >= 0) {
			r = r === _h.a.d().x.length - 1 ? i === 1 ? r : r - 1 : r ? u < r ? i ? r : r - 1 : i ? r + 1 : r : i ? r + 1 : r;
			_h.a.d().v(u, r, n);
			return u
		}
	}
	return -1
};
_h.a.bc = function(n) {
	_h.a.e().a(n)
};
_h.a.bp = function(n) {
	for(var t = 0; t < _h.a.e().x.length; t++) {
		var i = _h.a.e().x[t];
		if(i.Mailbox.EmailAddress === n) {
			_h.a.e().n(t);
			break
		}
	}
};
_h.a.bd = function(n) {
	for(var t = 0; t < _h.a.e().x.length; t++) {
		var i = _h.a.e().x[t];
		if(i.Mailbox.EmailAddress === n) return !0
	}
	return !1
};
_h.a.be = function(n, t) {
	if(n.e) t(n);
	else {
		var i = new _h.dy;
		i.h = n;
		i.a(function(i) {
			if(!i.G && i.e)
				for(var u = i, r = 0; r < u.e.a().b(); r++)
					if(u.e.a().a(r).bH.UserId.PrimarySmtpAddress === _g.a.a().c().bH.UserEmailAddress) {
						n.e = u.e.a().a(r);
						break
					}
			t(n)
		});
		_a.g.a.a(i)
	}
};
_h.a.J = function(n, t) {
	var r = _h.a.f(n.bH.FolderId);
	var u = _h.a.f(t);
	if(r && u) {
		r.bc(n);
		var i = r.f(n.bH.ParentFolderId);
		i && _h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount - 1, function(n, t) {
			n.s(t)
		});
		n.t(t);
		u.E(n);
		i = u.f(n.bH.ParentFolderId);
		i && _h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount + 1, function(n, t) {
			n.s(t)
		})
	}
};
_h.a.h = function(n) {
	return _h.a.m(n, "deleteditems")
};
_h.a.F = function(n) {
	return _h.a.m(n, "archivedeleteditems")
};
_h.a.T = function(n) {
	return _h.a.m(n, "notes")
};
_h.a.bi = function(n) {
	return _h.a.m(n, "archivemsgfolderroot")
};
_h.a.S = function(n) {
	return _h.a.m(n, "recoverableitemsroot")
};
_h.a.m = function(n, t) {
	if(n.c()) return t === "publicfoldersroot";
	var r = _h.a.f(n.bH.FolderId);
	if(!r) return !1;
	while(n.bH.ParentFolderId) {
		var i = r.f(n.bH.ParentFolderId);
		if(i) {
			if(_g.b.a.idToName(i.bH.FolderId) === t) return !0
		} else return !1;
		n = i
	}
	return !1
};
_h.a.r = function(n) {
	if(!n) return !1;
	for(var t = 0; t < _h.a.e().x.length; t++) {
		var r = _h.S.a(_h.a.e().x[t]);
		var i = r.f(n);
		if(i) return !0
	}
	return !1
};
_h.a.E = function(n) {
	if(!n) return null;
	for(var t = 0; t < _h.a.e().x.length; t++) {
		var i = _h.a.e().x[t].Mailbox.EmailAddress;
		var u = _h.S.c(i);
		var r = u.f(n);
		if(r) return i
	}
	return null
};
_h.a.P = function(n) {
	var i = "SupervisoryReview";
	var t = _h.a.E(n);
	return t && t.startsWith(i) ? !0 : !1
};
_h.a.q = function(n, t) {
	return _g.l.b(n, t) || _h.a.G(n, t)
};
_h.a.G = function(n, t) {
	var r = _h.a.f(n);
	if(!r) return !1;
	while(n) {
		var i = r.f(n);
		if(i) {
			if(_g.l.b(t, i.bH.ParentFolderId)) return !0
		} else return !1;
		n = i.bH.ParentFolderId
	}
	return !1
};
_h.a.j = function(n) {
	return !!n && _g.u.isInstanceOfType(n) && _h.a.U(n.bH.FolderClass)
};
_h.a.p = function(n) {
	return !!n && _g.b.a.idToName(n) !== _g.bb.a
};
_h.a.V = function(n) {
	return !!n && Object.getType(n) === _g.u
};
_h.a.y = function(n) {
	return !!n && n.__type === _g.bD._dataContractName && _h.a.U(n.FolderClass)
};
_h.a.U = function(n) {
	return !n || n.startsWith("IPF.Note") || n.startsWith("IPF.StickyNote") || n.toLocaleLowerCase().startsWith("ipf.imap")
};
_h.a.Q = function(n, t, i) {
	var r = _h.a.f(n.bH.FolderId);
	return r ? _h.a.R(r.C(n.bH.ParentFolderId), t, i) : !1
};
_h.a.x = function(n, t) {
	var i = _h.a.f(n.bH.FolderId);
	return i ? _h.a.R(i.C(n.bH.FolderId), t, !1) : !1
};
_h.a.bs = function(n) {
	_h.a.o[n.Id] = !1;
	if(_g.b.a.idToName(n) === "inbox") {
		var t = _h.g.a().a(n);
		if(t && t.length > 0) {
			_h.a.o[n.Id] = !0;
			for(var i = 0; i < t.length; i++)(_h.E.isInstanceOfType(t[i]) || _h.F.isInstanceOfType(t[i])) && _h.g.a().i(t[i])
		}
	}
};
_h.a.A = function(n) {
	var r = _h.a.o[n.Id];
	delete _h.a.o[n.Id];
	if(r) {
		var t = _h.g.a().a(n);
		if(t)
			for(var i = 0; i < t.length; i++)(_h.E.isInstanceOfType(t[i]) || _h.F.isInstanceOfType(t[i])) && _h.g.a().b(t[i])
	}
};
_h.a.l = function(n) {
	return n.Id in _h.a.o
};
_h.a.X = function(n) {
	var t = new _h.dx("RefreshSingleFolderCount", !1);
	t.f = [new _g.m(n.Id)];
	t.h = new _h.bt;
	t.c(_h.a.bn);
	_a.g.a.a(t)
};
_h.a.R = function(n, t, i) {
	return !!_h.a.O(n, t, i)
};
_h.a.bf = function(n) {
	var r = _h.a.N + n;
	var t = _h.d.a().a(r);
	if(!t) {
		var u = _g.b.a.nameToId(n);
		var i = new _g.u;
		i.j(u);
		t = new _h.cr(i);
		_h.d.a().b(r, t)
	}
	return t
};
_h.a.bm = function(n) {
	var i = _h.a.b("msgfolderroot");
	if(i.bx.x.length)
		if(n.G) _j.e.c(_a.a.v, "OnLoadFavoritesCollectionCompleted failed with error {0}", n.G.message);
		else {
			var t = n.e;
			_h.a.W(t);
			_h.a.ba()
		}
};
_h.a.br = function() {
	if(_h.a.L) return !1;
	var t = _g.a.a().a().M();
	var r = _h.a.d().x.length;
	var i = t ? t.b() : 0;
	if(r !== i) return !0;
	for(var n = 0; n < i; n++)
		if(t.a(n) !== _h.a.d().x[n].bH.FolderId.Id) return !0;
	return !1
};
_h.a.M = function(n) {
	return n.bH.FolderId.Id
};
_h.a.bh = function(n) {
	for(var r = [], u = n, f = u.length, i = 0; i < f; ++i) {
		var e = u[i];
		var t = _h.a.bj(e);
		t && !t.r && Array.add(r, t)
	}
	return r
};
_h.a.bj = function(n) {
	var t = _h.a.a(n);
	t && t.x(!0);
	return t
};
_h.a.bk = function(n, t) {
	return n || t
};
_h.a.bn = function(n) {
	var r = n.e;
	var t = r[0];
	var i = _h.a.a(t.FolderId);
	i && _h.a.bb(i, t)
};
_h.a.bb = function(n, t) {
	n.l(t.TotalCount);
	_g.u.isInstanceOfType(n) && n.h(t.UnreadCount)
};
_h.a.bo = function(n) {
	_a.b.c(_a.a.v, "RefreshFolderCountsFailed")
};
_h.a.prototype = {
	l: null,
	j: null,
	t: !1,
	U: !1,
	B: !0,
	S: !0,
	T: !0,
	bD: function() {
		return _a.a.v
	},
	f: function(n) {
		return n ? n.Id in this.A ? this.A[n.Id] : this.j && _g.l.b(n, this.j.bH.FolderId) ? this.j : null : null
	},
	C: function(n) {
		var t = n.Id;
		t in this.l || (this.l[t] = new _j.l);
		return this.l[t]
	},
	H: function(n) {
		var o = n.Id;
		if(o in this.l) {
			for(var r = this.l[o], e = new Array(r.x.length), t = 0; t < r.x.length; t++) e[t] = r.x[t];
			for(var f = e, s = f.length, i = 0; i < s; ++i) {
				var u = f[i];
				this.bx.p(u, !0);
				this.q.n(u)
			}
		} else return
	},
	cd: function() {
		if(!this.t && this.B) {
			this.V(0, this.Z());
			_j.m.a().j(_a.a.v, "Folders")
		}
	},
	bu: function() {
		this.S && this.P()
	},
	P: function() {
		var t = this.l;
		for(var n in t) {
			var i = {
				key: n,
				value: t[n]
			};
			this.l[i.key].g()
		}
		this.B = !0
	},
	bW: function() {
		if(this.B && !this.t) {
			for(var n = 0; n < this.q.d.length; n++) this.E(this.q.d[n]);
			this.B = !1;
			this.S = !0
		} else this.S = !1
	},
	bM: function(n) {
		return this.R(null, n)
	},
	bG: function(n, t) {
		this.A[t.Id] = n;
		n.j(t)
	},
	bt: function(n) {
		this.A[n.bH.FolderId.Id] = n
	},
	bl: function() {
		throw Error.notImplemented("Should not invoke LazyReload for FolderTable");
	},
	eZ: function() {
		throw Error.notImplemented("Should not invoke LazyReloadFromClientNotification for FolderTable");
	},
	bv: function() {
		var i = new Array(0);
		var t = this.l;
		for(var n in t) {
			var r = {
				key: n,
				value: t[n]
			};
			Array.addRange(i, this.l[r.key].d())
		}
		return i
	},
	bs: function(n) {
		this.E(n)
	},
	bw: function(n) {
		for(var i = new Array(0), u = 0; u < _h.a.B.length && i.length < n; u++) Array.add(i, this.f(_g.b.a.nameToId(_h.a.B[u])));
		for(var f = this.q.i(), e = f.length, r = 0; r < e; ++r) {
			var t = f[r];
			if(_h.a.y(t.bH) && !_h.a.p(t.bH.FolderId) && !_h.a.h(t) && !t.r) {
				if(i.length === n) break;
				Array.add(i, t)
			}
		}
		return i
	},
	cb: function(n) {
		_a.b.c(_a.a.v, "FolderTableReload");
		this.bZ()
	},
	bN: function(n, t) {
		return this.ba(!1)
	},
	bR: function(n) {
		var t = n;
		var i = null;
		if(t.e[0]) {
			this.j = this.R(this.j, t.e[0]);
			i = t.f[0]
		} else this.cW(!0);
		this.G(this.j);
		return new _h.cV(i)
	},
	fb: function(n) {
		var t = n;
		this.q.c(t);
		t.bH.FolderId && (this.A[t.bH.FolderId.Id] = t)
	},
	fc: function() {
		this.cc() && this.V(0, this.Z())
	},
	fd: function(n) {
		var t = n;
		this.bc(t);
		this.q.n(t);
		t.bH.FolderId && delete this.A[t.bH.FolderId.Id]
	},
	bS: function(n, t) {
		var i = n;
		var r = "";
		i.bH.ParentFolderId && i.bH.ParentFolderId.Id && (r = i.bH.ParentFolderId.Id);
		_h.a.y(i.bH) && _a.m.e(_g.j, i, t);
		if(r !== "" && r !== i.bH.ParentFolderId.Id) {
			this.l[r] && this.l[r].p(i, !0);
			this.l[i.bH.ParentFolderId.Id].a(i)
		}
	},
	R: function(n, t) {
		n = _a.m.e(_g.j, n, t);
		return n
	},
	G: function(n) {
		switch(n.a()) {
			case "msgfolderroot":
				n.f(_g.a.a().c().bH.UserDisplayName);
				n.y(!1);
				break;
			case "archivemsgfolderroot":
				n.f(_g.a.a().c().bH.ArchiveDisplayName);
				n.y(!0);
				break;
			default:
				break
		}
	},
	E: function(n) {
		var t = n.bH.ParentFolderId.Id;
		t in this.l || (this.l[t] = new _j.l);
		this.l[t].w(n) || this.l[t].a(n)
	},
	bc: function(n) {
		var t = n.bH.ParentFolderId.Id;
		t in this.l && this.l[t].p(n, !0)
	},
	bb: function(n) {
		if(this.t) {
			this.D.c(n);
			return
		}
		var e = n;
		var f = e.folderHierarchy;
		if(n.EventType === "Reload" && n.clientGenerated) this.O();
		else if(f.ResponseCode === "NoError")
			for(var u = f.Changes.Changes, r = 0; r < u.length; r++) {
				var t = u[r].Folder;
				var i = _h.a.a(t.FolderId);
				if(_h.a.j(i) && i.bH.ParentFolderId.Id === t.ParentFolderId.Id) {
					i.l(t.TotalCount);
					i.h(t.UnreadCount)
				} else if(_h.a.y(t)) {
					this.O();
					break
				}
			}
	},
	Z: function() {
		for(var f = _g.a.a().a().M(), e = f ? f.b() : 0, s = Math.max(15, _h.a.I - e), u = 0, t = 0, i = {}, r = 0, o = this.q.d.length; r < o; r++) {
			var n = this.q.d[r];
			if(n.bH.FolderId)
				if(!_h.a.V(n) || n.bH.ParentFolderId.Id in i) {
					t++;
					i[n.bH.FolderId.Id] = !0
				} else {
					u++;
					if(u >= s) break;
					_g.a.a().b().g(n.bH.FolderId, !1, !1).h || (i[n.bH.FolderId.Id] = !0)
				} else t++
		}
		return Math.min(u + t, _h.a.H)
	},
	V: function(n, t) {
		if(n < this.q.d.length) {
			this.t = !0;
			for(var i = 0; i < t && n + i < this.q.d.length; i++) this.E(this.q.d[n + i]);
			var r = this;
			_j.m.a().d(_a.a.v, "ProcessFolders", function() {
				r.V(n + t, 5)
			})
		} else {
			this.q = new _j.q;
			this.t = !1;
			this.B = !1;
			this.bY();
			this.by("ChunkingComplete")
		}
	},
	bY: function() {
		for(var n = 0; n < this.D.d.length; n++) this.bb(this.D.d[n]);
		this.D = new _j.q
	},
	cc: function() {
		if(this.j && this.j.a() === "archivemsgfolderroot") return !0;
		if(this.j && this.j.a() === "msgfolderroot") {
			if(!this.U || _g.a.a().a().X()) return !0;
			if(this.T) {
				this.T = !1;
				return !0
			}
			return !this.B
		}
		return !0
	},
	ba: function(n) {
		var t = n ? new _h.eh : new _h.bG;
		t.h = [this.e()];
		var r = _g.b.a.idToName(this.e());
		var i = r === "msgfolderroot";
		t.j = i || r === "archivemsgfolderroot" ? "Deep" : "Shallow";
		if(i) {
			t.o = _h.a.Z;
			n || (t.k = _h.a.v)
		}
		return t
	},
	bZ: function() {
		var n = this.ba(!0);
		n.c(this.Y);
		n.b(_h.a.bo);
		_a.g.a.a(n)
	},
	bJ: function(n) {
		_a.b.c(_a.a.v, "RefreshFolderCountsSucceeded");
		for(var u = n.f[0], t = 0; t < u.length; t++) {
			var r = u[t];
			var i = this.f(r.FolderId);
			i && _h.a.bb(i, r)
		}
	}
};
_h.cr = function(n, t) {
	_h.cr.initializeBase(this, [t || n.bH.FolderId]);
	this.c = n
};
_h.cr.prototype = {
	c: null
};
_h.S = function(n) {
	_h.S.initializeBase(this, [n, !0])
};
_h.S.a = function(n) {
	var t = _h.S.e(n);
	return _h.c.b(t, _h.g.a(), function(n) {
		return new _h.S(n)
	})
};
_h.S.c = function(n) {
	for(var i = null, t = 0; t < _h.a.e().x.length; t++) {
		var r = _h.a.e().x[t];
		if(r.Mailbox.EmailAddress === n) {
			i = r;
			break
		}
	}
	return i ? _h.S.a(i) : null
};
_h.S.e = function(n) {
	var r = _h.S.b + n.Id + "_" + n.Mailbox.EmailAddress;
	var t = _h.d.a().a(r);
	if(!t) {
		var i = new _g.u;
		i.j(new _g.m(r));
		i.b = !0;
		t = new _h.cr(i, n);
		_h.d.a().b(r, t)
	}
	return t
};
_h.S.prototype = {
	bN: function(n, t) {
		if(_g.r.isInstanceOfType(this.bC.b())) {
			var i = new _h.bG;
			var r = this.bC.b();
			var u = new _g.r("inbox");
			u.Mailbox = r.Mailbox;
			i.h = [r, u];
			i.j = "Deep";
			r.Id === "msgfolderroot" && (i.k = _h.a.v);
			return i
		} else return _h.a.prototype.bN.call(this, n, null)
	},
	bR: function(n) {
		var t = n;
		var i = null;
		if(t.e[0]) {
			this.j = this.R(this.j, t.e[0]);
			i = t.f[0]
		} else if(t.e.length > 1 && t.e[1]) {
			this.j = this.R(this.j, t.e[1]);
			i = t.f[1]
		} else this.cW(!0);
		this.G(this.j);
		return new _h.cV(i)
	},
	G: function(n) {
		if(n.a() === "msgfolderroot") {
			n.f(n.q);
			n.y(!0)
		}
	}
};
_h.p = function(n) {
	this.bd = Function.createDelegate(this, this.cn);
	this.r = {};
	_h.p.initializeBase(this, [n]);
	_h.p.a = this
};
_h.p.n = function(n, t) {
	for(var r = 0, u = 0; u < n.length; u++) {
		var i = _h.a.a(n[u]);
		if(i && !i.r && _g.j.f(i))
			while(r < t.length) {
				if(_g.bk.a(t[r])) {
					if(!_h.a.d().w(i)) {
						_h.a.u(i, r);
						i.x(!0)
					}
					r++;
					break
				}
				r++
			}
	}
};
_h.p.l = function() {
	if(null === _g.b.a.nameToId("publicfoldersroot")) return !1;
	var n = _h.a.b("publicfoldersroot");
	if(null === n.j) return !1;
	var t = n.C(n.j.bH.FolderId);
	return null === t ? !1 : !0
};
_h.p.m = function(n) {
	if(n && n.length && _h.p.f) {
		for(var i = [], e = 0, h = n.length; e < h; e++) {
			var f = n[e];
			_g.bk.a(f) && !_h.a.a(f) && Array.add(i, f)
		}
		if(i.length) {
			var o = "publicfoldersroot";
			var r = new Array(i.length + 2);
			r[0] = new _g.r(o);
			r[1] = new _g.r("internalsubmission");
			for(var u = 0; u < i.length; u++) {
				var s = i[u];
				s.__type = _g.m._dataContractName;
				r[u + 2] = s
			}
			var t = new _h.bo("GetFolderAction_LoadPublicFavoriteFolders", !1);
			t.h = new _h.bt;
			t.f = r;
			t.k = !0;
			t.a(function(i) {
				if(!t.G && t.e[0]) {
					var s = _a.m.e(_g.j, null, t.e[0]);
					var h = _a.m.e(_g.j, null, t.e[1]);
					_g.a.a().K(o, t.e[0].FolderId);
					_g.a.a().K("internalsubmission", t.e[1].FolderId);
					var u = _h.a.b(o);
					u.bx.a(s);
					u.bx.a(h);
					if(t.e.length > 1) {
						for(var e = new Array(t.e.length - 2), r = 2; r < t.e.length; r++) {
							var f = _a.m.e(_g.j, null, t.e[r]);
							if(f) {
								e[r] = f.bH.FolderId;
								u.bx.a(f);
								t.e[r].ReplicaList && _h.p.j(e[r].Id, t.e[r].ReplicaList[0])
							}
						}
						_h.p.n(e, n)
					}
					u.W(s)
				}
			});
			_a.g.a.a(t)
		}
	}
};
_h.p.k = function() {
	var n = _h.a.b("publicfoldersroot");
	n.P()
};
_h.p.g = function() {
	try {
		if(_h.p.c && _h.p.e && _h.p.c.d().b("15.01.0330.000") && _h.p.e.a(_g.a.a().c().bH.DefaultPublicFolderMailbox, "OwaPublicFolderXRF")) return !0
	} catch(n) {}
	return !1
};
_h.p.i = function(n, t, i) {
	var r = new _h.bo("GetFolderAction_LoadPublicFolderFirstLevelFolders", !1);
	r.h = new _h.bt;
	r.f = [new _g.r("publicfoldersroot")];
	_h.p.c = t;
	_h.p.e = i;
	_h.p.g() && (r.R = _g.a.a().c().bH.DefaultPublicFolderMailbox);
	r.a(function(t) {
		if(r.G) {
			n(t);
			return
		}
		var u = _a.m.e(_g.j, null, r.e[0]);
		_g.a.a().K("publicfoldersroot", r.e[0].FolderId);
		var i = _h.a.b("publicfoldersroot");
		i.bx.a(u);
		i.j = u;
		i.W(u);
		n(r)
	});
	_a.g.a.a(r)
};
_h.p.b = function(n) {
	var i = _g.a.a().c().bH.DefaultPublicFolderMailbox;
	var t = _h.p.h(n);
	t && (i = t);
	return i
};
_h.p.h = function(n) {
	var t = null;
	!n && _h.p.a && _h.p.a.s && _h.p.a.s.bH.FolderId && (n = _h.p.a.s.bH.FolderId.Id);
	n && n in _h.p.d && (t = _h.p.d[n]);
	return t
};
_h.p.j = function(n, t) {
	n && t && (_h.p.d[n] = t)
};
_h.p.prototype = {
	s: null,
	cn: function(n) {
		this.bU;
		for(var u = n, f = new _h.cV(u.f[0]), i = f.c(), r = new Array(i.length), t = 0; t < i.length; t++) r[t] = this.bM(i[t]);
		this.bx.j(r);
		this.cr(n);
		this.cB(n.L);
		this.r[u.h[0].Id] = !0
	},
	bN: function(n, t) {
		var i = new _h.bG;
		_h.p.g() && (i.R = _g.a.a().c().bH.DefaultPublicFolderMailbox);
		if(n) {
			var r = n.bH.FolderId;
			r.__type = _g.m._dataContractName;
			i.h = [r]
		} else i.h = [this.e()];
		var u = _g.b.a.idToName(this.e());
		i.j = "Shallow";
		return i
	},
	G: function(n) {
		n.f("All Public Folders");
		n.y(!0)
	},
	cm: function(n) {
		this.bP(n, this.bd)
	},
	W: function(n) {
		if(n.a() === "publicfoldersroot")
			if(n.bH.FolderId.Id in this.r) return;
			else {
				this.r[n.bH.FolderId.Id] = !1;
				this.k(n, null, null)
			} else {
			if(n.bH.FolderId.Id in this.r) return;
			else this.r[n.bH.FolderId.Id] = !1;
			var t = this.bN(n, null);
			t && this.cm(t)
		}
	},
	P: function() {
		this.r = {};
		_h.a.prototype.P.call(this)
	},
	H: function(n) {
		n.Id in this.r && delete this.r[n.Id];
		_h.a.prototype.H.call(this, n)
	},
	ck: function(n) {
		return 0 === n.bH.ChildFolderCount ? !1 : n.bH.FolderId.Id in this.r && !0 === this.r[n.bH.FolderId.Id] ? !1 : !0
	},
	cf: function(n) {
		return n.bH.FolderId.Id in this.r ? !this.r[n.bH.FolderId.Id] : !1
	}
};
_h.fG = function() {};
_h.fG.registerInterface("_h.fG");
_h.fE = function() {};
_h.fE.registerInterface("_h.fE");
_h.fF = function() {};
_h.fH = function() {};
_h.fH.registerInterface("_h.fH");
_h.eL = function() {};
_h.eL.registerInterface("_h.eL");
_h.dT = function() {};
_h.dT.registerInterface("_h.dT");
_h.eK = function() {};
_h.eK.registerInterface("_h.eK");
_h.eI = function() {
	this.h = Function.createDelegate(this, this.m);
	this.b = {};
	_h.eI.initializeBase(this);
	this.g = new _g.S;
	this.g.NotificationType = "HierarchyNotification"
};
_h.eI.prototype = {
	g: null,
	a: function() {
		return this.g
	},
	d: function() {
		return _a.a.v
	},
	e: function() {
		return "FolderNotificationStrategy"
	},
	c: function() {
		return 0
	},
	f: function(n, t) {
		var i = n;
		var r = t;
		if(r.t)
			if(r.bC.a() in this.b) {
				var s = this.b[r.bC.a()];
				s.c(i)
			} else {
				var e = new _j.q;
				e.c(i);
				this.b[r.bC.a()] = e;
				r.apcl("ChunkingComplete", this.h)
			} else this.i(i, r);
		if(i.EventType === "Reload" && i.folderId)
			for(var f = _h.g.a().a(new _g.m(i.folderId)), u = 0; u < f.length; u++)
				if(_h.I.isInstanceOfType(f[u])) {
					var o = i;
					f[u].Y(o.clientGenerated)
				}
	},
	m: function(n, t) {
		n.rpcl("ChunkingComplete", this.h);
		for(var r = n.bC.a(), u = this.b[r], i = 0; i < u.d.length; i++) this.i(u.d[i], n);
		delete this.b[r]
	},
	i: function(n, t) {
		if(n.folderId && n.parentFolderId || n.EventType === "Reload") {
			var u = new _g.m(n.folderId);
			var f = new _g.m(n.parentFolderId);
			var i = t.f(u);
			var r = t.f(f);
			switch(n.EventType) {
				case "RowAdded":
					if(r && _h.a.j(r) && !i) {
						i = new _g.u;
						i.j(u);
						i.f(n.displayName);
						i.t(f);
						this.l(t.bx, i, r)
					}
					break;
				case "RowModified":
					if(i && r && _h.a.j(i) && _h.a.j(r))
						if(i.bH.ParentFolderId.Id === r.bH.FolderId.Id) this.j(i, n);
						else {
							_h.a.J(i, r.bH.FolderId);
							_h.a.h(i) && i.m && _h.a.Y(i)
						} else i && (_g.bW.isInstanceOfType(i) && _h.a.j(i) ? this.j(i, n) : _h.a.S(i) && this.n(i, n));
					break;
				case "Reload":
					_g.b.a.idToName(t.e()) !== "recoverableitemsroot" && t.O();
					break;
				default:
					break
			}
		}
	},
	j: function(n, t) {
		this.k(n, t);
		this.o(n, t)
	},
	n: function(n, t) {
		this.k(n, t)
	},
	k: function(n, t) {
		if(t.itemCount >= 0)
			if(_h.a.l(n.bH.FolderId)) {
				if(!t.itemCount) {
					_h.a.A(n.bH.FolderId);
					n.l(0)
				}
			} else n.l(t.itemCount)
	},
	o: function(n, t) {
		t.unreadCount >= 0 && (_h.a.l(n.bH.FolderId) || n.h(t.unreadCount))
	},
	l: function(n, t, i) {
		var u = this;
		if(n.l(function(n) {
				return n.bH.DisplayName === t.bH.DisplayName && n.bH.ParentFolderId.Id === t.bH.ParentFolderId.Id
			}) === n.b()) {
			n.a(t);
			var r = this;
			_h.c.a(i, "ChildFolderCount", i.bH.ChildFolderCount, i.bH.ChildFolderCount + 1, function(n, t) {
				n.s(t)
			})
		}
	}
};
_h.eJ = function(n) {
	this.b = new _g.S;
	this.b.NotificationType = "HierarchyNotification";
	this.b.ChannelId = _no.a.a;
	this.h = n
};
_h.eJ.prototype = {
	b: null,
	h: !1,
	g: null,
	a: function() {
		return this.b
	},
	d: function() {
		return _a.a.E
	},
	e: function() {
		return "HierarchyNotificationStrategy"
	},
	c: function() {
		return 0
	},
	f: function(n, t) {
		if(this.h) {
			if(!this.g) {
				var i = this;
				this.g = _j.m.a().a(_ff.c.b, "HierarchyNotificationStrategy.ThrottleIncomingNotifications", function() {
					i.g = null;
					i.i(n, t)
				}, 7e3)
			}
		} else this.i(n, t)
	},
	i: function(n, t) {
		var i = n;
		t.v() && (t.e().Id === i.folderId || i.EventType === "Reload") && t.O()
	}
};
_h.o = function(n, t) {
	this.a = n;
	this.b = t
};
_h.o.prototype = {
	a: 0,
	b: 0,
	c: 0,
	d: function() {
		return this.a + this.b - 1
	}
};
_h.dm = function(n, t, i) {
	_h.dm.initializeBase(this, [n, t]);
	this.r = i
};
_h.dm.prototype = {
	r: null,
	C: function() {
		return _a.a.dv
	},
	H: function(n, t) {
		if(t) return t;
		else {
			var i = new _g.f;
			i.cc(n);
			return i
		}
	},
	s: function(n) {
		return n.bH.ItemId
	},
	L: function(n, t, i) {
		var u = 2;
		n.bH.ParentFolderId && _g.b.a.doesIdEqualName(n.bH.ParentFolderId, "outbox") && (u = 3);
		var r = new _h.M(this.p, [n.bH.ItemId], _h.b.a(), "ItemNormalizedBody", u, !1, this.r, null);
		var f = this;
		r.a(function(n) {
			i()
		});
		_a.g.a.a(r);
		return !0
	}
};
_h.t = function(n, t, i) {
	this.eT = Function.createDelegate(this, this.fa);
	this.eU = Function.createDelegate(this, this.dn);
	this.ek = Function.createDelegate(this, this.fY);
	this.eX = Function.createDelegate(this, this.gf);
	this.eW = Function.createDelegate(this, this.ge);
	this.eV = Function.createDelegate(this, this.ga);
	this.bx = new(_ff.w.$$(_fm.r));
	this.er = new Array(0);
	_h.t.initializeBase(this);
	this.ca = i;
	this.bC = n;
	this.dm = !1;
	this.eo(!1);
	this.bx.e(this.eV);
	this.cq = 1;
	this.dp = !1;
	if(!_h.t.b && t) {
		var r = !1;
		n.b() && (r = _g.bk.a(n.b()));
		_g.r.isInstanceOfType(n.b()) || _h.a.r(n.b()) || r || Array.forEach(t, this.eW)
	}
};
_h.t.prototype = {
	bC: null,
	bH: 0,
	el: 0,
	dq: 0,
	cC: !1,
	dJ: !1,
	dm: !1,
	bU: !1,
	cV: !1,
	cq: 0,
	bI: null,
	bQ: null,
	fh: null,
	cv: null,
	dr: !1,
	dp: !1,
	dH: null,
	bf: function(n) {
		this.bB("Stale", n)
	},
	bp: function(n) {
		this.bF("Stale", n)
	},
	be: function(n) {
		this.apcl("Loading", n)
	},
	bo: function(n) {
		this.rpcl("Loading", n)
	},
	eY: function(n) {
		this.apcl("LoadingFailed", n)
	},
	fg: function(n) {
		this.rpcl("LoadingFailed", n)
	},
	c: function() {
		return this.bC
	},
	e: function() {
		return this.bC.b()
	},
	g: function() {
		return this.cv
	},
	gc: function(n) {
		this.cv !== n && (this.cv = n);
		return n
	},
	b: function() {
		return this.bH
	},
	y: function(n) {
		if(this.bH !== n) {
			this.bH = n;
			this.by("TableSize")
		}
		return n
	},
	a: function() {
		return this.bx
	},
	m: function() {
		return this.bx
	},
	h: function() {
		return this.el
	},
	ch: function(n) {
		n < 0 && _j.e.c(_a.a.de, "LoadedStartIndex cannot be set to a negative value.");
		this.el = n;
		return n
	},
	bi: function() {
		return this.dq
	},
	M: function() {
		return this.cC
	},
	L: function() {
		return this.dr
	},
	eo: function(n) {
		this.dr = n;
		this.dr && this.ce("Stale");
		return n
	},
	d: function() {
		return this.dm
	},
	cw: function(n) {
		if(this.dm !== n) {
			this.dm = n;
			this.by("Loading")
		}
		return n
	},
	i: function() {
		return this.cV
	},
	bV: function(n) {
		if(this.cV !== n) {
			this.cV = n;
			this.by("Merging")
		}
		return n
	},
	bj: function() {
		return !0
	},
	n: function() {
		return this.cq
	},
	cl: function(n) {
		this.cq !== n && (this.cq = n);
		return n
	},
	bh: function() {
		return !1
	},
	x: function() {
		return this.bU
	},
	cW: function(n) {
		if(this.bU !== n) {
			this.bU = n;
			this.by("LoadingFailed")
		}
		return n
	},
	dj: null,
	u: function() {
		return this.bI
	},
	w: function() {
		return this.bQ
	},
	o: function() {
		return this.bL
	},
	v: function() {
		return this.dJ
	},
	K: function() {
		return !1
	},
	ca: null,
	dk: function(n) {
		var t = !1;
		if(this.dr) {
			this.O(n);
			t = !0
		}
		return t
	},
	bg: function(n) {
		return this.dk(n)
	},
	O: function(n) {
		if(!_h.a.l(this.e())) {
			this.eo(!1);
			if(this.dp) {
				this.dp = !1;
				this.en()
			} else this.cb(n)
		}
	},
	bl: function() {
		this.eo(!0)
	},
	eZ: function() {
		this.dp = !0;
		this.bl()
	},
	k: function(n, t, i) {
		var r = this.bN(n, t);
		if(r) {
			r.bd = i;
			this.bP(r, null)
		}
	},
	p: function(n, t) {
		this.k(n, t, null)
	},
	bk: function(n) {
		throw Error.notImplemented("Subclasses should implement ITableView.GetUpdatedEntryFromLoadedRows.");
	},
	N: function(n, t) {
		t(1)
	},
	br: function(n) {
		throw Error.notImplemented("Subclasses should implement ITableView.UpdateCollectionFromLoadedRows.");
	},
	bq: function() {
		this.y(0)
	},
	z: function() {
		this.dJ = !1
	},
	Q: function() {
		this.dJ = !0
	},
	bn: function() {},
	bm: function() {},
	dI: function(n, t) {
		var i = this;
		t.val = this.bx.l(function(t) {
			if(!_a.eh.isInstanceOfType(t)) throw Error.invalidOperation("Item should implement ICacheKey");
			return t.p() === n
		});
		return t.val < this.bx.x.length
	},
	bz: function() {
		Array.forEach(this.er, this.eX);
		for(var n = this.bx.x.length - 1; n >= 0; n--) this.cS(this.bx.x[n]);
		this.bx.dispose();
		_j.S.prototype.bz.call(this)
	},
	cS: function(n) {
		this.ci(n)
	},
	cj: function(n) {},
	ci: function(n) {},
	en: function() {},
	fb: function(n) {
		this.cj(n)
	},
	fc: function() {},
	fd: function(n) {
		this.cS(n)
	},
	fZ: function(n) {},
	bS: function(n, t) {
		_a.cF.isInstanceOfType(n) ? n.k(t) : n.fa(t)
	},
	es: function(n, t) {
		this.bS(n, t);
		return !1
	},
	cU: function(n, t) {
		if(this.bI !== n) return !1;
		var r = _j.n.b(this.bD(), 2, "PreMergeRows_" + n.bf);
		this.bV(!0);
		var f = this.bR(n);
		if(this.bU) {
			this.bV(!1);
			return !0
		}
		var u = f.c();
		this.ff(u, f);
		_j.n.a(r);
		var i = f;
		this.cg(u, n, i.a || (i.a = Function.createDelegate(i, i.b)), !0, !1, t);
		r = _j.n.b(this.bD(), 2, "PostMergeRows_" + n.bf);
		this.bV(!1);
		this.dK(this.bx, u);
		_j.n.a(r);
		return !0
	},
	cg: function(n, t, i, r, u, f) {
		var v = t ? t.bf : "";
		var y = _j.n.b(this.bD(), 2, "MergeRows_" + v);
		var o = {};
		var p = this;
		var s = function(n) {
			if(!_a.eh.isInstanceOfType(n)) throw Error.invalidOperation("Item should implement ICacheKey");
			return n.p()
		};
		f || (f = this.bx.x.length ? t && this.cT(t) ? 3 : 2 : 1);
		var c = this;
		_h.Q.c(this.bx, n, s, i, function(n, t) {
			if(!n) {
				n = c.bM(t);
				return n
			}
			var r = c.es(n, t);
			if(r) {
				var i = s(n);
				o[i] = !0
			}
			return n
		}, r, u, this.bD(), f);
		var a = _ff.i.a(o);
		if(a > 0)
			for(var e = 0; e < this.bx.x.length; e++) {
				var h = this.bx.x[e];
				var l = s(h);
				l in o && this.bx.D(e, e, h, f)
			}
		_j.n.a(y)
	},
	ff: function(n, t) {},
	dK: function(n, t) {},
	bP: function(n, t) {
		this.bI;
		this.gd(n, t);
		this.dL(this.bI)
	},
	dL: function(n) {
		this.cw(!0);
		this.cW(!1);
		_a.g.a.a(n)
	},
	cB: function(n) {},
	cI: function(n) {},
	em: function() {},
	cr: function(n) {
		var t = _j.n.b(this.bD(), 2, "Action_Load_Completed_" + n.bf);
		this.cl(0);
		this.cw(!1);
		_j.n.a(t)
	},
	ep: function() {
		this.cW(!0);
		this.cq = 0;
		this.cw(!1)
	},
	cA: function(n) {},
	dn: function(n) {
		if(!this.bL) {
			n.L === 200 && this.cI(n);
			this.cU(n, 0) && this.fe(n)
		}
	},
	fa: function(n) {
		this.bL || this.gb(n) && this.fe(n)
	},
	dl: function() {
		if(this.bI) {
			this.bI.U(this.dH);
			this.bI.T(this.ek);
			this.bI = null;
			this.dH = null
		}
	},
	gd: function(n, t) {
		if(this.bI !== n) {
			this.dl();
			t || (t = this.eU);
			this.bI = n;
			this.dH = t;
			this.bI.c(t);
			this.bI.b(this.ek)
		}
	},
	fe: function(n) {
		this.bQ = this.bI;
		this.dl();
		this.em();
		this.cr(n);
		this.cB(n.L)
	},
	gb: function(n) {
		if(this.bI !== n) return !1;
		this.bV(!0);
		var f = this.bR(n);
		var r = f.c();
		if(this.bU) {
			this.bV(!1);
			return !0
		}
		var u = this.bx.x.length ? 2 : 1;
		this.bx.T(u);
		for(var i = [], t = 0; t < r.length; t++) Array.add(i, this.bM(r[t]));
		this.bx.H(i, u);
		this.bV(!1);
		return !0
	},
	fY: function(n) {
		if(!this.bL) {
			var t = this.eq(n);
			!t;
			if(this.bI === n) {
				this.bQ = this.bI;
				this.dl();
				if(t) this.cr(n);
				else {
					this.cA(n);
					this.ep();
					this.dj = n.G ? n.G.message : null
				}
			}
		}
	},
	eq: function(n) {
		return !1
	},
	cT: function(n) {
		return !1
	},
	cJ: function(n) {
		var t;
		if(_g.N.isInstanceOfType(this.e())) t = new _h.bT(n.a(), null, null, this.e().Id, _g.a.a().c().bH.LogonEmailAddress);
		else if(_h.dT.isInstanceOfType(n)) {
			var i = n;
			i.a().ChannelId = _no.a.a;
			t = new _h.bT(i.a(), null, null, i.b(), _g.a.a().c().bH.LogonEmailAddress)
		} else t = new _h.K(n.a());
		return t
	},
	ga: function(n, t) {
		var i = t.a;
		var s = t.b;
		if(t.c === 1) {
			if(i)
				for(var h = i, y = h.length, u = 0; u < y; ++u) {
					var l = h[u];
					this.fZ(l)
				}
			return
		}
		if(s)
			for(var e = s, v = e.length, r = 0; r < v; ++r) {
				var p = e[r];
				this.fd(p)
			}
		if(i) {
			for(var o = i, a = o.length, f = 0; f < a; ++f) {
				var c = o[f];
				c !== this.fh && this.fb(c)
			}
			this.fc()
		}
	},
	ge: function(n) {
		var t = n;
		if(t) {
			var r = this.cJ(t);
			var f = this;
			var i = function(n) {
				t.f(n, f)
			};
			r.n(t.d(), t.e(), i, t.c());
			var u = new _h.t.c(r, i);
			Array.add(this.er, u)
		}
	},
	gf: function(n) {
		var t = n;
		t.b.v(t.a)
	}
};
_h.t.c = function(n, t) {
	this.b = n;
	this.a = t
};
_h.t.c.prototype = {
	b: null,
	a: null
};
_h.dU = function(n, t, i, r) {
	this.e(n);
	this.g(t);
	this.d(i);
	this.h(r)
};
_h.dU.prototype = {
	b: null,
	a: null,
	c: null,
	f: null,
	e: function(n) {
		this.b = n || "";
		return n
	},
	g: function(n) {
		this.a = n || "";
		return n
	},
	d: function(n) {
		this.c = n || "";
		return n
	},
	h: function(n) {
		this.f = n || "";
		return n
	}
};
_h.D = function() {
	this.b = {}
};
_h.D.a = function() {
	_h.D.b || (_h.D.b = new _h.D);
	return _h.D.b
};
_h.D.prototype = {
	b: null,
	g: function(n, t) {
		var u = t.a;
		var i = this.b[n];
		if(!i) {
			i = {};
			this.b[n] = i
		}
		if(i[u]) i[u] = t;
		else {
			var f = i;
			for(var e in f) {
				var o = {
					key: e,
					value: f[e]
				};
				var s = o.key;
				var r = i[s];
				r.c === t.a ? t.e(r.a) : r.b === t.a && t.d(r.a)
			}
			i[u] = t
		}
		i[t.f] = t
	},
	c: function(n, t) {
		var i = this.b[n];
		return i ? i[t] : null
	},
	h: function(n, t) {
		var i = this.b[n];
		return i ? i[t] : null
	},
	e: function(n, t) {
		var u = this.b[n];
		if(!u) return null;
		var f = u;
		for(var i in f) {
			var e = {
				key: i,
				value: f[i]
			};
			var r = e.value;
			if(r.b === t) return r
		}
		return null
	},
	i: function(n, t) {
		var u = this.b[n];
		if(!u) return null;
		var f = u;
		for(var i in f) {
			var e = {
				key: i,
				value: f[i]
			};
			var r = e.value;
			if(r.c === t) return r
		}
		return null
	},
	d: function(n, t) {
		var r = this.b[n];
		if(!r) return !1;
		var i = r[t];
		if(i) {
			var f = r[i.b];
			var u = r[i.c];
			u && u.e(i.b);
			f && f.d(i.c);
			delete r[t];
			delete r[i.f];
			return !0
		}
		return !1
	},
	a: function(n, t, i, r) {
		if(_j.m.a().p < 0 || r) this.f(t, i);
		else {
			var u = this;
			_j.m.a().a(n, "RemoveInstanceKeysFromPendingOperations", function() {
				u.f(t, i)
			}, _h.D.c)
		}
	},
	f: function(n, t) {
		for(var i = 0; i < t.length; i++) this.d(n, t[i])
	}
};
_h.fI = function(n, t) {
	this.y = Function.createDelegate(this, this.J);
	this.A = Function.createDelegate(this, this.R);
	this.c = [];
	this.a = [];
	this.e = {};
	this.d = [];
	_h.fI.initializeBase(this);
	if(!t) throw Error.argumentNull("shouldPrefetchFunc");
	this.p = n;
	this.x = t;
	this.K()
};
_h.fI.prototype = {
	p: 0,
	n: !1,
	j: !1,
	u: !1,
	o: !1,
	E: 2147483647,
	x: null,
	g: null,
	b: null,
	l: !1,
	h: 2147483647,
	t: 2147483647,
	k: 2147483647,
	v: 2147483647,
	F: function(n) {
		this.o = n;
		this.o || this.q();
		return n
	},
	i: function(n) {
		this.g = n;
		this.N(n ? this.s(n).Id : null);
		return n
	},
	N: function(n) {
		if(this.b === n) return n;
		this.b && !this.l && _h.d.a().c(this.b);
		this.b = n;
		this.l = !0;
		if(this.b && _h.d.a().d(this.b)) {
			this.l = !1;
			_h.d.a().e(this.b)
		}
		return n
	},
	B: function(n, t) {
		this.G(n, t);
		this.k !== 2147483647 && this.O(t, n.Id)
	},
	f: function(n, t) {
		if(this.u && this.d.length < this.E) {
			if(t) {
				this.m(n) && Array.remove(this.d, n);
				Array.insert(this.d, 0, n)
			} else Array.add(this.d, n);
			this.q()
		}
	},
	w: function(n, t) {
		Array.remove(this.d, n);
		var i = this.s(n);
		if(i.Id in this.e) {
			_h.d.a().c(i.Id);
			delete this.e[i.Id]
		}
		for(var r = 0; r < this.c.length; r++)
			if(this.c[r] === i.Id) {
				Array.removeAt(this.c, r);
				break
			}
		t || this.M(i.Id)
	},
	z: function() {
		if(this.j) {
			this.j = !1;
			var t = this.e;
			for(var r in t) {
				var i = {
					key: r,
					value: t[r]
				};
				_h.d.a().c(i.key);
				delete this.e[i.key]
			}
			Array.clear(this.c);
			for(var n = this.a.length - 1; n >= 0; n--) {
				_h.d.a().c(this.a[n]);
				Array.removeAt(this.a, n)
			}
		}
	},
	Q: function() {
		if(!this.j) {
			this.j = !0;
			this.q()
		}
	},
	m: function(n) {
		return Array.contains(this.d, n)
	},
	D: function() {
		this.z();
		this.i(null)
	},
	P: function(n, t, i, r) {
		this.h = n;
		this.t = t;
		this.k = i;
		this.v = r
	},
	q: function() {
		if(!this.n && !this.o && !this.I) {
			while(this.d.length > 0) {
				var n = this.d[0];
				if(!this.j && n !== this.g) return;
				Array.removeAt(this.d, 0);
				var i = this.s(n);
				if(this.x(n) || i.Id in this.e) {
					var t = _h.d.a().a(i.Id);
					t || (t = this.H(i, n));
					this.G(i, t);
					var r = this;
					if(this.L(t, n, function() {
							_j.m.a().d(_a.a.N, "Prefetch", function() {
								r.n = !1;
								r.o || r.q()
							})
						})) {
						this.n = !0;
						return
					}
				}
			}
			this.n = !1
		}
	},
	K: function() {
		try {
			var n = new _a.I(_a.w.b(window.location.href));
			this.u = !n.f() && !n.d() && !n.o()
		} catch(t) {}
	},
	O: function(n, t) {
		if(this.k !== 2147483647) {
			for(var i = 0, i = 0; i < this.a.length; i++)
				if(this.a[i] === t) break;
			if(i < this.a.length) {
				Array.removeAt(this.a, i);
				Array.insert(this.a, 0, t)
			} else {
				_h.d.a().d(t) ? _h.d.a().e(t) : _h.d.a().b(t, n);
				Array.insert(this.a, 0, t);
				this.a.length > this.k && _j.m.a().d(this.C(), "PrefetchHelper->TrimRecentlyUsedList", this.A)
			}
		}
	},
	M: function(n) {
		for(var t = 0; t < this.a.length; t++)
			if(this.a[t] === n) {
				_h.d.a().c(n);
				Array.removeAt(this.a, t);
				break
			}
	},
	R: function() {
		if(!(this.a.length <= this.k))
			for(var n = this.a.length - 1; n >= this.v; n--) {
				var t = this.a[n];
				Array.removeAt(this.a, n);
				_h.d.a().c(t)
			}
	},
	G: function(n, t) {
		if(!(n.Id in this.e)) {
			_h.d.a().d(n.Id) ? _h.d.a().e(n.Id) : _h.d.a().b(n.Id, t);
			this.e[n.Id] = t;
			this.h !== 2147483647 && Array.add(this.c, n.Id);
			this.h !== 2147483647 && this.c.length > this.h && _j.m.a().d(this.C(), "PrefetchHelper->EvictPrefetchedItems", this.y);
			if(this.l && this.b && this.b === n.Id) {
				_h.d.a().e(n.Id);
				this.l = !1
			}
		}
	},
	J: function() {
		if(this.h !== 2147483647 && !(this.c.length < this.h))
			for(var r = this.c.length - this.t, i = 0; i < r; i++) {
				var n = _ff.p.a(0, this.c.length - 2);
				var t = this.c[n];
				_h.d.a().c(t);
				delete this.e[t];
				Array.removeAt(this.c, n)
			}
	}
};
_h.dV = function(n, t, i) {
	this.a = n;
	this.c = t;
	this.d = i;
	this.b = 0
};
_h.dV.prototype = {
	c: null,
	a: null,
	b: 0,
	d: null
};
_h.eN = function(n, t) {
	this.f = Function.createDelegate(this, this.j);
	this.a = new _j.q;
	this.d = n;
	this.e = t
};
_h.eN.prototype = {
	a: null,
	d: null,
	e: null,
	b: null,
	h: !1,
	dispose: function() {
		this.c();
		this.d = null;
		this.e = null
	},
	i: function(n) {
		this.g(n.c, n.a.EventType);
		if(this.a.d.length >= 5 || n.b >= 3) {
			this.c();
			this.e();
			return
		}
		this.a.c(n);
		this.b || this.h || (this.b = _j.m.a().a(_a.a.E, "Dequeue notification on delay", this.f, 2e3))
	},
	c: function() {
		this.b = _j.m.a().b(this.b);
		this.a.f()
	},
	g: function(n, t) {
		for(var i = 0; i < this.a.d.length; i++)
			if(this.a.d[i].c === n && (this.a.d[i].a.EventType === t || t === "RowModified")) {
				this.a.j(i);
				return
			}
	},
	j: function() {
		this.b = null;
		if(this.a.d.length) {
			var n = this.a.d[0];
			n.b = n.b + 1;
			this.a.n(n);
			this.d(n) ? this.a.d.length > 0 && !this.h && (this.b = _j.m.a().a(_a.a.E, "Dequeue notification on delay", this.f, 2e3)) : this.i(n)
		}
	}
};
_h.z = function(n, t, i, r, u, f, e, o, s) {
	this.b = new _g.S;
	this.b.NotificationType = "RowNotification";
	_g.N.isInstanceOfType(n.b()) || (this.b.FolderId = n.b().Id);
	this.b.IsConversation = t;
	this.b.SortBy = i;
	this.b.Filter = r;
	this.b.CategoryFilter = u;
	this.b.FocusedViewFilter = f;
	this.b.ConversationShapeName = e;
	this.b.subscriptionIdSuffix = o;
	this.b.GroupBy = s;
	this.b.ChannelId = _no.a.a
};
_h.z.j = function() {
	return !!_h.z.a
};
_h.z.b = function() {
	_h.z.c || (_h.z.c = new _j.q);
	return _h.z.c
};
_h.z.k = function() {
	if(_h.z.a) {
		_j.m.a().b(_h.z.a);
		_h.z.a = null
	}
	_h.z.a = _j.m.a().a(_a.a.dC, "ResumeRowNotificationProcessing", _h.z.g, _h.z.e)
};
_h.z.g = function() {
	if(_h.z.a) {
		_j.m.a().b(_h.z.a);
		_h.z.a = null
	}
	_h.z.l()
};
_h.z.m = function(n, t) {
	if(!_h.eL.isImplementedBy(n)) {
		_j.e.c(n.bD(), "RowNotificationStrategy is being passed a table that does not support row-notifications. This should never happen.");
		return !1
	}
	var i = n;
	if(_h.z.j()) {
		_h.z.i(i, t);
		return !1
	}
	return _h.z.d(i, t)
};
_h.z.d = function(n, t) {
	switch(t.EventType) {
		case "RowDeleted":
			return n.bu(t);
		case "RowAdded":
			return n.bt(t);
		case "RowModified":
			return n.bv(t);
		case "QueryResultChanged":
			n.bs();
			return !0;
		default:
			n.bl();
			return !0
	}
};
_h.z.l = function() {
	for(var n = 0; n < _h.z.b().d.length; n++) {
		var t = _h.z.b().d[n];
		var r = t.a;
		var i = t.d;
		_h.z.d(i, r)
	}
	_h.z.b().f()
};
_h.z.i = function(n, t) {
	var r = new _h.dV(t, "", n);
	_h.z.b().c(r);
	if(_h.z.b().d.length > _h.z.f) {
		var i = _h.z.h();
		_h.z.d(i.d, i.a)
	}
};
_h.z.h = function() {
	if(_h.z.b().d.length > 0) {
		var n = _h.z.b().d[0];
		_h.z.b().j(0);
		return n
	}
	return null
};
_h.z.prototype = {
	b: null,
	a: function() {
		return this.b
	},
	d: function() {
		return _a.a.E
	},
	e: function() {
		return "RowNotificationStrategy"
	},
	c: function() {
		return 1
	},
	f: function(n, t) {
		if(!t.bL) {
			var r = n;
			var i = t.d();
			t.cl(5);
			t.cw(!0);
			_h.z.m(t, r);
			t.cw(i)
		}
	}
};
_h.eO = function() {
	this.b = new _g.S;
	this.b.NotificationType = "SearchNotification"
};
_h.eO.a = function(n) {
	var r = [];
	if(n.HighlightTerms)
		for(var u = n.HighlightTerms, f = u.length, t = 0; t < f; ++t) {
			var e = u[t];
			var i = new _g.ce;
			i.a(e);
			Array.add(r, i)
		}
	return r
};
_h.eO.prototype = {
	b: null,
	a: function() {
		return this.b
	},
	d: function() {
		return _a.a.B
	},
	c: function() {
		return 2
	},
	f: function(n, t) {
		var r = n;
		var i = this.h(t);
		if(i && t.v() && r.IsComplete && r.ClientId === i.h && i.g !== 250) {
			if(i.e === 5) return;
			var f = this.i(r);
			var u = _h.eO.a(r);
			t.ba(f, u)
		}
	}
};
_h.dS = function(n) {
	_h.dS.initializeBase(this);
	this.g = n
};
_h.dS.prototype = {
	g: null,
	e: function() {
		return Object.getType(this.g).toString()
	},
	i: function(n) {
		return new _h.dI(n.Conversations)
	},
	h: function(n) {
		if(_h.dc.isInstanceOfType(n)) return n.c();
		if(_h.E.isInstanceOfType(n)) return n.r();
		throw Error.argumentOutOfRange("table", Object.getType(n), "Allowed types are " + _h.dc + " or " + _h.E);
	}
};
_h.eM = function(n) {
	_h.eM.initializeBase(this);
	this.g = n
};
_h.eM.prototype = {
	g: null,
	e: function() {
		return Object.getType(this.g).toString()
	},
	i: function(n) {
		return new _h.cp(n.MessageItems)
	},
	h: function(n) {
		if(_h.bI.isInstanceOfType(n)) return n.c();
		if(_h.F.isInstanceOfType(n)) return n.r();
		throw Error.argumentOutOfRange("table", Object.getType(n), "Allowed types are " + _h.bI + " or " + _h.F);
	}
};
_h.bK = function(n, t, i) {
	_a.c.a(n, "condition");
	_a.c.e(i, 1, Number.MAX_VALUE, "rowCount");
	this.a = n;
	this.b = t;
	this.c = i
};
_h.bK.prototype = {
	a: null,
	b: 0,
	c: 0
};
_h.dW = function(n) {
	this.i = _h.dW.$$(this.$$gta["_h.dW"].T).a + "_";
	if(_g.r.isInstanceOfType(n)) {
		var t = n;
		this.i += t.Id;
		t.Mailbox && (this.i += "_" + t.Mailbox.EmailAddress)
	} else this.i += n.Id;
	this.j = n
};
_h.dW.$$ = function(n) {
	var u = _h.__tc = _h.__tc || {};
	var i = "dW" + "$" + n.getName().replace(/\./g, "_");
	if(!u[i]) {
		var t = u[i] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_h.dW.apply(this, t)
		};
		t.registerClass("_h.__tc." + i, null, _h.fH);
		var o = {
			"_h.dW": {
				T: n
			},
			ctor: _h.dW
		};
		t.prototype.$$gta = o;
		var e = _h.dW.prototype;
		for(var f in e) {
			var r = {
				key: f,
				value: e[f]
			};
			"constructor" !== r.key && (t.prototype[r.key] = r.value)
		}
		t.a = n.getName()
	}
	return u[i]
};
_h.dW.prototype = {
	i: null,
	j: null,
	b: function() {
		return this.j
	},
	a: function() {
		return this.i
	}
};
_h.dB = function() {};
_h.dB.registerInterface("_h.dB");
_h.n = function() {};
_h.n.registerInterface("_h.n");
_h.de = function() {};
_h.de.registerInterface("_h.de");
_h.dK = function() {};
_h.dK.registerInterface("_h.dK");
_h.dP = function(n, t, i) {
	this.h = new Array(0);
	_h.dP.$$(this.$$gta["_h.dP"].TContext, this.$$gta["_h.dP"].TRequest, this.$$gta["_h.dP"].TResponse, this.$$gta["_h.dP"].TResponseMessage).initializeBase(this, [n, t, i])
};
_h.dP.$$ = function(n, t, i, r) {
	var o = _h.__tc = _h.__tc || {};
	var u = "dP" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_") + "$" + i.getName().replace(/\./g, "_") + "$" + r.getName().replace(/\./g, "_");
	if(!o[u]) {
		var e = o[u] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_h.dP.apply(this, t)
		};
		var c = _h.dQ.$$(n, i);
		e.registerClass("_h.__tc." + u, c);
		var a = {
			"_h.dP": {
				TContext: n,
				TRequest: t,
				TResponse: i,
				TResponseMessage: r
			},
			ctor: _h.dP
		};
		var v = c.prototype.$$gta;
		for(var y in v) {
			var l = {
				key: y,
				value: v[y]
			};
			a[l.key] = l.value
		}
		e.prototype.$$gta = a;
		var s = _h.dP.prototype;
		for(var h in s) {
			var f = {
				key: h,
				value: s[h]
			};
			"constructor" !== f.key && (e.prototype[f.key] = f.value)
		}
	}
	return o[u]
};
_h.dP.prototype = {
	g: function() {
		return this.c.request.parameters || null
	},
	p: function() {
		if(this.c.response.statusCode === 200) {
			var i = this.k();
			if(!i) throw Error.invalidOperation(this.f + " received an unexpected null response.");
			var r = i.Body;
			if(!r) throw Error.invalidOperation(this.f + " returned an unexpected null response body. The response is: " + JSON.stringify(i));
			var n = r;
			if(n.ResponseCode && n.ResponseClass) this.h = [n];
			else {
				var t = r.ResponseMessages;
				if(t) {
					var u = t.Items;
					this.h = u ? u : t
				} else this.h = new Array(0)
			}
			this.r()
		} else {
			this.x();
			_h.dQ.prototype.p.call(this)
		}
		this.o()
	},
	j: function(n, t) {
		t.ResponseClass !== "Success" && this.s()
	},
	r: function() {
		for(var n = 0; n < this.h.length; n++) {
			var t = this.h[n];
			var i = "Processing response message {0}: {1} {2} {3} ";
			t.ResponseClass === "Success" || (i += this.q(n, t));
			this.j(n, t)
		}
	},
	q: function(n, t) {
		return ""
	},
	o: function() {},
	x: function() {}
};
_h.CreateItemResponseProcessor = function(n, t) {
	_h.CreateItemResponseProcessor.initializeBase(this, [n, t, _h.CreateItemResponseProcessor.g])
};
_h.CreateItemResponseProcessor.e = function(n) {
	_h.CreateItemResponseProcessor.a.addHandler("CreateItemResponseMessageSuccess", n);
	_h.L.a.a("CreateItemResponseMessageSuccess", n)
};
_h.CreateItemResponseProcessor.c = function(n) {
	_h.CreateItemResponseProcessor.a.removeHandler("CreateItemResponseMessageSuccess", n);
	_h.L.a.b("CreateItemResponseMessageSuccess", n)
};
_h.CreateItemResponseProcessor.f = function(n) {
	_h.CreateItemResponseProcessor.a.addHandler("CreateItemResponseMessageFailure", n);
	_h.L.a.a("CreateItemResponseMessageFailure", n)
};
_h.CreateItemResponseProcessor.i = function(n) {
	_h.CreateItemResponseProcessor.a.removeHandler("CreateItemResponseMessageFailure", n);
	_h.L.a.b("CreateItemResponseMessageFailure", n)
};
_h.CreateItemResponseProcessor.d = function(n) {
	var t = "CreateItemResponseCompleted";
	_h.CreateItemResponseProcessor.a.addHandler(t, n);
	_h.L.a.a(t, n)
};
_h.CreateItemResponseProcessor.b = function(n) {
	var t = "CreateItemResponseCompleted";
	_h.CreateItemResponseProcessor.a.removeHandler(t, n);
	_h.L.a.b(t, n)
};
_h.CreateItemResponseProcessor.h = function(n, t, i) {
	var r = null;
	n === "Success" ? r = "CreateItemResponseMessageSuccess" : n === "Error" && (r = "CreateItemResponseMessageFailure");
	if(r) {
		var u = _h.CreateItemResponseProcessor.a.getHandler(r);
		u && u(t, i)
	}
};
_h.CreateItemResponseProcessor.prototype = {
	A: function() {
		return this.g().Body.SavedItemFolderId
	},
	j: function(n, t) {
		this.a() && this.a().itemIds && _h.CreateItemResponseProcessor.h(t.ResponseClass, new _h.cB(this.a(), n), t);
		_h.dP.prototype.j.call(this, n, t)
	},
	q: function(n, t) {
		if(this.a() && this.a().itemIds) {
			var i = this.a().itemIds[n];
			return " Id: " + i.Id + " ChangeKey: " + i.ChangeKey + " Disposition: " + this.g().Body.MessageDisposition
		} else return _h.dP.prototype.q.call(this, n, t)
	},
	o: function() {
		var n = _h.CreateItemResponseProcessor.a.getHandler("CreateItemResponseCompleted");
		n && n(this.c);
		_h.dP.prototype.o.call(this)
	}
};
_h.eE = function(n, t, i) {
	this.b = n;
	this.a = t;
	this.d = i
};
_h.eE.prototype = {
	b: null,
	a: null,
	d: null,
	c: function(n, t, i) {
		if(this.b) {
			var r = this;
			this.a.e(this.b, t, function(t) {
				t ? r.a.b(r.b, n) : r.e(n, i)
			}, null)
		}
	},
	e: function(n, t) {
		var i = this;
		this.a.e(this.b, n, function(r) {
			if(r) {
				t(r);
				var u = i.a.k(r.d());
				i.a.o(i.b, u, 2, null);
				i.a.b(i.b, n)
			}
		}, null)
	}
};
_h.cB = function(n, t) {
	this.a = n;
	this.b = t
};
_h.cB.prototype = {
	a: null,
	b: 0
};
_h.dQ = function(n, t, i) {
	_h.dQ.$$(this.$$gta["_h.dQ"].TContext, this.$$gta["_h.dQ"].TResponse).initializeBase(this, [n, t, i])
};
_h.dQ.$$ = function(n, t) {
	var f = _h.__tc = _h.__tc || {};
	var i = "dQ" + "$" + n.getName().replace(/\./g, "_") + "$" + t.getName().replace(/\./g, "_");
	if(!f[i]) {
		var u = f[i] = function() {
			for(var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
			_h.dQ.apply(this, t)
		};
		var s = _g.kR;
		u.registerClass("_h.__tc." + i, s);
		var h = {
			"_h.dQ": {
				TContext: n,
				TResponse: t
			},
			ctor: _h.dQ
		};
		u.prototype.$$gta = h;
		var o = _h.dQ.prototype;
		for(var e in o) {
			var r = {
				key: e,
				value: o[e]
			};
			"constructor" !== r.key && (u.prototype[r.key] = r.value)
		}
	}
	return f[i]
};
_h.dQ.prototype = {
	b: null,
	l: function() {
		return !!this.b
	},
	a: function() {
		return this.c.request.actionContext || null
	},
	k: function() {
		if(this.c.response.statusCode === 200) return this.c.response.result || (this.$$gta["_h.dQ"].TResponse === Number || Type.isEnum(this.$$gta["_h.dQ"].TResponse) ? 0 : this.$$gta["_h.dQ"].TResponse === Boolean ? !1 : null);
		else throw Error.invalidOperation(this.c.request.methodName + " response is only available when status is OK (200). StatusCode: " + this.c.response.statusCode);
	},
	A: function() {
		return null
	},
	d: function() {
		return this.e.d()
	},
	n: function(n, t) {
		var i = this,
			u = this,
			r = this;
		if(!this.C("ResponseProcessor." + this.B(), function(n) {
				i.b = n;
				i.p()
			}, function() {
				u.b = null;
				n()
			}, function(n) {
				r.b = null;
				var i = Error.create(n.a, n);
				t(i)
			})) {
			this.p();
			n()
		}
	},
	p: function() {
		this.c.response.fault && this.s()
	},
	s: function() {
		var t = this.A();
		if(t) {
			var n = t.BaseFolderId;
			_h.c.i(_h.E, n);
			_h.c.i(_h.F, n)
		}
	},
	C: function(n, t, i, r) {
		if(this.e.t && this.e.t.c()) {
			this.d().v(n, t, i, r);
			return !0
		}
		return !1
	},
	B: function() {
		var n = "Unknown";
		this.c && (this.c.request && this.c.request.methodName ? n = this.c.request.methodName : this.c.response && this.c.response.result && (n = Object.getType(this.c.response.result).getName()));
		return n
	}
};
_h.ds = function() {};
_h.ds.registerInterface("_h.ds");
_h.eV = function() {};
_h.eV.registerInterface("_h.eV");
_h.bX = function() {};
_h.bX.prototype = {
	testFeature: 1,
	smartSuggestions: 2,
	automaticHighlights: 3,
	gdprAds: 9
};
_h.bX.registerEnum("_h.bX", !1);
_h.dp = function() {};
_h.dp.registerInterface("_h.dp");
_h.cF = function() {};
_h.cF.registerInterface("_h.cF");
_h.fD = function() {};
_h.fD.registerInterface("_h.fD");
_h.k = function() {};
_h.k.f = function() {
	if(!_h.k.h) {
		var t = ["inbox", "drafts"];
		_h.k.h = new Array(t.length);
		for(var n = 0; n < t.length; n++) _h.k.h[n] = _g.b.a.nameToId(t[n]).Id
	}
	return _h.k.h
};
_h.k.k = function(n) {
	_h.k.j = !1;
	_h.k.g = 50;
	_h.k.d = 5;
	_h.k.e = 3;
	switch(n) {
		case "TouchNarrow":
			_h.k.a = 5;
			_h.k.c = 100;
			_h.k.b = 100;
			break;
		case "TouchWide":
			_h.k.a = 5;
			_h.k.c = 100;
			_h.k.b = 200;
			break;
		case "Mouse":
			_h.k.a = 5;
			_h.k.c = 160;
			_h.k.b = 200;
			break
	}
};
_h.k.l = function() {
	_h.k.i || (_h.k.i = ["msgfolderroot", "outbox", "deleteditems"]);
	return _h.k.i
};
_h.k.o = function(n) {
	return !Array.contains(_h.k.f(), n.bH.FolderId.Id) && !Array.contains(_h.k.l(), _g.b.a.idToName(n.bH.FolderId))
};
_h.k.n = function(n) {
	return Array.contains(_h.k.l(), _g.b.a.idToName(n))
};
_h.k.m = function(n) {
	return Array.contains(_h.k.f(), n.bH.FolderId.Id)
};
_h.B = function() {};
_h.B.$$cctor = function() {
	_h.B.g()
};
_h.B.g = function() {
	_h.B.a = !0;
	_h.B.f = 5;
	_h.B.d = 3;
	_h.B.c = 1e3;
	_h.B.e = 12e4;
	_h.B.b = new Array(3);
	_h.B.b[0] = 0;
	_h.B.b[1] = 144e5;
	_h.B.b[2] = 864e5
};
_h.cG = function() {};
_h.cG.registerInterface("_h.cG");

function BootModelsComponent() {}
BootModelsComponent.$$cctor = function() {
	_a.t.a().a(BootModelsComponent)
};
BootModelsComponent.prototype = {
	b: function(n, t, i) {
		var a = this;
		n.b(_h.bq, function() {
			return _h.bq.a(n.a(_j.o), n.a(_a.A))
		}).a().b(_h.bj);
		var l = this;
		n.b(_a.bm, function() {
			return _a.bm.a()
		}).b(_a.cw);
		var c = this;
		n.b(_h.dg, function() {
			return new _h.dg(n.a(_g.cB), n.a(_bc.B), n.a(_h.bj), i.a())
		}).a();
		var v = this;
		n.b(_h.cU, function() {
			return new _h.cU(n.a(_g.a), n.a(_j.j))
		}).a();
		var w = this;
		n.b(_h.s, function() {
			var t = new _h.s(n.a(_j.j), n.a(_h.bj), n.d(_h.de), n.c(_h.dC), n.a(_a.dN), i.j(), n.a(_a.E), n.d(_g.hB));
			_h.s.b(t);
			return t
		}).b(_h.Y).a();
		n.e(_h.eB).b(_bc.U);
		var p = this;
		n.b(_h.dM, function() {
			return new _h.dM(n.a(_a.cw))
		}).b(IPageDataPayloadLocalStorage);
		var y = this;
		n.b(_h.dN, function() {
			return new _h.dN(n.a(_bc.U), n.a(IPageDataPayloadLocalStorage), n.c(_bc.V), n.c(_bc.W), _a.y.a, n.a(_a.e))
		}).b(_bc.B).a();
		var f = this;
		n.b(_h.cJ, function() {
			return new _h.cJ(i.a(), n.a(_a.A).b(), n.a(_g.dX), n.a(_g.gN), n.a(_h.s), n.a(_a.e), n.a(_j.j), n.a(_j.v), n.a(_a.A), n.a(_a.cL))
		});
		var u = this;
		n.b(_h.cN, function() {
			return new _h.cN(i.a(), n.c(_h.P))
		});
		n.e(_g.cj).a();
		var r = this;
		n.b(_h.r, function() {
			return _h.r.a()
		}).a();
		var e = this;
		n.b(_h.dn, function() {
			var i = n.a(_a.q);
			var t = new _h.dn(i);
			var r = _h.bJ.b(i);
			r.i = t;
			return t
		}).a();
		var h = this;
		n.b(_h.cO, function() {
			return new _h.cO(n.a(_a.q), n.a(_j.j), n.a(_j.v), n.a(_a.e), n.a(_a.A))
		});
		var s = this;
		n.b(_h.e, function() {
			return new _h.e
		}).a();
		var o = this;
		n.b(_j.cd.$$(_h.U), function() {
			return n.d(_h.U)
		}).a();
		i.a() !== "Mouse" && (_h.a.I = _h.a.H = 15);
		_h.g.c(n.a(_a.x), n.a(_j.j))
	},
	a: function() {
		return [new _j.y(_h.cJ, 0, -1), new _j.y(_h.dg, 0, -1), new _j.y(_h.cU, 1, 125), new _j.y(_h.r, 2, 9), new _j.y(_h.cO, 1, 111), new _j.y(_h.cN, 2, 37)]
	}
};
_h.A = function() {
	this.i = Function.createDelegate(this, this.j);
	_h.A.initializeBase(this);
	this.d = []
};
_h.A.a = function() {
	_h.A.b || (_h.A.b = new _h.A);
	return _h.A.b
};
_h.A.prototype = {
	d: null,
	k: function(n) {
		this.bB("AvailabilityChanged", n)
	},
	n: function(n) {
		this.bF("AvailabilityChanged", n)
	},
	g: function() {
		return this.d.length > 0 && !this.e()
	},
	c: function(n) {
		if(!this.e()) {
			var t = this.d.pop();
			_h.cl.isInstanceOfType(t) && t.a();
			this.d.push(n);
			this.bO("AvailabilityChanged", this.g())
		}
	},
	h: function() {
		var n = this.d.pop();
		this.bO("AvailabilityChanged", this.g());
		return n
	},
	j: function() {
		var n = this.a();
		if(n) {
			var t = _a.b.b(_a.a.cI, "MailUndo", !1, null);
			n.g() && this.h();
			t && this.m(n, t)
		}
	},
	b: function(n, t) {
		if(this.a())
			if(this.a().e(t)) this.a().b(n) ? this.a().i(n) : this.a().h();
			else if(this.a().d(t)) {
			var i = this.h();
			n ? i.k() : i.j()
		}
	},
	e: function() {
		return this.d.length > 0 && this.a().f()
	},
	f: function() {
		if(!this.e()) {
			var n = this.h();
			_h.cl.isInstanceOfType(n) && n.a();
			this.bO("AvailabilityChanged", this.g())
		}
	},
	l: function() {
		return this.a() ? this.a().toString() : ""
	},
	a: function() {
		return this.d[0]
	},
	m: function(n, t) {
		var r = new _a.l;
		r = _h.h.b(r);
		var u = "Unknown";
		if(_h.cL.isInstanceOfType(n) || _h.dq.isInstanceOfType(n)) {
			var i = n.c();
			_h.ba.isInstanceOfType(i) || _h.bb.isInstanceOfType(i) ? u = _h.a.i() && _g.l.b(_h.a.i().bH.FolderId, _h.ba.isInstanceOfType(i) ? i.H() : i.r) ? "MailArchive" : "MailMove" : (_h.bE.isInstanceOfType(i) || _h.N.isInstanceOfType(i)) && (u = "MailDelete")
		}
		r.b("cmd", u);
		t.m = r.toString();
		_a.b.a(t)
	}
};
_h.cO.registerClass("_h.cO");
_h.cJ.registerClass("_h.cJ");
_h.cN.registerClass("_h.cN");
_h.ev.registerClass("_h.ev");
_h.ck.registerClass("_h.ck", _a.dm, _a.fF, _h.bQ);
_h.fL.registerClass("_h.fL", _h.ck);
_h.bw.registerClass("_h.bw", _h.fL, _h.bQ);
_h.fK.registerClass("_h.fK", _h.ck);
_h.dv.registerClass("_h.dv", _h.fK);
_h.bC.registerClass("_h.bC", _h.bw);
_h.bD.registerClass("_h.bD", _h.fK, _h.dE);
_h.be.registerClass("_h.be", _h.du.$$(_g.ik, _g.fQ));
_h.fh.registerClass("_h.fh", _h.du.$$(_g.fx, _g.dD), _h.eW, IActionBase);
_h.bE.registerClass("_h.bE", _h.bw, _h.dB);
_h.bn.registerClass("_h.bn", _h.fK, _h.dE);
_h.eT.registerClass("_h.eT", _h.fL, _h.bQ);
_h.N.registerClass("_h.N", _h.eT, _h.dB);
_h.bG.registerClass("_h.bG", _h.du.$$(_g.ev, _g.fM), _a.fF);
_h.cb.registerClass("_h.cb", _h.bw, _h.dB);
_h.cI.registerClass("_h.cI", _h.du.$$(_g.eT, _g.eU), _h.fa);
_h.bs.registerClass("_h.bs", _h.cI, _h.dB);
_h.dw.registerClass("_h.dw", _h.fK, _a.fF);
_h.cs.registerClass("_h.cs", _h.fK);
_h.ej.registerClass("_h.ej", _h.fK);
_h.bo.registerClass("_h.bo", _h.du.$$(_g.ga, _g.fQ), _a.fF);
_h.ek.registerClass("_h.ek", _h.fK);
_h.dy.registerClass("_h.dy", _h.du.$$(_g.ga, _g.fQ), _a.fF);
_h.el.registerClass("_h.el", _h.fK, _a.fF);
_h.bZ.registerClass("_h.bZ", _h.du.$$(_g.eA, _g.dD));
_h.cW.registerClass("_h.cW", _h.bZ);
_h.em.registerClass("_h.em", _h.fK, _a.fF);
_h.ct.registerClass("_h.ct", _h.fK, _a.fF);
_h.en.registerClass("_h.en", _h.dJ.$$(Array));
_h.eo.registerClass("_h.eo", _h.dJ.$$(Boolean));
_h.eq.registerClass("_h.eq", _h.dJ.$$(Array));
_h.er.registerClass("_h.er", _h.dJ.$$(Boolean));
_h.cX.registerClass("_h.cX", _h.bw, _h.dB);
_h.cY.registerClass("_h.cY", _h.fL, _h.dB);
_h.et.registerClass("_h.et", _h.fL);
_h.cy.registerClass("_h.cy", _h.bw, _h.dB);
_h.ba.registerClass("_h.ba", _h.bw, _h.dB);
_h.cf.registerClass("_h.cf", _h.ba, _h.dB);
_h.H.registerClass("_h.H", _h.cI, _h.dB);
_h.dd.registerClass("_h.dd", _h.fK, _h.dE);
_h.bb.registerClass("_h.bb", _h.eT, _h.dB);
_h.ew.registerClass("_h.ew", _h.dJ.$$(Array));
_h.ex.registerClass("_h.ex", _h.dJ.$$(Boolean));
_h.ey.registerClass("_h.ey", _h.fK);
_h.q.registerClass("_h.q", null, _j.L);
_h.dO.registerClass("_h.dO", _h.du.$$(_g.jR, _g.fQ));
_h.eG.registerClass("_h.eG", _h.bw, _h.dB);
_h.eH.registerClass("_h.eH", _h.fK);
_h.dR.registerClass("_h.dR", _h.cI, _h.dB);
_h.cE.registerClass("_h.cE", _h.bw);
_h.f.registerClass("_h.f", _h.fL);
_h.dX.registerClass("_h.dX", _h.du.$$(_g.jR, _g.fQ));
_h.bV.registerClass("_h.bV", _h.fK);
_h.fJ.registerClass("_h.fJ");
_h.b.U.registerClass("_h.b.U");
_h.m.registerClass("_h.m");
_h.bu.c.registerClass("_h.bu.c", _a.br);
_h.dl.registerClass("_h.dl");
_h.ch.registerClass("_h.ch");
_h.eh.registerClass("_h.eh", _h.bG);
_h.dx.registerClass("_h.dx", _h.bo);
_h.bp.registerClass("_h.bp", _a.co);
_h.e.registerClass("_h.e");
_h.r.registerClass("_h.r", _j.S);
_h.bF.registerClass("_h.bF", null, _a.fE);
_h.co.registerClass("_h.co", null, _a.iD);
_h.eD.registerClass("_h.eD");
_h.di.registerClass("_h.di", _j.S, _h.fm, _j.bs, Sys.IDisposable);
_h.cj.registerClass("_h.cj", _a.df);
_h.w.registerClass("_h.w", _a.co, _j.L);
_h.dn.registerClass("_h.dn", null, _a.q);
_h.eu.registerClass("_h.eu", _a.br);
_h.eQ.registerClass("_h.eQ", _a.br);
_h.cQ.registerClass("_h.cQ");
_h.cm.registerClass("_h.cm");
_h.bm.registerClass("_h.bm");
_h.cT.registerClass("_h.cT");
_h.cq.registerClass("_h.cq");
_h.by.registerClass("_h.by");
_h.bP.registerClass("_h.bP");
_h.df.registerClass("_h.df");
_h.bS.registerClass("_h.bS");
_h.bU.registerClass("_h.bU");
_h.bA.registerClass("_h.bA");
_h.bv.registerClass("_h.bv");
_h.bk.registerClass("_h.bk");
_h.bt.registerClass("_h.bt", _j.l);
_h.i.registerClass("_h.i", _a.co, _a.eh);
_h.Z.d.registerClass("_h.Z.d");
_h.ep.registerClass("_h.ep", null, _a.lb);
_h.K.registerClass("_h.K", null, _a.kY, _no.m);
_h.ci.registerClass("_h.ci", null, _a.lb);
_h.bT.registerClass("_h.bT", _h.K);
_h.bq.registerClass("_h.bq", null, _h.bj, _h.fs);
_h.ec.registerClass("_h.ec", _h.bq);
_h.dL.registerClass("_h.dL", _j.bZ);
_h.s.registerClass("_h.s", null, Sys.IDisposable, _h.Y);
_h.ez.registerClass("_h.ez");
_h.eC.registerClass("_h.eC", _h.bq);
_h.j.registerClass("_h.j", _a.co, _bc.v, _j.bs, Sys.IDisposable, _j.L);
_h.bM.registerClass("_h.bM", _h.fL);
_h.ei.registerClass("_h.ei", _h.fK);
_h.dz.registerClass("_h.dz", _h.fK);
_h.eF.registerClass("_h.eF", _h.du.$$(_g.jR, _g.fQ));
_h.eR.registerClass("_h.eR", _h.fK);
_h.bN.registerClass("_h.bN");
_h.cn.registerClass("_h.cn");
_h.R.registerClass("_h.R");
_h.dj.registerClass("_h.dj");
_h.cA.registerClass("_h.cA");
_h.dk.registerClass("_h.dk");
_h.W.registerClass("_h.W", null, _j.L);
_h.X.registerClass("_h.X", _h.W);
_h.eB.registerClass("_h.eB", null, _bc.U);
_h.dM.registerClass("_h.dM", null, IPageDataPayloadLocalStorage);
_h.dN.registerClass("_h.dN", null, _bc.B);
_h.cC.registerClass("_h.cC");
_h.cU.registerClass("_h.cU");
_h.dg.registerClass("_h.dg");
_h.bY.registerClass("_h.bY", _h.fK);
_h.eU.registerClass("_h.eU", null, _h.eS);
_h.dq.registerClass("_h.dq", _h.eU);
_h.cK.registerClass("_h.cK", _h.dq);
_h.cL.registerClass("_h.cL", _h.eU);
_h.cM.registerClass("_h.cM", _h.dq);
_h.bl.registerClass("_h.bl", _h.du.$$(_g.ew, _g.fP), _h.eZ);
_h.bc.registerClass("_h.bc", _h.du.$$(_g.ey, _g.fX));
_h.M.registerClass("_h.M", _h.bZ);
_h.eb.registerClass("_h.eb", _h.M);
_h.cP.registerClass("_h.cP", _h.du.$$(_g.eA, _g.dD));
_h.ca.registerClass("_h.ca", _h.du.$$(_g.es, _g.eu), _a.fF, _h.eZ);
_h.bL.registerClass("_h.bL", _h.du.$$(_g.jy, _g.jA));
_h.eg.registerClass("_h.eg", _j.S);
_h.ee.registerClass("_h.ee");
_h.ef.registerClass("_h.ef");
_h.fI.registerClass("_h.fI", _j.bZ, _h.bO);
_h.dH.registerClass("_h.dH", _h.fI);
_h.cz.registerClass("_h.cz");
_h.t.registerClass("_h.t", _j.S, _h.bO, _h.eK, _j.bs, Sys.IDisposable);
_h.a.registerClass("_h.a", _h.t);
_h.cr.registerClass("_h.cr", _h.dW.$$(_h.a));
_h.S.registerClass("_h.S", _h.a);
_h.p.registerClass("_h.p", _h.a);
_h.eI.registerClass("_h.eI", _j.S);
_h.eJ.registerClass("_h.eJ");
_h.o.registerClass("_h.o");
_h.dm.registerClass("_h.dm", _h.fI);
_h.t.c.registerClass("_h.t.c");
_h.dU.registerClass("_h.dU");
_h.eN.registerClass("_h.eN", null, Sys.IDisposable);
_h.z.registerClass("_h.z");
_h.eO.registerClass("_h.eO");
_h.dS.registerClass("_h.dS", _h.eO);
_h.eM.registerClass("_h.eM", _h.eO);
_h.bK.registerClass("_h.bK");
_h.CreateItemResponseProcessor.registerClass("_h.CreateItemResponseProcessor", _h.dP.$$(_g.hi, _g.dv, _g.fx, _g.dD));
_h.eE.registerClass("_h.eE");
_h.cB.registerClass("_h.cB");
BootModelsComponent.registerClass("BootModelsComponent", null, _a.kg, _j.ce);
_h.A.registerClass("_h.A", _j.S);
_h.u.d = "{0}@{1}";
_h.bw.b = new _a.f("FolderId", _g.m, _h.bw);
_h.bw.a = new _a.f("Conversations", Array, _h.bw);
_h.bC.a = new _a.f("DestinationFolderId", _g.m, _h.bC);
_h.bC.b = new _a.f("ItemIds", Array, _h.bC);
_h.be.b = new _a.f("FolderTable", _h.a, _h.be);
_h.be.a = new _a.f("FolderName", String, _h.be);
_h.bn.a = new _a.f("Folder", _g.j, _h.bn);
_h.bn.b = new _a.f("FolderTable", _h.a, _h.bn);
_h.cs.a = new _a.cl;
_h.H.a = null;
_h.H.b = null;
_h.ba.a = new _a.f("DestinationFolderId", _g.m, _h.ba);
_h.bh.d = "rejectErrorCode";
_h.bh.c = "originalException";
_h.bh.e = "__type";
_h.bh.b = "message";
_h.PDPInit.$$cctor();
_h.f.d = null;
_h.f.c = null;
_h.ck.a = "Exchange2013";
_h.b.E = "ConversationLastDeliveryOrRenewTime";
_h.b.T = "ReceivedOrRenewTime";
_h.b.C = null;
_h.b.o = null;
_h.b.D = null;
_h.b.B = null;
_h.b.i = null;
_h.b.t = null;
_h.b.j = null;
_h.b.u = null;
_h.b.c = null;
_h.b.m = null;
_h.b.v = null;
_h.b.p = null;
_h.b.w = 0;
_h.b.x = 0;
_h.b.b = "ConversationLastDeliveryTime";
_h.b.e = "DateTimeReceived";
_h.b.q = -1;
_h.b.z = null;
_h.b.y = null;
_h.b.A = null;
_h.b.n = null;
_h.b.s = [];
_h.b.k = null;
_h.bu.b = {};
_h.e.c = "#666666";
_h.e.a = "#FFFFFF";
_h.e.d = [
	["#212121", "#ED616F", "#F07D88", "#EE9EA6", "#FADFE3", "#FDF2F4"],
	["#212121", "#FB6F25", "#FF8C00", "#FDA351", "#FDE5D3", "#FEF4ED"],
	["#212121", "#E1B46D", "#FECB6F", "#FDD591", "#EEE2D8", "#F8F4F0"],
	["#212121", "#FCD146", "#FFF100", "#FEF25D", "#FBF4CF", "#FDFAE7"],
	["#212121", "#56A659", "#5FBE7D", "#97D49E", "#DCF1DE", "#F1F9F2"],
	["#212121", "#3FA296", "#33BAB1", "#70CFC8", "#D4F5F2", "#ECFAF9"],
	["#212121", "#82A034", "#A3B367", "#BECC7F", "#EAF0D3", "#F4F8E9"],
	["#212121", "#3096D0", "#55ABE5", "#88C4ED", "#DDF3FE", "#ECF8FE"],
	["#212121", "#8C82D0", "#A895E2", "#C9BCFD", "#E6E0FF", "#F5F2FF"],
	["#212121", "#D475A7", "#E48BB5", "#F99BCC", "#FBE4F1", "#FDF3F9"],
	["#212121", "#9BA9BC", "#B9C0CB", "#C6CDD8", "#E2E6EC", "#F3F5F7"],
	[_h.e.a, "#343E4F", "#4C596E", "#687384", "#E2E6EC", "#F3F5F7"],
	["#212121", "#969696", "#ABABAB", "#BFBFBF", "#EEEEEE", "#F7F7F7"],
	[_h.e.a, "#4F4F4F", "#666666", "#8F8F8F", "#EEEEEE", "#F7F7F7"],
	[_h.e.a, "#212121", "#474747", "#5C5C5C", "#EEEEEE", "#F7F7F7"],
	[_h.e.a, "#62030D", "#910A19", "#9B3845", "#FADFE3", "#FDF2F4"],
	[_h.e.a, "#BC2E1B", "#CE4B28", "#DE6346", "#FDE5D3", "#FEF4ED"],
	[_h.e.a, "#7C592E", "#996E36", "#B28F57", "#EEE2D8", "#F8F4F0"],
	["#212121", "#9B9137", "#B0A923", "#DFD557", "#FBF4CF", "#FDFAE7"],
	[_h.e.a, "#0E440E", "#026802", "#107C10", "#DCF1DE", "#F1F9F2"],
	[_h.e.a, "#143F43", "#1C6367", "#216B6D", "#D4F5F2", "#ECFAF9"],
	[_h.e.a, "#384F11", "#5C6A22", "#607241", "#EAF0D3", "#F4F8E9"],
	[_h.e.a, "#011738", "#254069", "#0D3268", "#DDF3FE", "#ECF8FE"],
	[_h.e.a, "#1E0D3B", "#562685", "#6E4A9C", "#E6E0FF", "#F5F2FF"],
	[_h.e.a, "#5B0743", "#80275D", "#A33E89", "#FBE4F1", "#FDF3F9"]
];
_h.r.b = _a.a.eA;
_h.r.d = null;
_h.r.e = {};
_h.r.g = _h.r.i();
_h.r.f = null;
_h.w.j = new _a.f("Subject", String, _h.w);
_h.w.c = new _a.f("JoinOnlineMeetingUrl", String, _h.w);
_h.w.d = new _a.f("Location", String, _h.w);
_h.w.h = new _a.f("ReminderTime", _a.d, _h.w);
_h.w.i = new _a.f("StartDate", _a.d, _h.w);
_h.w.a = new _a.f("EndDate", _a.d, _h.w);
_h.w.b = new _a.f("ItemId", _g.e, _h.w);
_h.w.e = new _a.f("RecurringMasterItemId", _g.e, _h.w);
_h.w.f = new _a.f("ReminderGroup", _g.ju, _h.w);
_h.w.g = new _a.f("ReminderGroups", _g.jv, _h.w);
_h.J.a = "PublicStrings";
_h.l.e = null;
_h.l.d = null;
_h.i.k = new _a.f("Id", _g.e, _h.i);
_h.i.d = new _a.f("ChatState", _h.ed, _h.i);
_h.i.a = new _a.f("ParticipantPersonas", _j.l, _h.i);
_h.i.c = new _a.f("Subject", String, _h.i);
_h.i.h = new _a.f("Preview", String, _h.i);
_h.i.b = new _a.f("Status", String, _h.i, "&nbsp;");
_h.i.j = new _a.f("BodyText", String, _h.i, "<div></div>");
_h.i.g = new _a.f("LyncConversationId", Number, _h.i, -1);
_h.i.e = new _a.f("SessionEnded", Boolean, _h.i, !1);
_h.i.v = new _a.f("LastMessage", String, _h.i, "");
_h.i.f = new _a.f("LastMessageAriaLabel", String, _h.i, "");
_h.i.u = "ItemOrConversationId";
_h.i.o = "MailItem";
_h.i.n = "MailConversation";
_h.i.m = "LastMessage";
_h.i.l = "LastMessageAriaLabel";
_h.i.p = "sip:";
_h.i.r = "\r\n                <div class='imMessage'>\r\n                    <div>\r\n                        <span class='imSender ms-font-color-themePrimary ms-font-weight-regular'>{0}</span>\r\n                        <span class='imSentTime ms-font-color-themePrimary ms-font-weight-semilight'>{1}</span>\r\n                    </div>\r\n                    <div class='imBody ms-font-color-neutralPrimary ms-font-weight-regular'>{2}</div>\r\n                </div>";
_h.i.t = "\r\n                <div class='imMessage'>\r\n                    <div>\r\n                        <span class='imMe ms-font-weight-regular ms-font-color-black'>{0}</span>\r\n                        <span class='imSentTime ms-font-weight-semilight ms-font-color-black'>{1}</span>\r\n                    </div>\r\n                    <div class='imBody ms-font-color-neutralPrimary ms-font-weight-regular'>{2}</div>\r\n                </div>";
_h.i.s = "<div class='imNotificationMessage ms-font-weight-regular ms-font-color-neutralSecondary'>{0}</div>";
_h.i.q = "<div class='imErrorMessage ms-font-weight-regular'>{0}</div>";
_h.i.i = [_h.i.b, _h.i.d, _h.i.a];
_h.i.$$cctor();
_h.Z.b = null;
_h.V.f = {
	"ipm.note": {
		MailReplied: 3,
		MailForwarded: 4,
		MailIrm: 5,
		MailIrmReplied: 6,
		MailIrmForwarded: 7
	},
	"ipm.note.irm": {
		MailIrmReplied: 6,
		MailReplied: 6,
		MailIrmForwarded: 7,
		MailForwarded: 7,
		Default: 5
	},
	"ipm.note.microsoft.exchange.voice.um.ca": {
		MailForwarded: 10,
		MailReplied: 9,
		Default: 8
	},
	"ipm.note.microsoft.exchange.voice.um": {
		MailForwarded: 10,
		MailReplied: 9,
		Default: 8
	},
	"ipm.note.microsoft.voicemail.um.ca": {
		MailForwarded: 10,
		MailReplied: 9,
		Default: 8
	},
	"ipm.note.microsoft.voicemail.um": {
		MailForwarded: 10,
		MailReplied: 9,
		Default: 8
	},
	"ipm.note.rpmsg.microsoft.voicemail.um.ca": {
		MailReplied: 11,
		Default: 11
	},
	"ipm.note.rpmsg.microsoft.voicemail.um": {
		MailReplied: 11,
		Default: 11
	},
	"ipm.note.microsoft.exchange.fax.ca": {
		Default: 12
	},
	"ipm.note.microsoft.exchange.fax.um.ca": {
		Default: 12
	},
	"ipm.note.microsoft.fax.ca": {
		Default: 12
	},
	"ipm.appointment": {
		Default: 13
	},
	"ipm.schedule.meeting.request": {
		Default: 13
	},
	"ipm.schedule.meeting.canceled": {
		AppointmentMeetCancel: 17,
		Default: 17
	},
	"ipm.contact": {
		Default: 18
	},
	"ipm.distlist": {
		Default: 18
	},
	"ipm.task": {
		TaskRecur: 20,
		TaskItem: 19,
		TaskOwned: 19,
		TaskDelegated: 19,
		Default: 19
	},
	"ipm.activity": {
		Default: 21
	},
	"ipm.post": {
		Default: 22
	},
	"ipm.stickynote": {
		Default: 23
	},
	"report.ipm.note.ndr": {
		Default: 25
	},
	"report.ipm.ndr": {
		Default: 25
	},
	"report.ipm.note.mobile.sms.ndr": {
		Default: 25
	},
	"report.ipm.schedule.meeting.resp.neg.ndr": {
		Default: 25
	},
	"report.ipm.schedule.meeting.resp.pos.ndr": {
		Default: 25
	},
	"report.ipm.schedule.meeting.resp.tent.ndr": {
		Default: 25
	},
	"report.ipm.TaskRequest.ndr": {
		Default: 25
	},
	"report.ipm.oof.ndr": {
		Default: 25
	},
	"report.report.ipm.note.ipnnrn.ndr": {
		Default: 25
	},
	"report.ipm.note.smime.ndr": {
		Default: 25
	},
	"report.ipm.note.smime.multipartsigned.ndr": {
		Default: 25
	},
	"report.ipm.note.dr": {
		Default: 24
	},
	"report.ipm.dr": {
		Default: 24
	},
	"report.ipm.schedule.meeting.request.dr": {
		Default: 24
	},
	"report.ipm.note.smime.dr": {
		Default: 24
	},
	"report.ipm.note.smime.multipartsigned.dr": {
		Default: 24
	},
	"ipm.note.microsoft.approval.request": {
		Default: 26
	},
	"ipm.note.microsoft.approval.reply.approve": {
		Default: 27
	},
	"ipm.note.microsoft.approval.reply.reject": {
		Default: 28
	},
	"ipm.note.rules.ooftemplate.microsoft": {
		Default: 29
	},
	"report.ipm.note.ipnrn": {
		Default: 30
	},
	"ipm.note.reminder.event": {
		Default: 31
	}
};
_h.V.a = {
	"ipm.schedule.meeting.resp.pos": {
		AppointmentMeetYes: 14,
		Default: 14
	},
	"ipm.schedule.meeting.resp.tent": {
		AppointmentMeetMaybe: 16,
		Default: 16
	},
	"ipm.schedule.meeting.resp.neg": {
		AppointmentMeetNo: 15,
		Default: 15
	}
};
_h.bJ.a = null;
_h.ci.a = new _h.ci;
_h.dL.a = _a.a.bx;
_h.s.a = null;
_h.j.d = null;
_h.j.h = null;
_h.j.c = null;
_h.j.e = !1;
_h.j.f = [];
_h.j.$$cctor();
_h.L.a = new _h.L;
_h.O.a = null;
_h.O.c = !1;
_h.bL.a = new _g.d("DateTimeReceived");
_h.v.a = null;
_h.v.c = null;
_h.v.b = null;
_h.c.l = {};
_h.d.b = null;
_h.g.b = null;
_h.x.c = null;
_h.a.I = 35;
_h.a.H = 150;
_h.a.L = !1;
_h.a.t = _h.a.getName();
_h.a.C = _h.a.t + ".FavoritesCollection";
_h.a.D = _h.a.t + ".FolderMruCollection";
_h.a.N = _h.a.t + ".RootFolderTableQuery.";
_h.a.K = _h.a.t + ".SharedFolderRoots.";
_h.a.s = ["msgfolderroot", "publicfoldersroot", "archivemsgfolderroot", "recoverableitemsroot"];
_h.a.Z = ["deleteditems", "drafts", "inbox", "junkemail", "notes", "sentitems"];
_h.a.v = ["inbox", "drafts", "sentitems", "deleteditems"];
_h.a.B = ["inbox", "deleteditems", "junkemail"];
_h.a.o = {};
_h.a.c = !1;
_h.a.k = !1;
_h.a.n = !1;
_h.S.d = _h.S.getName();
_h.S.b = _h.S.d + ".RootFolderTableQuery.";
_h.p.a = null;
_h.p.f = !1;
_h.p.c = null;
_h.p.e = null;
_h.p.d = {};
_h.t.b = !1;
_h.t.a = null;
_h.D.c = 15e3;
_h.D.b = null;
_h.z.e = 5e3;
_h.z.f = 10;
_h.z.c = null;
_h.z.a = null;
_h.CreateItemResponseProcessor.g = _a.a.dO;
_h.CreateItemResponseProcessor.a = new Sys.EventHandlerList;
_h.k.j = !1;
_h.k.e = 0;
_h.k.c = 0;
_h.k.b = 0;
_h.k.a = 0;
_h.k.g = 0;
_h.k.d = 0;
_h.k.h = null;
_h.k.i = null;
_h.B.a = !1;
_h.B.f = 0;
_h.B.d = 0;
_h.B.c = 0;
_h.B.b = null;
_h.B.e = 0;
_h.B.$$cctor();
BootModelsComponent.$$cctor();
_h.A.b = null;
Type.registerNamespace("_y");
_y.ka = function() {};
_y.ka.registerInterface("_y.ka");
_y.eF = function() {};
_y.dB = function(n, t) {
	this.a = n;
	this.b = t
};
_y.dB.prototype = {
	a: 0,
	b: !1
};
_y.jY = function() {};
_y.jY.registerInterface("_y.jY");
_y.jZ = function() {};
_y.jZ.registerInterface("_y.jZ");
_y.jV = function() {};
_y.jV.registerInterface("_y.jV");
_y.jW = function() {};
_y.jW.registerInterface("_y.jW");
_y.jX = function() {};
_y.jX.registerInterface("_y.jX");
_y.cE = function() {};
_y.cE.registerInterface("_y.cE");
_y.gx = function() {};
_y.gx.registerInterface("_y.gx");
_y.gg = function() {};
_y.gg.registerInterface("_y.gg");
_y.kM = function() {};
_y.bJ = function() {};
_y.bJ.registerInterface("_y.bJ");
_y.iy = function() {};
_y.iy.registerInterface("_y.iy");
_y.hW = function() {};
_y.hW.registerInterface("_y.hW");
_y.gh = function() {};
_y.gh.registerInterface("_y.gh");
_y.cA = function() {};
_y.cA.registerInterface("_y.cA");
_y.hQ = function() {};
_y.hQ.registerInterface("_y.hQ");
_y.jv = function() {};
_y.jv.registerInterface("_y.jv");
_y.gu = function() {};
_y.gu.registerInterface("_y.gu");
_y.gC = function() {};
_y.gC.registerInterface("_y.gC");
_y.kC = function() {};
_y.ki = function() {};
_y.ki.registerInterface("_y.ki");
_y.fj = function() {};
_y.fj.registerInterface("_y.fj");
_y.kQ = function() {};
_y.kQ.registerInterface("_y.kQ");
_y.kS = function() {};
_y.kS.registerInterface("_y.kS");
_y.kr = function() {};
_y.kr.registerInterface("_y.kr");
_y.go = function() {};
_y.go.registerInterface("_y.go");
_y.kt = function() {};
_y.kt.registerInterface("_y.kt");
_y.gr = function() {};
_y.gr.registerInterface("_y.gr");
_y.eT = function() {};
_y.eT.registerInterface("_y.eT");
var IInfoBarMessageWithActionViewModel = function() {};
IInfoBarMessageWithActionViewModel.registerInterface("IInfoBarMessageWithActionViewModel");
var IInfoBarMessageSimpleViewModel = function() {};
IInfoBarMessageSimpleViewModel.registerInterface("IInfoBarMessageSimpleViewModel");
var IInfoBarMessageViewModel = function() {};
IInfoBarMessageViewModel.registerInterface("IInfoBarMessageViewModel");
var IInfoBarMessageForComplexContentViewModel = function() {};
IInfoBarMessageForComplexContentViewModel.registerInterface("IInfoBarMessageForComplexContentViewModel");
var IInfoBarViewModel = function() {};
IInfoBarViewModel.registerInterface("IInfoBarViewModel");
_y.kj = function() {};
_y.kj.registerInterface("_y.kj");
var IFeedbackPopupViewModel = function() {};
IFeedbackPopupViewModel.registerInterface("IFeedbackPopupViewModel");
_y.iL = function() {};
_y.iL.registerInterface("_y.iL");
_y.ft = function() {};
_y.ft.registerInterface("_y.ft");
_y.kZ = function() {};
_y.kZ.registerInterface("_y.kZ");
_y.bT = function() {};
_y.bT.registerInterface("_y.bT");
_y.eq = function() {};
_y.eq.registerInterface("_y.eq");
_y.kW = function() {};
_y.kW.registerInterface("_y.kW");
_y.ej = function() {};
_y.ej.registerInterface("_y.ej");
var IMessageListAdsReadingPaneViewModel = function() {};
IMessageListAdsReadingPaneViewModel.registerInterface("IMessageListAdsReadingPaneViewModel");
_y.kn = function() {};
_y.kn.registerInterface("_y.kn");
_y.kq = function() {};
_y.kq.registerInterface("_y.kq");
var IFolderTreeViewModel = function() {};
IFolderTreeViewModel.registerInterface("IFolderTreeViewModel");
_y.cP = function() {};
_y.cP.registerInterface("_y.cP");
_y.fc = function() {};
_y.fc.registerInterface("_y.fc");
_y.dQ = function() {};
_y.dQ.registerInterface("_y.dQ");
_y.gD = function() {};
_y.gD.registerInterface("_y.gD");
_y.fe = function() {};
_y.fe.registerInterface("_y.fe");
_y.ko = function() {};
_y.ko.registerInterface("_y.ko");
_y.hN = function() {};
_y.hN.registerInterface("_y.hN");
_y.eP = function() {};
_y.eP.registerInterface("_y.eP");
var IIsHidden = function() {};
IIsHidden.registerInterface("IIsHidden");
_y.eZ = function() {};
_y.eZ.registerInterface("_y.eZ");
_y.gM = function() {};
_y.gM.registerInterface("_y.gM");
var IAdsbarViewModel = function() {};
IAdsbarViewModel.registerInterface("IAdsbarViewModel");
_y.hR = function() {};
_y.hR.registerInterface("_y.hR");
_y.cO = function() {};
_y.cO.registerInterface("_y.cO");
_y.lc = function() {};
_y.lc.registerInterface("_y.lc");
_y.gs = function() {};
_y.gs.registerInterface("_y.gs");
_y.gm = function() {};
_y.gm.registerInterface("_y.gm");
_y.kl = function() {};
_y.kl.registerInterface("_y.kl");
_y.hL = function() {};
_y.hL.registerInterface("_y.hL");
_y.iC = function() {};
_y.iC.registerInterface("_y.iC");
_y.lb = function() {};
_y.lb.registerInterface("_y.lb");
_y.bC = function() {};
_y.bC.registerInterface("_y.bC");
_y.ii = function() {};
_y.ii.registerInterface("_y.ii");
_y.hZ = function() {};
_y.hZ.registerInterface("_y.hZ");
var IReportPhishDialogViewModel = function() {};
IReportPhishDialogViewModel.registerInterface("IReportPhishDialogViewModel");
_y.iD = function() {};
_y.iD.registerInterface("_y.iD");
_y.cS = function() {};
_y.cS.registerInterface("_y.cS");
_y.jA = function() {};
_y.jA.registerInterface("_y.jA");
_y.eN = function() {};
_y.eN.prototype = {
	none: 0,
	owaOptionsSetOOFMessage: 1,
	owaOptionsSetSignature: 2,
	owaOptionsSetThemes: 3,
	owaRecoverDeletedItems: 21,
	owaConfigureDeletedItemsRetention: 22,
	owaCalendarSharing: 31,
	owaCalendarSharingPolicy: 32,
	test: 1e4
};
_y.eN.registerEnum("_y.eN", !1);
_y.ly = function() {};
_y.ly.registerInterface("_y.ly");
_y.lE = function() {};
_y.lE.registerInterface("_y.lE");
_y.iJ = function() {};
_y.iJ.registerInterface("_y.iJ");
_y.kh = function() {};
_y.kh.registerInterface("_y.kh");
_y.ia = function() {};
_y.ia.registerInterface("_y.ia");
_y.kw = function() {};
_y.kx = function() {};
_y.kD = function() {};
_y.kJ = function() {};
_y.kv = function() {};
_y.kv.registerInterface("_y.kv");
_y.fo = function() {};
_y.fo.registerInterface("_y.fo");
_y.hG = function() {};
_y.hG.prototype = {
	userInput: 0,
	undo: 1,
	autoLink: 2,
	linkPreview: 3,
	emoji: 4,
	inlineImage: 5,
	paste: 6,
	system: 7,
	mentions: 8,
	cut: 9,
	hashtags: 10,
	extensibility: 11,
	availableTime: 12,
	smartSuggestions: 13
};
_y.hG.registerEnum("_y.hG", !1);
_y.ky = function() {};
_y.kz = function() {};
_y.kA = function() {};
_y.kB = function() {};
_y.kE = function() {};
_y.kF = function() {};
_y.kH = function() {};
_y.kI = function() {};
_y.kK = function() {};
_y.kL = function() {};
_y.cn = function() {};
_y.cn.registerInterface("_y.cn");
_y.fa = function() {};
_y.fa.registerInterface("_y.fa");
_y.ls = function() {};
_y.ls.registerInterface("_y.ls");
_y.fm = function() {};
_y.fm.registerInterface("_y.fm");
_y.fn = function() {};
_y.fn.registerInterface("_y.fn");
_y.fl = function() {};
_y.fl.registerInterface("_y.fl");
_y.ku = function() {};
_y.kG = function() {};
_y.lm = function() {};
_y.lm.registerInterface("_y.lm");
_y.lp = function() {};
_y.lp.registerInterface("_y.lp");
_y.hX = function() {};
_y.hX.registerInterface("_y.hX");
_y.g = function() {};
_y.g.registerInterface("_y.g");
_y.gf = function() {};
_y.gf.registerInterface("_y.gf");
_y.hK = function() {};
_y.hK.registerInterface("_y.hK");
_y.hO = function() {};
_y.hO.registerInterface("_y.hO");
_y.kp = function() {};
_y.kp.registerInterface("_y.kp");
_y.eX = function() {};
_y.eX.registerInterface("_y.eX");
var IHashtagTreeViewModel = function() {};
IHashtagTreeViewModel.registerInterface("IHashtagTreeViewModel");
_y.eh = function() {};
_y.eh.registerInterface("_y.eh");
_y.eY = function() {};
_y.eY.registerInterface("_y.eY");
var ITagViewModel = function() {};
ITagViewModel.registerInterface("ITagViewModel");
_y.hY = function() {};
_y.hY.registerInterface("_y.hY");
_y.kT = function() {};
_y.kT.registerInterface("_y.kT");
_y.lC = function() {};
_y.lC.registerInterface("_y.lC");
_y.jw = function() {};
_y.jw.registerInterface("_y.jw");
_y.lA = function() {};
_y.lA.registerInterface("_y.lA");
var IDelayedSendEvent = function() {};
IDelayedSendEvent.registerInterface("IDelayedSendEvent");
var IIsShowingComposeInReadingPaneEvent = function() {};
IIsShowingComposeInReadingPaneEvent.registerInterface("IIsShowingComposeInReadingPaneEvent");
var ISendFailedO365Event = function() {};
ISendFailedO365Event.registerInterface("ISendFailedO365Event");
var ISendFailureRemoveO365Event = function() {};
ISendFailureRemoveO365Event.registerInterface("ISendFailureRemoveO365Event");
_y.gw = function() {};
_y.gw.registerInterface("_y.gw");
_y.iB = function() {};
_y.iB.registerInterface("_y.iB");
_y.ih = function() {};
_y.ih.registerInterface("_y.ih");
_y.jy = function() {};
_y.jy.registerInterface("_y.jy");
_y.ld = function() {};
_y.ld.registerInterface("_y.ld");
_y.il = function() {};
_y.il.registerInterface("_y.il");
window.scriptsLoaded['boot.worldwide.1.mouse.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['boot.worldwide.1.mouse.js'] = (new Date()).getTime();