function e(e){return e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()})}document.querySelectorAll(".field-text").forEach(function(t){var r=t.getAttribute("id"),n=t.getAttribute("name"),l=document.createElement("label");l.htmlFor=r,l.textContent=e(n).toUpperCase(),l.className="field-label",t.insertAdjacentElement("beforebegin",l),t.setAttribute("placeholder",e(n))});
//# sourceMappingURL=index.a51a9c7a.js.map
