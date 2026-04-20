import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import r, { createContext as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { createPortal as u } from "react-dom";
import { AlertCircle as d, Check as f, CheckCircle as p, ChevronDown as m, Forward as h, Link2 as g, Loader2 as _, Mail as v, Menu as y, Monitor as b, Moon as x, PanelLeft as S, PanelLeftClose as C, PanelLeftOpen as w, PenSquare as T, Reply as E, Search as D, SquareDashedMousePointer as O, SquareTerminal as k, Sun as A, X as j } from "lucide-react";
import { Link as M, NavLink as ee, Outlet as N, useLocation as te, useNavigate as P } from "react-router-dom";
//#region src/components/ui/Badge.tsx
var ne = {
	default: "bg-gray-100 text-gray-600",
	success: "bg-success-light text-success",
	error: "bg-error-light text-error",
	warning: "bg-warning-light text-warning"
};
function re({ variant: e = "default", children: n }) {
	return /* @__PURE__ */ t("span", {
		className: `
        inline-flex items-center rounded-full px-2 py-0.5
        text-xs font-medium
        ${ne[e]}
      `,
		children: n
	});
}
//#endregion
//#region src/components/ui/Button.tsx
var ie = {
	primary: "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700",
	secondary: "bg-surface text-gray-700 border border-gray-200 hover:bg-gray-50 active:bg-gray-100",
	ghost: "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-200",
	danger: "bg-surface text-error border border-gray-200 hover:bg-error-light active:bg-red-100"
}, ae = {
	sm: "h-7 px-2.5 text-sm gap-1.5 rounded-sm",
	md: "h-8 px-3 text-base gap-2 rounded-md",
	lg: "h-9 px-4 text-md gap-2 rounded-md"
};
function oe({ variant: e = "secondary", size: r = "md", icon: i, children: a, className: o = "", disabled: s, ...c }) {
	return /* @__PURE__ */ n("button", {
		className: `
        inline-flex items-center justify-center font-medium
        transition-all duration-150 cursor-pointer
        active:scale-[0.97]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${ie[e]}
        ${ae[r]}
        ${o}
      `,
		disabled: s,
		...c,
		children: [i && /* @__PURE__ */ t("span", {
			className: "shrink-0",
			children: i
		}), a]
	});
}
//#endregion
//#region src/components/ui/ContextMenu.tsx
function se({ x: e, y: r, items: i, onClose: a }) {
	let s = c(null);
	return o(() => {
		function e(e) {
			s.current && !s.current.contains(e.target) && a();
		}
		function t(e) {
			e.key === "Escape" && a();
		}
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [a]), o(() => {
		if (!s.current) return;
		let t = s.current.getBoundingClientRect();
		t.right > window.innerWidth && (s.current.style.left = `${e - t.width}px`), t.bottom > window.innerHeight && (s.current.style.top = `${r - t.height}px`);
	}, [e, r]), u(/* @__PURE__ */ t("div", {
		ref: s,
		className: "fixed z-50 min-w-[200px] rounded-lg border border-gray-200 bg-surface py-1.5 shadow-lg",
		style: {
			top: r,
			left: e
		},
		children: i.map((e, r) => "separator" in e ? /* @__PURE__ */ t("div", { className: "my-1.5 border-t border-gray-100" }, r) : /* @__PURE__ */ n("button", {
			type: "button",
			onClick: () => {
				e.onClick?.(), a();
			},
			className: "flex w-full items-center gap-3 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer",
			children: [
				/* @__PURE__ */ t("span", {
					className: "flex w-4 items-center justify-center text-gray-400",
					children: e.icon
				}),
				/* @__PURE__ */ t("span", {
					className: "flex-1 text-left",
					children: e.label
				}),
				e.shortcut && /* @__PURE__ */ t("span", {
					className: "ml-4 text-xs text-gray-400",
					children: e.shortcut
				})
			]
		}, r))
	}), document.body);
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function ce({ icon: e, title: r, description: i, action: a }) {
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			e && /* @__PURE__ */ t("div", {
				className: "mb-3 text-gray-300",
				children: e
			}),
			/* @__PURE__ */ t("h3", {
				className: "text-md font-medium text-gray-900",
				children: r
			}),
			i && /* @__PURE__ */ t("p", {
				className: "mt-1 text-sm text-gray-400 max-w-sm",
				children: i
			}),
			a && /* @__PURE__ */ t("div", {
				className: "mt-4",
				children: a
			})
		]
	});
}
//#endregion
//#region src/components/ui/Input.tsx
function le({ label: e, hint: r, error: i, leadingIcon: a, trailingAction: o, className: s = "", id: c, ...l }) {
	let u = c || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ t("label", {
				htmlFor: u,
				className: "text-sm font-medium text-gray-700",
				children: e
			}),
			/* @__PURE__ */ n("div", {
				className: "relative flex items-center",
				children: [
					a && /* @__PURE__ */ t("span", {
						className: "pointer-events-none absolute left-3 flex items-center text-gray-400",
						children: a
					}),
					/* @__PURE__ */ t("input", {
						id: u,
						className: `
            h-9 w-full rounded-md border
            text-base text-gray-900
            placeholder:text-gray-400
            transition-colors duration-150
            ${a ? "pl-9" : "pl-3"}
            ${o ? "pr-9" : "pr-3"}
            ${i ? "border-error bg-error-light focus:border-error" : "border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-surface"}
            focus:outline-none
            ${s}
          `,
						...l
					}),
					o && /* @__PURE__ */ t("span", {
						className: "absolute right-2.5 flex items-center",
						children: o
					})
				]
			}),
			r && !i && /* @__PURE__ */ t("p", {
				className: "text-xs text-gray-400",
				children: r
			}),
			i && /* @__PURE__ */ t("p", {
				className: "text-xs text-error",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/KbdShortcut.tsx
function F({ keys: e }) {
	return /* @__PURE__ */ t("span", {
		className: "flex items-center gap-1 rounded-md border border-gray-200 bg-white px-1 py-1 text-xs text-semibold",
		children: e.map((e, r) => /* @__PURE__ */ n("span", {
			className: "flex items-center gap-0.5",
			children: [r > 0 && /* @__PURE__ */ t("span", {
				className: "font-semibold",
				children: "then"
			}), /* @__PURE__ */ t("kbd", {
				className: "rounded border border-gray-200 bg-white px-1 py-px font-sans text-xs font-bold leading-tight shadow-[0_1px_0_0_rgba(0,0,0,0.1)]",
				children: e
			})]
		}, r))
	});
}
//#endregion
//#region src/components/ui/Select.tsx
function ue({ label: e, options: r, hint: i, className: a = "", id: o, ...s }) {
	let c = o || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ t("label", {
				htmlFor: c,
				className: "text-sm font-medium text-gray-700",
				children: e
			}),
			/* @__PURE__ */ n("div", {
				className: "relative",
				children: [/* @__PURE__ */ t("select", {
					id: c,
					className: `
            h-9 w-full appearance-none rounded-md border
            border-gray-200 bg-gray-50 px-3 pr-8
            text-base text-gray-900
            transition-colors duration-150
            focus:border-gray-400 focus:bg-surface focus:outline-none
            ${a}
          `,
					...s,
					children: r.map((e) => /* @__PURE__ */ t("option", {
						value: e.value,
						children: e.label
					}, e.value))
				}), /* @__PURE__ */ t(m, {
					size: 14,
					className: "pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
				})]
			}),
			i && /* @__PURE__ */ t("p", {
				className: "text-xs text-gray-400",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/StatusMessage.tsx
var de = {
	saving: {
		icon: /* @__PURE__ */ t(_, {
			size: 14,
			className: "animate-spin"
		}),
		className: "text-gray-500"
	},
	success: {
		icon: /* @__PURE__ */ t(p, { size: 14 }),
		className: "text-success"
	},
	error: {
		icon: /* @__PURE__ */ t(d, { size: 14 }),
		className: "text-error"
	}
};
function fe({ status: e, children: r }) {
	let { icon: i, className: a } = de[e];
	return /* @__PURE__ */ n("div", {
		className: `inline-flex items-center gap-1.5 text-sm ${a}`,
		children: [i, /* @__PURE__ */ t("span", { children: r })]
	});
}
//#endregion
//#region src/components/ui/Textarea.tsx
function pe({ label: e, hint: r, error: i, className: a = "", id: o, ...s }) {
	let c = o || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ t("label", {
				htmlFor: c,
				className: "text-sm font-medium text-gray-700",
				children: e
			}),
			/* @__PURE__ */ t("textarea", {
				id: c,
				className: `
          w-full rounded-md border px-3 py-2
          text-base text-gray-900
          placeholder:text-gray-400
          transition-colors duration-150
          resize-y
          ${i ? "border-error bg-error-light focus:border-error" : "border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-surface"}
          focus:outline-none
          ${a}
        `,
				...s
			}),
			r && !i && /* @__PURE__ */ t("p", {
				className: "text-xs text-gray-400",
				children: r
			}),
			i && /* @__PURE__ */ t("p", {
				className: "text-xs text-error",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/Toggle.tsx
function me({ checked: e, onChange: r, label: i, description: a, disabled: o = !1 }) {
	return /* @__PURE__ */ n("label", {
		className: `
        inline-flex items-center gap-3 select-none
        ${o ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `,
		children: [/* @__PURE__ */ t("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: o,
			onClick: () => r(!e),
			className: `
          relative inline-flex h-5 w-9 shrink-0 items-center
          rounded-full transition-colors duration-200
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
          ${e ? "bg-accent" : "bg-gray-300"}
          ${o ? "cursor-not-allowed" : "cursor-pointer"}
        `,
			children: /* @__PURE__ */ t("span", { className: `
            inline-block h-3.5 w-3.5 rounded-full bg-white
            shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${e ? "translate-x-[18px]" : "translate-x-[3px]"}
          ` })
		}), (i || a) && /* @__PURE__ */ n("div", {
			className: "flex flex-col",
			children: [i && /* @__PURE__ */ t("span", {
				className: "text-base text-gray-900",
				children: i
			}), a && /* @__PURE__ */ t("span", {
				className: "text-xs text-gray-400",
				children: a
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/UndoToast.tsx
var I = 200;
function he({ icon: e, message: r, onUndo: i, onDismiss: a, duration: s = 5e3, undoLabel: d = "Undo", extraActionLabel: f, onExtraAction: p }) {
	let [m, h] = l(!1), [g, _] = l(!1), v = c(null), y = c(s), b = c(0), x = c(!1), S = c(null), C = c(a), w = c(i), T = c(p);
	C.current = a, w.current = i, T.current = p;
	let E = () => {
		v.current !== null && (window.clearTimeout(v.current), v.current = null);
	}, D = () => {
		x.current || (x.current = !0, E(), _(!0), window.setTimeout(() => C.current(), I));
	}, O = () => {
		E(), b.current = Date.now(), v.current = window.setTimeout(D, y.current);
	}, k = () => {
		v.current !== null && (E(), y.current = Math.max(0, y.current - (Date.now() - b.current)));
	};
	return o(() => {
		let e = requestAnimationFrame(() => h(!0)), t = window.setTimeout(O, I);
		return () => {
			cancelAnimationFrame(e), clearTimeout(t), E();
		};
	}, []), o(() => {
		let e = (e) => {
			e.key === "Escape" ? D() : e.key === "z" && (e.metaKey || e.ctrlKey) && !e.shiftKey && (e.preventDefault(), E(), w.current(), D());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, []), typeof document > "u" ? null : u(/* @__PURE__ */ t("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-8 z-30 flex justify-center px-4",
		children: /* @__PURE__ */ n("div", {
			onMouseEnter: () => {
				k(), S.current?.style.setProperty("animation-play-state", "paused");
			},
			onMouseLeave: () => {
				O(), S.current?.style.setProperty("animation-play-state", "running");
			},
			className: `
          pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-2xl
          border border-black/40 bg-[#181512] px-4 py-2.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)]
          transition-all duration-200 ease-out
          ${m && !g ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
        `,
			children: [
				/* @__PURE__ */ t("span", {
					className: "flex h-8 w-8 shrink-0 items-center justify-center text-white/70",
					children: e
				}),
				/* @__PURE__ */ t("span", {
					className: "whitespace-nowrap pr-1 text-sm font-medium",
					children: r
				}),
				/* @__PURE__ */ t("div", { className: "mx-1 h-4 w-px bg-white/16" }),
				f && /* @__PURE__ */ t("button", {
					type: "button",
					onClick: () => {
						E(), T.current?.(), D();
					},
					className: "hidden h-8 cursor-pointer items-center whitespace-nowrap rounded-md px-2.5 text-sm font-medium text-white/55 transition-colors hover:bg-white/10 hover:text-white/85 md:flex",
					children: f
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					onClick: () => {
						E(), w.current(), D();
					},
					className: "flex h-8 cursor-pointer items-center whitespace-nowrap rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-white/10",
					children: d
				}),
				/* @__PURE__ */ t("button", {
					type: "button",
					onClick: D,
					className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-white/40 transition-colors hover:bg-white/10 hover:text-white",
					"aria-label": "Dismiss",
					children: /* @__PURE__ */ t(j, { size: 14 })
				}),
				/* @__PURE__ */ t("div", {
					className: "pointer-events-none absolute inset-x-4 bottom-1.5 h-px overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ t("div", {
						ref: S,
						className: "undo-toast-progress h-full origin-left bg-white/35",
						style: {
							animationDuration: `${s}ms`,
							animationDelay: `${I}ms`
						}
					})
				})
			]
		})
	}), document.body);
}
//#endregion
//#region src/components/atoms/Avatar.tsx
function L({ initials: e, size: n = "sm" }) {
	return n === "md" ? /* @__PURE__ */ t("span", {
		className: "flex h-8 w-8 items-center justify-center rounded-sm bg-accent-muted text-sm font-medium text-gray-900",
		children: e
	}) : /* @__PURE__ */ t("span", {
		className: "flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900",
		children: e
	});
}
//#endregion
//#region src/components/atoms/FilterBar.tsx
function R({ options: e, value: i, onChange: a, className: o = "" }) {
	return /* @__PURE__ */ t("div", {
		className: `flex items-center gap-0 ${o}`,
		children: e.map((o, s) => /* @__PURE__ */ n(r.Fragment, { children: [/* @__PURE__ */ t("button", {
			type: "button",
			onClick: () => a(o.value),
			className: `text-xs transition-colors cursor-pointer ${i === o.value ? "text-gray-900 font-medium" : "text-gray-400 hover:text-gray-600"}`,
			children: o.label
		}), s < e.length - 1 && /* @__PURE__ */ t("span", {
			className: "text-xs text-gray-300 mx-1.5",
			children: "·"
		})] }, o.value))
	});
}
//#endregion
//#region src/components/atoms/Checkbox.tsx
function ge({ checked: e, onChange: n, size: r = "md" }) {
	let i = r === "sm" ? "w-4 h-4" : "w-5 h-5", a = r === "sm" ? 10 : 12;
	return /* @__PURE__ */ t("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": e,
		onClick: () => n?.(!e),
		className: `${i} rounded flex items-center justify-center border-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1 ${e ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300 hover:border-gray-400"}`,
		children: e && /* @__PURE__ */ t(f, {
			size: a,
			className: "text-white",
			strokeWidth: 3
		})
	});
}
//#endregion
//#region src/components/atoms/Tooltip.tsx
function z({ content: e, delay: r = 500, className: i = "relative inline-flex", children: a }) {
	let [o, s] = l(!1), u = c(null);
	function d() {
		u.current = setTimeout(() => s(!0), r);
	}
	function f() {
		u.current && clearTimeout(u.current), s(!1);
	}
	return /* @__PURE__ */ n("div", {
		className: i,
		onMouseEnter: d,
		onMouseLeave: f,
		children: [a, o && /* @__PURE__ */ t("div", {
			className: "absolute top-full left-1/2 -translate-x-1/2 mt-1.5 z-50 pointer-events-none whitespace-nowrap",
			children: e
		})]
	});
}
//#endregion
//#region src/components/atoms/Collapsible.tsx
function _e({ label: e, children: r, defaultOpen: i = !1, open: a, onOpenChange: o }) {
	let [s, c] = l(i), u = a === void 0 ? s : a;
	function d() {
		let e = !u;
		a === void 0 && c(e), o?.(e);
	}
	return /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ n("button", {
		type: "button",
		onClick: d,
		className: "flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer",
		children: [/* @__PURE__ */ t(m, {
			size: 13,
			className: `transition-transform duration-150 ${u ? "rotate-180" : ""}`
		}), e]
	}), u && /* @__PURE__ */ t("div", {
		className: "mt-3",
		children: r
	})] });
}
//#endregion
//#region src/components/atoms/IconButton.tsx
function B({ icon: e, label: n, size: r = "md", onClick: i, className: a = "" }) {
	let o = r === "sm" ? "h-7 w-7" : "h-8 w-8";
	return /* @__PURE__ */ t("button", {
		type: "button",
		"aria-label": n,
		onClick: i,
		className: `flex ${o} items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer ${a}`,
		children: e
	});
}
//#endregion
//#region src/components/atoms/PageTitle.tsx
function V({ children: e }) {
	return /* @__PURE__ */ t("h1", {
		className: "text-xl font-semibold tracking-tight text-gray-900 md:text-2xl",
		children: e
	});
}
//#endregion
//#region src/components/atoms/SectionTitle.tsx
function H({ children: e }) {
	return /* @__PURE__ */ t("h2", {
		className: "text-md font-semibold tracking-[0.01em] text-gray-900",
		children: e
	});
}
//#endregion
//#region src/components/molecules/CommandItem.tsx
function U({ icon: e, label: r, shortcut: i, active: a, onClick: o }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: o,
		className: `group flex w-full items-center gap-3 px-4 py-1.5 text-sm transition-colors ${a ? "font-medium text-gray-900" : "text-gray-500 hover:text-gray-700"}`,
		children: [
			/* @__PURE__ */ t("span", {
				className: "shrink-0 opacity-70",
				children: e
			}),
			/* @__PURE__ */ t("span", {
				className: "flex-1 text-left",
				children: r
			}),
			i && /* @__PURE__ */ t("span", {
				className: `shrink-0 transition-opacity ${a ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
				children: /* @__PURE__ */ t(F, { keys: i })
			})
		]
	});
}
//#endregion
//#region src/components/molecules/IconButtonGroup.tsx
function ve({ buttons: e, size: n = "md", className: r = "" }) {
	return /* @__PURE__ */ t("div", {
		className: `flex items-center gap-1 text-gray-400 ${r}`,
		children: e.map((e) => /* @__PURE__ */ t(B, {
			icon: e.icon,
			label: e.label,
			size: e.size ?? n,
			onClick: e.onClick
		}, e.label))
	});
}
//#endregion
//#region src/components/molecules/ListItem.tsx
function ye({ leading: e, title: r, subtitle: i, trailing: a, className: o = "" }) {
	return /* @__PURE__ */ n("div", {
		className: `flex items-center justify-between rounded-lg shadow-card bg-surface px-5 py-4 ${o}`,
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-center gap-3 min-w-0",
			children: [e, /* @__PURE__ */ n("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ t("p", {
					className: "text-base font-medium text-gray-900",
					children: r
				}), i && /* @__PURE__ */ t("p", {
					className: "text-sm text-gray-400",
					children: i
				})]
			})]
		}), a && /* @__PURE__ */ t("div", {
			className: "flex shrink-0 items-center gap-3 ml-3",
			children: a
		})]
	});
}
//#endregion
//#region src/components/molecules/PageHeader.tsx
function be({ title: e, action: r }) {
	return /* @__PURE__ */ n("div", {
		className: "mb-6 flex items-center justify-between",
		children: [/* @__PURE__ */ t(V, { children: e }), r]
	});
}
//#endregion
//#region src/components/molecules/SectionHeader.tsx
function W({ icon: e, title: r, description: i, trailing: a }) {
	return /* @__PURE__ */ n("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-center gap-2",
			children: [
				e && /* @__PURE__ */ t("span", {
					className: "text-gray-400 shrink-0",
					children: e
				}),
				/* @__PURE__ */ t(H, { children: r }),
				a
			]
		}), i && /* @__PURE__ */ t("p", {
			className: "mt-1 text-sm text-gray-500",
			children: i
		})]
	});
}
//#endregion
//#region src/components/molecules/StatCard.tsx
function xe({ label: r, value: i, icon: a, onClick: o }) {
	let s = "rounded-lg border border-gray-200 bg-surface px-4 py-3 text-left w-full" + (o ? " hover:border-gray-300 transition-colors cursor-pointer" : ""), c = /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ n("div", {
		className: "flex items-center gap-2 mb-1",
		children: [a, /* @__PURE__ */ t("span", {
			className: "text-xs text-gray-500",
			children: r
		})]
	}), /* @__PURE__ */ t("p", {
		className: "text-base font-semibold text-gray-900",
		children: i
	})] });
	return o ? /* @__PURE__ */ t("button", {
		type: "button",
		onClick: o,
		className: s,
		children: c
	}) : /* @__PURE__ */ t("div", {
		className: s,
		children: c
	});
}
//#endregion
//#region src/components/organisms/CardSection.tsx
function Se({ header: e, children: r, className: i = "", variant: a = "default" }) {
	return /* @__PURE__ */ n("div", {
		className: `${a === "danger" ? "rounded-lg border border-error/20 bg-surface p-6" : "rounded-lg shadow-card bg-surface p-6"} ${i}`,
		children: [e && /* @__PURE__ */ t(W, { ...e }), r]
	});
}
//#endregion
//#region src/components/theme/ThemeProvider.tsx
var G = i(null);
function Ce() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function K({ children: e }) {
	let [n, r] = l(() => localStorage.getItem("cirrux-theme") || "light"), i = n === "system" ? Ce() : n;
	return o(() => {
		localStorage.setItem("cirrux-theme", n), document.documentElement.setAttribute("data-theme", i);
	}, [n, i]), o(() => {
		if (n !== "system") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
		};
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [n]), /* @__PURE__ */ t(G.Provider, {
		value: {
			theme: n,
			setTheme: r,
			resolved: i
		},
		children: e
	});
}
function q() {
	let e = a(G);
	if (!e) throw Error("useTheme must be used within ThemeProvider");
	return e;
}
//#endregion
//#region src/components/organisms/CommandPalette.tsx
function J({ open: r, onClose: i }) {
	let a = P(), { setTheme: u } = q(), [d, f] = l(""), [p, m] = l(0), _ = c(null), y = s(() => [
		{
			label: "Mail",
			items: [
				{
					id: "compose",
					label: "Compose",
					icon: /* @__PURE__ */ t(T, { size: 15 }),
					shortcut: ["C"],
					onAction: () => a("/compose")
				},
				{
					id: "reply",
					label: "Reply",
					icon: /* @__PURE__ */ t(E, { size: 15 }),
					shortcut: ["R"],
					onAction: () => {}
				},
				{
					id: "forward",
					label: "Forward",
					icon: /* @__PURE__ */ t(h, { size: 15 }),
					shortcut: ["F"],
					onAction: () => {}
				}
			]
		},
		{
			label: "Thread",
			items: [
				{
					id: "copy-link",
					label: "Copy thread link",
					icon: /* @__PURE__ */ t(g, { size: 15 }),
					onAction: () => {}
				},
				{
					id: "select",
					label: "Select thread",
					icon: /* @__PURE__ */ t(O, { size: 15 }),
					shortcut: ["X"],
					onAction: () => {}
				},
				{
					id: "open",
					label: "Open",
					icon: /* @__PURE__ */ t(v, { size: 15 }),
					shortcut: ["Enter"],
					onAction: () => {}
				}
			]
		},
		{
			label: "Theme",
			items: [
				{
					id: "theme-light",
					label: "Light",
					icon: /* @__PURE__ */ t(A, { size: 15 }),
					onAction: () => u("light")
				},
				{
					id: "theme-dark",
					label: "Dark",
					icon: /* @__PURE__ */ t(x, { size: 15 }),
					onAction: () => u("dark")
				},
				{
					id: "theme-system",
					label: "System",
					icon: /* @__PURE__ */ t(b, { size: 15 }),
					onAction: () => u("system")
				}
			]
		}
	], [a, u]), S = s(() => {
		let e = d.trim().toLowerCase();
		return e ? y.map((t) => ({
			...t,
			items: t.items.filter((t) => t.label.toLowerCase().includes(e))
		})).filter((e) => e.items.length > 0) : y;
	}, [d, y]), C = s(() => S.flatMap((e) => e.items), [S]);
	if (o(() => {
		r && (f(""), m(0), requestAnimationFrame(() => _.current?.focus()));
	}, [r]), o(() => {
		m(0);
	}, [d]), o(() => {
		if (!r) return;
		let e = (e) => {
			if (e.key === "Escape") {
				i();
				return;
			}
			if (e.key === "ArrowDown") {
				e.preventDefault(), m((e) => Math.min(e + 1, C.length - 1));
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault(), m((e) => Math.max(e - 1, 0));
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault();
				let t = C[p];
				t && (t.onAction(), i());
			}
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		r,
		i,
		C,
		p
	]), !r) return null;
	let w = 0;
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("div", {
		className: "fixed inset-0 z-50 bg-black/20",
		onClick: i,
		"aria-hidden": "true"
	}), /* @__PURE__ */ n("div", {
		role: "dialog",
		"aria-label": "Command palette",
		className: "fixed left-1/2 top-[18%] z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-surface shadow-xl",
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-center gap-3 border-b border-gray-100 px-4",
			children: [/* @__PURE__ */ t(D, {
				size: 16,
				className: "shrink-0 text-gray-400"
			}), /* @__PURE__ */ t("input", {
				ref: _,
				type: "text",
				value: d,
				onChange: (e) => f(e.target.value),
				placeholder: "Search actions...",
				className: "flex-1 border-0 bg-transparent py-3.5 text-sm text-gray-900 placeholder:text-gray-400 !outline-none"
			})]
		}), /* @__PURE__ */ t("div", {
			className: "max-h-72 overflow-y-auto py-1",
			children: S.length === 0 ? /* @__PURE__ */ t("p", {
				className: "px-4 py-8 text-center text-sm text-gray-400",
				children: "No actions found"
			}) : S.map((e) => /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("div", {
				className: "px-4 pb-1 pt-3 text-xs font-medium text-gray-400",
				children: e.label
			}), e.items.map((e) => {
				let n = w++;
				return /* @__PURE__ */ t(U, {
					icon: e.icon,
					label: e.label,
					shortcut: e.shortcut,
					active: p === n,
					onClick: () => {
						e.onAction(), i();
					}
				}, e.id);
			})] }, e.label))
		})]
	})] });
}
//#endregion
//#region src/components/organisms/SelectionBar.tsx
function we({ action: e }) {
	let [r, i] = l(!1), a = c(null);
	function o() {
		a.current = setTimeout(() => i(!0), 500);
	}
	function s() {
		a.current && clearTimeout(a.current), i(!1);
	}
	return /* @__PURE__ */ n("div", {
		className: "relative",
		onMouseEnter: o,
		onMouseLeave: s,
		children: [/* @__PURE__ */ t("button", {
			type: "button",
			"aria-label": e.label,
			onClick: e.onClick,
			className: "flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
			children: e.icon
		}), r && e.shortcut && /* @__PURE__ */ t("div", {
			className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none whitespace-nowrap",
			children: /* @__PURE__ */ t(F, { keys: e.shortcut })
		})]
	});
}
function Te({ count: e, actions: r, onClose: i }) {
	return u(/* @__PURE__ */ t("div", {
		className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]",
		children: /* @__PURE__ */ n("div", {
			className: "flex items-center gap-1 rounded-xl bg-gray-900 px-4 py-1.5 shadow-lg shadow-black/20",
			children: [
				/* @__PURE__ */ n("span", {
					className: "text-sm font-medium text-white pr-2 select-none",
					children: [e, " selected"]
				}),
				/* @__PURE__ */ t("div", { className: "w-px h-5 bg-white/20 mx-1" }),
				/* @__PURE__ */ t("div", {
					className: "flex items-center gap-0.5",
					children: r.map((e) => /* @__PURE__ */ t(we, { action: e }, e.label))
				}),
				/* @__PURE__ */ t("div", { className: "w-px h-5 bg-white/20 mx-1" }),
				/* @__PURE__ */ t("button", {
					type: "button",
					"aria-label": "Clear selection",
					onClick: i,
					className: "flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
					children: /* @__PURE__ */ t(j, { size: 15 })
				})
			]
		})
	}), document.body);
}
//#endregion
//#region src/components/layout/SidebarLayoutContext.tsx
var Y = i(null);
function X() {
	let e = a(Y);
	if (!e) throw Error("useSidebarLayout must be used within AppShell");
	return e;
}
//#endregion
//#region src/components/layout/AppShell.tsx
function Z() {
	let [e, n] = l(!1), [r, i] = l(!1);
	return /* @__PURE__ */ t(K, { children: /* @__PURE__ */ t(Y.Provider, {
		value: {
			collapsed: e,
			toggleCollapsed: () => n((e) => !e),
			mobileOpen: r,
			setMobileOpen: i
		},
		children: /* @__PURE__ */ t("div", {
			className: "h-screen overflow-y-auto overflow-x-hidden bg-surface",
			children: /* @__PURE__ */ t(N, {})
		})
	}) });
}
//#endregion
//#region src/components/layout/Sidebar.tsx
function Ee({ className: e = "" }) {
	let { setMobileOpen: n } = X();
	return /* @__PURE__ */ t("button", {
		type: "button",
		onClick: () => n(!0),
		"aria-label": "Open menu",
		className: `flex md:hidden h-8 w-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${e}`,
		children: /* @__PURE__ */ t(y, { size: 18 })
	});
}
function Q({ appSwitcher: r, primaryAction: i, groups: a, footer: s }) {
	let { collapsed: u, toggleCollapsed: d, mobileOpen: f, setMobileOpen: p } = X(), [h, g] = l(!1), _ = c(null);
	return o(() => {
		if (!h) return;
		let e = (e) => {
			_.current && !_.current.contains(e.target) && g(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [h]), /* @__PURE__ */ n("div", {
		className: "\n        top-0 left-0 flex h-screen flex-col overflow-hidden bg-white p-4\n        transition-[width,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]\n        max-md:absolute max-md:w-72\n        md:fixed md:w-[var(--sidebar-width)]\n      ",
		children: [
			/* @__PURE__ */ n("div", {
				className: `mb-6 flex items-center ${u ? "max-md:justify-between md:justify-center" : "justify-between"}`,
				children: [
					(!u || f) && r && (() => {
						let e = r.apps.find((e) => e.id === r.currentAppId);
						return /* @__PURE__ */ n("div", {
							className: "relative",
							ref: _,
							children: [/* @__PURE__ */ n("button", {
								type: "button",
								onClick: () => g((e) => !e),
								className: "flex items-center gap-1.5 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer",
								"aria-haspopup": "true",
								"aria-expanded": h,
								children: [
									e && /* @__PURE__ */ t("span", {
										className: "flex items-center",
										children: e.icon
									}),
									/* @__PURE__ */ t("span", {
										className: "text-sm font-medium tracking-[0.02em]",
										children: e?.label
									}),
									/* @__PURE__ */ t(m, {
										size: 13,
										className: `text-gray-400 transition-transform duration-150 ${h ? "rotate-180" : ""}`
									})
								]
							}), h && /* @__PURE__ */ t("div", {
								className: "absolute left-0 top-full z-50 mt-1.5 rounded-lg border border-gray-100 bg-white py-1 shadow-md max-md:w-52 md:w-44",
								children: r.apps.map((e) => /* @__PURE__ */ n("button", {
									type: "button",
									onClick: () => {
										g(!1), e.onClick?.();
									},
									className: `flex w-full items-center gap-2.5 px-3 text-sm transition-colors hover:bg-gray-50 max-md:py-2.5 md:py-1.5 ${e.id === r.currentAppId ? "font-medium text-gray-900" : "text-gray-500"}`,
									children: [/* @__PURE__ */ t("span", {
										className: "opacity-60",
										children: e.icon
									}), e.label]
								}, e.id))
							})]
						});
					})(),
					/* @__PURE__ */ t("button", {
						type: "button",
						onClick: d,
						"aria-label": u ? "Expand sidebar" : "Collapse sidebar",
						className: "hidden md:flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200/60 hover:text-gray-600 cursor-pointer",
						children: /* @__PURE__ */ t(S, { size: 18 })
					}),
					/* @__PURE__ */ t("button", {
						type: "button",
						onClick: () => p(!1),
						"aria-label": "Close menu",
						className: "flex md:hidden h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200/60 hover:text-gray-600 cursor-pointer",
						children: /* @__PURE__ */ t(j, { size: 18 })
					})
				]
			}),
			(() => {
				let r = !!i.shortcut && !u && !f, a = `
          mb-4 flex w-full items-center rounded-md px-2.5 text-sm font-medium text-gray-700 bg-gray-100 transition-colors hover:bg-gray-200 hover:text-gray-900
          max-md:gap-2.5 max-md:py-2 md:py-1.5
          ${u ? "md:justify-center md:px-0" : "gap-2.5"}
        `, o = /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", {
					className: "opacity-70",
					children: i.icon
				}), (!u || f) && i.label] }), s = i.href ? /* @__PURE__ */ t(M, {
					to: i.href,
					"aria-label": i.label,
					title: u && !f ? i.label : void 0,
					onClick: () => p(!1),
					className: a,
					children: o
				}) : /* @__PURE__ */ t("button", {
					type: "button",
					"aria-label": i.label,
					title: u && !f ? i.label : void 0,
					onClick: () => {
						p(!1), i.onClick?.();
					},
					className: `cursor-pointer ${a}`,
					children: o
				});
				return r ? /* @__PURE__ */ t(z, {
					content: /* @__PURE__ */ t(F, { keys: i.shortcut }),
					className: "relative w-full",
					children: s
				}) : s;
			})(),
			/* @__PURE__ */ t("nav", {
				className: `flex flex-1 flex-col overflow-y-auto ${u && !f ? "gap-8" : "gap-6"}`,
				children: a.map((r) => /* @__PURE__ */ n("div", { children: [(!u || f) && /* @__PURE__ */ t("div", {
					className: "mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400",
					children: r.label
				}), /* @__PURE__ */ t("div", {
					className: `flex flex-col ${u && !f ? "gap-3" : "gap-1"}`,
					children: r.items.map((r) => {
						let i = (i) => /* @__PURE__ */ n("div", {
							title: u && !f ? r.label : void 0,
							className: `
                      flex items-center justify-between rounded-md text-base transition-colors
                      max-md:py-1.5 md:py-0.5
                      ${u && !f ? "md:justify-center" : ""}
                      ${i ? "font-medium text-gray-900" : "text-gray-500 hover:text-gray-700"}
                    `,
							children: [/* @__PURE__ */ n("span", {
								className: `flex items-center ${u && !f ? "" : "gap-2.5"}`,
								children: [/* @__PURE__ */ t("span", {
									className: `opacity-70 transition-transform duration-200 ${u && !f ? "scale-110" : "scale-100"}`,
									children: r.icon
								}), (!u || f) && /* @__PURE__ */ t("span", { children: r.label })]
							}), (!u || f) && /* @__PURE__ */ t("span", {
								className: "relative flex items-center",
								children: r.shortcut ? /* @__PURE__ */ n(e, { children: [(r.count ?? 0) > 0 && /* @__PURE__ */ t("span", {
									className: "absolute inset-0 flex items-center justify-end text-xs opacity-70 group-hover:opacity-0",
									children: r.count
								}), /* @__PURE__ */ t("span", {
									className: "opacity-0 group-hover:opacity-100",
									children: /* @__PURE__ */ t(F, { keys: r.shortcut })
								})] }) : (r.count ?? 0) > 0 ? /* @__PURE__ */ t("span", {
									className: "text-xs opacity-70",
									children: r.count
								}) : /* @__PURE__ */ t("span", {
									className: "invisible",
									children: /* @__PURE__ */ t(F, { keys: ["X"] })
								})
							})]
						});
						return r.href ? /* @__PURE__ */ t(ee, {
							to: r.href,
							end: r.end,
							onClick: () => p(!1),
							className: "group",
							children: ({ isActive: e }) => i(e)
						}, r.href) : /* @__PURE__ */ t("button", {
							type: "button",
							onClick: () => {
								p(!1), r.onClick?.();
							},
							className: "group w-full text-left cursor-pointer",
							children: i(r.isActive ?? !1)
						}, r.label);
					})
				})] }, r.label))
			}),
			s && /* @__PURE__ */ t("div", {
				className: "mt-4 border-t border-gray-100 pt-4",
				children: s
			})
		]
	});
}
function $(r) {
	let { mobileOpen: i, setMobileOpen: a } = X();
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("aside", {
		className: "hidden md:block w-[var(--sidebar-width)] shrink-0 transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
		children: /* @__PURE__ */ t(Q, { ...r })
	}), /* @__PURE__ */ n("div", {
		className: `fixed inset-0 z-40 md:hidden ${i ? "" : "pointer-events-none"}`,
		children: [/* @__PURE__ */ t("div", {
			className: `absolute inset-0 bg-black/20 transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`,
			onClick: () => a(!1)
		}), /* @__PURE__ */ t("div", {
			className: `relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${i ? "translate-x-0" : "-translate-x-full"}`,
			children: /* @__PURE__ */ t(Q, { ...r })
		})]
	})] });
}
//#endregion
//#region src/components/layout/AppLayout.tsx
function De({ primaryAction: e, groups: r, contentClassName: i = "px-4 py-4 md:px-6 md:py-6" }) {
	let { collapsed: a, setMobileOpen: o } = X(), [s, c] = l(!1);
	return /* @__PURE__ */ n("div", {
		className: "flex min-h-screen",
		style: { "--sidebar-width": a ? "5rem" : "15rem" },
		children: [
			/* @__PURE__ */ t($, {
				primaryAction: e,
				groups: r
			}),
			/* @__PURE__ */ n("main", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ n("header", {
					className: "flex h-12 shrink-0 items-center gap-1 px-2 md:px-4",
					children: [/* @__PURE__ */ t(B, {
						icon: /* @__PURE__ */ t(y, { size: 18 }),
						label: "Open menu",
						onClick: () => o(!0),
						className: "md:hidden"
					}), /* @__PURE__ */ n("div", {
						className: "ml-auto flex min-w-0 items-center gap-1",
						children: [
							/* @__PURE__ */ t("button", {
								type: "button",
								onClick: () => c(!0),
								className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
								"aria-label": "Open command palette",
								children: /* @__PURE__ */ t(k, { size: 16 })
							}),
							/* @__PURE__ */ t(M, {
								to: "/search",
								className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors",
								"aria-label": "Search",
								children: /* @__PURE__ */ t(D, { size: 16 })
							}),
							/* @__PURE__ */ n(M, {
								to: "/settings/profile",
								className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors",
								children: [/* @__PURE__ */ t("span", {
									className: "hidden sm:inline",
									children: "Kay"
								}), /* @__PURE__ */ t(L, { initials: "K" })]
							})
						]
					})]
				}), /* @__PURE__ */ t("div", {
					className: i,
					children: /* @__PURE__ */ t(N, {})
				})]
			}),
			/* @__PURE__ */ t(J, {
				open: s,
				onClose: () => c(!1)
			})
		]
	});
}
//#endregion
//#region src/components/layout/SidebarCollapseButton.tsx
function Oe({ collapsed: e }) {
	let { toggleCollapsed: n } = X();
	return /* @__PURE__ */ t("button", {
		type: "button",
		onClick: n,
		"aria-label": e ? "Expand sidebar" : "Collapse sidebar",
		title: e ? "Expand sidebar" : "Collapse sidebar",
		className: `
        mt-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors
        hover:bg-gray-100 hover:text-gray-700
        ${e ? "self-center" : "self-start"}
      `,
		children: t(e ? w : C, { size: 15 })
	});
}
//#endregion
//#region src/components/layout/TopBar.tsx
function ke() {
	let r = te().pathname.startsWith("/settings");
	return /* @__PURE__ */ n("header", {
		className: "sticky top-0 z-10 flex h-12 items-center justify-between border-b border-black/[0.04] bg-surface/80 px-4 backdrop-blur-xl",
		children: [/* @__PURE__ */ n(M, {
			to: "/",
			className: "flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700",
			"aria-label": "Back to inbox",
			children: [/* @__PURE__ */ t(v, { size: 18 }), /* @__PURE__ */ t("span", {
				className: "text-sm font-medium tracking-[0.02em] text-gray-900",
				children: "Cirrux"
			})]
		}), /* @__PURE__ */ n("div", {
			className: "flex items-center gap-1",
			children: [!r && /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("button", {
				className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer",
				"aria-label": "Commands",
				children: /* @__PURE__ */ t(b, { size: 16 })
			}), /* @__PURE__ */ t("button", {
				className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer",
				"aria-label": "Search",
				children: /* @__PURE__ */ t(D, { size: 16 })
			})] }), /* @__PURE__ */ n(M, {
				to: "/settings/profile",
				className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors",
				children: ["Kay", /* @__PURE__ */ t("span", {
					className: "flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900",
					children: "K"
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/templates/FocusedLayout.tsx
function Ae() {
	let [e, r] = l(!1);
	return /* @__PURE__ */ n("div", {
		className: "flex min-h-screen flex-col bg-surface",
		children: [
			/* @__PURE__ */ n("header", {
				className: "flex h-12 shrink-0 items-center gap-1 px-2 md:px-4",
				children: [/* @__PURE__ */ t(M, {
					to: "/",
					className: "flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
					"aria-label": "Back to inbox",
					children: /* @__PURE__ */ t(v, { size: 18 })
				}), /* @__PURE__ */ n("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ t("button", {
							type: "button",
							onClick: () => r(!0),
							className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
							"aria-label": "Open command palette",
							children: /* @__PURE__ */ t(k, { size: 16 })
						}),
						/* @__PURE__ */ t(M, {
							to: "/search",
							className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
							"aria-label": "Search",
							children: /* @__PURE__ */ t(D, { size: 16 })
						}),
						/* @__PURE__ */ n(M, {
							to: "/settings/profile",
							className: "flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700",
							children: [/* @__PURE__ */ t("span", {
								className: "hidden sm:inline",
								children: "Kay"
							}), /* @__PURE__ */ t(L, { initials: "K" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ t("div", {
				className: "flex flex-1 flex-col",
				children: /* @__PURE__ */ t(N, {})
			}),
			/* @__PURE__ */ t(J, {
				open: e,
				onClose: () => r(!1)
			})
		]
	});
}
//#endregion
//#region src/components/theme/ThemeSwitcher.tsx
var je = [
	{
		value: "system",
		label: "System",
		icon: b
	},
	{
		value: "light",
		label: "Light",
		icon: A
	},
	{
		value: "dark",
		label: "Dark",
		icon: x
	}
];
function Me() {
	let { theme: e, setTheme: r } = q(), [i, a] = l(!1), s = c(null);
	return o(() => {
		if (!i) return;
		let e = (e) => {
			s.current && !s.current.contains(e.target) && a(!1);
		}, t = (e) => {
			e.key === "Escape" && a(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [i]), /* @__PURE__ */ n("div", {
		ref: s,
		className: "relative",
		children: [/* @__PURE__ */ t("button", {
			type: "button",
			onClick: () => a(!i),
			className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 md:h-8 md:w-auto md:gap-1.5 md:px-2",
			"aria-label": "Theme",
			children: /* @__PURE__ */ t(k, { size: 16 })
		}), i && /* @__PURE__ */ n("div", {
			className: "absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-surface py-1 shadow-lg",
			children: [/* @__PURE__ */ t("div", {
				className: "px-3 py-2 text-xs font-medium text-gray-400",
				children: "Theme"
			}), je.map(({ value: i, label: o, icon: s }) => /* @__PURE__ */ n("button", {
				type: "button",
				onClick: () => {
					r(i), a(!1);
				},
				className: `
                flex w-full cursor-pointer items-center gap-2.5 px-3 py-1.5 text-sm transition-colors
                ${e === i ? "bg-gray-50 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}
              `,
				children: [
					/* @__PURE__ */ t(s, { size: 15 }),
					/* @__PURE__ */ t("span", {
						className: "flex-1 text-left",
						children: o
					}),
					e === i && /* @__PURE__ */ t(f, {
						size: 14,
						className: "text-gray-400"
					})
				]
			}, i))]
		})]
	});
}
//#endregion
export { De as AppLayout, Z as AppShell, L as Avatar, re as Badge, oe as Button, Se as CardSection, ge as Checkbox, _e as Collapsible, U as CommandItem, J as CommandPalette, se as ContextMenu, ce as EmptyState, R as FilterBar, Ae as FocusedLayout, B as IconButton, ve as IconButtonGroup, le as Input, F as KbdShortcut, ye as ListItem, Ee as MobileMenuButton, be as PageHeader, V as PageTitle, W as SectionHeader, H as SectionTitle, ue as Select, Te as SelectionBar, $ as Sidebar, Oe as SidebarCollapseButton, Y as SidebarLayoutContext, xe as StatCard, fe as StatusMessage, pe as Textarea, K as ThemeProvider, Me as ThemeSwitcher, me as Toggle, z as Tooltip, ke as TopBar, he as UndoToast, X as useSidebarLayout, q as useTheme };

//# sourceMappingURL=index.js.map