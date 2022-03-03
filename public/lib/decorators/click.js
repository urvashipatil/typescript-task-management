export function click(selector, dataAttr) {
    return function (target, key, desc) {
        console.log(target, selector, desc.value);
        const method = desc.value;
        document.addEventListener("click", (e) => {
            if (e.target.className == selector) {
                console.log("Added");
                let params;
                if (dataAttr) {
                    params = e.target.dataset[dataAttr];
                }
                method(params);
            }
        });
    };
}
