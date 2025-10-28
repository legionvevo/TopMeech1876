document.getElementById('lowestBtn').addEventListener('click', async () => {
    const res = await fetch('/api/lowest-number');
    const data = await res.json();
    document.getElementById('result').innerText = Lowest number: ${data.number} (${data.percentage}%);
})
