export default function AreaChartSB() {
  const rawHTML = `
  <p align="center">
  <iframe src="https://codesandbox.io/embed/stacked-area-zoyce?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="stacked-area"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
  </iframe>
    </p>
  `;
  return <div dangerouslySetInnerHTML={{__html: rawHTML}}></div>;
}
