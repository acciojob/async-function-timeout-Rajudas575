//your JS code here. If required.

async function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

document.getElementById('btn').addEventListener('click', async function () {
  
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value);

    if (!text || isNaN(delayTime) || delayTime < 0) {
        document.getElementById('output').textContent = "Please enter valid text and delay.";
        return;
    }

    await delay(delayTime);
    document.getElementById('output').textContent = text;
});
