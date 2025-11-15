<><canvas id="myCanvas" width="300" height="200" style="border:1px solid #000"></canvas><script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

    // Fill circle
    ctx.beginPath();
    ctx.arc(150, 100, 60, 0, Math.PI * 2);
    ctx.fillStyle = "lightblue";
    ctx.fill();

    // Stroke border
    ctx.strokeStyle = "black";
    ctx.stroke();
</script></>



<!DOCTYPE html>
<html>
<body>

<h3>SVG Figure → Export as PNG</h3>

<!-- Step 1: SVG figure -->
<svg id="mysvg" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- background -->
  <rect width="300" height="200" fill="#fafafa"/>

  <!-- text -->
  <text x="150" y="40" font-size="22" text-anchor="middle" fill="black">
    Sample Figure
  </text>

  <!-- shapes -->
  <circle cx="100" cy="120" r="40" fill="lightblue" stroke="black"/>
  <rect x="160" y="80" width="80" height="80" fill="lightgreen" stroke="black"/>
</svg>

<br><br>

<!-- Step 2: Export button -->
<button onclick="exportPNG()">Download PNG</button>

<!-- Hidden canvas -->
<canvas id="canvas" width="300" height="200" style="display:none"></canvas>

<script>
function exportPNG() {
  const svg = document.getElementById("mysvg");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Convert SVG to a data URL
  const data = new XMLSerializer().serializeToString(svg);
  const svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  // Draw SVG on Canvas
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);

    // Create PNG download
    const pngURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = pngURL;
    a.download = "figure.png";
    a.click();

    // cleanup
    URL.revokeObjectURL(url);
  };
  img.src = url;
}
</script>

</body>
</html>
