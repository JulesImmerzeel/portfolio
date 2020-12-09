export default function typeWriter(txt, id) {
    return new Promise((resolve, reject) => {
        let i = 0;
        const x = () => {
            document.getElementById(id).innerHTML += txt.charAt(i);
            i++;
            if (i < txt.length) {
                setTimeout(x, 80);
            }
            else {
                resolve();
            }
        }
        x();
    })
}