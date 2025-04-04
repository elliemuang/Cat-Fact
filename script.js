document.getElementById('getFact').addEventListener('click', async () => {
    const factDisplay = document.getElementById('fact');

    try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    factDisplay.textContent = data.fact;
} catch (error) {
    factDisplay.textContent = "Woah, gotta be kittin me, there's no facts right meow. sowwy 😿";
}
});