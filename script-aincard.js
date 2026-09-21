// script-aincard (deobfuscated, brand: BimzModz)
(function () {

    'use strict';
    const f = 'https://zxi-file-loader.ah4734536.workers.dev';
    let g = -1;
    if (((void 0) !== window.ZXI_BOOKMARK_LOAD))
        g = 0;
    else {
        for (let x = 1; (x <= 500); x++)
            if (((void 0) !== window[(('ZXI' + x) + '_BOOKMARK_LOAD')])) {
                g = x;
                break;
            }
    }
    if ((-1 === g))
        return;
    const h = {};
    h.r = f + '/?file=zxi.txt&key=Hey', h.p = f + '/?file=zx.txt&key=Hey', h.t = f + '/?file=button.txt', h.m = f + '/?file=music.txt', h.n = f + '/?file=name.txt', h.s = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:2px solid #00ffcc;width:300px;box-sizing:border-box;animation: zxi-lightning-glow 3s linear infinite;';
    const j = h;
    let k = null, l = null, m = null, p = null, s = null, u = null, v = false;
    !async function () {


        const C = document.getElementById('zxi-auth-box');
        C && C.remove();
        const D = document.getElementById('zxi-floating-credit');
        D && D.remove();
        const F = document.getElementById('zxi-music-btn');
        F && F.remove();
        let G = 'BimzModz', H = 'https://t.me/zxiowner', I = '';
        try {
            const W = await fetch(((j.n + '&t=') + Date.now())), X = (await W.text()).split(/\r?\n/).map(Y => Y.trim()).filter(Y => '' !== Y);
            if (X[g]) {
                const Y = X[g].match(/"([^"]+)"/g);
                Y && (Y.length >= 3) && (G = Y[0].replace(/"/g, ''), H = Y[1].replace(/"/g, ''), I = Y[2].replace(/"/g, ''));
            }
        }
        catch (Z) {

        }
        const J = document.createElement('style');
        J.textContent = '\n            @keyframes zxi-lightning-glow {\n                0% { box-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2); border-color: #00ffcc; }\n                25% { box-shadow: 0 0 15px #00e6b8, 0 0 25px #00ffcc, inset 0 0 10px rgba(0,255,204,0.4); border-color: #00e6b8; }\n                30% { box-shadow: 0 0 8px #00ffcc, 0 0 12px #00ffcc, inset 0 0 6px rgba(0,255,204,0.3); border-color: #00ffcc; }\n                35% { box-shadow: 0 0 25px #00ffff, 0 0 40px #00ffcc, inset 0 0 15px rgba(0,255,204,0.5); border-color: #00ffff; }\n                70% { box-shadow: 0 0 15px #00e6b8, 0 0 25px #00ffcc, inset 0 0 10px rgba(0,255,204,0.4); border-color: #00e6b8; }\n                73% { box-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2); border-color: #00ffcc; }\n                100% { box-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2); border-color: #00ffcc; }\n            }\n            @keyframes zxi-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }\n            \n            .zxi-clickable-credit {\n                position: fixed;\n                bottom: 14px; right: 20px; font-size: 18px; font-weight: bold;\n                font-family: \'Courier New\', Courier, monospace; letter-spacing: 1px;\n                z-index: 2147483647; text-decoration: none; cursor: pointer;\n                background: transparent; border: none; padding: 0; margin: 0;\n                animation: zxi-rainbow-glow 3s linear infinite;\n            }\n            @keyframes zxi-rainbow-glow {\n                0% { color: #ff0000; text-shadow: 0 0 6px #ff0000; }\n                16% { color: #ff7f00; text-shadow: 0 0 6px #ff7f00; }\n                33% { color: #ffff00; text-shadow: 0 0 6px #ffff00; }\n                50% { color: #00ff00; text-shadow: 0 0 6px #00ff00; }\n                66% { color: #00ffff; text-shadow: 0 0 6px #00ffff; }\n                83% { color: #0000ff; text-shadow: 0 0 6px #0000ff; }\n                100% { color: #8b00ff; text-shadow: 0 0 6px #8b00ff; }\n            }\n            \n            .zxi-mode-btn {\n                width: 100%; border: 1px solid rgba(0,255,204,0.3); padding: 12px;\n                border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 14px;\n                letter-spacing: 1.5px; margin-bottom: 12px; color: #fff;\n                transition: all 0.3s ease; text-transform: uppercase;\n            }\n            .zxi-btn-fast { background: linear-gradient(90deg, rgba(0,255,150,0.1), rgba(0,255,150,0.2)); border-color: #00ff96; box-shadow: 0 0 8px rgba(0,255,150,0.2); }\n            .zxi-btn-fast:hover { background: #00ff96; color: #030712; box-shadow: 0 0 15px #00ff96; }\n            \n            .zxi-btn-secure { background: linear-gradient(90deg, rgba(255,170,0,0.1), rgba(255,170,0,0.2)); border-color: #ffaa00; box-shadow: 0 0 8px rgba(255,170,0,0.2); }\n            .zxi-btn-secure:hover { background: #ffaa00; color: #030712; box-shadow: 0 0 15px #ffaa00; }\n            \n            .zxi-btn-plus { background: linear-gradient(90deg, rgba(255,0,128,0.1), rgba(255,0,128,0.2)); border-color: #ff0080; box-shadow: 0 0 8px rgba(255,0,128,0.2); }\n            .zxi-btn-plus:hover { background: #ff0080; color: #fff; box-shadow: 0 0 15px #ff0080; }\n\n            .zxi-btn-safe { background: linear-gradient(90deg, rgba(0,204,255,0.1), rgba(0,204,255,0.2)); border-color: #00ccff; box-shadow: 0 0 8px rgba(0,204,255,0.2); }\n            .zxi-btn-safe:hover { background: #00ccff; color: #030712; box-shadow: 0 0 15px #00ccff; }\n\n            .zxi-btn-main-choice { background: linear-gradient(90deg, rgba(0,255,204,0.1), rgba(0,255,204,0.2)); border-color: #00ffcc; box-shadow: 0 0 8px rgba(0,255,204,0.2); }\n            .zxi-btn-main-choice:hover { background: #00ffcc; color: #030712; box-shadow: 0 0 15px #00ffcc; }\n\n            .zxi-btn-proxy-choice { background: linear-gradient(90deg, rgba(139,0,255,0.1), rgba(139,0,255,0.2)); border-color: #8b00ff; box-shadow: 0 0 8px rgba(139,0,255,0.2); }\n            .zxi-btn-proxy-choice:hover { background: #8b00ff; color: #fff; box-shadow: 0 0 15px #8b00ff; }\n        ', document.head.appendChild(J);
        const K = document.createElement('a');
        K.id = 'zxi-floating-credit', K.className = 'zxi-clickable-credit', K.innerText = '@zxiowner', K.href = H, K.target = '_blank', document.body.appendChild(K);
        const L = document.createElement('button');
        L.id = 'zxi-music-btn', L.style.cssText = 'position:fixed; bottom:15px; left:15px; background:rgba(6,10,23,0.95); border:2px solid rgba(0,255,204,0.5); color:#ff4444; border-radius:50%; width:45px; height:45px; cursor:pointer; font-size:18px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 15px rgba(0,0,0,0.5); transition:all 0.3s ease; z-index:2147483647; outline:none;', L.textContent = '\uD83D\uDD07', document.body.appendChild(L);
        const M = document.createElement('div');
        M.id = 'zxi-auth-box', M.style.cssText = j.s, M.innerHTML = '\n          <h3 style="margin:0 0 6px 0;color:#00ffcc;font-size:20px;letter-spacing:1.5px;font-weight:800;text-shadow:0 0 12px rgba(0,255,204,0.5); text-transform: uppercase;">' + G + ' SYSTEM AUTH</h3>\n          <p style="margin:0 0 20px 0;color:#64748b;font-size:11px;letter-spacing:2px;font-weight:600;">ENTER LICENSE KEY</p>\n          <input type="text" id="zxi-key-input" placeholder="ENTER KEY HERE" style="width:100%;padding:12px;margin-bottom:16px;border:1px solid rgba(0,255,204,0.4);border-radius:8px;background:rgba(7,11,25,0.6);color:#fff;text-align:center;box-sizing:border-box;font-size:13px;font-weight:600;letter-spacing:1px;outline:none;transition:all 0.3s ease;box-shadow:inset 0 2px 4px rgba(0,0,0,0.5);">\n          <button id="zxi-login-btn" style="width:100%;background:#00ffcc;color:#030712;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:0.5px;margin-bottom:12px;box-shadow:0 4px 12px rgba(0,255,204,0.3);transition:all 0.2s ease;">VERIFY & RUN</button>\n          <button id="zxi-telegram-btn" style="width:100%;background:#229ED9;color:#fff;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:0.5px;box-shadow:0 4px 12px rgba(34,158,217,0.25);">TELEGRAM</button>\n          <div id="zxi-status" style="margin-top:16px;font-size:11px;font-weight:700;color:#64748b;letter-spacing:1.5px;">READY</div>\n        ', document.body.appendChild(M), L.addEventListener('click', async () => {
            if (!v) {
                if (!k) {
                    try {
                        v = true, L.textContent = '\u23F3';
                        const a2 = await fetch(((j.m + '&t=') + Date.now())), a3 = (await a2.text()).trim();
                        if (!a3 || !a3.startsWith('http'))
                            return v = false, void (L.textContent = '\uD83D\uDD07');
                        const a4 = await fetch(a3), a5 = URL.createObjectURL(await a4.blob());
                        k = new Audio(a5), k.loop = true, k.crossOrigin = 'anonymous';
                    }
                    catch (a6) {
                        return v = false, void (L.textContent = '\uD83D\uDD07');
                    }
                    v = false;
                }
                l && ('suspended' === l.state) && await l.resume(), k.paused ? (await async function () {
                    if (!l)
                        try {
                            l = new (window.AudioContext || window.webkitAudioContext)(), m = l.createAnalyser(), m.fftSize = 512, m.smoothingTimeConstant = 0.3, p = new Uint8Array(m.frequencyBinCount), s = l.createMediaElementSource(k), s.connect(m), m.connect(l.destination);
                        }
                        catch (a9) {

                        }
                }(), k.play().then(() => {
                    (L.textContent = '\uD83D\uDD0A', L.style.color = '#00ffcc', L.style.borderColor = '#00ffcc', L.style.boxShadow = '0 0 15px rgba(0,255,204,0.6)');
                }).catch(a7 => {
                })) : (k.pause(), L.textContent = '\uD83D\uDD07', L.style.color = '#ff4444', L.style.borderColor = 'rgba(0,255,204,0.5)', L.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)');
            }
        });
        const N = document.getElementById('zxi-key-input');
        N.addEventListener('focus', () => {
            const a0 = {};
            const a1 = a0;
            (N.style.border = '1px solid #00ffcc', N.style.boxShadow = '0 0 10px rgba(0,255,204,0.25), inset 0 2px 4px rgba(0,0,0,0.5)');
        });
        const O = document.getElementById('zxi-login-btn'), P = document.getElementById('zxi-telegram-btn'), Q = document.getElementById('zxi-status');
        function R(a0, a1) {
            const a2 = {
                FzTSJ: function (aj, ak) {
                    return (aj !== ak);
                }, SAZHX: 'EznKP', NeZpj: function (aj, ak) {
                    return (aj * ak);
                }, Bhvjb: function (aj, ak) {
                    return (aj < ak);
                }, stLBo: function (aj, ak) {
                    return (aj - ak);
                }, pUFhY: function (aj, ak) {
                    return (aj + ak);
                }, iEqno: function (aj, ak, al) {
                    return aj(ak, al);
                }, ijozt: 'textarea', dGApF: 'copy', SzoRT: 'Audio engine malfunction:', XLirV: 'ocgkK', ZhXJr: 'yyEqL', zGxWs: function (aj, ak) {
                    return aj(ak);
                }, KUHXG: 'return (function() ', eSgdi: '{}.constructor("return this")( )', BEiVR: function (aj, ak) {
                    return (aj === ak);
                }, sfrsI: 'hPXmX', OUNnp: '<span style=\'color:#ff4444;\'>SERVER ERROR! TRY AGAIN</span>', XsIuv: 'MWqll', VfagB: 'iUtuJ', pPkkB: function (aj, ak) {
                    return (aj !== ak);
                }, rlWCN: 'erxrx', KSqIv: 'PXxqN', JKOCs: function (aj) {
                    return aj();
                }, VsCwY: 'MAKGN', feuNZ: function (aj, ak) {
                    return (aj * ak);
                }, XHvsv: function (aj, ak) {
                    return (aj * ak);
                }, FuDau: 'REDIRECT ERROR!', zeFgp: 'ZAYJK', IVLUm: 'VFYEH', RXoQa: function (aj, ak) {
                    return aj(ak);
                }, zvyMh: function (aj, ak) {
                    return (aj > ak);
                }, zQusc: function (aj, ak) {
                    return (aj > ak);
                }, TwbBV: function (aj, ak) {
                    return (aj - ak);
                }, mBBxj: function (aj, ak) {
                    return (aj * ak);
                }, qBOVO: function (aj, ak) {
                    return (aj === ak);
                }, Gowjx: 'jTotx', uPFZD: function (aj, ak) {
                    return (aj < ak);
                }, vpKOT: 'rgba(255,255,255,0.8)', ThcPm: 'white', oYFdb: function (aj, ak) {
                    return (aj + ak);
                }, PwkZx: function (aj, ak) {
                    return (aj * ak);
                }, aUwzC: function (aj, ak) {
                    return (aj * ak);
                }, rzbFR: function (aj, ak) {
                    return (aj > ak);
                }, AZZIP: function (aj, ak) {
                    return (aj < ak);
                }, EGXNk: function (aj, ak) {
                    return (aj + ak);
                }, TbLPa: 'rgba(255,255,255,0.04)', CGbzD: 'YstPc', zrvul: 'SUFLe', cmSgm: function (aj, ak) {
                    return (aj * ak);
                }, naNfL: 'Link Copied Successfully!', SsiNX: function (aj, ak) {
                    return (aj === ak);
                }, WJSEz: 'ejmtS', sSfFV: function (aj, ak) {
                    return (aj * ak);
                }, XrlQf: function (aj, ak) {
                    return (aj * ak);
                }, TAZjM: function (aj, ak) {
                    return (aj / ak);
                }, kmTvu: function (aj, ak) {
                    return (aj <= ak);
                }, GRLYq: function (aj, ak) {
                    return aj(ak);
                }, XUUkG: function (aj, ak) {
                    return aj(ak);
                }
            }, a3 = document.createElement('div');
            a3.style.cssText = '\n                position:fixed; top:0; left:0; width:100%; height:100%; \n                background:rgba(3,7,18,0.4); backdrop-filter:blur(3px); -webkit-backdrop-filter:blur(3px); z-index:2147483647; \n                font-family:system-ui,-apple-system,sans-serif; overflow:hidden;\n            ', a3.innerHTML = '\n                <canvas id="zxi-premium-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></canvas>\n\n                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); text-align:center; z-index:2;">\n                    <div style="position:relative; width:320px; height:320px; margin:0 auto; display:flex; align-items:center; justify-content:center;">\n                        <!-- \u0998\u09C2\u09B0\u09CD\u09A3\u09BE\u09AF\u09BC\u09AE\u09BE\u09A8 \u09B0\u0999\u09BF\u09A8 \u09B0\u09BF\u0982 -->\n                        <div style="position:absolute; width:280px; height:280px; animation: zxi-premium-spin 4s linear infinite;">\n                            <svg width="280" height="280" viewBox="0 0 280 280">\n                                <circle cx="140" cy="140" r="120" fill="none" stroke="url(#grad1)" stroke-width="6" stroke-linecap="round" stroke-dasharray="200 400" />\n                                <circle cx="140" cy="140" r="110" fill="none" stroke="url(#grad2)" stroke-width="4" stroke-linecap="round" stroke-dasharray="150 450" />\n                                <circle cx="140" cy="140" r="130" fill="none" stroke="url(#grad3)" stroke-width="2" stroke-linecap="round" stroke-dasharray="100 500" />\n                                <defs>\n                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">\n                                        <stop offset="0%" stop-color="#ff0080" />\n                                        <stop offset="50%" stop-color="#00ffcc" />\n                                        <stop offset="100%" stop-color="#ffaa00" />\n                                    </linearGradient>\n                                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">\n                                        <stop offset="0%" stop-color="#00ccff" />\n                                        <stop offset="50%" stop-color="#ff00ff" />\n                                        <stop offset="100%" stop-color="#00ff96" />\n                                    </linearGradient>\n                                    <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">\n                                        <stop offset="0%" stop-color="#ff3300" />\n                                        <stop offset="50%" stop-color="#ffff00" />\n                                        <stop offset="100%" stop-color="#00ffff" />\n                                    </linearGradient>\n                                </defs>\n                            </svg>\n                        </div>\n\n                        <!-- \u09AE\u09C2\u09B2 \u0995\u09BE\u0989\u09A8\u09CD\u099F\u09A1\u09BE\u0989\u09A8 \u09B8\u09BE\u09B0\u09CD\u0995\u09C7\u09B2 -->\n                        <svg width="240" height="240" style="transform:rotate(-90deg); position:relative; z-index:3;">\n                            <circle cx="120" cy="120" r="85" fill="rgba(6,10,23,0.94)" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>\n                            <circle id="progress" cx="120" cy="120" r="85" fill="none" stroke="#00ccff" stroke-width="10" stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round" style="transition: stroke-dashoffset 1s linear;"></circle>\n                        </svg>\n                        <div id="countdown-text" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:52px; font-weight:900; color:#fff; text-shadow:0 0 15px #00ccff; z-index:4;">' + a0 + '</div>\n                    </div>\n                    <p id="zxi-redirect-label" style="margin-top:20px; color:#00ccff; font-size:15px; font-weight:700; letter-spacing:3px; text-shadow:0 0 10px rgba(0,204,255,0.4);">REDIRECTING...</p>\n                </div>\n            ', document.body.appendChild(a3);
            const a4 = document.createElement('style');
            a4.textContent = '\n                @keyframes zxi-premium-spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n            ', document.head.appendChild(a4);
            const a5 = document.getElementById('zxi-premium-canvas'), a6 = a5.getContext('2d');
            let a7 = window.innerWidth, a8 = window.innerHeight;
            a5.width = a7, a5.height = a8;
            const a9 = [];
            for (let aj = 0; (aj < 8); aj++)
                a9.push({
                    x: (Math.random() * a7), y: ((Math.random() * a8) * 0.4), scale: ((1.5 * Math.random()) + 0.5), speed: ((0.8 * Math.random()) + 0.2), opacity: ((0.5 * Math.random()) + 0.2)
                });
            const aa = [];
            for (let ak = 0; (ak < 220); ak++)
                aa.push({
                    x: (Math.random() * a7), y: (Math.random() * a8), length: ((25 * Math.random()) + 20), speed: ((5 * Math.random()) + 3), opacity: ((0.4 * Math.random()) + 0.25), wind: ((2 * Math.random()) - 1)
                });
            let ab = 0, ac = [], ad = false;
            function ae(al) {
                a6.save(), a6.globalAlpha = al.opacity, a6.fillStyle = '#ffffff', a6.filter = 'blur(8px)', a6.beginPath(), a6.arc(al.x, al.y, (40 * al.scale), 0, (2 * Math.PI)), a6.arc((al.x + (50 * al.scale)), (al.y - (20 * al.scale)), (50 * al.scale), 0, (2 * Math.PI)), a6.arc((al.x + (100 * al.scale)), al.y, (40 * al.scale), 0, (2 * Math.PI)), a6.fill(), a6.restore();
            }
            !function al() {
                const am = {
                    OfRBE: function (ao, ap) {
                        return (ao !== ap);
                    }, HOfbK: 'EznKP', xYTol: function (ao, ap) {
                        return (ao * ap);
                    }, AjLot: function (ao, ap) {
                        return (ao < ap);
                    }, wkock: function (ao, ap) {
                        return (ao - ap);
                    }, dpwjJ: function (ao, ap) {
                        return (ao * ap);
                    }, fXvND: function (ao, ap) {
                        return (ao + ap);
                    }, IHORz: function (ao, ap) {
                        return (ao * ap);
                    }, MzKMR: function (ao, ap, aq) {
                        return ao(ap, aq);
                    }, bgTMG: function (ao, ap, aq) {
                        return ao(ap, aq);
                    }, ETzGV: 'textarea', ZpcyD: 'copy', VwnON: 'Audio engine malfunction:', ziSEz: function (ao, ap) {
                        return (ao !== ap);
                    }, vsUhL: 'ocgkK', bxiXc: 'yyEqL', LhACl: function (ao, ap) {
                        return ao(ap);
                    }, IPXlV: function (ao, ap) {
                        return (ao + ap);
                    }, LZqrj: 'return (function() ', dTARw: '{}.constructor("return this")( )', KmISw: function (ao, ap) {
                        return (ao === ap);
                    }, bYLaW: 'hPXmX', EIVso: '<span style=\'color:#ff4444;\'>SERVER ERROR! TRY AGAIN</span>', mISmp: 'MWqll', oaDAK: 'iUtuJ', RbnJD: function (ao, ap) {
                        return (ao !== ap);
                    }, ZyBOj: 'erxrx', tgcTL: 'PXxqN', vMPvC: function (ao) {
                        return ao();
                    }
                };
                const ao = ((5000 * Math.random()) + 5000);
                a2.iEqno(setTimeout, () => {
                    !function () {
                        ab = 0.9, ad = true, ac = [];
                        let as = (Math.random() * a7), at = -10;
                        for (; (at < (0.6 * a8));)
                            ac.push({
                                x: as, y: at
                            }), as += ((60 * Math.random()) - 30), at += ((35 * Math.random()) + 15);
                        am.MzKMR(setTimeout, () => {
                            const au = {};
                            const av = au;
                            ab = 0, ad = false;
                        }, 150), setTimeout((() => {
                            ab = 0.6;
                        }), 300), am.bgTMG(setTimeout, () => {
                            const au = {};
                            const av = au;
                            ab = 0;
                        }, 450);
                    }(), al();
                }, ao);
            }(), function am() {
                u = requestAnimationFrame(am), a6.clearRect(0, 0, a7, a8), (ab > 0) && (a6.fillStyle = 'rgba(255,255,255,' + ab + ')', a6.fillRect(0, 0, a7, a8));
                for (const ap of a9)
                    ae(ap), ap.x += ap.speed, ((ap.x - 200) > a7) && (ap.x = -200, ap.y = ((Math.random() * a8) * 0.4));
                if (ad && (ac.length > 1)) {
                    a6.beginPath(), a6.moveTo(ac[0].x, ac[0].y);
                    for (let aq = 1; (aq < ac.length); aq++)
                        a6.lineTo(ac[aq].x, ac[aq].y);
                    a6.strokeStyle = 'rgba(255,255,255,0.8)', a6.lineWidth = 3, a6.shadowBlur = 15, a6.shadowColor = 'white', a6.stroke(), a6.shadowBlur = 0;
                }
                for (const ar of aa)
                    a6.beginPath(), a6.moveTo(ar.x, ar.y), a6.lineTo((ar.x + (5 * ar.wind)), (ar.y + ar.length)), a6.strokeStyle = 'rgba(174,194,224,' + ar.opacity + ')', a6.lineWidth = 1.6, a6.stroke(), ar.y += ar.speed, ar.x += (2 * ar.wind), (ar.y > a8) && (ar.y = -ar.length, ar.x = (Math.random() * a7)), (ar.x > (a7 + 50)) && (ar.x = -50), (ar.x < -50) && (ar.x = (a7 + 50));
                a6.fillStyle = 'rgba(255,255,255,0.04)';
                for (let as = 0; (as < 15); as++) {
                    const at = (Math.random() * a7), au = (a8 - (8 * Math.random()));
                    a6.fillRect(at, au, (8 * Math.random()), 1);
                }
            }(), window.addEventListener('resize', () => {
                const an = {};
                const ao = an;
                (a7 = window.innerWidth, a8 = window.innerHeight, a5.width = a7, a5.height = a8, aa.forEach(aq => {
                    (aq.x = (Math.random() * a7), aq.y = (Math.random() * a8));
                }));
            });
            const af = a3.querySelector('#progress'), ag = a3.querySelector('#countdown-text');
            let ah = a0;
            const ai = setInterval((() => {
                ah--, ag.textContent = ah, af.style.strokeDashoffset = ((ah / a0) * 534), (ah <= 0) && (clearInterval(ai), cancelAnimationFrame(u), k && k.pause(), L && L.remove(), a3.remove(), window.location.replace(a1));
            }), 1000);
        }
        function S(a0, a1, a2 = false) {
            M.remove(), (50 !== a0) && (80 !== a0) || async function () {
                if (((!k) && (!v))) {
                    try {
                        v = true;
                        const a5 = await fetch(((j.m + '&t=') + Date.now())), a6 = (await a5.text()).trim();
                        if (!a6 || !a6.startsWith('http'))
                            return void (v = false);
                        const a7 = await fetch(a6), a8 = URL.createObjectURL(await a7.blob());
                        k = new Audio(a8), k.loop = true, k.crossOrigin = 'anonymous';
                    }
                    catch (a9) {
                        return void (v = false);
                    }
                    v = false;
                }
                if (k)
                    try {
                        if (l || (l = new (window.AudioContext || window.webkitAudioContext)(), m = l.createAnalyser(), m.fftSize = 512, m.smoothingTimeConstant = 0.3, p = new Uint8Array(m.frequencyBinCount), s = l.createMediaElementSource(k), s.connect(m), m.connect(l.destination)), ('suspended' === l.state) && await l.resume(), k.paused) {
                            await k.play();
                            const aa = document.getElementById('zxi-music-btn');
                            aa && (aa.textContent = '\uD83D\uDD0A', aa.style.color = '#00ffcc', aa.style.borderColor = '#00ffcc', aa.style.boxShadow = '0 0 15px rgba(0,255,204,0.6)');
                        }
                    }
                    catch (ab) {
                    }
            }();
            const a4 = document.createElement('div');
            a4.style.cssText = '\n                position:fixed; top:0; left:0; width:100%; height:100%; \n                background:rgba(3,7,18,0.85); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); z-index:2147483647; \n                display:flex; align-items:center; justify-content:center; font-family:system-ui,-apple-system,sans-serif;\n            ', a4.innerHTML = '\n                <div style="text-align:center; background:rgba(6,10,23,0.95); padding:35px 30px; border-radius:16px; border:1px solid #00ffcc; width:290px; animation: zxi-lightning-glow 3s linear infinite;">\n                    <div style="width: 45px; height: 45px; border: 4px solid rgba(0,254,204,0.1); border-top: 4px solid #00ffcc; border-radius: 50%; margin: 0 auto 20px auto; animation: zxi-spin 0.8s linear infinite;"></div>\n                    <p id="zxi-check-text" style="color:#00ffcc; font-size:15px; font-weight:700; margin:0; letter-spacing:1.5px; text-shadow:0 0 8px rgba(0,255,204,0.3);">CHECKING UPDATE...</p>\n                </div>\n            ', document.body.appendChild(a4), setTimeout((async () => {
                let a5 = false;
                try {
                    const a7 = a2 ? 'https://zxi.zxidesert.workers.dev/?mode=proxy' : 'https://zxi.zxidesert.workers.dev/', a8 = await fetch(a7);
                    (await a8.text()).includes('GitHub Updated') && (a5 = true);
                }
                catch (a9) {
                }
                const a6 = document.getElementById('zxi-check-text');
                a6.innerHTML = a5 ? '<span style=\'color:#00ffcc;\'>Link Updated Successfully! ✓</span>' : '<span style=\'color:#ff4444;\'>No Update Available!</span>', setTimeout((async () => {
                    a4.remove();
                    try {
                        const aa = await fetch(((((a1 + '&user=') + g) + '&t=') + Date.now())), ab = (await aa.text()).trim();
                        ab.startsWith('http') && R(a0, ab);
                    }
                    catch (ac) {
                        alert('REDIRECT ERROR!');
                    }
                }), 1500);
            }), 3500);
        }
        function T(a0) {
            const a2 = ('powerplus' === a0), a3 = a2 ? 'ALL EARNLINKS' : 'ALL VPLINK\'S', a4 = a2 ? 'SUPPORTED: EARNLINKS ONLY' : 'SUPPORTED: VPLINK ONLY', a5 = a2 ? 'https://earnlinks.in/...' : 'https://vplink.in/...';
            M.innerHTML = '\n                <button id="zxi-back-btn" style="position:absolute;top:15px;left:15px;background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;font-weight:bold;">❮</button>\n                <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;">' + a3 + '</h3>\n                <p style="margin:0 0 20px 0;color:#64748b;font-size:10px;letter-spacing:1px;">' + a4 + '</p>\n                <input type="text" id="zxi-bypass-input" placeholder="' + a5 + '" style="width:100%;padding:12px;margin-bottom:16px;border:1px solid rgba(0,255,204,0.4);border-radius:8px;background:rgba(7,11,25,0.6);color:#fff;text-align:center;box-sizing:border-box;">\n                <button id="zxi-fetch-bypass-btn" style="width:100%;background:#00ffcc;color:#030712;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;">START BYPASS</button>\n                <div id="zxi-bypass-status" style="margin-top:16px;font-size:11px;font-weight:700;color:#64748b;">READY</div>\n            ', document.getElementById('zxi-back-btn').addEventListener('click', U);
            const a6 = document.getElementById('zxi-bypass-input'), a7 = document.getElementById('zxi-fetch-bypass-btn'), a8 = document.getElementById('zxi-bypass-status');
            a7.addEventListener('click', async () => {
                const a9 = a6.value.trim();
                if (a2) {
                    if (!a9 || !a9.includes('earnlinks.in/'))
                        return void (a8.innerHTML = '<span style=\'color:#ff4444;\'>INVALID LINK! URL MUST BE EARNLINKS.</span>');
                }
                else {
                    if (!a9 || !a9.includes('vplink.in/'))
                        return void (a8.innerHTML = '<span style=\'color:#ff4444;\'>INVALID LINK! URL MUST BE VPLINK.</span>');
                }
                a8.innerHTML = '<span style=\'color:#00ffcc;\'>BYPASSING LINK VIA Zxi... PLEASE WAIT</span>', a7.disabled = true;
                try {
                    const aa = await fetch((f + '/api/bypass?mode=' + a0 + '&user=' + g + '&url=' + encodeURIComponent(a9))), ab = await aa.json();
                    ab && ('success' === ab.status) && ab.bypassed_url ? (a8.innerHTML = '<span style=\'color:#00ff96;\'>BYPASS SUCCESSFUL! ✓</span>', a7.outerHTML = '<button id="zxi-copy-bypass-btn" style="width:100%;background:linear-gradient(90deg, #00ffcc, #00ccff);color:#030712;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;letter-spacing:1px;box-shadow:0 4px 15px rgba(0,255,204,0.4);animation: zxi-lightning-glow 2s linear infinite;">📋 COPY BYPASS LINK</button>', document.getElementById('zxi-copy-bypass-btn').addEventListener('click', () => {
                        const ad = ae => {
                            const af = document.createElement('textarea');
                            af.value = ae, document.body.appendChild(af), af.select(), document.execCommand('copy'), af.remove();
                        };
                        navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(ab.bypassed_url).then(() => {
                            alert('Link Copied Successfully!'), M.remove();
                        }).catch(() => {
                            ad(ab.bypassed_url), alert('Link Copied Successfully!'), M.remove();
                        }) : (ad(ab.bypassed_url), alert('Link Copied Successfully!'), M.remove());
                    })) : (a8.innerHTML = '<span style=\'color:#ff4444;\'>TRY AGAIN</span>', a7.disabled = false);
                }
                catch (ac) {
                    a8.innerHTML = '<span style=\'color:#ff4444;\'>SERVER ERROR! TRY AGAIN</span>', a7.disabled = false;
                }
            });
        }
        function U() {
            const a0 = {};
            const a1 = a0;
            M.innerHTML = '\n                <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;">SELECT SYSTEM ENGINE</h3>\n                <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE YOUR SPECIFIC MODULE</p>\n                <button id="zxi-choice-aincrad" class="zxi-mode-btn zxi-btn-main-choice">❄️ Aincrad</button>\n                <button id="zxi-choice-aincrad-proxy" class="zxi-mode-btn zxi-btn-proxy-choice">🛰️ Aincrad Proxy</button>\n                <button id="zxi-choice-powerzx" class="zxi-mode-btn zxi-btn-secure">🔥 ALL VPLINK\'S</button>\n                <button id="zxi-choice-powerplus" class="zxi-mode-btn zxi-btn-plus">ALL EARNLINKS</button>\n            ', document.getElementById('zxi-choice-aincrad').addEventListener('click', () => {
                M.innerHTML = '\n                    <button id="zxi-back-to-main" style="position:absolute;top:15px;left:15px;background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;font-weight:bold;">❮</button>\n                    <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;">SELECT SYSTEM MODE</h3>\n                    <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE SECURITY BYPASS METHOD</p>\n                    <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE (25s)</button>\n                    <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE (50s)</button>\n                    <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE (80s)</button>\n                ', document.getElementById('zxi-back-to-main').addEventListener('click', U), document.getElementById('zxi-btn-fast').addEventListener('click', () => S(25, j.r, false)), document.getElementById('zxi-btn-secure').addEventListener('click', () => S(50, j.r, false)), document.getElementById('zxi-btn-safe').addEventListener('click', () => S(80, j.r, false));
            }), document.getElementById('zxi-choice-aincrad-proxy').addEventListener('click', () => {
                M.innerHTML = '\n                    <button id="zxi-back-to-main" style="position:absolute;top:15px;left:15px;background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;font-weight:bold;">❮</button>\n                    <h3 style="margin:0 0 8px 0;color:#8b00ff;font-size:18px;font-weight:800;">SELECT PROXY MODE</h3>\n                    <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE PROXY BYPASS METHOD</p>\n                    <button id="zxi-proxy-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST PROXY (25s)</button>\n                    <button id="zxi-proxy-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE PROXY (50s)</button>\n                    <button id="zxi-proxy-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE PROXY (80s)</button>\n                ', document.getElementById('zxi-back-to-main').addEventListener('click', U), document.getElementById('zxi-proxy-fast').addEventListener('click', () => S(25, j.p, true)), document.getElementById('zxi-proxy-secure').addEventListener('click', () => S(50, j.p, true)), document.getElementById('zxi-proxy-safe').addEventListener('click', () => S(80, j.p, true));
            }), document.getElementById('zxi-choice-powerzx').addEventListener('click', () => T('power')), document.getElementById('zxi-choice-powerplus').addEventListener('click', () => T('powerplus'));
        }
        P.addEventListener('click', () => window.open(H, '_blank')), O.addEventListener('click', () => {
            const a1 = N.value.trim();
            a1 ? (Q.innerHTML = '<span style=\'color:#00ffcc;\'>CONNECTING SERVER...</span>', setTimeout((() => {
                ('' !== I) && (a1 === I) ? (Q.innerHTML = '<span style=\'color:#00ffcc;\'>KEY VALIDATED! ✓</span>', setTimeout(U, 800)) : Q.innerHTML = '<span style=\'color:#ff4444;\'>INVALID LICENSE KEY!</span>';
            }), 500)) : Q.innerHTML = '<span style=\'color:#ff4444;\'>PLEASE INPUT KEY!</span>';
        });
    }();
})();
