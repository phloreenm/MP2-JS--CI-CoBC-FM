// Source: https://onestepcode.com/zoom-pan-effect-svg/ & https://gist.github.com/fabrizzio-gz/8458bb13418e5bb6ea49133ba122930c
// https://thecompetentdev.com/weeklyjstips/tips/47_svg_viewbox_zoom/
const svgElement = document.getElementById("svg");


const [, , originalWidth, originalHeight] = svgElement.getAttribute("viewBox").split(" ").map(Number);
svgElement.addEventListener("mousemove", (event) => {
    const {
        top,
        left,
        width,
        height
    } = svgElement.getBoundingClientRect();

    const eventTop = event.clientY - top;
    const eventLeft = event.clientX - left;

    svgElement.setAttribute("viewBox", `5500 5000 3800 3400`)
});
svgElement.addEventListener("mouseout", () => {
   
    svgElement.setAttribute("viewBox", `2754 1161 ${originalWidth} ${originalHeight}`);
});